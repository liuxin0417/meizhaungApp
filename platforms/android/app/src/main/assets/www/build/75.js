webpackJsonp([75],{

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryTypePageModule", function() { return DeliveryTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delivery_type__ = __webpack_require__(764);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DeliveryTypePageModule = (function () {
    function DeliveryTypePageModule() {
    }
    return DeliveryTypePageModule;
}());
DeliveryTypePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__delivery_type__["a" /* DeliveryTypePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__delivery_type__["a" /* DeliveryTypePage */]),
        ],
    })
], DeliveryTypePageModule);

//# sourceMappingURL=delivery-type.module.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeliveryTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__ = __webpack_require__(292);
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
 * Generated class for the DeliveryTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DeliveryTypePage = (function () {
    function DeliveryTypePage(navCtrl, navParams, httpService, nativeService, 
        //private storage: Storage,
        Inservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.Inservice = Inservice;
        this.img = "assets/imgs/jinru--hui.png";
        this.switchNum = 1;
        this.img9 = "assets/imgs/fanhui2.png";
        this.img11 = "assets/imgs/search.png";
        this.img4 = "assets/imgs/vhjekan.png";
        this.img5 = "assets/imgs/pinglun.png";
        this.ismsg = true;
        this.isscroll = true;
        this.padding = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["e" /* Padding */]();
    }
    DeliveryTypePage.prototype.ionViewDidLoad = function () {
    };
    DeliveryTypePage.prototype.gotopont = function () {
        this.navCtrl.push("DeliveryPontPage");
    };
    DeliveryTypePage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    DeliveryTypePage.prototype.search = function () {
        var _this = this;
        var userInfo = {
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            Text: this.message,
        };
        // //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1125";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.dataList = result.Data;
                if (_this.dataList.length == 0) {
                    _this.ismsg = false;
                }
                else {
                    _this.ismsg = true;
                }
            }
            else {
            }
        });
    };
    DeliveryTypePage.prototype.gotoinfo = function (item) {
        this.navCtrl.push('PersonalArticlePage', {
            ID: item.ID,
            type: 1
        });
    };
    DeliveryTypePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        console.log("是否进入");
        if (this.dataList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isscroll = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            Text: this.message,
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parm.jyh = "1125";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            setTimeout(function () {
                var newList;
                var msg = JSON.parse(newData.result);
                newList = msg.Data;
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.dataList.push(newList[i]);
                        console.log(_this.dataList);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isscroll = false;
                }
                else {
                    _this.isscroll = true;
                }
                infiniteScroll.complete();
            }, 1000);
        });
    };
    return DeliveryTypePage;
}());
DeliveryTypePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-delivery-type',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\delivery-type\delivery-type.html"*/'<!--\n  Generated template for the DeliveryTypePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="height:52px;">\n  <div class="home_header">\n    <div class="header-inside">\n      <div class="qrcode" tappable (click)="goback()">\n        <img [src]="img9" alt="">\n      </div>\n      <div class="search">\n        <div class="searchimg">\n          <!-- <img [src]="img11" alt=""> -->\n        </div>\n        <input #inputpart ng-focus="" class=\'searchpart\' placeholder="爱他美" [(ngModel)]="message" type="text" (keyup.Enter)="search()">\n      </div>\n      <div class="message" tappable (click)="search()">\n        <img [src]="img11" alt="">\n      </div>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="ismsg">\n    <div *ngFor="let item of dataList">\n      <div class="com-content-style2" tappbale (click)="gotoinfo(item)">\n        <div class="bannerpic">\n          <img [src]="item.ImgUrl" tappable alt="" class="com-style2-img">\n        </div>\n        <div class="com-style2-title">\n          {{item.Title}}\n        </div>\n        <div class="com-style2-persion">\n          <div class="com-style2-part">\n            <img class="com-style-pic1" [src]="item.HeadUrl" alt="" style="margin-right:6px">\n            <div style="margin-right:20px">{{item.LoginName}}</div>\n          </div>\n          <div class="com-style2-part">\n            <img class="com-style-pic2" [src]="img4" alt="">\n            <div style="margin-right:15px">{{item.ClickNum}}</div>\n            <img class="com-style-pic2" [src]="img5" alt="">\n            <div>{{item.CommentNum}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="noMsg" *ngIf="!ismsg">\n    暂无相关文章\n  </div>\n  <ion-infinite-scroll *ngIf="isscroll" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\delivery-type\delivery-type.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__["a" /* InfiniteScrollService */]])
], DeliveryTypePage);

//# sourceMappingURL=delivery-type.js.map

/***/ })

});
//# sourceMappingURL=75.js.map?v=107