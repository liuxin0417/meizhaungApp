webpackJsonp([102,183],{

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserJudgePageModule", function() { return UserJudgePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_judge__ = __webpack_require__(744);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserJudgePageModule = (function () {
    function UserJudgePageModule() {
    }
    return UserJudgePageModule;
}());
UserJudgePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__user_judge__["a" /* UserJudgePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__user_judge__["a" /* UserJudgePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__user_judge__["a" /* UserJudgePage */]
        ]
    })
], UserJudgePageModule);

//# sourceMappingURL=user-judge.module.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JudegePageModule", function() { return JudegePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__judege__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componnets_user_judge_user_judge_module__ = __webpack_require__(649);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JudegePageModule = (function () {
    function JudegePageModule() {
    }
    return JudegePageModule;
}());
JudegePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__judege__["a" /* JudegePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__judege__["a" /* JudegePage */]),
            __WEBPACK_IMPORTED_MODULE_3__componnets_user_judge_user_judge_module__["UserJudgePageModule"]
        ],
    })
], JudegePageModule);

//# sourceMappingURL=judege.module.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserJudgePage; });
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
 * Generated class for the UserJudgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserJudgePage = (function () {
    function UserJudgePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.img = "assets/imgs/temporary/logo.png";
        this.img2 = "assets/imgs/shoucang2.png";
        this.img3 = "assets/imgs/temporary/thing.jpg";
        this.img5 = "assets/imgs/zan.png";
        this.commiteChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    UserJudgePage.prototype.ionViewDidLoad = function () {
    };
    UserJudgePage.prototype.json = function (item) {
        return JSON.parse(item);
    };
    return UserJudgePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], UserJudgePage.prototype, "commite", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], UserJudgePage.prototype, "commiteChange", void 0);
UserJudgePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-user-judge',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\componnets\user-judge\user-judge.html"*/'<!--\n  Generated template for the UserJudgePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n  <div class="judge-part" *ngIf="commite!=undefine" >\n    <div class="judge-title">\n      <div>\n        <img  *ngIf="commite.HeadUrl!=undefined"  class="headimg" [src]="commite.HeadUrl" alt="">\n      </div>\n      <div>\n        {{commite.Nickname}}\n      </div>\n     <!--  <div style="color:#666;font-size: 22px;">\n          <ion-icon name="eye"></ion-icon>\n      </div>\n      <div style="padding-left:10px;">\n        {{commite.Scannum}}\n      </div> -->\n    </div>\n    <div class="judge-content">\n      {{commite.comcontent}}\n    </div>\n    <div class="judge-img">\n        <img *ngFor="let item of json(commite.ImgList)"  [src]="img3" alt="">\n    </div>\n    <!-- <div class="judge-con">\n      <div>\n        <span style="color:#ff4f4f;padding-right:3px;">用户:</span>东西很好啊东西很好啊东西很好啊东西很好啊东西很好啊东西很好啊东西很好啊\n      </div>\n    </div> -->\n  </div>\n'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\componnets\user-judge\user-judge.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], UserJudgePage);

//# sourceMappingURL=user-judge.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JudegePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
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






var JudegePage = (function () {
    function JudegePage(navCtrl, navParams, 
        //private storage: Storage,
        httpService, nativeService, Inservice, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.Inservice = Inservice;
        this.modalCtrl = modalCtrl;
        this.img = "assets/imgs/temporary/logo.png";
        this.img2 = "assets/imgs/shoucang2.png";
        this.img3 = "assets/imgs/temporary/thing.jpg";
        this.img5 = "assets/imgs/zan.png";
        this.commentlist = [];
        this.isscroll = true;
        this.padding = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["e" /* Padding */]();
        this.goodsid = navParams.get("goodID");
        this.login();
    }
    JudegePage.prototype.ionViewDidLoad = function () {
    };
    JudegePage.prototype.login = function () {
        var _this = this;
        this.isscroll = true;
        var userInfo = {
            ProID: this.goodsid,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        ////console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1023";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                _this.commentlist = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    JudegePage.prototype.json = function (item) {
        return JSON.parse(item);
    };
    JudegePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.commentlist.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isscroll = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            ProID: this.goodsid,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parm.jyh = "1023";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            setTimeout(function () {
                var newList;
                var msg = JSON.parse(newData.result);
                newList = msg.Data;
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.commentlist.push(newList[i]);
                        console.log(_this.commentlist);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isscroll = false;
                }
                else {
                    _this.isscroll = true;
                }
                infiniteScroll.complete();
            }, 1000);
        });
    };
    JudegePage.prototype.gotoslideImg = function (slide, slide2) {
        var modal = this.modalCtrl.create('SlideImgPage', {
            slide: slide,
        });
        modal.present();
    };
    return JudegePage;
}());
JudegePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-judege',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\judege\judege.html"*/'<!--\n  Generated template for the JudegePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">用户评价</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n  <div style="padding-bottom:10px;background:#fff;margin-bottom:10px;" *ngFor="let item of commentlist" >\n      <div class="judge-part" >\n          <div class="judge-title">\n            <div>\n              <img class="headimg" [src]="item.HeadUrl" alt="">\n            </div>\n            <div>\n              {{item.Nickname}}\n            </div>\n           <!--  <div style="color:#666;font-size: 22px;">\n                <ion-icon name="eye"></ion-icon>\n            </div>\n            <div style="padding-left:10px;">\n              {{item.Scannum}}\n            </div> -->\n          </div>\n          <div class="judge-content">\n            {{item.comcontent}}\n          </div>\n          <div class="judge-img">\n              <img *ngFor="let item2 of json(item.ImgList) "   [src]="item2.Url" tappable (click)="gotoslideImg(json(item.RelImgList))" alt="">\n          </div>\n          <div class="judge-con" *ngIf="item.Scontent!=null" >\n            <div>\n              <span style="color:#ff4f4f;padding-right:3px;">商家回复:</span>{{item.Scontent}}\n            </div>\n          </div>\n        </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isscroll"  (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\judege\judege.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__["a" /* InfiniteScrollService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], JudegePage);

//# sourceMappingURL=judege.js.map

/***/ })

});
//# sourceMappingURL=102.js.map?v=107