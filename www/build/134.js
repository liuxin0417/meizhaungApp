webpackJsonp([134],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResigiterPageModule", function() { return ResigiterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resigiter__ = __webpack_require__(796);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResigiterPageModule = (function () {
    function ResigiterPageModule() {
    }
    return ResigiterPageModule;
}());
ResigiterPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__resigiter__["a" /* ResigiterPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__resigiter__["a" /* ResigiterPage */]),
        ],
    })
], ResigiterPageModule);

//# sourceMappingURL=resigiter.module.js.map

/***/ }),

/***/ 796:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResigiterPage; });
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






var ResigiterPage = (function () {
    function ResigiterPage(navCtrl, navParams, httpService, nativeService, app, viewCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.app = app;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.second = 60;
        this.sendflag = true;
        this.phone = "";
        this.yzm = "";
        this.yzm2 = "";
        this.yqm = "";
        this.showtype = 1;
        this.img3 = "assets/imgs/close.png";
        this.codeflag = false;
        this.showflag = false;
        //console.info("注册页")
        this.yqm = this.navParams.get("tabId");
        this.showflag = this.navParams.get("showflag");
        this.storage.get("userinfo").then(function (val) {
            if (val != null) {
                _this.wxInfo = val.userinform;
                _this.nativeService.log('register', 'constructor>wxInfo>' + JSON.stringify(_this.wxInfo));
                _this.nativeService.log('register', 'constructor>wxInfo a>' + (_this.wxInfo.ID != null && _this.wxInfo.ID != ""));
                if (_this.wxInfo.ID != null && _this.wxInfo.ID != "") {
                    _this.codeflag = true;
                }
                else {
                    _this.codeflag = true;
                }
            }
            else {
                _this.codeflag = true;
            }
        });
        // this.storage.get("codeflag").then(val => {
        //   if (val != null) {
        //     this.codeflag = val;
        //   } else {
        //   }
        // });
        this.storage.get("UID").then(function (val) {
            if (val != null) {
                _this.UID = val;
                _this.yqm = _this.UID;
            }
            else {
            }
        });
    }
    ResigiterPage.prototype.ionViewWillEnter = function () {
    };
    ResigiterPage.prototype.ionViewDidLoad = function () {
    };
    ResigiterPage.prototype.hidepage = function () {
        this.viewCtrl.dismiss();
    };
    ResigiterPage.prototype.getsecond = function () {
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
    ResigiterPage.prototype.GetYZM = function () {
        var _this = this;
        if (this.phonenum == null || this.phonenum == "" || this.phonenum == undefined) {
            this.nativeService.showToast("请输入手机号码");
            return false;
        }
        var Info = {
            Phone: this.phonenum,
            type: 1
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1008";
        parameter.parm = JSON.stringify(Info);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                // this.yzm2 = result.Msg;
                _this.phone = _this.phonenum;
                _this.getsecond();
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    ResigiterPage.prototype.resigiter = function () {
        var _this = this;
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (this.phonenum == null && this.phonenum == "" && this.phonenum == undefined) {
            this.nativeService.showToast("请输入手机号码");
            return false;
        }
        if (this.phonenum != this.phone && !myreg.test(this.phonenum)) {
            this.nativeService.showToast("请输入正确的手机号码");
            return false;
        }
        this.nativeService.log('register', 'resigiter wxInfo>' + this.wxInfo);
        if (this.wxInfo != null) {
            this.nativeService.log('register', 'resigiter wxInfo!=null>' + JSON.stringify(this.wxInfo));
            this.nativeService.log('register', 'resigiter wxInfo!=null>' + this.wxInfo.openId);
        }
        //val.userinform.ID
        var userInfo = {
            LoginName: this.phonenum,
            Pwd: this.password,
            openId: this.wxInfo != null ? this.wxInfo.openId : "",
            nickName: this.wxInfo != null ? this.wxInfo.nickName : "",
            HeadUrl: this.wxInfo != null ? this.wxInfo.HeadUrl : "",
            code: this.yzm,
            UID: this.yqm,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1000";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            // //console.info(result);
            if (result.Code != 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                var address = [];
                var userinform = [];
                _this.storage.get("userinfo").then(function (val) {
                    userinform = result.Data;
                    _this.storage.set("userinfo", { 'userinform': userinform }).then(function (val) {
                        _this.nativeService.log('register', 'resigiter》storage.val("userinfo")》' + JSON.stringify(val));
                        _this.nativeService.showToast("注册成功");
                        _this.app.getRootNav().setRoot('TabsPage');
                        _this.viewCtrl.dismiss();
                    });
                });
            }
        });
    };
    ResigiterPage.prototype.AutoWx = function () {
        var _this = this;
        this.httpService.post("/MobService/AutoWx", { "data": "resigiter=" + this.yqm }).map(function (res) { return res.json(); }).subscribe(function (result) {
            // var info = JSON.parse(result.Data);
            var info = result.Data;
            //console.info(result);
            if (result.Code == "1") {
                // var info = JSON.parse(result.Data);
                _this.storage.set("wxInfo", info);
                _this.wxInfo = info;
            }
            else if (result.Code == "3") {
                // console.log(result.Data);
                window.location.href = result.Data;
            }
            else if (result.Code == "2") {
                _this.storage.set("wxInfo", info);
                _this.wxInfo = info;
                var address = [];
                var userinform = [];
                _this.storage.get("userinfo").then(function (val) {
                    if (val != null) {
                        address = val.address;
                        userinform = result.Data;
                        _this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(function (val) {
                            // this.app.getRootNav().setRoot('LoginPage');
                        });
                    }
                    else {
                    }
                });
            }
        });
    };
    ResigiterPage.prototype.gotoroot = function () {
        this.app.getRootNav().setRoot('TabsPage');
        this.viewCtrl.dismiss();
    };
    return ResigiterPage;
}());
ResigiterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-resigiter',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\resigiter\resigiter.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-buttons left *ngIf="showflag" >\n      <button ion-button icon-only tappable (click)="hidepage()">\n        <img [src]="img3" style="height:12px;width:12px;margin-left:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n    <ion-title mode="ios">注册</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="phone-num">\n    <div class="phone-item">\n      <div>手机号</div>\n      <input type="tel" placeholder="请输入手机号" [(ngModel)]="phonenum">\n    </div>\n  </div>\n  <div class="yan-code">\n    <div class="yan-code-item">\n      <div>验证码</div>\n      <input type="number" placeholder="请输入验证码" name="yzm" id="yzm" [(ngModel)]="yzm">\n      <div *ngIf="sendflag" tappable (click)="GetYZM()">获取验证码</div>\n      <div *ngIf="!sendflag" style="border-color:#999">\n        <input class="inputpart" disabled="disabled" type="text" [(ngModel)]="second">\n      </div>\n    </div>\n  </div>\n  <div class="password">\n    <div class="password-item">\n      <div>密&nbsp;&nbsp;&nbsp;&nbsp;码</div>\n      <input type="password" placeholder="请输入密码" [(ngModel)]="password" name="password" id="password">\n    </div>\n  </div>\n  <div class="password">\n    <div class="password-item">\n      <div>邀请码</div>\n      <input *ngIf="showtype==1" type="text" placeholder="请输入邀请码" [(ngModel)]="yqm" name="yqm">\n      <div *ngIf="showtype==2" style="height:100%;width:80px;line-height: 46px">{{yqm}}</div>\n    </div>\n  </div>\n  <div class="resgiter-btn" *ngIf="codeflag" tappable (click)="resigiter()">注册</div>\n  <div class="resgiter-btn" *ngIf="!codeflag" style="background:#ccc;color:#666;">注册</div>\n  <div class="tixing" *ngIf="!codeflag">每个微信账号只能注册一次，请尝试更换微信账号后注册</div>\n  <div class="resgiter-btn" style="margin-top:30px;" *ngIf="!codeflag" tappable (click)="gotoroot()">去逛逛</div>\n  <!-- <div class="tixing" style="text-align: right;color:#0084ff" *ngIf="!codeflag" tappable (click)="gotoroot()" >去逛逛</div> -->\n  <div></div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\resigiter\resigiter.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], ResigiterPage);

//# sourceMappingURL=resigiter.js.map

/***/ })

});
//# sourceMappingURL=134.js.map?v=107