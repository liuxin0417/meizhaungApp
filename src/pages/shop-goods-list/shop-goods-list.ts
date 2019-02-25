import { SocketService } from './../../providers/SocketService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter, Order, GoodsMessage } from './../../model/Model';
import { WechatPlugin } from './../../providers/WechatPlugin';
declare var wx: any;
declare var AliPay: any;

@IonicPage()
@Component({
  selector: 'page-shop-goods-list',
  templateUrl: 'shop-goods-list.html',
})
export class ShopGoodsListPage {
  img = "assets/imgs/logo2.png";
  img2 = "assets/imgs/chone.png";
  img3 = "assets/imgs/unchone.png";
  img12 = "assets/imgs/eixin.png";
  img13 = "assets/imgs/chone.png";
  img4 = "assets/imgs/unchone.png";
  img5 = "assets/imgs/zhifun.png";
  img6 = "assets/imgs/yue.png";
  img7 = "assets/imgs/gift.png";
  goodslist = [];
  totalnum = 0;
  name: any;
  phone: any;
  address: any;
  persioninfo: any;
  type: any;
  regPhone: any;
  Order = new Order();
  Msg = new GoodsMessage();
  ShopID = "";
  showflag = false;
  paytype = 2;
  paytype2 = 2;
  showflag1 = false;
  private shopBH = "";
  private user: any;
  private issubmit = false;
  private Money = 0;
  private Gift = 0;
  private toatal = 0;
  yuenum = false;
  giftnum = false;
  private isweb = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,
    private app: App, public socketService: SocketService, public moCtrl: ModalController) {
    this.goodslist = navParams.get("listmsg");
    this.type = navParams.get("type");
    this.Order = navParams.get("Order");
    this.ShopID = navParams.get("ShopID");
    this.total();
    this.storage.get("userinfo").then(val => {
      ////console.info(val);
      if (val != "") {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.persioninfo = val.userinform;
          this.Msg.GroupID = this.ShopID;
          this.Msg.UserID = this.persioninfo.ID;
          this.socketIoLoad();
          this.LoadUser();
          // this.FranchiseeID = val.address.FranchiseeID;
        }
      } else {
        this.navCtrl.push("LoginPage",{showflag:true});
      }
      this.isweb = !this.nativeService.isMobile();
      //this.indexnum = navParams.get("type");
      // this.login();
    })
  }

  ionViewWillLeave() {
    this.socketService.socket.disconnect();
  }

  ionViewDidLoad() {

  }
  slice(string) {
    if (string != "" && string != null) {
      return string.slice(0, 15) + "..."
    }
  }
  total() {
    for (var a = 0; a < this.goodslist.length; a++) {
      this.totalnum = this.totalnum + (this.goodslist[a].Price * this.goodslist[a].num);
    }
    this.totalnum = parseFloat(this.totalnum.toFixed(2));
    this.toatal = this.totalnum;
  }

  /**用户收银台结算 */
  Desksubmit() {
    var ShipStatusId = 0;
    for (var n = 0; n < this.goodslist.length; n++) {
      if (this.goodslist[n].type == 0) {

      } else {
        ShipStatusId = 1;
      }
    }
    if (ShipStatusId == 1) {
      if (this.address == undefined) {
        this.nativeService.showToast("地址不能为空");
        return;
      }
      if (this.phone == undefined) {
        this.nativeService.showToast("电话不能为空");
        return;
      }
      if (this.name == undefined) {
        this.nativeService.showToast("姓名不能为空");
        return;
      }
      if (this.phone.length != 11) {
        this.nativeService.showToast("请正确填写手机号")
      }
    }
    var address = {
      "Adress": this.address,
      "Phone": this.phone,
      "ReceiveUser": this.name
    };
    var goods = {};
    var goodsList = [];
    for (var s = 0; s < this.goodslist.length; s++) {
      let p: string;
      p = this.goodslist[s].xml;
      if (p != null && p != "") {
        p = p.replace(/</g, 'ling1');
        p = p.replace(/>/g, 'kong2');
      }
      goods = {
        "ProId": this.goodslist[s].ProductID,
        "Quantity": this.goodslist[s].num,
        "Price": this.goodslist[s].Price,
        "AttributeDescription": this.goodslist[s].Description,
        "Gettype": this.goodslist[s].type,
        "ProductBH": this.goodslist[s].ProductBH,
      }
      goodsList.push(goods);
    }
    var userInfo = {
      ShopID: this.goodslist[0].shopid,
      UserID: this.persioninfo.ID,
      OrderTotal: this.totalnum,
      ShipStatusId: ShipStatusId,
      Gift: 0,
      FranchiseeID: this.goodslist[0].FranchiseeID,
      address: address,
      goodsList: goodsList,
      OrderID: this.Order.ID
    };
    var parameter = new Parameter();
    parameter.jyh = "1059";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.HandOrder();
        var model = this.moCtrl.create('ShopsuceessPage', {
          shopBH: result.Msg
        });
        model.present();
        model.onDidDismiss(data => {
          this.app.getRootNav().setRoot('TabsPage');
        })
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }

  /**用户自主结算 */
  submit() {
    this.show();
    if (this.issubmit) {
      return false;
    }
    var ShipStatusId = 0;
    for (var n = 0; n < this.goodslist.length; n++) {
      if (this.goodslist[n].type == 0) {

      } else {
        ShipStatusId = 1;
      }
    }
    if (ShipStatusId == 1) {
      if (this.address == undefined) {
        this.nativeService.showToast("地址不能为空");
        return;
      }
      if (this.phone == undefined) {
        this.nativeService.showToast("电话不能为空");
        return;
      }
      if (this.name == undefined) {
        this.nativeService.showToast("姓名不能为空");
        return;
      }
      if (this.phone.length != 11) {
        this.nativeService.showToast("请正确填写手机号")
      }
    }
    var address = {
      "Adress": this.address,
      "Phone": this.phone,
      "ReceiveUser": this.name
    };
    var goods = {};
    var goodsList = [];
    for (var s = 0; s < this.goodslist.length; s++) {
      let p: string;
      p = this.goodslist[s].xml;
      if (p != null && p != "") {
        p = p.replace(/</g, 'ling1');
        p = p.replace(/>/g, 'kong2');
      }
      goods = {
        "ProId": this.goodslist[s].ProductID,
        "Quantity": this.goodslist[s].num,
        "Price": this.goodslist[s].Price,
        "AttributeDescription": this.goodslist[s].Description,
        "Gettype": this.goodslist[s].type,
        "ProductBH": this.goodslist[s].ProductBH,
      }
      goodsList.push(goods);
    }
    var userInfo = {
      ShopID: this.goodslist[0].shopid,
      UserID: this.persioninfo.ID,
      OrderTotal: this.totalnum,
      ShipStatusId: ShipStatusId,
      Gift: 0,
      FranchiseeID: this.goodslist[0].shopid,
      address: address,
      goodsList: goodsList,
      OrderID: this.Order.ID
    };
    var parameter = new Parameter();
    parameter.jyh = "1059";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.shopBH = result.Msg;
        this.HandOrder();
        this.issubmit = true;
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }


  socketIoLoad() {
    if (this.Msg.GroupID != null && this.Msg.UserID != null) {
      this.socketService.socketAuth();
      this.socketService.socket.emit("join", this.Msg);
      this.socketService.socket.on("groupuser", (data) => {
        //console.log(data);
      });
    }
  }

  HandOrder() {
    this.Order.Items = this.goodslist;
    this.Order.OnlineState = 1;
    this.Order.groupId = this.persioninfo.RelID;
    this.socketService.socket.emit("groupMessage", this.Order);
    //此处传递过去
  }
  hide() {
    var that = this;
    this.showflag = false;
    setTimeout(() => {
      that.showflag1 = false;
    }, 150);
  }
  show() {
    //var that = this;
    this.showflag1 = true;
    this.showflag = true;
  }

  /**获取用户 */
  LoadUser() {
    var Info = {
      UserID: this.persioninfo.ID
    };
    var parm = new Parameter();
    parm.jyh = "1108";
    parm.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == "1") {
        this.user = result.Data;
        console.log(this.user);
        //console.log(this.user);
      }
    });
  }

  /**使用余额 */
  UseYue() {
    if (this.user.Money < 0) {
      return false;
    }
    this.yuenum = !this.yuenum;
    if (this.yuenum) {
      if (this.user.Money >= this.toatal) {
        this.Money = this.toatal;
      } else {
        this.Money = this.user.Money;
      }
      //console.log(this.Money);
    } else {
      this.Money = 0;
    }
    this.CalCuteMoney();
  }

  UseGift() {
    if (this.user.Gift < 10) {
      return false;
    }
    this.giftnum = !this.giftnum;
    var maxgift = 300;
    if (this.giftnum) {
      if (this.toatal < 10) {
        return false;
      }
      if (this.user.Gift > maxgift) {
        if (this.toatal <= maxgift / 10) {
          this.Gift = parseInt(this.toatal * 10 + "");
        } else {
          this.Gift = maxgift;
        }
      } else {
        if (this.user.Gift > parseInt(this.toatal * 10 + "")) {
          this.Gift = parseInt(this.toatal * 10 + "");
        } else {
          this.Gift = this.user.Gift;
        }
      }
    } else {
      this.Gift = 0;
    }
    this.CalCuteMoney();
  }


  CalCuteMoney() {
    this.toatal = this.totalnum - this.Money - this.Gift / 10;
    console.log(this.toatal);
  }

  payOrder() {
    var Info = {
      OrderID: this.Order.ID,
      Money: this.Money,
      Gift: this.Gift,
      OrderTotal: this.toatal,
      PayType: this.paytype,
      isweb: this.isweb ? 1 : 0
    }
    var parameter = new Parameter();
    parameter.jyh = "1134";
    parameter.parm = JSON.stringify(Info);
    this.nativeService.showLoading("支付中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(val => {
      this.nativeService.hideLoading();
      var result = JSON.parse(val.result);
      var that = this;
      if (result.Code == 1) {
        if (this.paytype == 2) {
          /**微信支付 */
          var data = result.Data;
          if (this.isweb) {
            /**微信公众号支付 */
            wx.chooseWXPay({
              timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: data.noncestr, // 支付签名随机串，不长于 32 位
              package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
              signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: data.sign, // 支付签名
              success: function (res) {
                that.navCtrl.setRoot("PaySuccessPage", {
                  Info: that.totalnum,
                  shopBH: that.shopBH
                });
              }
            });
          } else {
            /**App支付 */
            WechatPlugin.sendPaymentRequest(data).then((result) => {
              that.navCtrl.setRoot("PaySuccessPage", {
                Info: that.totalnum,
                shopBH: that.shopBH
              });
            }, error => {
              this.nativeService.showToast(error);
            });
          }
        } else if (this.paytype == 1) {
          /**支付包支付 */
          AliPay.pay(result.Msg, success => {
            var msg = JSON.parse(success.result);
            if (msg.alipay_trade_app_pay_response.msg == "Success") {
              this.nativeService.showToast("支付订单成功");
              that.navCtrl.setRoot("PaySuccessPage", {
                Info: that.totalnum,
                shopBH: that.shopBH
              });
              //this.navCtrl.pop();
              //that.app.getRootNav().setRoot('PaySuccessPage');
            }
          }, error => {
            this.nativeService.showToast(error);
          });
        }
      } else if (result.Code == "2") {
        this.navCtrl.setRoot('PaySuccessPage', {
          Info: that.totalnum,
          shopBH: that.shopBH
        });
      }
      else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }
}
