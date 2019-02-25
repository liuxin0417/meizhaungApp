import { SocketService } from './../../providers/SocketService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter, AttrValue, GoodsMessage, Order } from './../../model/Model';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
declare var wx: any;

@IonicPage()
@Component({
  selector: 'page-shopgoodscar',
  templateUrl: 'shopgoodscar.html',
})
export class ShopgoodscarPage {

  img = "assets/imgs/chone.png";
  img2 = "assets/imgs/unchone.png";
  img3 = "assets/imgs/saoma.png";
  goodslist = [];
  orderList = [];
  getType = 0;
  BhList = ['20180226111', '01010110_09', '01010110_09', '01010110_07', '01010110_03',];
  addnum = 0;
  coverflag = false;
  slideflag = false;
  goodsmsg = [];
  imgUrl = [];
  AttrList = [];
  btnflag = false;
  list: any;
  ProductID: any;
  fh: any;
  ProductPrice: any;
  item: any;
  xml: any;
  addListFlag = false;
  ShopID = "";
  persioninfo: any;
  Order = new Order();
  Msg = new GoodsMessage();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,
    public barcodeScanner: BarcodeScanner,
    public socketService: SocketService,
  ) {
  }
  ionViewDidLoad() {
    //console.info("购物车")
    this.storage.get("userinfo").then(val => {
      if (val != null && val != "") {
        this.persioninfo = val.userinform;
        this.Msg.UserID = this.persioninfo.ID;
        this.additem();
      } else {
        this.navCtrl.push('LoginPage');
      }
    });
    /* for (var a = 0; a < this.BhList.length; a++) {
      this.Load(this.BhList[a])
    } */
  }
  ionViewWillEnter() {
    this.socketIoLoad();
  }

  additem() {
    // this.Load(this.BhList[this.addnum], "0101");
    // this.addnum++;
    // if (this.Order != null && this.Order.ID != null) {
    //   this.Load(this.BhList[this.addnum], "0101");
    // } else {
    //   this.CreateOrder("");
    // }

    var that = this;
    if (this.nativeService.isMobile()) {
      this.barcodeScanner.scan().then(data => {
        if (data.cancelled) {
          if (this.goodslist.length <= 0) {
            this.navCtrl.pop();
          } else { }
          return false;
        } else { }
        //var text = data.text;
        var arr = data.text.split("|");
        if (this.Order != null && this.Order.ID != null) {
          this.Load(arr[1], arr[0]);
        } else {
          this.CreateOrder(arr);
        }
      }, (err) => {
        this.nativeService.showToast(err);
      });
    } else {
      wx.scanQRCode({
        desc: 'scanQRCode desc',
        needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
        scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
        success: function (res) {
          // 回调
          var arr = res.resultStr.split("|");
          if (that.Order != null && that.Order.ID != null) {
            that.Load(arr[1], arr[0]);
          } else {
            that.CreateOrder(arr);
          }
        },
        error: function (res) {
          if (res.errMsg.indexOf('function_not_exist') > 0) {
            alert('版本过低请升级')
          }
        }
      });
    }
  }

  gotoSettlement() {
    if (this.goodslist.length == 0) {
      this.nativeService.showToast("请先添加商品再结算");
    } else {
      this.socketService.socket.disconnect();
      this.navCtrl.push("ShopGoodsListPage", {
        listmsg: this.goodslist,
        type: this.getType,
        Order: this.Order
      })
    }
    // this.navCtrl.push("ShopGoodsListPage", {
    //   listmsg: this.goodslist,
    //   type: this.getType,
    //   Order: this.Order
    // })
    ////console.info(this.goodslist);
  }
  Load(bh, shop) {
    //var that = this;
    var userInfo = {
      ProBH: bh,
      ShopBH: shop,
    };
    ////console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1035";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      var list;
      // //console.info(result);
      if (result.Code == 1) {
        // if (result.Data.IsHaveSx == 1) {
        //   list = result.Data;
        //   list.num = 1;
        //   list.type = 0;
        //   list.AttributeDescription = "";
        //   this.item = list;
        //   this.goodsdetail(result.Data.FranchiseeID, result.Data.ProductID);
        // } else {
        if (result.Data != null) {
          list = result.Data;
          list.num = 1;
          list.type = 0;
          if (this.ShopID == "") {
            //console.log("是否进入");
            this.ShopID = list.shopid;
            this.Msg.GroupID = this.ShopID;
            this.socketIoLoad();
          }
          //list.push({"num":1})
          ////console.info(list)
          if (this.goodslist.length != 0) {
            this.compare(list);
          };
          if (this.addListFlag == false) {
            this.goodslist.push(list);
          } else {

          };
          this.HandOrder();
        }

        // }
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  //对比是否添加
  compare(list) {
    this.addListFlag = false;
    for (var n = 0; n < this.goodslist.length; n++) {
      if (this.goodslist[n].ProductBH == list.ProductBH) {
        this.goodslist[n].num++;
        this.addListFlag = true;
      } else {
        //this.addListFlag=false;
      }
    }
  }
  slice(string) {
    if (string != "" && string != null) {
      return string.slice(0, 12) + "..."
    }
  }
  jian(i) {
    if (this.goodslist[i].num > 1) {
      this.goodslist[i].num--;
    } else {

    }
    this.HandOrder();
  }
  add(i) {
    this.goodslist[i].num++;
    this.HandOrder();
  }
  select(num) {
    if (this.getType == 1) {
      this.getType = 0;
    } else {
      this.getType = 1;
    }
    /* this.getType = num; */
    for (var a = 0; a < this.goodslist.length; a++) {
      this.goodslist[a].type = this.getType;
    }
    this.HandOrder();
  }
  selectonme(index, num) {
    if (this.goodslist[index].type == 1) {
      this.goodslist[index].type = 0;
    } else {
      this.goodslist[index].type = 1;
    }
    /* this.goodslist[index].type = num; */
    var num1 = 0;
    var num2 = 0;
    for (var d = 0; d < this.goodslist.length; d++) {
      if (this.goodslist[d].type == 0) {
        num1++;
      } else if (this.goodslist[d].type == 1) {
        num2++;
      }
    }
    ////console.info("1数" + num1 + ",2数" + num2);
    ////console.info(this.goodslist);
    if (num1 != 0 && num2 != 0) {
      this.getType = 2;
    } else if (num1 == 0 && num2 != 0) {
      this.getType = 1;
    } else if (num1 != 0 && num2 == 0) {
      this.getType = 0;
    }
    this.HandOrder();
  }
  delete(i) {
    this.goodslist.splice(i, 1);
  }
  //加载商品详情
  goodsdetail(fh, id) {
    var userInfo = {
      FranchiseeID: fh,
      ID: id,
    }
    var parameter = new Parameter();
    parameter.jyh = "1018";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      ////console.info(result)
      if (result.Code == 1) {
        var slide = JSON.parse(result.Data.PicList);
        this.goodsmsg = result.Data
        this.coverflag = true;
        this.slideflag = true;
        this.ProductID = id;
        this.fh = fh;
        this.ProductPrice = result.Data.ActivityPrice;
        this.AttrList = JSON.parse(result.Data.AttList);
        ////console.info(this.AttrList)
        this.imgUrl = slide.length > 0 ? slide[0].Url : "";
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }
  //选择商品属性
  ChoiceAttr(item, item2) {
    for (var i = 0; i < item.length; i++) {
      item[i].Check = 0;
    }
    item2.Check = 1;
    this.ChangPrice();
  }
  ChangPrice() {
    //console.log("是否进入");
    var array = [];
    for (var i = 0; i < this.AttrList.length; i++) {
      for (var j = 0; j < this.AttrList[i].AttValueList.length; j++) {
        if (this.AttrList[i].AttValueList[j].Check == 1) {
          var obj = new AttrValue();
          obj.title = this.AttrList[i].TextPrompt;
          obj.RelName = this.AttrList[i].AttValueList[j].Value;
          obj.Name = this.AttrList[i].AttValueList[j].Name;
          obj.Value = this.AttrList[i].AttValueList[j].ID;
          array.push(obj);
        }
      }
    }
    for (var b = 0; b < this.AttrList.length; b++) {
      if (array[b] != undefined) {
        if (array[b].Name != undefined) {
          this.btnflag = true;
          // //console.info("执行一");
        } else {
          // //console.info("执行二");
          this.btnflag = false;
        }
      } else {
        // //console.info("执行二");
        this.btnflag = false;
      }

    }
    this.list = array;
    //console.log(array);
    var userInfo = {
      ProductID: this.ProductID,
      lstAttrValue: JSON.stringify(array),
      FranceID: this.fh,
    };
    var parameter = new Parameter();
    parameter.jyh = "1025";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      // //console.info(result)
      if (result.Code == 1) {
        this.xml = result.Msg;
        this.ProductPrice = result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }
  //确定添加商品
  confirme() {
    ////console.info(this.list);
    var type = "";
    if (this.list != '') {
      for (var a = 0; a < this.list.length; a++) {
        type = type + (this.list[a].title + ":" + this.list[a].RelName + ";");
      }
    } else {
      type = "";
    }
    this.item.AttributeDescription = type;
    this.item.xml = this.xml;
    this.item.Price = this.ProductPrice;
    // //console.info(this.item);
    this.goodslist.push(this.item);
    this.slideflag = false;
    setTimeout(() => {
      this.coverflag = false;
    }, 150);
    this.list = "";
    this.btnflag = false;
  }
  hide() {
    this.slideflag = false;
    setTimeout(() => {
      this.coverflag = false;
    }, 150);
  }

  CreateOrder(arr: any) {
    var Info = {
      UserID: this.persioninfo.ID,
    };
    var parameter = new Parameter();
    parameter.jyh = "1072";
    parameter.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(val => {
      var result = JSON.parse(val.result);
      console.log(result);
      if (result.Code == "1") {
        this.Order = result.Data;
        this.Load(arr[1], arr[0]);
      }
    });
  }

  HandOrder() {
    this.Order.Items = this.goodslist;
    this.Order.groupId = this.ShopID;
    this.socketService.socket.emit("groupMessage", this.Order);
    //此处传递过去
  }

  //socket
  socketIoLoad() {
    //console.log(this.Msg);
    if (this.Msg.GroupID != null && this.Msg.UserID != null) {
      this.socketService.socketAuth();
      this.socketService.socket.emit("join", this.Msg);
      this.socketService.socket.on("groupuser", (data) => {
        //console.log(data);
      });
    }
  }
}
