webpackJsonp([112],{

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeTypePageModule", function() { return ChargeTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charge_type__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChargeTypePageModule = (function () {
    function ChargeTypePageModule() {
    }
    return ChargeTypePageModule;
}());
ChargeTypePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__charge_type__["a" /* ChargeTypePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__charge_type__["a" /* ChargeTypePage */]),
        ],
    })
], ChargeTypePageModule);

//# sourceMappingURL=charge-type.module.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WXScene */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WechatPlugin; });
var WXScene = (function () {
    function WXScene() {
    }
    return WXScene;
}());

WXScene.WXSceneSession = "WXSceneSession";
WXScene.WXSceneTimeline = "WXSceneTimeline";
WXScene.WXSceneFavorite = "WXSceneFavorite";
var WechatPlugin = (function () {
    function WechatPlugin() {
    }
    WechatPlugin.isInstalled = function () {
        return new Promise(function (resolve, reject) {
            Wechat.isInstalled(function (result) {
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    WechatPlugin.sendPaymentRequest = function (params) {
        return new Promise(function (resolve, reject) {
            Wechat.sendPaymentRequest(params, function (result) {
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    WechatPlugin.ShareText = function (text) {
        return new Promise(function (resolve, reject) {
            Wechat.share({
                text: '逛贝微信分享测试',
                scene: WXScene.WXSceneSession
            }, function (result) {
                alert("分享成功");
            }, function (error) {
                alert("分享失败");
            });
        });
    };
    return WechatPlugin;
}());

//# sourceMappingURL=WechatPlugin.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChargeTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_WechatPlugin__ = __webpack_require__(742);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChargeTypePage = (function () {
    function ChargeTypePage(navCtrl, navParams, httpService, nativeService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.paytype = 2;
        this.img3 = "assets/imgs/chone.png";
        this.img4 = "assets/imgs/unchone.png";
        this.img2 = "assets/imgs/eixin.png";
        this.img5 = "assets/imgs/zhifun.png";
    }
    ChargeTypePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("userinfo").then(function (val) {
            if (val != "") {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userInfo = val.userinform;
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
        this.money = this.navParams.get("price");
    };
    ChargeTypePage.prototype.ionViewDidLoad = function () {
        //  console.log('ionViewDidLoad ChargeTypePage');
    };
    ChargeTypePage.prototype.pay = function () {
        var _this = this;
        var Info = {
            UserID: this.userInfo.ID,
            Money: this.money,
            isweb: 0,
            PayType: this.paytype
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1132";
        parameter.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                var data = result.Data;
                if (_this.paytype == 1) {
                    AliPay.pay(result.Msg, function (success) {
                        var msg = JSON.parse(success.result);
                        if (msg.alipay_trade_app_pay_response.msg == "Success") {
                            _this.nativeService.showToast("支付订单成功");
                            //this.navCtrl.pop();
                            _this.navCtrl.setRoot("PaySuccessPage", {
                                Info: _this.money
                            });
                        }
                    }, function (error) {
                    });
                }
                else if (_this.paytype == 2) {
                    __WEBPACK_IMPORTED_MODULE_6__providers_WechatPlugin__["a" /* WechatPlugin */].sendPaymentRequest(data).then(function (result) {
                        _this.nativeService.hideLoading();
                        _this.nativeService.showToast("支付订单成功");
                        //this.navCtrl.pop();
                        _this.navCtrl.setRoot("PaySuccessPage", {
                            Info: _this.money
                        });
                    }, function (error) {
                        _this.nativeService.showToast(error);
                    });
                }
                else {
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
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
            _this.nativeService.hideLoading();
        });
    };
    return ChargeTypePage;
}());
ChargeTypePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-charge-type',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\charge-type\charge-type.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">结算</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#f7f7f7">\n  <div class="pay-type">\n    <div class="weixinpay" tappable (click)="paytype=2">\n      <div>\n        <img [src]="img2" alt="">\n      </div>\n      <div>微信支付</div>\n      <div>\n        <img *ngIf="paytype==2" [src]="img3" alt="">\n        <img *ngIf="paytype!=2" [src]="img4" alt="">\n      </div>\n    </div>\n    <div class="weixinpay" tappable (click)="paytype=1" style="border-bottom:none;">\n      <div>\n        <img [src]="img5" alt="">\n      </div>\n      <div>支付宝</div>\n      <div>\n        <img *ngIf="paytype==1" [src]="img3" alt="">\n        <img *ngIf="paytype!=1" [src]="img4" alt="">\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class="go-pay">\n    <div>应付金额:{{money}}元</div>\n    <div tappable (click)="pay()">去付款</div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\charge-type\charge-type.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], ChargeTypePage);

//# sourceMappingURL=charge-type.js.map

/***/ })

});
//# sourceMappingURL=112.js.map?v=107