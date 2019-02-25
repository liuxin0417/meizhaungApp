webpackJsonp([13,93],{

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

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionPageModule", function() { return CollectionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collection__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componnets_popup_popup_module__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CollectionPageModule = (function () {
    function CollectionPageModule() {
    }
    return CollectionPageModule;
}());
CollectionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__collection__["a" /* CollectionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__collection__["a" /* CollectionPage */]),
            __WEBPACK_IMPORTED_MODULE_3__componnets_popup_popup_module__["PopupPageModule"]
        ],
    })
], CollectionPageModule);

//# sourceMappingURL=collection.module.js.map

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

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__ = __webpack_require__(292);
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
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CollectionPage = (function () {
    function CollectionPage(navCtrl, navParams, httpService, nativeService, 
        //private storage: Storage,
        Inservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.Inservice = Inservice;
        this.img = "assets/imgs/temporary/logo.png";
        this.list = [];
        this.img2 = "assets/imgs/DIANPU.png";
        this.img3 = "assets/imgs/gouwuche.png";
        this.img4 = "assets/imgs/search.png";
        this.img5 = "assets/imgs/DIANPU.png";
        this.img6 = "assets/imgs/vhjekan.png";
        this.indexnum = "0";
        this.padding = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["e" /* Padding */]();
        this.isshow = true;
        this.userID = this.navParams.get("userID");
        this.load();
    }
    CollectionPage.prototype.ionViewDidLoad = function () {
    };
    CollectionPage.prototype.gotogoodscar = function () {
        this.navCtrl.push("GoodscarPage", {
            type: 1,
        });
    };
    CollectionPage.prototype.load = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        //console.log(userInfo)
        ////console.info(userInfo)
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1021";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                //this.nativeService.showToast(result.Msg);
                _this.list = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    //删除收藏
    CollectionPage.prototype.delete = function (ID, index) {
        var _this = this;
        var userInfo = {
            Userid: this.userID,
            FranchiseeID: "",
            goodsID: ID,
        };
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1020";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result)
            if (result.Code == 1) {
                _this.nativeService.showToast(result.Msg);
                _this.list.splice(index, 1);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    //跳转
    CollectionPage.prototype.gotodetail = function (id) {
        this.navCtrl.push("GoodDetailPage", {
            goodsid: id,
        });
    };
    CollectionPage.prototype.slice = function (string) {
        return string.slice(0, 15) + "...";
    };
    CollectionPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        /* infiniteScroll.enable(true); */
        ////console.info("运行了下拉加载");
        if (this.list.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parm.jyh = "1021";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            setTimeout(function () {
                var newList;
                var msg = JSON.parse(newData.result);
                newList = msg.Data;
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.list.push(newList[i]);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                infiniteScroll.complete();
            }, 1000);
        });
    };
    return CollectionPage;
}());
CollectionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-collection',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\collection\collection.html"*/'<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">我的收藏</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <!-- <img [src]="img4" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt=""> -->\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button icon-only tappable (click)="gotogoodscar()">\n        <img [src]="img3" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="list==\'\'">\n    <div class="listnone">\n      <img src="assets/imgs/logo2.png" style="margin:5px 35%;" alt="">\n      <div class="xiaoyu">您还没有收藏的商品，不如去逛逛~</div>\n    </div>\n  </div>\n  <div class="list-item" *ngFor="let item of list ; let i=index">\n    <div tappable (click)="gotodetail(item.ID)"></div>\n    <div class="list-style">\n      <div tappable (click)="gotodetail(item.ID)">\n        <img [src]="item.PicUrl" alt="">\n      </div>\n      <div >\n        <div class="collect_name" tappable (click)="gotodetail(item.ID)">{{item.Name}}</div>\n        <div  class="new_collect_item" style="width:100%;color:#a0a0a0">\n          <div>\n            <img style="width:15px;height:15px;margin-right:10px;" [src]="img5" alt="">\n            <span style="display:block;">{{item.ShopName}}</span>\n          </div>\n          <div tappable (click)="delete(item.ID,i)">\n            删除\n            <!-- <img style="width:10px;margin-right:8px;" [src]="img6" alt="">\n            <span>1150</span> -->\n          </div>\n        </div>\n      </div>\n      <!-- <div>\n        <div class="selectbtn"></div>\n        <div style="width:100%;height:27px;" class="selectbtn"></div>\n        <div class="selectbtn" tappable (click)="delete(item.FranchiseeID,item.goodsguid,i)">删除</div>\n      </div> -->\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  <page-popup [(flag)]="flag"></page-popup>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\collection\collection.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__["a" /* InfiniteScrollService */]])
], CollectionPage);

//# sourceMappingURL=collection.js.map

/***/ })

});
//# sourceMappingURL=13.js.map?v=107