webpackJsonp([129],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnTypeListPageModule", function() { return ReturnTypeListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__return_type_list__ = __webpack_require__(803);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReturnTypeListPageModule = (function () {
    function ReturnTypeListPageModule() {
    }
    return ReturnTypeListPageModule;
}());
ReturnTypeListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__return_type_list__["a" /* ReturnTypeListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__return_type_list__["a" /* ReturnTypeListPage */]),
        ],
    })
], ReturnTypeListPageModule);

//# sourceMappingURL=return-type-list.module.js.map

/***/ }),

/***/ 803:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnTypeListPage; });
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
 * Generated class for the ReturnTypeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReturnTypeListPage = (function () {
    function ReturnTypeListPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.chose = "assets/imgs/chose.png";
        this.closeimg = "assets/imgs/close.png";
    }
    ReturnTypeListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReturnTypeListPage');
    };
    ReturnTypeListPage.prototype.close = function (item) {
        item = "申通快递";
        this.viewCtrl.dismiss(item);
    };
    return ReturnTypeListPage;
}());
ReturnTypeListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-return-type-list',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\return-type-list\return-type-list.html"*/'<!--\n  Generated template for the ReturnTypeListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="height: 44px;">\n  <ion-navbar mode="ios" style="height: 44px;">\n    <ion-title mode="ios">快递列表</ion-title>\n    <ion-buttons left>\n        <button ion-button icon-only tappable (click)="close(item)">\n          <img [src]="closeimg" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n\n<ion-content>\n  <div class="return_type">\n    <span>申通快递</span>\n    <div>\n      <img style="width:25px;height:auto;" [src]="chose" alt="">\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\return-type-list\return-type-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
], ReturnTypeListPage);

//# sourceMappingURL=return-type-list.js.map

/***/ })

});
//# sourceMappingURL=129.js.map?v=107