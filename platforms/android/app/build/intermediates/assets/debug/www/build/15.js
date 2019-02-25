webpackJsonp([15],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPayPageModule", function() { return OrderPayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_pay__ = __webpack_require__(788);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPayPageModule = (function () {
    function OrderPayPageModule() {
    }
    return OrderPayPageModule;
}());
OrderPayPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order_pay__["a" /* OrderPayPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__order_pay__["a" /* OrderPayPage */]),
        ],
    })
], OrderPayPageModule);

//# sourceMappingURL=order-pay.module.js.map

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

/***/ 788:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_WechatPlugin__ = __webpack_require__(742);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var OrderPayPage = (function () {
    function OrderPayPage(navCtrl, navParams, httpService, app, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.app = app;
        this.nativeService = nativeService;
        this.img2 = "assets/imgs/eixin.png";
        this.img3 = "assets/imgs/chone.png";
        this.img4 = "assets/imgs/unchone.png";
        this.img5 = "assets/imgs/zhifun.png";
        this.fanhui = "assets/imgs/fanhui2.png";
        this.sousuo = "assets/imgs/shousuo.png";
        this.gouwu = "assets/imgs/gouwuche.png";
        this.complte = "assets/imgs/complte.png";
        this.paysuccess = false;
        this.paytype = 2;
        this.isweb = false;
        this.OrderList = this.navParams.get("item");
        this.orderId = this.navParams.get("orderId");
        this.login();
        this.isweb = !this.nativeService.isMobile();
    }
    OrderPayPage.prototype.ionViewDidLoad = function () {
    };
    OrderPayPage.prototype.login = function () {
        var _this = this;
        var userInfo = {
            OrderID: this.orderId,
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1057";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                _this.datalist = result.Data;
            }
            else {
            }
        });
    };
    OrderPayPage.prototype.pay2 = function () {
        var that = this;
        wx.chooseWXPay({
            timestamp: that.datalist.timestamp,
            nonceStr: that.datalist.noncestr,
            package: that.datalist.package,
            signType: that.datalist.signType,
            paySign: that.datalist.sign,
            success: function (res) {
                that.paysuccess = true;
                // if (res.chooseWXPay == "ok") {
                //   that.navCtrl.setRoot("PaySuccessPage", {
                //     Info: that.datalist.OrderOrlTotal
                //   });
                // }
                // 支付成功后的回调函数
            }
        });
    };
    OrderPayPage.prototype.pay = function () {
        var _this = this;
        var userInfo = {
            OrderID: this.orderId,
            PayType: this.paytype,
            isweb: this.isweb ? 1 : 0
        };
        var that = this;
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1058";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                if (_this.paytype == 1) {
                    /**处理支付宝逻辑 */
                    _this.nativeService.hideLoading();
                    AliPay.pay(result.Msg, function (success) {
                        var msg = JSON.parse(success.result);
                        if (msg.alipay_trade_app_pay_response.msg == "Success") {
                            _this.nativeService.showToast("支付订单成功");
                            _this.navCtrl.setRoot("PaySuccessPage", {
                                Info: that.datalist.OrderOrlTotal
                            });
                        }
                    }, function (error) {
                    });
                }
                else {
                    /*处理微信逻辑 */
                    var data = result.Data;
                    //console.info("微信支付")
                    if (_this.isweb) {
                        _this.nativeService.hideLoading();
                        /**微信内部 */
                        wx.chooseWXPay({
                            timestamp: data.timestamp,
                            nonceStr: data.noncestr,
                            package: data.package,
                            signType: data.signType,
                            paySign: data.sign,
                            success: function (res) {
                                that.paysuccess = true;
                                if (res.chooseWXPay == "ok") {
                                    // that.navCtrl.setRoot("PaySuccessPage", {
                                    //   Info: that.datalist.OrderOrlTotal
                                    // });
                                }
                                // 支付成功后的回调函数
                            }
                        });
                    }
                    else {
                        _this.nativeService.hideLoading();
                        __WEBPACK_IMPORTED_MODULE_5__providers_WechatPlugin__["a" /* WechatPlugin */].sendPaymentRequest(data).then(function (result) {
                            _this.navCtrl.setRoot("PaySuccessPage", {
                                Info: that.datalist.OrderOrlTotal
                            });
                        }, function (error) {
                            _this.nativeService.showToast(error);
                        });
                    }
                }
            }
            else if (result.Code == 2) {
                _this.nativeService.hideLoading();
                _this.navCtrl.setRoot("PaySuccessPage", {
                    Info: that.datalist.OrderOrlTotal
                });
            }
            else {
                _this.nativeService.hideLoading();
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    //回到首页
    OrderPayPage.prototype.gotohome = function () {
        this.app.getRootNav().setRoot('TabsPage');
    };
    //查看订单
    OrderPayPage.prototype.gotoOrderList = function () {
        this.navCtrl.push("OrderListPage", {
            type: 0,
        });
    };
    return OrderPayPage;
}());
OrderPayPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-pay',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\order-pay\order-pay.html"*/'<!--\n  Generated template for the OrderPayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">去付款</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n  <div *ngIf="datalist!=undefined&&!paysuccess">\n    <div class="orderitem" *ngFor="let item of OrderList.Items">\n      <div class="orderimg">\n        <img [src]="item.Url" alt="">\n      </div>\n      <div class="coupon">\n        <div>\n          <div>{{item.Name}}</div>\n        </div>\n        <div [innerHTML]="item.AttributeDescription"></div>\n        <div>{{item.Price}}元&nbsp;&nbsp;X&nbsp;&nbsp;{{item.Quantity}}</div>\n        <!-- <div>{{item.Quantity*item.Price}}元</div> -->\n      </div>\n    </div>\n    <div class="pay-type">\n      <div class="weixinpay" tappable (click)="paytype=2">\n        <div>\n          <img [src]="img2" alt="">\n        </div>\n        <div>微信支付</div>\n        <div>\n          <img *ngIf="paytype==2" [src]="img3" alt="">\n          <img *ngIf="paytype!=2" [src]="img4" alt="">\n        </div>\n      </div>\n      <div class="weixinpay" tappable (click)="paytype=1" style="border-bottom:none;" *ngIf="!isweb">\n        <div>\n          <img [src]="img5" alt="">\n        </div>\n        <div>支付宝</div>\n        <div>\n          <img *ngIf="paytype==1" [src]="img3" alt="">\n          <img *ngIf="paytype!=1" [src]="img4" alt="">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="pay_success_cover" *ngIf="datalist!=undefined&&paysuccess" >\n    <div class="nav_part">\n      <img style="height: 1.8rem;width:auto;" tappable (click)="gopop()" [src]="fanhui" alt="">\n      <div style="text-align: center;\n      font-size: 1.7rem;\n      font-weight: 100;\n      color: #000;\n      pointer-events: auto;">付款成功</div>\n      <div>\n        <img style="height:2rem;width:auto;margin-right:1.2rem" [src]="gouwu" alt="">\n        <img style="height:2rem;width:auto;" [src]="sousuo" alt="">\n      </div>\n    </div>\n    <div class="pay_success_status">\n      <img style="margin-right:10px;height:2.5rem;width:auto;" [src]="complte" alt="">\n      <div class="pay_status_msg">\n        <span>\n          付款成功\n        </span>\n        <span>\n          请耐心等待收货\n        </span>\n      </div>\n    </div>\n    \n    <div class="pay_success_msg">\n      <div class="pay_success_msg_item">\n        <span style="color:#999">合计:</span>\n        <span class="changecolor">￥{{datalist.PayMoney.toFixed(2)}}</span>\n      </div>\n    </div>\n    <div class="pay_success_btn">\n      <div (click)="gotoOrderList()">查看订单</div>\n      <div (click)="gotohome()">继续购物</div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer style="height:42px;">\n  <div *ngIf="datalist!=undefined&&!paysuccess" class="go-pay">\n    <div>应付金额:{{datalist.PayMoney}}元</div>\n    <div tappable (click)="pay2()">去付款</div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\order-pay\order-pay.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */]])
], OrderPayPage);

//# sourceMappingURL=order-pay.js.map

/***/ })

});
//# sourceMappingURL=15.js.map?v=107