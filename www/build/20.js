webpackJsonp([20],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockManagePageModule", function() { return StockManagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_manage__ = __webpack_require__(812);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StockManagePageModule = (function () {
    function StockManagePageModule() {
    }
    return StockManagePageModule;
}());
StockManagePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__stock_manage__["a" /* StockManagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__stock_manage__["a" /* StockManagePage */]),
        ],
    })
], StockManagePageModule);

//# sourceMappingURL=stock-manage.module.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockManagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(86);
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
 * Generated class for the StockManagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StockManagePage = (function () {
    function StockManagePage(navCtrl, navParams, nativeService, httpService, cd) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativeService = nativeService;
        this.httpService = httpService;
        this.cd = cd;
        this.code = "assets/imgs/code2.png";
    }
    StockManagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StockManagePage');
    };
    //扫码
    StockManagePage.prototype.QRcode = function () {
        // this.sendSKU('6903148271308');
        // return;
        if (this.nativeService.isWeiXinPub()) {
        }
        else {
            this.nativeService.showToast("请在微信中使用扫码功能");
            return;
        }
        var that = this;
        wx.scanQRCode({
            desc: 'scanQRCode desc',
            needResult: 1,
            scanType: ["qrCode", "barCode"],
            success: function (res) {
                //  alert(res.resultStr);
                if (res.resultStr.indexOf("http") != -1) {
                    that.nativeService.showToast("请扫描正确条码");
                    return;
                }
                else {
                    // alert("错误")
                }
                if (res.resultStr.indexOf(",") != -1) {
                    that.sendSKU(res.resultStr.split(",")[1]);
                }
                else {
                    that.sendSKU(res.resultStr);
                }
            },
            error: function (res) {
                if (res.errMsg.indexOf('function_not_exist') > 0) {
                    alert('版本过低请升级');
                }
            }
        });
    };
    StockManagePage.prototype.sendSKU = function (item) {
        var _this = this;
        var that = this;
        var userInfo = {
            SKU: item
        };
        console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "2008";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.msg = [];
                result.Data.sku = item;
                // alert("完成");
                that.msg.push(result.Data);
                _this.cd.detectChanges();
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    StockManagePage.prototype.savemsg = function () {
        var _this = this;
        var userInfo = {
            ID: this.msg[0].ID,
            Inventory: this.msg[0].Inventory
        };
        console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "2009";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            console.info(result);
            if (result.Code == "1") {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    return StockManagePage;
}());
StockManagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-stock-manage',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\stock-manage\stock-manage.html"*/'<!--\n  Generated template for the StockManagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title>库存管理</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background:#eeeeee">\n  <div class="goodsMsg" *ngFor="let item of msg"  >\n    <div class="goodsDeatil">\n      <div class="goodsTitle">sku码：</div>\n      <div class="goodsContent">{{item.sku}}</div>\n    </div>\n    <div class="goodsDeatil">\n      <div class="goodsTitle">名称：</div>\n      <div class="goodsContent">{{item.Name}}</div>\n    </div>\n    <div class="goodsDeatil">\n      <div class="goodsTitle">数量：</div>\n      <input class="numInput" type="number" [(ngModel)]="item.Inventory"  placeholder="请填写数量">\n      <!-- <div class="goodsContent">面膜</div> -->\n    </div>\n    <div class="saveBtn" tappable (click)="savemsg()">\n      保存\n    </div>\n  </div>\n  <div *ngIf="!msg" style="height:200px;line-height: 200px;width:100%;color:#999;text-align: center">暂无信息</div>\n  <img class="codeImg" tappable (click)="QRcode()" [src]="code" alt="">\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\stock-manage\stock-manage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
], StockManagePage);

//# sourceMappingURL=stock-manage.js.map

/***/ })

});
//# sourceMappingURL=20.js.map?v=107