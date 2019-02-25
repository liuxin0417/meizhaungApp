webpackJsonp([43],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalPageModule", function() { return PersonalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal__ = __webpack_require__(801);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalPageModule = (function () {
    function PersonalPageModule() {
    }
    return PersonalPageModule;
}());
PersonalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__personal__["a" /* PersonalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__personal__["a" /* PersonalPage */]),
        ],
    })
], PersonalPageModule);

//# sourceMappingURL=personal.module.js.map

/***/ }),

/***/ 801:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(86);
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

//import { Utils } from './../../providers/Utils';





var PersonalPage = (function () {
    function PersonalPage(navCtrl, navParams, httpService, nativeService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.img = "assets/imgs/shezhi.png";
        this.img2 = "assets/imgs/new/xiaoxi.png";
        this.img3 = "assets/imgs/new/defaultH.png";
        this.img4 = "assets/imgs/jinru--hui.png";
        this.img4Bai = "assets/imgs/jinru--bai.png";
        this.img5 = "assets/imgs/new/daufukuan.png";
        this.img6 = "assets/imgs/new/daifahuo.png";
        this.img7 = "assets/imgs/new/daipingjia.png";
        this.img8 = "assets/imgs/new/tuihuan.png";
        this.huodong = "assets/imgs/new/huodong.png";
        this.qiandao = "assets/imgs/new/shequ.png";
        this.kefu = "assets/imgs/new/kefu.png";
        this.zhushou = "assets/imgs/new/gouwuzhoushou.png";
        this.img9 = "assets/imgs/zican.png";
        this.img10 = "assets/imgs/shoucang.png";
        this.img11 = "assets/imgs/dizhi.png";
        this.img12 = "assets/imgs/more.png";
        this.img13 = "assets/imgs/quanzi.png";
        this.lv1 = "assets/imgs/new/lv1.png";
        this.lv2 = "assets/imgs/new/lv2.png";
        this.lv3 = "assets/imgs/new/lv3.png";
        this.lv4 = "assets/imgs/new/lv4.png";
        this.moneybag = 'assets/imgs/moneybag.png';
        this.tixianlog = 'assets/imgs/tixianlog.png';
        this.tixian = 'assets/imgs/tixian.png';
        this.userinfo = [];
        this.usermsg = [];
        this.isopen = 0;
        this.nativeService.log('PersonalPage', 'constructor');
    }
    PersonalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var that = this;
        this.nativeService.log('PersonalPage', 'ionViewWillEnter');
        this.storage.get("userinfo").then(function (val) {
            _this.nativeService.log('PersonalPage', 'storage.get("userinfo") back');
            _this.nativeService.log('PersonalPage', 'val>' + val);
            if (val != "" && val != null && val.userinform) {
                _this.nativeService.log('PersonalPage', 'val is null>' + JSON.stringify(val));
                _this.wedID = "";
                _this.UID = val.userinform.UID;
                //this.settle();
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true, tabindex: 3, popFlag: true });
                }
                else {
                    _this.userID = val.userinform.ID;
                    _this.userinfo = val.userinform;
                    //console.info(this.userinfo);
                    _this.load();
                }
                // this.load2();
            }
            else {
                _this.UID = "88888";
                // this.nativeService.log('PersonalPage','val>'+val);
                _this.navCtrl.push("LoginPage", { showflag: true, tabindex: 3, popFlag: true });
            }
        });
        wx.ready(function () {
            that.settle();
        });
        // this.load3();
    };
    PersonalPage.prototype.ionViewDidLoad = function () {
        this.nativeService.log('PersonalPage', 'ionViewDidLoad');
    };
    PersonalPage.prototype.load = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1048";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.usermsg = result.Data;
                // this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    PersonalPage.prototype.load2 = function () {
        var _this = this;
        var userInfo = {
            wedID: this.wedID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1049";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            console.log(result);
            if (result.Code == 1) {
                _this.advpic = result.Data;
                // this.nativeService.showToast(result.Msg);
            }
            else {
                // this.nativeService.showToast(result.Msg);
            }
        });
    };
    PersonalPage.prototype.gotoOrderList = function (num) {
        this.navCtrl.push("OrderListPage", {
            type: num,
        });
    };
    PersonalPage.prototype.gotoinform = function () {
        this.navCtrl.push("PersionalInformPage", {
            userinfo: this.userinfo,
        });
    };
    PersonalPage.prototype.gotosetup = function () {
        this.navCtrl.push("SetUpPage");
    };
    PersonalPage.prototype.gotowallet = function () {
        // this.navCtrl.push("MyWalletPage");
        this.navCtrl.push("CouponPage");
    };
    PersonalPage.prototype.gotoaddress = function () {
        this.navCtrl.push("AddressPage");
    };
    PersonalPage.prototype.gotocollection = function () {
        this.navCtrl.push("CollectionPage", {
            userID: this.userID,
        });
    };
    PersonalPage.prototype.ReturnGoodsPage = function () {
        this.navCtrl.push("ReturnGoodsPage");
    };
    PersonalPage.prototype.GotoNitice = function () {
        this.navCtrl.push('NoticePage');
    };
    PersonalPage.prototype.MyCommunityPage = function () {
        this.navCtrl.push("MyCommunityPage", {
            usertype: 1
        });
    };
    PersonalPage.prototype.gotoSeenList = function () {
        this.navCtrl.push("SeenListPage");
    };
    PersonalPage.prototype.gototeam = function () {
        this.navCtrl.push("MyTeamPage");
    };
    PersonalPage.prototype.follow = function () {
        this.navCtrl.push("FollowPage", {
            userID: this.userID,
        });
    };
    PersonalPage.prototype.gotocash = function () {
        this.navCtrl.push("CashPage");
    };
    PersonalPage.prototype.gotomoney = function () {
        this.navCtrl.push("MoneyInOutPage");
    };
    PersonalPage.prototype.gotostock = function () {
        this.navCtrl.push("StockManagePage");
    };
    PersonalPage.prototype.gotoSyls = function () {
        this.navCtrl.push("IncomePage");
    };
    /*获取开关*/
    PersonalPage.prototype.load3 = function () {
        var _this = this;
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1133";
        parameter.parm = "";
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.isopen = result.Data.Value;
                _this.isopen = 1;
                console.log(_this.isopen);
            }
            else {
                _this.isopen = 1;
                //console.error(this.isopen);
            }
        });
    };
    PersonalPage.prototype.settle = function () {
        // let url = location.href.split('#')[0];
        wx.onMenuShareAppMessage({
            title: '逛贝商城邀请您来逛逛',
            desc: '关注逛贝，惊喜不断！',
            // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
            // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
            link: 'https://www.lguangguang.com/mob/?' + this.UID + '=defult#/',
            imgUrl: "https://www.lguangguang.com/logo.png",
            // imgUrl: this.icon, // 分享图标
            type: 'link',
            dataUrl: '',
            success: function () {
                // 用户确认分享后执行的回调函数
                this.nativeService.showToast("分享成功");
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareTimeline({
            title: '逛贝商城邀请您来逛逛',
            link: 'https://www.lguangguang.com/mob/?' + this.UID + '=defult#/',
            imgUrl: "https://www.lguangguang.com/logo.png",
            success: function () {
                this.nativeService.showToast("分享成功");
            },
        });
    };
    return PersonalPage;
}());
PersonalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-personal',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\personal\personal.html"*/'<ion-content style="background:#e5e5e5;color:#666;font-size: 12px;font-family: -apple-system,Helvetica,sans-serif;">\n    <ion-navbar style="top:-100px;position:absolute;">\n        <ion-title mode="ios" style="top:-100px;position:absolute;">个人中心</ion-title>\n    </ion-navbar>\n    <div class="persional-home">\n        <div class="home-item1">\n            <img [src]="img2" alt="通知" (click)="GotoNitice()">\n            <img [src]="img" style="margin-right:18px;" alt="设置" tappable (click)="gotosetup()">\n        </div>\n        <div class="home-item2">\n            <div class="home-name">\n                <div class="home-name_left">\n                    <span style="font-size:1.4rem;">{{usermsg.NickName}}</span>\n                    <span class="home-name_pop home-name_pop2">\n                        <img style="width:12px;height:12px;display: block;margin-right:3px;" [src]="lv2" alt="">\n                        <span>{{usermsg.LevelId}}</span>\n                    </span>\n                </div>\n                <div class="home-name_left">\n                    <!-- <span class="home-name_pop" style="margin-left:0px;">余额:3000</span> -->\n                    <span class="home-name_pop">积分:{{usermsg.Gift}}</span>\n                </div>\n            </div>\n            <!-- <img *ngIf="usermsg.HeadUrl!=undefined&&usermsg.HeadUrl!=\'\'" [src]="usermsg.HeadUrl" alt="头像" tappable (click)="gotoinform()"> -->\n            <img [src]="usermsg.HeadUrl==\'\'?img3:usermsg.HeadUrl" alt="头像" tappable (click)="gotoinform()">\n        </div>\n    </div>\n    <!-- <div style="width:100%;background:#fff;">\n        <div class="myorder-title">\n            <div>我的订单</div>\n            <div tappable (click)="gotoOrderList(0)">全部订单</div>\n            <div tappable (click)="gotoOrderList(0)">\n                <img style="height:15px;width:15px;display:block;" [src]="img4" alt="">\n            </div>\n        </div>\n    </div> -->\n    <div class="per_item_part">\n        <div class="order-statius">\n            <div tappable (click)="gotoOrderList(1)">\n                <div *ngIf="usermsg.NoPayNum>0" class="pontNum">{{usermsg.NoPayNum}}</div>\n                <img [src]="img5" alt="">\n                <div>待付款</div>\n            </div>\n            <div tappable (click)="gotoOrderList(2)">\n                <div *ngIf="usermsg.NoReceiveNum>0" class="pontNum">{{usermsg.NoReceiveNum}}</div>\n                <img [src]="img6" alt="">\n                <div>待发货</div>\n            </div>\n            <div tappable (click)="gotoOrderList(4)">\n                <div *ngIf="usermsg.NoCommentNum>0" class="pontNum">{{usermsg.NoCommentNum}}</div>\n                <img [src]="img7" alt="">\n                <div>待评价</div>\n            </div>\n            <div tappable (click)="ReturnGoodsPage()">\n                <div *ngIf="usermsg.AfterSalesNum>0" class="pontNum">{{usermsg.AfterSalesNum}}</div>\n                <img [src]="img8" alt="">\n                <div>退款订单</div>\n            </div>\n        </div>\n    </div>\n    <div class="per_item_part">\n        <div class="order-statius">\n            <div tappable (click)="gotowallet()">\n                <div style="font-weight:900">{{usermsg.CouponNum}}</div>\n                <div>优惠券</div>\n            </div>\n            <div tappable (click)="follow()">\n                <div style="font-weight:900">{{usermsg.collectNum+usermsg.ShopCNum}}</div>\n                <div>收藏</div>\n            </div>\n            <div tappable (click)="gotoSeenList()">\n                <div style="font-weight:900">{{usermsg.BrowsNum}}</div>\n                <div>浏览记录</div>\n            </div>\n            <div tappable (click)="gototeam()">\n                <div style="font-weight:900">{{usermsg.TeamNum}}</div>\n                <div>我的团队</div>\n            </div>\n            <div tappable (click)="gotocash()">\n                <img [src]="tixian" alt="">\n                <div>提现</div>\n            </div>\n            <div tappable (click)="gotomoney()">\n                <img [src]="tixianlog" alt="">\n                <div>提现记录</div>\n            </div>\n            <div tappable (click)="gotoSyls()">\n                <img [src]="moneybag" alt="">\n                <div>收益记录</div>\n            </div>\n        </div>\n    </div>\n    <div class="per_item_part" *ngIf="userinfo&&userinfo.IsSystemAccount" >\n        <div class="order-statius">\n            <div tappable (click)="gotostock()">\n                <img [src]="huodong" alt="">\n                <div>库存管理</div>\n            </div>\n        </div>\n    </div>\n    <!-- <div class="per_item_part">\n        <div class="order-statius">\n            <div tappable (click)="gotoOrderList(1)">\n                <img [src]="huodong" alt="">\n                <div>我的活动</div>\n            </div>\n            <div tappable (click)="gotoOrderList(3)">\n                <img [src]="qiandao" alt="">\n                <div>签到</div>\n            </div>\n            <div tappable (click)="gotoOrderList(4)">\n                <img [src]="kefu" alt="">\n                <div>客户服务</div>\n            </div>\n            <div tappable (click)="ReturnGoodsPage()">\n                <img [src]="zhushou" alt="">\n                <div>购物助手</div>\n            </div>\n        </div>\n    </div> -->\n\n    <!-- <div class="my-swiper">\n        <img *ngIf="advpic!=undefined" [src]="advpic.ImageUrl" alt="">\n    </div> -->\n    <!-- <div class="my-item">\n        <div tappable (click)="gotowallet()" *ngIf="isopen==1">\n            <div style="width:60%">\n                <img [src]="img9" alt=""> 我的钱包\n            </div>\n            <div style="width:30%;color:#c2c2c2;text-align: right; padding-right:10px;font-size:1.2rem;">优惠券/积分</div>\n            <img [src]="img4" alt="">\n        </div>\n        <div tappable (click)="MyCommunityPage()">\n            <div style="width:90%">\n                <img [src]="img13" alt=""> 我的圈子\n            </div>\n            <img [src]="img4" alt="">\n        </div>\n        <div tappable (click)="gotocollection()">\n            <div style="width:90%">\n                <img [src]="img10" alt=""> 我的收藏\n            </div>\n            <img [src]="img4" alt="">\n        </div>\n        <div tappable (click)="gotoaddress()">\n            <div style="width:90%">\n                <img [src]="img11" alt="">地址管理</div>\n            <img [src]="img4" alt="">\n        </div>\n        <div>\n            <div style="width:90%">\n                <img [src]="img12" alt="">更多</div>\n            <img [src]="img4" alt="">\n        </div>\n    </div> -->\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\personal\personal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_0__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
], PersonalPage);

//# sourceMappingURL=personal.js.map

/***/ })

});
//# sourceMappingURL=43.js.map?v=107