webpackJsonp([87],{

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatePageModule", function() { return TemplatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TemplatePageModule = (function () {
    function TemplatePageModule() {
    }
    return TemplatePageModule;
}());
TemplatePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__template__["a" /* TemplatePage */]
        ]
    })
], TemplatePageModule);

//# sourceMappingURL=template.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatePage; });
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


//import { FileObj } from "../../model/FileObj";
var TemplatePage = (function () {
    function TemplatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.DatacontentChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.DataslideChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.DatabtnChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.img1 = "/assets/imgs/change.png";
        this.img2 = "/assets/imgs/goodthing.png";
        this.img3 = "/assets/imgs/liveshow.png";
        this.img4 = "/assets/imgs/order.png";
        this.img5 = "/assets/imgs/temporary/banner.png";
        this.img6 = "/assets/imgs/temporary/name.png";
        this.img7 = "/assets/imgs/temporary/tomo.png";
        this.img8 = "/assets/imgs/temporary/swiper1.png";
        this.ngimg = "/assets/imgs/temporary/banner.png";
        this.ngimg2 = "/assets/imgs/temporary/shangpin.png";
        this.ngimg3 = "/assets/imgs/temporary/shangpin2.png";
    }
    TemplatePage.prototype.goto = function (item, index) {
        //this.navCtrl.push("GoodDetailPage")
        var t = this.select(item, index);
        if (t.Url != "" && t.Url != undefined && t.Url != null) {
            var arry = t.Url.split('/');
            if (arry.length > 0) {
                this.navCtrl.push(arry[0], {
                    goodsid: arry[1],
                });
            }
        }
        else {
        }
    };
    TemplatePage.prototype.slice = function (string) {
        if (string != "" && string != null) {
            return string.slice(0, 10) + "...";
        }
    };
    TemplatePage.prototype.fixedNum = function (item) {
        return item.toFixed(2);
    };
    TemplatePage.prototype.gotoitem = function (item) {
        var t = item;
        if (t.Url != "" && t.Url != undefined && t.Url != null) {
            var arry = t.Url.split('/');
            if (arry.length > 0) {
                this.navCtrl.push(arry[0], {
                    goodsid: arry[1],
                });
            }
        }
        else {
        }
    };
    TemplatePage.prototype.group = function (item, index) {
        var itemlist = [];
        for (var n = 0; n < item.length; n++) {
            if (item[n].GroupLocation == index) {
                itemlist.push(item[n]);
            }
            else {
            }
        }
        ;
        return itemlist;
    };
    TemplatePage.prototype.select = function (item, index) {
        //var itemlist = [];
        for (var n = 0; n < item.length; n++) {
            if (item[n].GroupLocation == index) {
                return item[n];
            }
            else {
            }
        }
    };
    ;
    TemplatePage.prototype.gotoGoodsPage = function () {
        this.navCtrl.push("GoodsPage");
    };
    TemplatePage.prototype.gotogroup = function (item) {
        // //console.info(i)
        this.navCtrl.push(item.url);
        /* if(i==0){
          this.navCtrl.push("GroupBuyListPage");
        }else if(i==1){
          this.navCtrl.push("SecondToBuyPage");
        }else if(i==2){
          this.navCtrl.push("PublicWelfarePage");
        }else if(i==3){
          this.navCtrl.push("ExchangeGoodsPage");
        } */
    };
    /* 去优惠券列表 */
    TemplatePage.prototype.gotoCouponListPage = function (item) {
        //console.info(item);
        this.navCtrl.push(item.productList[0].Url);
    };
    TemplatePage.prototype.PushPage = function (item) {
        if (item.url != "" && item.url != null && item.url != undefined) {
            var arry = item.url.split('/');
            if (arry.length > 0) {
                this.navCtrl.push(arry[0], {
                    goodsid: arry[1],
                });
            }
        }
    };
    return TemplatePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TemplatePage.prototype, "max", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemplatePage.prototype, "userData", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplatePage.prototype, "Datacontent", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplatePage.prototype, "DatacontentChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplatePage.prototype, "Dataslide", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplatePage.prototype, "DataslideChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplatePage.prototype, "Databtn", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplatePage.prototype, "DatabtnChange", void 0);
TemplatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-template',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\componnets\template\template.html"*/'<!--\n  Generated template for the TemplatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- 轮播图 -->\n<div style="height:130px;width:100%;">\n  <ion-slides loop="false" auto="3000">\n    <ion-slide *ngFor="let item of Dataslide">\n      <img style="width:100%;height:100%;" [src]="item.Imageurl" alt="">\n    </ion-slide>\n  </ion-slides>\n</div>\n<div class="btnpart" *ngIf="Databtn!=\'\'">\n  <div *ngFor="let item of Databtn ;let i=index" tappable (click)="gotogroup(item)">\n    <img [src]="item.Imageurl" alt="">\n    <div style="font-size:1.4rem;font-weight:900;">{{item.Name}}</div>\n  </div>\n</div>\n<div *ngFor="let item of Datacontent">\n  <!-- 四个选项 -->\n\n  <!-- 广告1 -->\n  <div class="banner2" *ngIf="item.toltype==4">\n    <img [src]="item.Imageurl" alt="" tappable (click)="PushPage(item)">\n  </div>\n  <div class="banner2" *ngIf="item.toltype==3&&item.type==1&&item.productList[0].ImageUrl!=undefined" tappable (click)="gotoCouponListPage(item)">\n    <img [src]="item.productList[0].ImageUrl" alt="">\n  </div>\n  <!-- 商品楼层 -->\n  <!-- 商品类型 1-->\n  <div style="width:100%" *ngIf="item.toltype==3 && item.type==2">\n    <div class="title">\n      <div>--{{item.url}}--</div>\n      <div>{{item.Imageurl}}</div>\n    </div>\n    <div style="height:18rem;width:100%;margin-bottom:5px;">\n      <ion-slides loop="false" slidesPerView=2.5>\n        <ion-slide *ngFor="let tab of group(item.productList,1);let i=index">\n          <img *ngIf="i==0" style="display: block;" class="new_goods_item" [src]="tab.ImageUrl" alt="" tappable (click)="gotoitem(tab)">\n          <div class="new_goods_item"  *ngIf="i!=0" tappable (click)="gotoitem(tab)">\n            <img class="new_item_goods_img"  [src]="tab.ImageUrl" alt="">\n            <div class="new_item_goods_name" style="font-size:1.2rem;">爱他美一段奶粉爱他美一段奶粉爱他美一段奶粉</div>\n            <div class="new_item_goods_price" style="font-size:1.2rem;">￥149.00</div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div class="goodsitem">\n      <div tappable (click)="goto(item.productList,2)" *ngIf="select(item.productList,2)!=undefined">\n        <img style="width:100%;height:100%;" [src]="select(item.productList,2).ImageUrl" alt="">\n      </div>\n      <div>\n        <div tappable (click)="goto(item.productList,3)" *ngIf="select(item.productList,3)!=undefined">\n          <img style="width:100%;height:100%;" [src]="select(item.productList,3).ImageUrl" alt="">\n        </div>\n        <div (click)="goto(item.productList,4)" *ngIf="select(item.productList,4)!=undefined">\n          <img style="width:100%;height:100%;" [src]="select(item.productList,4).ImageUrl" alt="">\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- 商品类型 2-->\n  <div style="width:100%" *ngIf="item.toltype==3 && item.type==3">\n    <div class="title">\n      <div>--{{item.url}}--</div>\n    </div>\n    <div class="banner3" tappable (click)="goto(item.productList,1)" *ngIf="select(item.productList,1)!=null">\n      <img [src]="select(item.productList,1).ImageUrl" alt="">\n    </div>\n    <div class="goodsitem2">\n      <div *ngIf="select(item.productList,2)!=null">\n        <div tappable (click)="goto(item.productList,2)">\n          <img style="width:100%;height:100%;" [src]="select(item.productList,2).ImageUrl" alt="">\n        </div>\n        <div class="goodsdetail" *ngIf="select(item.productList,2)!=undefined">\n          <div>{{select(item.productList,2).Name}}</div>\n          <div>￥{{fixedNum(select(item.productList,2).Activityprice)}}</div>\n          <div>99%好评</div>\n        </div>\n      </div>\n      <div style=" flex-direction:row-reverse" *ngIf="select(item.productList,3)!=null">\n        <div>\n          <img style="width:100%;height:100%;" tappable (click)="goto(item.productList,3)" [src]="select(item.productList,3).ImageUrl"\n            alt="">\n        </div>\n        <div class="goodsdetail" *ngIf="select(item.productList,3)!=undefined">\n          <div>{{select(item.productList,3).Name}}</div>\n          <div>￥{{fixedNum(select(item.productList,3).Activityprice)}}</div>\n          <div>99%好评</div>\n        </div>\n      </div>\n    </div>\n    <div class="banner3" *ngIf="select(item.productList,4)!=null">\n      <img [src]="select(item.productList,4).ImageUrl" (click)="goto(item.productList,4)" alt="">\n    </div>\n  </div>\n  <!-- 商品类型 3-->\n  <div style="width:100%" *ngIf="item.toltype==3 && item.type==4">\n    <div class="title">\n      <div>{{item.url}}</div>\n      <div>{{item.Imageurl}}</div>\n    </div>\n    <div class="banner3" *ngIf="select(item.productList,1)!=undefined">\n      <img [src]="select(item.productList,1).ImageUrl" (click)="goto(item.productList,1)" alt="">\n    </div>\n    <div class="goodslist">\n      <div class="goodsitem3" *ngFor="let tab of group(item.productList,2)" tappable (click)="gotoitem(tab)">\n        <div>\n          <div class="fixedpart">新品</div>\n          <img style="width:100%;height:100%;" [src]="tab.ImageUrl" alt="">\n        </div>\n        <div>{{slice(tab.Name)}}</div>\n        <!-- <div>{{tab.Shortdesc}}</div> -->\n        <div>￥{{fixedNum(tab.Activityprice)}}</div>\n      </div>\n\n    </div>\n  </div>\n  <!-- 非首页商品类 -->\n  <div class="type-five" *ngIf=" item.toltype==3 && item.type==5">\n    <div *ngIf="select(item.productList,1)!=undefined">\n      <img style="width:100%;" [src]="select(item.productList,1).ImageUrl" alt="">\n    </div>\n    <div class="goods-one" tappable (click)="goto(item.productList,2)">\n      <img [src]="select(item.productList,2).ImageUrl" alt="">\n      <div class="good-price1">\n        <div>\n          <div style="font-size:14px;font-weight:900;">{{slice(select(item.productList,2).Name)}}</div>\n        </div>\n        <div>￥{{fixedNum(select(item.productList,2).Activityprice)}}</div>\n      </div>\n    </div>\n    <div class="goods-two">\n      <div class="good-price2" *ngFor="let tab of group(item.productList,3)" tappable (click)="goto(item.productList,3)">\n        <img [src]="tab.ImageUrl" alt="">\n        <div style="font-weight:900;">{{slice(tab.Name)}}</div>\n        <div class="changecolor"  >￥{{fixedNum(tab.Activityprice)}}</div>\n      </div>\n    </div>\n  </div>\n  <!-- 广告2 -->\n  <!-- <div class="banner2" *ngIf="item.toltype==4">\n    <img [src]="img5" alt="">\n  </div> -->\n</div>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\componnets\template\template.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
], TemplatePage);

//# sourceMappingURL=template.js.map

/***/ })

});
//# sourceMappingURL=87.js.map?v=107