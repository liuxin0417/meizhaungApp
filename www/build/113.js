webpackJsonp([113],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletDetailPageModule", function() { return WalletDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wallet_detail__ = __webpack_require__(817);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WalletDetailPageModule = (function () {
    function WalletDetailPageModule() {
    }
    return WalletDetailPageModule;
}());
WalletDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__wallet_detail__["a" /* WalletDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__wallet_detail__["a" /* WalletDetailPage */]),
        ],
    })
], WalletDetailPageModule);

//# sourceMappingURL=wallet-detail.module.js.map

/***/ }),

/***/ 817:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalletDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
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
 * Generated class for the WalletDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WalletDetailPage = (function () {
    function WalletDetailPage(navCtrl, navParams, httpService, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.type = this.navParams.get("type");
        this.userID = this.navParams.get("userID");
    }
    WalletDetailPage.prototype.ionViewDidLoad = function () {
        //console.info( this.type+this.userID);
        if (this.type == 1) {
            this.login1();
        }
        else if (this.type == 2) {
            this.login2();
        }
        else {
        }
    };
    WalletDetailPage.prototype.login1 = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1129";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.list = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    WalletDetailPage.prototype.login2 = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1130";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.list = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    return WalletDetailPage;
}());
WalletDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-wallet-detail',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\wallet-detail\wallet-detail.html"*/'<!--\n  Generated template for the WalletDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">明细</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="detail-item" *ngFor="let item of list">\n    <div>\n      <div>{{item.source}}</div>\n      <div>\n        <span *ngIf="type==1&&item.porttype==1">-</span>\n        <span *ngIf="type==1&&item.porttype==0">+</span>\n        <span *ngIf="type==2&&item.porttype==1">-</span>\n        <span *ngIf="type==2&&item.porttype==0">+</span>\n        <span *ngIf="type==1">{{item.MoneyNum}}</span>\n        <span *ngIf="type==2">{{item.GiftNum}}</span>\n      </div>\n    </div>\n    <div>\n      <div>{{item.ObtainTime}}</div>\n      <div></div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\wallet-detail\wallet-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */]])
], WalletDetailPage);

//# sourceMappingURL=wallet-detail.js.map

/***/ })

});
//# sourceMappingURL=113.js.map?v=107