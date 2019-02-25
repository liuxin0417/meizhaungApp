import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
import { WechatPlugin } from './../../providers/WechatPlugin';
declare var wx: any;
declare var AliPay: any;
@IonicPage()
@Component({
  selector: 'page-order-pay',
  templateUrl: 'order-pay.html',
})
export class OrderPayPage {
  datalist: any;
  orderId: any;
  img2 = "assets/imgs/eixin.png";
  img3 = "assets/imgs/chone.png";
  img4 = "assets/imgs/unchone.png";
  img5 = "assets/imgs/zhifun.png";
  fanhui = "assets/imgs/fanhui2.png";
  sousuo = "assets/imgs/shousuo.png";
  gouwu = "assets/imgs/gouwuche.png";
  complte = "assets/imgs/complte.png";
  paysuccess=false;
  paytype = 2;
  isweb = false;
  OrderList:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private app: App,
    private nativeService: NativeService,
    /* private storage: Storage */) {
    this.OrderList = this.navParams.get("item");
    this.orderId = this.navParams.get("orderId");
    this.login();
    this.isweb = !this.nativeService.isMobile();
  }
  ionViewDidLoad() {
  }
  login() {
    var userInfo = {
      OrderID: this.orderId,
    };
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1057";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.datalist = result.Data;
      } else {
      }

    })
  }
  pay2(){
    var that=this;
    wx.chooseWXPay({
      timestamp: that.datalist.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
      nonceStr: that.datalist.noncestr, // 支付签名随机串，不长于 32 位
      package: that.datalist.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
      signType: that.datalist.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
      paySign: that.datalist.sign, // 支付签名
      success: function (res) {
        that.paysuccess=true;
        // if (res.chooseWXPay == "ok") {
        //   that.navCtrl.setRoot("PaySuccessPage", {
        //     Info: that.datalist.OrderOrlTotal
        //   });
        // }
        // 支付成功后的回调函数
      }
    });
  }
  pay() {
    var userInfo = {
      OrderID: this.orderId,
      PayType: this.paytype,
      isweb: this.isweb ? 1 : 0
    };
    var that = this;
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1058";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {

      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        if (this.paytype == 1) {
          /**处理支付宝逻辑 */
          this.nativeService.hideLoading();
          AliPay.pay(result.Msg, success => {
            var msg = JSON.parse(success.result);
            if (msg.alipay_trade_app_pay_response.msg == "Success") {
              this.nativeService.showToast("支付订单成功");
              this.navCtrl.setRoot("PaySuccessPage", {
                Info: that.datalist.OrderOrlTotal
              });
            }
          }, error => {

          });
        } else {
          /*处理微信逻辑 */
          var data = result.Data;
          //console.info("微信支付")
          if (this.isweb) {
            this.nativeService.hideLoading();
            /**微信内部 */
            wx.chooseWXPay({
              timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: data.noncestr, // 支付签名随机串，不长于 32 位
              package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
              signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: data.sign, // 支付签名
              success: function (res) {
                that.paysuccess=true;
                if (res.chooseWXPay == "ok") {
                  // that.navCtrl.setRoot("PaySuccessPage", {
                  //   Info: that.datalist.OrderOrlTotal
                  // });
                
                }
                // 支付成功后的回调函数
              }
            });
          } else {
            this.nativeService.hideLoading();
            WechatPlugin.sendPaymentRequest(data).then((result) => {
              this.navCtrl.setRoot("PaySuccessPage", {
                Info: that.datalist.OrderOrlTotal
              });
            }, error => {
              this.nativeService.showToast(error);
            });
          }
        }
      } else if (result.Code == 2) {
        this.nativeService.hideLoading();
        this.navCtrl.setRoot("PaySuccessPage", {
          Info: that.datalist.OrderOrlTotal
        });
      } else {
        this.nativeService.hideLoading();
        this.nativeService.showToast(result.Msg);
      }
    });
  }
   //回到首页
   gotohome() {
    this.app.getRootNav().setRoot('TabsPage');
  }
  //查看订单
  gotoOrderList() {
    this.navCtrl.push("OrderListPage", {
      type: 0,
    })
  }
}
