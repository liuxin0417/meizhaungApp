webpackJsonp([70],{

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(769);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPasswordPageModule = (function () {
    function ForgotPasswordPageModule() {
    }
    return ForgotPasswordPageModule;
}());
ForgotPasswordPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
        ],
    })
], ForgotPasswordPageModule);

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
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






var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, navParams, httpService, nativeService, app, storage, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.app = app;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.second = 60;
        this.sendflag = true;
        this.img3 = "assets/imgs/close.png";
        this.phone = "";
        this.yzm = "";
        this.showflag = false;
        this.yzm2 = "";
        this.showflag = this.navParams.get("showflag");
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
    };
    ForgotPasswordPage.prototype.getsecond = function () {
        var that = this;
        this.sendflag = false;
        var interval = setInterval(function () {
            if (that.second > 0) {
                that.second--;
            }
            else {
                that.second = 60;
                that.sendflag = true;
                clearInterval(interval);
            }
        }, 1000);
    };
    /**获取验证码 */
    ForgotPasswordPage.prototype.GetYZM = function () {
        var _this = this;
        if (this.phonenum == null || this.phonenum == "" || this.phonenum == undefined) {
            this.nativeService.showToast("请输入手机号码");
            return false;
        }
        this.getsecond();
        var Info = {
            Phone: this.phonenum,
            type: 2
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1008";
        parameter.parm = JSON.stringify(Info);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                _this.yzm2 = result.Msg;
                _this.phone = _this.phonenum;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    ForgotPasswordPage.prototype.resigiter = function () {
        var _this = this;
        if (this.phonenum == null || this.phonenum == "" || this.phonenum == undefined) {
            this.nativeService.showToast("请输入手机号码");
            return false;
        }
        if (this.phonenum != this.phone) {
            this.nativeService.showToast("请输入正确的手机号码");
            return false;
        }
        if (this.yzm == "" || this.yzm == null || this.yzm == undefined) {
            this.nativeService.showToast("请输入验证码");
            return false;
        }
        // if (this.yzm != this.yzm2) {
        //   this.nativeService.showToast("验证码输入错误");
        //   return false;
        // }
        if (this.password == "" || this.password == null || this.password == undefined) {
            this.nativeService.showToast("请输入重置的新密码");
            return false;
        }
        var userInfo = {
            Phone: this.phonenum,
            Pwd: this.password,
            code: this.yzm,
        };
        // //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1009";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code != 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                var address = [];
                var userinform = [];
                _this.storage.get("userinfo").then(function (val) {
                    if (val != null) {
                        ////console.info(val)
                        //address = val.address;
                        userinform = result.Data;
                        // { 'address': address, 'userinform': userinform }
                        _this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(function (val) {
                            _this.nativeService.showToast("重置密码成功");
                            _this.app.getRootNav().setRoot('TabsPage');
                            _this.viewCtrl.dismiss();
                        });
                    }
                    else {
                    }
                });
            }
        });
    };
    ForgotPasswordPage.prototype.hidepage = function () {
        this.viewCtrl.dismiss();
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-forgot-password',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\forgot-password\forgot-password.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-buttons left *ngIf="showflag">\n      <button ion-button icon-only tappable (click)="hidepage()">\n        <img [src]="img3" style="height:12px;width:12px;margin-left:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n    <ion-title mode="ios">忘记密码</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="phone-num">\n    <div class="phone-item">\n      <div>手机号</div>\n      <input type="tel" placeholder="请输入手机号" [(ngModel)]="phonenum" name="phonenum" id="phonenum">\n    </div>\n  </div>\n  <div class="yan-code">\n    <div class="yan-code-item">\n      <div>验证码</div>\n      <input type="number" placeholder="请输入验证码" name="yzm" id="yzm" [(ngModel)]="yzm">\n      <div *ngIf="sendflag" tappable (click)="GetYZM()">获取验证码</div>\n      <div *ngIf="!sendflag" style="border-color:#999">\n        <input class="inputpart" disabled="disabled" type="text" [(ngModel)]="second">\n      </div>\n    </div>\n  </div>\n  <div class="password">\n    <div class="password-item">\n      <div>密&nbsp;&nbsp;&nbsp;&nbsp;码</div>\n      <input type="password" placeholder="请输入密码" [(ngModel)]="password" name="password" id="password">\n    </div>\n  </div>\n  <div class="resgiter-btn" tappable (click)="resigiter()">重置密码</div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\forgot-password\forgot-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
], ForgotPasswordPage);

//# sourceMappingURL=forgot-password.js.map

/***/ })

});
//# sourceMappingURL=70.js.map?v=107