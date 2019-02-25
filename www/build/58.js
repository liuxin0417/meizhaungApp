webpackJsonp([58],{

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogisticsInfoPageModule", function() { return LogisticsInfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logistics_info__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LogisticsInfoPageModule = (function () {
    function LogisticsInfoPageModule() {
    }
    return LogisticsInfoPageModule;
}());
LogisticsInfoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__logistics_info__["a" /* LogisticsInfoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__logistics_info__["a" /* LogisticsInfoPage */]),
        ],
    })
], LogisticsInfoPageModule);

//# sourceMappingURL=logistics-info.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogisticsInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
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





var LogisticsInfoPage = (function () {
    function LogisticsInfoPage(navCtrl, navParams, httpService, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.Info = this.navParams.get("Info");
        this.GetInfo();
    }
    LogisticsInfoPage.prototype.ionViewDidLoad = function () {
    };
    /**获取物流信息 */
    LogisticsInfoPage.prototype.GetInfo = function () {
        var _this = this;
        var userInfo = {
            OrderID: this.Info.ID,
        };
        ////console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1153";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.logInfo = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    return LogisticsInfoPage;
}());
LogisticsInfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-logistics-info',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\logistics-info\logistics-info.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>查看物流</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#f7f7f7">\n  <div class="lg_item_content" *ngIf="logInfo!=null">\n    <div class="lg_item" style="margin-top:1rem;">\n      <div>物流公司</div>\n      <div>{{logInfo.ShipCompany}}</div>\n    </div>\n    <div class="lg_item">\n      <div>物流单号</div>\n      <div>{{logInfo.ShipNo}}</div>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\logistics-info\logistics-info.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_0__providers_NativeService__["a" /* NativeService */]])
], LogisticsInfoPage);

//# sourceMappingURL=logistics-info.js.map

/***/ })

});
//# sourceMappingURL=58.js.map?v=107