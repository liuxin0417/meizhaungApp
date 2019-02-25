webpackJsonp([62],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotPlatePageModule", function() { return HotPlatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hot_plate__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HotPlatePageModule = (function () {
    function HotPlatePageModule() {
    }
    return HotPlatePageModule;
}());
HotPlatePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__hot_plate__["a" /* HotPlatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__hot_plate__["a" /* HotPlatePage */]),
        ],
    })
], HotPlatePageModule);

//# sourceMappingURL=hot-plate.module.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotPlatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(85);
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






var HotPlatePage = (function () {
    function HotPlatePage(navCtrl, navParams, nativeService, httpService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.httpService = httpService;
        this.storage = storage;
        this.themeList = this.navParams.get("themeList");
        this.fatherType = this.navParams.get("type");
        ////console.info(this.themeList);
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID != "") {
                    _this.userInfo = val.userinform;
                }
            }
        });
    }
    HotPlatePage.prototype.ionViewDidLoad = function () {
        if (this.themeList == undefined) {
            this.Load();
            this.fatherType = 1;
        }
        else {
            this.typeList = this.themeList;
        }
    };
    HotPlatePage.prototype.Load = function () {
        var _this = this;
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1081";
        parameter.parm = "";
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.typeList = result.Data;
            }
            else {
            }
        });
    };
    HotPlatePage.prototype.gotoperson = function (item) {
        //console.log(item);
        this.navCtrl.push("PersonHomepagePage", {
            type: item,
            fatherType: this.fatherType
        });
    };
    HotPlatePage.prototype.AddFollow = function (item) {
        var _this = this;
        if (this.userInfo == null) {
            this.navCtrl.push('LoginPage');
            return false;
        }
        var Info = {
            UserID: this.userInfo.ID,
            RelD: item.ID
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1067";
        parameter.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.nativeService.showToast("添加关注成功");
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    return HotPlatePage;
}());
HotPlatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-hot-plate',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\hot-plate\hot-plate.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">热门板块</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#eee;">\n  <div class="plate-item" *ngFor="let item of typeList" tappable (click)="gotoperson(item)">\n    <img class="head-img" [src]="item.ImgUrl" alt="">\n    <div class="plate-content">\n      <div>{{item.Name}}</div>\n      <div style="font-size:0.75em;color:#999">{{item.Num}}文章</div>\n    </div>\n    <div class="plate-btn" *ngIf="fatherType==1"  tappable (click)="AddFollow(item)">+关注</div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\hot-plate\hot-plate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], HotPlatePage);

//# sourceMappingURL=hot-plate.js.map

/***/ })

});
//# sourceMappingURL=62.js.map?v=107