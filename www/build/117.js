webpackJsonp([117],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideImgPageModule", function() { return SlideImgPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide_img__ = __webpack_require__(811);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideImgPageModule = (function () {
    function SlideImgPageModule() {
    }
    return SlideImgPageModule;
}());
SlideImgPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__slide_img__["a" /* SlideImgPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__slide_img__["a" /* SlideImgPage */]),
        ],
    })
], SlideImgPageModule);

//# sourceMappingURL=slide-img.module.js.map

/***/ }),

/***/ 811:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideImgPage; });
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


var SlideImgPage = (function () {
    function SlideImgPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.slide = [];
        this.close = "assets/imgs/fanhui2.png";
    }
    SlideImgPage.prototype.ionViewWillEnter = function () {
        this.height = (document.body.clientHeight);
        this.slide = this.navParams.get("slide");
        this.slideindex = this.navParams.get("slideindex");
        ////console.info(this.height);
    };
    SlideImgPage.prototype.ionViewDidLoad = function () {
        // this.slide = this.navParams.get("slide");
        // this.slideindex = this.navParams.get("slideindex");
        // //console.info(this.slideindex);
        /*  this.slides.slideTo(this.slideindex,0); */
        // this.goToSlide()
    };
    SlideImgPage.prototype.hidepage = function () {
        this.viewCtrl.dismiss();
    };
    SlideImgPage.prototype.goToSlide = function () {
        this.Slides.slideTo(1, 1500);
    };
    SlideImgPage.prototype.slideto = function () {
        /*  this.slides.slideTo(this.slideindex,0); */
    };
    SlideImgPage.prototype.slideChanged = function () {
        var currentIndex = this.Slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        // this.goToSlide();
    };
    return SlideImgPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SlideImgPage.prototype, "slider", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
], SlideImgPage.prototype, "Slides", void 0);
SlideImgPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-slide-img',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\slide-img\slide-img.html"*/'<!--\n  Generated template for the SlideImgPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content style=" background:#333;">\n  <img class="close" tappable (click)="hidepage()"  style="height:20px;width:auto;" [src]="close" alt="">\n  <div class="imgpart" style="height:auto;" *ngIf="slide.length>=1">\n    <div class="backcolor" tappable (click)="hidepage()"></div>\n    <ion-slides #Slides  (ionSlideDidChange)="slideChanged()" style="height:auto" pager=true *ngIf="slide.length>=1" >\n      <ion-slide style="height:auto" *ngFor="let item of slide">\n        <img [src]="item.Url" alt="">\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\slide-img\slide-img.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
], SlideImgPage);

//# sourceMappingURL=slide-img.js.map

/***/ })

});
//# sourceMappingURL=117.js.map?v=107