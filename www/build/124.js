webpackJsonp([124],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondToBuyPageModule", function() { return SecondToBuyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__second_to_buy__ = __webpack_require__(810);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SecondToBuyPageModule = (function () {
    function SecondToBuyPageModule() {
    }
    return SecondToBuyPageModule;
}());
SecondToBuyPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__second_to_buy__["a" /* SecondToBuyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__second_to_buy__["a" /* SecondToBuyPage */]),
        ],
    })
], SecondToBuyPageModule);

//# sourceMappingURL=second-to-buy.module.js.map

/***/ }),

/***/ 810:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondToBuyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SecondToBuyPage = (function () {
    function SecondToBuyPage(navCtrl, navParams, nativeService, httpService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.httpService = httpService;
        this.storage = storage;
        this.img = "assets/imgs/temporary/banner.png";
        this.img1 = "assets/imgs/temporary/3.png";
        this.activityID = "";
        this.ActivityName = "爱宝加活动";
        this.state = 0; //0-未开始 1-开始中 2-结束
        this.padding = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["e" /* Padding */]();
        this.activityID = this.navParams.get("goodsid");
        this.storage.get("userinfo").then(function (val) {
            if (val != null) {
                _this.Fh = val.address.FranchiseeID;
                _this.Load();
            }
            else {
            }
        });
    }
    SecondToBuyPage.prototype.ionViewDidLoad = function () {
    };
    SecondToBuyPage.prototype.gotoseckill = function (item) {
        if (this.state == 2) {
            this.nativeService.showToast("活动已经结束");
            return false;
        }
        if (item.ResidueNum <= 0) {
            this.nativeService.showToast("商品已售完");
            return false;
        }
        var info = {
            ID: item.ID,
            ActivityID: this.activityID,
            ProductID: item.ProductID,
            AcType: this.data.AcType
        };
        if (this.data.AcType == 4) {
            this.navCtrl.push("SeckillPage", {
                seckInfo: info
            });
        }
        else {
            this.navCtrl.push("GoodDetailPage", {
                goodsid: item.ProductID,
                Fh: this.Fh,
                seckInfo: info
            });
        }
    };
    /**加载活动下的商品 */
    SecondToBuyPage.prototype.Load = function () {
        var _this = this;
        var userInfo = {
            activityID: this.activityID,
            FraceID: this.Fh,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1115";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.data = result.Data;
                _this.ActivityName = _this.data.Name;
                _this.goodlist = JSON.parse(result.Data.productList);
                var now = new Date();
                var date = new Date(_this.data.STime);
                var date2 = new Date(_this.data.ETime);
                if (now > date && now < date2) {
                    _this.state = 1;
                }
                else if (now < date) {
                    _this.state = 0;
                }
                else if (now > date2) {
                    _this.state = 2;
                }
                console.log(_this.state);
            }
            else {
                /*  this.nativeService.showToast(result.Msg);
                 this.navCtrl.pop(); */
            }
        });
    };
    SecondToBuyPage.prototype.slice = function (string) {
        if (string != '' && string != null) {
            return string.slice(0, 30) + "...";
        }
        else {
        }
    };
    return SecondToBuyPage;
}());
SecondToBuyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-second-to-buy',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\second-to-buy\second-to-buy.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">{{ActivityName}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n  <!-- <div class="banner-pic">\n    <img [src]="img" alt="">\n  </div> -->\n  <!-- <div style="width:100%;height:60px;"></div> -->\n  <div class="goods-list">\n    <div class="goods-item" *ngFor="let item of goodlist" (click)="gotoseckill(item)">\n      <div class="goods-img">\n        <img [src]="item.PicUrl" alt="">\n      </div>\n      <div class="goods-content">\n        <div class="goods-content1">\n          {{slice(item.ProductName)}}\n        </div>\n        <div class="goods-content2">\n          <div class="goods-content2-price">\n            <div class="changecolor">￥{{item.SecKillPrice}}</div>\n            <div style="color:#999;text-decoration: line-through">￥{{item.ActivityPrice}}</div>\n          </div>\n          <div class="goods-content2-btn">\n            <div class="btn2" *ngIf="state==1">去抢购</div>\n            <div class="btn" *ngIf="state!=1">去抢购</div>\n            <div>还有{{item.ResidueNum}}件</div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- <div class="goods-item">\n      <div class="goods-img">\n        <img [src]="img1" alt="">\n      </div>\n      <div class="goods-content">\n        <div class="goods-content1">\n          可心柔V9润+宝贝系列抽纸3层120抽4提16包整箱量贩卫生纸柔润保湿纸巾\n        </div>\n        <div class="goods-content2">\n          <div class="goods-content2-price">\n            <div style="color:#ff4f4f">￥1.11</div>\n            <div style="color:#999;text-decoration: line-through">￥219.9</div>\n          </div>\n          <div class="goods-content2-btn">\n            <div class="btn2" tappable (click)="gotoseckill()">去抢购</div>\n            <div>已售37%</div>\n          </div>\n        </div>\n      </div>\n    </div> -->\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\second-to-buy\second-to-buy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], SecondToBuyPage);

//# sourceMappingURL=second-to-buy.js.map

/***/ })

});
//# sourceMappingURL=124.js.map?v=107