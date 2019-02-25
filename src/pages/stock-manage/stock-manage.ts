import { Component,ChangeDetectorRef  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';

/**
 * Generated class for the StockManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stock-manage',
  templateUrl: 'stock-manage.html',
})
export class StockManagePage {
  code = "assets/imgs/code2.png";
  msg:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nativeService: NativeService,
    private httpService: HttpService,
    public cd: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StockManagePage');
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
        if (res.resultStr.indexOf(",") != -1) {
          that.sendSKU(res.resultStr.split(",")[1]);
        } else {
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
    var that=this;
    var userInfo = {
      SKU: item
    }
    console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "2008";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == "1") {
        this.msg=[];
        result.Data.sku=item;
        // alert("完成");
        that.msg.push(result.Data);
        this.cd.detectChanges();  
      } else {
        this.nativeService.showToast(result.Msg);
      }
    })
  }
  savemsg(){
    var userInfo = {
      ID:this.msg[0].ID,
      Inventory:this.msg[0].Inventory
    }
    console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "2009";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      console.info(result)
      if (result.Code == "1") {
        this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
      }
    })
  }
}
