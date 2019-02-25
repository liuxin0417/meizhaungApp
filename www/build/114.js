webpackJsonp([114],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePageModule", function() { return ThemePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theme__ = __webpack_require__(816);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThemePageModule = (function () {
    function ThemePageModule() {
    }
    return ThemePageModule;
}());
ThemePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__theme__["a" /* ThemePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__theme__["a" /* ThemePage */]),
        ],
    })
], ThemePageModule);

//# sourceMappingURL=theme.module.js.map

/***/ }),

/***/ 816:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Model__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { NativeService } from '../../providers/NativeService';

var ThemePage = (function () {
    function ThemePage(navCtrl, navParams, viewCtrl, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.httpService = httpService;
        this.entercode = "1081";
        this.publishType = this.navParams.get("type");
    }
    ThemePage.prototype.ionViewDidLoad = function () {
        if (this.publishType == 1) {
            this.entercode = "1081";
        }
        else if (this.publishType == 2) {
            this.entercode = "1075";
        }
        else if (this.publishType == 3) {
            this.entercode = "1078";
        }
        // //console.info(this.entercode);
        this.Load();
    };
    ThemePage.prototype.Load = function () {
        var _this = this;
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = this.entercode;
        parameter.parm = "";
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (val) {
            var result = JSON.parse(val.result);
            // console.log(result);
            if (result.Code == 1) {
                _this.TypeList = result.Data;
            }
        });
    };
    ThemePage.prototype.close = function (item) {
        this.viewCtrl.dismiss({
            TypeID: item.typebh
        });
    };
    return ThemePage;
}());
ThemePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-theme',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\theme\theme.html"*/'<ion-content>\n  <div class="theme-content">\n    <div tappable *ngFor="let item of TypeList" (click)="close(item)">{{item.Name}}</div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\theme\theme.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */]])
], ThemePage);

//# sourceMappingURL=theme.js.map

/***/ })

});
//# sourceMappingURL=114.js.map?v=107