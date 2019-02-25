webpackJsonp([189],{

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewPicturePageModule", function() { return PreviewPicturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__preview_picture__ = __webpack_require__(750);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviewPicturePageModule = (function () {
    function PreviewPicturePageModule() {
    }
    return PreviewPicturePageModule;
}());
PreviewPicturePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__preview_picture__["a" /* PreviewPicturePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__preview_picture__["a" /* PreviewPicturePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__preview_picture__["a" /* PreviewPicturePage */]
        ]
    })
], PreviewPicturePageModule);

//# sourceMappingURL=preview-picture.module.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewPicturePage; });
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


var PreviewPicturePage = (function () {
    function PreviewPicturePage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.initialSlide = 0;
        this.picturePaths = [];
        this.initialSlide = navParams.get('initialSlide');
        this.picturePaths = navParams.get('picturePaths');
    }
    PreviewPicturePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //http://www.swiper.com.cn/api/index.html
        new Swiper(this.panel.nativeElement, {
            initialSlide: this.initialSlide,
            zoom: true,
            loop: true,
            lazyLoading: true,
            lazyLoadingOnTransitionStart: true,
            pagination: '.swiper-pagination',
            paginationType: 'fraction',
            onClick: function () {
                _this.dismiss();
            }
        });
    };
    PreviewPicturePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return PreviewPicturePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('panel'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], PreviewPicturePage.prototype, "panel", void 0);
PreviewPicturePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-preview-picture',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\componnets\preview-picture\preview-picture.html"*/'<ion-content style="background-color: #000;color: #fff">\n  <div #panel class="swiper-container">\n    <div class="swiper-wrapper">\n      <div class="swiper-slide" *ngFor="let path of picturePaths">\n        <div class="swiper-zoom-container">\n          <img data-src="{{path}}" class="swiper-lazy">\n        </div>\n      </div>\n    </div>\n    <div class="swiper-pagination"></div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\componnets\preview-picture\preview-picture.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], PreviewPicturePage);

//# sourceMappingURL=preview-picture.js.map

/***/ })

});
//# sourceMappingURL=189.js.map?v=107