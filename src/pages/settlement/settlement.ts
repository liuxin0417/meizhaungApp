import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, App, AlertController } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
import { Storage } from '@ionic/storage';
import { WechatPlugin } from './../../providers/WechatPlugin';
import { Jsonp } from '@angular/http';

declare var wx: any;
declare var AliPay: any;
@IonicPage()
@Component({
  selector: 'page-settlement',
  templateUrl: 'settlement.html',
})
export class SettlementPage {
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
  desimg = "assets/imgs/jian.png";
  addimg = "assets/imgs/jia.png";
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
  giftnum3 = false;
  coupondata: any;;
  stepnum = 1;
  /* 测试列表 */
  textlist = [1, 2, 3, 1, 2, 2, 3]
  /* 配送方式 */
  switchNum = 0;
  usecouponNum = 0;
  shoppont = [];
  selfpont = [];
  chosepont: any;
  choseself: any;
  chosetime: any;
  dateList: any;
  isweb = false;
  paySuccess = false;
  mianyounum = false;
  single: any;
  canUseGift: any;
  useGift = 0;
  surplus = 0;
  useGiftMoney = 0;
  surplusMoney = 0;
  couponMonsy = 0;
  AttributesXml: any;
  ProductID: any;
  goodslist2 = [];
  PayMoney: any;
  shipMemo: any;
  isXcx=false;
  private userInfo: any;
  private position: any;
  private user: any;
  private Money = 0;
  private Gift = 0;
  // private Method = 0;
  private couponList = [];
  private myCoupon: any;
  private FightID = "";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,
    private app: App,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
  ) {
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage", { showflag: true });
        } else {
          this.userInfo = val.userinform;
          this.FranchiseeID = "";
          this.LoadUser();
        }
      } else {
        this.navCtrl.push("LoginPage", { showflag: true });
      }
    });
    this.storage.get("position").then(val => {
      //console.info(val);
      if (val != "" && val != null) {
        this.position = val;

      } else {
        // this.navCtrl.push("LoginPage",{showflag:true});
      }
    });
    this.isweb = !this.nativeService.isMobile();
  }
  ionViewWillEnter() {
    this.loginaddress();
    // if (this.addressflag == false) {
    //   this.loginaddress();
    //   this.addressflag = true;
    // }
  }
  ionViewDidLoad() {
    this.ordermsg = this.navParams.get("ordermsg");
    this.shipMemo = '积分兑换比例为' + (1 / this.ordermsg.MoneyToGift).toFixed(0) + ':1';
    if (this.ordermsg.GiftRate == 1) {
      this.shipMemo += '。可以全额使用积分。';
    }
    else {
      this.shipMemo += ',使用金额不得超过订单总额的' + (this.ordermsg.GiftRate * 100) + '%';
    }
    this.nativeService.log('settlement ', 'ionViewDidLoad ordermsg>' + JSON.stringify(this.ordermsg));
    this.userID = this.navParams.get("userID");
    this.list = this.navParams.get("list");
    this.single = this.navParams.get("single");
    this.AttributesXml = this.navParams.get("AttributesXml");
    this.ProductID = this.navParams.get("ProductID");
    this.getlist();
    this.getlist2();
    this.Calcilation();
    this.CalcilationMoney();
    ////console.info(this.ordermsg);
    this.loginaddress();
    this.GetUseCoupon();
    this.getdate();
    this.getlocationpont();


  }
  getlist() {
    for (var a = 0; a < this.ordermsg.lstCart.length; a++) {
      for (var b = 0; b < this.ordermsg.lstCart[a].List.length; b++) {
        if (this.ordermsg.lstCart[a].List[b].isCheck == 1) {
          var list = { "ID": this.ordermsg.lstCart[a].List[b].ID }

          this.goodslist.push(list);
        } else {

        }
      }
    }
    //console.info(this.goodslist)
  }
  getlist2() {
    for (var a = 0; a < this.ordermsg.lstCart.length; a++) {
      for (var b = 0; b < this.ordermsg.lstCart[a].List.length; b++) {
        if (this.ordermsg.lstCart[a].List[b].isCheck == 1) {
          var list = { "ID": this.ordermsg.lstCart[a].List[b].ProductId }
          this.goodslist2.push(list);
        } else {

        }
      }
    }
    //console.info(this.goodslist2)
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
      //console.info(result);
      if (result.Code == 1) {
        this.defaultAddress = result.Data[0];
        this.addresList = result.Data
        // if (result.Data2 != null) {
        //   this.addresList[0] = result.Data2;
        //   this.defaultAddress = result.Data2;
        //   for (var n = 0; n < result.Data.length; n++) {
        //     this.addresList.push(result.Data[n])
        //   }
        // } else {


        // }
        //console.info(this.addresList.length)
        if (this.addresList.length == 0) {
          this.addressflag = false;
        } else {
          this.addressflag = true;
          this.defaultAddress = result.Data[0];
          this.addresList = result.Data
          // for (var b = 0; b < result.Data.length; b++) {
          //   this.addresList.push(result.Data[b]);
          // }
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
  payfont(){
    var that=this;
    this.isXcx = false;
    // wx.miniProgram.getEnv(function (res) {
    //   that.isXcx=res.miniprogram // true
    //   that.pay();
    // })
      that.pay();

  }
  pay() {
    var that = this;
    if (this.defaultAddress == undefined) {
      this.nativeService.showToast("请先创建地址");
      return;
    }

    var userInfo = {}
    var parameter = new Parameter();
    if (this.single == true) {//单个商品
      var _pNum = this.ordermsg.lstCart[0].List[0].Quantity;
      userInfo = {
        ProductID: this.ProductID,
        AttributesXml: this.AttributesXml,
        UserID: this.userID,
        Num: _pNum,
        Method: this.switchNum,
        ShipAddressId: this.defaultAddress.ID,
        PayType: this.paytype,
        isweb: this.isweb ? 1 : 0,
        FightID: this.FightID,
        Gift: this.useGift,
        CouponMoney: this.couponMonsy,
        isXCX:this.isXcx?1:0,
        shopID: this.switchNum == 0 ? "" : this.chosepont.ID
      }
      parameter.jyh = "1140";
    } else {
      if (this.goodslist.length == 0) {
        this.nativeService.showToast("无效商品");
        return;
      }
      userInfo = {
        Product: this.goodslist,
        UserID: this.userID,
        Method: this.switchNum,
        Gift: this.useGift,
        PayType: this.paytype,
        ShipAddressId: this.defaultAddress.ID,
        FightID: this.FightID,
        isweb: this.isweb ? 1 : 0,
        CouponMoney: this.couponMonsy,
        isXCX:this.isXcx?1:0,
        shopID: this.switchNum == 0 ? "" : this.chosepont.ID
      };
      parameter.jyh = "1038";
    }
    //console.info(userInfo);
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("支付中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        //console.info("进入code==1" + result.Code)
        if (this.paytype == 2) {
          /**微信支付 */
          var data = result.Data;
          if (this.isweb) {
            /**微信公众号支付 */
            // wx.error(function (res) {
            //   alert(res.err_msg);
            // });
           
            if (this.isXcx) {
              var params = '?timestamp=' + data.timestamp + '&nonceStr=' + data.noncestr
                + '&' + data.package + '&signType=' +data.signType
                + '&paySign=' + data.sign + '&orderId=0' + '&pType=0';
              //定义path 与小程序的支付页面的路径相对应
              var path = '/pages/wxpay/wxpay' + params;
              var info = {
                page: 'detail',//参数一
                goodsID: "12345",//参数二
              };
              var json = JSON.stringify(info);
              //通过JSSDK的api使小程序跳转到指定的小程序页面
              wx.miniProgram.navigateTo({ url: path });
              // wx.miniProgram.postMessage({ data: json });
              return
            }else{

            }
            this.PayMoney = data.PayMoney
            wx.chooseWXPay({
              timestamp: data.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
              nonceStr: data.noncestr, // 支付签名随机串，不长于 32 位
              package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
              signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
              paySign: data.sign, // 支付签名
              success: function (res) {
                /* that.navCtrl.setRoot("PaySuccessPage", {
                  Info: that.ordermsg.OrderToatal
                }); */
                // alert(res);
                this.goodslist = [];
                that.paySuccess = true;
                that.nativeService.hideLoading();
                //that.app.getRootNav().setRoot('PaySuccessPage');
                // if(res.chooseWXPay=="ok"){
                //   alert("支付成功");
                // }
                // 支付成功后的回调函数
              },
              cancel: function () {
                that.nativeService.hideLoading();
              },
              error: function (res) {
                // alert(res)
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
              //this.navCtrl.pop();
              /* that.navCtrl.setRoot("PaySuccessPage", {
                Info: that.ordermsg.OrderToatal
              }); */
              this.paySuccess = true;
              //that.app.getRootNav().setRoot('PaySuccessPage');
            }
          }, error => {

          });
        }
      } else if (result.Code == "2") {
        /* that.navCtrl.setRoot("PaySuccessPage", {
          Info: that.ordermsg.OrderToatal
        }); */
        that.nativeService.hideLoading();
        this.nativeService.log("pay result.Code==2", "");
        this.PayMoney = 0;

        this.nativeService.showToast("支付订单成功");
        this.paySuccess = true;
      } else {
        that.nativeService.hideLoading();
        this.nativeService.showToast(result.Msg);
      }
    })

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
    var that = this;
    //console.info(this.couponList)
    let modal = this.modalCtrl.create('CouponToUsePage', {
      CouponList: that.couponList
    });

    modal.onDidDismiss(data => {
      if (data != null) {
        this.coupondata = data;
        this.FightID = this.coupondata.ID;
        for (var a = 0; a < this.couponList.length; a++) {
          this.couponList[a].isL = false;
        }
        this.couponList[this.coupondata.index].isL = true

        this.CouponMoney();
      } else {
        for (var c = 0; c < this.couponList.length; c++) {
          this.couponList[c].isL = false;
        }
      }
    });
    modal.present();
  }
  //选择网点
  chose(number, item) {
    this.nativeService.log("settlement", 'chose  i:' + number + "    switchNum2" + this.switchNum2)
    this.switchNum2 = number;
    this.stepnum = 1;
    this.chosepont = item;
  }
  choseSelf(i, item) {
    this.switchNum3 = i;
    this.stepnum = 1;
    this.choseself = item;
    //console.info(item)
  }
  confirm() {
    this.hide();
    this.CalcilationMoney();
    // this.yuenum = false;
    // this.Money = 0;
    // this.giftnum = false;
    // this.Gift = 0;
    // if (this.switchNum == 1) {
    //   this.mianyounum = false;
    // }
    // this.Load();
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
    var Info = {
      UserID: this.userID,
      Product: this.goodslist2
    }
    //console.info(Info)
    var parm = new Parameter();
    parm.jyh = "1124";
    parm.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == "1") {
        this.couponList = result.Data;
        this.usecouponNum = result.Data.length;
        this.myCoupon = result.Data2;
      }
    });

  }
  //验证优惠券
  CouponMoney() {
    var Info = {}
    if (this.single) {
      var _pNum = this.ordermsg.lstCart[0].List[0].Quantity;
      Info = {
        CouponID: this.FightID,
        UserID: this.userID,
        Type: 0,
        Product: [{
          "ID": this.ProductID,
          "AttributesXml": this.AttributesXml,
          "Num": _pNum,
        }],

      }
    } else {
      Info = {
        CouponID: this.FightID,
        UserID: this.userID,
        Type: 1,
        Product: this.goodslist,
      }
    }
    //console.info(Info)
    var parm = new Parameter();
    parm.jyh = "1143";
    parm.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == "1") {
        this.couponMonsy = result.Data;
        this.useCouponAfter();
      } else {
        this.couponMonsy = 0;
        this.coupondata = "";
        this.FightID = "";
        this.CalcilationMoney();
        // this.useCouponAfter();
        for (var a = 0; a < this.couponList.length; a++) {
          this.couponList[a].isL = false;
        }
        this.nativeService.showToast(result.Msg);
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
  UseGift2() {
    let prompt = this.alertCtrl.create({
      title: "请输入您想要使用的积分数量",
      message: "积分兑换比例为1:" + this.ordermsg.MoneyToGift + ",使用金额不得超过订单总额的" + (this.ordermsg.GiftRate * 100) + "%",
      inputs: [
        {
          name: 'gift',
          placeholder: '积分',
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: '确认',
          handler: data => {
            // console.log(data);
            if (data.gift * this.ordermsg.MoneyToGift <= this.ordermsg.TotalMoney * this.ordermsg.GiftRate) {
              this.useGift = data.gift;
              this.useGiftMoney = this.useGift * this.ordermsg.MoneyToGift;
              this.Calcilation();
              this.CalcilationMoney();
            } else if (data.gift > this.ordermsg.Gift) {
              this.nativeService.showToast("没有这么多积分");
              this.UseGift2();
            } else {
              this.nativeService.showToast("使用积分超额");
              this.UseGift2();
            }


          }
        }
      ]
    });
    prompt.present();
  }
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
      // FranchiseeID: this.FranchiseeID,
      // currentLongitude: this.position.currentLongitude,
      // currentLatitude: this.position.currentLatitude,
    };
    // //console.info(Info);
    var parm = new Parameter();
    parm.jyh = "1123";
    parm.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == "1") {
        if (result.Data.length > 0) {
          for (var i = 0; i < result.Data.length; i++) {
            if (result.Data[i].isShopAdd == 1) {
              this.selfpont.push(result.Data[i])
            }
            else {
              this.shoppont.push(result.Data[i]);
            }
          }
          this.choseself = this.selfpont[0];
          this.chosepont = this.shoppont[0];
        }





      } else {

      }
    });
  }
  getgoodsAddress() {
    if (this.shoppont != undefined && this.shoppont != null) {
      this.switchNum = 1
    } else {
      this.nativeService.showToast("暂无自提点");
    }
  }
  getZtAddress() {
    if (this.selfpont != undefined && this.selfpont != null) {
      this.switchNum = 2
    } else {
      this.nativeService.showToast("暂无自提点");
    }
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
  Calcilation() {
    this.surplus = this.ordermsg.Gift - this.useGift;
    this.useGiftMoney = this.useGift * this.ordermsg.MoneyToGift;
  }
  CalcilationMoney() {
    this.surplusMoney = this.ordermsg.TotalMoney - this.useGiftMoney - this.couponMonsy;
    if (this.switchNum == 0) {
      if (this.ordermsg.TotalMoney >= this.ordermsg.FullMoney) {

      } else {
        this.surplusMoney += this.ordermsg.ShipMoney;
      }
    } else if (this.switchNum == 1) {
      if (this.ordermsg.TotalMoney >= this.ordermsg.SiteShipMoney) {

      } else {
        this.surplusMoney += this.ordermsg.ShipMoney;
      }
    }
    else {

    }

  }
  //是否使用积分
  UseGift3() {
    this.giftnum3 = !this.giftnum3;
    if (this.giftnum3 == true) {

    } else {
      this.useGift = 0
    }
    this.Calcilation();
    //this.CalcilationMoney();
  }

  giftfocus() {

    if (this.useGift == 0) {
      this.useGift = null;
    }
  }
  checkNum(evt) {

    if (evt.key == '-') {
      return false;
    }

  }
  checkGift() {
    this.nativeService.log('settlement', 'checkGift  this.useGift>' + this.useGift);
    if (this.useGift <= 0) {

      this.useGift = null;
      return;
    }
    //MoneyToGift 比例0.01
    //GiftRate 积分使用比例
    this.nativeService.log('settlement', 'checkGift  this.ordermsg.MoneyToGift>' + this.ordermsg.MoneyToGift);
    this.nativeService.log('settlement', 'checkGift  this.ordermsg.GiftRate>' + this.ordermsg.GiftRate);
    this.nativeService.log('settlement', 'checkGift  this.ordermsg.Gift>' + this.ordermsg.Gift);
    this.nativeService.log('settlement', 'checkGift  this.ordermsg.TotalMoney>' + this.ordermsg.TotalMoney);
    this.nativeService.log('settlement', 'checkGift  this.surplusMoney>' + this.surplusMoney);
    if (this.useGift * this.ordermsg.MoneyToGift <= this.ordermsg.TotalMoney * this.ordermsg.GiftRate && this.useGift <= this.ordermsg.Gift) {
      this.useGiftMoney = this.useGift * this.ordermsg.MoneyToGift;
    } else if (this.useGift > this.ordermsg.Gift) {
      this.nativeService.showToast("没有这么多积分");
      this.useGift = this.ordermsg.Gift
      // this.UseGift2();
    } else {
      this.nativeService.showToast("使用积分超额");

      this.useGift = Number(((this.ordermsg.TotalMoney * this.ordermsg.GiftRate) / this.ordermsg.MoneyToGift).toFixed(0));
      //this.useGift = (this.ordermsg.TotalMoney* this.ordermsg.GiftRate)/this.ordermsg.MoneyToGift;

      // this.UseGift2();
    }
    this.Calcilation();
    this.CalcilationMoney();
  }
  //计算优惠券后价格
  useCouponAfter() {
    this.useGift = 0;
    this.Calcilation();
    this.CalcilationMoney();
    this.giftnum3 = false;
  }


  //加数量
  addnum(a, b, ID) {
    this.ordermsg.lstCart[a].List[b].Quantity++;
    this.ordermsg.lstCart[a].SubNum++;
    this.ordermsg.lstCart[a].List[b].SubPice += (this.ordermsg.lstCart[a].List[b].Price * 1);
    this.ordermsg.lstCart[a].SubPrice += (this.ordermsg.lstCart[a].List[b].Price * 1);
    this.ordermsg.TotalMoney += (this.ordermsg.lstCart[a].List[b].Price * 1);
    if (!this.single) {
      this.uploadcars(ID, this.ordermsg.lstCart[a].List[b].Quantity);
    }
    this.GetUseCoupon();
    this.Calcilation();
    this.CalcilationMoney();
    //this.goodslist[a].List[b].Quantity++;
    //  this.totalnum = this.totalnum + this.goodslist[a].List[b].Price * 100;
    //this.uploadcars(ID, this.goodslist[a].List[b].Quantity);
  }
  //减去
  jiannum(a, b, ID) {
    if (this.ordermsg.lstCart[a].List[b].Quantity > 1) {

      this.ordermsg.lstCart[a].SubNum--;
      this.ordermsg.lstCart[a].List[b].Quantity--;
      this.ordermsg.lstCart[a].List[b].SubPice -= (this.ordermsg.lstCart[a].List[b].Price * 1);
      this.ordermsg.lstCart[a].SubPrice -= (this.ordermsg.lstCart[a].List[b].Price * 1);
      this.ordermsg.TotalMoney -= (this.ordermsg.lstCart[a].List[b].Price * 1);
      if (!this.single) {
        this.uploadcars(ID, this.ordermsg.lstCart[a].List[b].Quantity);
      }

      this.GetUseCoupon();
      this.Calcilation();
      this.CalcilationMoney();
    } else {

    }
    //this.uploadcars(ID, this.goodslist[a].List[b].Quantity);
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
        //this.getnum();
        //this.nativeService.hideLoading();
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }

}
