webpackJsonp([25],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetUpPageModule", function() { return SetUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_up__ = __webpack_require__(808);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetUpPageModule = (function () {
    function SetUpPageModule() {
    }
    return SetUpPageModule;
}());
SetUpPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__set_up__["a" /* SetUpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__set_up__["a" /* SetUpPage */]),
        ],
    })
], SetUpPageModule);

//# sourceMappingURL=set-up.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
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
 * Generated class for the SetUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetUpPage = (function () {
    function SetUpPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.img = "assets/imgs/jinru--hui.png";
    }
    SetUpPage.prototype.ionViewDidLoad = function () {
    };
    SetUpPage.prototype.gotoaddress = function () {
        this.navCtrl.push("AddressPage");
    };
    SetUpPage.prototype.gotoreset = function () {
        this.navCtrl.push("ResetPasswordPage");
    };
    SetUpPage.prototype.setup = function () {
        var _this = this;
        this.storage.get("userinfo").then(function (val) {
            if (val != null) {
                var userinform = { "ID": "" };
                _this.storage.set("userinfo", { 'userinform': userinform }).then(function (val) {
                    _this.navCtrl.push("TabsPage", {
                        showflag: true,
                    });
                });
            }
            else {
            }
        });
    };
    return SetUpPage;
}());
SetUpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-set-up',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\set-up\set-up.html"*/'<!--\n  Generated template for the SetUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">设置</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n  <div class="setupcontent">\n    <div class="type1">\n      <div>账户信息</div>\n    </div>\n    <div class="type2" tappable (click)="gotoreset()">\n      <div style=" border-bottom:1px solid #e5e5e5;">\n        <img [src]="img" alt="">\n      </div>\n      <div style=" border-bottom:1px solid #e5e5e5;"></div>\n      <div style=" border-bottom:1px solid #e5e5e5;">重置密码</div>\n    </div>\n    <div class="type2" tappable (click)="gotoaddress()">\n      <div>\n        <img [src]="img" alt="">\n      </div>\n      <div></div>\n      <div>收货地址</div>\n    </div>\n    \n    <div class="type1">\n      <div>关于</div>\n    </div>\n    <div class="type2">\n      <div style=" border-bottom:1px solid #e5e5e5;">\n        <img [src]="img" alt="">\n      </div>\n      <div style=" border-bottom:1px solid #e5e5e5;"></div>\n      <div style=" border-bottom:1px solid #e5e5e5;">关于商城</div>\n    </div>\n    <!-- <div class="type2">\n      <div>\n        <img [src]="img" alt="">\n      </div>\n      <div></div>\n      <div>清除缓存</div>\n    </div> -->\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div class="signout" tappable (click)="setup()">退出账号</div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\set-up\set-up.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], SetUpPage);

//# sourceMappingURL=set-up.js.map

/***/ })

});
//# sourceMappingURL=25.js.map?v=107