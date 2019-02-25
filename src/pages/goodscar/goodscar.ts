import { Component,Input, Output,EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, App,ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
import { Params } from '../../providers/params';

@IonicPage()
@Component({
  selector: 'page-goodscar',
  templateUrl: 'goodscar.html',
})
export class GoodscarPage {
  img = "assets/imgs/chone.png";
  img2 = "assets/imgs/unchone.png";
  img3 = "assets/imgs/goodthing.png";
  img4 = "assets/imgs/goodscar.png";
  img5 = "assets/imgs/fanhui2.png";
  img6 = "assets/imgs/gengduo2.png";
  img7 = "assets/imgs/jian.png";
  img8 = "assets/imgs/jia.png";
  img9 = "assets/imgs/code2.png";
  public num = 1;
  @Input() snum: any;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() snumChange = new EventEmitter<any>();
  Property = true;
  list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  listflag = [];
  flagall = false;
  type = 1;
  userID: any;
  goodslist = [];
  num1 = [];
  totalnum = 0;
  Idlist = [];
   Idflag = -1;
  FranchiseeID: any;
  showflag = false;
  timeStarts:any;
  coupon_flag=true;
  coupon_flag1=true;
  UID:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,
    private modalCtrl: ModalController,
    public params: Params,) {
    var type = this.navParams.get("type");
    if (type == 1) {
      this.type = 1;
    } else {
      this.type = 0;
    };

  }
  ionViewWillEnter() {
    // this.settle();
    this.storage.get("userinfo").then(val => {
      this.nativeService.log('goodscar','ionViewWillEnter>storage.get("userinfo") val》'+val);
      if (val != ""&&val!=null&&val.userinform) {
        this.UID = val.userinform.UID
        this.settle();
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true,tabindex:2,popFlag:true});
        } else {
          this.userID = val.userinform.ID;
          //this.FranchiseeID = val.address.ID;
          this.FranchiseeID = val.userinform.FranchiseeID;
          this.login();
        }
      } else {
        this.navCtrl.push("LoginPage",{showflag:true,tabindex:2,popFlag:true});
      }
    });
    ////console.info(this.Idlist);
    //初始化变量

  }
  ionViewDidLoad() {
    for (var n = 0; n < this.list.length; n++) {
      this.listflag.push(false);
    };
    this.snum=3;
    this.snumChange.emit(this.snum);
    ////console.info(this.listflag)
  }
//扫码
  QRcode() {

    // this.sendSKU('6903148271308');
    // return;
    if (this.nativeService.isWeiXinPub()) {

    } else {
      this.nativeService.showToast("请在微信中使用扫码功能");
      return
    }
    var that = this;
    wx.scanQRCode({
      desc: 'scanQRCode desc',
      needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
      scanType: ["qrCode", "barCode"], // 可以指定扫二维码还是一维码，默认二者都有
      success: function (res) {
        //  alert(res.resultStr);
        if (res.resultStr.indexOf("http") != -1) {
          that.nativeService.showToast("请扫描正确条码");
          return
        } else {
          // alert("错误")
        }
        if(res.resultStr.indexOf(",") != -1){
          that.sendSKU(res.resultStr.split(",")[1]);
        }else{
          that.sendSKU(res.resultStr);
        }
       
      },
      error: function (res) {
        if (res.errMsg.indexOf('function_not_exist') > 0) {
          alert('版本过低请升级')
        }
      }
    });
  }
  
  sendSKU(item) {
    var userInfo = {
      SKU: item
    }
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1159";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == "1") {

        this.addGoodCar(result.Data);
      } else {
        this.nativeService.showToast(result.Msg);
      }
    })
  }
  addGoodCar(pid)
  {
    var userInfo = {
      UserID: this.userID,
      FranchiseeID: "",
      ProductID: pid,
      Num: 1,
      lstAttrValue: [],
      ProBH: '',
      ActivityID:  "",
      ActivityType:0,
    }
    //console.log(userInfo);
    var parameter = new Parameter();
   
      parameter.jyh = "1027";
   
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.nativeService.showToast(result.Msg);
        this.login();
        this.getnum();
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  //结算按钮
  gotosettlement() {
    this.Idflag = -1;
    for (var a = 0; a < this.goodslist.length; a++) {
      for (var b = 0; b < this.goodslist[a].List.length; b++) {
        if (this.goodslist[a].List[b].isCheck == 1) {
          var list = { "ID": this.goodslist[a].List[b].ID};
          this.Idlist.push(list);
        } else {

        }
        /* if (this.goodslist[a].List[b].isCheck == 1) {
          if (this.Idflag == a || this.Idflag == -1) {
            var list = { "ID": this.goodslist[a].List[b].ID, "AttrName": this.goodslist[a].List[b].AttrName };
            this.Idlist.push(list);
            this.Idflag = a;
          } else {
            this.nativeService.showToast("不同站点的商品请分开结算");
            this.Idlist = [];
            flag=false;
          }
         
        } else {

        } */

      }
    }
    if (this.Idlist[0] == undefined) {
      ////console.info("方法1");
      this.nativeService.showToast("暂无选定商品");
    } else {
      this.subOrder(this.Idlist);
    }

  }
  //单个添加
  gototrue(a, b) {
    if (this.goodslist[a].List[b].isCheck == 0) {
      this.goodslist[a].List[b].isCheck = 1;
      this.totalnum = this.totalnum + ((this.goodslist[a].List[b].Price * 100) * (this.goodslist[a].List[b].Quantity));
    } else {
      this.goodslist[a].List[b].isCheck = 0;
      this.flagall = false;
      this.num1[a] = false;
      this.totalnum = this.totalnum - ((this.goodslist[a].List[b].Price * 100) * (this.goodslist[a].List[b].Quantity));
    }
    var flag = this.cheack(a);
    ////console.info(flag);
    /*  if (flag == false) {
   
     } else {
       this.flagall = true;
     } */
    if (flag == false) {
    } else {
      this.num1[a] = true;
      var flag2 = this.cheack2();
      if (flag2 == false) {

      } else {
        this.flagall = true;
      }
    }
  }
  //站点添加
  largenum(a) {
    if (this.num1[a] == true) {
      this.num1[a] = false;
      this.flagall = false;
      for (var b = 0; b < this.goodslist[a].List.length; b++) {
        if (this.goodslist[a].List[b].isCheck == 1) {
          this.totalnum = this.totalnum - ((this.goodslist[a].List[b].Price * 100) * (this.goodslist[a].List[b].Quantity));
          this.goodslist[a].List[b].isCheck = 0;
        } else {
        }
      }
    } else {
      this.num1[a] = true;
      for (var c = 0; c < this.goodslist[a].List.length; c++) {
        if (this.goodslist[a].List[c].isCheck == 0) {
          this.totalnum = this.totalnum + ((this.goodslist[a].List[c].Price * 100) * (this.goodslist[a].List[c].Quantity));
          this.goodslist[a].List[c].isCheck = 1;
        }
      }
    }
    var flag2 = this.cheack2()
    if (flag2 == false) {

    } else {
      this.flagall = true;
    }
  }
  //全部添加
  choseall() {
    if (this.flagall == true) {
      this.flagall = false;
      for (var a = 0; a < this.goodslist.length; a++) {
        this.num1[a] = false;
        for (var b = 0; b < this.goodslist[a].List.length; b++) {
          if (this.goodslist[a].List[b].isCheck == 1) {
            this.totalnum = this.totalnum - ((this.goodslist[a].List[b].Price * 100) * (this.goodslist[a].List[b].Quantity));
            this.goodslist[a].List[b].isCheck = 0;
          } else {

          }
        }
      }
    } else {
      this.flagall = true;
      for (var e = 0; e < this.goodslist.length; e++) {
        this.num1[e] = true;
        for (var f = 0; f < this.goodslist[e].List.length; f++) {
          if (this.goodslist[e].List[f].isCheck == 0) {
            this.totalnum = this.totalnum + ((this.goodslist[e].List[f].Price * 100) * (this.goodslist[e].List[f].Quantity));
            this.goodslist[e].List[f].isCheck = 1;
          } else {

          }
        }
      }
    }
  }
  cheack(a) {
    for (var b = 0; b < this.goodslist[a].List.length; b++) {
      if (this.goodslist[a].List[b].isCheck == 1) {

      } else {
        return false;
      }
    }
  }
  cheack2() {
    for (var a = 0; a < this.goodslist.length; a++) {
      if (this.num1[a] == true) {

      } else {
        return false;
      }
    }
  }
  //加数量
  addnum(a, b, ID) {
    this.goodslist[a].List[b].Quantity++;
    if (this.goodslist[a].List[b].isCheck == 1) {
      this.totalnum = this.totalnum + this.goodslist[a].List[b].Price * 100;
    }
    this.uploadcars(ID, this.goodslist[a].List[b].Quantity);
  }
  //减去
  jiannum(a, b, ID) {
    this.nativeService.log('goodscar','jianum>a:'+a+'   [b]:'+b+'  [ID]:'+ID);
    if (this.goodslist[a].List[b].Quantity > 1) {
      this.goodslist[a].List[b].Quantity--;
      if (this.goodslist[a].List[b].isCheck == 1) {
        this.totalnum = this.totalnum - this.goodslist[a].List[b].Price * 100;
      } else {

      }

    } else {

    }
    this.uploadcars(ID, this.goodslist[a].List[b].Quantity);
  }
  goback() {
    this.app.goBack();
  }
  login() {
    var userInfo = {
      UserID: this.userID,
      FranchiseeID: this.FranchiseeID,
    };
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1032";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.goodslist = result.Data;
        // //console.info(result.Data[0].List[0].AttrName)
        if (this.goodslist.length == 0) {
          this.showflag = true;
        } else {
          this.showflag = false;
        }
        this.totalnum = 0;
        for (var a = 0; a < this.goodslist.length; a++) {
          this.num1[a] = false;
        }
        this.flagall = false;
        for (var n = 0; n < result.Data.length; n++) {
          this.num1.push(false);
        }
      } else {

      }
    });
  }
  //更新购物车
  uploadcars(ID, num) {
    var userInfo = {
      ID: ID,
      Num: num,
    };
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1029";
    parameter.parm = JSON.stringify(userInfo);
    // this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      // //console.info(result)
      if (result.Code == 1) {
        this.getnum();
        //this.nativeService.hideLoading();
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  //提交订单
  subOrder(list) {
    var userInfo = {
      ProductID: list,
      FranchiseeID: this.FranchiseeID,
      UserID: this.userID,
    };
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1036";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("提交中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result);
      this.nativeService.hideLoading();
      //console.info(list)
      if (result.Code == 1) {
        this.navCtrl.push("SettlementPage", {
          userID: this.userID,
          ordermsg: result.Data,
          list: list,
          single:false,
        });
        this.Idlist = [];
      } else {
        this.nativeService.showToast(result.Msg);
        this.Idlist = [];
      }
    })
  }
  //删除购物车
  DeleteGoods(ID, b, a) {
    var userInfo = {
      ID: ID,
    };
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1028";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("删除中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result)
      if (this.goodslist[a].List[b].isCheck == 1) {
        this.totalnum = this.totalnum - ((this.goodslist[a].List[b].Price * 100) * (this.goodslist[a].List[b].Quantity));
      } else { }

      if (result.Code == 1) {
        this.goodslist[a].List.splice(b, 1);
        this.nativeService.showToast("删除成功");
        this.getnum();
        if (this.goodslist.length == 0) {
          this.flagall = false;
        } else {

        }
      } else {
        this.nativeService.showToast(result.Msg);
      }
    })
  }
  slice(str) {
    return str.slice(0, 12) + "..."
  }
  additem(a, b) {
    ////console.info(a + "和" + b);
  }
  gotoGoodDetail(id) {
    this.navCtrl.push("GoodDetailPage", {
      Fh: this.FranchiseeID,
      goodsid: id,
    })
    ////console.info(id);
  }
  showCouponList(){
    let modal = this.modalCtrl.create('CouponListPage');
    modal.present();
    // modal.onDidDismiss(data => {});
  }
  settle() {
    // let url = location.href.split('#')[0];
    wx.onMenuShareAppMessage({
      title: '逛贝商城邀请您来逛逛',
      desc: '关注逛贝，惊喜不断！', // 分享描述
      // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
      // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
      link: 'https://www.lguangguang.com/mob/?login='+this.UID+'#/', // 分享链接
      imgUrl: "https://www.lguangguang.com/logo.png", // 分享图标
      // imgUrl: this.icon, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        this.nativeService.showToast("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    wx.onMenuShareTimeline({
      title: '逛贝商城邀请您来逛逛',
      link: 'https://www.lguangguang.com/mob/?login='+this.UID+'#/', // 分享链接
      imgUrl: "https://www.lguangguang.com/logo.png", // 分享图标
      success: function () {
        this.nativeService.showToast("分享成功");
      },
    })
  }
  getnum() {//获取
    var userInfo = {
      UserID:this.userID
    };
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1152";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.params.params=result.Data
      } else {

      }
    });
  }
}
// export const Idflag = GoodscarPage.