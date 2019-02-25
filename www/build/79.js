webpackJsonp([79],{

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponListPageModule", function() { return CouponListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupon_list__ = __webpack_require__(760);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CouponListPageModule = (function () {
    function CouponListPageModule() {
    }
    return CouponListPageModule;
}());
CouponListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__coupon_list__["a" /* CouponListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__coupon_list__["a" /* CouponListPage */]),
        ],
    })
], CouponListPageModule);

//# sourceMappingURL=coupon-list.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponListPage; });
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
 * Generated class for the CouponListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CouponListPage = (function () {
    function CouponListPage(navCtrl, navParams, httpService, nativeService, storage, alertCtrl, Inservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.Inservice = Inservice;
        this.number = 1;
        this.isshow = true;
        this.coupondes = [];
        this.padding = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["e" /* Padding */]();
    }
    CouponListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userID = val.userinform.ID;
                    _this.load();
                }
            }
            else {
            }
        });
    };
    CouponListPage.prototype.ionViewDidLoad = function () {
    };
    CouponListPage.prototype.load = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            // type: this.number,
            type: 0,
        };
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1116";
        this.nativeService.showLoading("获取中");
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result)
            _this.nativeService.hideLoading();
            if (result.Code == 1) {
                // this.nativeService.showToast(result.Msg);
                _this.conponList = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    CouponListPage.prototype.getDetail = function (item, i) {
        var _this = this;
        for (var n = 0; n < this.coupondes.length; n++) {
            if (item.ID == this.coupondes[n].CouponID && item.UsingRange == this.coupondes[n].UsingRange) {
                this.showList = this.coupondes[n].Name;
                this.choseNum = i;
                return;
            }
            else {
            }
        }
        var userInfo = {
            CouponID: item.ID,
            UsingRange: item.UsingRange,
        };
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1142";
        this.nativeService.showLoading("获取中");
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result)
            _this.nativeService.hideLoading();
            if (result.Code == 1) {
                var arr = {
                    "CouponID": item.ID,
                    "UsingRange": item.UsingRange,
                    "Name": []
                };
                _this.coupondes.push(arr);
                arr.Name = result.Data;
                _this.showList = result.Data;
                _this.choseNum = i;
                // this.nativeService.showToast(result.Msg);
                // this.conponList = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    CouponListPage.prototype.type = function (number) {
        this.number = number;
        this.load();
    };
    CouponListPage.prototype.getCoupon = function (item) {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
            ID: item.ID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1119";
        this.nativeService.showLoading("获取中");
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result)
            _this.nativeService.hideLoading();
            if (result.Code == 1) {
                item.isL = true;
                // this.nativeService.showToast(result.Msg);
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    CouponListPage.prototype.gotoUse = function (item) {
        //console.info(item)
        this.navCtrl.push("SearchPage", {
            CouponID: item.ID,
        });
    };
    CouponListPage.prototype.resest = function () {
        this.choseNum = -1;
    };
    CouponListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        /* infiniteScroll.enable(true); */
        ////console.info("运行了下拉加载");
        if (this.conponList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            // type: this.number,
            type: 0,
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parm.jyh = "1116";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            setTimeout(function () {
                var newList;
                var msg = JSON.parse(newData.result);
                newList = msg.Data;
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.conponList.push(newList[i]);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                infiniteScroll.complete();
            }, 1000);
        });
    };
    return CouponListPage;
}());
CouponListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-coupon-list',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\coupon-list\coupon-list.html"*/'<ion-header style="height:4.4rem">\n  <ion-navbar mode="ios" style="min-height: 4.4rem;">\n    <ion-title mode="ios">优惠券列表</ion-title>\n  </ion-navbar>\n  <!-- <div class="coupon-btn">\n    <div class="coupon-btn1" tappable (click)="type(1)">\n      <span [ngClass]="{true:\'color\',false:\'color2\'}[number==1]">全平台</span>\n    </div>\n    <div class="coupon-btn2" tappable (click)="type(2)">\n      <span [ngClass]="{true:\'color\',false:\'color2\'}[number==2]">品类</span>\n    </div>\n    <div class="coupon-btn3" tappable (click)="type(3)">\n      <span [ngClass]="{true:\'color\',false:\'color2\'}[number==3]">单商品</span>\n    </div>\n  </div> -->\n</ion-header>\n\n\n<ion-content style="background:#f7f7f7">\n  <div *ngFor="let item of conponList;let i=index">\n    <div class="coupon-content">\n      <div class="coupon-content-left">\n        <div *ngIf="item.isL" id="zhang"></div>\n        <div class="coupon-content-left-item1" *ngIf="item.UsingRange==1">全平台可用（除特殊商品）\n          <span *ngIf="item.CouponType==1">【满减劵】</span>\n          <span *ngIf="item.CouponType==2">【折扣劵】</span>\n          <span *ngIf="item.CouponType==3">【现金劵】</span>\n        </div>\n        <div class="coupon-content-left-item1" *ngIf="item.UsingRange==2">店铺通用类（除特殊商品）\n          <span *ngIf="item.CouponType==1">【满减劵】</span>\n          <span *ngIf="item.CouponType==2">【折扣劵】</span>\n          <span *ngIf="item.CouponType==3">【现金劵】</span>\n        </div>\n        <div class="coupon-content-left-item1" *ngIf="item.UsingRange==3">品类通用类（除特殊商品）\n          <span *ngIf="item.CouponType==1">【满减劵】</span>\n          <span *ngIf="item.CouponType==2">【折扣劵】</span>\n          <span *ngIf="item.CouponType==3">【现金劵】</span>\n        </div>\n        <div class="coupon-content-left-item1" *ngIf="item.UsingRange==4">商品使用类（除特殊商品）\n          <span *ngIf="item.CouponType==1">【满减劵】</span>\n          <span *ngIf="item.CouponType==2">【折扣劵】</span>\n          <span *ngIf="item.CouponType==3">【现金劵】</span>\n        </div>\n        <div class="coupon-content-left-item1" *ngIf="item.UsingRange==5">品牌使用（除特殊商品）\n          <span *ngIf="item.CouponType==1">【满减劵】</span>\n          <span *ngIf="item.CouponType==2">【折扣劵】</span>\n          <span *ngIf="item.CouponType==3">【现金劵】</span>\n        </div>\n        <div class="coupon-content-left-item2">\n          <div style="font-size:2rem;margin-right:0.5rem" *ngIf="item.CouponType==1">{{item.Amount}}元</div>\n          <div style="font-size:2rem;margin-right:0.5rem" *ngIf="item.CouponType==2">{{item.Amount*10}}折</div>\n          <div style="font-size:2rem;margin-right:0.5rem" *ngIf="item.CouponType==3">{{item.Amount}}元</div>\n          <div style="font-size:2rem;margin-right:0.5rem" *ngIf="item.CouponType==4">免邮劵</div>\n          <div *ngIf="item.CouponType!=4">满{{item.MeetPrice}}可用</div>\n        </div>\n      </div>\n      <div class="coupon-content-right">\n        <div>{{item.CouponName}}</div>\n        <!-- <div>{{(item.LqRate*1000)/10}}%</div> -->\n        <div *ngIf="!item.isL" class="clickBtn" tappable (click)="getCoupon(item)">点击领取</div>\n        <div *ngIf="item.isL" class="clickBtn" tappable (click)="gotoUse(item)">去使用</div>\n        <div *ngIf="choseNum!=i&&item.UsingRange!=1" tappable (click)="getDetail(item,i)">查看详情</div>\n        <div *ngIf="choseNum==i" tappable (click)="resest()">收起</div>\n      </div>\n    </div>\n    <div class="show_detail" *ngIf="choseNum==i">\n      <div class="show_detail_title">适用范围:</div>\n      <div class="show_detail_li">\n        <span *ngFor="let item of showList">\n          {{item.Name}};\n        </span>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\coupon-list\coupon-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_6__providers_InfiniteScrollService__["a" /* InfiniteScrollService */]])
], CouponListPage);

//# sourceMappingURL=coupon-list.js.map

/***/ })

});
//# sourceMappingURL=79.js.map?v=107