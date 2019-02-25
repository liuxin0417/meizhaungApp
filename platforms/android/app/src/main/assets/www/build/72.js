webpackJsonp([72],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorGoodlistPageModule", function() { return FloorGoodlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__floor_goodlist__ = __webpack_require__(819);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FloorGoodlistPageModule = (function () {
    function FloorGoodlistPageModule() {
    }
    return FloorGoodlistPageModule;
}());
FloorGoodlistPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__floor_goodlist__["a" /* FloorGoodlistPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__floor_goodlist__["a" /* FloorGoodlistPage */]),
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
    })
], FloorGoodlistPageModule);

//# sourceMappingURL=floor-goodlist.module.js.map

/***/ }),

/***/ 819:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FloorGoodlistPage; });
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





//import { Storage } from '@ionic/storage';

var FloorGoodlistPage = (function () {
    function FloorGoodlistPage(navCtrl, navParams, httpService, nativeService, Inservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.Inservice = Inservice;
        this.list = [];
        this.img = "assets/imgs/temporary/shangpin2.png";
        this.img1 = "assets/imgs/logo2.png";
        this.img3 = "assets/imgs/new/shousuo.png";
        this.chose1 = "assets/imgs/new/chose1.png";
        this.chose2 = "assets/imgs/new/chose2.png";
        this.chose3 = "assets/imgs/new/chose3.png";
        this.chose4 = "assets/imgs/new/chose4.png";
        this.shaixuan = "assets/imgs/new/shaixuan.png";
        this.middle = "assets/imgs/new/middle.png";
        this.goodsimg = "assets/imgs/temporary/3.png";
        this.one = "assets/imgs/temporary/ontype.png";
        this.two = "assets/imgs/temporary/twotype.png";
        this.gotoup = "assets/imgs/temporary/gotop.png";
        this.imghui = "assets/imgs/jinru--hui.png";
        this.choseimg = "assets/imgs/chone.png";
        this.unchose = "assets/imgs/unchone.png";
        this.activity = "assets/imgs/new/activity.png";
        this.num = -1;
        this.num2 = -1;
        this.showflag = false;
        this.showflag2 = false;
        this.showflag3 = false;
        this.goodList = [];
        this.list1 = [];
        this.list2 = [];
        this.flag = false;
        this.slidepart = false;
        this.coverpart = false;
        this.type = 0;
        this.showType = 1;
        this.testList = [1, 1, 1, 1, 1, 1, 1, 1,];
        this.showlevel = 1;
        this.BrandID = [];
        this.SmallPrice = 0;
        this.BigPrice = 0;
        this.Category = [];
        this.brandLiat = [];
        this.CategoryLiat = [];
        this.fenlei = [];
        this.padding = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["e" /* Padding */]();
        this.isshow = true;
        // let value = navParams.get('id');
        var that = this;
        this.nativeService.log('FloorGoodlistPage', 'constructor');
        this.address = "";
        // this.goodsId = value;
        //console.info(this.goodsId)
        this.Bh = navParams.get('fid');
        this.changeBh = this.Bh;
        this.name = navParams.get('name');
        this.getlist(0);
        this.resigiter();
        wx.ready(function () {
            that.settle();
        });
    }
    FloorGoodlistPage.prototype.ionViewDidLoad = function () {
    };
    FloorGoodlistPage.prototype.updategoods = function (num) {
        this.padding.ipageStart = 0;
        this.isshow = true;
        if (num == 0) {
            this.type = 0;
            this.getlist(0);
        }
        else if (num == 1) {
            this.type = 1;
            this.getlist(0);
        }
        else if (num == 2) {
            // this.type = 2;//升序
            // this.getlist(0);
            if (this.type == 2) {
                this.type = 3; //降序
                this.getlist(0);
            }
            else {
                this.type = 2;
                this.getlist(0); //升序
            }
        }
        //console.info()
    };
    FloorGoodlistPage.prototype.changenum = function (index, item) {
        this.num = index;
        item.show = !item.show;
        var arr = { "ID": item.CategoryID };
        if (item.show) {
            this.Category.push(arr);
        }
        else {
            for (var c = 0; c < this.Category.length; c++) {
                if (this.Category[c].ID == item.CategoryID) {
                    this.Category.splice(c, 1);
                }
            }
        }
    };
    FloorGoodlistPage.prototype.changenum2 = function (index, item) {
        this.num2 = index;
        item.show = !item.show;
        var arr = { "ID": item.BrandID };
        if (item.show) {
            this.BrandID.push(arr);
        }
        else {
            for (var c = 0; c < this.BrandID.length; c++) {
                if (this.BrandID[c].ID == item.BrandID) {
                    this.BrandID.splice(c, 1);
                }
            }
        }
    };
    //重置
    FloorGoodlistPage.prototype.reset = function () {
        this.BrandID = [];
        this.Category = [];
        this.SmallPrice = 0;
        this.BigPrice = 0;
        for (var a = 0; a < this.brandLiat.length; a++) {
            this.brandLiat[a].show = false;
        }
        for (var b = 0; b < this.CategoryLiat.length; b++) {
            this.CategoryLiat[b].show = false;
        }
    };
    /* show() {
      this.showflag = !this.showflag;
      this.showflag3 = !this.showflag3;
    }
    show2() {
      this.showflag2 = !this.showflag2;
      this.showflag3 = !this.showflag3;
    } */
    FloorGoodlistPage.prototype.resigiter = function () {
        var _this = this;
        var userInfo = {
            CategoryBH: this.changeBh,
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "2005";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                _this.brandLiat = result.Data.lstBrand;
                //this.CategoryLiat = result.Data.lstCategory;
                for (var a = 0; a < _this.brandLiat.length; a++) {
                    _this.brandLiat[a].show = false;
                }
                //console.info(this.brandLiat)
                for (var b = 0; b < _this.CategoryLiat.length; b++) {
                    _this.CategoryLiat[b].show = false;
                }
                //console.info(this.CategoryLiat)
            }
            else {
                // this.nativeService.showToast(result.Msg);
            }
        });
    };
    FloorGoodlistPage.prototype.getlist = function (num) {
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
            Category: this.Category
            // brand: "品牌",
        };
        console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "2004";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                _this.goodList = result.Data;
                if (num == 1) {
                    _this.gohide();
                    // this.reset()
                }
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    FloorGoodlistPage.prototype.gotoGoodDetail = function (id) {
        this.navCtrl.push("GoodDetailPage", {
            Fh: this.address,
            goodsid: id,
        });
    };
    FloorGoodlistPage.prototype.slice = function (string) {
        if (string != "" && string != null) {
            return string.slice(0, 25) + "...";
        }
    };
    FloorGoodlistPage.prototype.goshow = function () {
        this.type = 3;
        this.coverpart = true;
        this.slidepart = true;
    };
    FloorGoodlistPage.prototype.gohide = function () {
        var that = this;
        this.slidepart = false;
        setTimeout(function () {
            that.coverpart = false;
        }, 150);
    };
    FloorGoodlistPage.prototype.doInfinite = function (infiniteScroll) {
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
            Category: this.Category
        };
        //console.info(pageInfo);
        var parm = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parm.jyh = "2004";
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
    FloorGoodlistPage.prototype.change = function () {
        if (this.showType == 1) {
            this.showType = 2;
        }
        else {
            this.showType = 1;
        }
    };
    FloorGoodlistPage.prototype.toTop = function () {
        this.content.scrollTo(0, 0, 300);
    };
    FloorGoodlistPage.prototype.gotosearch = function () {
        // //console.info("11")
        this.navCtrl.push("SearchPage");
    };
    FloorGoodlistPage.prototype.gotoLeavel2 = function () {
        this.showlevel = 2;
    };
    FloorGoodlistPage.prototype.gotoLeavel1 = function () {
        this.showlevel = 1;
    };
    FloorGoodlistPage.prototype.gotoLeavel3 = function () {
        this.showlevel = 3;
    };
    FloorGoodlistPage.prototype.chosetype1 = function (item2) {
        for (var n = 0; n < this.fenlei.length; n++) {
            for (var c = 0; c < this.fenlei[n].choseList.length; c++) {
                this.fenlei[n].choseList[c].chose = false;
            }
        }
        item2.chose = true;
        this.chosemsg1 = item2.name;
        this.showlevel = 1;
    };
    FloorGoodlistPage.prototype.settle = function () {
        var that = this;
        wx.onMenuShareAppMessage({
            title: '逛贝商城邀请您来逛逛',
            desc: this.name,
            // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
            // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
            link: 'https://www.lguangguang.com/mob/?from=groupmessage#/floorlist/' + this.Bh + '/' + this.name,
            imgUrl: "https://www.lguangguang.com/logo.png",
            // imgUrl: this.icon, // 分享图标
            type: 'link',
            dataUrl: '',
            success: function () {
                // 用户确认分享后执行的回调函数
                that.nativeService.showToast("分享成功");
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareTimeline({
            title: '逛贝商城邀请您来逛逛',
            link: 'https://www.lguangguang.com/mob/?from=groupmessage#/floorlist/' + this.Bh + '/' + this.name,
            imgUrl: "https://www.lguangguang.com/logo.png",
            success: function () {
                this.nativeService.showToast("分享成功");
            },
        });
    };
    return FloorGoodlistPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
], FloorGoodlistPage.prototype, "content", void 0);
FloorGoodlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'floor-goodlist',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\floor-goodlist\floor-goodlist.html"*/'<!--\n  Generated template for the GoodsListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="height:86px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">{{name}}</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only tappable (click)="gotosearch()">\n        <img [src]="img3" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div class="goodListBar">\n    <div [ngClass]="{true:\'selectitem\',false:\'selectitem2\'}[flag]">\n      <div class="item1" tappable (click)="updategoods(0)" [ngClass]="{true:\'color\',false:\'\'}[type==0]">综合</div>\n      <div class="item2" tappable (click)="updategoods(1)" [ngClass]="{true:\'color\',false:\'\'}[type==1]">\n        <span>销量</span>\n      </div>\n      <div class="item3" tappable (click)="updategoods(2)" [ngClass]="{true:\'color\',false:\'\'}[type==2||type==3]">\n        <span style="margin-right:3px;">价格</span>\n        <span class="chose_img">\n          <img *ngIf="type==3||type==1||type==0" [src]="chose1" alt="">\n          <img *ngIf="type==2" [src]="chose3" alt="">\n          <img *ngIf="type==2||type==1||type==0" [src]="chose2" alt="">\n          <img *ngIf="type==3" [src]="chose4" alt="">\n        </span>\n      </div>\n    </div>\n    <div class="selectBtn">\n      <div class="shaoxuan_top" tappable (click)="goshow()" [ngClass]="{true:\'color\',false:\'\'}[type==4]">\n        <span>筛选</span>\n        <span>\n          <img class="shaixuan" [src]="shaixuan" alt="">\n        </span>\n      </div>\n    </div>\n  </div>\n</ion-header>\n\n<ion-content style="background:#F4F4F4">\n  <div class="goods-list" *ngIf="goodList!=\'\'&& showType==1">\n    <div class="goods-item" *ngFor="let item of goodList" tappable (click)="gotoGoodDetail(item.ID)">\n      <img *ngIf="item.ISHD==1" class="activity_pic" [src]="activity" alt="">\n      <!-- <img [src]="item.PicUrl==\'\'?goodsimg:item.PicUrl" alt=""> -->\n      <img-lazy-load [src]="item.PicUrl" [Ttype]=1></img-lazy-load>\n      <!-- <img image-lazy-src="item.PicUrl" alt=""> -->\n      <div class="goods_item_list2">{{item.Name}}</div>\n      <!-- <div class="goods_item_list5">\n        <span>标签1</span>\n        <span>标签2</span>\n      </div> -->\n      <div class="goods_item_list3">\n        <span *ngIf="item.ISHD!=1">￥{{(item.ActivityPrice).toFixed(2)}}</span>\n        <span *ngIf="item.ISHD==1">￥{{(item.HDPrice).toFixed(2)}}</span>\n        <span *ngIf="item.OldPrice"  style="color:#999;text-decoration: line-through;margin-left:5px;">￥{{(item.OldPrice).toFixed(2)}}</span>\n        <!-- <span class="get_border">满减</span>\n        <span class="get_border">秒杀</span> -->\n      </div>\n      <div class="goods_item_list4"> \n        <span style="margin-right:10px;">{{item.SalNum}}销量</span>\n        <!-- <span>{{item.Praise}}好评</span> -->\n      </div>\n    </div>\n  </div>\n  <div *ngIf="goodList!=\'\'&&showType==2">\n    <div class="heng_item" *ngFor="let item of goodList" tappable (click)="gotoGoodDetail(item.ID)">\n      <div class="heng_item_left">\n        <img *ngIf="item.ISHD==1" class="activity_pic2" [src]="activity" alt="">\n        <img [src]="item.PicUrl==\'\'?goodsimg:item.PicUrl" alt="">\n      </div>\n      <div class="heng_item_right">\n        <div class="heng_item_right_name">{{item.Name}}</div>\n        <div style="height:auto;width:100%;">\n          <div class="heng_item_right_price">\n            <strong style="font-size: 12px;font-weight: 400;">\n              <em style="font-style: normal;">\n                ￥\n                <span *ngIf="item.ISHD!=1" style="font-weight: 400;font-size: 18px;">\n                  {{(item.ActivityPrice).toFixed(2)}}\n                </span>\n                <span *ngIf="item.ISHD==1" style="font-weight: 400;font-size: 18px;">\n                  {{(item.HDPrice).toFixed(2)}}\n                </span>\n              </em>\n            </strong>\n          </div>\n          <div class="heng_item_right_justice">\n            <span>{{item.SalNum}}评价</span>\n            <!-- <span>{{item.Praise}}好评</span> -->\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <div class="goods-list" *ngIf="goodList==\'\'">\n    <div class="listnone">\n      <img [src]="img1" alt="">\n      <!-- <div class="xiaoyu">暂无结果</div> -->\n    </div>\n  </div>\n  <div class="flow_btn" style="bottom:80px" tappable (click)="toTop()">\n    <img [src]="gotoup" alt="">\n  </div>\n  <div class="flow_btn" tappable (click)="change()">\n    <img *ngIf="showType==1" [src]="one" alt="">\n    <img *ngIf="showType==2" [src]="two" alt="">\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n<div class="cover" *ngIf="coverpart" [ngClass]="{true:\'goshow\',false:\'gohide\'}[slidepart]">\n  <div class="hidepart" tappable (click)="gohide()"></div>\n  <div *ngIf="showlevel==1" class="slidePart" [ngClass]="{true:\'goLeft\',false:\'goRight\'}[slidepart]">\n    <div class="btnpart">\n      <div class="LevelTitle">价格区间</div>\n      <div class="firstLevel" style="justify-content: space-around;">\n        <input class="low_price" type="number" [(ngModel)]="SmallPrice" placeholder="最低价">\n        <input class="height_price" type="number" [(ngModel)]="BigPrice" placeholder="最高价">\n      </div>\n    </div>\n    <div class="btnpart" *ngIf="CategoryLiat.length>0">\n      <div class="LevelTitle">类别</div>\n      <div class="firstLevel">\n        <div [ngClass]="{true:\'firstcore2\',false:\'firstcore\'}[item.show]" *ngFor="let item of CategoryLiat let i=index" tappable\n          (click)="changenum(i,item)">{{item.Name}}</div>\n      </div>\n    </div>\n    <div class="btnpart" *ngIf="brandLiat.length>0">\n      <div class="LevelTitle">品牌</div>\n      <div class="firstLevel">\n        <div [ngClass]="{true:\'firstcore2\',false:\'firstcore\'}[item.show]" *ngFor="let item of brandLiat let i=index" tappable (click)="changenum2(i,item)">{{item.BrandName}}</div>\n      </div>\n    </div>\n    <!-- <div class="New_type_line" tappable (click)="gotoLeavel2()" style="margin-bottom:10px;">\n      <div>分类:{{chosemsg1}}</div>\n      <img style="height:10px;width:10px;" [src]="imghui" alt="">\n    </div> -->\n    <div class="bottom_sure_btn">\n      <div class="bottom_sure_btn_left" tappable (click)="reset()">重置</div>\n      <div class="bottom_sure_btn_right" tappable (click)="getlist(1)">确认</div>\n    </div>\n    <!-- <div class="New_type_line" *ngFor="let item of testList" tappable (click)="gotoLeavel3()">\n      <div>品牌</div>\n      <img style="height:10px;width:10px;" [src]="imghui" alt="">\n    </div> -->\n    <!-- <div class="clean_btn">\n      清除选项\n    </div> -->\n    <div style="width:100%;height:48px"></div>\n  </div>\n  <div *ngIf="showlevel==2" class="slidePart" [ngClass]="{true:\'goLeft\',false:\'goRight\'}[slidepart]">\n    <!-- <div class="New_type_line" style="margin-bottom:10px;">\n      <div>已选分类</div>\n      <div>{{chosemsg1}}</div>\n    </div> -->\n    <!-- <div style="width:100%;height:auto;background:#fff;" *ngFor="let item of fenlei">\n      <div class="New_type_line" tappable (click)="item.showflag=!item.showflag">\n        <div>{{item.name}}</div>\n        <img style="height:10px;width:10px;" [src]="imghui" alt="">\n      </div>\n      <div *ngIf="item.showflag" class="moreLinefather">\n        <div class="moreLine" *ngFor="let item2 of item.choseList" tappable (click)="chosetype1(item2)">\n          <img *ngIf="!item2.chose" [src]="unchose" alt="">\n          <img *ngIf="item2.chose" [src]="choseimg" alt="">\n          <div>{{item2.name}}({{item2.num}})</div>\n        </div>\n      </div>\n    </div> -->\n    <!-- <div class="bottom_sure_btn">\n      <div class="cancle_bottom_btn" tappable (click)="gotoLeavel1()">取消</div>\n    </div> -->\n  </div>\n  <!-- <div *ngIf="showlevel==3" class="slidePart" [ngClass]="{true:\'goLeft\',false:\'goRight\'}[slidepart]">\n\n    <div style="width:100%;height:auto;background:#fff;">\n      <div class="New_type_line" tappable (click)="item.showflag=!item.showflag">\n        <div>{{fenlei[0].name}}</div>\n        <div></div>\n      </div>\n      <div class="moreLinefather">\n        <div class="moreLine" *ngFor="let item2 of fenlei[0].choseList" tappable (click)="item2.chose=!item2.chose">\n          <img *ngIf="!item2.chose" [src]="unchose" alt="">\n          <img *ngIf="item2.chose" [src]="choseimg" alt="">\n          <div>{{item2.name}}({{item2.num}})</div>\n        </div>\n      </div>\n    </div>\n    <div class="bottom_sure_btn">\n      <div class="bottom_sure_btn_left">取消</div>\n      <div class="bottom_sure_btn_right" tappable (click)="gotoLeavel1()">确认</div>\n    </div>\n\n  </div> -->\n</div>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\floor-goodlist\floor-goodlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__["a" /* InfiniteScrollService */]])
], FloorGoodlistPage);

//# sourceMappingURL=floor-goodlist.js.map

/***/ })

});
//# sourceMappingURL=72.js.map?v=107