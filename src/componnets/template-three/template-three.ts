import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductAttr, Parameter, AttrValue } from '../../model/Model';


@IonicPage()
@Component({
  selector: 'page-template-three',
  templateUrl: 'template-three.html',
})
export class TemplateThreePage {
  img = "assets/imgs/temporary/banner.png";
  img2 = "assets/imgs/temporary/shangpin.png";
  img3 = "assets/imgs/temporary/shangpin2.png";
  img4 = "assets/imgs/close.png";
  proBH: any;
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
  @Input() grouptype: number;
  @Output() grouptypeChange = new EventEmitter<any>();
  @Input() groupID: string;
  @Output() groupIDChange = new EventEmitter<any>();
  @Input() GrouponID: string;
  @Output() GrouponIDChange = new EventEmitter<any>();
  @Input() FightID: string;
  @Output() FightIDChange = new EventEmitter<any>();
  shownum = -1;
  btnflag = false;
  StockQuantity: any;
  list = [];
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
    // this.goInCar(1);
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
    var userInfo = {
      ProductID: this.ProductAttr.ProductID,
      lstAttrValue: JSON.stringify(array),
      FranceID: this.Fh,
      GrouponID: this.groupID,
      grouptype: this.grouptype,
      GroupID: this.GrouponID,
    };
    var parameter = new Parameter();
    parameter.jyh = "1103";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpservice.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      // //console.info(result);
      this.nativeService.hideLoading();
      if (result.Code == 1) {
        this.ProductAttr.ProductPrice = result.Data.Price;
        this.proBH = result.Data.ProductBH;
        this.StockQuantity = result.Data.StockQuantity;
        var exit = result.Data.isExist;
        if (this.StockQuantity <= 0) {
          // this.nativeService.showToast("库存量不足");
          this.btnflag = false;
        }
        if (exit == 0) {
          // this.nativeService.showToast("商品无货");
          this.btnflag = false;
        }
        if (this.StockQuantity != 0 && exit == 1) {
          this.btnflag = true;
        }
        // for (var i = 0; i < this.ProductAttr.AttrList.length; i++) {
        //   if (array[i] != undefined || this.StockQuantity == 0) {
        //     if (this.StockQuantity != 0 && exit == 1) {
        //       this.btnflag = true;
        //       //console.info("执行一");
        //     } else {
        //       //console.info("执行二");
        //       this.btnflag = false;
        //     }
        //   } else {
        //     //console.info("执行三")
        //     this.btnflag = false;
        //   }
        // }
      } else {
        this.nativice.showToast(result.Msg);
      }
    });
  }

  Sure() {
    var item = {
      GouponID: this.groupID,
      ProductBH: this.proBH,
      ProductID: this.goodsid,
      grouptype: this.grouptype,
      GroupID: this.GrouponID,
      FightID: this.FightID

    }
    //console.log(item);
    this.navCtrl.push('GroupSettlementPage', {
      Info: item,
      picurl: this.ProductAttr.ProductImage
    });
  }
  gotosettlement() {
    this.navCtrl.push("GroupSettlementPage");
  }
}
