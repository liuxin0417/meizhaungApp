//import { Order } from './../../model/Model';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpService } from '../../providers/HttpService';
import { NativeService } from '../../providers/NativeService';
import { Parameter } from '../../model/Model';
import { WechatPlugin } from '../../providers/WechatPlugin';
declare var wx: any;
declare var AliPay: any;
@IonicPage()
@Component({
  selector: 'page-group-settlement',
  templateUrl: 'group-settlement.html',
})
export class GroupSettlementPage {
  img = "assets/imgs/jinru--hui.png";
  img2 = "assets/imgs/eixin.png";
  img3 = "assets/imgs/chone.png";
  img4 = "assets/imgs/unchone.png";
  img5 = "assets/imgs/zhifun.png";
  img6 = "assets/imgs/yue.png";
  img7 = "assets/imgs/jian.png";
  img8 = "assets/imgs/jia.png";
  img10 = "assets/imgs/chose.png";
  switchNum2 = 0;
  switchNum3 = 0;
  img9 = "assets/imgs/gift.png";
  shoppont: any;
  chosepont: any;
  chosetime: any;
  dateList: any;
  position: any;
  private FranchiseeID: any;
  private groupInfo: any;
  private addressflag = true;
  private userInfo: any;
  private addresList = [];
  private defaultAddress: any;
  private flag = false;
  private flagsecond = false;
  private goodsnum = 1;
  private yuenum = false;
  private giftnum = false;
  private money = 0;
  private ishasgood = false;
  private Order: any;
  private Groupon: any;
  private user: any;
  private picurl = "";
  private gift = 0;
  private isweb = false;
  showflag = false;
  paytype = 2;
  showflag1 = false;
  showtype: any;
  msg: any;
  switchNum = 0;
  textlist = [1, 2, 3, 1, 2, 2, 3];
  stepnum = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,
    private httpService: HttpService,
    private nativeService: NativeService,
    private modalCtrl: ModalController) {
    this.groupInfo = this.navParams.get("Info");
    this.picurl = this.navParams.get("picurl");
    this.storage.get("userinfo").then(val => {
      if (val != "") {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.FranchiseeID = val.address.FranchiseeID;
          this.userInfo = val.userinform;
          this.loginaddress();
          this.Load();
          this.LoadUser();
        }
      } else {
        this.navCtrl.push("LoginPage",{showflag:true});
      }
    });
    this.storage.get("position").then(val => {
      //console.info(val);
      if (val != "" && val != null) {
        this.position = val;
        this.getlocationpont();
      } else {
        // this.navCtrl.push("LoginPage",{showflag:true});
      }
    });
    this.isweb = !this.nativeService.isMobile();
  }

  ionViewDidLoad() {
    //this.show();
    this.getdate();
  }
  ionViewWillEnter() {
    if (this.addressflag == false) {
      this.loginaddress();
      this.addressflag = true;
    }
  }
  /**获取结算 */
  Load() {
    var Info = {
      GouponID: this.groupInfo.GouponID,
      ProductBH: this.groupInfo.ProductBH,
      ProductID: this.groupInfo.ProductID,
      GroupID: this.groupInfo.GroupID,
      money: this.money,
      num: this.goodsnum,
      UserID: this.userInfo.ID,
      Gift: this.gift,
      grouptype: this.groupInfo.grouptype,
      Method: this.switchNum
    }
    var parm = new Parameter();
    parm.jyh = "1107";
    parm.parm = JSON.stringify(Info);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.ishasgood = true;
        this.Order = result.Data;
        this.Groupon = this.Order.Groupon;
      } else if (result.Code == 2) {
        this.ishasgood = false;
        this.msg = result.Msg;
      } else {
        this.ishasgood = false;
        this.msg = result.Msg
      }
      this.nativeService.hideLoading();
    });
  }
  /**获取用户的地址列表 */
  loginaddress() {
    var userInfo = {
      UserID: this.userInfo.ID,
    };
    var parameter = new Parameter();
    parameter.jyh = "1011";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      ////console.info(result);
      if (result.Code == 1) {
        if (result.Data2 != null) {
          this.addresList[0] = result.Data2;
          this.defaultAddress = result.Data2;
          for (var n = 0; n < result.Data.length; n++) {
            this.addresList.push(result.Data[n]);
          }
        } else {
          if (result.Data.length == 0) {
            this.addressflag = false;
          } else {
            this.defaultAddress = result.Data[0];
            for (var b = 0; b < result.Data.length; b++) {
              this.addresList.push(result.Data[b]);
            }
          }
        }
      } else {
        this.nativeService.showToast(result.Msg);
      }
    })
  }
  alertAddress() {
    ////console.info(this.addresList)
    this.flag = true;
    this.flagsecond = true;
  }
  jia() {
    if (this.Groupon.MaxAmount > this.goodsnum) {
      this.goodsnum++;
      this.yuenum = false;
      this.giftnum = false;
      this.gift = 0;
      this.money = 0;
      this.Load();
    }
  }
  jian() {
    if (this.goodsnum > 1) {
      this.goodsnum--;
      this.yuenum = false;
      this.giftnum = false;
      this.gift = 0;
      this.money = 0;
      this.Load();
    } else {
    }
  }
  LoadUser() {
    var Info = {
      UserID: this.userInfo.ID
    };
    var parm = new Parameter();
    parm.jyh = "1108";
    parm.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == "1") {
        this.user = result.Data;
        //console.log(this.user);
      }
    });
  }
  UseYue() {
    if (this.user.Money < 0) {
      return false;
    }
    this.yuenum = !this.yuenum;
    if (this.yuenum) {
      if (this.user.Money >= this.Order.OrderToatal) {
        this.money = this.Order.OrderToatal;
      } else {
        this.money = this.user.Money;
      }
      console.log(this.money);
    } else {
      this.money = 0;
    }
    this.Load();
  }
  /**使用积分 */
  UseGift() {
    if (this.user.Gift < 10) {
      return false;
    }
    if (this.Order.OrderToatal < 1) {
      return false;
    }
    this.giftnum = !this.giftnum;
    var maxgift = 300;
    if (this.giftnum) {
      if (this.user.Gift > maxgift) {
        if (this.Order.OrderToatal <= maxgift / 10) {
          this.gift = parseInt(this.Order.OrderToatal * 10 + "");
        } else {
          this.gift = maxgift;
        }
      } else {
        if (this.user.Gift > parseInt(this.Order.OrderToatal * 10 + "")) {
          this.gift = parseInt(this.Order.OrderToatal * 10 + "");
        } else {
          this.gift = this.user.Gift;
        }
      }
    } else {
      this.gift = 0;
    }
    this.Load();
  }
  /**团购支付订单 */
  //隐藏
  hide() {
    var that = this;
    this.showflag = false;
    setTimeout(() => {
      that.showflag1 = false;
    }, 150);
  }
  show() {
    /* var that = this; */
    this.showflag1 = true;
    this.showflag = true;
  }
  getaddress(item) {
    //console.info(item);
    var that = this;
    this.showflag = false;
    setTimeout(() => {
      that.showflag1 = false;
    }, 150);
    this.defaultAddress = item;
    var userInfo = {
      GouponID: this.groupInfo.GouponID,
      ProductBH: this.groupInfo.ProductBH,
      ProductID: this.groupInfo.ProductID,
      GroupID: this.groupInfo.GroupID,
      money: this.money,
      num: this.goodsnum,
      AddressID: item.ID,
      Grouptype: this.groupInfo.grouptype,
    };
    var parameter = new Parameter();
    parameter.jyh = "1121";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.giftnum = false;
        this.yuenum = false;
        this.money = 0;
        this.gift = 0;
        this.ishasgood = true;
        this.Order = result.Data;
        this.Groupon = this.Order.Groupon;
      } else if (result.Code == 2) {
        this.ishasgood = false;
        this.msg = result.Msg;
      } else {
        this.ishasgood = false;
        this.msg = result.Msg;
      }
    })
  }
  pay() {
    if (this.defaultAddress == undefined) {
      this.nativeService.showToast("请先创建地址");
      return;
    }
    var userInfo = {
      GouponID: this.groupInfo.GouponID,
      ProductBH: this.groupInfo.ProductBH,
      GroupID: this.groupInfo.GroupID,
      Money: this.money,
      AddressID: this.defaultAddress.ID,
      Grouptype: this.groupInfo.grouptype,
      UserID: this.userInfo.ID,
      Num: this.goodsnum,
      Method: this.Order.Method,
      PayType: this.paytype,
      ShipMoney: this.Order.ShipMoney,
      OrderTotal: this.Order.OrderToatal,
      FightID: this.groupInfo.FightID,
      Gift: this.gift,
      shopID: this.Order.Method == 0 ? '' : this.chosepont.ID,
      reTime: this.Order.Method == 0 ? '' : this.chosetime.fulldate,
      isweb: this.isweb ? 1 : 0
    };
    var that = this;
    var parameter = new Parameter();
    parameter.jyh = "1122";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("支付中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        var data = result.Data;
        if (this.paytype == 2) {
          if (this.isweb) {
            wx.chooseWXPay({
              timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: data.noncestr, // 支付签名随机串，不长于 32 位
              package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
              signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: data.sign, // 支付签名
              success: function (res) {
                that.nativeService.hideLoading();
                that.modalpush();
                // 支付成功后的回调函数
              }
            });
          } else {
            WechatPlugin.sendPaymentRequest(data).then((result) => {
              this.nativeService.hideLoading();
              this.modalpush();
            }, error => {
              this.nativeService.showToast(error);
            });
          }
        } else {
          AliPay.pay(result.Msg, success => {
            var msg = JSON.parse(success.result);
            if (msg.alipay_trade_app_pay_response.msg == "Success") {
              this.nativeService.hideLoading();
              this.nativeService.showToast("支付订单成功");
              this.navCtrl.setRoot("PaySuccessPage");
              this.modalpush();
            }
          }, error => {
            this.nativeService.showToast(error);
            this.nativeService.hideLoading();
          });
        }
      } else if (result.Code == "2") {
        this.modalpush();
      }
      else {
        this.nativeService.showToast(result.Msg);
        this.nativeService.hideLoading();
      }
    });
  }
  showdifferent(type) {
    this.showtype = type;
    this.show();
  }
  chose(number, item) {
    this.switchNum2 = number;
    this.stepnum = 1;
    this.chosepont = item;
  }
  AswitchNum3(i, item) {
    this.switchNum3 = i;
    this.stepnum = 1;
    this.chosetime = item;
    //console.info(item)
  }
  confirm() {
    this.Load();
    this.hide();
    this.money = 0;
    this.yuenum = false;
    this.gift = 0;
    this.giftnum = false;
  }
  getlocationpont() {
    var Info = {
      FranchiseeID: this.FranchiseeID,
      currentLongitude: this.position.currentLongitude,
      currentLatitude: this.position.currentLatitude,
    };
    var parm = new Parameter();
    parm.jyh = "1123";
    parm.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == "1") {
        this.shoppont = result.Data;
        this.chosepont = result.Data[0];
      } else {

      }
    });
  }
  //获取当前时间
  getdate() {
    var myDate = new Date();
    var dateList = [];
    var arr = {}
    arr = { "date": myDate.getDate(), "day": myDate.getDay(), "fulldate": myDate };
    this.chosetime = arr;
    dateList.push(arr);
    for (var a = 0; a < 5; a++) {
      myDate.setDate(myDate.getDate() + 1);
      arr = { "date": myDate.getDate(), "day": myDate.getDay() };
      dateList.push(arr);

    }
    this.dateList = dateList
  }

  modalpush() {
    var model = this.modalCtrl.create('GroupBuySuccessPage', {
      Info: this.Groupon,
      picurl: this.picurl
    });
    model.present();
    // model.onDidDismiss(data => {
    //   this.navCtrl.setRoot('TabsPage');
    // })
  }

  gotoaddress(item, type) {

    var userinfo = [];
    if (type == 2) {
      userinfo = [{ 'type': 2 }, { 'value': item }, { 'userID': this.userInfo.ID }];
    } else if (type == 3) {
      userinfo = [{ 'type': 3 }, { 'value': "" }, { 'userID': this.userInfo.ID }];
    };
    this.navCtrl.push("SetAddressPage", {
      userinfo: userinfo,
    })
  }
}
