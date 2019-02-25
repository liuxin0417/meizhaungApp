webpackJsonp([39],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RechargePageModule", function() { return RechargePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recharge__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RechargePageModule = (function () {
    function RechargePageModule() {
    }
    return RechargePageModule;
}());
RechargePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__recharge__["a" /* RechargePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__recharge__["a" /* RechargePage */]),
        ],
    })
], RechargePageModule);

//# sourceMappingURL=recharge.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RechargePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Model__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// declare var AliPay: any;
var RechargePage = (function () {
    function RechargePage(navCtrl, navParams, httpService, nativeService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
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
        this.isweb = !this.nativeService.isMobile();
    }
    RechargePage.prototype.ionViewWillEnter = function () {
    };
    RechargePage.prototype.ionViewDidLoad = function () {
        this.login();
    };
    RechargePage.prototype.login = function () {
        var _this = this;
        /* var userInfo = {
          UserID:this.userID,
        } */
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1128";
        parameter.parm = "";
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.list = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    RechargePage.prototype.recharge = function () {
        if (this.recharMoney == null || this.recharMoney == undefined) {
            this.nativeService.showToast("请输入充值金额");
            return false;
        }
        if (this.recharMoney <= 0) {
            this.nativeService.showToast("请输入大于零的金额");
            return false;
        }
        if (this.nativeService.isMobile()) {
            this.navCtrl.push("ChargeTypePage", {
                price: this.recharMoney,
            });
        }
        else {
            this.submit(this.recharMoney);
        }
        /* this.navCtrl.push("ChargeTypePage",{
          price:this.recharMoney,
        }); */
    };
    RechargePage.prototype.skip = function (item) {
        // if (this.nativeService.isMobile()) {
        //   this.navCtrl.push("ChargeTypePage", {
        //     price: item.UseMoney,
        //   });
        // } else {
        //   this.submit(item.UseMoney);
        // }
        this.submit(item.UseMoney);
    };
    /**充值提交或者跳转 */
    RechargePage.prototype.submit = function (money) {
        var _this = this;
        if (this.isweb) {
            var Info = {
                UserID: this.userInfo.ID,
                Money: money,
                isweb: 1,
                PayType: 2
            };
            var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
            parameter.jyh = "1132";
            parameter.parm = JSON.stringify(Info);
            this.nativeService.showLoading();
            this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
                var result = JSON.parse(res.result);
                if (result.Code == 1) {
                    var data = result.Data;
                    var that = _this;
                    that.nativeService.hideLoading();
                    wx.chooseWXPay({
                        timestamp: data.timestamp,
                        nonceStr: data.noncestr,
                        package: data.package,
                        signType: data.signType,
                        paySign: data.sign,
                        success: function (res) {
                            that.navCtrl.setRoot("PaySuccessPage", {
                                Info: money
                            });
                        }
                    });
                }
                else {
                    _this.nativeService.hideLoading();
                }
            });
        }
        else {
            /**跳转到支付界面 */
            this.navCtrl.push("ChargeTypePage", {
                price: money,
            });
        }
    };
    return RechargePage;
}());
RechargePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-recharge',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\recharge\recharge.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">充值</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="inputMoney">\n    <input placeholder="请输入充值金额" type="number" name="recharMoney" [(ngModel)]="recharMoney"/>\n  </div>\n  <div class="charge-btn-title">优惠充值</div>\n  <div class="charge-btn-content">\n      <div class="charge-item" *ngFor="let item of list" (click)="skip(item)">\n        <div style="font-size:1.6rem;">{{item.Money}}元</div>\n        <div>售价:{{item.UseMoney}}元</div>\n      </div>\n  </div>\n  <div class="charge-btn" tappable (click)="recharge()">充值</div>\n</ion-content>\n'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\recharge\recharge.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], RechargePage);

//# sourceMappingURL=recharge.js.map

/***/ })

});
//# sourceMappingURL=39.js.map?v=107