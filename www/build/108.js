webpackJsonp([108,190],{

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

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnTypePageModule", function() { return ReturnTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__return_type__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componnets_popup_popup_module__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReturnTypePageModule = (function () {
    function ReturnTypePageModule() {
    }
    return ReturnTypePageModule;
}());
ReturnTypePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__return_type__["a" /* ReturnTypePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__return_type__["a" /* ReturnTypePage */]),
            __WEBPACK_IMPORTED_MODULE_3__componnets_popup_popup_module__["PopupPageModule"],
        ],
    })
], ReturnTypePageModule);

//# sourceMappingURL=return-type.module.js.map

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

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_Constants__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ReturnTypePage = (function () {
    // @ViewChild('myInput') input;
    function ReturnTypePage(navCtrl, navParams, httpService, nativeService, storage, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.img = "assets/imgs/temporary/logo.png";
        this.img2 = "assets/imgs/tuikuan2.png";
        this.img3 = "assets/imgs/tuihuo.png";
        this.img4 = "assets/imgs/huanhuo.png";
        this.img5 = "assets/imgs/jinru--hui.png";
        this.img6 = "assets/imgs/new/genduo2.png";
        this.dizhi = "assets/imgs/dizhi.png";
        this.type = 1;
        this.goods = "assets/imgs/temporary/3.png";
        this.xiangji = "assets/imgs/xiangji.png";
        this.img16 = "assets/imgs/chose.png";
        this.RefundDescript = "";
        this.showflag = false;
        this.showflag1 = false;
        this.btnshowflag = true;
        this.IDUrl = "";
        this.resonType = [{ "DText": "不想要了", "isCheck": false }, { "DText": "买错了", "isCheck": false }, { "DText": "没收到货", "isCheck": false }, { "DText": "与说明不服", "isCheck": false },];
        this.flag = false;
        this.flagsecond = false;
        this.addresList = [];
        this.returntype = 1;
        this.returnreson = '';
        this.resionNum = 0;
        this.max = 6;
        // private localIds = [];
        this.serverIds = [];
        // private isweb = false;
        this.allowDelete = true;
        this.len = 0;
        this.imgUrl = [];
        this.WimgUrl = [];
        this.item = navParams.get("item");
        //console.info(this.item);
        this.login();
        this.list = { "ID": "3028a68e-94e1-453f-bea2-89190d6fece7", "AttrName": "" };
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userInfo = val.userinform;
                    _this.FranchiseeID = "val.address.FranchiseeID";
                    _this.loginaddress();
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
    }
    ReturnTypePage.prototype.ionViewDidLoad = function () {
        // this.login();
        // this.login2();
        //console.info(this.item);
        this.getreson();
    };
    ReturnTypePage.prototype.wait = function () {
        this.navCtrl.push("ReturnWaitPage");
    };
    ReturnTypePage.prototype.login = function () {
        var _this = this;
        var userInfo = {
            OrderItemID: this.item.itemID,
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1151";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                _this.btnshowflag = true;
            }
            else if (result.Code == 2) {
                _this.btnshowflag = false;
                _this.type = result.Data.RefundType;
                _this.returnreson = result.Data.RefundReason;
                _this.RefundDescript = result.Data.RefundDescript;
            }
            else {
            }
        });
    };
    ReturnTypePage.prototype.savelogin = function () {
        var _this = this;
        var typename = "";
        if (this.type == 1) {
            typename = "退货";
        }
        else if (this.type == 2) {
            typename = "换货";
        }
        if (this.returnreson == '') {
            this.nativeService.showToast("请选择退换原因");
            return;
        }
        else {
        }
        var userInfo = {
            OrderItemID: this.item.itemID,
            ProID: this.item.ProductID,
            RefundType: typename,
            RefundReason: this.returnreson,
            RefundDescript: this.RefundDescript,
            file: this.imgUrl,
            UserID: this.userInfo.ID,
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1150";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                _this.btnshowflag = false;
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    ReturnTypePage.prototype.login2 = function () {
        var _this = this;
        var userInfo = "";
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1106";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
            }
            else {
            }
        });
    };
    ReturnTypePage.prototype.gotogoods = function (type, newtype) {
        this.navCtrl.push("ReturnReasonPage", {
            item: this.item,
            type: type,
            newtype: newtype
        });
    };
    ReturnTypePage.prototype.getreson = function () {
        var _this = this;
        var userInfo = "";
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1158";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.resonType = result.Data;
            }
            else {
            }
        });
    };
    ReturnTypePage.prototype.hide = function () {
        var that = this;
        this.showflag = false;
        setTimeout(function () {
            that.showflag1 = false;
        }, 150);
    };
    ReturnTypePage.prototype.show = function () {
        //var that = this;
        if (this.btnshowflag) {
            this.showflag1 = true;
            this.showflag = true;
        }
        else {
        }
    };
    ReturnTypePage.prototype.CheckReason = function (item, num) {
        // for (var i = 0; i < this.resonType.length; i++) {
        //   this.resonType[i].isCheck = false;
        // }
        // item.isCheck = true;
        this.checkType = item;
        this.resionNum = num;
        this.SureCheck();
        //console.info(this.checkType);
    };
    ReturnTypePage.prototype.SureCheck = function () {
        var _this = this;
        if (this.checkType == null || this.checkType == "" || this.checkType == undefined) {
            this.nativeService.showToast("请选择退款的类型");
            return;
        }
        this.returnreson = this.checkType;
        this.showflag = false;
        setTimeout(function () {
            _this.showflag1 = false;
        }, 150);
    };
    ReturnTypePage.prototype.alertAddress = function () {
        ////console.info(this.addresList)
        this.flag = true;
        this.flagsecond = true;
    };
    ReturnTypePage.prototype.loginaddress = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userInfo.ID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
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
                        // this.addressflag = false;
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
    ReturnTypePage.prototype.getImg = function () {
        if (!this.nativeService.isMobile()) {
            this.addWxPicture();
        }
    };
    ReturnTypePage.prototype.addWxPicture = function () {
        var that = this;
        wx.chooseImage({
            count: that.max - that.len,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                var localIds = res.localIds;
                that.len = localIds.length; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                // for (var i = 0; i < localIds.length; i++) {
                that.WxUpLoad(localIds);
                // }
                // wx.getLocalImgData({
                //   localId: localIds, // 图片的localID
                //   success: function (res) {
                //     var localData = res.localData;
                //     that.localIds = localData; // localData是图片的base64数据，可以用img标签显示
                //   }
                // });
            }
        });
    };
    ReturnTypePage.prototype.WxUpLoad = function (localIds) {
        var that = this;
        var localId = localIds.pop();
        wx.uploadImage({
            localId: localId,
            success: function (res) {
                var serverId = res.serverId;
                that.serverIds.push(serverId);
                if (localIds.length > 0) {
                    that.WxUpLoad(localIds);
                }
                else {
                    // setTimeout(() => {
                    //   that.input.setFocus();
                    // }, 500);
                }
                that.WxDownLoadImage(serverId);
                // if (that.len == that.serverIds.length) {
                //   that.WxDownLoadImage(serverId);  
                // }
            }
        });
    };
    ReturnTypePage.prototype.WxDownLoadImage = function (serverId) {
        var _this = this;
        this.nativeService.uploadWxFile(serverId).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.WimgUrl.push(__WEBPACK_IMPORTED_MODULE_6__providers_Constants__["f" /* fileViewPath */] + result.Msg);
                _this.imgUrl.push(result.Msg);
            }
        });
    };
    ReturnTypePage.prototype.changetype = function (num) {
        if (this.btnshowflag) {
            this.type = num;
        }
        else {
        }
    };
    ReturnTypePage.prototype.onChange1 = function (event) {
        if (this.imgUrl.length < 6) {
        }
        else {
            this.nativeService.showToast("最多只能上传6张图片");
            return;
        }
        var files = event.target.files;
        var file = files[0];
        var size = files[0].size / 1024 > 1024 ? (~~(10 * files[0].size / 1024 / 1024)) / 10 + "MB" : ~~(files[0].size / 1024) + "KB";
        this.nativeService.showLoading("获取中");
        //console.info("大小" + size)
        //console.info(file);
        if (file == undefined) {
            this.IDUrl = "";
            //console.info("undefiend1")
        }
        else {
            //console.info("undefiend2")
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            var that = this;
            fileReader.onload = function (e) {
                var name;
                name = e.target;
                that.IDUrl = name.result;
                that.imgUrl.push(that.IDUrl);
                // that.takeimg(name.result, 1);
            };
        }
        this.nativeService.hideLoading();
    };
    ReturnTypePage.prototype.deleteWxPicture = function (i) {
        var _this = this;
        if (!this.allowDelete) {
            return;
        }
        this.alertCtrl.create({
            title: '确认删除？',
            buttons: [{ text: '取消' },
                {
                    text: '确定',
                    handler: function () {
                        // this.imgUrl.splice(i, 1);
                        // this.WimgUrl.splice(i, 1);
                        _this.imgUrl.splice(i, 1);
                        // this.len--;
                    }
                }
            ]
        }).present();
    };
    return ReturnTypePage;
}());
ReturnTypePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-return-type',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\return-type\return-type.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">申请售后服务</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#eee;">\n  <div class="return_type">\n    <div class="return_type_title">\n      服务类型\n    </div>\n    <div class="return_type_btn">\n      <div class="return_btn" [ngClass]="{true:\'bordercolor\',false:\'\'}[type==1]" tappable (click)="changetype(1)">退货</div>\n      <div class="return_btn" [ngClass]="{true:\'bordercolor\',false:\'\'}[type==2]" tappable (click)="changetype(2)">换货</div>\n      <!-- <div class="return_btn" [ngClass]="{true:\'bordercolor\',false:\'\'}[type==3]" tappable (click)="type=3">维修</div>\n      <div class="return_btn" [ngClass]="{true:\'bordercolor\',false:\'\'}[type==4]" tappable (click)="type=4">补发商品</div> -->\n    </div>\n  </div>\n  <div class="return_goods_msg">\n    <div class="return_goods_msg_left">\n      <img [src]="item.Url" alt="">\n    </div>\n    <div class="return_goods_msg_right">\n      <div class="detail_msg">{{item.Name}}</div>\n      <div class="detail_msg" *ngIf="item.AttributeDescription" >{{item.AttributeDescription}}</div>\n      <div style="color:#999">\n        <span style="margin-right:10px;">价格:{{item.Price}}</span>\n        <span>数量:x{{item.Quantity}}</span>\n      </div>\n    </div>\n  </div>\n  <div class="return_goods_reson" tappable (click)="show()">\n    <div>申请原因:{{returnreson}}</div>\n    <div class="return_goods_reson_right">\n      <span style="margin-right:10px;" *ngIf="btnshowflag">\n        请选择\n      </span>\n      <img *ngIf="btnshowflag" style="width:1.8rem;height:auto;" [src]="img6" alt="">\n    </div>\n  </div>\n  <div class="return_reson_msg">\n    <div class="return_resMsg_title">问题描述</div>\n    <textarea *ngIf="btnshowflag" class="return_msg_p" [(ngModel)]="RefundDescript">\n    </textarea>\n    <textarea *ngIf="!btnshowflag" disabled="disabled" class="return_msg_p" [(ngModel)]="RefundDescript">\n    </textarea>\n    <div class="return_resMsg_title2">\n      <div *ngFor="let item of imgUrl;let i = index;" class="pictures">\n        <span *ngIf="allowDelete" class="remove" tappable (click)="deleteWxPicture(i)">×</span>\n        <img [src]="item" tappable (click)="viewPicture(item)" />\n      </div>\n      <div class="pictures">\n        <input class="rn_img_input" type="file" (change)="onChange1($event)">\n        <img [src]="xiangji" alt="" *ngIf="imgUrl.length<max">\n      </div>\n      <!-- <img tappable (click)="getImg()" style="width:1.5rem;height:auto;" [src]="xiangji" alt=""> -->\n    </div>\n  </div>\n  <div *ngIf="btnshowflag" class="submit_btn" tappable (click)="savelogin()">\n    提交\n  </div>\n  <!-- <div class="return_way" *ngIf="type!=1">\n    <div class="return_resMsg_title">商品回退方式</div>\n    <div class="return_resMsg_title return_way_btn">\n      <div class="return_btn_detail" [ngClass]="{true:\'bordercolor\',false:\'\'}[returntype==1]" tappable (click)="returntype=1">送货至自提点</div>\n      <div class="return_btn_detail" [ngClass]="{true:\'bordercolor\',false:\'\'}[returntype==2]" tappable (click)="returntype=2">快递至京东</div>\n    </div>\n    <div class="return_type_des">\n      商品寄回地址将在审核通过后以短信形式告知，或在申请记录中查询，商城不收取快递附加费\n    </div>\n  </div>\n  <div class="return_address" *ngIf="type!=1">\n    <div class="return_address_item">\n      <div class="return_address_title">\n        收货人\n      </div>\n      <input type="text" class="return_address_msg">\n    </div>\n    <div class="return_address_item">\n      <div class="return_address_title">\n        手机号码\n      </div>\n      <input type="text" class="return_address_msg">\n    </div>\n    <div class="return_address_item" style="color:#999;border:none;">\n      收货地址(该地址是商城寄回给您的地址)\n    </div>\n    <div class="return_address_chose">\n      <div class="return_address_chose1">\n        <img style="height:1.5rem;width:auto;" [src]="dizhi" alt="">\n      </div>\n      <div class="return_address_chose2" tappable (click)="alertAddress()">\n        山东省烟台市莱山区黄海路街道王广福前301\n      </div>\n      <div class="return_address_chose3">\n        <img style="height:1.2rem;width:auto;" [src]="img5" alt="">\n      </div>\n    </div>\n  </div>\n\n  <div class="return_resMsg_title3" style="color:#999;">\n    提交服务订单后，售后专员会与您电话沟通，请保持手机通畅\n  </div>\n  <div *ngIf="btnshowflag"  class="submit_btn" tappable (click)="savelogin()">\n    提交\n  </div> -->\n  <!-- <div class="list-content">\n    <div class="list-item">\n      <div></div>\n      <div class="list-style">\n        <div>\n          <img [src]="item.Url" alt="">\n        </div>\n        <div>\n          <div>{{item.Name}}</div>\n          <div [innerHTML]="item.AttributeDescription"></div>\n        </div>\n        <div>\n          <div>￥{{item.Price}}</div>\n          <div>X{{item.Quantity}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style="width:100%;height:auto;padding-left:15px;background:#fff;">\n    <div class="returnType1" tappable (click)="gotogoods(0,0)">\n      <div>\n        <img [src]="img2" alt="">\n      </div>\n      <div>仅退款</div>\n      <div>\n        <img [src]="img5" alt="">\n      </div>\n    </div>\n    <div class="returnType2" tappable (click)="gotogoods(1,0)">\n      <div>\n        <img [src]="img3" alt="">\n      </div>\n      <div>退款退货</div>\n      <div>\n        <img [src]="img5" alt="">\n      </div>\n    </div>\n    <div class="returnType2" tappable (click)="gotogoods(2,1)">\n      <div>\n        <img [src]="img4" alt="">\n      </div>\n      <div>换货</div>\n      <div>\n        <img [src]="img5" alt="">\n      </div>\n    </div>\n  </div> -->\n</ion-content>\n<ion-footer>\n  <page-popup [(flag)]="flag" [(flagsecond)]="flagsecond" [(addresList)]="addresList" [(defaultAddress)]="defaultAddress" [(ordermsg)]="ordermsg"\n    [(FranchiseeID)]="FranchiseeID" [(list)]="list"></page-popup>\n  <div class="cover" *ngIf="showflag1" [ngClass]="{true:\'goshow\',false:\'gohide\'}[showflag]">\n    <div class="clickbtn" tappable (click)="hide()"></div>\n    <div class="alertpart2" [ngClass]="{true:\'goup\',false:\'godown\'}[showflag]" style="overflow-y: scroll;">\n      <div class="reasonList" *ngFor="let item of resonType;let i=index" tappable (click)="CheckReason(item,i)">\n        <div>{{item}}</div>\n        <img *ngIf="resionNum==i" [src]="img16" alt="">\n      </div>\n      <div class="reasonBtn" (click)="SureCheck()">确定</div>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\return-type\return-type.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], ReturnTypePage);

//# sourceMappingURL=return-type.js.map

/***/ })

});
//# sourceMappingURL=108.js.map?v=107