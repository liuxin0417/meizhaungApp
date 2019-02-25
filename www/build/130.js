webpackJsonp([130],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnSuccessPageModule", function() { return ReturnSuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__return_success__ = __webpack_require__(802);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReturnSuccessPageModule = (function () {
    function ReturnSuccessPageModule() {
    }
    return ReturnSuccessPageModule;
}());
ReturnSuccessPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__return_success__["a" /* ReturnSuccessPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__return_success__["a" /* ReturnSuccessPage */]),
        ],
    })
], ReturnSuccessPageModule);

//# sourceMappingURL=return-success.module.js.map

/***/ }),

/***/ 802:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnSuccessPage; });
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
// import { ImagePicker } from '@ionic-native/image-picker';


/**
 * Generated class for the ReturnSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReturnSuccessPage = (function () {
    function ReturnSuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.img = "assets/imgs/temporary/logo.png";
        this.img2 = 'assets/imgs/jinru--hui.png';
        this.img3 = "assets/imgs/greencircle.png";
        this.img4 = "assets/imgs/green2.png";
        this.chose = "assets/imgs/new/done.png";
        this.notdone = "assets/imgs/new/notdone.png";
        this.line1 = "assets/imgs/new/line1.png";
        this.line2 = "assets/imgs/new/line2.png";
        this.imgno = "assets/imgs/new/yiwancheng.png";
        this.status = 1;
    }
    ReturnSuccessPage.prototype.ionViewDidLoad = function () {
    };
    ReturnSuccessPage.prototype.addstatus = function () {
        this.status++;
    };
    return ReturnSuccessPage;
}());
ReturnSuccessPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-return-success',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\return-success\return-success.html"*/'<!--\n  Generated template for the ReturnSuccessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">退款成功</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background:#f7f7f7;">\n  <div class="order-status">\n    <div>退款成功</div>\n    <div>2017年11月25日 09:21</div>\n  </div>\n  <div class="return_success1">\n    <div class="success_item1">\n      <div>服务单号:\n        <span style="color:#999;">258456</span>\n      </div>\n      <div>申请时间:\n        <span style="color:#999;">2018-03-09</span>\n        <span style="color:#999;">12:20</span>\n      </div>\n    </div>\n    <div class="return_success2">\n      <div class="return_success2_left">已退款</div>\n      <div>$20.02</div>\n    </div>\n    <div class="success_item1">\n      <div style="color:#999">退回至银行卡</div>\n      <div style="color:#999">￥18.21</div>\n    </div>\n    <div class="success_item1">\n      <div style="color:#999">退回至银行卡</div>\n      <div style="color:#999">￥1.21</div>\n    </div>\n    <div class="success_item1">\n      <div style="color:#999">差额原因</div>\n      <div style="color:#999">其他</div>\n    </div>\n    <div class="success_item1" style="justify-content: center;">\n      <div>到账周期说明</div>\n    </div>\n  </div>\n  <div class="return_success1" style="margin-top:1rem;">\n    <div class="return_success_title" style="border:none;">售后进度</div>\n    <div class="return_status">\n      <div class="line_part">\n        <img [src]="line1" *ngIf="status>=1"  alt="">\n        <img [src]="line2" *ngIf="status<1"  alt="">\n        <img [src]="line1" *ngIf="status>=2" alt="">\n        <img [src]="line2" *ngIf="status<2"  alt="">\n        <img [src]="line1" *ngIf="status>=3" alt="">\n        <img [src]="line2" *ngIf="status<3"  alt="">\n      </div>\n      <div class="return_status_item" [ngClass]="{true:\'background:\',false:\'\'}[type==1]" tappable (click)="type=1">\n        <img [src]="chose" *ngIf="status>=1" style="height:1.7rem;width:1.7rem;" alt="">\n        <img [src]="notdone" *ngIf="status<1" style="height:1.7rem;width:1.7rem;" alt="">\n        <div>提交审核</div>\n      </div>\n      <div class="return_status_item">\n        <img [src]="chose" *ngIf="status>=2" style="height:1.7rem;width:1.7rem;" alt="">\n        <img [src]="notdone" *ngIf="status<2" style="height:1.7rem;width:1.7rem;" alt="">\n        <div>商家审核</div>\n      </div>\n      <div class="return_status_item">\n        <img [src]="chose" *ngIf="status>=3" style="height:1.7rem;width:1.7rem;" alt="">\n        <img [src]="notdone" *ngIf="status<3" style="height:1.7rem;width:1.7rem;" alt="">\n        <div>退款</div>\n      </div>\n      <div class="return_status_item">\n        <img class="imgno" *ngIf="status==4"  [src]="imgno" alt="">\n        <img [src]="chose" *ngIf="status>=4" style="height:1.7rem;width:1.7rem;" alt="">\n        <img [src]="notdone" *ngIf="status<4" style="height:1.7rem;width:1.7rem;" alt="">\n        <div>完成</div>\n      </div>\n    </div>\n    <div class="success_item1" style="height:4rem;">\n      <div class="return_status_des" style="color:#999">您的服务单号28565465已提交,请您注意商家答复</div>\n      <div style="color:#999" class="retun_more_btn" tappable (click)="addstatus()">进度详情</div>\n    </div>\n    <div class="success_item1" style="height:4rem;">\n      <div class="return_status_des" style="color:#999"></div>\n      <div style="color:#999" class="retun_more_btn">删除申请</div>\n    </div>\n  </div>\n  <!-- <div class="success-money">\n    <div class="money-item1" style="border-bottom:1px solid #e5e5e5">\n      <div>退款总金额</div>\n      <div style="color:#ff4f4f">￥90.00</div>\n    </div>\n    <div class="money-item1">\n      <div>退回银行卡</div>\n      <div>￥90.00</div>\n    </div>\n  </div>\n  <div class="return-step">\n    <div class="return-step-leavl1">\n      <div class="step-item1">\n        <div class="step-item1-line1">\n          <div class="line1"></div>\n          <img class="greencircle" [src]="img3" alt="">\n          <div class="line1 backgroundcolor"></div>\n        </div>\n        <div class="step-item1-line2">卖家退款</div>\n        <div class="step-item1-line3">2017-1</div>\n      </div>\n      <div class="step-item1">\n        <div class="step-item1-line1">\n          <div class="line1 backgroundcolor"></div>\n          <img class="greencircle" [src]="img3" alt="">\n          <div class="line1 backgroundcolor"></div>\n        </div>\n        <div class="step-item1-line2">卖家退款</div>\n        <div class="step-item1-line3">2017-1</div>\n      </div>\n      <div class="step-item1">\n        <div class="step-item1-line1">\n          <div class="line1 backgroundcolor"></div>\n          <img class="greencircle2" [src]="img4" alt="">\n          <div class="line1"></div>\n        </div>\n        <div class="step-item1-line2">卖家退款</div>\n        <div class="step-item1-line3">2017-1</div>\n      </div>\n    </div>\n  </div>\n  <div class="success-money margin">\n    <div class="money-item1">\n      <div>协商历史</div>\n      <img class="fanhui" [src]="img2" alt="">\n    </div>\n  </div>\n  <div class="success-money">\n    <div class="money-item1">\n      <div>退款信息</div>\n    </div>\n  </div>\n  <div class="list-content">\n    <div class="list-item">\n      <div></div>\n      <div class="list-style">\n        <div>\n          <img [src]="img" alt="">\n        </div>\n        <div>\n          <div>可心柔V9润+宝贝系列抽纸3层120抽，6包整箱两。。。</div>\n          <div>3-5个月</div>\n        </div>\n        <div>\n          <div>￥79.00</div>\n          <div>X1</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="return-bottom-msg">\n    <div>退款原因:退运费</div>\n    <div>退款金额:￥90</div>\n    <div>申请时间:2017-11-25 09:00:21</div>\n    <div>退款编号:54156154165482151</div>\n  </div> -->\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\return-success\return-success.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], ReturnSuccessPage);

//# sourceMappingURL=return-success.js.map

/***/ })

});
//# sourceMappingURL=130.js.map?v=107