
import { Component, } from '@angular/core';
import { NavController, IonicPage, Tab, App } from 'ionic-angular';
// import { ViewChild } from '@angular/core';
// import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Parameter } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
// import { NgIf } from '../../../node_modules/@angular/common';
/**
 * Generated class for the HomeNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  //name:'home',
  //segment:'home'
})
@Component({
  selector: 'page-home-new',
  templateUrl: 'home-new.html',
})
export class HomeNewPage {
  img9 = "assets/imgs/code2.png";
  img10 = "assets/imgs/cheat.png";
  img11 = "assets/imgs/search.png";
  imggoods = "assets/imgs/temporary/2.png";
  banner = "assets/imgs/temporary/4.png";
  activity = "assets/imgs/new/activity.png";
  logo2 = "assets/imgs/class2.png";
  tu6 = "assets/imgs/tu06.png";
  tu7 = "assets/imgs/tu07.png";
  tu8 = "assets/imgs/tu08.png";
  showname: any;
  list = [
    { "url": "assets/imgs/tu5.png", "name": "美妆", "page": "GoodsListPage", "bh": "09", "id": "", },
    { "url": "assets/imgs/tu04.png", "name": "洗化", "page": "GoodsListPage", "bh": "03", "id": "" },
    { "url": "assets/imgs/tu03.png", "name": "美食", "page": "GoodsListPage", "bh": "48", "id": "" },
    { "url": "assets/imgs/tu02.png", "name": "纸品", "page": "GoodsListPage", "bh": "26", "id": "" },
    { "url": "assets/imgs/change.png", "name": "优惠券", "page": "CouponListPage", "bh": "", "id": "", },
    // { "url": "assets/imgs/tu01.png", "name": "逛贝币", "page": "PersonalPage", "bh": "000000", "id": "" }
  ];
  citycode: string = "";
  bannerList = [];
  private defaultCitycode = "1101";
  realList: any;
  UID: any;
  constructor(public navCtrl: NavController,
    private httpService: HttpService,
    private storage: Storage,
    private nativeService: NativeService,
    private app: App) {

  }
  ionViewWillEnter() {
    this.showname = "首页";
    this.nativeService.log('homenew', 'ionViewWillEnter>');
    this.getbanner();
    this.realid();

    this.app.setTitle("逛贝")
  }

  ionViewDidLoad() {
    var that = this;
    this.storage.get("userinfo").then(val => {
      this.nativeService.log('HomeNewPage', 'val>' + val);
      if (val != null && val != undefined && val != '' && val.userinform) {
        this.UID = val.userinform.UID
        wx.ready(function () {
          that.settle();
        });
      } else {
        this.UID = "88888";
        wx.ready(function () {
          that.settle();
        });
      }
    });
  }
  realid() {
    var userInfo = {
      Relid: "",
    }
    this.nativeService.log('homenew', 'realid in');
    var parameter = new Parameter();
    parameter.jyh = "1004";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      this.nativeService.log('homenew', 'realid return>result>' + result);
      if (result.Code == 1) {
        this.realList = result.Data;
      }
    });
  }
  gotofloor(floorid, url, name) {
    this.nativeService.log('homenew', 'gotofloor in> floorid:' + floorid + " url:" + url + " name" + name);
    if (url != null && url != undefined && url != '') {

      window.location.href = url;
    }
    else {
      this.navCtrl.push("FloorGoodlistPage", {
        fid: floorid,
        name: name
      });
    }
  }

  getbanner() {
    this.nativeService.log('homenew', 'getbanner in');
    var userInfo = {

    }
    var parameter = new Parameter();
    parameter.jyh = "1200";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      this.nativeService.log('homenew', 'getbanner return>result>' + result);
      if (result.Code == 1) {
        this.nativeService.hideLoading();
        this.bannerList = result.Data;
      }
    });
  }
  //初始加载
  Initialization2() {
    var userInfo = {
      wedID: '' //this.userID,
    }
    var parameter = new Parameter();
    parameter.jyh = "1003";
    this.nativeService.showLoading("获取中");
    parameter.parm = JSON.stringify(userInfo);
    console.log('Initialization2 here');
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      this.realid();
      if (result.Code == "1") {
        if (result.Data != null && result.Data.length > 0) {
          // this.navlist = result.Data;
          // this.realid(result.Data[0].ID);
        }
      }
    })
  }
  gotosearch() {
    // //console.info("11")
    this.navCtrl.push("SearchPage");
  }

  Initialization() {
    var dcode = this.citycode.length > 4 ? this.citycode.substring(0, 4) : this.citycode;
    if (this.citycode == this.defaultCitycode) {
      return false;
    }
    var userInfo = {
      area: this.citycode == "" ? this.defaultCitycode : this.citycode,
      // area: "3100"
    };
    var parameter = new Parameter();
    parameter.jyh = "1002";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      console.log('1002>');
      var result = JSON.parse(res.result);
      var address: any;
      var userinform: any;
      //if (this.userID != result.Data.ID) {
      // this.userID = result.Data.ID;
      this.Initialization2();
      //}
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
  gotoDetail(id) {
    this.navCtrl.push("GoodDetailPage", {
      goodsid: id,
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


  gotocoupon(item, i) {

    if (i == 13) {
      this.nativeService.showToast("暂不开放");
    } else {
      this.navCtrl.push(item.page, {
        BH: item.bh,
        id: item.id,
        name: item.name
      });
    }

  }
  goshoplist() {
    this.navCtrl.push('ShopgoodscarPage');
  }
  settle() {
    wx.onMenuShareAppMessage({
      title: '逛贝商城邀请您来逛逛',
      desc: '关注逛贝，惊喜不断！', // 分享描述
      // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
      // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
      link: 'https://www.lguangguang.com/mob/?login=' + this.UID + '#/', // 分享链接
      imgUrl: "https://www.lguangguang.com/logo.png", // 分享图标
      // imgUrl: this.icon, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        this.nativeService.showToast("分享成功");
      },
      cancel: function () {
      }
    });
    wx.onMenuShareTimeline({
      title: '逛贝商城邀请您来逛逛', // 分享标题
      link: 'https://www.lguangguang.com/mob/?login=' + this.UID + '#/', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: "https://www.lguangguang.com/logo.png",// 分享图标
      success: function () {
        this.nativeService.showToast("分享成功");
      },
    })
  }
  gotoclass() {
    this.app.getRootNav().setRoot('TabsPage', {
      tabId: 1
    });
  }
  QRcode() {

    // this.sendSKU('6903148271308');
    // return;
    if (this.isWeiXin()) {

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
    var userInfo = {
      SKU: item
    }
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1159";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == "1") {
        this.navCtrl.push("GoodDetailPage", {
          goodsid: result.Data,
        });
      } else {
        this.nativeService.showToast(result.Msg);
      }
    })
  }
  gotoCouponListPage() {
    this.navCtrl.push("CouponListPage");
  }
  gotoPushCodePage() {
    this.navCtrl.push("PushCodePage");
  }
  gotopage() {
    this.navCtrl.push("GongzPage");
  }
  gotoweixin() {
    alert("点击跳转")
    wx.miniProgram.navigateTo({ url: '/pages/wxpay/wxpay' })
  }
}
