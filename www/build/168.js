webpackJsonp([168],{

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowPageModule", function() { return FollowPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__follow__ = __webpack_require__(768);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FollowPageModule = (function () {
    function FollowPageModule() {
    }
    return FollowPageModule;
}());
FollowPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__follow__["a" /* FollowPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__follow__["a" /* FollowPage */]),
        ],
    })
], FollowPageModule);

//# sourceMappingURL=follow.module.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(86);
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
 * Generated class for the FollowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FollowPage = (function () {
    function FollowPage(navCtrl, navParams, httpService, Inservice, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.Inservice = Inservice;
        this.nativeService = nativeService;
        this.img = "assets/imgs/temporary/3.png";
        this.img2 = "assets/imgs/gouwuche.png";
        this.goto = "assets/imgs/jinru--hui.png";
        this.logo = "assets/imgs/comlogo.png";
        this.sousuo = "assets/imgs/shousuo.png";
        this.chose = "assets/imgs/chone.png";
        this.unchose = "assets/imgs/unchose.png";
        this.flag = false;
        this.type = 0;
        this.coverpart = false;
        this.slidepart = false;
        this.statusType = 1;
        this.itemflag = false;
        this.testarr = [1, 11, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1,];
        this.shoplist = [];
        this.isshow = true;
        this.img5 = "assets/imgs/DIANPU.png";
        this.padding = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["e" /* Padding */]();
        this.userID = this.navParams.get("userID");
        // this.shopList();
        this.load();
    }
    FollowPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FollowPage');
    };
    FollowPage.prototype.updategoods = function (num) {
        if (num == 3) {
            this.goshow();
            this.type = num;
        }
        else {
            this.type = num;
        }
    };
    FollowPage.prototype.changeFlag = function (flag) {
        if (flag == 1) {
            this.flag = false;
            this.isshow = true;
            this.padding.ipageStart = 0;
            this.load();
        }
        else {
            this.flag = true;
            this.isshow = true;
            this.padding.ipageStart = 0;
            this.shopList();
        }
    };
    FollowPage.prototype.goshow = function () {
        this.coverpart = true;
        this.slidepart = true;
    };
    FollowPage.prototype.gohide = function () {
        var that = this;
        this.slidepart = false;
        setTimeout(function () {
            that.coverpart = false;
        }, 150);
    };
    FollowPage.prototype.shopList = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1161";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            console.log(result);
            if (result.Code == 1) {
                _this.shoplist = result.Data;
            }
            else {
                // this.nativeService.showToast(result.Msg);
            }
        });
    };
    FollowPage.prototype.load = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1021";
        parameter.parm = JSON.stringify(userInfo);
        // this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            // this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                //this.nativeService.showToast(result.Msg);
                _this.goodslist = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    FollowPage.prototype.delete = function (ID, index) {
        var _this = this;
        var userInfo = {
            Userid: this.userID,
            FranchiseeID: "",
            goodsID: ID,
        };
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1020";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result)
            if (result.Code == 1) {
                _this.nativeService.showToast(result.Msg);
                _this.goodslist.splice(index, 1);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    FollowPage.prototype.deleteShop = function (item, index) {
        var _this = this;
        var userInfo = {
            ID: item.ID,
            ShopID: item.VendorID,
        };
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1162";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result)
            if (result.Code == 1) {
                _this.nativeService.showToast(result.Msg);
                _this.shoplist.splice(index, 1);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    FollowPage.prototype.gotodetail = function (id) {
        this.navCtrl.push("GoodDetailPage", {
            goodsid: id,
        });
    };
    FollowPage.prototype.gotoshop = function (ShopID) {
        this.navCtrl.push("ShopIndexPage", {
            ShopID: ShopID
        });
    };
    FollowPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var pageInfo = {};
        var parm = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        if (this.flag) {
            if (this.shoplist.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
                this.isshow = false;
                return;
            }
            this.padding.ipageStart += 1;
            pageInfo = {
                UserID: this.userID,
                ipageStart: this.padding.ipageStart,
                pageSize: this.padding.pageSize,
            };
            parm.jyh = "1161";
            parm.parm = JSON.stringify(pageInfo);
            this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
                setTimeout(function () {
                    var newList;
                    var msg = JSON.parse(newData.result);
                    newList = msg.Data;
                    if (newList != null || newList != undefined) {
                        for (var i = 0; i < newList.length; i++) {
                            _this.shoplist.push(newList[i]);
                        }
                    }
                    if (newData.length < _this.padding.pageSize) {
                        _this.isshow = false;
                    }
                    infiniteScroll.complete();
                }, 1000);
            });
        }
        else {
            if (this.goodslist.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
                this.isshow = false;
                return;
            }
            this.padding.ipageStart += 1;
            pageInfo = {
                UserID: this.userID,
                ipageStart: this.padding.ipageStart,
                pageSize: this.padding.pageSize,
            };
            parm.jyh = "1021";
            parm.parm = JSON.stringify(pageInfo);
            this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
                setTimeout(function () {
                    var newList;
                    var msg = JSON.parse(newData.result);
                    newList = msg.Data;
                    if (newList != null || newList != undefined) {
                        for (var i = 0; i < newList.length; i++) {
                            _this.goodslist.push(newList[i]);
                        }
                    }
                    if (newData.length < _this.padding.pageSize) {
                        _this.isshow = false;
                    }
                    infiniteScroll.complete();
                }, 1000);
            });
        }
    };
    return FollowPage;
}());
FollowPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-follow',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\follow\follow.html"*/'<!--\n  Generated template for the FollowPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-buttons id="Rname" style="display: flex;flex-direction: row;justify-content: center;">\n      <button ion-button icon-only tappable (click)="changeFlag(1)" style="margin-right:50px;">\n        <span [ngClass]="{true:\'color2\',false:\'nocolor\'}[!flag]"> 商品</span>\n      </button>\n      <button ion-button icon-only tappable (click)="changeFlag(2)">\n        <span [ngClass]="{true:\'color2\',false:\'nocolor\'}[flag]">店铺</span>\n      </button>\n    </ion-buttons>\n    <ion-buttons id="Rname" right>\n      <!-- <button ion-button icon-only tappable (click)="flag=true">\n        <img [src]="sousuo" style="width:20px;height:auto;" alt="">\n      </button> -->\n    </ion-buttons>\n  </ion-navbar>\n  <!-- <div class="fllow_title" *ngIf="!flag">\n    <div class="fllow_title_item" [ngClass]="{true:\'color\',false:\'\'}[type==0]" tappable (click)="updategoods(0)">默认</div>\n    <div class="fllow_title_item" [ngClass]="{true:\'color\',false:\'\'}[type==1]" tappable (click)="updategoods(1)">降价</div>\n    <div class="fllow_title_item" [ngClass]="{true:\'color\',false:\'\'}[type==2]" tappable (click)="updategoods(2)">促销</div>\n    <div class="fllow_title_item" [ngClass]="{true:\'color\',false:\'\'}[type==3]" tappable (click)="updategoods(3)">分类</div>\n    <div class="fllow_title_item" [ngClass]="{true:\'color\',false:\'\'}[type==4]" tappable (click)="updategoods(4)">库存</div>\n  </div>\n  <div class="fllow_title" *ngIf="flag">\n    <div class="fllow_title_item2" [ngClass]="{true:\'color\',false:\'\'}[type==0]" tappable (click)="updategoods(0)">综合</div>\n    <div class="fllow_title_item2" [ngClass]="{true:\'color\',false:\'\'}[type==1]" tappable (click)="updategoods(1)">促销</div>\n    <div class="fllow_title_item2" [ngClass]="{true:\'color\',false:\'\'}[type==2]" tappable (click)="updategoods(2)">有券</div>\n    <div class="fllow_title_item2" style="border-left:1px solid #dedede" [ngClass]="{true:\'color\',false:\'\'}[type==3]" tappable\n      (click)="updategoods(3)">筛选</div>\n  </div> -->\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="!flag">\n    <!-- <div class="fllow_goods">\n      <div class="fllow_goods_img">\n        <img [src]="img" alt="">\n      </div>\n      <div class="fllow_goods_msg">\n        <div class="fllow_goods_line1">商品名商品名商品名商品名商品名商品名商品名商品名商品名商品名商品名商品名商品名商品名</div>\n        <div class="fllow_goods_line2">\n          <span class="changecolor" style="margin-right:10px;">￥149.00</span>\n          <span class="line2_tit">劵</span>\n        </div>\n        <div class="fllow_goods_line3">\n          <div>\n            <span class="line2_tit">满减</span>\n            <span>299元选二</span>\n          </div>\n          <img style="height:1.2rem;width:auto;" [src]="goto" alt="">\n        </div>\n        <div class="fllow_goods_line4">\n          <img style="margin-right:10px;" [src]="img2" alt="">\n        </div>\n      </div>\n    </div> -->\n    <div class="list-item" *ngFor="let item of goodslist ; let i=index">\n      <div tappable (click)="gotodetail(item.ID)"></div>\n      <div class="list-style">\n        <div tappable (click)="gotodetail(item.ID)">\n          <img [src]="item.PicUrl" alt="">\n        </div>\n        <div>\n          <div class="collect_name" tappable (click)="gotodetail(item.ID)">{{item.Name}}</div>\n          <div class="new_collect_item" style="width:100%;color:#a0a0a0">\n            <div>\n              <img style="width:15px;height:15px;margin-right:10px;" [src]="img5" alt="">\n              <span style="display:block;">{{item.ShopName}}</span>\n            </div>\n            <div tappable (click)="delete(item.ID,i)">\n              删除\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="flag">\n    <div class="fllow_goods_item2" *ngFor="let item of shoplist;let i=index">\n      <div class="fllow_goods_item21" tappable (click)="gotoshop(item.VendorID)">\n        <img style="height:80%;width:auto;" [src]="item.PicUrl" alt="">\n      </div>\n      <div class="fllow_goods_item22" tappable (click)="gotoshop(item.VendorID)">\n        <div>{{item.VendorName}}</div>\n        <div style="color:#999">\n          <span style="margin-right:10px;">{{item.AttentionNum}}万人关注</span>\n          <span style="margin-right:10px;color:#999;">{{item.ProductNum}}件商品</span>\n          <!-- <span>综合评分\n            <span class="changecolor">9.6</span>\n          </span> -->\n        </div>\n        <div class="flag_color_father">\n            <!-- <span style="margin-right:10px;color:#999;">{{item.ProductNum}}件商品</span> -->\n          <!-- <span class="flag_color">删除</span> -->\n          <!-- <span class="flag_color2">有券</span> -->\n        </div>\n      </div>\n      <div class="fllow_goods_item23">\n        <span style="color:#999;" tappable (click)="deleteShop(item,i)">删除</span>\n        <!-- <img style="height:1.3rem;" [src]="goto" alt=""> -->\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<div class="cover" *ngIf="coverpart" [ngClass]="{true:\'goshow\',false:\'gohide\'}[slidepart]">\n  <div class="hidepart" tappable (click)="gohide()"></div>\n  <div class="slidePart" [ngClass]="{true:\'goLeft\',false:\'goRight\'}[slidepart]">\n    <div style="width:100%;height:90%;overflow: scroll;" *ngIf="statusType==1">\n      <div class="btnpart">\n        <div class="LevelTitle">类别</div>\n        <div class="firstLevel">\n          <div class="firstcore" *ngFor="let item of list1 let i=index" tappable (click)="changenum(i,item.BH,0)">{{item.Name}}</div>\n        </div>\n      </div>\n      <div class="all_type" tappable (click)="statusType=2">\n        <div>全部分类</div>\n        <img [src]="goto" alt="">\n      </div>\n      <div class="btnpart" style="margin-top:10px;">\n        <div class="LevelTitle">价格区间</div>\n        <div class="firstLevel" style="justify-content: space-around;">\n          <input class="low_price" type="number" placeholder="最低价">\n          <input class="height_price" type="number" placeholder="最高价">\n        </div>\n      </div>\n\n      <div class="bottom_sure_btn">\n        <div class="bottom_sure_btn_left">重置</div>\n        <div class="bottom_sure_btn_right" tappable (click)="gohide()">确认</div>\n      </div>\n    </div>\n    <div style="height:90%;overflow: scroll;background:#fff;" class="type_kind" *ngIf="statusType==2">\n      <div class="type_kind_title">全部分类</div>\n      <div style="height:100%;width:100%;background:#fff;">\n        <div class="type_kind_item" tappable (click)="itemflag=!itemflag">\n          <span>电脑</span>\n          <img style="height:20px;width:auto;" [src]="goto" alt="">\n        </div>\n        <div *ngIf="itemflag">\n          <div class="type_kind_item_detail" *ngFor="let item of testarr">\n            <img style="width:20px;height:20px;margin-right:10px;" [src]="chose" alt="">\n            <span>组装电脑</span>\n          </div>\n        </div>\n      </div>\n      <div class="cancel_btn" tappable (click)="statusType=1">\n        取消\n      </div>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\follow\follow.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__["a" /* InfiniteScrollService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */]])
], FollowPage);

//# sourceMappingURL=follow.js.map

/***/ })

});
//# sourceMappingURL=168.js.map?v=107