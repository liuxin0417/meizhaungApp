webpackJsonp([98,190],{

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupPageModule", function() { return PopupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popup__ = __webpack_require__(741);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PopupPageModule = (function () {
    function PopupPageModule() {
    }
    return PopupPageModule;
}());
PopupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__popup__["a" /* PopupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__popup__["a" /* PopupPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__popup__["a" /* PopupPage */]
        ],
    })
], PopupPageModule);

//# sourceMappingURL=popup.module.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementPageModule", function() { return SettlementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settlement__ = __webpack_require__(835);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componnets_popup_popup_module__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettlementPageModule = (function () {
    function SettlementPageModule() {
    }
    return SettlementPageModule;
}());
SettlementPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settlement__["a" /* SettlementPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__settlement__["a" /* SettlementPage */]),
            __WEBPACK_IMPORTED_MODULE_3__componnets_popup_popup_module__["PopupPageModule"],
        ],
    })
], SettlementPageModule);

//# sourceMappingURL=settlement.module.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupPage; });
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





/**
 * Generated class for the PopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PopupPage = (function () {
    function PopupPage(navCtrl, navParams, httpService, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.flagChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.flagsecondChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.addresListChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.defaultAddressChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.ordermsgChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.listChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.FranchiseeIDChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.img = "assets/imgs/close.png";
    }
    PopupPage.prototype.ionViewDidLoad = function () {
    };
    PopupPage.prototype.getaddress = function (index) {
        var _this = this;
        var that = this;
        this.flagsecond = false;
        this.flagsecondChange.emit(this.flagsecond);
        this.defaultAddress = this.addresList[index];
        ////console.info(this.defaultAddress)
        this.defaultAddressChange.emit(this.defaultAddress);
        this.getNewMessage(this.list, this.defaultAddress.ID);
        setTimeout(function () {
            that.flag = false;
            that.flagChange.emit(_this.flag);
        }, 150);
    };
    PopupPage.prototype.getaddress2 = function () {
        var _this = this;
        var that = this;
        this.flagsecond = false;
        this.flagsecondChange.emit(this.flagsecond);
        setTimeout(function () {
            that.flag = false;
            that.flagChange.emit(_this.flag);
        }, 150);
    };
    PopupPage.prototype.getNewMessage = function (ProductID, addressID) {
        var _this = this;
        var userInfo = {
            ProductID: ProductID,
            FranchiseeID: this.FranchiseeID,
            AddressID: addressID,
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1036";
        parameter.parm = JSON.stringify(userInfo);
        //console.log(parameter);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                // this.ordermsg=result.Data;
                console.log(_this.ordermsg);
                // //console.info(this.ordermsg);
                // this.ordermsgChange.emit(this.ordermsg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    return PopupPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PopupPage.prototype, "flag", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "flagChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PopupPage.prototype, "flagsecond", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "flagsecondChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "addresList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "addresListChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "defaultAddress", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "defaultAddressChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "ordermsg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "ordermsgChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "list", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "listChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "FranchiseeID", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PopupPage.prototype, "FranchiseeIDChange", void 0);
PopupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-popup',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\componnets\popup\popup.html"*/'<!--\n  Generated template for the PopupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="cover" *ngIf="flag" [ngClass]="{true:\'goshow\',false:\'gohide\'}[flagsecond]">\n  <div class="clickbtn" tappable (click)="getaddress2()"></div>\n  <div class="alertpart" [ngClass]="{true:\'goup\',false:\'godown\'}[flagsecond]">\n    <div class="title">\n      <div>收货地址</div>\n      <!-- <div><img [src]="img" alt="" ></div> -->\n    </div>\n    <div class="scroll">\n      <div class="addressitem" tappable (click)="getaddress(i)" *ngFor="let item of addresList;let i=index" >\n        <div>{{item.username}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.tel}}</div>\n        <div>{{item.address}}</div>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\componnets\popup\popup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */]])
], PopupPage);

//# sourceMappingURL=popup.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WXScene */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WechatPlugin; });
var WXScene = (function () {
    function WXScene() {
    }
    return WXScene;
}());

WXScene.WXSceneSession = "WXSceneSession";
WXScene.WXSceneTimeline = "WXSceneTimeline";
WXScene.WXSceneFavorite = "WXSceneFavorite";
var WechatPlugin = (function () {
    function WechatPlugin() {
    }
    WechatPlugin.isInstalled = function () {
        return new Promise(function (resolve, reject) {
            Wechat.isInstalled(function (result) {
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    WechatPlugin.sendPaymentRequest = function (params) {
        return new Promise(function (resolve, reject) {
            Wechat.sendPaymentRequest(params, function (result) {
                resolve(result);
            }, function (error) {
                reject(error);
            });
        });
    };
    WechatPlugin.ShareText = function (text) {
        return new Promise(function (resolve, reject) {
            Wechat.share({
                text: '逛贝微信分享测试',
                scene: WXScene.WXSceneSession
            }, function (result) {
                alert("分享成功");
            }, function (error) {
                alert("分享失败");
            });
        });
    };
    return WechatPlugin;
}());

//# sourceMappingURL=WechatPlugin.js.map

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettlementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_WechatPlugin__ = __webpack_require__(742);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettlementPage = (function () {
    function SettlementPage(navCtrl, navParams, httpService, nativeService, storage, app, modalCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.img = "assets/imgs/jinru--hui.png";
        this.img2 = "assets/imgs/eixin.png";
        this.img3 = "assets/imgs/chone.png";
        this.img4 = "assets/imgs/unchone.png";
        this.img5 = "assets/imgs/zhifun.png";
        this.img6 = "assets/imgs/yue.png";
        this.img7 = "assets/imgs/chose.png";
        this.img8 = "assets/imgs/dizhi.png";
        this.img9 = "assets/imgs/gift.png";
        this.img13 = "assets/imgs/gouwuche.png";
        this.img14 = "assets/imgs/search.png";
        this.img15 = "assets/imgs/coupon.png";
        this.fanhui = "assets/imgs/fanhui2.png";
        this.sousuo = "assets/imgs/shousuo.png";
        this.gouwu = "assets/imgs/gouwuche.png";
        this.complte = "assets/imgs/complte.png";
        this.desimg = "assets/imgs/jian.png";
        this.addimg = "assets/imgs/jia.png";
        this.switchNum2 = 0;
        this.switchNum3 = 0;
        this.paytype = 2;
        this.goodstype = false;
        this.goodsshow = false;
        this.flag = false;
        this.flagsecond = false;
        this.addresList = [];
        this.goodsprice = 0;
        this.goodslist = [];
        this.addressflag = true;
        this.showflag = false;
        this.showflag1 = false;
        this.yuenum = false;
        this.giftnum = false;
        this.giftnum3 = false;
        this.stepnum = 1;
        /* 测试列表 */
        this.textlist = [1, 2, 3, 1, 2, 2, 3];
        /* 配送方式 */
        this.switchNum = 0;
        this.usecouponNum = 0;
        this.shoppont = [];
        this.selfpont = [];
        this.isweb = false;
        this.paySuccess = false;
        this.mianyounum = false;
        this.useGift = 0;
        this.surplus = 0;
        this.useGiftMoney = 0;
        this.surplusMoney = 0;
        this.couponMonsy = 0;
        this.goodslist2 = [];
        this.isXcx = false;
        this.Money = 0;
        this.Gift = 0;
        // private Method = 0;
        this.couponList = [];
        this.FightID = "";
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userInfo = val.userinform;
                    _this.FranchiseeID = "";
                    _this.LoadUser();
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
        this.storage.get("position").then(function (val) {
            //console.info(val);
            if (val != "" && val != null) {
                _this.position = val;
            }
            else {
                // this.navCtrl.push("LoginPage",{showflag:true});
            }
        });
        this.isweb = !this.nativeService.isMobile();
    }
    ;
    SettlementPage.prototype.ionViewWillEnter = function () {
        this.loginaddress();
        // if (this.addressflag == false) {
        //   this.loginaddress();
        //   this.addressflag = true;
        // }
    };
    SettlementPage.prototype.ionViewDidLoad = function () {
        this.ordermsg = this.navParams.get("ordermsg");
        this.shipMemo = '积分兑换比例为' + (1 / this.ordermsg.MoneyToGift).toFixed(0) + ':1';
        if (this.ordermsg.GiftRate == 1) {
            this.shipMemo += '。可以全额使用积分。';
        }
        else {
            this.shipMemo += ',使用金额不得超过订单总额的' + (this.ordermsg.GiftRate * 100) + '%';
        }
        this.nativeService.log('settlement ', 'ionViewDidLoad ordermsg>' + JSON.stringify(this.ordermsg));
        this.userID = this.navParams.get("userID");
        this.list = this.navParams.get("list");
        this.single = this.navParams.get("single");
        this.AttributesXml = this.navParams.get("AttributesXml");
        this.ProductID = this.navParams.get("ProductID");
        this.getlist();
        this.getlist2();
        this.Calcilation();
        this.CalcilationMoney();
        ////console.info(this.ordermsg);
        this.loginaddress();
        this.GetUseCoupon();
        this.getdate();
        this.getlocationpont();
    };
    SettlementPage.prototype.getlist = function () {
        for (var a = 0; a < this.ordermsg.lstCart.length; a++) {
            for (var b = 0; b < this.ordermsg.lstCart[a].List.length; b++) {
                if (this.ordermsg.lstCart[a].List[b].isCheck == 1) {
                    var list = { "ID": this.ordermsg.lstCart[a].List[b].ID };
                    this.goodslist.push(list);
                }
                else {
                }
            }
        }
        //console.info(this.goodslist)
    };
    SettlementPage.prototype.getlist2 = function () {
        for (var a = 0; a < this.ordermsg.lstCart.length; a++) {
            for (var b = 0; b < this.ordermsg.lstCart[a].List.length; b++) {
                if (this.ordermsg.lstCart[a].List[b].isCheck == 1) {
                    var list = { "ID": this.ordermsg.lstCart[a].List[b].ProductId };
                    this.goodslist2.push(list);
                }
                else {
                }
            }
        }
        //console.info(this.goodslist2)
    };
    SettlementPage.prototype.loginaddress = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1011";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.defaultAddress = result.Data[0];
                _this.addresList = result.Data;
                // if (result.Data2 != null) {
                //   this.addresList[0] = result.Data2;
                //   this.defaultAddress = result.Data2;
                //   for (var n = 0; n < result.Data.length; n++) {
                //     this.addresList.push(result.Data[n])
                //   }
                // } else {
                // }
                //console.info(this.addresList.length)
                if (_this.addresList.length == 0) {
                    _this.addressflag = false;
                }
                else {
                    _this.addressflag = true;
                    _this.defaultAddress = result.Data[0];
                    _this.addresList = result.Data;
                    // for (var b = 0; b < result.Data.length; b++) {
                    //   this.addresList.push(result.Data[b]);
                    // }
                }
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    SettlementPage.prototype.gotoaddress = function (item, type) {
        var userinfo = [];
        if (type == 2) {
            userinfo = [{ 'type': 2 }, { 'value': item }, { 'userID': this.userID }];
        }
        else if (type == 3) {
            userinfo = [{ 'type': 3 }, { 'value': "" }, { 'userID': this.userID }];
        }
        ;
        this.navCtrl.push("SetAddressPage", {
            userinfo: userinfo,
        });
    };
    SettlementPage.prototype.alertAddress = function () {
        ////console.info(this.addresList)
        this.flag = true;
        this.flagsecond = true;
    };
    SettlementPage.prototype.slice = function (string) {
        if (string != "" && string != null) {
            return string.slice(0, 18) + "...";
        }
    };
    //支付
    SettlementPage.prototype.payfont = function () {
        var that = this;
        this.isXcx = false;
        // wx.miniProgram.getEnv(function (res) {
        //   that.isXcx=res.miniprogram // true
        //   that.pay();
        // })
        that.pay();
    };
    SettlementPage.prototype.pay = function () {
        var _this = this;
        var that = this;
        if (this.defaultAddress == undefined) {
            this.nativeService.showToast("请先创建地址");
            return;
        }
        var userInfo = {};
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        if (this.single == true) {
            var _pNum = this.ordermsg.lstCart[0].List[0].Quantity;
            userInfo = {
                ProductID: this.ProductID,
                AttributesXml: this.AttributesXml,
                UserID: this.userID,
                Num: _pNum,
                Method: this.switchNum,
                ShipAddressId: this.defaultAddress.ID,
                PayType: this.paytype,
                isweb: this.isweb ? 1 : 0,
                FightID: this.FightID,
                Gift: this.useGift,
                CouponMoney: this.couponMonsy,
                isXCX: this.isXcx ? 1 : 0,
                shopID: this.switchNum == 0 ? "" : this.chosepont.ID
            };
            parameter.jyh = "1140";
        }
        else {
            if (this.goodslist.length == 0) {
                this.nativeService.showToast("无效商品");
                return;
            }
            userInfo = {
                Product: this.goodslist,
                UserID: this.userID,
                Method: this.switchNum,
                Gift: this.useGift,
                PayType: this.paytype,
                ShipAddressId: this.defaultAddress.ID,
                FightID: this.FightID,
                isweb: this.isweb ? 1 : 0,
                CouponMoney: this.couponMonsy,
                isXCX: this.isXcx ? 1 : 0,
                shopID: this.switchNum == 0 ? "" : this.chosepont.ID
            };
            parameter.jyh = "1038";
        }
        //console.info(userInfo);
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("支付中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                //console.info("进入code==1" + result.Code)
                if (_this.paytype == 2) {
                    /**微信支付 */
                    var data = result.Data;
                    if (_this.isweb) {
                        /**微信公众号支付 */
                        // wx.error(function (res) {
                        //   alert(res.err_msg);
                        // });
                        if (_this.isXcx) {
                            var params = '?timestamp=' + data.timestamp + '&nonceStr=' + data.noncestr
                                + '&' + data.package + '&signType=' + data.signType
                                + '&paySign=' + data.sign + '&orderId=0' + '&pType=0';
                            //定义path 与小程序的支付页面的路径相对应
                            var path = '/pages/wxpay/wxpay' + params;
                            var info = {
                                page: 'detail',
                                goodsID: "12345",
                            };
                            var json = JSON.stringify(info);
                            //通过JSSDK的api使小程序跳转到指定的小程序页面
                            wx.miniProgram.navigateTo({ url: path });
                            // wx.miniProgram.postMessage({ data: json });
                            return;
                        }
                        else {
                        }
                        _this.PayMoney = data.PayMoney;
                        wx.chooseWXPay({
                            timestamp: data.timestamp,
                            nonceStr: data.noncestr,
                            package: data.package,
                            signType: data.signType,
                            paySign: data.sign,
                            success: function (res) {
                                /* that.navCtrl.setRoot("PaySuccessPage", {
                                  Info: that.ordermsg.OrderToatal
                                }); */
                                // alert(res);
                                this.goodslist = [];
                                that.paySuccess = true;
                                that.nativeService.hideLoading();
                                //that.app.getRootNav().setRoot('PaySuccessPage');
                                // if(res.chooseWXPay=="ok"){
                                //   alert("支付成功");
                                // }
                                // 支付成功后的回调函数
                            },
                            cancel: function () {
                                that.nativeService.hideLoading();
                            },
                            error: function (res) {
                                // alert(res)
                                that.nativeService.hideLoading();
                            }
                        });
                    }
                    else {
                        /**App支付 */
                        __WEBPACK_IMPORTED_MODULE_6__providers_WechatPlugin__["a" /* WechatPlugin */].sendPaymentRequest(data).then(function (result) {
                            _this.nativeService.showToast("支付订单成功");
                            _this.paySuccess = true;
                            that.nativeService.hideLoading();
                        }, function (error) {
                            _this.nativeService.showToast(error);
                        });
                    }
                }
                else if (_this.paytype == 1) {
                    /**支付包支付 */
                    AliPay.pay(result.Msg, function (success) {
                        var msg = JSON.parse(success.result);
                        if (msg.alipay_trade_app_pay_response.msg == "Success") {
                            that.nativeService.hideLoading();
                            _this.nativeService.showToast("支付订单成功");
                            //this.navCtrl.pop();
                            /* that.navCtrl.setRoot("PaySuccessPage", {
                              Info: that.ordermsg.OrderToatal
                            }); */
                            _this.paySuccess = true;
                            //that.app.getRootNav().setRoot('PaySuccessPage');
                        }
                    }, function (error) {
                    });
                }
            }
            else if (result.Code == "2") {
                /* that.navCtrl.setRoot("PaySuccessPage", {
                  Info: that.ordermsg.OrderToatal
                }); */
                that.nativeService.hideLoading();
                _this.nativeService.log("pay result.Code==2", "");
                _this.PayMoney = 0;
                _this.nativeService.showToast("支付订单成功");
                _this.paySuccess = true;
            }
            else {
                that.nativeService.hideLoading();
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    SettlementPage.prototype.hide = function () {
        var that = this;
        this.showflag = false;
        setTimeout(function () {
            that.showflag1 = false;
        }, 150);
    };
    SettlementPage.prototype.show = function () {
        //var that = this;
        this.showflag1 = true;
        this.showflag = true;
    };
    /* 弹出层 */
    SettlementPage.prototype.alertPart = function (type) {
        this.show();
        this.showtype = type;
    };
    SettlementPage.prototype.alertcoupon = function () {
        var _this = this;
        var that = this;
        //console.info(this.couponList)
        var modal = this.modalCtrl.create('CouponToUsePage', {
            CouponList: that.couponList
        });
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.coupondata = data;
                _this.FightID = _this.coupondata.ID;
                for (var a = 0; a < _this.couponList.length; a++) {
                    _this.couponList[a].isL = false;
                }
                _this.couponList[_this.coupondata.index].isL = true;
                _this.CouponMoney();
            }
            else {
                for (var c = 0; c < _this.couponList.length; c++) {
                    _this.couponList[c].isL = false;
                }
            }
        });
        modal.present();
    };
    //选择网点
    SettlementPage.prototype.chose = function (number, item) {
        this.nativeService.log("settlement", 'chose  i:' + number + "    switchNum2" + this.switchNum2);
        this.switchNum2 = number;
        this.stepnum = 1;
        this.chosepont = item;
    };
    SettlementPage.prototype.choseSelf = function (i, item) {
        this.switchNum3 = i;
        this.stepnum = 1;
        this.choseself = item;
        //console.info(item)
    };
    SettlementPage.prototype.confirm = function () {
        this.hide();
        this.CalcilationMoney();
        // this.yuenum = false;
        // this.Money = 0;
        // this.giftnum = false;
        // this.Gift = 0;
        // if (this.switchNum == 1) {
        //   this.mianyounum = false;
        // }
        // this.Load();
    };
    /**获取用户 */
    SettlementPage.prototype.LoadUser = function () {
        var _this = this;
        var Info = {
            UserID: this.userInfo.ID
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parm.jyh = "1108";
        parm.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.user = result.Data;
                //console.log(this.user);
            }
        });
    };
    /**获取可用的优惠券 */
    SettlementPage.prototype.GetUseCoupon = function () {
        var _this = this;
        var Info = {
            UserID: this.userID,
            Product: this.goodslist2
        };
        //console.info(Info)
        var parm = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parm.jyh = "1124";
        parm.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == "1") {
                _this.couponList = result.Data;
                _this.usecouponNum = result.Data.length;
                _this.myCoupon = result.Data2;
            }
        });
    };
    //验证优惠券
    SettlementPage.prototype.CouponMoney = function () {
        var _this = this;
        var Info = {};
        if (this.single) {
            var _pNum = this.ordermsg.lstCart[0].List[0].Quantity;
            Info = {
                CouponID: this.FightID,
                UserID: this.userID,
                Type: 0,
                Product: [{
                        "ID": this.ProductID,
                        "AttributesXml": this.AttributesXml,
                        "Num": _pNum,
                    }],
            };
        }
        else {
            Info = {
                CouponID: this.FightID,
                UserID: this.userID,
                Type: 1,
                Product: this.goodslist,
            };
        }
        //console.info(Info)
        var parm = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parm.jyh = "1143";
        parm.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == "1") {
                _this.couponMonsy = result.Data;
                _this.useCouponAfter();
            }
            else {
                _this.couponMonsy = 0;
                _this.coupondata = "";
                _this.FightID = "";
                _this.CalcilationMoney();
                // this.useCouponAfter();
                for (var a = 0; a < _this.couponList.length; a++) {
                    _this.couponList[a].isL = false;
                }
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    /**使用余额 */
    SettlementPage.prototype.UseYue = function () {
        if (this.user.Money < 0) {
            return false;
        }
        this.yuenum = !this.yuenum;
        if (this.yuenum) {
            if (this.user.Money >= this.ordermsg.OrderToatal) {
                this.Money = this.ordermsg.OrderToatal;
            }
            else {
                this.Money = this.user.Money;
            }
            //console.log(this.Money);
        }
        else {
            this.Money = 0;
        }
        this.Load();
    };
    /**使用积分 */
    SettlementPage.prototype.UseGift2 = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: "请输入您想要使用的积分数量",
            message: "积分兑换比例为1:" + this.ordermsg.MoneyToGift + ",使用金额不得超过订单总额的" + (this.ordermsg.GiftRate * 100) + "%",
            inputs: [
                {
                    name: 'gift',
                    placeholder: '积分',
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: '确认',
                    handler: function (data) {
                        // console.log(data);
                        if (data.gift * _this.ordermsg.MoneyToGift <= _this.ordermsg.TotalMoney * _this.ordermsg.GiftRate) {
                            _this.useGift = data.gift;
                            _this.useGiftMoney = _this.useGift * _this.ordermsg.MoneyToGift;
                            _this.Calcilation();
                            _this.CalcilationMoney();
                        }
                        else if (data.gift > _this.ordermsg.Gift) {
                            _this.nativeService.showToast("没有这么多积分");
                            _this.UseGift2();
                        }
                        else {
                            _this.nativeService.showToast("使用积分超额");
                            _this.UseGift2();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    SettlementPage.prototype.UseGift = function () {
        if (this.user.Gift < 10) {
            return false;
        }
        if (this.ordermsg.OrderToatal < 1) {
            return false;
        }
        this.giftnum = !this.giftnum;
        var maxgift = 300;
        if (this.giftnum) {
            if (this.ordermsg.OrderToatal < 1) {
                return false;
            }
            if (this.user.Gift > maxgift) {
                if (this.ordermsg.OrderToatal <= maxgift / 10) {
                    this.Gift = parseInt(this.ordermsg.OrderToatal * 10 + "");
                }
                else {
                    this.Gift = maxgift;
                }
            }
            else {
                if (this.user.Gift > parseInt(this.ordermsg.OrderToatal * 10 + "")) {
                    this.Gift = parseInt(this.ordermsg.OrderToatal * 10 + "");
                }
                else {
                    this.Gift = this.user.Gift;
                }
            }
        }
        else {
            this.Gift = 0;
        }
        this.Load();
    };
    /**获取价格反馈 */
    SettlementPage.prototype.Load = function () {
        var _this = this;
        if (this.defaultAddress == null) {
            this.nativeService.showToast("请先选定用户地址");
            return false;
        }
        var userInfo = {
            ProductID: this.list,
            FranchiseeID: this.FranchiseeID,
            AddressID: this.defaultAddress.ID,
            Money: this.Money,
            Gift: this.Gift,
            Method: this.switchNum,
            FightID: this.FightID,
            isMY: this.mianyounum ? 1 : 0
        };
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1036";
        parameter.parm = JSON.stringify(userInfo);
        //console.log(parameter);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result);
            if (result.Code == 1) {
                _this.ordermsg = result.Data;
                // console.log(this.ordermsg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    //获取自提点
    SettlementPage.prototype.getlocationpont = function () {
        var _this = this;
        var Info = {};
        // //console.info(Info);
        var parm = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parm.jyh = "1123";
        parm.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == "1") {
                if (result.Data.length > 0) {
                    for (var i = 0; i < result.Data.length; i++) {
                        if (result.Data[i].isShopAdd == 1) {
                            _this.selfpont.push(result.Data[i]);
                        }
                        else {
                            _this.shoppont.push(result.Data[i]);
                        }
                    }
                    _this.choseself = _this.selfpont[0];
                    _this.chosepont = _this.shoppont[0];
                }
            }
            else {
            }
        });
    };
    SettlementPage.prototype.getgoodsAddress = function () {
        if (this.shoppont != undefined && this.shoppont != null) {
            this.switchNum = 1;
        }
        else {
            this.nativeService.showToast("暂无自提点");
        }
    };
    SettlementPage.prototype.getZtAddress = function () {
        if (this.selfpont != undefined && this.selfpont != null) {
            this.switchNum = 2;
        }
        else {
            this.nativeService.showToast("暂无自提点");
        }
    };
    //获取当前时间
    SettlementPage.prototype.getdate = function () {
        var myDate = new Date();
        var dateList = [];
        var arr = {};
        myDate.getDate();
        myDate.getDay();
        arr = { "date": myDate.getDate(), "day": myDate.getDay(), "fulldate": myDate };
        this.chosetime = arr;
        dateList.push(arr);
        for (var a = 0; a < 5; a++) {
            myDate.setDate(myDate.getDate() + 1);
            myDate.getDate();
            myDate.getDay();
            arr = { "date": myDate.getDate(), "day": myDate.getDay(), "fulldate": myDate };
            dateList.push(arr);
        }
        ////console.info(dateList);
        this.dateList = dateList;
    };
    //回到首页
    SettlementPage.prototype.gotohome = function () {
        this.app.getRootNav().setRoot('TabsPage');
    };
    //查看订单
    SettlementPage.prototype.gotoOrderList = function () {
        this.navCtrl.push("OrderListPage", {
            type: 0,
        });
    };
    SettlementPage.prototype.UseMY = function () {
        this.mianyounum = !this.mianyounum;
        this.Load();
    };
    SettlementPage.prototype.gopop = function () {
        this.navCtrl.pop();
    };
    SettlementPage.prototype.Calcilation = function () {
        this.surplus = this.ordermsg.Gift - this.useGift;
        this.useGiftMoney = this.useGift * this.ordermsg.MoneyToGift;
    };
    SettlementPage.prototype.CalcilationMoney = function () {
        this.surplusMoney = this.ordermsg.TotalMoney - this.useGiftMoney - this.couponMonsy;
        if (this.switchNum == 0) {
            if (this.ordermsg.TotalMoney >= this.ordermsg.FullMoney) {
            }
            else {
                this.surplusMoney += this.ordermsg.ShipMoney;
            }
        }
        else if (this.switchNum == 1) {
            if (this.ordermsg.TotalMoney >= this.ordermsg.SiteShipMoney) {
            }
            else {
                this.surplusMoney += this.ordermsg.ShipMoney;
            }
        }
        else {
        }
    };
    //是否使用积分
    SettlementPage.prototype.UseGift3 = function () {
        this.giftnum3 = !this.giftnum3;
        if (this.giftnum3 == true) {
        }
        else {
            this.useGift = 0;
        }
        this.Calcilation();
        //this.CalcilationMoney();
    };
    SettlementPage.prototype.giftfocus = function () {
        if (this.useGift == 0) {
            this.useGift = null;
        }
    };
    SettlementPage.prototype.checkNum = function (evt) {
        if (evt.key == '-') {
            return false;
        }
    };
    SettlementPage.prototype.checkGift = function () {
        this.nativeService.log('settlement', 'checkGift  this.useGift>' + this.useGift);
        if (this.useGift <= 0) {
            this.useGift = null;
            return;
        }
        //MoneyToGift 比例0.01
        //GiftRate 积分使用比例
        this.nativeService.log('settlement', 'checkGift  this.ordermsg.MoneyToGift>' + this.ordermsg.MoneyToGift);
        this.nativeService.log('settlement', 'checkGift  this.ordermsg.GiftRate>' + this.ordermsg.GiftRate);
        this.nativeService.log('settlement', 'checkGift  this.ordermsg.Gift>' + this.ordermsg.Gift);
        this.nativeService.log('settlement', 'checkGift  this.ordermsg.TotalMoney>' + this.ordermsg.TotalMoney);
        this.nativeService.log('settlement', 'checkGift  this.surplusMoney>' + this.surplusMoney);
        if (this.useGift * this.ordermsg.MoneyToGift <= this.ordermsg.TotalMoney * this.ordermsg.GiftRate && this.useGift <= this.ordermsg.Gift) {
            this.useGiftMoney = this.useGift * this.ordermsg.MoneyToGift;
        }
        else if (this.useGift > this.ordermsg.Gift) {
            this.nativeService.showToast("没有这么多积分");
            this.useGift = this.ordermsg.Gift;
            // this.UseGift2();
        }
        else {
            this.nativeService.showToast("使用积分超额");
            this.useGift = Number(((this.ordermsg.TotalMoney * this.ordermsg.GiftRate) / this.ordermsg.MoneyToGift).toFixed(0));
            //this.useGift = (this.ordermsg.TotalMoney* this.ordermsg.GiftRate)/this.ordermsg.MoneyToGift;
            // this.UseGift2();
        }
        this.Calcilation();
        this.CalcilationMoney();
    };
    //计算优惠券后价格
    SettlementPage.prototype.useCouponAfter = function () {
        this.useGift = 0;
        this.Calcilation();
        this.CalcilationMoney();
        this.giftnum3 = false;
    };
    //加数量
    SettlementPage.prototype.addnum = function (a, b, ID) {
        this.ordermsg.lstCart[a].List[b].Quantity++;
        this.ordermsg.lstCart[a].SubNum++;
        this.ordermsg.lstCart[a].List[b].SubPice += (this.ordermsg.lstCart[a].List[b].Price * 1);
        this.ordermsg.lstCart[a].SubPrice += (this.ordermsg.lstCart[a].List[b].Price * 1);
        this.ordermsg.TotalMoney += (this.ordermsg.lstCart[a].List[b].Price * 1);
        if (!this.single) {
            this.uploadcars(ID, this.ordermsg.lstCart[a].List[b].Quantity);
        }
        this.GetUseCoupon();
        this.Calcilation();
        this.CalcilationMoney();
        //this.goodslist[a].List[b].Quantity++;
        //  this.totalnum = this.totalnum + this.goodslist[a].List[b].Price * 100;
        //this.uploadcars(ID, this.goodslist[a].List[b].Quantity);
    };
    //减去
    SettlementPage.prototype.jiannum = function (a, b, ID) {
        if (this.ordermsg.lstCart[a].List[b].Quantity > 1) {
            this.ordermsg.lstCart[a].SubNum--;
            this.ordermsg.lstCart[a].List[b].Quantity--;
            this.ordermsg.lstCart[a].List[b].SubPice -= (this.ordermsg.lstCart[a].List[b].Price * 1);
            this.ordermsg.lstCart[a].SubPrice -= (this.ordermsg.lstCart[a].List[b].Price * 1);
            this.ordermsg.TotalMoney -= (this.ordermsg.lstCart[a].List[b].Price * 1);
            if (!this.single) {
                this.uploadcars(ID, this.ordermsg.lstCart[a].List[b].Quantity);
            }
            this.GetUseCoupon();
            this.Calcilation();
            this.CalcilationMoney();
        }
        else {
        }
        //this.uploadcars(ID, this.goodslist[a].List[b].Quantity);
    };
    //更新购物车
    SettlementPage.prototype.uploadcars = function (ID, num) {
        var _this = this;
        var userInfo = {
            ID: ID,
            Num: num,
        };
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1029";
        parameter.parm = JSON.stringify(userInfo);
        // this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            // //console.info(result)
            if (result.Code == 1) {
                //this.getnum();
                //this.nativeService.hideLoading();
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    return SettlementPage;
}());
SettlementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settlement',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\settlement\settlement.html"*/'<ion-header style="min-height:44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">结算</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content scroll="true" style="background:#eee;color:#333;" *ngIf="ordermsg!=undefined">\n\n  <div class="group-goods-part" *ngFor="let item2 of ordermsg.lstCart;let a=index">\n    <!-- <div class="group-goods-part-name" *ngIf="item2.ActivityName!=null&&item2.productList!=null&&item2.productList.length>0">{{item2.StoreName}}</div> -->\n    <div class="group-goods-part-name">{{item2.StoreName}}</div>\n    <div class="coupon" *ngFor="let item of item2.List ;let i=index">\n      <div class="coupon_item_left">\n        <img [src]="item.PicUrl" alt="" [ngClass]="{true:\'gray\',false:\'\'}[item.isCheck!=1]">\n      </div>\n      <div class="coupon_item_right">\n        <div class="new_goods_name">{{item.Name}}</div>\n        <div [innerHTML]="item.AttrName"></div>\n        <div>{{(item.SubPice).toFixed(2)}}元</div>\n        <div class="coupon_item_right_item4">\n          <!-- <span>\n            x{{item.Quantity}}\n          </span> -->\n          <div>\n            <div style="border-right:none;text-align:center;line-height:20px;" tappable (click)="jiannum(a,i,item.ID)">\n              <img [src]="desimg" alt="">\n            </div>\n            <div style="line-height:20px;text-align:center">{{item.Quantity}}</div>\n            <div style="border-left:none;text-align:center;font-size:15px;line-height:20px;" tappable (click)="addnum(a,i,item.ID)">\n              <img [src]="addimg" alt="">\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n    <div class="price_total">\n      <div>共计{{item2.SubNum}}件商品</div>\n      <div>\n        小计：\n        <span class="changecolor">￥{{item2.SubPrice.toFixed(2)}}</span>\n      </div>\n    </div>\n  </div>\n  <div class="funct-more">\n    <div tappable (click)="alertPart(1)">\n      <div>配送方式：\n        <span *ngIf="switchNum==0">快递</span>\n        <span *ngIf="switchNum==1">配送网点\n          <span *ngIf="chosepont!=undefined">({{chosepont.Name}})</span>\n        </span>\n        <span *ngIf="switchNum==2">门店自提\n          <span *ngIf="choseself!=undefined">({{choseself.Name}})</span>\n        </span>\n      </div>\n      <div></div>\n      <div>\n        <img [src]="img" alt="">\n      </div>\n    </div>\n    <div style="height:auto;padding-top:5px;padding-bottom: 5px;">\n      <div style="height:auto;line-height:1.5rem;"><span style="color:red;">运费说明：</span>配送网点满38元包邮,36小时内送达;省内满98元包邮。不足包邮的需支付8元快递费。重量太大的特殊商品每一件加收一次运费。</div>\n    </div>\n    <div (click)="alertcoupon()" *ngIf="usecouponNum>0">\n      <div>优惠券:\n        <span *ngIf="coupondata!=\'\'&&coupondata">\n          <span *ngIf="coupondata.CouponType==1">{{coupondata.Amount}}元满减劵</span>\n          <span *ngIf="coupondata.CouponType==2">{{coupondata.Amount*10}}折折扣劵</span>\n          <span *ngIf="coupondata.CouponType==3">{{coupondata.Amount}}元代金券</span>\n        </span>\n      </div>\n      <div>\n\n      </div>\n      <div>\n        <img [src]="img" alt="">\n      </div>\n    </div>\n    <!-- <div (click)="alertcoupon()">\n      <div>电子发票</div>\n      <div></div>\n      <div>\n        <img [src]="img" alt="">\n      </div>\n    </div> -->\n  </div>\n  <div class="longback"></div>\n  <div class="address-part" *ngIf="addressflag" tappable (click)="alertAddress()">\n    <div>\n      <img [src]="img" alt="">\n    </div>\n    <div *ngIf="defaultAddress!=undefine">\n      <div style="line-height:20px;">{{defaultAddress.username}}：{{defaultAddress.tel}}</div>\n      <div style="margin-top:4px;">{{defaultAddress.address}}</div>\n    </div>\n  </div>\n  <div class="add_address" *ngIf="addressflag">\n    <span tappable (click)="gotoaddress(none,3)">添加地址</span>\n  </div>\n  <div class="address-part2" *ngIf="!addressflag" tappable (click)="gotoaddress(none,3)">\n    创建地址\n  </div>\n  <div class="pay-type">\n    <div class="weixinpay">\n      <!--tappable (click)="(paytype==2)?paytype=3:paytype=2"-->\n      <div>\n        <img [src]="img2" alt="">\n      </div>\n      <div>微信支付</div>\n      <div>\n        <img *ngIf="paytype==2" [src]="img3" alt="">\n        <img *ngIf="paytype!=2" [src]="img4" alt="">\n      </div>\n    </div>\n    <div class="weixinpay" tappable (click)="(paytype==1)?paytype=3:paytype=1" style="border-bottom:none;" *ngIf="!isweb">\n      <div>\n        <img [src]="img5" alt="">\n      </div>\n      <div>支付宝</div>\n      <div>\n        <img *ngIf="paytype==1" [src]="img3" alt="">\n        <img *ngIf="paytype!=1" [src]="img4" alt="">\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class="yue" *ngIf="user!=null">\n    <div class="weixinpay" tappable (click)="UseYue()" style="border-bottom:none;">\n      <div>\n        <img [src]="img6" alt="">\n      </div>\n      <div class="yue-item">\n        <div>余额</div>\n        <div>可用余额{{user.Money.toFixed(2)}}元</div>\n      </div>\n      <div>\n        <img *ngIf="yuenum" [src]="img3" alt="">\n        <img *ngIf="!yuenum" [src]="img4" alt="">\n      </div>\n    </div>\n  </div> -->\n\n\n  <div class="money-all">\n    <div>商品价格:{{ordermsg.TotalMoney.toFixed(2)}}元</div>\n    <div *ngIf="surplusMoney<ordermsg.FullMoney&&switchNum==0">配送费用:{{ordermsg.ShipMoney.toFixed(2)}}元</div>\n    <div *ngIf="surplusMoney<ordermsg.SiteShipMoney&&switchNum==1">配送费用:{{ordermsg.ShipMoney.toFixed(2)}}元</div>\n    <!-- <div *ngIf="ordermsg.Money>0">金额:{{ordermsg.Money.toFixed(2)}}元</div> -->\n    <div *ngIf="useGift>0">积分:{{useGift}}</div>\n    <div *ngIf="couponMonsy>0">优惠券:{{couponMonsy.toFixed(2)}}元</div>\n  </div>\n  <div class="yue" *ngIf="ordermsg.Gift!=null">\n    <div class="weixinpay" style="border-bottom:none;">\n      <div>\n        <img [src]="img9" alt="">\n      </div>\n      <div *ngIf="!giftnum3" class="yue-item">\n        <div>是否使用积分</div>\n      </div>\n      <div *ngIf="giftnum3" class="yue-item">\n        <input type="number" class="useGift" min=\'0\' max=\'{{surplusMoney*100}}\' [(ngModel)]="useGift" placeholder="填写积分数量"\n          (keydown)="checkNum($event)" (focus)="giftfocus()" (keyup)="checkGift()">\n      </div>\n      <div tappable (click)="UseGift3()">\n        <img *ngIf="giftnum3" [src]="img3" alt="">\n        <img *ngIf="!giftnum3" [src]="img4" alt="">\n      </div>\n    </div>\n  </div>\n  <div class="yue" style="height:auto;" *ngIf="ordermsg.Gift!=null">\n    <div class="weixinpay" style="border-bottom:none;">\n      <div>\n        <img [src]="img9" alt="">\n      </div>\n      <div class="yue-item">\n        <div>可用积分{{surplus}}</div>\n        <div>积分使用规则如下</div>\n      </div>\n      <!-- <div>\n        <img *ngIf="giftnum" [src]="img3" alt="">\n        <img *ngIf="!giftnum" [src]="img4" alt="">\n      </div> -->\n    </div>\n    <!--  积分兑换比例为{{(1/ordermsg.MoneyToGift).toFixed(0)}}:1,使用金额不得超过订单总额的{{this.ordermsg.GiftRate * 100}}% -->\n    <div class="weixinpay" style="height:2rem;">\n      {{shipMemo}}\n    </div>\n  </div>\n  <div class="yue" *ngIf="myCoupon!=null&&(ordermsg.OrderToatal>=ordermsg.ShipMoney)&&(ordermsg.ShipMoney>0||(ordermsg.ShipMoney==0&&mianyounum))">\n    <div class="weixinpay" tappable (click)="UseMY()" style="border-bottom:none;">\n      <div>\n        <img [src]="img15" alt="">\n      </div>\n      <div class="yue-item">\n        <div>是否使用免邮卷</div>\n      </div>\n      <div>\n        <img *ngIf="mianyounum" [src]="img3" alt="">\n        <img *ngIf="!mianyounum" [src]="img4" alt="">\n      </div>\n    </div>\n  </div>\n  <div style="height:45px;width:100%;"></div>\n</ion-content>\n<ion-footer *ngIf="ordermsg!=undefined" style="background:#f7f7f7;">\n  <page-popup [(flag)]="flag" [(flagsecond)]="flagsecond" [(addresList)]="addresList" [(defaultAddress)]="defaultAddress"\n    [(ordermsg)]="ordermsg" [(FranchiseeID)]="FranchiseeID" [(list)]="list"></page-popup>\n  <div class="cover2" *ngIf="showflag1" [ngClass]="{true:\'goshow\',false:\'gohide\'}[showflag]">\n    <!-- <div class="clickbtn" tappable (click)="hide()"></div> -->\n    <div class="alertpart2" [ngClass]="{true:\'goup\',false:\'godown\'}[showflag]">\n      <div class="deliver-part" *ngIf="showtype==1">\n        <div class="part1" *ngIf="stepnum==1">\n          <div class="delivery-item1">\n            <div [ngClass]="{true:\'color-deliver\',false:\'nocolor-deliver\'}[switchNum==0]" tappable (click)="switchNum=0">快递</div>\n            <div [ngClass]="{true:\'color-deliver\',false:\'nocolor-deliver\'}[switchNum==1]" tappable (click)="getgoodsAddress()">配送网点</div>\n            <div [ngClass]="{true:\'color-deliver\',false:\'nocolor-deliver\'}[switchNum==2]" tappable (click)="getZtAddress()">门店自提</div>\n          </div>\n          <div *ngIf="switchNum==0" class="delivery-item2" style="border:none;"></div>\n          <div *ngIf="switchNum==0" class="delivery-item3" style="border:none;"></div>\n          <div *ngIf="switchNum==1" class="delivery-item2" tappable (click)="stepnum=2">\n            <div>配送网点</div>\n            <div class="delivery-item-name">\n              <div>{{chosepont.Name}}</div>\n              <img [src]="img" alt="">\n            </div>\n          </div>\n          <div *ngIf="switchNum==2" class="delivery-item2" tappable (click)="stepnum=3">\n            <div>门店自提</div>\n            <div class="delivery-item-name">\n              <div>{{choseself.Name}}</div>\n              <img [src]="img" alt="">\n            </div>\n          </div>\n          <!-- <div *ngIf="switchNum==1" class="delivery-item3" tappable (click)="stepnum=3"></div> -->\n\n\n          <div class="address-part" *ngIf="addressflag&&switchNum==1" tappable (click)="alertAddress()">\n            <div>\n              <img [src]="img" alt="">\n            </div>\n            <div *ngIf="defaultAddress!=undefine">\n              <div style="line-height:20px;">{{defaultAddress.username}}：{{defaultAddress.tel}}</div>\n              <div style="margin-top:4px;">{{defaultAddress.address}}</div>\n            </div>\n          </div>\n          <div class="add_address" *ngIf="addressflag&&switchNum==1">\n            <span tappable (click)="gotoaddress(none,3)">添加地址</span>\n          </div>\n          <div class="address-part2" *ngIf="!addressflag" tappable (click)="gotoaddress(none,3)">\n            创建地址\n          </div>\n          <div class="delivery-item4" tappable (click)="confirm()">确认</div>\n        </div>\n        <div class="part2" *ngIf="stepnum==2">\n          <div class="address-item" tappable (click)="chose(i,item)" *ngFor="let item of shoppont ;let i=index">\n            <div class="address-item1" [ngClass]="{true:\'color3\',false:\'nocolor3\'}[switchNum2==i]">{{item.Name}}</div>\n            <div class="address-item2">\n              <div class="address-item2-line1">{{item.Address}}</div>\n              <div class="address-item2-line2">\n                <img *ngIf="switchNum2==i" [src]="img7" alt="">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="part2 " *ngIf="stepnum==3">\n          <div class="address-item" tappable (click)="choseSelf(i,item)" *ngFor="let item of selfpont ;let i=index">\n            <div class="address-item1" [ngClass]="{true:\'color3\',false:\'nocolor3\'}[switchNum3==i]">{{item.Name}}</div>\n            <div class="address-item2">\n              <div class="address-item2-line1">{{item.Address}}</div>\n              <div class="address-item2-line2">\n                <img *ngIf="switchNum3==i" [src]="img7" alt="">\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- <div class="part2" *ngIf="stepnum==3">\n          <div class="time-list" *ngFor="let item of dateList ;let i=index" tappable (click)="AswitchNum3(i,item)">\n            <div>{{item.date}}日(周\n              <span *ngIf="item.day==1">一</span>\n              <span *ngIf="item.day==2">二</span>\n              <span *ngIf="item.day==3">三</span>\n              <span *ngIf="item.day==4">四</span>\n              <span *ngIf="item.day==5">五</span>\n              <span *ngIf="item.day==6">六</span>\n              <span *ngIf="item.day==0">日</span>)</div>\n            <div style="width:1.5rem;height:1.5rem;">\n              <img *ngIf="switchNum3==i" class="choseimg" [src]="img7" alt="">\n            </div>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n  <div class="go-pay">\n    <div>应付金额:{{surplusMoney.toFixed(2)}}元</div>\n    <div tappable (click)="payfont()">去付款</div>\n  </div>\n  <div class="pay_success_cover" *ngIf="paySuccess">\n    <div class="nav_part">\n      <img style="height: 1.8rem;width:auto;" tappable (click)="gopop()" [src]="fanhui" alt="">\n      <div style="text-align: center;\n      font-size: 1.7rem;\n      font-weight: 100;\n      color: #000;\n      pointer-events: auto;">付款成功</div>\n      <div>\n        <img style="height:2rem;width:auto;margin-right:1.2rem" [src]="gouwu" alt="">\n        <img style="height:2rem;width:auto;" [src]="sousuo" alt="">\n      </div>\n    </div>\n    <div class="pay_success_status">\n      <img style="margin-right:10px;height:2.5rem;width:auto;" [src]="complte" alt="">\n      <div class="pay_status_msg">\n        <span>\n          付款成功\n        </span>\n        <span>\n          请耐心等待收货\n        </span>\n      </div>\n    </div>\n    <div class="pay_success_msg">\n      <div class="pay_success_msg_item">\n        <span style="color:#999">收货人:</span>\n        <span>{{defaultAddress.username}}</span>\n      </div>\n      <div class="pay_success_msg_item">\n        <span style="color:#999">收货地址:</span>\n        <span class="pay_success_msg_address">{{defaultAddress.address}}</span>\n      </div>\n    </div>\n    <div class="pay_success_msg">\n      <!-- <div class="pay_success_msg_item">\n        <span style="color:#999">订单编号:</span>\n        <span>352562</span>\n      </div> -->\n      <div class="pay_success_msg_item">\n        <span style="color:#999">合计:</span>\n        <span class="changecolor">￥{{PayMoney.toFixed(2)}}</span>\n      </div>\n    </div>\n    <div class="pay_success_btn">\n      <div (click)="gotoOrderList()">查看订单</div>\n      <div (click)="gotohome()">继续购物</div>\n    </div>\n  </div>\n\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\settlement\settlement.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], SettlementPage);

//# sourceMappingURL=settlement.js.map

/***/ })

});
//# sourceMappingURL=98.js.map?v=107