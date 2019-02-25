webpackJsonp([8,90],{

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperPageModule", function() { return SwiperPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swiper__ = __webpack_require__(746);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwiperPageModule = (function () {
    function SwiperPageModule() {
    }
    return SwiperPageModule;
}());
SwiperPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__swiper__["a" /* SwiperPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__swiper__["a" /* SwiperPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__swiper__["a" /* SwiperPage */]
        ]
    })
], SwiperPageModule);

//# sourceMappingURL=swiper.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassificationPageModule", function() { return ClassificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__componnets_swiper_swiper_module__ = __webpack_require__(651);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classification__ = __webpack_require__(756);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ClassificationPageModule = (function () {
    function ClassificationPageModule() {
    }
    return ClassificationPageModule;
}());
ClassificationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__classification__["a" /* ClassificationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__classification__["a" /* ClassificationPage */]),
            __WEBPACK_IMPORTED_MODULE_0__componnets_swiper_swiper_module__["SwiperPageModule"]
        ],
    })
], ClassificationPageModule);

//# sourceMappingURL=classification.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwiperPage; });
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

//import { Slides } from 'ionic-angular';

//import { ViewChild } from '@angular/core';
/**
 * Generated class for the SwiperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SwiperPage = (function () {
    function SwiperPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SwiperPage.prototype.ionViewDidLoad = function () {
    };
    return SwiperPage;
}());
SwiperPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-swiper',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\componnets\swiper\swiper.html"*/'<!--\n  Generated template for the SwiperPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div style="width:100%;height:100%;">\n  <div class="swiper-banner">\n    大时代1\n  </div>\n</div>\n<div style="width:100%;height:100%;">\n  <div class="swiper-banner">\n    大时代2\n  </div>\n</div>\n<div style="width:100%;height:100%;">\n  <div class="swiper-banner">\n    大时代3\n  </div>\n</div>\n'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\componnets\swiper\swiper.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], SwiperPage);

//# sourceMappingURL=swiper.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//<reference path="../../provides/wechat.d.ts"/>
var ClassificationPage = (function () {
    function ClassificationPage(navCtrl, navParams, httpservice, nativeService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpservice = httpservice;
        this.nativeService = nativeService;
        this.storage = storage;
        this.num = 0;
        this.slideflag = true;
        this.height = 100;
        this.goodsItem = [];
        this.img9 = "assets/imgs/code.png";
        this.img10 = "assets/imgs/cheat.png";
        this.img11 = "assets/imgs/search.png";
        this.addressInfo = [];
        this.storage.get("userinfo").then(function (val) {
            if (val != null) {
                _this.addressInfo = val.address;
            }
            else {
            }
        });
    }
    ClassificationPage.prototype.ionViewWillEnter = function () {
        //this.Initialization()
        ////console.info("是否真机"+this.nativeService.isMobile());
    };
    ClassificationPage.prototype.ionViewDidLoad = function () {
        this.height = (document.body.clientHeight - 50);
        //this.addlister()
        this.Initialization();
    };
    /* slideChanged() {
      let currentIndex = 0
      if (this.slides.getActiveIndex() == this.name.length) {
        currentIndex = (this.slides.getActiveIndex() - 1);
      } else {
        currentIndex = this.slides.getActiveIndex();
      }
      if (currentIndex > 9 && this.slideflag == true) {
        this.slides2.slideTo((currentIndex - 9), 500)
      } else if (currentIndex <= 9 && this.slideflag == true) {
        this.slides2.slideTo(0, 500)
      }
      this.num = currentIndex
      this.slideflag = true
    } */
    ClassificationPage.prototype.gotoslide = function (index) {
        /* let lyBg = this.lyScrollDiv.nativeElement;
        lyBg.scrollTop = this.height * index */
        //var ted=lyBg.ViewChild.offsetTop
        this.num = index;
        this.goodsItem = this.list2[index];
        /* //console.info(this.list2[index]) */
        //this.slideflag = false
    };
    /*  alert() {
       this.slides2.slideTo(5, 500)
       this.num = 5
     } */
    /*  addlister() {
       var that = this
       let lyBg = this.lyScrollDiv.nativeElement;
       lyBg.addEventListener('scroll', function () {
         var top = (lyBg.scrollTop + 50);
         var num = top / that.height
         num = Math.floor(num)
         that.slides2.slideTo(num, 500)
         that.num = num
       }, false);
     } */
    ClassificationPage.prototype.gotogoodlist = function (id, BH, name) {
        this.navCtrl.push("GoodsListPage", {
            id: id,
            userinfo: this.addressInfo,
            BH: BH,
            name: name,
        });
    };
    ClassificationPage.prototype.Initialization = function () {
        var _this = this;
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1005";
        parameter.parm = "";
        this.nativeService.showLoading("获取中");
        this.httpservice.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.nativeService.hideLoading();
                _this.list1 = result.Data;
                _this.list2 = result.Data2;
                console.log('type>Initialization> result.Data>' + result.Data);
                console.log('type>Initialization> result.Data2>' + result.Data2);
                _this.gotoslide(_this.num);
            }
            ////console.info(result);
        });
    };
    ClassificationPage.prototype.gotosearch = function () {
        // //console.info("11")
        this.navCtrl.push("SearchPage");
    };
    ClassificationPage.prototype.GotoNitice = function () {
        this.navCtrl.push('NewclassificationPage');
    };
    ClassificationPage.prototype.goshoplist = function () {
        this.navCtrl.push('ShopgoodscarPage');
    };
    return ClassificationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollcontent'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ClassificationPage.prototype, "lyScrollDiv", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slide2'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Slides"])
], ClassificationPage.prototype, "slides2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slide'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Slides"])
], ClassificationPage.prototype, "slides", void 0);
ClassificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-classification',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\classification\classification.html"*/'<ion-header style="height:50px;">\n  <div class="home_header">\n    <div class="header-inside">\n      <div class="qrcode">\n        <img tappable (click)="goshoplist()" [src]="img9" alt="">\n      </div>\n      <div class="search">\n        <div class="searchimg">\n          <img [src]="img11" alt="">\n        </div>\n        <input class=\'searchpart\' (focus)="gotosearch()" placeholder="爱他美" type="text">\n      </div>\n      <div class="message" tappable (click)="GotoNitice()">\n        <img [src]="img10" alt="">\n      </div>\n    </div>\n  </div>\n</ion-header>\n<ion-content cache-view=\'true\'>\n  <div class="imgpart">\n    <div class=\'btnright\'>\n      <ion-slides #slide2 style="width:100%;height:100%;" direction="vertical" slidesPerView=11>\n        <ion-slide *ngFor="let tab of list1;let i = index" (click)="gotoslide(i)">\n          <div [ngClass]="{true:\'item2\',false:\'item\'}[num==i]">\n            {{tab.Name}}\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    \n    <div #scrollcontent class="scroll-content">\n      <div class="class-content" >\n        <div class="class-content-block"></div>\n        <div #scrollcontent class="class-real-content">\n          <div class="content-img" *ngIf="goodsItem.length!=0">\n            <img [src]="goodsItem.ImageUrl">\n          </div>\n          <div class="content-title">\n          </div>\n          <div class="cont-item">\n            <div *ngFor="let item of goodsItem.CategoryList" tappable (click)="gotogoodlist(item.ID,item.BH,item.Name)">\n              <img [src]="item.image" alt="">\n              <div>{{item.Name}}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\classification\classification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], ClassificationPage);

//# sourceMappingURL=classification.js.map

/***/ })

});
//# sourceMappingURL=8.js.map?v=107