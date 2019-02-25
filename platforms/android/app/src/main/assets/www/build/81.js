webpackJsonp([81],{

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityPageModule", function() { return CommunityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__community__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommunityPageModule = (function () {
    function CommunityPageModule() {
    }
    return CommunityPageModule;
}());
CommunityPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__community__["a" /* CommunityPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__community__["a" /* CommunityPage */]),
        ],
    })
], CommunityPageModule);

//# sourceMappingURL=community.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_InfiniteScrollService__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__ = __webpack_require__(85);
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







//declare var Swiper;
//import { Slides } from 'ionic-angular';
var CommunityPage = (function () {
    function CommunityPage(navCtrl, navParams, httpService, nativeService, Inservice, modalCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.Inservice = Inservice;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        // @ViewChild(Slides) slides: Slides;
        this.img1 = "assets/imgs/shousuo.png";
        this.img2 = "assets/imgs/comlogo.png";
        this.img3 = "assets/imgs/persional.png";
        this.img8 = "assets/imgs/vhjekan.png";
        this.img9 = "assets/imgs/pinglun.png";
        this.img11 = "assets/imgs/fabuwenzhang.png";
        //无用
        this.img4 = "assets/imgs/temporary/swiper.png";
        this.img5 = "assets/imgs/temporary/IMG_3162_09.png";
        this.img6 = "assets/imgs/temporary/IMG_3162_12.png";
        this.img7 = "assets/imgs/temporary/IMG_3162_15.png";
        this.img10 = "assets/imgs/temporary/IMG_3162_05.png";
        this.list = ["精选", "论坛", "圈子", "爱拍", "活动", "同城", "育婴"];
        this.indexnum = 0;
        this.slide = [];
        this.theme = [];
        this.article = [];
        this.nav = [];
        this.NavID = "";
        this.isshow = true;
        this.padding = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["e" /* Padding */]();
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID != "") {
                    _this.userInfo = val.userinform;
                }
            }
        });
    }
    CommunityPage.prototype.ionViewWillEnter = function () {
        this.login();
        this.login2();
        this.login4();
    };
    CommunityPage.prototype.ionViewDidLoad = function () {
    };
    CommunityPage.prototype.gotoindex = function (i) {
        this.indexnum = i;
    };
    CommunityPage.prototype.login = function () {
        var _this = this;
        var userInfo = "";
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1061";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.slide = result.Data;
            }
            else {
            }
        });
    };
    CommunityPage.prototype.login2 = function () {
        var _this = this;
        var userInfo = "";
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1066";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.theme = result.Data;
                //console.log(this.theme);
            }
            else {
            }
        });
    };
    /**获取社区导航 */
    CommunityPage.prototype.login4 = function () {
        var _this = this;
        var userInfo = "";
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1080";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.nav = result.Data;
                if (_this.nav.length > 0) {
                    _this.login3(0, _this.nav[0].ID);
                }
            }
        });
    };
    /**获取社区的文章 */
    CommunityPage.prototype.login3 = function (num, NavID) {
        var _this = this;
        this.indexnum = num;
        this.NavID = NavID;
        this.isshow = true;
        this.padding.ipageStart = 0;
        var userInfo = {
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            NavID: NavID
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1063";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            // console.log(result);
            if (result.Code == 1) {
                _this.article = result.Data;
                if (_this.article.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
            }
            else {
            }
        });
    };
    CommunityPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        /* infiniteScroll.enable(true); */
        if (this.article.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            NavID: this.NavID
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parm.jyh = "1063";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            setTimeout(function () {
                var newList;
                var msg = JSON.parse(newData.result);
                newList = msg.Data;
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.article.push(newList[i]);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                infiniteScroll.complete();
            }, 1000);
        });
    };
    CommunityPage.prototype.gotoslide = function (item) {
        var imgarry = [];
        // var img = { "Url": item };
        imgarry.push({ "Url": item });
        var modal = this.modalCtrl.create('SlideImgPage', {
            slide: imgarry,
        });
        modal.present();
    };
    CommunityPage.prototype.gotohotplate = function () {
        this.navCtrl.push("HotPlatePage");
    };
    CommunityPage.prototype.gotoperson = function (item) {
        //console.log(item);
        this.navCtrl.push("PersonHomepagePage", {
            type: item,
            fatherType: 1
        });
    };
    CommunityPage.prototype.gotoarticle = function () {
        var modal = this.modalCtrl.create('PublishArticlesPage', {
            type: 1
        });
        modal.present();
    };
    CommunityPage.prototype.gotoinfo = function (item) {
        this.navCtrl.push('PersonalArticlePage', {
            ID: item.ArticleID,
            type: 1
        });
    };
    CommunityPage.prototype.MyCommunityPage = function () {
        this.navCtrl.push("MyCommunityPage", {
            usertype: 1
        });
    };
    CommunityPage.prototype.gotouseinfo = function (item) {
        this.navCtrl.push('MyCommunityPage', {
            UserID: item.UserID
        });
    };
    CommunityPage.prototype.gotodeliver = function () {
        this.navCtrl.push("DeliveryTypePage");
    };
    CommunityPage.prototype.AddFollow = function (item) {
        var _this = this;
        if (this.userInfo == null) {
            this.navCtrl.push('LoginPage');
            return false;
        }
        var Info = {
            UserID: this.userInfo.ID,
            RelD: item.ID
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
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
    return CommunityPage;
}());
CommunityPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-community',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\community\community.html"*/'<ion-header style="background:#fff;">\n    <ion-title mode="ios" style="height:0px;overflow:hidden">我的收藏</ion-title>\n    <div class="com-title">\n        <img [src]="img1" alt="" tappable (click)="gotodeliver()">\n        <img [src]="img2" alt="">\n        <img tappable (click)="MyCommunityPage()" [src]="img3" alt="">\n    </div>\n</ion-header>\n<ion-content style="background:#f5f5f5">\n    <div class="write-article" tappable (click)="gotoarticle()">\n        <img [src]="img11" alt="">\n    </div>\n    <div class="com-part1">\n        <div class="com-slides">\n            <ion-slides pager>\n                <ion-slide *ngFor="let item of slide">\n                    <img [src]="item.PicUrl" alt="">\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="com-hotTitle">\n            <div class="hotTitle-tit">\n                <div class="hotTitle-tit-title">热门话题</div>\n                <div class="hotTitle-tit-more" tappable (click)="gotohotplate()">更多>></div>\n            </div>\n            <div class="hotTitle-content">\n                <ion-slides loop="false" slidesPerView=2.5>\n                    <ion-slide *ngFor="let item of theme">\n                        <div class="com-slide-item" tappable (click)="gotoperson(item)">\n                            <img class="com-slide-pic" [src]="item.ImgUrl" alt="">\n                            <div class="com-slide-tit">{{item.Name}}</div>\n                            <div class="com-slide-des">{{item.Num}}篇文章</div>\n                        </div>\n                        <div class="com-slide-btn" tappable (click)="AddFollow(item)">+关注</div>\n                    </ion-slide>\n                </ion-slides>\n            </div>\n        </div>\n    </div>\n    <div class="com-part2">\n        <div class="com-tit-btn">\n            <ion-slides loop="false" slidesPerView=5>\n                <ion-slide *ngFor="let item of nav ;let i=index" style="font-size:1.4rem;" tappbale (click)="login3(i,item.ID)">\n                    <span [ngClass]="{true:\'style1\',false:\'style2\'}[indexnum==i]">{{item.Name}}</span>\n                </ion-slide>\n            </ion-slides>\n        </div>\n        <div class="com-only-pic">\n            <img [src]="img5" alt="">\n        </div>\n        <div *ngFor="let item of article">\n            <div class="com-content-style1" *ngIf="item.Position==1" tappbale (click)="gotoinfo(item)">\n                <div class="img-litte-part">\n                        <!-- {{item.ImgUrl}} -->\n                    <img [src]="item.ImgUrl" alt="" tappable>\n                </div>\n                <div class="com-style1-detail">\n                    <div class="com-detail1">{{item.Title}}</div>\n                    <div class="com-detail2">\n                        <img class="com-style-pic1" [src]="item.HeadUrl" alt="" style="margin-right:6px">\n                        <div style="margin-right:20px">{{item.LoginName}}</div>\n                        <img class="com-style-pic2" [src]="img8" alt="">\n                        <div style="margin-right:15px">{{item.ClickNum}}</div>\n                        <img class="com-style-pic2" [src]="img9" alt="">\n                        <div>{{item.CommentNum}}</div>\n                    </div>\n                </div>\n            </div>\n            <div class="com-content-style2" *ngIf="item.Position==0" tappbale (click)="gotoinfo(item)">\n                <div class="bannerpic" *ngIf="item.ImgUrl!=\'\'">\n                    <img [src]="item.ImgUrl" tappable alt="" class="com-style2-img">\n                </div>\n                <div class="com-style2-title">\n                    {{item.Title}}\n                </div>\n                <div class="com-style2-persion">\n                    <div class="com-style2-part">\n                        <img class="com-style-pic1" [src]="item.HeadUrl" alt="" style="margin-right:6px">\n                        <div style="margin-right:20px">{{item.LoginName}}</div>\n                    </div>\n                    <div class="com-style2-part">\n                        <img class="com-style-pic2" [src]="img8" alt="">\n                        <div style="margin-right:15px">{{item.ClickNum}}</div>\n                        <img class="com-style-pic2" [src]="img9" alt="">\n                        <div>{{item.CommentNum}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div style="width:100%;height:10px;"></div>\n    </div>\n    <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n        <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n        </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\community\community.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_0__providers_InfiniteScrollService__["a" /* InfiniteScrollService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], CommunityPage);

//# sourceMappingURL=community.js.map

/***/ })

});
//# sourceMappingURL=81.js.map?v=107