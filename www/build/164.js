webpackJsonp([164],{

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsPageModule", function() { return GoodsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goods__ = __webpack_require__(783);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoodsPageModule = (function () {
    function GoodsPageModule() {
    }
    return GoodsPageModule;
}());
GoodsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__goods__["a" /* GoodsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__goods__["a" /* GoodsPage */]),
        ],
    })
], GoodsPageModule);

//# sourceMappingURL=goods.module.js.map

/***/ }),

/***/ 783:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
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






//import { concat } from 'rxjs/operator/concat';
var GoodsPage = (function () {
    function GoodsPage(navCtrl, navParams, httpservice, nativeservice, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpservice = httpservice;
        this.nativeservice = nativeservice;
        this.storage = storage;
        this.list = ["贝拉", "嘉宝", "喜宝", "方广", "亨氏", "嘉宝", "荷兰Unox", "亨氏"];
        this.img = "assets/imgs/temporary/shangpin2.png";
        this.middle = "assets/imgs/new/middle.png";
        this.CategoryID = "";
        this.Fh = "";
        this.CategoryID = this.navParams.get("goodsid");
        this.storage.get("userinfo").then(function (val) {
            if (val != null) {
                _this.Fh = val.address.FranchiseeID;
                _this.GetGoodsList();
            }
        });
    }
    GoodsPage.prototype.ionViewDidLoad = function () {
    };
    /**获取列表商品 */
    GoodsPage.prototype.GetGoodsList = function () {
        var _this = this;
        var userInfo = {
            CategoryID: this.CategoryID,
            FranceID: this.Fh
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1047";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeservice.showLoading("获取中");
        this.httpservice.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            _this.nativeservice.hideLoading();
            // //console.info(result.Data)
            if (result.Code == "1") {
                _this.GoodsList = result.Data;
            }
        });
    };
    GoodsPage.prototype.gotoGoodDetail = function (id) {
        this.navCtrl.push("GoodDetailPage", {
            Fh: this.Fh,
            goodsid: id
        });
    };
    return GoodsPage;
}());
GoodsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-goods',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\goods\goods.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">商品列表</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#F7F7F7;">\n  <div class="goods-list">\n    <div class="goods-item" *ngFor="let item of GoodsList" tappable (click)="gotoGoodDetail(item.ID)">\n      <img [src]="item.picurl==\'\'?middle:item.picurl" alt="">\n      <div class="goods_item_list2">{{item.name}}</div>\n      <div class="goods_item_list5">\n        <span>标签1</span>\n        <span>标签2</span>\n      </div>\n      <div class="goods_item_list3">\n        <span>￥{{(item.activityprice).toFixed(2)}}</span>\n        <span class="get_border">满减</span>\n        <span class="get_border">秒杀</span>\n      </div>\n      <div class="goods_item_list4">\n        <span style="margin-right:10px;">4164条评价</span>\n        <span>99%好评</span>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\goods\goods.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], GoodsPage);

//# sourceMappingURL=goods.js.map

/***/ })

});
//# sourceMappingURL=164.js.map?v=107