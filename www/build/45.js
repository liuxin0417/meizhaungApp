webpackJsonp([45],{

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonHomepagePageModule", function() { return PersonHomepagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__person_homepage__ = __webpack_require__(795);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonHomepagePageModule = (function () {
    function PersonHomepagePageModule() {
    }
    return PersonHomepagePageModule;
}());
PersonHomepagePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__person_homepage__["a" /* PersonHomepagePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__person_homepage__["a" /* PersonHomepagePage */]),
        ],
    })
], PersonHomepagePageModule);

//# sourceMappingURL=person-homepage.module.js.map

/***/ }),

/***/ 795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonHomepagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PersonHomepagePage = (function () {
    function PersonHomepagePage(navCtrl, navParams, httpService, nativeService, Inservice, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.Inservice = Inservice;
        this.storage = storage;
        this.img = "assets/imgs/fanhu-withe.png";
        this.img8 = "assets/imgs/vhjekan.png";
        this.img9 = "assets/imgs/pinglun.png";
        this.articleList = [];
        this.newtype = 0;
        this.isshow = true;
        this.padding = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["e" /* Padding */]();
        this.type = this.navParams.get("type");
        //console.info(this.type)
        this.fatherType = this.navParams.get("fatherType");
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID != "") {
                    _this.userInfo = val.userinform;
                }
            }
        });
        if (this.fatherType == 1) {
            this.jiekou = "1082";
        }
        else if (this.fatherType == 2) {
            this.jiekou = "1076";
        }
        else if (this.fatherType == 3) {
            this.jiekou = "1079";
        }
        this.Load(this.newtype);
    }
    PersonHomepagePage.prototype.ionViewDidLoad = function () {
    };
    PersonHomepagePage.prototype.gotoarticle = function (item) {
        ////console.info(item)
        this.navCtrl.push("PersonalArticlePage", {
            ID: item.ID,
            type: this.fatherType,
        });
    };
    PersonHomepagePage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    /**获取类别下的文章 */
    PersonHomepagePage.prototype.Load = function (type) {
        var _this = this;
        this.isshow = true;
        this.newtype = type;
        var userInfo = {
            typebh: this.type.typebh,
            type: this.newtype,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        ////console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = this.jiekou;
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.articleList = result.Data;
                if (_this.articleList.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
            }
            else {
            }
        });
    };
    /**下拉刷新 */
    PersonHomepagePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        /* infiniteScroll.enable(true); */
        if (this.articleList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            typebh: this.type.typebh,
            type: this.newtype
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parm.jyh = this.jiekou;
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            setTimeout(function () {
                var newList;
                var msg = JSON.parse(newData.result);
                newList = msg.Data;
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.articleList.push(newList[i]);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                infiniteScroll.complete();
            }, 1000);
        });
    };
    //加关注
    PersonHomepagePage.prototype.AddFollow = function (item) {
        var _this = this;
        if (this.userInfo == null) {
            this.navCtrl.push('LoginPage');
            return false;
        }
        var Info = {
            UserID: this.userInfo.ID,
            RelD: this.type.ID
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1067";
        parameter.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.nativeService.showToast("添加关注成功");
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    return PersonHomepagePage;
}());
PersonHomepagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-person-homepage',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\person-homepage\person-homepage.html"*/'<ion-header style="height:205px;">\n  <div id="headpart">\n    <div class="head-nav">\n      <div tappable (click)="goback()">\n        <img [src]="img" alt="">\n      </div>\n      <div>{{type.Name}}</div>\n      <div></div>\n    </div>\n    <div class="head-msg">\n      <div class="head-msg-item1">\n        <img [src]="type.ImgUrl" alt="">\n      </div>\n      <div class="head-msg-item2">\n        <div style="margin-bottom:10px;">{{type.Info}}</div>\n        <div *ngIf="fatherType==1" >关注:{{type.PeopleSum}}</div>\n      </div>\n      <div class="head-msg-item3">\n        <div *ngIf="fatherType==1"  tappable (click)="AddFollow(item)">+关注</div>\n      </div>\n    </div>\n  </div>\n  <div class="switch-btn">\n    <div tappable (click)="Load(0)">\n      <span [ngClass]="{true:\'bordershow\',false:\'borderno\'}[newtype==0]">精品</span>\n    </div>\n    <div tappable (click)="Load(1)">\n      <span [ngClass]="{true:\'bordershow\',false:\'borderno\'}[newtype==1]">帖子</span>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content style="background:#eee">\n  \n  <!-- <div style="width:100%;height:50px;"></div> -->\n  <div style="width:100%;background:#fff;">\n    <div class="com-content-style2" tappable *ngFor="let item of articleList" (click)="gotoarticle(item)">\n      <div class="bannerpic" *ngIf="item.ImgUrl!=\'\'" >\n        <img [src]="item.ImgUrl" alt="" class="com-style2-img">\n      </div>\n      <div class="com-style2-title">\n        {{item.Title}}\n      </div>\n      <div class="com-style2-persion">\n        <div class="com-style2-part">\n          <img class="com-style-pic1" [src]="item.HeadUrl" alt="" style="margin-right:6px">\n          <div style="margin-right:20px">{{item.LoginName}}</div>\n        </div>\n        <div class="com-style2-part">\n          <img class="com-style-pic2" [src]="img8" alt="">\n          <div style="margin-right:15px">{{item.ClickNum}}</div>\n          <img class="com-style-pic2" [src]="img9" alt="">\n          <div>{{item.CommentNum}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\person-homepage\person-homepage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_0__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__["a" /* InfiniteScrollService */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], PersonHomepagePage);

//# sourceMappingURL=person-homepage.js.map

/***/ })

});
//# sourceMappingURL=45.js.map?v=107