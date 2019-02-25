webpackJsonp([63],{

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNewPageModule", function() { return HomeNewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_new__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeNewPageModule = (function () {
    function HomeNewPageModule() {
    }
    return HomeNewPageModule;
}());
HomeNewPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_new__["a" /* HomeNewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__home_new__["a" /* HomeNewPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], HomeNewPageModule);

//# sourceMappingURL=home-new.module.js.map

/***/ }),

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { ViewChild } from '@angular/core';
// import { Slides } from 'ionic-angular';




// import { NgIf } from '../../../node_modules/@angular/common';
/**
 * Generated class for the HomeNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeNewPage = (function () {
    function HomeNewPage(navCtrl, httpService, storage, nativeService, app) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.storage = storage;
        this.nativeService = nativeService;
        this.app = app;
        this.img9 = "assets/imgs/code2.png";
        this.img10 = "assets/imgs/cheat.png";
        this.img11 = "assets/imgs/search.png";
        this.imggoods = "assets/imgs/temporary/2.png";
        this.banner = "assets/imgs/temporary/4.png";
        this.activity = "assets/imgs/new/activity.png";
        this.logo2 = "assets/imgs/class2.png";
        this.tu6 = "assets/imgs/tu06.png";
        this.tu7 = "assets/imgs/tu07.png";
        this.tu8 = "assets/imgs/tu08.png";
        this.list = [
            { "url": "assets/imgs/tu5.png", "name": "美妆", "page": "GoodsListPage", "bh": "09", "id": "", },
            { "url": "assets/imgs/tu04.png", "name": "洗化", "page": "GoodsListPage", "bh": "03", "id": "" },
            { "url": "assets/imgs/tu03.png", "name": "美食", "page": "GoodsListPage", "bh": "48", "id": "" },
            { "url": "assets/imgs/tu02.png", "name": "纸品", "page": "GoodsListPage", "bh": "26", "id": "" },
            { "url": "assets/imgs/change.png", "name": "优惠券", "page": "CouponListPage", "bh": "", "id": "", },
        ];
        this.citycode = "";
        this.bannerList = [];
        this.defaultCitycode = "1101";
    }
    HomeNewPage.prototype.ionViewWillEnter = function () {
        this.showname = "首页";
        this.nativeService.log('homenew', 'ionViewWillEnter>');
        this.getbanner();
        this.realid();
        this.app.setTitle("逛贝");
    };
    HomeNewPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var that = this;
        this.storage.get("userinfo").then(function (val) {
            _this.nativeService.log('HomeNewPage', 'val>' + val);
            if (val != null && val != undefined && val != '' && val.userinform) {
                _this.UID = val.userinform.UID;
                wx.ready(function () {
                    that.settle();
                });
            }
            else {
                _this.UID = "88888";
                wx.ready(function () {
                    that.settle();
                });
            }
        });
    };
    HomeNewPage.prototype.realid = function () {
        var _this = this;
        var userInfo = {
            Relid: "",
        };
        this.nativeService.log('homenew', 'realid in');
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1004";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            _this.nativeService.log('homenew', 'realid return>result>' + result);
            if (result.Code == 1) {
                _this.realList = result.Data;
            }
        });
    };
    HomeNewPage.prototype.gotofloor = function (floorid, url, name) {
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
    };
    HomeNewPage.prototype.getbanner = function () {
        var _this = this;
        this.nativeService.log('homenew', 'getbanner in');
        var userInfo = {};
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1200";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            _this.nativeService.log('homenew', 'getbanner return>result>' + result);
            if (result.Code == 1) {
                _this.nativeService.hideLoading();
                _this.bannerList = result.Data;
            }
        });
    };
    //初始加载
    HomeNewPage.prototype.Initialization2 = function () {
        var _this = this;
        var userInfo = {
            wedID: '' //this.userID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1003";
        this.nativeService.showLoading("获取中");
        parameter.parm = JSON.stringify(userInfo);
        console.log('Initialization2 here');
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            _this.realid();
            if (result.Code == "1") {
                if (result.Data != null && result.Data.length > 0) {
                    // this.navlist = result.Data;
                    // this.realid(result.Data[0].ID);
                }
            }
        });
    };
    HomeNewPage.prototype.gotosearch = function () {
        // //console.info("11")
        this.navCtrl.push("SearchPage");
    };
    HomeNewPage.prototype.Initialization = function () {
        var _this = this;
        var dcode = this.citycode.length > 4 ? this.citycode.substring(0, 4) : this.citycode;
        if (this.citycode == this.defaultCitycode) {
            return false;
        }
        var userInfo = {
            area: this.citycode == "" ? this.defaultCitycode : this.citycode,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1002";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log('1002>');
            var result = JSON.parse(res.result);
            var address;
            var userinform;
            //if (this.userID != result.Data.ID) {
            // this.userID = result.Data.ID;
            _this.Initialization2();
            //}
            _this.storage.get("userinfo").then(function (val) {
                if (val != null) {
                    address = val.address;
                    userinform = val.userinform;
                    address = result.Data;
                }
                else {
                    userinform = { "ID": "" };
                    address = result.Data;
                }
                _this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(function (val) {
                });
            });
        });
    };
    HomeNewPage.prototype.gotoDetail = function (id) {
        this.navCtrl.push("GoodDetailPage", {
            goodsid: id,
        });
    };
    //判断是否为微信
    HomeNewPage.prototype.isWeiXin = function () {
        //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
        var ua;
        ua = window.navigator.userAgent.toLowerCase();
        //通过正则表达式匹配ua中是否含有MicroMessenger字符串
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        }
        else {
            return false;
        }
    };
    HomeNewPage.prototype.gotocoupon = function (item, i) {
        if (i == 13) {
            this.nativeService.showToast("暂不开放");
        }
        else {
            this.navCtrl.push(item.page, {
                BH: item.bh,
                id: item.id,
                name: item.name
            });
        }
    };
    HomeNewPage.prototype.goshoplist = function () {
        this.navCtrl.push('ShopgoodscarPage');
    };
    HomeNewPage.prototype.settle = function () {
        wx.onMenuShareAppMessage({
            title: '逛贝商城邀请您来逛逛',
            desc: '关注逛贝，惊喜不断！',
            // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
            // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
            link: 'https://www.lguangguang.com/mob/?login=' + this.UID + '#/',
            imgUrl: "https://www.lguangguang.com/logo.png",
            // imgUrl: this.icon, // 分享图标
            type: 'link',
            dataUrl: '',
            success: function () {
                this.nativeService.showToast("分享成功");
            },
            cancel: function () {
            }
        });
        wx.onMenuShareTimeline({
            title: '逛贝商城邀请您来逛逛',
            link: 'https://www.lguangguang.com/mob/?login=' + this.UID + '#/',
            imgUrl: "https://www.lguangguang.com/logo.png",
            success: function () {
                this.nativeService.showToast("分享成功");
            },
        });
    };
    HomeNewPage.prototype.gotoclass = function () {
        this.app.getRootNav().setRoot('TabsPage', {
            tabId: 1
        });
    };
    HomeNewPage.prototype.QRcode = function () {
        // this.sendSKU('6903148271308');
        // return;
        if (this.isWeiXin()) {
        }
        else {
            this.nativeService.showToast("请在微信中使用扫码功能");
            return;
        }
        var that = this;
        wx.scanQRCode({
            desc: 'scanQRCode desc',
            needResult: 1,
            scanType: ["qrCode", "barCode"],
            success: function (res) {
                //  alert(res.resultStr);
                if (res.resultStr.indexOf("http") != -1) {
                    that.nativeService.showToast("请扫描正确条码");
                    return;
                }
                else {
                    // alert("错误")
                }
                if (res.resultStr.indexOf(",") != -1) {
                    that.sendSKU(res.resultStr.split(",")[1]);
                }
                else {
                    that.sendSKU(res.resultStr);
                }
            },
            error: function (res) {
                if (res.errMsg.indexOf('function_not_exist') > 0) {
                    alert('版本过低请升级');
                }
            }
        });
    };
    HomeNewPage.prototype.sendSKU = function (item) {
        var _this = this;
        var userInfo = {
            SKU: item
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1159";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.navCtrl.push("GoodDetailPage", {
                    goodsid: result.Data,
                });
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    HomeNewPage.prototype.gotoCouponListPage = function () {
        this.navCtrl.push("CouponListPage");
    };
    HomeNewPage.prototype.gotoPushCodePage = function () {
        this.navCtrl.push("PushCodePage");
    };
    HomeNewPage.prototype.gotopage = function () {
        this.navCtrl.push("GongzPage");
    };
    HomeNewPage.prototype.gotoweixin = function () {
        alert("点击跳转");
        wx.miniProgram.navigateTo({ url: '/pages/wxpay/wxpay' });
    };
    return HomeNewPage;
}());
HomeNewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home-new',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\home-new\home-new.html"*/'<!--\n  Generated template for the HomeNewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="height:44px;">\n  <!-- <ion-navbar  style="top:-100px;position:absolute;">\n    <ion-title mode="ios" style="top:-100px;position:absolute;">{{showname}}</ion-title>\n  </ion-navbar> -->\n  <div class="home_header">\n    <div class="header-inside">\n      <div class="qrcode">\n        <!-- <img tappable (click)="goshoplist()" [src]="img9" alt=""> -->\n        <img [src]="logo2" tappable (click)="gotoclass()" alt="">\n      </div>\n      <div class="search">\n        <div class="searchimg">\n          <img [src]="img11" alt="">\n        </div>\n        <input class=\'searchpart\' placeholder="逛贝" (focus)="gotosearch()" type="text">\n      </div>\n      <div class="message">\n        <!-- <img tappable (click)="GotoNitice()" [src]="img10" alt=""> -->\n        <img tappable (click)="QRcode()" [src]="img9" alt="">\n      </div>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content>\n  <div class="slide_part">\n    <ion-slides>\n      <ion-slide *ngFor="let item of bannerList;let i=index;">\n        <a [href]="item.StoreUrl">\n            <!-- <img class="bannerImg" [src]="item.PicUrl" alt=""> -->\n            <img-lazy-load [src]="item.PicUrl" [Ttype]=2></img-lazy-load>\n        </a>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class="btnpart" >\n    <div *ngFor="let item of list ;let i=index" tappable (click)="gotocoupon(item,i)">\n      <img [src]="item.url" alt="">\n      <div style="font-size:1.4rem;font-weight:300;">{{item.name}}</div>\n    </div>\n  </div>\n  <div class="showmore">\n    <div class="showmoreLeft" tappable (click)="gotopage()">\n      <img class="showmoreImg" [src]="tu7" alt="">\n      <!-- <div class="showmorediv">\n        <div style="height:30%;font-size:1.4rem;">每日签到</div>\n        <div style="height:70%;font-size:1.2rem;">每日签到每日签到每日签到</div>\n      </div> -->\n    </div>\n    <div class="showmoreLeft" (click)="gotoPushCodePage()">\n      <img class="showmoreImg" [src]="tu8" alt="">\n      <!-- <div class="showmorediv">\n        <div style="height:30%;font-size:1.4rem;">代理</div>\n        <div style="height:70%;font-size:1.2rem;">每日签到每日签到每日签到</div>\n      </div> -->\n    </div>\n  </div>\n\n  <!-- <div class="showmore2" tappable >\n    <img class="showmoreImg" [src]="tu6" alt=""> -->\n    <!-- <div class="showmorediv" style="width:70%;">\n      <div style="height:30%;font-size:1.4rem;">美丽日记</div>\n      <div style="height:70%;font-size:1.2rem;">每日签到每日签到每日签到</div>\n    </div> -->\n  <!-- </div> -->\n\n  <div style="width:100%;background:#F9F9F9" *ngFor="let item of realList">\n    <!-- <div class="title">\n      <div>{{item.Name}}</div>\n    </div> -->\n    <div *ngIf="item.Imageurl!=\'\'" class="banner3" tappable (click)="gotofloor(item.ID,item.url,item.Name)">\n      <!-- <img [src]="item.Imageurl!=\'\'?item.Imageurl:banner" alt=""> -->\n      <img-lazy-load  [src]="item.Imageurl"  [Ttype]=3></img-lazy-load>\n    </div>\n    <div class="goodslist">\n      <div class="goodsitem3" *ngFor="let tab of item.product" tappable (click)="gotoDetail(tab.ProId)">\n        <div>\n          <!-- <div class="fixedpart">新品</div> -->\n          <img *ngIf="tab.ISHD==1"  class="activity_pic" [src]="activity" alt="">\n          <!-- <img style="width:90%;height:auto;max-height: 100%;" [src]="tab.ProPic!=\'\'?tab.ProPic:imggoods" alt=""> -->\n          <img-lazy-load style="width:90%;height:auto;max-height: 100%;" [src]="tab.ProPic" [Ttype]=1></img-lazy-load>\n          <!-- <ion-img width="80" height="80" src="{{tab.ProPic}}"></ion-img> -->\n          <!-- <ion-img ></ion-img> -->\n        </div>\n        <div>{{tab.Name}}</div>\n        <!-- <div>{{tab.Shortdesc}}</div> -->\n        <div>\n          <span>￥{{tab.ActivityPrice.toFixed(2)}}</span>\n          <span style="color:#999;text-decoration: line-through">￥{{tab.OldPrice.toFixed(2)}}</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div tappable (click)="gotoweixin()">\n    点击注册\n  </div> -->\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\home-new\home-new.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
], HomeNewPage);

//# sourceMappingURL=home-new.js.map

/***/ })

});
//# sourceMappingURL=63.js.map?v=107