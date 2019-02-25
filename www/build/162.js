webpackJsonp([162],{

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupBuyListPageModule", function() { return GroupBuyListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_buy_list__ = __webpack_require__(770);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupBuyListPageModule = (function () {
    function GroupBuyListPageModule() {
    }
    return GroupBuyListPageModule;
}());
GroupBuyListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__group_buy_list__["a" /* GroupBuyListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__group_buy_list__["a" /* GroupBuyListPage */]),
        ],
    })
], GroupBuyListPageModule);

//# sourceMappingURL=group-buy-list.module.js.map

/***/ }),

/***/ 770:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupBuyListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_InfiniteScrollService__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GroupBuyListPage = (function () {
    function GroupBuyListPage(navCtrl, navParams, httpService, nativeService, storage, Inservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.Inservice = Inservice;
        this.padding = new __WEBPACK_IMPORTED_MODULE_1__model_Model__["e" /* Padding */]();
        this.isshow = true;
        this.storage.get("userinfo").then(function (val) {
            if (val != null && val != "") {
                _this.address = val.address;
                _this.padding.pageSize = 16;
                _this.Load();
            }
        });
    }
    GroupBuyListPage.prototype.ionViewDidLoad = function () {
    };
    GroupBuyListPage.prototype.Load = function () {
        var _this = this;
        var userInfo = {
            FranceID: this.address.FranchiseeID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_1__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1089";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.GroupList = result.Data;
            }
        });
    };
    GroupBuyListPage.prototype.gotoGroupDetail = function (item) {
        this.navCtrl.push("GroupBuyDetailPage", {
            Group: item
        });
    };
    GroupBuyListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        /* infiniteScroll.enable(true); */
        if (this.GroupList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            FranceID: this.address.FranchiseeID,
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_1__model_Model__["f" /* Parameter */]();
        parm.jyh = "1089";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            setTimeout(function () {
                var newList;
                var msg = JSON.parse(newData.result);
                newList = msg.Data;
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.GroupList.push(newList[i]);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                infiniteScroll.complete();
            }, 1000);
        });
    };
    GroupBuyListPage.prototype.slice = function (string) {
        if (string != '' && string != null) {
            return string.slice(0, 20) + "...";
        }
        else {
        }
    };
    return GroupBuyListPage;
}());
GroupBuyListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["Component"])({
        selector: 'page-group-buy-list',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\group-buy-list\group-buy-list.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">团购列表</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="goods-list">\n    <div class="goods-item" tappable *ngFor="let item of GroupList" (click)="gotoGroupDetail(item)">\n      <img [src]="item.PicUrl" alt="">\n      <div>\n        {{slice(item.Name)}}\n      </div>\n      <div>￥{{item.GroupPrice}}</div>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\group-buy-list\group-buy-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__providers_InfiniteScrollService__["a" /* InfiniteScrollService */]])
], GroupBuyListPage);

//# sourceMappingURL=group-buy-list.js.map

/***/ })

});
//# sourceMappingURL=162.js.map?v=107