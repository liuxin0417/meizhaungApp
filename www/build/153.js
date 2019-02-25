webpackJsonp([153],{

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCommunityPageModule", function() { return MyCommunityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_community__ = __webpack_require__(779);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyCommunityPageModule = (function () {
    function MyCommunityPageModule() {
    }
    return MyCommunityPageModule;
}());
MyCommunityPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_community__["a" /* MyCommunityPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__my_community__["a" /* MyCommunityPage */]),
        ],
    })
], MyCommunityPageModule);

//# sourceMappingURL=my-community.module.js.map

/***/ }),

/***/ 779:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyCommunityPage; });
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







var MyCommunityPage = (function () {
    function MyCommunityPage(navCtrl, navParams, httpService, nativeService, Inservice, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.Inservice = Inservice;
        this.storage = storage;
        this.articleList = [];
        this.newtype = 0;
        this.colorShow = 0;
        this.isshow = true;
        this.padding = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["e" /* Padding */]();
        this.usertype = 0;
        this.userID = "";
        this.img = "assets/imgs/fanhu-withe.png";
        this.img2 = "assets/imgs/temporary/IMG_3162_05.png";
        this.img3 = "assets/imgs/temporary/personbg.png";
        this.img5 = "assets/imgs/temporary/IMG_3162_09.png";
        this.img6 = "assets/imgs/temporary/IMG_3162_12.png";
        this.img7 = "assets/imgs/temporary/IMG_3162_15.png";
        this.img8 = "assets/imgs/vhjekan.png";
        this.img9 = "assets/imgs/pinglun.png";
        this.usertype = this.navParams.get("usertype");
        console.log(this.usertype);
        this.storage.get("userinfo").then(function (val) {
            if (val != null && val != "" && val.userinform != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push('LoginPage');
                }
                else {
                    _this.userID = val.userinform.ID;
                    //this.Load(this.type);
                    _this.loadmore();
                }
            }
            else {
                _this.navCtrl.push('LoginPage');
            }
        });
        /* this.userID = this.navParams.get("UserID");
        this.Load(this.type); */
    }
    MyCommunityPage.prototype.ionViewDidLoad = function () {
    };
    MyCommunityPage.prototype.loadmore = function () {
        if (this.usertype == 1) {
            this.Load(0);
        }
        else if (this.usertype == 2) {
            this.Load2("1112");
        }
        else if (this.usertype == 3) {
            this.Load2("1113");
        }
    };
    MyCommunityPage.prototype.gotoarticle = function (item) {
        this.navCtrl.push("PersonalArticlePage", {
            ID: item.ID,
            type: this.usertype
        });
    };
    MyCommunityPage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    /**获取类别下的文章 */
    MyCommunityPage.prototype.Load = function (type) {
        var _this = this;
        this.isshow = true;
        this.padding.ipageStart = 0;
        this.colorShow = type;
        var userInfo = {
            UserID: this.userID,
            type: type,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        ////console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1111";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result)
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
    MyCommunityPage.prototype.Load2 = function (entercode) {
        var _this = this;
        this.isshow = true;
        this.padding.ipageStart = 0;
        var userInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        ////console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = entercode;
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result);
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
    MyCommunityPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        /* infiniteScroll.enable(true); */
        //console.log("是否进入下拉刷新");
        if (this.articleList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo2 = {};
        var entercode = "1111";
        if (this.usertype == 1) {
            pageInfo2 = {
                ipageStart: this.padding.ipageStart,
                pageSize: this.padding.pageSize,
                UserID: this.userID,
                type: this.newtype
            };
            entercode = "1111";
        }
        else if (this.usertype == 2) {
            pageInfo2 = {
                ipageStart: this.padding.ipageStart,
                pageSize: this.padding.pageSize,
                UserID: this.userID,
            };
            entercode = "1112";
        }
        else if (this.usertype == 3) {
            pageInfo2 = {
                ipageStart: this.padding.ipageStart,
                pageSize: this.padding.pageSize,
                UserID: this.userID,
            };
            entercode = "1113";
        }
        var pageInfo = pageInfo2;
        var parm = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parm.jyh = entercode;
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
            }, 500);
        });
    };
    return MyCommunityPage;
}());
MyCommunityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-my-community',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\my-community\my-community.html"*/'<ion-header style="height:87px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">我的社区</ion-title>\n  </ion-navbar>\n  <div class="switch-btn" *ngIf="usertype==1">\n    <div tappable (click)="Load(0)">\n      <span [ngClass]="{true:\'color\',false:\'nocolor\'}[colorShow==0]">原创</span>\n    </div>\n    <div tappable (click)="Load(1)">\n      <span [ngClass]="{true:\'color\',false:\'nocolor\'}[colorShow==1]">喜欢</span>\n    </div>\n  </div>\n  <div class="switch-btn2" *ngIf="usertype!=1">\n    <div>原创</div>\n  </div>\n</ion-header>\n\n\n<ion-content style="background:#eee">\n  <!-- <div style="width:100%;height:50px;"></div> -->\n  <div style="width:100%;background:#fff;margin-top:7px;">\n    <div class="com-content-style2" tappable *ngFor="let item of articleList" (click)="gotoarticle(item)">\n      <div class="bannerpic" *ngIf="item.ImgUrl!=null&&item.ImgUrl!=\'\'" >\n        <img [src]="item.ImgUrl" alt="" class="com-style2-img">\n      </div>\n      <div class="com-style2-title">\n        {{item.Title}}\n      </div>\n      <div class="com-style2-persion">\n        <div class="com-style2-part">\n          <img class="com-style-pic1" [src]="img7" alt="" style="margin-right:6px">\n          <div style="margin-right:20px">{{item.LoginName}}</div>\n        </div>\n        <div class="com-style2-part">\n          <img class="com-style-pic2" [src]="img8" alt="">\n          <div style="margin-right:15px">{{item.ClickNum}}</div>\n          <img class="com-style-pic2" [src]="img9" alt="">\n          <div>{{item.CommentNum}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\my-community\my-community.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_0__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__["a" /* InfiniteScrollService */], __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], MyCommunityPage);

//# sourceMappingURL=my-community.js.map

/***/ })

});
//# sourceMappingURL=153.js.map?v=107