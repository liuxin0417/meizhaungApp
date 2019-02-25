webpackJsonp([126],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(805);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    return SearchPageModule;
}());
SearchPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
        ],
    })
], SearchPageModule);

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 805:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, httpService, nativeService, storage, Inservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.Inservice = Inservice;
        this.img9 = "assets/imgs/fanhui2.png";
        this.img10 = "assets/imgs/cheat.png";
        this.img11 = "assets/imgs/search.png";
        this.middle = "assets/imgs/new/middle.png";
        this.list = [];
        this.img = "assets/imgs/temporary/shangpin2.png";
        this.activity = "assets/imgs/new/activity.png";
        this.padding = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["e" /* Padding */]();
        this.noshow = false;
        this.isshow = true;
        this.CouponID = this.navParams.get("CouponID");
        this.storage.get("userinfo").then(function (val) {
        });
        this.FranchiseeID = "";
        if (this.CouponID == null || this.CouponID == undefined || this.CouponID == "") {
            this.CouponID = "";
        }
        else {
            this.message = "";
            this.search2();
        }
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            var inputpart = _this.inputpart.nativeElement;
            inputpart.focus();
        }, 600);
    };
    SearchPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    SearchPage.prototype.search = function () {
        var _this = this;
        if (this.message == "") {
            this.nativeService.showToast("请填写查询信息");
            return;
        }
        else {
        }
        // this.CouponID="";
        var userInfo = {
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            FranchiseeID: this.FranchiseeID,
            goodName: this.message,
            CouponID: this.CouponID
        };
        // //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1037";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            console.info(result);
            if (result.Code == 1) {
                _this.list = result.Data;
                if (_this.list.length == 0) {
                    _this.noshow = true;
                }
                else {
                    _this.noshow = false;
                }
            }
            else {
            }
        });
    };
    SearchPage.prototype.search2 = function () {
        var _this = this;
        var userInfo = {
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            FranchiseeID: this.FranchiseeID,
            goodName: this.message,
            CouponID: this.CouponID
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1037";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.list = result.Data;
                if (_this.list.length == 0) {
                    _this.noshow = true;
                }
                else {
                    _this.noshow = false;
                }
            }
            else {
            }
        });
    };
    SearchPage.prototype.gotoGoodDetail = function (id) {
        this.navCtrl.push("GoodDetailPage", {
            Fh: this.FranchiseeID,
            goodsid: id,
        });
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.list.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            FranchiseeID: this.FranchiseeID,
            goodName: this.message,
            CouponID: this.CouponID
        };
        //console.info(pageInfo);
        var parm = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parm.jyh = "1037";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            //console.info(newData)
            setTimeout(function () {
                var newList;
                var msg = JSON.parse(newData.result);
                newList = msg.Data;
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.list.push(newList[i]);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                infiniteScroll.complete();
            }, 1000);
        });
    };
    return SearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('inputpart'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SearchPage.prototype, "inputpart", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-search',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\search\search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header style="height:48px;">\n  <div class="home_header">\n    <div class="header-inside">\n      <div class="qrcode" tappable (click)="goback()">\n        <img [src]="img9" alt="">\n      </div>\n      <div class="search">\n        <div class="searchimg">\n          <img [src]="img11" alt="">\n        </div>\n        <input #inputpart ng-focus="" class=\'searchpart\' placeholder="逛贝" [(ngModel)]="message" type="text"\n          (keyup.Enter)="search()">\n      </div>\n      <div class="message" tappable (click)="search()">\n        <img [src]="img11" alt="">\n      </div>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content style="background:#F7F7F7;">\n  <div>\n    <!-- <div style="width:100%;height:48px;"></div> -->\n    <div class="goods-list">\n      <div class="goods-item" *ngFor="let item of list" tappable (click)="gotoGoodDetail(item.ID)">\n        <img *ngIf="item.ISHD==1" class="activity_pic" [src]="activity" alt="">\n        <img [src]="item.PicUrl==null?middle:item.PicUrl" alt="">\n        <div class="goods_item_list2">{{item.Name}}</div>\n        <!-- <div class="goods_item_list5">\n          <span>标签1</span>\n          <span>标签2</span>\n        </div> -->\n        <div class="goods_item_list3">\n          <span *ngIf="item.ISHD!=1">￥{{(item.ActivityPrice).toFixed(2)}}</span>\n          <span *ngIf="item.ISHD==1">￥{{(item.HDPrice).toFixed(2)}}</span>\n          <span style="color:#999;text-decoration: line-through;margin-left:5px;">￥{{(item.OldPrice).toFixed(2)}}</span>\n          <!-- <span class="get_border">满减</span>\n          <span class="get_border">秒杀</span> -->\n        </div>\n        <div class="goods_item_list4">\n          <span style="margin-right:10px;">{{item.SalNum}}销量</span>\n          <!-- <span>{{item.Praise}}好评</span> -->\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="noshow" class="nogoods">\n    暂无相关产品\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_InfiniteScrollService__["a" /* InfiniteScrollService */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=126.js.map?v=107