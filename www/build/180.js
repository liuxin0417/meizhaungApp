webpackJsonp([180],{

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashPageModule", function() { return CashPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cash__ = __webpack_require__(753);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CashPageModule = (function () {
    function CashPageModule() {
    }
    return CashPageModule;
}());
CashPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__cash__["a" /* CashPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__cash__["a" /* CashPage */]),
        ],
    })
], CashPageModule);

//# sourceMappingURL=cash.module.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Utils__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_Model__ = __webpack_require__(143);
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
 * Generated class for the CashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CashPage = (function () {
    function CashPage(navCtrl, navParams, storage, httpService, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.userID = "";
        this.userInfo = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["h" /* UserInfo */]();
        this.Money = 0;
        this.ReMoney = 0;
        this.ActiveMoney = 0;
        this.GiftRate = 0.01;
        this.ReMoneyStr = "0";
    }
    CashPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "e") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userID = val.userinform.ID;
                    _this.getUsergift();
                }
                // this.load2();
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
    };
    CashPage.prototype.getUsergift = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
        };
        var that = this;
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_7__model_Model__["f" /* Parameter */]();
        parameter.jyh = "2001";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                that.ActiveMoney = result.Data.Gift;
                that.GiftRate = result.Data.Rate;
                that.ReMoney = that.ActiveMoney;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    //计算积分剩余
    CashPage.prototype.SetMoney = function (evt) {
        this.nativeService.log('cash', 'SetMoney >' + evt.key);
        if (this.Money < 0) {
            this.Money = null;
            this.ReMoney = this.ActiveMoney;
            return;
        }
        this.ReMoney = (this.ActiveMoney * 100 - (this.Money / this.GiftRate) * 100) / 100;
        if (this.ReMoney < 0) {
            this.Money = null;
            this.ReMoney = this.ActiveMoney;
        }
        this.MoneyFormat();
    };
    CashPage.prototype.checkNum = function (evt) {
        this.nativeService.log('cash', 'checkNum >' + evt.key == '-');
        if (evt.key == '-' || evt.key == '.') {
            return false;
        }
    };
    CashPage.prototype.giftfocus = function () {
        if (this.Money == 0) {
            this.Money = null;
        }
    };
    CashPage.prototype.Recharge = function () {
        var _this = this;
        if (this.Money > 0 && (this.Money / this.GiftRate) < this.ActiveMoney && this.Money >= 100 && (this.Money % 100 == 0)) {
            var userInfo = {
                UserID: this.userID,
                money: this.Money / this.GiftRate
            };
            //console.info(userInfo)
            var parameter = new __WEBPACK_IMPORTED_MODULE_7__model_Model__["f" /* Parameter */]();
            parameter.jyh = "2002";
            parameter.parm = JSON.stringify(userInfo);
            this.nativeService.showLoading("获取中");
            this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
                _this.nativeService.hideLoading();
                var result = JSON.parse(res.result);
                //console.info(result)
                if (result.Code == 1) {
                    _this.ActiveMoney -= _this.Money;
                    _this.Money = 0;
                    _this.nativeService.showToast(result.Msg);
                }
                else {
                    _this.nativeService.showToast(result.Msg);
                }
            });
        }
        else {
            this.nativeService.showToast('最少提现金额100元，提现金额需为100的倍数。');
        }
    };
    //格式化数字
    CashPage.prototype.MoneyFormat = function () {
        if (this.ActiveMoney != undefined && this.ReMoney != undefined) {
            // this.ActiveMoney = Utils.MoneyFormat(this.userInfo.ActiveMoney.toString());
            this.ReMoneyStr = __WEBPACK_IMPORTED_MODULE_5__providers_Utils__["a" /* Utils */].MoneyFormat(this.ReMoney.toString());
        }
        else {
        }
    };
    return CashPage;
}());
CashPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cash',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\cash\cash.html"*/'<!--\n  Generated template for the CashPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">提现</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n  <div class="cash_title">\n    <h6>提现说明</h6>\n    <div>\n      <p>1.账户满100元可提现，提现金额需为100的倍数：如100、200、300等。积分兑换比例为100：1。</p>\n      <p>2.提现3-7个工作日到账，默认提现到注册使用的微信账号。</p>\n      <p>3.提现时收取“提现金额3%”，用作支付税费和银行手续费。</p>\n    </div>\n  </div>\n  <div class="cash_content">\n    <div class="cash_item1">\n      <div>账户余额&nbsp;&nbsp;{{ActiveMoney==\'\'?0:ActiveMoney}}&nbsp;&nbsp;(积分)&nbsp;&nbsp;({{(ActiveMoney/100).toFixed(2)}}元)</div>\n      <!-- <div>&nbsp;&nbsp;{{ActiveMoney}}</div> -->\n    </div>\n    <div class="cash_item2">\n      <div>提现金额(元)&nbsp;&nbsp;:&nbsp;&nbsp;</div>\n      <input type="number" placeholder="请输入提现金额" min=\'1\' (focus)="giftfocus()" (keydown)="checkNum($event)"  (keyup)="SetMoney($event)" [(ngModel)]="Money" name="Money">\n    </div>\n  </div>\n  <div class="cash_btn1">\n    提现后账户余额\n    <span style="color:#F6554B">{{ReMoney}}</span>\n    积分\n  </div>\n  <div *ngIf="Money<=0" class="cash_btn">确定</div>\n  <div *ngIf="Money>0" class="cash_btnr" tappable (click)="Recharge()">\n    确定\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\cash\cash.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */]])
], CashPage);

//# sourceMappingURL=cash.js.map

/***/ })

});
//# sourceMappingURL=180.js.map?v=107