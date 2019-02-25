webpackJsonp([128],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnWaitPageModule", function() { return ReturnWaitPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__return_wait__ = __webpack_require__(804);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReturnWaitPageModule = (function () {
    function ReturnWaitPageModule() {
    }
    return ReturnWaitPageModule;
}());
ReturnWaitPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__return_wait__["a" /* ReturnWaitPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__return_wait__["a" /* ReturnWaitPage */]),
        ],
    })
], ReturnWaitPageModule);

//# sourceMappingURL=return-wait.module.js.map

/***/ }),

/***/ 804:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnWaitPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the ReturnWaitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReturnWaitPage = (function () {
    function ReturnWaitPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.img = "assets/imgs/temporary/logo.png";
        this.dizhi = "assets/imgs/dizhi.png";
        this.img5 = "assets/imgs/jinru--hui.png";
        this.goods = "assets/imgs/temporary/3.png";
        this.type = 1;
        this.goodsNsg = this.navParams.get("item");
    }
    ReturnWaitPage.prototype.ionViewDidLoad = function () {
    };
    return ReturnWaitPage;
}());
ReturnWaitPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-return-wait',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\return-wait\return-wait.html"*/'<ion-header style="height: 44px;">\n  <ion-navbar mode="ios" style="height: 44px;">\n    <ion-title mode="ios">退款详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n  <div class="order-status">\n    请等待商家处理\n  </div>\n  <div class="new_order_item1" *ngIf="goodsNsg!=undefined">\n    <div class="new_order_item_title">\n      您已成功发去退款申请，请耐心等待商家处理\n    </div>\n    <div class="new_order_item_address" style="border:none;height:4rem;">\n      <div class="return_address_chose1">\n        <div class="pont"></div>\n      </div>\n      <div class="return_address_chose2">\n        商家同意后，请按照给出的退货地址退货，并请记录货运单号\n      </div>\n    </div>\n    <div class="new_order_item_address" style="border:none;height:4rem;">\n      <div class="return_address_chose1">\n        <div class="pont"></div>\n      </div>\n      <div class="return_address_chose2">\n        如商家拒绝，您可以修改申请后再次发起，商家会重新处理\n      </div>\n    </div>\n    <div class="return_change_status">\n      <div class="return_change_btn" [ngClass]="{true:\'bordercolor\',false:\'\'}[type==1]">撤销申请</div>\n      <!-- <div class="return_change_btn" [ngClass]="{true:\'bordercolor\',false:\'\'}[type==2]">修改订单</div> -->\n    </div>\n  </div>\n  <div class="return_money" *ngIf="goodsNsg!=undefined" >\n    <div style="width:100%;height:2rem;line-height: 2rem;">退款信息</div>\n    <div class="return_goods_msg">\n      <div class="return_goods_msg_left">\n        <img [src]="goodsNsg.PicUrl" alt="">\n      </div>\n      <div class="return_goods_msg_right">\n        <div class="detail_msg">{{goodsNsg.ProductName}}</div>\n        <div style="color:#999">\n          <span style="margin-right:10px;">价格:{{goodsNsg.RefundMoney.toFixed(2)}}</span>\n          <span>数量:x1</span>\n        </div>\n      </div>\n    </div>\n    <div class="return_money_moremsg">\n      <div class="return_money_moremsg1">申请原因：</div>\n      <div class="return_money_moremsg2">{{goodsNsg.RefundReason}}</div>\n    </div>\n    <div class="return_money_moremsg">\n      <div class="return_money_moremsg1">申请件数：</div>\n      <div class="return_money_moremsg2">1</div>\n    </div>\n    <div class="return_money_moremsg">\n      <div class="return_money_moremsg1">申请时间：</div>\n      <div class="return_money_moremsg2">{{goodsNsg.CreateTime.split("T")[0]}}</div>\n    </div>\n    <!-- <div class="return_money_moremsg">\n      <div class="return_money_moremsg1">服务单号：</div>\n      <div class="return_money_moremsg2">12312312312</div>\n    </div> -->\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\return-wait\return-wait.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], ReturnWaitPage);

//# sourceMappingURL=return-wait.js.map

/***/ })

});
//# sourceMappingURL=128.js.map?v=107