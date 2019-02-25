webpackJsonp([99,190],{

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

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettlementSignlePageModule", function() { return SettlementSignlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settlement_signle__ = __webpack_require__(834);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componnets_popup_popup_module__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SettlementSignlePageModule = (function () {
    function SettlementSignlePageModule() {
    }
    return SettlementSignlePageModule;
}());
SettlementSignlePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__settlement_signle__["a" /* SettlementSignlePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__settlement_signle__["a" /* SettlementSignlePage */]),
            __WEBPACK_IMPORTED_MODULE_3__componnets_popup_popup_module__["PopupPageModule"],
        ],
    })
], SettlementSignlePageModule);

//# sourceMappingURL=settlement-signle.module.js.map

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

/***/ 834:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettlementSignlePage; });
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







/**
 * Generated class for the SettlementSignlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SettlementSignlePage = (function () {
    function SettlementSignlePage(navCtrl, navParams, httpService, nativeService, storage, app, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.app = app;
        this.modalCtrl = modalCtrl;
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
        this.stepnum = 1;
        /* 测试列表 */
        this.textlist = [1, 2, 3, 1, 2, 2, 3];
        /* 配送方式 */
        this.switchNum = 0;
        this.usecouponNum = 0;
        this.isweb = false;
        this.paySuccess = false;
        this.mianyounum = false;
        this.Money = 0;
        this.Gift = 0;
        this.Method = 0;
        this.couponList = [];
        this.FightID = "";
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userInfo = val.userinform;
                    _this.FranchiseeID = val.address.FranchiseeID;
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
                _this.getlocationpont();
            }
            else {
                // this.navCtrl.push("LoginPage",{showflag:true});
            }
        });
        this.isweb = !this.nativeService.isMobile();
    }
    SettlementSignlePage.prototype.ionViewWillEnter = function () {
        if (this.addressflag == false) {
            this.loginaddress();
            this.addressflag = true;
        }
    };
    SettlementSignlePage.prototype.ionViewDidLoad = function () {
        this.ordermsg = this.navParams.get("ordermsg");
        this.userID = this.navParams.get("userID");
        this.list = this.navParams.get("list");
        ////console.info(this.ordermsg);
        this.loginaddress();
        this.GetUseCoupon();
        this.getdate();
    };
    SettlementSignlePage.prototype.getlist = function () {
        /**新的方法 */
        for (var i = 0; i < this.ordermsg.ActivityList.length; i++) {
            var atrList = [];
            // var obj:any;
            for (var j = 0; j < this.ordermsg.ActivityList[i].productList.length; j++) {
                if (this.ordermsg.ActivityList[i].productList[j].isExist == 1) {
                    var p = void 0;
                    console.log(this.ordermsg.ActivityList[i].productList);
                    p = this.ordermsg.ActivityList[i].productList[j].AttributesXml;
                    if (p != null && p != "") {
                        p = p.replace(/</g, 'ling1');
                        p = p.replace(/>/g, 'kong2');
                    }
                    var list = {
                        "Quantity": this.ordermsg.ActivityList[i].productList[j].Quantity,
                        "Price": this.ordermsg.ActivityList[i].productList[j].Price,
                        "ProductId": this.ordermsg.ActivityList[i].productList[j].ProductId,
                        "AttrbuitXml": p,
                        "AttrName": this.ordermsg.ActivityList[i].productList[j].AttrName,
                        "Cost": this.ordermsg.ActivityList[i].productList[j].Cost,
                        "ProBH": this.ordermsg.ActivityList[i].productList[j].ProBH,
                    };
                    atrList.push(list);
                }
            }
            if (atrList.length > 0) {
                var obj = {
                    "ActivityID": this.ordermsg.ActivityList[i].ActivityID,
                    "Activitype": this.ordermsg.ActivityList[i].ActivityType,
                    "Toatal": this.ordermsg.ActivityList[i].OrderToatal,
                    "productList": atrList
                };
                this.goodslist.push(obj);
            }
        }
    };
    SettlementSignlePage.prototype.loginaddress = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1011";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                if (result.Data2 != null) {
                    _this.addresList[0] = result.Data2;
                    _this.defaultAddress = result.Data2;
                    for (var n = 0; n < result.Data.length; n++) {
                        _this.addresList.push(result.Data[n]);
                    }
                }
                else {
                    if (result.Data.length == 0) {
                        _this.addressflag = false;
                    }
                    else {
                        _this.defaultAddress = result.Data[0];
                        for (var b = 0; b < result.Data.length; b++) {
                            _this.addresList.push(result.Data[b]);
                        }
                    }
                }
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    SettlementSignlePage.prototype.gotoaddress = function (item, type) {
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
    SettlementSignlePage.prototype.alertAddress = function () {
        ////console.info(this.addresList)
        this.flag = true;
        this.flagsecond = true;
    };
    SettlementSignlePage.prototype.slice = function (string) {
        if (string != "" && string != null) {
            return string.slice(0, 18) + "...";
        }
    };
    //支付
    SettlementSignlePage.prototype.pay = function () {
        var _this = this;
        var that = this;
        if (this.defaultAddress == undefined) {
            this.nativeService.showToast("请先创建地址");
            return;
        }
        this.getlist();
        //console.log(this.goodslist);
        if (this.goodslist.length == 0) {
            this.nativeService.showToast("无有效商品");
            return;
        }
        else {
            var userInfo = {
                OrderToatal: this.ordermsg.OrderToatal,
                FranchiseeID: this.FranchiseeID,
                UserID: this.userID,
                Method: this.ordermsg.Method,
                Gift: this.ordermsg.Gift,
                Money: this.ordermsg.Money,
                Coupon: this.ordermsg.Coupon,
                ShipMoney: this.ordermsg.ShipMoney,
                PayType: this.paytype,
                ShipAddressId: this.defaultAddress.ID,
                arrayList: this.goodslist,
                FightID: this.ordermsg.NoActivity.CouPonID,
                shopID: this.ordermsg.Method == 0 ? '' : this.chosepont.ID,
                reTime: this.ordermsg.Method == 0 ? '' : this.chosetime.fulldate,
                isweb: this.isweb ? 1 : 0,
                MyID: this.mianyounum ? this.myCoupon.ID : ''
            };
            ////console.info(userInfo);
            var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
            parameter.jyh = "1038";
            parameter.parm = JSON.stringify(userInfo);
            //console.log(parameter);
            this.nativeService.showLoading("支付中");
            this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
                var result = JSON.parse(res.result);
                _this.goodslist = [];
                if (result.Code == 1) {
                    if (_this.paytype == 2) {
                        /**微信支付 */
                        var data = result.Data;
                        if (_this.isweb) {
                            /**微信公众号支付 */
                            wx.chooseWXPay({
                                timestamp: data.timestamp,
                                nonceStr: data.noncestr,
                                package: data.package,
                                signType: data.signType,
                                paySign: data.sign,
                                success: function (res) {
                                    that.paySuccess = true;
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
                                _this.paySuccess = true;
                            }
                        }, function (error) {
                        });
                    }
                }
                else if (result.Code == "2") {
                    _this.paySuccess = true;
                }
                else {
                    _this.nativeService.showToast(result.Msg);
                }
            });
        }
    };
    SettlementSignlePage.prototype.hide = function () {
        var that = this;
        this.showflag = false;
        setTimeout(function () {
            that.showflag1 = false;
        }, 150);
    };
    SettlementSignlePage.prototype.show = function () {
        //var that = this;
        this.showflag1 = true;
        this.showflag = true;
    };
    /* 弹出层 */
    SettlementSignlePage.prototype.alertPart = function (type) {
        this.show();
        this.showtype = type;
    };
    SettlementSignlePage.prototype.alertcoupon = function () {
        var _this = this;
        var modal = this.modalCtrl.create('CouponToUsePage', {
            "CouponList": this.couponList
        });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.coupondata = data;
                _this.FightID = _this.coupondata.ID;
                _this.Load();
            }
            else {
            }
        });
        ;
    };
    //余额
    SettlementSignlePage.prototype.chose = function (number, item) {
        this.switchNum2 = number;
        this.stepnum = 1;
        this.chosepont = item;
    };
    SettlementSignlePage.prototype.AswitchNum3 = function (i, item) {
        this.switchNum3 = i;
        this.stepnum = 1;
        this.chosetime = item;
    };
    SettlementSignlePage.prototype.confirm = function () {
        this.hide();
        this.yuenum = false;
        this.Money = 0;
        this.giftnum = false;
        this.Gift = 0;
        if (this.switchNum == 1) {
            this.mianyounum = false;
        }
        this.Load();
    };
    /**获取用户 */
    SettlementSignlePage.prototype.LoadUser = function () {
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
    SettlementSignlePage.prototype.GetUseCoupon = function () {
        var _this = this;
        if (this.ordermsg != null) {
            if (this.ordermsg.NoActivity != null) {
                var productList = [];
                for (var i = 0; i < this.ordermsg.NoActivity.productList.length; i++) {
                    productList.push(this.ordermsg.NoActivity.productList[i].ProductId);
                }
                var Info = {
                    UserID: this.userID,
                    ProductID: productList
                };
                var parm = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
                parm.jyh = "1124";
                parm.parm = JSON.stringify(Info);
                this.httpService.post("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (res) {
                    var result = JSON.parse(res.result);
                    if (result.Code == "1") {
                        _this.couponList = result.Data;
                        _this.usecouponNum = result.Msg;
                        _this.myCoupon = result.Data2;
                        // console.log(result);
                    }
                });
            }
        }
    };
    /**使用余额 */
    SettlementSignlePage.prototype.UseYue = function () {
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
    SettlementSignlePage.prototype.UseGift = function () {
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
    SettlementSignlePage.prototype.Load = function () {
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
    SettlementSignlePage.prototype.getlocationpont = function () {
        var _this = this;
        var Info = {
            FranchiseeID: this.FranchiseeID,
            currentLongitude: this.position.currentLongitude,
            currentLatitude: this.position.currentLatitude,
        };
        // //console.info(Info);
        var parm = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parm.jyh = "1123";
        parm.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == "1") {
                _this.shoppont = result.Data;
                _this.chosepont = result.Data[0];
            }
            else {
            }
        });
    };
    //获取当前时间
    SettlementSignlePage.prototype.getdate = function () {
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
    SettlementSignlePage.prototype.gotohome = function () {
        this.app.getRootNav().setRoot('TabsPage');
    };
    //查看订单
    SettlementSignlePage.prototype.gotoOrderList = function () {
        this.navCtrl.push("OrderListPage", {
            type: 0,
        });
    };
    SettlementSignlePage.prototype.UseMY = function () {
        this.mianyounum = !this.mianyounum;
        this.Load();
    };
    SettlementSignlePage.prototype.gopop = function () {
        this.navCtrl.pop();
    };
    return SettlementSignlePage;
}());
SettlementSignlePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settlement-signle',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\settlement-signle\settlement-signle.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">结算</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#eee;color:#333;" *ngIf="ordermsg!=undefined">\n  <div class="longback"></div>\n  <div class="address-part" *ngIf="addressflag" tappable (click)="alertAddress()">\n    <div>\n      <img [src]="img" alt="">\n    </div>\n    <div *ngIf="defaultAddress!=undefine">\n      <div style="line-height:20px;">{{defaultAddress.username}}：{{defaultAddress.tel}}</div>\n      <div style="margin-top:4px;">{{defaultAddress.address}}</div>\n    </div>\n  </div>\n  <div class="address-part2" *ngIf="!addressflag" tappable (click)="gotoaddress(none,3)">\n    创建地址\n  </div>\n  <div class="group-goods-part" *ngFor="let item2 of ordermsg.lstCart">\n    <!-- <div class="group-goods-part-name" *ngIf="item2.ActivityName!=null&&item2.productList!=null&&item2.productList.length>0">{{item2.StoreName}}</div> -->\n    <div class="group-goods-part-name">{{item2.StoreName}}</div>\n    <div class="coupon" *ngFor="let item of item2.List">\n      <div class="coupon_item_left">\n        <img [src]="item.PicUrl" alt="" [ngClass]="{true:\'gray\',false:\'\'}[item.isCheck!=1]">\n      </div>\n      <div class="coupon_item_right">\n        <div class="new_goods_name">{{item.Name}}</div>\n        <div [innerHTML]="item.AttrName"></div>\n        <div>{{(item.SubPice).toFixed(2)}}元</div>\n        <div class="coupon_item_right_item4">\n          <span>\n            x{{item.Quantity}}\n          </span>\n\n        </div>\n      </div>\n    </div>\n    <div class="price_total">\n      <div>共计2件商品</div>\n      <div>\n        小计：\n        <span class="changecolor">￥15.00</span>\n      </div>\n    </div>\n  </div>\n  <div class="funct-more">\n    <div tappable (click)="alertPart(1)">\n      <div>配送方式：\n        <span *ngIf="switchNum==0">快递</span>\n        <span *ngIf="switchNum==1">自提</span>\n      </div>\n      <div></div>\n      <div>\n        <img [src]="img" alt="">\n      </div>\n    </div>\n   \n    <div (click)="alertcoupon()" *ngIf="usecouponNum>0">\n      <div>优惠券</div>\n      <div></div>\n      <div>\n        <img [src]="img" alt="">\n      </div>\n    </div>\n    <div (click)="alertcoupon()">\n      <div>电子发票</div>\n      <div></div>\n      <div>\n        <img [src]="img" alt="">\n      </div>\n    </div>\n  </div>\n  <div class="pay-type">\n    <div class="weixinpay" tappable (click)="(paytype==2)?paytype=3:paytype=2">\n      <div>\n        <img [src]="img2" alt="">\n      </div>\n      <div>微信支付</div>\n      <div>\n        <img *ngIf="paytype==2" [src]="img3" alt="">\n        <img *ngIf="paytype!=2" [src]="img4" alt="">\n      </div>\n    </div>\n    <div class="weixinpay" tappable (click)="(paytype==1)?paytype=3:paytype=1" style="border-bottom:none;" *ngIf="!isweb">\n      <div>\n        <img [src]="img5" alt="">\n      </div>\n      <div>支付宝</div>\n      <div>\n        <img *ngIf="paytype==1" [src]="img3" alt="">\n        <img *ngIf="paytype!=1" [src]="img4" alt="">\n      </div>\n    </div>\n  </div>\n\n  <div class="yue" *ngIf="user!=null">\n    <div class="weixinpay" tappable (click)="UseYue()" style="border-bottom:none;">\n      <div>\n        <img [src]="img6" alt="">\n      </div>\n      <div class="yue-item">\n        <div>余额</div>\n        <div>可用余额{{user.Money.toFixed(2)}}元</div>\n      </div>\n      <div>\n        <img *ngIf="yuenum" [src]="img3" alt="">\n        <img *ngIf="!yuenum" [src]="img4" alt="">\n      </div>\n    </div>\n  </div>\n\n\n  <div class="money-all">\n    <div>商品价格:{{ordermsg.TotalMoney.toFixed(2)}}元</div>\n    <div>配送费用:{{ordermsg.ShipMoney.toFixed(2)}}元</div>\n    <div *ngIf="ordermsg.Money>0">金额:{{ordermsg.Money.toFixed(2)}}元</div>\n    <div *ngIf="ordermsg.Gift>0">积分:{{ordermsg.Gift}}</div>\n    <div *ngIf="ordermsg.CouponMoney>0">优惠券:{{ordermsg.CouponMoney.toFixed(2)}}元</div>\n  </div>\n  <div class="yue" *ngIf="user!=null">\n    <div class="weixinpay" tappable (click)="UseGift()" style="border-bottom:none;">\n      <div>\n        <img [src]="img9" alt="">\n      </div>\n      <div class="yue-item">\n        <div>可用积分{{user.Gift}}</div>\n      </div>\n      <div>\n        <img *ngIf="giftnum" [src]="img3" alt="">\n        <img *ngIf="!giftnum" [src]="img4" alt="">\n      </div>\n    </div>\n  </div>\n  <div class="yue" *ngIf="myCoupon!=null&&(ordermsg.OrderToatal>=ordermsg.ShipMoney)&&(ordermsg.ShipMoney>0||(ordermsg.ShipMoney==0&&mianyounum))">\n    <div class="weixinpay" tappable (click)="UseMY()" style="border-bottom:none;">\n      <div>\n        <img [src]="img15" alt="">\n      </div>\n      <div class="yue-item">\n        <div>是否使用免邮卷</div>\n      </div>\n      <div>\n        <img *ngIf="mianyounum" [src]="img3" alt="">\n        <img *ngIf="!mianyounum" [src]="img4" alt="">\n      </div>\n    </div>\n  </div>\n  <div style="height:45px;width:100%;"></div>\n</ion-content>\n<ion-footer *ngIf="ordermsg!=undefined" style="background:#f7f7f7;">\n  <page-popup [(flag)]="flag" [(flagsecond)]="flagsecond" [(addresList)]="addresList" [(defaultAddress)]="defaultAddress" [(ordermsg)]="ordermsg"\n    [(FranchiseeID)]="FranchiseeID" [(list)]="list"></page-popup>\n  <div class="cover" *ngIf="showflag1" [ngClass]="{true:\'goshow\',false:\'gohide\'}[showflag]">\n    <!-- <div class="clickbtn" tappable (click)="hide()"></div> -->\n    <div class="alertpart2" [ngClass]="{true:\'goup\',false:\'godown\'}[showflag]">\n      <div class="deliver-part" *ngIf="showtype==1">\n        <div class="part1" *ngIf="stepnum==1">\n          <div class="delivery-item1">\n            <div [ngClass]="{true:\'color-deliver\',false:\'nocolor-deliver\'}[switchNum==0]" tappable (click)="switchNum=0">快递</div>\n            <div [ngClass]="{true:\'color-deliver\',false:\'nocolor-deliver\'}[switchNum==1]" tappable (click)="switchNum=1">上门自提</div>\n          </div>\n          <div *ngIf="switchNum==0" class="delivery-item2" style="border:none;"></div>\n          <div *ngIf="switchNum==0" class="delivery-item3" style="border:none;"></div>\n          <div *ngIf="switchNum==1" class="delivery-item2" tappable (click)="stepnum=2">\n            <div>自提地点</div>\n            <div class="delivery-item-name">\n              <div>{{chosepont.Name}}</div>\n              <img [src]="img" alt="">\n            </div>\n          </div>\n          <div *ngIf="switchNum==1" class="delivery-item3" tappable (click)="stepnum=3">\n            <div>自提时间</div>\n            <div class="delivery-item-name">\n              <div>\n                <div>{{chosetime.date}}日(周\n                  <span *ngIf="chosetime.day==1">一</span>\n                  <span *ngIf="chosetime.day==2">二</span>\n                  <span *ngIf="chosetime.day==3">三</span>\n                  <span *ngIf="chosetime.day==4">四</span>\n                  <span *ngIf="chosetime.day==5">五</span>\n                  <span *ngIf="chosetime.day==6">六</span>\n                  <span *ngIf="chosetime.day==0">日</span>)</div>\n              </div>\n              <img [src]="img" alt="">\n            </div>\n          </div>\n          <div class="delivery-item4" tappable (click)="confirm()">确认</div>\n        </div>\n        <div class="part2" *ngIf="stepnum==2">\n          <div class="address-item" tappable (click)="chose(i,item)" *ngFor="let item of shoppont ;let i=index">\n            <div class="address-item1" [ngClass]="{true:\'color3\',false:\'nocolor3\'}[switchNum2==i]">{{item.Name}}</div>\n            <div class="address-item2">\n              <div class="address-item2-line1">{{item.shopaddress}}</div>\n              <div class="address-item2-line2">\n                <img *ngIf="switchNum2==i" [src]="img7" alt="">\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class="part2" *ngIf="stepnum==3">\n          <div class="time-list" *ngFor="let item of dateList ;let i=index" tappable (click)="AswitchNum3(i,item)">\n            <div>{{item.date}}日(周\n              <span *ngIf="item.day==1">一</span>\n              <span *ngIf="item.day==2">二</span>\n              <span *ngIf="item.day==3">三</span>\n              <span *ngIf="item.day==4">四</span>\n              <span *ngIf="item.day==5">五</span>\n              <span *ngIf="item.day==6">六</span>\n              <span *ngIf="item.day==0">日</span>)</div>\n            <div style="width:1.5rem;height:1.5rem;">\n              <img *ngIf="switchNum3==i" class="choseimg" [src]="img7" alt="">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="go-pay">\n    <div>应付金额:{{ordermsg.OrderToatal.toFixed(2)}}元</div>\n    <div tappable (click)="pay()">去付款</div>\n  </div>\n  <div class="pay_success_cover" *ngIf="paySuccess">\n    <div class="nav_part">\n      <img style="height: 1.8rem;width:auto;" tappable (click)="gopop()" [src]="fanhui" alt="">\n      <div style="text-align: center;\n        font-size: 1.7rem;\n        font-weight: 100;\n        color: #000;\n        pointer-events: auto;">付款成功</div>\n      <div>\n        <img style="height:2rem;width:auto;margin-right:1.2rem" [src]="gouwu" alt="">\n        <img style="height:2rem;width:auto;" [src]="sousuo" alt="">\n      </div>\n    </div>\n    <div class="pay_success_status">\n      <img style="margin-right:10px;height:2.5rem;width:auto;" [src]="complte" alt="">\n      <div class="pay_status_msg">\n        <span>\n          付款成功\n        </span>\n        <span>\n          请耐心等待收货\n        </span>\n      </div>\n    </div>\n    <div class="pay_success_msg">\n      <div class="pay_success_msg_item">\n        <span style="color:#999">收货人:</span>\n        <span>{{defaultAddress.username}}</span>\n      </div>\n      <div class="pay_success_msg_item">\n        <span style="color:#999">收货地址:</span>\n        <span class="pay_success_msg_address">{{defaultAddress.address}}</span>\n      </div>\n    </div>\n    <div class="pay_success_msg">\n      <div class="pay_success_msg_item">\n        <span style="color:#999">订单编号:</span>\n        <span>352562</span>\n      </div>\n      <div class="pay_success_msg_item">\n        <span style="color:#999">合计:</span>\n        <span class="changecolor">￥{{ordermsg.OrderToatal.toFixed(2)}}</span>\n      </div>\n    </div>\n    <div class="pay_success_btn">\n      <div (click)="gotoOrderList()">查看订单</div>\n      <div (click)="gotohome()">继续购物</div>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\settlement-signle\settlement-signle.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], SettlementSignlePage);

//# sourceMappingURL=settlement-signle.js.map

/***/ })

});
//# sourceMappingURL=99.js.map?v=107