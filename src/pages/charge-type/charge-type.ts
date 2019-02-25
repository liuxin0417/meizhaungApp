import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';
import { Parameter } from './../../model/Model';
import { WechatPlugin } from '../../providers/WechatPlugin';
declare var AliPay: any;

@IonicPage()
@Component({
  selector: 'page-charge-type',
  templateUrl: 'charge-type.html',
})
export class ChargeTypePage {
  paytype = 2;
  img3 = "assets/imgs/chone.png";
  img4 = "assets/imgs/unchone.png";
  img2 = "assets/imgs/eixin.png";
  img5 = "assets/imgs/zhifun.png";
  userInfo: any;
  money: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage) {


  }
  ionViewWillEnter() {
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
    this.money = this.navParams.get("price");
  }
  ionViewDidLoad() {
    //  console.log('ionViewDidLoad ChargeTypePage');
  }
  pay() {
    var Info = {
      UserID: this.userInfo.ID,
      Money: this.money,
      isweb: 0,
      PayType: this.paytype
    };
    var parameter = new Parameter();
    parameter.jyh = "1132";
    parameter.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {

      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        var data = result.Data;
        if (this.paytype == 1) {
          AliPay.pay(result.Msg, success => {
            var msg = JSON.parse(success.result);
            if (msg.alipay_trade_app_pay_response.msg == "Success") {
              this.nativeService.showToast("支付订单成功");
              //this.navCtrl.pop();
              this.navCtrl.setRoot("PaySuccessPage", {
                Info: this.money
              });
            }
          }, error => {
          });
        } else if (this.paytype == 2) {
          WechatPlugin.sendPaymentRequest(data).then((result) => {
            this.nativeService.hideLoading();
            this.nativeService.showToast("支付订单成功");
            //this.navCtrl.pop();
            this.navCtrl.setRoot("PaySuccessPage", {
              Info: this.money
            });
          }, error => {
            this.nativeService.showToast(error);
          });
        } else {

        }

        /* wx.chooseWXPay({
          timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: data.noncestr, // 支付签名随机串，不长于 32 位
          package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
          signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: data.sign, // 支付签名
          success: function (res) {
            if (res.chooseWXPay == "ok") {
              that.navCtrl.pop();
            }
          }
        }); */
      } else {
        this.nativeService.showToast(result.Msg);
      }
      this.nativeService.hideLoading();
    });
  }
}
