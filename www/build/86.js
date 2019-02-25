webpackJsonp([86],{

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

/***/ })

});
//# sourceMappingURL=86.js.map?v=107