webpackJsonp([40],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushCodePageModule", function() { return PushCodePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__push_code__ = __webpack_require__(792);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PushCodePageModule = (function () {
    function PushCodePageModule() {
    }
    return PushCodePageModule;
}());
PushCodePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__push_code__["a" /* PushCodePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__push_code__["a" /* PushCodePage */]),
        ],
    })
], PushCodePageModule);

//# sourceMappingURL=push-code.module.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushCodePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(144);
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






/**
 * Generated class for the PushCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PushCodePage = (function () {
    function PushCodePage(navCtrl, navParams, httpService, nativeService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.img1 = "assets/imgs/pushcode1.png";
        this.img2 = "assets/imgs/pushcode2.png";
        this.popimg = "assets/imgs/fanhui.png";
        this.gowhere = "assets/imgs/gowhere.png";
        this.btnimg = "assets/imgs/share2.png";
        this.pngflag = false;
        this.nativeService.log('push-code', 'constructor');
    }
    PushCodePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.nativeService.log('push-code', 'ionViewWillEnter');
        this.storage.get("userinfo").then(function (val) {
            //console.info(val)
            if (val != "" && val != null && val.userinform) {
                if (val.userinform.ID == "") {
                    _this.nativeService.log('push-code', 'constructor  val.userinform.ID == ""');
                    _this.navCtrl.push("LoginPage", { showflag: true, tabindex: 1, popFlag: true });
                }
                else {
                    _this.userID = val.userinform.ID;
                    _this.getcode();
                }
            }
            else {
                _this.nativeService.log('push-code', 'constructor  val != "" && val != null&&val.userinform');
                _this.navCtrl.push("LoginPage", { showflag: true, tabindex: 1, popFlag: true });
            }
        });
    };
    PushCodePage.prototype.getcode = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1144";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == "1") {
                _this.codeMsg = result.Data;
                _this.settle();
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    PushCodePage.prototype.settle = function () {
        // let url = location.href.split('#')[0];
        var that = this;
        wx.onMenuShareAppMessage({
            title: '逛贝邀请您注册',
            desc: '关注逛贝，惊喜不断！',
            // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
            // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
            link: 'https://www.lguangguang.com/mob/?resigiter=' + this.codeMsg.UID + '#/',
            imgUrl: "https://www.lguangguang.com/logo.png",
            // imgUrl: this.icon, // 分享图标
            type: 'link',
            dataUrl: '',
            success: function () {
                // 用户确认分享后执行的回调函数
                that.nativeService.showToast("分享成功");
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareTimeline({
            title: '逛贝邀请您注册',
            link: 'https://www.lguangguang.com/mob/?resigiter=' + this.codeMsg.UID + '#/',
            imgUrl: "https://www.lguangguang.com/logo.png",
            success: function () {
                this.nativeService.showToast("分享成功");
            },
        });
    };
    PushCodePage.prototype.gopop = function () {
        this.navCtrl.pop();
    };
    PushCodePage.prototype.sharecode = function () {
        this.pngflag = true;
    };
    PushCodePage.prototype.hide = function () {
        this.pngflag = false;
    };
    return PushCodePage;
}());
PushCodePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-push-code',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\push-code\push-code.html"*/'<!--\n  Generated template for the PushCodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar style="top:-100px;position:absolute;">\n    <ion-title style="top:-100px;position:absolute;">推广码</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background:#13C5C3;">\n\n  <img class="popimg" [src]="popimg" tappable (click)="gopop()" alt="">\n  <img class="gowhere" [src]="gowhere" tappable (click)="sharecode()" alt="">\n  <div class="push_code_top"></div>\n  <div class="pushimg1">\n    <img *ngIf="codeMsg!=undefined" class="code_img" [src]="codeMsg.picurl" alt="">\n    <img [src]="img1" alt="">\n    <div class="pushimg2" *ngIf="codeMsg!=undefined">\n        【公众号：逛贝&nbsp;&nbsp;推广码:{{codeMsg.UID}}】\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div class="cover" *ngIf="pngflag" tappabel (click)="hide()">\n    <img class="coverimg" [src]="btnimg" alt="">\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\push-code\push-code.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], PushCodePage);

//# sourceMappingURL=push-code.js.map

/***/ })

});
//# sourceMappingURL=40.js.map?v=107