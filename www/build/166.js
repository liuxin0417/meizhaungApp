webpackJsonp([166],{

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GongzPageModule", function() { return GongzPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gongz__ = __webpack_require__(767);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GongzPageModule = (function () {
    function GongzPageModule() {
    }
    return GongzPageModule;
}());
GongzPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__gongz__["a" /* GongzPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__gongz__["a" /* GongzPage */]),
        ],
    })
], GongzPageModule);

//# sourceMappingURL=gongz.module.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GongzPage; });
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
 * Generated class for the GongzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GongzPage = (function () {
    function GongzPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popimg = "assets/imgs/fanhui.png";
        this.gzhqrcode = "assets/imgs/gzhqrcode.jpg";
    }
    GongzPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GongzPage');
    };
    GongzPage.prototype.gopop = function () {
        this.navCtrl.pop();
    };
    return GongzPage;
}());
GongzPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-gongz',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\gongz\gongz.html"*/'<!--\n  Generated template for the PushCodePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar style="top:-100px;position:absolute;">\n      <ion-title style="top:-100px;position:absolute;">关注逛贝</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content style="background:#e6e4e9;">\n  \n    <img class="popimg" [src]="popimg" tappable (click)="gopop()" alt="">\n    <div class="push_code_top"></div>\n    <div class="pushimg1">\n        <img class="code_img" [src]="gzhqrcode" alt="" >\n      </div>\n  </ion-content>\n'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\gongz\gongz.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], GongzPage);

//# sourceMappingURL=gongz.js.map

/***/ })

});
//# sourceMappingURL=166.js.map?v=107