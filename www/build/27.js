webpackJsonp([27],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeenListPageModule", function() { return SeenListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seen_list__ = __webpack_require__(806);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeenListPageModule = (function () {
    function SeenListPageModule() {
    }
    return SeenListPageModule;
}());
SeenListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__seen_list__["a" /* SeenListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seen_list__["a" /* SeenListPage */]),
        ],
    })
], SeenListPageModule);

//# sourceMappingURL=seen-list.module.js.map

/***/ }),

/***/ 806:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeenListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_InfiniteScrollService__ = __webpack_require__(292);
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
 * Generated class for the SeenListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeenListPage = (function () {
    function SeenListPage(navCtrl, navParams, httpservice, nativeservice, storage, Inservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpservice = httpservice;
        this.nativeservice = nativeservice;
        this.storage = storage;
        this.Inservice = Inservice;
        this.list = ["贝拉", "嘉宝", "喜宝", "方广", "亨氏", "嘉宝", "荷兰Unox", "亨氏"];
        this.img = "assets/imgs/temporary/shangpin2.png";
        this.middle = "assets/imgs/new/middle.png";
        // private CategoryID = "";
        this.Fh = "";
        this.isshow = true;
        this.padding = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["e" /* Padding */]();
        this.storage.get("userinfo").then(function (val) {
            if (val != null) {
                _this.userID = val.userinform.ID;
                _this.Fh = "val.address.FranchiseeID";
                _this.GetGoodsList();
            }
        });
    }
    SeenListPage.prototype.ionViewDidLoad = function () {
    };
    SeenListPage.prototype.GetGoodsList = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1148";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeservice.showLoading("获取中");
        this.httpservice.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            _this.nativeservice.hideLoading();
            //console.info(result)
            if (result.Code == "1") {
                _this.GoodsList = result.Data;
            }
        });
    };
    SeenListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.GoodsList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        //console.info(pageInfo);
        var parm = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parm.jyh = "1148";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            setTimeout(function () {
                var newList;
                var msg = JSON.parse(newData.result);
                newList = msg.Data;
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.GoodsList.push(newList[i]);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                infiniteScroll.complete();
            }, 1000);
        });
    };
    SeenListPage.prototype.gotoGoodDetail = function (id) {
        this.navCtrl.push("GoodDetailPage", {
            Fh: "this.address",
            goodsid: id,
        });
    };
    return SeenListPage;
}());
SeenListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-seen-list',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\seen-list\seen-list.html"*/'<!--\n  Generated template for the SeenListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title>浏览记录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background:#F7F7F7;">\n  <div class="goods-list">\n    <div class="goods-item" *ngFor="let item of GoodsList" tappable (click)="gotoGoodDetail(item.ID)">\n      <img [src]="item.PicUrl==\'\'?middle:item.PicUrl" alt="">\n      <div class="goods_item_list2">{{item.Name}}</div>\n      <!-- <div class="goods_item_list5">\n        <span>标签1</span>\n        <span>标签2</span>\n      </div> -->\n      <div class="goods_item_list3">\n        <span>￥{{(item.ActivityPrice).toFixed(2)}}</span>\n        <!-- <span class="get_border">满减</span>\n        <span class="get_border">秒杀</span> -->\n      </div>\n      <div class="goods_item_list4">\n        <span style="margin-right:10px;">{{item.SalNum}}条评价</span>\n        <!-- <span>{{item.Praise}}好评</span> -->\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\seen-list\seen-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_InfiniteScrollService__["a" /* InfiniteScrollService */]])
], SeenListPage);

//# sourceMappingURL=seen-list.js.map

/***/ })

});
//# sourceMappingURL=27.js.map?v=107