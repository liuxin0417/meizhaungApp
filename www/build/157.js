webpackJsonp([157],{

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteFriendsPageModule", function() { return InviteFriendsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invite_friends__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InviteFriendsPageModule = (function () {
    function InviteFriendsPageModule() {
    }
    return InviteFriendsPageModule;
}());
InviteFriendsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__invite_friends__["a" /* InviteFriendsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__invite_friends__["a" /* InviteFriendsPage */]),
        ],
    })
], InviteFriendsPageModule);

//# sourceMappingURL=invite-friends.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InviteFriendsPage; });
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
 * Generated class for the InviteFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InviteFriendsPage = (function () {
    function InviteFriendsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.img3 = "assets/imgs/gouwuche.png";
        this.img4 = "assets/imgs/search.png";
        this.img2 = "assets/imgs/jinru--hui.png";
        this.imgqq = "assets/imgs/qq.png";
        this.imgkongjian = "assets/imgs/qqkongjian.png";
        this.imgweixin = "assets/imgs/weixin.png";
        this.imgquan = "assets/imgs/weixinquan.png";
        this.slidepart = false;
        this.coverpart = false;
    }
    InviteFriendsPage.prototype.ionViewDidLoad = function () {
    };
    InviteFriendsPage.prototype.goshow = function () {
        this.coverpart = true;
        this.slidepart = true;
    };
    InviteFriendsPage.prototype.gohide = function () {
        var that = this;
        this.slidepart = false;
        setTimeout(function () {
            that.coverpart = false;
        }, 150);
    };
    InviteFriendsPage.prototype.gotosuccess = function () {
        this.navCtrl.push("GroupBuySuccessPage");
    };
    return InviteFriendsPage;
}());
InviteFriendsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-invite-friends',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\invite-friends\invite-friends.html"*/'<!--\n  Generated template for the InviteFriendsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header  style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">商品订单</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only>\n        <img [src]="img4" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n    <ion-buttons right>\n      <button ion-button icon-only tappable (click)="gotogoodscar()">\n        <img [src]="img3" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n  <div class="invite-item1">\n    <div>23:59:45</div>\n  </div>\n  <div class="invite-item2">\n    还差1人，赶紧邀请好友来拼单吧\n  </div>\n  <div class="invite-item3">\n    <div tappable (click)="goshow()">邀请好友拼单</div>\n  </div>\n  <div class="invite-item4">\n    <div>回到首页</div>\n  </div>\n  <div style="width:100%;background:#fff;">\n    <div class="invite-item5">\n      <div class="pinzhu">\n        <div class="pinzhu-name">拼主</div>\n        <img [src]="img1" alt="">\n      </div>\n      <div class="pinzhu">\n        <img [src]="img1" alt="">\n      </div>\n    </div>\n  </div>\n  <div class="invite-item6">\n    <div style="border-bottom:1px solid #e5e5e5">\n      <div style="font-weight:900;">商品名称</div>\n      <div class="goods-name">\n        <div>可心柔V9润+宝贝系列抽...</div>\n        <img class="img-goto" [src]="img2" alt="">\n      </div>\n    </div>\n  </div>\n  <div class="invite-item7">\n    <div>\n      <div style="font-weight:900;">拼单须知</div>\n      <div class="goods-name goods-name-width">\n        <div>\n          <div class="circle-black"></div>\n          好友拼单\n        </div>\n        <div>\n          <div class="circle-black"></div>\n          人满发货\n        </div>\n        <div>\n          <div class="circle-black"></div>\n          人不满退款\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<div class="cover" *ngIf="coverpart" [ngClass]="{true:\'goshow\',false:\'gohide\'}[slidepart]">\n  <div class="hidepart" tappable (click)="gohide()"></div>\n  <div class="slidePart" [ngClass]="{true:\'goLeft\',false:\'goRight\'}[slidepart]">\n    <div class=\'cover-title\'>\n      <div class="midline"></div>\n      <div class="mide-text">分享到</div>\n      <div class="midline"></div>\n    </div>\n    <div class="share-btn">\n      <div class="sharebtn" tappable (click)="gotosuccess()">\n        <img [src]="imgqq" alt="">\n        <div>QQ好友</div>\n      </div>\n      <div class="sharebtn">\n        <img [src]="imgkongjian" alt="">\n        <div>QQ空间</div>\n      </div>\n      <div class="sharebtn">\n        <img [src]="imgweixin" alt="">\n        <div>微信好友</div>\n      </div>\n      <div class="sharebtn">\n        <img [src]="imgquan" alt="">\n        <div>朋友圈</div>\n      </div>\n    </div>\n    <div class="cancle-btn" tappable (click)="gohide()">\n      取消\n    </div>\n  </div>\n</div>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\invite-friends\invite-friends.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], InviteFriendsPage);

//# sourceMappingURL=invite-friends.js.map

/***/ })

});
//# sourceMappingURL=157.js.map?v=107