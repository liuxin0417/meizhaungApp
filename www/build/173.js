webpackJsonp([173],{

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryPontPageModule", function() { return DeliveryPontPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_pont__ = __webpack_require__(762);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeliveryPontPageModule = (function () {
    function DeliveryPontPageModule() {
    }
    return DeliveryPontPageModule;
}());
DeliveryPontPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__delivery_pont__["a" /* DeliveryPontPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__delivery_pont__["a" /* DeliveryPontPage */]),
        ],
    })
], DeliveryPontPageModule);

//# sourceMappingURL=delivery-pont.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryPontPage; });
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


/**
 * Generated class for the DeliveryPontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeliveryPontPage = (function () {
    function DeliveryPontPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.img = "assets/imgs/chose.png";
        this.img2 = "assets/imgs/dizhi.png";
        this.switchNum = 1;
    }
    DeliveryPontPage.prototype.ionViewDidLoad = function () {
    };
    DeliveryPontPage.prototype.chose = function (number) {
        this.switchNum = number;
    };
    return DeliveryPontPage;
}());
DeliveryPontPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-delivery-pont',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\delivery-pont\delivery-pont.html"*/'<!--\n  Generated template for the DeliveryPontPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">选择自提地点</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#e5e5e5;">\n  <div style="width:100%;height:0.6rem;"></div>\n  <div class="address-item" tappable (click)="chose(1)">\n    <div class="address-item1" [ngClass]="{true:\'color\',false:\'nocolor\'}[switchNum==1]">持久大厦蜂巢自提柜</div>\n    <div class="address-item2">\n      <div class="address-item2-line1">山东烟台市莱山区黄海路街道万光汪洋万光8-9(26400)</div>\n      <div class="address-item2-line2">\n        <img *ngIf="switchNum==1" [src]="img" alt="">\n      </div>\n    </div>\n    <div class="address-item3">\n      <img [src]="img2" alt=""> 0.1km\n    </div>\n  </div>\n  <div class="address-item" tappable (click)="chose(2)">\n    <div class="address-item1" [ngClass]="{true:\'color\',false:\'nocolor\'}[switchNum==2]">持久大厦蜂巢自提柜</div>\n    <div class="address-item2">\n      <div class="address-item2-line1">山东烟台市莱山区黄海路街道万光汪洋万光8-9(26400)</div>\n      <div class="address-item2-line2">\n        <img *ngIf="switchNum==2" [src]="img" alt="">\n      </div>\n    </div>\n    <div class="address-item3">\n      <img [src]="img2" alt=""> 0.1km\n    </div>\n  </div>\n  <div class="address-item" tappable (click)="chose(3)">\n    <div class="address-item1" [ngClass]="{true:\'color\',false:\'nocolor\'}[switchNum==3]">持久大厦蜂巢自提柜</div>\n    <div class="address-item2">\n      <div class="address-item2-line1">山东烟台市莱山区黄海路街道万光汪洋万光8-9(26400)</div>\n      <div class="address-item2-line2">\n        <img *ngIf="switchNum==3" [src]="img" alt="">\n      </div>\n    </div>\n    <div class="address-item3">\n      <img [src]="img2" alt=""> 0.1km\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\delivery-pont\delivery-pont.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], DeliveryPontPage);

//# sourceMappingURL=delivery-pont.js.map

/***/ })

});
//# sourceMappingURL=173.js.map?v=107