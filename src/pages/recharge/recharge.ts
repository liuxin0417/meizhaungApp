import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';
import { Parameter } from './../../model/Model';
// import { WechatPlugin } from '../../providers/WechatPlugin';
declare var wx: any;
// declare var AliPay: any;

@IonicPage()
@Component({
  selector: 'page-recharge',
  templateUrl: 'recharge.html',
})
export class RechargePage {
  userID: any;
  list: any;
  private isweb: any;
  private userInfo: any;
  private recharMoney: number;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage
  ) {
    this.storage.get("userinfo").then(val => {
      if (val != "") {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.userInfo = val.userinform;
        }
      } else {
        this.navCtrl.push("LoginPage",{showflag:true});
      }
    });
    this.isweb = !this.nativeService.isMobile();
  }
  ionViewWillEnter() {

  }
  ionViewDidLoad() {
    this.login();
  }
  login() {
    /* var userInfo = {
      UserID:this.userID,
    } */
    var parameter = new Parameter();
    parameter.jyh = "1128";
    parameter.parm = "";
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.list = result.Data
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }

  recharge() {
    if (this.recharMoney == null || this.recharMoney == undefined) {
      this.nativeService.showToast("请输入充值金额");
      return false;
    }
    if (this.recharMoney <= 0) {
      this.nativeService.showToast("请输入大于零的金额");
      return false;
    }
    if (this.nativeService.isMobile()) {
      this.navCtrl.push("ChargeTypePage", {
        price: this.recharMoney,
      });
    } else {
      this.submit(this.recharMoney);
    }
    /* this.navCtrl.push("ChargeTypePage",{
      price:this.recharMoney,
    }); */
  }
  skip(item) {
    // if (this.nativeService.isMobile()) {

    //   this.navCtrl.push("ChargeTypePage", {
    //     price: item.UseMoney,
    //   });
    // } else {
    //   this.submit(item.UseMoney);
    // }
    this.submit(item.UseMoney);
  }
  /**充值提交或者跳转 */
  submit(money) {
    if (this.isweb) {
      var Info = {
        UserID: this.userInfo.ID,
        Money: money,
        isweb: 1,
        PayType: 2
      };
      var parameter = new Parameter();
      parameter.jyh = "1132";
      parameter.parm = JSON.stringify(Info);
      this.nativeService.showLoading();
      this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
        var result = JSON.parse(res.result);
        if (result.Code == 1) {
          var data = result.Data;
          var that = this;
          that.nativeService.hideLoading();
          wx.chooseWXPay({
            timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            nonceStr: data.noncestr, // 支付签名随机串，不长于 32 位
            package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
            signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            paySign: data.sign, // 支付签名
            success: function (res) {
              that.navCtrl.setRoot("PaySuccessPage", {
                Info: money
              });
            }
          });
        } else {
          this.nativeService.hideLoading();
        }
      });
    } else {
      /**跳转到支付界面 */
      this.navCtrl.push("ChargeTypePage", {
        price: money,
      });
    }
  }
}
