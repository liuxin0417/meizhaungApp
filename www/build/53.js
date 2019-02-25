webpackJsonp([53],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletPageModule", function() { return MyWalletPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_wallet__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyWalletPageModule = (function () {
    function MyWalletPageModule() {
    }
    return MyWalletPageModule;
}());
MyWalletPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_wallet__["a" /* MyWalletPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__my_wallet__["a" /* MyWalletPage */]),
        ],
    })
], MyWalletPageModule);

//# sourceMappingURL=my-wallet.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyWalletPage; });
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






/**
 * Generated class for the MyWalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyWalletPage = (function () {
    function MyWalletPage(navCtrl, navParams, httpService, nativeService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.img = "assets/imgs/jinru--hui.png";
    }
    MyWalletPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userID = val.userinform.ID;
                    _this.login();
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
    };
    MyWalletPage.prototype.ionViewDidLoad = function () {
    };
    MyWalletPage.prototype.gotocoupon = function () {
        this.navCtrl.push("CouponPage");
    };
    MyWalletPage.prototype.gotodetail = function (type) {
        this.navCtrl.push("WalletDetailPage", {
            type: type,
            userID: this.userID,
        });
    };
    MyWalletPage.prototype.gotorecharge = function () {
        this.navCtrl.push("RechargePage");
    };
    MyWalletPage.prototype.login = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1108";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.data = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    return MyWalletPage;
}());
MyWalletPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-my-wallet',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\my-wallet\my-wallet.html"*/'<!--\n  Generated template for the MyWalletPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">我的钱包</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n  <div class="wallet-item">\n    <div tappable (click)="gotodetail(1)">\n      <div *ngIf="data!=undefined" style="font-size:0.93em;">{{data.Money}}</div>\n      <div style="font-size:0.68em;">储备金</div>\n    </div>\n    <div tappable (click)="gotodetail(2)">\n      <div *ngIf="data!=undefined"  style="font-size:0.93em;">{{data.Gift}}</div>\n      <div style="font-size:0.68em;">会员积分</div>\n    </div>\n  </div>\n  <div class="coupon" tappable (click)="gotocoupon()">\n    <div>\n      <div>优惠券</div>\n      <div></div>\n      <div>\n        <img [src]="img" alt="">\n      </div>\n    </div>\n  </div>\n  <div class="coupon" tappable (click)="gotorecharge()" style="margin-top:10px;">\n    <div>\n      <div>充值</div>\n      <div></div>\n      <div>\n        <img [src]="img" alt="">\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\my-wallet\my-wallet.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], MyWalletPage);

//# sourceMappingURL=my-wallet.js.map

/***/ })

});
//# sourceMappingURL=53.js.map?v=107