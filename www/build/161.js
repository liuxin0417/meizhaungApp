webpackJsonp([161],{

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupBuySuccessPageModule", function() { return GroupBuySuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_buy_success__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupBuySuccessPageModule = (function () {
    function GroupBuySuccessPageModule() {
    }
    return GroupBuySuccessPageModule;
}());
GroupBuySuccessPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__group_buy_success__["a" /* GroupBuySuccessPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__group_buy_success__["a" /* GroupBuySuccessPage */]),
        ],
    })
], GroupBuySuccessPageModule);

//# sourceMappingURL=group-buy-success.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupBuySuccessPage; });
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


var GroupBuySuccessPage = (function () {
    function GroupBuySuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.img3 = "assets/imgs/gouwuche.png";
        this.img4 = "assets/imgs/search.png";
        this.img2 = "assets/imgs/jinru--hui.png";
        this.img5 = "assets/imgs/duigou.png";
        this.picurl = "";
        this.Info = this.navParams.get("Info");
        this.picurl = this.navParams.get("picurl");
    }
    GroupBuySuccessPage.prototype.ionViewDidLoad = function () {
    };
    GroupBuySuccessPage.prototype.gotohomepage = function () {
        this.navCtrl.setRoot('TabsPage');
        // this.app.getRootNav().setRoot('TabsPage');
    };
    return GroupBuySuccessPage;
}());
GroupBuySuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-group-buy-success',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\group-buy-success\group-buy-success.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">商品订单</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <img [src]="img4" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n    <!-- <ion-buttons right>\n      <button ion-button icon-only tappable (click)="gotogoodscar()">\n        <img [src]="img3" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="invite-item1">\n    <div>\n      <img class="duigou" [src]="img5" alt="">\n      拼单成功\n    </div>\n  </div>\n  <div class="invite-item2">\n   商家正在努力发货，请耐心等待\n  </div>\n  <div class="invite-item3">\n    <div tappable (click)="gotohomepage()">去首页逛逛</div>\n  </div>\n  <div class="invite-item6">\n    <div style="border-bottom:1px solid #e5e5e5">\n      <div style="font-weight:900;width:10rem;">商品名称</div>\n      <div class="goods-name" *ngIf="Info!=null" >\n        <div style="line-height:2rem;">{{Info.ProductName}}</div>\n        <img class="img-goto" [src]="picurl" alt="">\n      </div>\n    </div>\n  </div>\n  <div class="invite-item7">\n    <div>\n      <div style="font-weight:900;">拼单须知</div>\n      <div class="goods-name goods-name-width">\n        <div>\n          <div class="circle-black"></div>\n          好友拼单\n        </div>\n        <div>\n          <div class="circle-black"></div>\n          人满发货\n        </div>\n        <div>\n          <div class="circle-black"></div>\n          人不满退款\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\group-buy-success\group-buy-success.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], GroupBuySuccessPage);

//# sourceMappingURL=group-buy-success.js.map

/***/ })

});
//# sourceMappingURL=161.js.map?v=107