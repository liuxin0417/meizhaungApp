webpackJsonp([149],{

/***/ 689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewclassificationPageModule", function() { return NewclassificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newclassification__ = __webpack_require__(784);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewclassificationPageModule = (function () {
    function NewclassificationPageModule() {
    }
    return NewclassificationPageModule;
}());
NewclassificationPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__newclassification__["a" /* NewclassificationPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__newclassification__["a" /* NewclassificationPage */]),
        ],
    })
], NewclassificationPageModule);

//# sourceMappingURL=newclassification.module.js.map

/***/ }),

/***/ 784:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewclassificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(144);
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
 * Generated class for the NewclassificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewclassificationPage = (function () {
    function NewclassificationPage(navCtrl, navParams, httpservice, nativeService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpservice = httpservice;
        this.nativeService = nativeService;
        this.storage = storage;
        this.categoryData = [];
        this.categoryDetailData = [];
        this.select = 0;
        this.addressInfo = [];
        this.img = "assets/imgs/new/small.png";
        this.img9 = "assets/imgs/code.png";
        this.img10 = "assets/imgs/cheat.png";
        this.img11 = "assets/imgs/search.png";
        this.logo2 = "assets/imgs/logo_2.png";
        var that = this;
        this.storage.get("userinfo").then(function (val) {
            if (val != null && val.userinform) {
                _this.addressInfo = val.address;
                _this.UID = val.userinform.UID;
                wx.ready(function () {
                    that.settle();
                });
            }
            else {
                _this.UID = "88888";
                wx.ready(function () {
                    that.settle();
                });
            }
        });
    }
    NewclassificationPage.prototype.ionViewWillEnter = function () {
        //this.list1=[1,2,2,2,2,2,2,2,2,];
        // this.settle();
        //console.info("name>>>>>>>>");
    };
    NewclassificationPage.prototype.ionViewDidLoad = function () {
        this.Initialization();
    };
    NewclassificationPage.prototype.categoryLeftClick = function (item, index) {
        console.log("index" + index);
        this.list2 = item.childs;
        this.select = index;
    };
    ;
    NewclassificationPage.prototype.startPage = function (index) {
    };
    NewclassificationPage.prototype.goBack = function () {
        console.log('goBack');
    };
    NewclassificationPage.prototype.gotogoodlist = function (id, BH, name) {
        this.navCtrl.push("GoodsListPage", {
            id: id,
            userinfo: this.addressInfo,
            BH: BH,
            name: name,
        });
    };
    NewclassificationPage.prototype.Initialization = function () {
        var _this = this;
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1005";
        parameter.parm = "";
        this.nativeService.showLoading("获取中");
        this.httpservice.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.nativeService.hideLoading();
                _this.list1 = result.Data;
                _this.list2 = result.Data[0].childs;
                // this.gotoslide(this.num);
            }
            else {
            }
        });
    };
    NewclassificationPage.prototype.gotosearch = function () {
        // //console.info("11")
        this.navCtrl.push("SearchPage");
    };
    NewclassificationPage.prototype.GotoNitice = function () {
        this.navCtrl.push('NoticePage');
    };
    NewclassificationPage.prototype.goshoplist = function () {
        this.navCtrl.push('ShopgoodscarPage');
    };
    NewclassificationPage.prototype.settle = function () {
        // let url = location.href.split('#')[0];
        wx.onMenuShareAppMessage({
            title: '逛贝商城邀请您来逛逛',
            desc: '关注逛贝，惊喜不断！',
            // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
            // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
            link: 'https://www.lguangguang.com/mob/?login=' + this.UID + '#/',
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
            link: 'https://www.lguangguang.com/mob/?login=' + this.UID + '#/',
            imgUrl: "https://www.lguangguang.com/logo.png",
            success: function () {
                this.nativeService.showToast("分享成功");
            },
        });
    };
    return NewclassificationPage;
}());
NewclassificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-newclassification',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\newclassification\newclassification.html"*/'<!--\n  Generated template for the NewclassificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="height:50px;min-height:50px; ">\n  <ion-navbar style="top:-100px;position:absolute;">\n    <ion-title mode="ios" style="top:-100px;position:absolute;">分类——逛贝商城</ion-title>\n  </ion-navbar>\n  <div class="home_header">\n    <div class="header-inside">\n      <div class="qrcode">\n        <!-- <img tappable (click)="goshoplist()" [src]="img9" alt=""> -->\n        <img [src]="logo2" alt="">\n      </div>\n      <div class="search">\n        <div class="searchimg">\n          <img [src]="img11" alt="">\n        </div>\n        <input class=\'searchpart\' (focus)="gotosearch()" placeholder="逛贝" type="text">\n      </div>\n      <div class="message">\n        <!-- <img [src]="img10" alt=""> -->\n      </div>\n    </div>\n  </div>\n</ion-header>\n<ion-content id="category" cache-view="false">\n  <nav id="nav">\n    <ul>\n      <li *ngFor="let item of list1, let i = index" tappable (click)="categoryLeftClick(item,i)">\n        <span [ngClass]="{true:\'nav-current\',false:\'nav-blur\'}[select==i]" style="font-size: 14px">{{item.Name}}</span>\n      </li>\n    </ul>\n  </nav>\n  <div id="pro">\n    <div class="pro-scroll">\n      <div class="pro-warp">\n        <div class="banner" *ngIf="list1!=undefined">\n          <img *ngIf="list1[select].ImageUrl!=\'\'" [src]="list1[select].ImageUrl" alt="" />\n        </div>\n        <div class="content">\n          <div>\n            <!-- <div class="content-title">\n            <span>热卖品类</span>\n          </div> -->\n            <div class="content-body">\n              <li class="content-body-list" *ngFor="let item of list2, let i = index" tappable (click)="gotogoodlist(item.ID,item.BH,item.Name)">\n                <img [src]="item.ImageUrl==\'\'?img:item.ImageUrl" />\n                <span>{{item.Name}}</span>\n              </li>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\newclassification\newclassification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
], NewclassificationPage);

//# sourceMappingURL=newclassification.js.map

/***/ })

});
//# sourceMappingURL=149.js.map?v=107