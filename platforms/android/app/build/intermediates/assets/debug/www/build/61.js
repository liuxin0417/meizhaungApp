webpackJsonp([61],{

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomePageModule", function() { return IncomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__income__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IncomePageModule = (function () {
    function IncomePageModule() {
    }
    return IncomePageModule;
}());
IncomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__income__["a" /* IncomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__income__["a" /* IncomePage */]),
        ],
    })
], IncomePageModule);

//# sourceMappingURL=income.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IncomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(144);
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
 * Generated class for the MoneyInOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IncomePage = (function () {
    function IncomePage(navCtrl, navParams, httpService, nativeService, storage, Inservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.Inservice = Inservice;
        this.goto = "assets/imgs/jinru--hui.png";
        this.userID = "";
        this.list = [];
        this.isshow = true;
        this.padding = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["e" /* Padding */]();
        this.padding.pageSize = 15;
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userID = val.userinform.ID;
                    _this.getUserIncomeList(null);
                }
                // this.load2();
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
    }
    IncomePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad MoneyInOutPage');
    };
    IncomePage.prototype.getUserIncomeList = function (backfun) {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "2006";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                var newList = result.Data;
                console.info(newList);
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.list.push(newList[i]);
                    }
                }
                if (newList.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                if (backfun != null || backfun != undefined) {
                    backfun();
                }
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    IncomePage.prototype.doInfinite = function (infiniteScroll) {
        /* infiniteScroll.enable(true); */
        console.info("运行了下拉加载");
        if (this.list.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        this.getUserIncomeList(function () {
            infiniteScroll.complete();
        });
    };
    return IncomePage;
}());
IncomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-income',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\income\income.html"*/'<!--\n  Generated template for the MoneyInOutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">收益记录</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content style="background:#f2f2f2">\n  <div class="in_content">\n    <div class="in_item"  *ngFor="let item of list">\n      <div class="in_item_left">\n        <div *ngIf="item.GiftNum>0" style="font-size:1.2rem;margin-bottom:4px;">来自团队成员<span style="color:#ff5c00;">{{item.FromUserNickName}}</span>下单</div>\n        <div *ngIf="item.GiftNum<0" style="font-size:1.2rem;margin-bottom:4px;">{{item.source}}</div>\n        <div style="font-size:1.2rem;color:#999;">{{item.ObtainTime}}</div>\n      </div>\n      <div class="in_item_right">\n        <span style="color:#ff5c00;">{{item.GiftNum}}</span>\n        <span style="font-size:1.2rem;">积分</span>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\income\income.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__providers_InfiniteScrollService__["a" /* InfiniteScrollService */]])
], IncomePage);

//# sourceMappingURL=income.js.map

/***/ })

});
//# sourceMappingURL=61.js.map?v=107