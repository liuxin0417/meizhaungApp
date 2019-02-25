webpackJsonp([47],{

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaySuccessPageModule", function() { return PaySuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pay_success__ = __webpack_require__(789);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaySuccessPageModule = (function () {
    function PaySuccessPageModule() {
    }
    return PaySuccessPageModule;
}());
PaySuccessPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__pay_success__["a" /* PaySuccessPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__pay_success__["a" /* PaySuccessPage */]),
        ],
    })
], PaySuccessPageModule);

//# sourceMappingURL=pay-success.module.js.map

/***/ }),

/***/ 789:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaySuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaySuccessPage = (function () {
    function PaySuccessPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.img3 = "assets/imgs/gouwuche.png";
        this.img4 = "assets/imgs/search.png";
        this.shopBh = "";
        this.money = this.navParams.get("Info");
        this.shopBh = this.navParams.get("shopBH");
        if (this.shopBh == undefined || this.shopBh == null) {
            this.shopBh = "";
        }
    }
    PaySuccessPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad PaySuccessPage');
    };
    PaySuccessPage.prototype.gotogoodscar = function () {
        this.navCtrl.push("GoodscarPage", {
            type: 1,
        });
    };
    PaySuccessPage.prototype.gotoOrderList = function () {
        this.navCtrl.push("OrderListPage", {
            type: 0,
        });
    };
    PaySuccessPage.prototype.gotohome = function () {
        this.app.getRootNav().setRoot('TabsPage');
    };
    return PaySuccessPage;
}());
PaySuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-pay-success',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\pay-success\pay-success.html"*/'<!--\n  Generated template for the PaySuccessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height:44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">付款成功</ion-title>\n    <!-- <ion-buttons right>\n      <button ion-button icon-only>\n        <img [src]="img4" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button icon-only tappable (click)="gotogoodscar()">\n        <img [src]="img3" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#f7f7f7">\n  <div class="paycontent">\n    <div class="paycontent1">\n      <div>\n        <span style="font-size:1.2rem;">￥</span>\n        <span style="font-size:1.8rem;">{{money}}</span>\n      </div>\n    </div>\n    <div class="paycontent2">\n      <div style="border-right:1px solid #999;text-align:left;" (click)="gotoOrderList()">查看订单</div>\n      <div style="text-align:right;" (click)="gotohome()">去主页</div>\n    </div>\n    <div class="info" *ngIf="shopBh!=\'\'">\n      <p>店铺订单编号:\n        <span style="color:#FF8484;">{{shopBH}}</span>\n      </p>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\pay-success\pay-success.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
], PaySuccessPage);

//# sourceMappingURL=pay-success.js.map

/***/ })

});
//# sourceMappingURL=47.js.map?v=107