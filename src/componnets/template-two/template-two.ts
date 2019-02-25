import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductAttr, Parameter, AttrValue } from '../../model/Model';


@IonicPage()
@Component({
  selector: 'page-template-two',
  templateUrl: 'template-two.html',
})
export class TemplateTwoPage {
  img = "assets/imgs/temporary/banner.png";
  img2 = "assets/imgs/temporary/shangpin.png";
  img3 = "assets/imgs/temporary/shangpin2.png";
  img4 = "assets/imgs/close.png";
  img7 = "assets/imgs/jian.png";
  img8 = "assets/imgs/jia.png";
  proBH: any;
  num = 1;
  @Input() goodstype: boolean;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() goodstypeChange = new EventEmitter<any>();
  @Input() goodsshow: boolean;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() goodsshowChange = new EventEmitter<any>();
  @Input() ProductAttr: ProductAttr;
  @Output() ProductAttrChange = new EventEmitter<any>();
  @Input() desflag: boolean;
  @Output() desflagChange = new EventEmitter<any>();
  @Input() Fh: string;
  @Output() FhChange = new EventEmitter<any>();
  @Input() goodsid: string;
  @Output() goodsidChange = new EventEmitter<any>();
  @Input() guige: string;
  @Output() guigeChange = new EventEmitter<any>();
  @Input() userID: string;
  @Output() userIDChange = new EventEmitter<any>();
  @Input() seckInfo: any;
  @Output() seckInfoChange = new EventEmitter<any>();
  shownum = -1;
  btnflag = false;
  StockQuantity: any;
  list = [];
  alertmsg = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public nativice: NativeService, public httpservice: HttpService, private nativeService: NativeService, ) {
  }

  ionViewDidLoad() {
  }
  hidetype() {
    /*  if (this.desflag == true) {
       var that = this;
       this.goodsshow = true;
       this.goodsshowChange.emit(this.goodsshow);
       that.goodstype = true;
       that.goodstypeChange.emit(this.goodstype);
     } else {
       
     } */
    this.goInCar(1);
  }
  noshow() {
    var that = this;
    this.goodsshow = false;
    this.goodsshowChange.emit(this.goodsshow);
    setTimeout(() => {
      that.goodstype = false;
      that.goodstypeChange.emit(this.goodstype);
    }, 150);
  }
  unshow() {

  }
  close() {
    this.guige = "";
    if (this.list.length != 0) {
      for (var a = 0; a < this.list.length; a++) {
        this.guige = this.guige + (this.list[a].title + ":" + this.list[a].RelName + ";");
      }
    } else {
      this.guige = "";
    }
    this.guigeChange.emit(this.guige);
    var that = this;
    this.goodsshow = false;
    this.goodsshowChange.emit(this.goodsshow);
    setTimeout(() => {
      that.goodstype = false;
      that.goodstypeChange.emit(this.goodstype);
    }, 150);
  }
  ChoiceAttr(item, item2) {
    for (var i = 0; i < item.length; i++) {
      item[i].Check = 0;
    }
    item2.Check = 1;
    this.ChangPrice();
  }
  ChangPrice() {
    console.log(this.ProductAttr);
    var array = [];
    for (var i = 0; i < this.ProductAttr.AttrList.length; i++) {
      for (var j = 0; j < this.ProductAttr.AttrList[i].AttValueList.length; j++) {
        if (this.ProductAttr.AttrList[i].AttValueList[j].Check == 1) {
          var obj = new AttrValue();
          obj.title = this.ProductAttr.AttrList[i].TextPrompt;
          obj.RelName = this.ProductAttr.AttrList[i].AttValueList[j].Value;
          obj.Name = this.ProductAttr.AttrList[i].AttValueList[j].Name;
          obj.Value = this.ProductAttr.AttrList[i].AttValueList[j].ID;
          array.push(obj);
        }
      }
    }
    this.list = array;
    //console.log(array);
    var userInfo = {
      ProductID: this.ProductAttr.ProductID,
      lstAttrValue: array,
      FranceID: this.Fh,
    };
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1025";
    parameter.parm = JSON.stringify(userInfo);
    this.httpservice.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.ProductAttr.ProductPrice = result.Data;
        this.proBH = result.Data.ProductBH;
        this.StockQuantity = result.Data.VirtualStock;
        for (var i = 0; i < this.ProductAttr.AttrList.length; i++) {
          if (array[i] != undefined || this.StockQuantity == 0) {
            // //console.info(this.StockQuantity)
            if (this.StockQuantity != 0) {
              this.btnflag = true;
              ////console.info("执行一");
            } else {
              ////console.info("执行二");
              this.btnflag = false;
              this.alertmsg = "商品暂无货";
            }
          } else {
            ////console.info("执行三");
            this.alertmsg = "请先选择物品型号"
            this.btnflag = false;
          }

        }
      } else {
        this.nativice.showToast(result.Msg);
      }
    });


  }
  goInCar(type) {
    var list: any;
    if (type == 1) {
      list = this.list;
    } else {
      list = "";
    }

    if (this.userID == "") {
      this.nativice.showToast("添加失败，请先登录再加入购物车");
      return;
    }
    var userInfo = {
      UserID: this.userID,
      FranchiseeID: this.Fh,
      ProductID: this.goodsid,
      Num: this.num,
      lstAttrValue: list,
      ProBH: "",
      ActivityID: this.seckInfo != null ? this.seckInfo.ActivityID : "",
      ActivityType: this.seckInfo != null ? this.seckInfo.AcType : 0,
    }
    //console.info(userInfo)
    var parameter = new Parameter();
    if (this.seckInfo != null) {
      parameter.jyh = "1118";
    } else {
      parameter.jyh = "1027";
    }
    parameter.jyh = "1027";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpservice.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.nativeService.showToast(result.Msg);
        this.close();
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  buyStrict(type) {
    var list: any;
    if (type == 1) {
      list = this.list;
    } else {
      list = "";
    }

    if (this.userID == "") {
      this.nativice.showToast("请先登录再购买");
      return;
    }
    var userInfo = {
      UserID: this.userID,
      ProductID: this.goodsid,
      Num: this.num,
      AttributesXml: list,
    }
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1139";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpservice.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.nativeService.showToast(result.Msg);
        this.navCtrl.push("SettlementPage", {
          userID: this.userID,
          ordermsg: result.Data,
          list: "",
          single:true,
          AttributesXml: list,
          ProductID: this.goodsid,
        });

        this.close();
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  /* 无货 */
  alertmessage() {
    this.nativeService.showToast(this.alertmsg);
  }
  //加数量
  addnum() {
    this.num++
  }
  //减去
  jiannum() {
    if (this.num > 1) {
      this.num--
    } else {

    }
  }
}
