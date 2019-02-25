import { Component, ViewChild } from '@angular/core';
import { Platform, App, ToastController, Keyboard, Nav, IonicApp, MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Parameter } from '../model/Model';
import { NativeService } from '../providers/NativeService';
import { HttpService } from '../providers/HttpService';
// import { LoginPage } from '../pages/login/login';
// import { Jsonp } from '../../node_modules/@angular/http';

// import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class GBApp {
  @ViewChild('Nav') nav: Nav;
  //rootPage = "LoginPage";
  rootPage: any;
  flag: any;
  flag1: any;
  flag2: any;
  backButtonPressed: boolean = false;
  constructor(public platform: Platform, private _menu: MenuController, statusBar: StatusBar, splashScreen: SplashScreen, private nativeService: NativeService,
    private app: App, private storage: Storage, private toastCtrl: ToastController, private keyboard: Keyboard, private ionicApp: IonicApp, private httpService: HttpService, ) {


    var href = location.href;
    console.info("app" + href);
    var array = href.split('?');
    this.flag = array[1];

    if (this.flag != undefined && this.flag != null) {
      var arr2 = [];
      arr2 = this.flag.split("=");
      this.flag1 = arr2[0];
      this.flag2 = arr2[1];
      var arr3 = [];
      arr3 = this.flag2.split("&")
      this.flag2 = arr3[0].split("#/")[0]
    } else {
      // this.flag1 = "default";
      // this.flag2 = "default";
    }
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      // this._setupBrowserBackButtonBehavior();//注册返回按键事件
      //this.assertNetwork();//检测网络
      this.nativeService.log('app.component', 'constructor>this.nativeService.isMobile()>' + this.nativeService.isMobile());

      if (this.isWeiXin()) {
        this.nativeService.log('app.component', "this.isWeiXin()>" + this.isWeiXin());
        this.WxLoad();
        this.storage.get("userinfo").then(val => {
          this.nativeService.log('app.component', "val.userinform>" +JSON.stringify(val));
          if (val != "" && val != null && val.userinform && val.userinform.ID!='') {
            // this.httpService.post("/MobService/AutoWx", {"userid":val.userinform.ID}).map(res => res.json()).subscribe(result => {
            // });
            var _parm={"userid":val.userinform.ID};
            var parameter = new Parameter();
            parameter.jyh = "2007";
            parameter.parm = JSON.stringify(_parm);
            this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {});
            this.goWhere();
          }
          else {
            this.AutoWx();
          }
        });
      } else {
        this.goWhere();
      }



    });
    this.storage.get("startDate").then(val => {
      if (val == null || val == undefined || val == '') {
        var newdate = new Date().getTime();
        this.storage.set("startDate", newdate);
      } else {

      }
    });


  }
  // ionViewWillEnter() {
  //   this.app.getRootNav().setRoot('RegisterPage');
  // }
  assertNetwork() {
    if (!this.nativeService.isConnecting()) {
      this.toastCtrl.create({
        message: '未检测到网络,请连接网络',
        showCloseButton: true,
        closeButtonText: '确定'
      }).present();
    }
  }

  registerBackButtonAction() {
    if (!this.nativeService.isAndroid()) {
      return;
    }
    this.platform.registerBackButtonAction(() => {
      if (this.keyboard.isOpen()) {//如果键盘开启则隐藏键盘
        this.keyboard.close();
        return;
      }
      //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
      // this.ionicApp._toastPortal.getActive() ||this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
      let activePortal = this.ionicApp._modalPortal.getActive();
      if (activePortal) {
        activePortal.dismiss();
        return;
      }
      let activeVC = this.nav.getActive();
      let tabs = activeVC.instance.tabs;
      let activeNav = tabs.getSelected();
      return activeNav.canGoBack() ? activeNav.pop() : this.showExit();
      //this.showExit()
    }, 1);
  }

  //双击退出提示框
  showExit() {
    if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
      this.platform.exitApp();
    } else {
      this.backButtonPressed = true;
      this.nativeService.showToast("再按一次退出应用");
      setTimeout(() => { //2秒内没有再次点击返回则将触发标志标记为false
        this.backButtonPressed = false;
      }, 2000);
    }
  }

  WxLoad() {
    let url = location.href.split('#')[0];
    var Info = {
      url: url
    };
    var parm = new Parameter();
    parm.jyh = "1126";
    parm.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(val => {
      var result = JSON.parse(val.result);
      console.info('WxLoad return ')
      if (result.Code == "1") {
        var data = result.Data;
        // alert(data.timestamp)
        this.storage.set("timestamp", data).then(val => {
        });
        wx.config({
          debug: false,
          appId: data.appId,
          timestamp: data.timestamp,
          nonceStr: data.nonceStr,
          signature: data.signature,
          jsApiList: ['chooseImage', 'uploadImage', 'downloadImage', 'previewImage', 'getLocation', 'scanQRCode', 'chooseWXPay', 'onMenuShareAppMessage', 'onMenuShareTimeline',"updateTimelineShareData","updateAppMessageShareData"]
        });
      
      }
    });
  }
  /**微信自动登录 */
  AutoWx() {
    this.nativeService.log("app.component", 'AutoWx')
    let parms={"data":"","returnUrl":""};
    if (this.flag1 != null && this.flag1 != '' && this.flag1 != undefined) {
      //parms = { "data": this.flag1 + "=" + this.flag2 };
      parms.data=this.flag1 + "=" + this.flag2 ;
    }
    else{
      parms.returnUrl=location.href;
    }
    this.httpService.post("/MobService/AutoWx", parms).map(res => res.json()).subscribe(result => {
      //,"returnUrl":"https://www.lguangguang.com/mobtest"
      this.nativeService.log('app.component', 'autowx return》' + result.Data);
      console.log(JSON.stringify(result));
      if (result.Code == "1") {
        this.storage.set("codeflag", true);
        //var info = JSON.parse(result.Data);
        this.storage.set("userinfo", { 'userinform': result.Data });
        this.goWhere();
      } else if (result.Code == "3") {
        this.storage.set("codeflag", true);
        window.open(result.Data, "_self");
      }
      else if (result.Code == "2") {
        this.storage.set("userinfo", { 'userinform': result.Data }).then(val => {
          //this.app.getRootNav().setRoot('LoginPage');
          this.goWhere();
        });
        // this.storage.set("codeflag", false);
        // var address = [];
        // var userinform = [];
        // this.storage.get("userinfo").then(val => {
        //   if (val != null) {
        //     address = val.address;
        //     userinform = result.Data;

        //   } else {

        //   }
        // })
      }
    });
  }

  /**验证登录信息 */
  ValidateLoad(UserID: string) {
    var Info = {
      UserID: UserID
    }
    var parm = new Parameter();
    parm.jyh = "1138";
    parm.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(val => {
      var result = JSON.parse(val.result);
      console.log(result);
      if (result.Code == "1") {
        /**用户正常 */
      } else {
        this.storage.set("userinfo", null);
      }
    });
  }
  //判断是否为微信
  isWeiXin() {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua: any
    ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  }
  getlocationWX() {
    var that = this;
    wx.ready(function () {
      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
          var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          //var speed = res.speed; // 速度，以米/每秒计
          //var accuracy = res.accuracy; // 位置精度
          that.Initialization3(latitude, longitude);
        }
      });
    })
  }
  Initialization3(latitude: string, longitude: string) {
    var userInfo = {
      latitude: latitude,
      longitude: longitude
    };
    var parameter = new Parameter();
    parameter.jyh = "1127";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      console.log(result);
      var address: any;
      var userinform: any;
      this.storage.get("userinfo").then(val => {
        if (val != null) {
          address = val.address;
          userinform = val.userinform;
          address = result.Data;
        } else {
          userinform = { "ID": "" };
          address = result.Data;
        }

        this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(val => {
        });
      });
    })
  }


  goWhere() {

    if (Math.random() < 0) {
      return;
    }
    else {
      var arr3 = [];
      this.nativeService.log("app.components", " page  goWhere1  this.flag》" + this.flag)
      var href = location.href;
      var array = href.split('?');
      
      this.flag = array[1];
      this.nativeService.log("app.components", " page  goWhere2  this.flag》" + this.flag)
      if (this.flag != undefined && this.flag != null) {
        var arr2 = [];
        arr2 = this.flag.split("=");
        this.flag1 = arr2[0];
        this.flag2 = arr2[1];

        this.nativeService.log("appcompontent ", " this.flag1》》》》" + this.flag1);
        this.nativeService.log("appcompontent ", 'flag2' + this.flag2);
        if (this.flag1 == "resigiter") {
          this.nativeService.log('app.component', 'gowhere into>resigiter>' + this.flag2)
          arr3 = [];

          arr3 = this.flag2.split("&")
          this.flag2 = arr3[0].split("#")[0].trim();
          //  this.flag2 = arr3[0].replace("#/", '').trim();
          this.app.getRootNav().setRoot('ResigiterPage', {
            tabId: this.flag2
          });
        } else if (this.flag1 == "login") {
          // this.showflag = true;
          arr3 = [];
          //console.info("tab>>>首页")
          arr3 = this.flag2.split("&")
          this.flag2 = arr3[0].split("#")[0].trim();
          this.storage.set("UID", this.flag2);
          this.app.getRootNav().setRoot('TabsPage', {
            tabId: 0
          });
        } else if (this.flag1 == "goodsDetail") {
          arr3 = [];
          arr3 = this.flag2.split("&")
          var flag2 = arr3[0].split("#")[0].trim();
          this.flag2 = flag2.split("UID:")[0];
          var UID = flag2.split("UID:")[1];
          //console.info("uid>>>>>>>>>>>>>>>>>>>>" + UID)
          this.storage.set("UID", UID);
          this.app.getRootNav().setRoot('GoodDetailPage', {
            goodsid: this.flag2,
          });

        } else if (this.flag1 == "shopIndex") {
          arr3 = [];
          arr3 = this.flag2.split("&")
          this.flag2 = arr3[0].split("#")[0].trim();
          //console.info("shopID>>>>>" + this.flag2)
          this.app.getRootNav().setRoot('ShopIndexPage', {
            ShopID: this.flag2,
          });
        }else if (this.flag1 == "orderlist") {
          arr3 = [];
          arr3 = this.flag2.split("&")
          this.flag2 = arr3[0].split("#")[0].trim();
          this.app.getRootNav().setRoot('TabsPage', {
            tabId: 3,
          });
        }else {
          // this.app.getRootNav().setRoot('TabsPage');
        }
      } else {
        this.nativeService.log("app.components", " page goWhere3  this.flag == undefined" + this.flag)
        //this.app.getRootNav().setRoot('TabsPage');
        if (location.href.indexOf('#') <= 0) {
          this.app.getRootNav().setRoot('TabsPage');
        }


      }

    }
  }

  //------------------
  private _setupBrowserBackButtonBehavior() {
    // Register browser back button action(s)
    window.onpopstate = (evt) => {
      // Close menu if open
      if (this._menu.isOpen()) {
        this._menu.close();
        return;
      }
      // Close any active modals or overlays
      let activePortal = this.ionicApp._loadingPortal.getActive() ||
        this.ionicApp._modalPortal.getActive() ||
        this.ionicApp._toastPortal.getActive() ||
        this.ionicApp._overlayPortal.getActive();
      // alert('activePortal'+activePortal);
      if (activePortal) {
        activePortal.dismiss();
        return;
      }
      //console.info("返回》》》》" + activePortal);
      //alert(this.nav.canGoBack())
      let activeVC = this.nav.getActive();
      let tabs = activeVC.instance.tabs;
      let activeNav = tabs.getSelected();
      //alert('root>>activeNav.canGoBack()>'+activeNav.canGoBack());
      //console.info("返回22》》》》" + activeNav.canGoBack());
      if (activeNav.canGoBack()) {
        activeNav.pop();
        return
      }

    };
    // Fake browser history on each view enter

  }
  /* _setupBrowserBackButtonBehavior() {

    // Register browser back button action(s)
    window.onpopstate = (evt) => {
      // Close menu if open
      // Close any active modals or overlays
      let activePortal = this.ionicApp._loadingPortal.getActive() ||
        this.ionicApp._modalPortal.getActive() ||
        this.ionicApp._toastPortal.getActive() ||
        this.ionicApp._overlayPortal.getActive();

      if (activePortal) {
        activePortal.dismiss();
        return;
      }

      // Navigate back
      if (this.navCtrl.canGoBack()) {

        this.app.goBack();

      }else {
        // WeixinJSBridge.call('closeWindow');
      }
    };

    // Fake browser history on each view enter
    this.app.viewDidEnter.subscribe((app) => {
      history.pushState(null, null, "");
    });
  }*/
  //---
} 
