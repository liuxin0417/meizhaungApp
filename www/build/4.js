webpackJsonp([4,93],{

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

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupSettlementPageModule", function() { return GroupSettlementPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_settlement__ = __webpack_require__(822);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componnets_popup_popup_module__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GroupSettlementPageModule = (function () {
    function GroupSettlementPageModule() {
    }
    return GroupSettlementPageModule;
}());
GroupSettlementPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__group_settlement__["a" /* GroupSettlementPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__group_settlement__["a" /* GroupSettlementPage */]),
            __WEBPACK_IMPORTED_MODULE_3__componnets_popup_popup_module__["PopupPageModule"],
        ],
    })
], GroupSettlementPageModule);

//# sourceMappingURL=group-settlement.module.js.map

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

/***/ 822:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupSettlementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Model__ = __webpack_require__(143);
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
//import { Order } from './../../model/Model';







var GroupSettlementPage = (function () {
    function GroupSettlementPage(navCtrl, navParams, storage, httpService, nativeService, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.modalCtrl = modalCtrl;
        this.img = "assets/imgs/jinru--hui.png";
        this.img2 = "assets/imgs/eixin.png";
        this.img3 = "assets/imgs/chone.png";
        this.img4 = "assets/imgs/unchone.png";
        this.img5 = "assets/imgs/zhifun.png";
        this.img6 = "assets/imgs/yue.png";
        this.img7 = "assets/imgs/jian.png";
        this.img8 = "assets/imgs/jia.png";
        this.img10 = "assets/imgs/chose.png";
        this.switchNum2 = 0;
        this.switchNum3 = 0;
        this.img9 = "assets/imgs/gift.png";
        this.addressflag = true;
        this.addresList = [];
        this.flag = false;
        this.flagsecond = false;
        this.goodsnum = 1;
        this.yuenum = false;
        this.giftnum = false;
        this.money = 0;
        this.ishasgood = false;
        this.picurl = "";
        this.gift = 0;
        this.isweb = false;
        this.showflag = false;
        this.paytype = 2;
        this.showflag1 = false;
        this.switchNum = 0;
        this.textlist = [1, 2, 3, 1, 2, 2, 3];
        this.stepnum = 1;
        this.groupInfo = this.navParams.get("Info");
        this.picurl = this.navParams.get("picurl");
        this.storage.get("userinfo").then(function (val) {
            if (val != "") {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.FranchiseeID = val.address.FranchiseeID;
                    _this.userInfo = val.userinform;
                    _this.loginaddress();
                    _this.Load();
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
    GroupSettlementPage.prototype.ionViewDidLoad = function () {
        //this.show();
        this.getdate();
    };
    GroupSettlementPage.prototype.ionViewWillEnter = function () {
        if (this.addressflag == false) {
            this.loginaddress();
            this.addressflag = true;
        }
    };
    /**获取结算 */
    GroupSettlementPage.prototype.Load = function () {
        var _this = this;
        var Info = {
            GouponID: this.groupInfo.GouponID,
            ProductBH: this.groupInfo.ProductBH,
            ProductID: this.groupInfo.ProductID,
            GroupID: this.groupInfo.GroupID,
            money: this.money,
            num: this.goodsnum,
            UserID: this.userInfo.ID,
            Gift: this.gift,
            grouptype: this.groupInfo.grouptype,
            Method: this.switchNum
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parm.jyh = "1107";
        parm.parm = JSON.stringify(Info);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.ishasgood = true;
                _this.Order = result.Data;
                _this.Groupon = _this.Order.Groupon;
            }
            else if (result.Code == 2) {
                _this.ishasgood = false;
                _this.msg = result.Msg;
            }
            else {
                _this.ishasgood = false;
                _this.msg = result.Msg;
            }
            _this.nativeService.hideLoading();
        });
    };
    /**获取用户的地址列表 */
    GroupSettlementPage.prototype.loginaddress = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userInfo.ID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1011";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            ////console.info(result);
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
    GroupSettlementPage.prototype.alertAddress = function () {
        ////console.info(this.addresList)
        this.flag = true;
        this.flagsecond = true;
    };
    GroupSettlementPage.prototype.jia = function () {
        if (this.Groupon.MaxAmount > this.goodsnum) {
            this.goodsnum++;
            this.yuenum = false;
            this.giftnum = false;
            this.gift = 0;
            this.money = 0;
            this.Load();
        }
    };
    GroupSettlementPage.prototype.jian = function () {
        if (this.goodsnum > 1) {
            this.goodsnum--;
            this.yuenum = false;
            this.giftnum = false;
            this.gift = 0;
            this.money = 0;
            this.Load();
        }
        else {
        }
    };
    GroupSettlementPage.prototype.LoadUser = function () {
        var _this = this;
        var Info = {
            UserID: this.userInfo.ID
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
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
    GroupSettlementPage.prototype.UseYue = function () {
        if (this.user.Money < 0) {
            return false;
        }
        this.yuenum = !this.yuenum;
        if (this.yuenum) {
            if (this.user.Money >= this.Order.OrderToatal) {
                this.money = this.Order.OrderToatal;
            }
            else {
                this.money = this.user.Money;
            }
            console.log(this.money);
        }
        else {
            this.money = 0;
        }
        this.Load();
    };
    /**使用积分 */
    GroupSettlementPage.prototype.UseGift = function () {
        if (this.user.Gift < 10) {
            return false;
        }
        if (this.Order.OrderToatal < 1) {
            return false;
        }
        this.giftnum = !this.giftnum;
        var maxgift = 300;
        if (this.giftnum) {
            if (this.user.Gift > maxgift) {
                if (this.Order.OrderToatal <= maxgift / 10) {
                    this.gift = parseInt(this.Order.OrderToatal * 10 + "");
                }
                else {
                    this.gift = maxgift;
                }
            }
            else {
                if (this.user.Gift > parseInt(this.Order.OrderToatal * 10 + "")) {
                    this.gift = parseInt(this.Order.OrderToatal * 10 + "");
                }
                else {
                    this.gift = this.user.Gift;
                }
            }
        }
        else {
            this.gift = 0;
        }
        this.Load();
    };
    /**团购支付订单 */
    //隐藏
    GroupSettlementPage.prototype.hide = function () {
        var that = this;
        this.showflag = false;
        setTimeout(function () {
            that.showflag1 = false;
        }, 150);
    };
    GroupSettlementPage.prototype.show = function () {
        /* var that = this; */
        this.showflag1 = true;
        this.showflag = true;
    };
    GroupSettlementPage.prototype.getaddress = function (item) {
        var _this = this;
        //console.info(item);
        var that = this;
        this.showflag = false;
        setTimeout(function () {
            that.showflag1 = false;
        }, 150);
        this.defaultAddress = item;
        var userInfo = {
            GouponID: this.groupInfo.GouponID,
            ProductBH: this.groupInfo.ProductBH,
            ProductID: this.groupInfo.ProductID,
            GroupID: this.groupInfo.GroupID,
            money: this.money,
            num: this.goodsnum,
            AddressID: item.ID,
            Grouptype: this.groupInfo.grouptype,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1121";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.giftnum = false;
                _this.yuenum = false;
                _this.money = 0;
                _this.gift = 0;
                _this.ishasgood = true;
                _this.Order = result.Data;
                _this.Groupon = _this.Order.Groupon;
            }
            else if (result.Code == 2) {
                _this.ishasgood = false;
                _this.msg = result.Msg;
            }
            else {
                _this.ishasgood = false;
                _this.msg = result.Msg;
            }
        });
    };
    GroupSettlementPage.prototype.pay = function () {
        var _this = this;
        if (this.defaultAddress == undefined) {
            this.nativeService.showToast("请先创建地址");
            return;
        }
        var userInfo = {
            GouponID: this.groupInfo.GouponID,
            ProductBH: this.groupInfo.ProductBH,
            GroupID: this.groupInfo.GroupID,
            Money: this.money,
            AddressID: this.defaultAddress.ID,
            Grouptype: this.groupInfo.grouptype,
            UserID: this.userInfo.ID,
            Num: this.goodsnum,
            Method: this.Order.Method,
            PayType: this.paytype,
            ShipMoney: this.Order.ShipMoney,
            OrderTotal: this.Order.OrderToatal,
            FightID: this.groupInfo.FightID,
            Gift: this.gift,
            shopID: this.Order.Method == 0 ? '' : this.chosepont.ID,
            reTime: this.Order.Method == 0 ? '' : this.chosetime.fulldate,
            isweb: this.isweb ? 1 : 0
        };
        var that = this;
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1122";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("支付中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                var data = result.Data;
                if (_this.paytype == 2) {
                    if (_this.isweb) {
                        wx.chooseWXPay({
                            timestamp: data.timestamp,
                            nonceStr: data.noncestr,
                            package: data.package,
                            signType: data.signType,
                            paySign: data.sign,
                            success: function (res) {
                                that.nativeService.hideLoading();
                                that.modalpush();
                                // 支付成功后的回调函数
                            }
                        });
                    }
                    else {
                        __WEBPACK_IMPORTED_MODULE_6__providers_WechatPlugin__["a" /* WechatPlugin */].sendPaymentRequest(data).then(function (result) {
                            _this.nativeService.hideLoading();
                            _this.modalpush();
                        }, function (error) {
                            _this.nativeService.showToast(error);
                        });
                    }
                }
                else {
                    AliPay.pay(result.Msg, function (success) {
                        var msg = JSON.parse(success.result);
                        if (msg.alipay_trade_app_pay_response.msg == "Success") {
                            _this.nativeService.hideLoading();
                            _this.nativeService.showToast("支付订单成功");
                            _this.navCtrl.setRoot("PaySuccessPage");
                            _this.modalpush();
                        }
                    }, function (error) {
                        _this.nativeService.showToast(error);
                        _this.nativeService.hideLoading();
                    });
                }
            }
            else if (result.Code == "2") {
                _this.modalpush();
            }
            else {
                _this.nativeService.showToast(result.Msg);
                _this.nativeService.hideLoading();
            }
        });
    };
    GroupSettlementPage.prototype.showdifferent = function (type) {
        this.showtype = type;
        this.show();
    };
    GroupSettlementPage.prototype.chose = function (number, item) {
        this.switchNum2 = number;
        this.stepnum = 1;
        this.chosepont = item;
    };
    GroupSettlementPage.prototype.AswitchNum3 = function (i, item) {
        this.switchNum3 = i;
        this.stepnum = 1;
        this.chosetime = item;
        //console.info(item)
    };
    GroupSettlementPage.prototype.confirm = function () {
        this.Load();
        this.hide();
        this.money = 0;
        this.yuenum = false;
        this.gift = 0;
        this.giftnum = false;
    };
    GroupSettlementPage.prototype.getlocationpont = function () {
        var _this = this;
        var Info = {
            FranchiseeID: this.FranchiseeID,
            currentLongitude: this.position.currentLongitude,
            currentLatitude: this.position.currentLatitude,
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parm.jyh = "1123";
        parm.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.shoppont = result.Data;
                _this.chosepont = result.Data[0];
            }
            else {
            }
        });
    };
    //获取当前时间
    GroupSettlementPage.prototype.getdate = function () {
        var myDate = new Date();
        var dateList = [];
        var arr = {};
        arr = { "date": myDate.getDate(), "day": myDate.getDay(), "fulldate": myDate };
        this.chosetime = arr;
        dateList.push(arr);
        for (var a = 0; a < 5; a++) {
            myDate.setDate(myDate.getDate() + 1);
            arr = { "date": myDate.getDate(), "day": myDate.getDay() };
            dateList.push(arr);
        }
        this.dateList = dateList;
    };
    GroupSettlementPage.prototype.modalpush = function () {
        var model = this.modalCtrl.create('GroupBuySuccessPage', {
            Info: this.Groupon,
            picurl: this.picurl
        });
        model.present();
        // model.onDidDismiss(data => {
        //   this.navCtrl.setRoot('TabsPage');
        // })
    };
    GroupSettlementPage.prototype.gotoaddress = function (item, type) {
        var userinfo = [];
        if (type == 2) {
            userinfo = [{ 'type': 2 }, { 'value': item }, { 'userID': this.userInfo.ID }];
        }
        else if (type == 3) {
            userinfo = [{ 'type': 3 }, { 'value': "" }, { 'userID': this.userInfo.ID }];
        }
        ;
        this.navCtrl.push("SetAddressPage", {
            userinfo: userinfo,
        });
    };
    return GroupSettlementPage;
}());
GroupSettlementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-group-settlement',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\group-settlement\group-settlement.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">结算</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#eee;color:#333;">\n  <!-- <page-popup [(flag)]="flag" [(flagsecond)]="flagsecond" [(addresList)]="addresList" [(defaultAddress)]="defaultAddress" [(ordermsg)]="ordermsg"\n    [(FranchiseeID)]="FranchiseeID" [(list)]="list"></page-popup> -->\n  <div class="longback"></div>\n  <div class="address-part" *ngIf="addressflag" tappable (click)="showdifferent(1)">\n    <div>\n      <img [src]="img" alt="">\n    </div>\n    <div *ngIf="defaultAddress!=undefine">\n      <div style="line-height:20px;">{{defaultAddress.username}}：{{defaultAddress.tel}}</div>\n      <div style="margin-top:4px;">{{defaultAddress.address}}</div>\n    </div>\n  </div>\n  <div class="address-part2" *ngIf="!addressflag" tappable (click)="gotoaddress(none,3)">\n    创建地址\n  </div>\n  <div class="pay-type" *ngIf="ishasgood==true">\n    <div class="weixinpay" tappable (click)="(paytype==2)?paytype=3:paytype=2">\n      <div>\n        <img [src]="img2" alt="">\n      </div>\n      <div>微信支付</div>\n      <div>\n        <img *ngIf="paytype==2" [src]="img3" alt="">\n        <img *ngIf="paytype!=2" [src]="img4" alt="">\n      </div>\n    </div>\n    <div class="weixinpay" tappable (click)="(paytype==1)?paytype=3:paytype=1" *ngIf="!isweb">\n      <div>\n        <img [src]="img5" alt="">\n      </div>\n      <div>支付宝</div>\n      <div>\n        <img *ngIf="paytype==1" [src]="img3" alt="">\n        <img *ngIf="paytype!=1" [src]="img4" alt="">\n      </div>\n    </div>\n  </div>\n  <div class="funct-more" tappable (click)="showdifferent(2)">\n    <div>\n      <div>配送方式：\n        <span *ngIf="switchNum==0">快递</span>\n        <span *ngIf="switchNum==1">自提</span>\n      </div>\n      <div></div>\n      <div>\n        <img [src]="img" alt="">\n      </div>\n    </div>\n  </div>\n  <div class="yue" *ngIf="user!=null&&ishasgood==true">\n    <div class="weixinpay" tappable (click)="UseYue()" style="border-bottom:none;">\n      <div>\n        <img [src]="img6" alt="">\n      </div>\n      <div class="yue-item">\n        <div>余额</div>\n        <div>可用余额{{user.Money}}元</div>\n      </div>\n      <div>\n        <img *ngIf="yuenum" [src]="img3" alt="">\n        <img *ngIf="!yuenum" [src]="img4" alt="">\n      </div>\n    </div>\n  </div>\n\n  <div class="translate-type"></div>\n  <span>\n    <div class="coupon" *ngIf="Groupon!=null&&ishasgood==true">\n      <div>\n        <img [src]="picurl" alt="">\n      </div>\n      <div>\n        <div>\n          {{Groupon.ProductName}}\n        </div>\n        <div></div>\n      </div>\n      <div>X{{goodsnum}}</div>\n      <div>{{Groupon.price}}元</div>\n    </div>\n  </span>\n  <div class="groupbuy-num" *ngIf="ishasgood==true">\n    <div>购买数量</div>\n    <div class="changenum">\n      <div tappable (click)="jian()">\n        <img [src]="img7" alt="">\n      </div>\n      <div>{{goodsnum}}</div>\n      <div tappable (click)="jia()">\n        <img [src]="img8" alt="">\n      </div>\n    </div>\n  </div>\n  <div class="money-all" *ngIf="Groupon!=null&&ishasgood==true">\n    <div>商品价格:{{(Groupon.price)*goodsnum}}元</div>\n    <div>配送费用:{{Order.ShipMoney}}元</div>\n    <div *ngIf="Order.Money>0">余额:{{Order.Money}}元</div>\n    <div *ngIf="Order.Gift>0">积分:{{Order.Gift}}</div>\n  </div>\n  <div class="yue" *ngIf="user!=null&&ishasgood==true">\n    <div class="weixinpay" tappable (click)="UseGift()" style="border-bottom:none;">\n      <div>\n        <img [src]="img9" alt="">\n      </div>\n      <div class="yue-item">\n        <div>可用积分{{user.Gift}}</div>\n      </div>\n      <div>\n        <img *ngIf="giftnum" [src]="img3" alt="">\n        <img *ngIf="!giftnum" [src]="img4" alt="">\n      </div>\n    </div>\n  </div>\n  <div style="height:45px;width:100%;"></div>\n  <div class="go-pay" *ngIf="Order!=null&&ishasgood==true">\n    <div>应付金额:{{Order.OrderToatal}}元</div>\n    <div tappable (click)="pay()">去付款</div>\n  </div>\n  <div *ngIf="ishasgood==false" class="msgtitle">\n    {{msg}}\n  </div>\n\n</ion-content>\n<div class="cover" *ngIf="showflag1" [ngClass]="{true:\'goshow\',false:\'gohide\'}[showflag]">\n  <!-- <div class="clickbtn" tappable (click)="hide()"></div> -->\n  <div class="alertpart" [ngClass]="{true:\'goup\',false:\'godown\'}[showflag]">\n    <div *ngIf="showtype==1" class="address-part-alert">\n      <div class="title">\n        <div>收货地址</div>\n        <!-- <div><img [src]="img" alt="" ></div> -->\n      </div>\n      <div class="scroll">\n        <div class="addressitem" tappable (click)="getaddress(item)" *ngFor="let item of addresList;let i=index">\n          <div>{{item.username}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.tel}}</div>\n          <div>{{item.address}}</div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf="showtype==2">\n      <div class="part1" *ngIf="stepnum==1">\n        <div class="delivery-item1">\n          <div [ngClass]="{true:\'color-deliver\',false:\'nocolor-deliver\'}[switchNum==0]" tappable (click)="switchNum=0">快递</div>\n          <div [ngClass]="{true:\'color-deliver\',false:\'nocolor-deliver\'}[switchNum==1]" tappable (click)="switchNum=1">上门自提</div>\n        </div>\n        <div *ngIf="switchNum==0" class="delivery-item2" style="border:none;"></div>\n        <div *ngIf="switchNum==0" class="delivery-item3" style="border:none;"></div>\n        <div *ngIf="switchNum==1" class="delivery-item2" tappable (click)="stepnum=2">\n          <div>自提地点</div>\n          <div class="delivery-item-name">\n            <div>{{chosepont.Name}}</div>\n            <img [src]="img" alt="">\n          </div>\n        </div>\n        <div *ngIf="switchNum==1" class="delivery-item3" tappable (click)="stepnum=3">\n          <div>自提时间</div>\n          <div class="delivery-item-name">\n            <div>\n              <div>{{chosetime.date}}日(周\n                <span *ngIf="chosetime.day==1">一</span>\n                <span *ngIf="chosetime.day==2">二</span>\n                <span *ngIf="chosetime.day==3">三</span>\n                <span *ngIf="chosetime.day==4">四</span>\n                <span *ngIf="chosetime.day==5">五</span>\n                <span *ngIf="chosetime.day==6">六</span>\n                <span *ngIf="chosetime.day==0">日</span>)</div>\n            </div>\n            <img [src]="img" alt="">\n          </div>\n        </div>\n        <div class="delivery-item4" tappable (click)="confirm()">确认</div>\n      </div>\n      <div class="part2" *ngIf="stepnum==2">\n        <div class="address-item" tappable (click)="chose(i,item)" *ngFor="let item of shoppont ;let i=index">\n          <div class="address-item1" [ngClass]="{true:\'color3\',false:\'nocolor3\'}[switchNum2==i]">{{item.Name}}</div>\n          <div class="address-item2">\n            <div class="address-item2-line1">{{item.shopaddress}}</div>\n            <div class="address-item2-line2">\n              <img *ngIf="switchNum2==i" [src]="img10" alt="">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="part2" *ngIf="stepnum==3">\n        <div class="time-list" *ngFor="let item of dateList ;let i=index" tappable (click)="AswitchNum3(i,item)">\n          <div>{{item.date}}日(周\n            <span *ngIf="item.day==1">一</span>\n            <span *ngIf="item.day==2">二</span>\n            <span *ngIf="item.day==3">三</span>\n            <span *ngIf="item.day==4">四</span>\n            <span *ngIf="item.day==5">五</span>\n            <span *ngIf="item.day==6">六</span>\n            <span *ngIf="item.day==0">日</span>)</div>\n          <div style="width:1.5rem;height:1.5rem;">\n            <img *ngIf="switchNum3==i" class="choseimg" [src]="img7" alt="">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\group-settlement\group-settlement.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"]])
], GroupSettlementPage);

//# sourceMappingURL=group-settlement.js.map

/***/ })

});
//# sourceMappingURL=4.js.map?v=107