webpackJsonp([132],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnFailPageModule", function() { return ReturnFailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__return_fail__ = __webpack_require__(798);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReturnFailPageModule = (function () {
    function ReturnFailPageModule() {
    }
    return ReturnFailPageModule;
}());
ReturnFailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__return_fail__["a" /* ReturnFailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__return_fail__["a" /* ReturnFailPage */]),
        ],
    })
], ReturnFailPageModule);

//# sourceMappingURL=return-fail.module.js.map

/***/ }),

/***/ 798:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnFailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Model__ = __webpack_require__(143);
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
 * Generated class for the ReturnFailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReturnFailPage = (function () {
    function ReturnFailPage(navCtrl, navParams, storage, nativeService, httpService, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.nativeService = nativeService;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.img = "assets/imgs/temporary/logo.png";
        this.dizhi = "assets/imgs/dizhi.png";
        this.img5 = "assets/imgs/jinru--hui.png";
        this.goods = "assets/imgs/temporary/3.png";
        this.orderNum = "";
        this.typeName = "";
        this.shipName = "";
        this.shipNum = "";
        this.goodsNsg = this.navParams.get("item");
        this.GetSysAddress();
    }
    ReturnFailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userInfo = val.userinform;
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
    };
    ReturnFailPage.prototype.GetSysAddress = function () {
        var _this = this;
        var userInfo = {
            ID: this.goodsNsg.ID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1156";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            console.log(result);
            if (result.Code == 1) {
                _this.addressInfo = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    ReturnFailPage.prototype.subMsg = function () {
        var _this = this;
        if (this.shipNum == "") {
            this.nativeService.showToast("运单号不能为空");
            return;
        }
        if (this.shipName == "") {
            this.nativeService.showToast("快递公司不能为空");
            return;
        }
        var userInfo = {
            ID: this.goodsNsg.ID,
            ShipNo: this.shipNum,
            ShipName: this.shipName,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1155";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            console.log(result);
            if (result.Code == 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    ReturnFailPage.prototype.returntype = function () {
        var _this = this;
        var modal = this.modalCtrl.create('ReturnTypeListPage');
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.typeName = data;
            }
            else {
            }
        });
    };
    ReturnFailPage.prototype.shownum = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '请输入您的快递单号',
            inputs: [
                {
                    name: 'order',
                    placeholder: '填写快递单号'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        //console.info(data)
                        _this.orderNum = data.order;
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    return ReturnFailPage;
}());
ReturnFailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-return-fail',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\return-fail\return-fail.html"*/'<!--\n  Generated template for the ReturnFailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="height: 44px;">\n\n  <ion-navbar mode="ios" style="height: 44px;">\n    <ion-title mode="ios">退款详情</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content style="background:#f7f7f7;">\n\n  <div class="return_money">\n    <div style="width:100%;height:2rem;line-height: 2rem;">退款信息</div>\n    <div class="return_goods_msg">\n      <div class="return_goods_msg_left">\n        <img [src]="goodsNsg.PicUrl" alt="">\n      </div>\n      <div class="return_goods_msg_right">\n        <div class="detail_msg">{{goodsNsg.ProductName}}</div>\n        <div style="color:#999">\n          <span style="margin-right:10px;">退款:{{goodsNsg.RefundMoney}}</span>\n          <span>数量:x1</span>\n        </div>\n      </div>\n    </div>\n    <div class="return_money_moremsg">\n      <div class="return_money_moremsg1">申请原因：</div>\n      <div class="return_money_moremsg2">{{goodsNsg.RefundReason}}</div>\n    </div>\n    <div class="return_money_moremsg">\n      <div class="return_money_moremsg1">申请件数：</div>\n      <div class="return_money_moremsg2">1</div>\n    </div>\n    <div class="return_money_moremsg">\n      <div class="return_money_moremsg1">申请时间：</div>\n      <div class="return_money_moremsg2">{{goodsNsg.CreateTime}}</div>\n    </div>\n  </div>\n  <div class="noPass">\n    <div style="width:25%;">不通过原因:</div>\n    <div style="width:75%;padding:6px;">{{goodsNsg.ReviewRemark}}</div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\return-fail\return-fail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], ReturnFailPage);

//# sourceMappingURL=return-fail.js.map

/***/ })

});
//# sourceMappingURL=132.js.map?v=107