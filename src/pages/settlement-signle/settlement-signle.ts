import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
import { Storage } from '@ionic/storage';
import { WechatPlugin } from './../../providers/WechatPlugin';

declare var wx: any;
declare var AliPay: any;

/**
 * Generated class for the SettlementSignlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settlement-signle',
  templateUrl: 'settlement-signle.html',
})
export class SettlementSignlePage {
  img = "assets/imgs/jinru--hui.png";
  img2 = "assets/imgs/eixin.png";
  img3 = "assets/imgs/chone.png";
  img4 = "assets/imgs/unchone.png";
  img5 = "assets/imgs/zhifun.png";
  img6 = "assets/imgs/yue.png";
  img7 = "assets/imgs/chose.png";
  img8 = "assets/imgs/dizhi.png";
  img9 = "assets/imgs/gift.png";
  img13 = "assets/imgs/gouwuche.png";
  img14 = "assets/imgs/search.png";
  img15 = "assets/imgs/coupon.png";
  fanhui = "assets/imgs/fanhui2.png";
  sousuo = "assets/imgs/shousuo.png";
  gouwu = "assets/imgs/gouwuche.png";
  complte = "assets/imgs/complte.png";
  money: any;
  switchNum2 = 0;
  switchNum3 = 0;
  paytype = 2;
  goodstype = false;
  goodsshow = false;
  flag = false;
  flagsecond = false;
  addresList = [];
  userID: any;
  ordermsg: any;
  defaultAddress: any;
  goodsprice = 0;
  FranchiseeID: any;
  addressId: any;
  goodslist = [];
  addressflag = true;
  list: any;
  showflag = false;
  showflag1 = false;
  showtype: any;
  yuenum = false;
  giftnum = false;
  coupondata: any;
  stepnum = 1;
  /* 测试列表 */
  textlist = [1, 2, 3, 1, 2, 2, 3]
  /* 配送方式 */
  switchNum = 0;
  usecouponNum = 0;
  shoppont: any;
  chosepont: any;
  chosetime: any;
  dateList: any;
  isweb = false;
  paySuccess = false;
  mianyounum = false;
  private userInfo: any;
  private position: any;
  private user: any;
  private Money = 0;
  private Gift = 0;
  private Method = 0;
  private couponList = [];
  private myCoupon: any;
  private FightID = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,
    private app: App,
    private modalCtrl: ModalController, ) {
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.userInfo = val.userinform;
          this.FranchiseeID = val.address.FranchiseeID;
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
  ionViewWillEnter() {
    if (this.addressflag == false) {
      this.loginaddress();
      this.addressflag = true;
    }
  }
  ionViewDidLoad() {

    this.ordermsg = this.navParams.get("ordermsg");
    this.userID = this.navParams.get("userID");
    this.list = this.navParams.get("list");
    ////console.info(this.ordermsg);
    this.loginaddress();
    this.GetUseCoupon();
    this.getdate();
  }
  getlist() {
    
    /**新的方法 */

    for (var i = 0; i < this.ordermsg.ActivityList.length; i++) {
      var atrList = [];
      // var obj:any;
      for (var j = 0; j < this.ordermsg.ActivityList[i].productList.length; j++) {
        if (this.ordermsg.ActivityList[i].productList[j].isExist == 1) {
          let p: string;
          console.log(this.ordermsg.ActivityList[i].productList);
          p = this.ordermsg.ActivityList[i].productList[j].AttributesXml;
          if (p != null && p != "") {
            p = p.replace(/</g, 'ling1');
            p = p.replace(/>/g, 'kong2');
          }
          var list = {
            "Quantity": this.ordermsg.ActivityList[i].productList[j].Quantity,
            "Price": this.ordermsg.ActivityList[i].productList[j].Price,
            "ProductId": this.ordermsg.ActivityList[i].productList[j].ProductId,
            "AttrbuitXml": p,
            "AttrName": this.ordermsg.ActivityList[i].productList[j].AttrName,
            "Cost": this.ordermsg.ActivityList[i].productList[j].Cost,
            "ProBH": this.ordermsg.ActivityList[i].productList[j].ProBH,
          }
          atrList.push(list);
        }
      }
      if (atrList.length > 0) {
        var obj = {
          "ActivityID": this.ordermsg.ActivityList[i].ActivityID,
          "Activitype": this.ordermsg.ActivityList[i].ActivityType,
          "Toatal": this.ordermsg.ActivityList[i].OrderToatal,
          "productList": atrList
        }
        this.goodslist.push(obj);
      }
    }

  }
  loginaddress() {
    var userInfo = {
      UserID: this.userID,
    };
    var parameter = new Parameter();
    parameter.jyh = "1011";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        if (result.Data2 != null) {
          this.addresList[0] = result.Data2;
          this.defaultAddress = result.Data2;
          for (var n = 0; n < result.Data.length; n++) {
            this.addresList.push(result.Data[n])
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
  gotoaddress(item, type) {

    var userinfo = [];
    if (type == 2) {
      userinfo = [{ 'type': 2 }, { 'value': item }, { 'userID': this.userID }];
    } else if (type == 3) {
      userinfo = [{ 'type': 3 }, { 'value': "" }, { 'userID': this.userID }];
    };
    this.navCtrl.push("SetAddressPage", {
      userinfo: userinfo,
    })
  }
  alertAddress() {
    ////console.info(this.addresList)
    this.flag = true;
    this.flagsecond = true;
  }
  slice(string) {
    if (string != "" && string != null) {
      return string.slice(0, 18) + "...";
    }
  }
  //支付
  pay() {
    var that = this;
    if (this.defaultAddress == undefined) {
      this.nativeService.showToast("请先创建地址");
      return;
    }
    this.getlist();
    //console.log(this.goodslist);
    if (this.goodslist.length == 0) {
      this.nativeService.showToast("无有效商品");
      return;
    } else {
      var userInfo = {
        OrderToatal: this.ordermsg.OrderToatal,
        FranchiseeID: this.FranchiseeID,
        UserID: this.userID,
        Method: this.ordermsg.Method,
        Gift: this.ordermsg.Gift,
        Money: this.ordermsg.Money,
        Coupon: this.ordermsg.Coupon,
        ShipMoney: this.ordermsg.ShipMoney,
        PayType: this.paytype,
        ShipAddressId: this.defaultAddress.ID,
        arrayList: this.goodslist,
        FightID: this.ordermsg.NoActivity.CouPonID,
        shopID: this.ordermsg.Method == 0 ? '' : this.chosepont.ID,
        reTime: this.ordermsg.Method == 0 ? '' : this.chosetime.fulldate,
        isweb: this.isweb ? 1 : 0,
        MyID: this.mianyounum ? this.myCoupon.ID : ''
      };
      ////console.info(userInfo);
      var parameter = new Parameter();
      parameter.jyh = "1038";
      parameter.parm = JSON.stringify(userInfo);
      //console.log(parameter);
      this.nativeService.showLoading("支付中");
      this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {

        var result = JSON.parse(res.result);
        this.goodslist = [];
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
                 
                  that.paySuccess = true;
                  that.nativeService.hideLoading();
                  
                }
              });
            } else {
              /**App支付 */
              WechatPlugin.sendPaymentRequest(data).then((result) => {
                this.nativeService.showToast("支付订单成功");
                this.paySuccess = true;
                that.nativeService.hideLoading();
              }, error => {
                this.nativeService.showToast(error);
              });
            }
          } else if (this.paytype == 1) {
            /**支付包支付 */
            AliPay.pay(result.Msg, success => {
              var msg = JSON.parse(success.result);
              if (msg.alipay_trade_app_pay_response.msg == "Success") {
                that.nativeService.hideLoading();
                this.nativeService.showToast("支付订单成功");
             
                this.paySuccess = true;
              
              }
            }, error => {

            });
          }
        } else if (result.Code == "2") {
         
          this.paySuccess = true;
        } else {
          this.nativeService.showToast(result.Msg);
        }
      })
    }
   
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
  /* 弹出层 */
  alertPart(type) {
    this.show();
    this.showtype = type;
  }
  alertcoupon() {
    let modal = this.modalCtrl.create('CouponToUsePage', {
      "CouponList": this.couponList
    });
    modal.present();
    modal.onDidDismiss(data => {
      if (data != null) {
        this.coupondata = data;
        this.FightID = this.coupondata.ID;
        this.Load();
      } else {
      }
    });
    ;
  }
  //余额
  chose(number, item) {
    this.switchNum2 = number;
    this.stepnum = 1;
    this.chosepont = item;
  }
  AswitchNum3(i, item) {
    this.switchNum3 = i;
    this.stepnum = 1;
    this.chosetime = item;
    
  }
  confirm() {
    this.hide();
    this.yuenum = false;
    this.Money = 0;
    this.giftnum = false;
    this.Gift = 0;
    if (this.switchNum == 1) {
      this.mianyounum = false;
    }
    this.Load();
  }
  /**获取用户 */
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

  /**获取可用的优惠券 */
  GetUseCoupon() {
    if (this.ordermsg != null) {
      if (this.ordermsg.NoActivity != null) {
        var productList = [];
        for (var i = 0; i < this.ordermsg.NoActivity.productList.length; i++) {
          productList.push(this.ordermsg.NoActivity.productList[i].ProductId);
        }
        var Info = {
          UserID: this.userID,
          ProductID: productList
        }
        var parm = new Parameter();
        parm.jyh = "1124";
        parm.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(res => {
          var result = JSON.parse(res.result);
          if (result.Code == "1") {
            this.couponList = result.Data;
            this.usecouponNum = result.Msg;
            this.myCoupon = result.Data2;
            // console.log(result);
          }
        });
      }
    }
  }
  /**使用余额 */
  UseYue() {
    if (this.user.Money < 0) {
      return false;
    }
    this.yuenum = !this.yuenum;
    if (this.yuenum) {
      if (this.user.Money >= this.ordermsg.OrderToatal) {
        this.Money = this.ordermsg.OrderToatal;
      } else {
        this.Money = this.user.Money;
      }
      //console.log(this.Money);
    } else {
      this.Money = 0;
    }
    this.Load();
  }
  /**使用积分 */
  UseGift() {
    if (this.user.Gift < 10) {
      return false;
    }
    if (this.ordermsg.OrderToatal < 1) {
      return false;
    }
    this.giftnum = !this.giftnum;
    var maxgift = 300;
    if (this.giftnum) {
      if (this.ordermsg.OrderToatal < 1) {
        return false;
      }
      if (this.user.Gift > maxgift) {
        if (this.ordermsg.OrderToatal <= maxgift / 10) {
          this.Gift = parseInt(this.ordermsg.OrderToatal * 10 + "");
        } else {
          this.Gift = maxgift;
        }
      } else {
        if (this.user.Gift > parseInt(this.ordermsg.OrderToatal * 10 + "")) {
          this.Gift = parseInt(this.ordermsg.OrderToatal * 10 + "");
        } else {
          this.Gift = this.user.Gift;
        }
      }
    } else {
      this.Gift = 0;
    }
    this.Load();
  }

  /**获取价格反馈 */
  Load() {
    if (this.defaultAddress == null) {
      this.nativeService.showToast("请先选定用户地址");
      return false;
    }
    var userInfo = {
      ProductID: this.list,
      FranchiseeID: this.FranchiseeID,
      AddressID: this.defaultAddress.ID,
      Money: this.Money,
      Gift: this.Gift,
      Method: this.switchNum,
      FightID: this.FightID,
      isMY: this.mianyounum ? 1 : 0
    };
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1036";
    parameter.parm = JSON.stringify(userInfo);
    //console.log(parameter);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result);
      if (result.Code == 1) {
        this.ordermsg = result.Data;
        // console.log(this.ordermsg);
      } else {
        this.nativeService.showToast(result.Msg);
      }
    })
  }
  //获取自提点
  getlocationpont() {
    var Info = {
      FranchiseeID: this.FranchiseeID,
      currentLongitude: this.position.currentLongitude,
      currentLatitude: this.position.currentLatitude,
    };
    // //console.info(Info);
    var parm = new Parameter();
    parm.jyh = "1123";
    parm.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
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
    myDate.getDate();
    myDate.getDay();
    arr = { "date": myDate.getDate(), "day": myDate.getDay(), "fulldate": myDate };
    this.chosetime = arr;
    dateList.push(arr);
    for (var a = 0; a < 5; a++) {
      myDate.setDate(myDate.getDate() + 1);
      myDate.getDate();
      myDate.getDay();
      arr = { "date": myDate.getDate(), "day": myDate.getDay(), "fulldate": myDate };
      dateList.push(arr);
    }
    ////console.info(dateList);
    this.dateList = dateList
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
  UseMY() {
    this.mianyounum = !this.mianyounum;
    this.Load();
  }
  gopop() {
    this.navCtrl.pop();
  }
}
