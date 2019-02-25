webpackJsonp([175],{

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponToUsePageModule", function() { return CouponToUsePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupon_to_use__ = __webpack_require__(761);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CouponToUsePageModule = (function () {
    function CouponToUsePageModule() {
    }
    return CouponToUsePageModule;
}());
CouponToUsePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__coupon_to_use__["a" /* CouponToUsePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__coupon_to_use__["a" /* CouponToUsePage */]),
        ],
    })
], CouponToUsePageModule);

//# sourceMappingURL=coupon-to-use.module.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponToUsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
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
 * Generated class for the CouponToUsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CouponToUsePage = (function () {
    function CouponToUsePage(navCtrl, navParams, 
        //private storage: Storage,
        httpService, nativeService, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.viewCtrl = viewCtrl;
        this.switchflag = "0";
        this.img = "assets/imgs/guanbi.png";
    }
    CouponToUsePage.prototype.ionViewWillEnter = function () {
        this.conponList = this.navParams.get('CouponList');
        console.log(this.conponList);
        this.conponList2 = this.conponList;
        // this.switch(0);
        // this.storage.get("userinfo").then(val => {
        //   if (val != "" && val != null) {
        //     if (val.userinform.ID == "") {
        //       this.navCtrl.push("LoginPage",{showflag:true});
        //     } else {
        //       this.userID = val.userinform.ID;
        //       this.load();
        //     }
        //   } else {
        //   }
        // })
    };
    CouponToUsePage.prototype.ionViewDidLoad = function () {
    };
    CouponToUsePage.prototype.switch = function (num) {
        this.conponList = this.conponList2;
        if (num == 0) {
            this.conponList = this.conponList.filter(function (info) {
                return (info.isOk == true);
            });
        }
        else {
            this.conponList = this.conponList.filter(function (info) {
                return (info.isOk == false);
            });
        }
        this.switchflag = num;
    };
    CouponToUsePage.prototype.load = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
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
    CouponToUsePage.prototype.splite = function (item) {
        var arr = [];
        arr = item.split('T');
        return arr[0];
    };
    CouponToUsePage.prototype.dismiss = function (item, i) {
        item.index = i;
        this.viewCtrl.dismiss(item);
        // if (item.isOk) {
        // } else {
        //   this.nativeService.showToast("此优惠券不可用，请重新选择");
        // }
    };
    CouponToUsePage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return CouponToUsePage;
}());
CouponToUsePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-coupon-to-use',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\coupon-to-use\coupon-to-use.html"*/'<!--\n  Generated template for the CouponToUsePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n  <ion-navbar  mode="ios" style="min-height: 44px;">\n    <ion-title  mode="ios">优惠券列表</ion-title>\n    <ion-buttons right>\n        <button ion-button icon-only tappable (click)="close()">\n          <img [src]="img" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#e5e5e5">\n  <!-- <div class="coupon-switch">\n    <div tappable (click)="switch(0)">\n      <span [ngClass]="{true:\'color\',false:\'\'}[switchflag==0]">可用</span>\n    </div>\n    <div tappable (click)="switch(1)">\n      <span [ngClass]="{true:\'color\',false:\'\'}[switchflag==1]">不可用</span>\n    </div>\n  </div> -->\n  <div class="coupon-item" *ngFor="let item of conponList;let i=index" tappable (click)="dismiss(item,i)">\n    <div class="item-header" [ngClass]="{true:\'item-header\',false:\'item-header2\'}[switchflag==0]" ></div>\n    <div class="item-content">\n      <div *ngIf="item.CouponType==1" class="item-num" [ngClass]="{true:\'item-num\',false:\'item-num2\'}[switchflag==0]">\n        <div>\n          {{item.Amount}}\n          <span style="font-size:12px;font-weight:100;">元</span>\n        </div>\n        <div>满减劵</div>\n      </div>\n      <div *ngIf="item.CouponType==2" class="item-num" [ngClass]="{true:\'item-num\',false:\'item-num2\'}[switchflag==0]">\n        <div style="padding-left:2rem;">\n          {{item.Amount*10}}\n          <span style="font-size:12px;font-weight:100;">折</span>\n        </div>\n        <div>折扣劵</div>\n      </div>\n      <div *ngIf="item.CouponType==3" class="item-num" [ngClass]="{true:\'item-num\',false:\'item-num2\'}[switchflag==0]">\n        <div>\n          {{item.Amount}}\n          <span style="font-size:12px;font-weight:100;">元</span>\n        </div>\n        <div>代金券</div>\n      </div>\n      <div class="item-exp">\n        <div>订单满{{item.MeetPrice}}元即可使用</div>\n        <div>\n          <span *ngIf="item.UsingRange==1">全平台可用</span>\n          <span *ngIf="item.UsingRange==2">店铺通用类</span>\n          <span *ngIf="item.UsingRange==3">分类通用类</span>\n          <span *ngIf="item.UsingRange==4">商品使用类</span>\n          <span *ngIf="item.UsingRange==5">品牌使用</span>\n        </div>\n        <!-- <div>不能用情况</div> -->\n      </div>\n    </div>\n    <div class="item-footer">\n      <div>有效期：{{splite(item.StartDate)}}至{{splite(item.EndDate)}}</div>\n      <div *ngIf="item.isL" style="color:#ff5c00">已选择</div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\coupon-to-use\coupon-to-use.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
], CouponToUsePage);

//# sourceMappingURL=coupon-to-use.js.map

/***/ })

});
//# sourceMappingURL=175.js.map?v=107