webpackJsonp([120],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopIndexPageModule", function() { return ShopIndexPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_index__ = __webpack_require__(809);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShopIndexPageModule = (function () {
    function ShopIndexPageModule() {
    }
    return ShopIndexPageModule;
}());
ShopIndexPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shop_index__["a" /* ShopIndexPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__shop_index__["a" /* ShopIndexPage */]),
        ],
    })
], ShopIndexPageModule);

//# sourceMappingURL=shop-index.module.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopIndexPage; });
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






/**
 * Generated class for the ShopIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ShopIndexPage = (function () {
    function ShopIndexPage(navCtrl, httpService, 
        // private storage: Storage,
        app, nativeService, Inservice, navParams) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.app = app;
        this.nativeService = nativeService;
        this.Inservice = Inservice;
        this.navParams = navParams;
        this.num = 1;
        this.chose1 = "assets/imgs/new/chose1.png";
        this.chose2 = "assets/imgs/new/chose2.png";
        this.chose3 = "assets/imgs/new/chose3.png";
        this.chose4 = "assets/imgs/new/chose4.png";
        this.activity = "assets/imgs/new/activity.png";
        this.gengduo = "assets/imgs/new/genduo2.png";
        this.homeNew = "assets/imgs/homenew.png";
        this.huodong = "assets/imgs/huodong.png";
        this.shop = "assets/imgs/shop.png";
        this.sanjiao = "assets/imgs/sanjiao.png";
        this.coverFlag = false;
        this.padding = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["e" /* Padding */]();
        this.address = "";
        this.changeBh = "";
        this.type = 0;
        this.BrandID = [];
        this.SmallPrice = 0;
        this.BigPrice = 0;
        this.Category = [];
        this.goodList = [];
        this.searchNum = 1;
        this.isshow = true;
    }
    ShopIndexPage.prototype.ionViewWillEnter = function () {
        var that = this;
        this.ShopID = this.navParams.get("ShopID");
        this.getShop();
        this.realid();
        this.getlist(1);
        this.getswiper();
    };
    ShopIndexPage.prototype.ionViewDidLoad = function () {
    };
    ShopIndexPage.prototype.chose_btn = function (num) {
        this.num = num;
    };
    ShopIndexPage.prototype.realid = function () {
        var _this = this;
        var userInfo = {
            Relid: "",
            ShopID: this.ShopID,
        };
        console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1004";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            // console.log(result);
            if (result.Code == 1) {
                _this.realList = result.Data;
            }
        });
    };
    ShopIndexPage.prototype.getswiper = function () {
        var _this = this;
        var userInfo = {
            ShopID: this.ShopID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1200";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            // console.log(result);
            if (result.Code == 1) {
                _this.bannerList = result.Data;
            }
        });
    };
    ShopIndexPage.prototype.getShop = function () {
        var _this = this;
        var that = this;
        var userInfo = {
            ShopID: this.ShopID,
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1157";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            console.log(result);
            if (result.Code == 1) {
                _this.shopmsg = result.Data;
                wx.ready(function () {
                    that.settle();
                });
            }
        });
    };
    ShopIndexPage.prototype.getlist = function (num) {
        var _this = this;
        var num = num;
        var userInfo = {
            FranchiseeID: this.address,
            CategoryBH: this.changeBh,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            type: this.type,
            BrandID: this.BrandID,
            SmallPrice: this.SmallPrice,
            BigPrice: this.BigPrice,
            Category: this.Category,
            ShopID: this.ShopID
            // brand: "品牌",
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1017";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                _this.goodList = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    ShopIndexPage.prototype.getgoodsList = function (num) {
        this.searchNum = num;
        this.padding.ipageStart = 0;
        this.isshow = true;
        if (num == 1) {
            this.type = 0;
            this.getlist(0);
        }
        else if (num == 2) {
            this.type = 1;
            this.getlist(0);
        }
        else if (num == 3) {
            if (this.type == 2) {
                this.type = 3; //降序
                this.getlist(0);
            }
            else {
                this.type = 2;
                this.getlist(0); //升序
            }
        }
    };
    ShopIndexPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        /* infiniteScroll.enable(true); */
        ////console.info("运行了下拉加载");
        if (this.goodList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            FranchiseeID: this.address,
            CategoryBH: this.changeBh,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            type: this.type,
            BrandID: this.BrandID,
            SmallPrice: this.SmallPrice,
            BigPrice: this.BigPrice,
            Category: this.Category,
            ShopID: this.ShopID
        };
        // //console.info(pageInfo);
        var parm = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parm.jyh = "1017";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            setTimeout(function () {
                var newList;
                var msg = JSON.parse(newData.result);
                newList = msg.Data;
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.goodList.push(newList[i]);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                infiniteScroll.complete();
            }, 1000);
        });
    };
    ShopIndexPage.prototype.gotoDetail = function (id) {
        this.navCtrl.push("GoodDetailPage", {
            goodsid: id,
        });
    };
    ShopIndexPage.prototype.gotoGoodDetail = function (id) {
        this.navCtrl.push("GoodDetailPage", {
            Fh: this.address,
            goodsid: id,
        });
    };
    ShopIndexPage.prototype.showList = function () {
        this.coverFlag = true;
    };
    ShopIndexPage.prototype.gotohome = function (num) {
        if (num == 1) {
            this.app.getRootNav().setRoot('TabsPage');
        }
        else if (num == 2) {
            window.open("//www.lguangguang.com/YDDStore/ActivityHome");
        }
        else if (num == 3) {
            window.open("//www.lguangguang.com/NewSport/Club/ClubDetail?ShopID=" + this.shopmsg.ID);
        }
    };
    ShopIndexPage.prototype.settle = function () {
        var l = this;
        this.nativeService.log('gooddetail', "进入微信分享 url:" + 'https://www.lguangguang.com/mob/?shopIndex=' + this.ShopID);
        wx.onMenuShareAppMessage({
            title: this.shopmsg.Name,
            desc: this.shopmsg.Description,
            // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
            // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
            link: 'https://www.lguangguang.com/mob/?shopIndex=' + this.ShopID,
            imgUrl: this.shopmsg.PicUrl,
            type: 'link',
            dataUrl: '',
            success: function () {
                // 用户确认分享后执行的回调函数
                l.nativeService.showToast("分享成功");
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareTimeline({
            title: this.shopmsg.Name,
            link: 'https://www.lguangguang.com/mob/?shopIndex=' + this.ShopID,
            imgUrl: this.shopmsg.PicUrl,
            success: function () {
                this.nativeService.showToast("分享成功");
            },
        });
    };
    return ShopIndexPage;
}());
ShopIndexPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-shop-index',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\shop-index\shop-index.html"*/'<!--\n  Generated template for the ShopIndexPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title *ngIf="shopmsg!=undefined" mode="ios">{{shopmsg.Name}}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only tappable (click)="showList()">\n        <img [src]="gengduo" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background:#dedede;">\n  <div class="shop_swiper">\n    <ion-slides>\n      <ion-slide *ngFor="let item of bannerList" >\n        <a style="display:block;height:12rem;width:100%" [href]="item.StoreUrl">\n          <img style="height:100%;width:100%" [src]="item.PicUrl" alt="">\n        </a>\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class="switch_btn">\n    <div tappable (click)="chose_btn(1)" [ngClass]="{true:\'color_border\',false:\'no_color_border\'}[num==1]">首页</div>\n    <div tappable (click)="chose_btn(2)" [ngClass]="{true:\'color_border\',false:\'no_color_border\'}[num==2]">全部商品</div>\n    <div tappable (click)="chose_btn(3)" [ngClass]="{true:\'color_border\',false:\'no_color_border\'}[num==3]">店铺详情</div>\n  </div>\n  <div style="width:100%;height:auto;" *ngIf="num==1">\n    <div style="width:100%;background:#F9F9F9" *ngFor="let item of realList">\n      <div *ngIf="item.Imageurl==\'\'" class="Dtitle">\n        <div>{{item.Name}}</div>\n      </div>\n      <div *ngIf="item.Imageurl!=\'\'" class="banner3">\n        <img [src]="item.Imageurl!=\'\'?item.Imageurl:banner" alt="">\n      </div>\n      <div class="goodslist">\n        <div class="goodsitem3" *ngFor="let tab of item.product" tappable (click)="gotoDetail(tab.ProId)">\n          <div>\n            <img *ngIf="tab.ISHD==1" class="activity_pic" [src]="activity" alt="">\n            <img style="width:90%;height:auto;max-height: 100%;" [src]="tab.ProPic!=\'\'?tab.ProPic:imggoods" alt="">\n          </div>\n          <div>{{tab.Name}}</div>\n          <div>\n            <span>￥{{tab.ActivityPrice.toFixed(2)}}</span>\n            <span style="color:#999;text-decoration: line-through">￥{{tab.OldPrice.toFixed(2)}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div style="width:100%;height:auto;" *ngIf="num==2">\n    <div class="goods_tab_switch">\n      <div [ngClass]="{true:\'color\',false:\'\'}[searchNum==1]" tappable (click)="getgoodsList(1)">综合</div>\n      <div [ngClass]="{true:\'color\',false:\'\'}[searchNum==2]" tappable (click)="getgoodsList(2)">销量</div>\n      <div [ngClass]="{true:\'color\',false:\'\'}[searchNum==3]" class="goods_tabs_item" tappable (click)="getgoodsList(3)">\n        <span>价格</span>\n        <span class="chose_img">\n          <img *ngIf="type==3||type==1||type==0" [src]="chose1" alt="">\n          <img *ngIf="type==2" [src]="chose3" alt="">\n          <img *ngIf="type==2||type==1||type==0" [src]="chose2" alt="">\n          <img *ngIf="type==3" [src]="chose4" alt="">\n        </span>\n      </div>\n    </div>\n    <div class="goods-list" *ngIf="goodList!=\'\'">\n      <div class="goods-item" *ngFor="let item of goodList" tappable (click)="gotoGoodDetail(item.ID)">\n        <img *ngIf="item.ISHD==1" class="activity_pic" [src]="activity" alt="">\n        <img [src]="item.PicUrl==\'\'?goodsimg:item.PicUrl" alt="">\n        <div class="goods_item_list2">{{item.Name}}</div>\n        <!-- <div class="goods_item_list5">\n          <span>标签1</span>\n          <span>标签2</span>\n        </div> -->\n        <div class="goods_item_list3">\n          <span *ngIf="item.ISHD!=1">￥{{(item.ActivityPrice).toFixed(2)}}</span>\n          <span *ngIf="item.ISHD==1">￥{{(item.HDPrice).toFixed(2)}}</span>\n          <span style="color:#999;text-decoration: line-through;margin-left:5px;">￥{{(item.OldPrice).toFixed(2)}}</span>\n          <!-- <span class="get_border">满减</span>\n          <span class="get_border">秒杀</span> -->\n        </div>\n        <div class="goods_item_list4">\n          <span style="margin-right:10px;">{{item.SalNum}}评价</span>\n          <!-- <span>{{item.Praise}}好评</span> -->\n        </div>\n      </div>\n    </div>\n    <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n      <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n      </ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n  <div style="width:100%;height:auto;" *ngIf="num==3&&shopmsg!=undefined">\n    <div class="shop_msg">\n      <div class="shop_msg_img">\n        <img style="height:100%;width:auto;" [src]="shopmsg.PicUrl" alt="">\n      </div>\n      <div class="shop_msg_detail">\n        <div style="font-size: 16px;font-size: 900;">{{shopmsg.Name}}</div>\n        <div style="text-indent: 24px;padding-right:10px;">{{shopmsg.Description}}</div>\n      </div>\n    </div>\n    <div class="shop_msg_item">\n      <div class="shop_msg_item_content">\n        <div>所在地：</div>\n        <div>{{shopmsg.Address}}</div>\n      </div>\n    </div>\n    <div class="shop_msg_item">\n      <div class="shop_msg_item_content">\n        <div>服务电话：</div>\n        <div>{{shopmsg.Phone}}</div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class="coverall" *ngIf="coverFlag" tappable (click)="coverFlag=false" >\n    <div class="cover_btn_content">\n      <img class="point" [src]="sanjiao" alt="">\n      <a class="cover_btn_item" tappable (click)="gotohome(1)">\n        <img style="height:20px;width:20px;margin:0px 10px;" [src]="homeNew" alt="">\n        <span>商城</span>\n      </a>\n      <a class="cover_btn_item" tappable (click)="gotohome(2)">\n        <img style="height:20px;width:20px;margin:0px 10px;" [src]="huodong" alt="">\n        <span>微活动</span>\n      </a>\n      <a class="cover_btn_item" tappable (click)="gotohome(3)">\n        <img style="height:20px;width:20px;margin:0px 10px;" [src]="shop" alt="">\n        <span>商家门户</span>\n      </a>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\shop-index\shop-index.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__["a" /* InfiniteScrollService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], ShopIndexPage);

//# sourceMappingURL=shop-index.js.map

/***/ })

});
//# sourceMappingURL=120.js.map?v=107