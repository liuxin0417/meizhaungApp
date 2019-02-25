webpackJsonp([77],{

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponPageModule", function() { return CouponPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupon__ = __webpack_require__(762);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CouponPageModule = (function () {
    function CouponPageModule() {
    }
    return CouponPageModule;
}());
CouponPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__coupon__["a" /* CouponPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__coupon__["a" /* CouponPage */]),
        ],
    })
], CouponPageModule);

//# sourceMappingURL=coupon.module.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
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






//import { FileObj } from "../../model/FileObj";
/**
 * Generated class for the CouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CouponPage = (function () {
    function CouponPage(navCtrl, navParams, storage, httpService, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.switchflag = "0";
    }
    CouponPage.prototype.ionViewWillEnter = function () {
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
    CouponPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad CouponPage');
    };
    CouponPage.prototype.switch = function (num) {
        this.switchflag = num;
    };
    CouponPage.prototype.load = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1120";
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
    CouponPage.prototype.splite = function (item) {
        var arr = [];
        arr = item.split('T');
        return arr[0];
    };
    CouponPage.prototype.gotoUse = function (item) {
        //console.info(item)
        this.navCtrl.push("SearchPage", {
            CouponID: item.CouponID,
        });
    };
    return CouponPage;
}());
CouponPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-coupon',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\coupon\coupon.html"*/'<!--\n  Generated template for the CouponPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">优惠券</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n <!--  <div class="coupon-switch">\n    <div tappable (click)="switch(0)">\n      <span [ngClass]="{true:\'color\',false:\'\'}[switchflag==0]">未使用</span>\n    </div>\n    <div tappable (click)="switch(1)">\n      <span [ngClass]="{true:\'color\',false:\'\'}[switchflag==1]">已失效</span>\n    </div>\n  </div> -->\n  <div class="coupon-item" *ngFor="let item of conponList">\n    <div class="item-header"></div>\n    <div class="item-content">\n      <div *ngIf="item.CouponType==1" class="item-num">\n        <div>\n          {{item.Amount}}\n          <span style="font-size:12px;font-weight:100;">元</span>\n        </div>\n        <div>满减劵</div>\n      </div>\n      <div *ngIf="item.CouponType==2" class="item-num">\n        <div style="padding-left:2rem;">\n          {{item.Amount*10}}\n          <span style="font-size:12px;font-weight:100;">折</span>\n        </div>\n        <div>折扣劵</div>\n      </div>\n      <div *ngIf="item.CouponType==3" class="item-num">\n        <div>\n          {{item.Amount}}\n          <span style="font-size:12px;font-weight:100;">元</span>\n        </div>\n        <div>代金券</div>\n      </div>\n      <div class="item-exp">\n        <div>订单满{{item.MeetPrice}}元即可使用</div>\n        <div>\n          <span *ngIf="item.UsingRange==1">全平台</span>\n          <span *ngIf="item.UsingRange==2">店铺通用</span>\n          <span *ngIf="item.UsingRange==3">品类通用</span>\n          <span *ngIf="item.UsingRange==4">单商品通用</span>\n          <span *ngIf="item.UsingRange==5">品牌通用</span>\n        </div>\n        <!-- <div>不能用情况</div> -->\n      </div>\n    </div>\n    <div class="item-footer">\n      <div>有效期：{{splite(item.StartDate)}}至{{splite(item.EndDate)}}</div>\n      <div tappable (click)="gotoUse(item)">去使用</div>\n    </div>\n  </div>\n  <!-- <div class="coupon-item" *ngIf="switchflag==1">\n    <div class="item-header2"></div>\n    <div class="item-content">\n      <div class="item-num2">\n        <div>\n          100\n          <span style="font-size:12px;font-weight:100;">元</span>\n        </div>\n        <div>抵扣劵</div>\n      </div>\n      <div class="item-exp">\n        <div>订单满1000元即可使用</div>\n        <div>试用地点</div>\n        <div>不能用情况</div>\n      </div>\n    </div>\n    <div class="item-footer">\n      <div>有效期：2017.02.05-2017.04.03</div>\n      <div>去使用</div>\n    </div>\n  </div> -->\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\coupon\coupon.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */]])
], CouponPage);

//# sourceMappingURL=coupon.js.map

/***/ })

});
//# sourceMappingURL=77.js.map?v=107