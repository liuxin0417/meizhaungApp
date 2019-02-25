webpackJsonp([34],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnGoodsPageModule", function() { return ReturnGoodsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__return_goods__ = __webpack_require__(799);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReturnGoodsPageModule = (function () {
    function ReturnGoodsPageModule() {
    }
    return ReturnGoodsPageModule;
}());
ReturnGoodsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__return_goods__["a" /* ReturnGoodsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__return_goods__["a" /* ReturnGoodsPage */]),
        ],
    })
], ReturnGoodsPageModule);

//# sourceMappingURL=return-goods.module.js.map

/***/ }),

/***/ 799:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnGoodsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
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






var ReturnGoodsPage = (function () {
    function ReturnGoodsPage(navCtrl, navParams, storage, nativeService, httpService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.nativeService = nativeService;
        this.httpService = httpService;
        this.img = "assets/imgs/temporary/logo.png";
        this.img2 = "assets/imgs/DIANPU.png";
        this.img3 = "assets/imgs/search.png";
        this.img4 = "assets/imgs/temporary/3.png";
        this.chose = "assets/imgs/chose.png";
        this.hui = "assets/imgs/jinru--hui.png";
        this.unchose = "assets/imgs/guanbi.png";
        this.List = [];
        this.padding = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["e" /* Padding */]();
    }
    ReturnGoodsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userInfo = val.userinform;
                    _this.Load();
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
    };
    ReturnGoodsPage.prototype.ionViewDidLoad = function () {
    };
    ReturnGoodsPage.prototype.gotoreturn = function (item) {
        if (item.State == 0) {
            this.navCtrl.push("ReturnWaitPage", {
                item: item
            });
        }
        else if (item.State == 1) {
            this.navCtrl.push("ReturnDetailPage", {
                item: item
            });
        }
        else if (item.State == 2) {
            this.navCtrl.push("ReturnFailPage", {
                item: item
            });
        }
    };
    ReturnGoodsPage.prototype.gotosuccess = function () {
        this.navCtrl.push("ReturnSuccessPage");
    };
    ReturnGoodsPage.prototype.Load = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userInfo.ID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1154";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.List = result.Data;
            }
            else {
            }
        });
    };
    ReturnGoodsPage.prototype.wait = function () {
        this.navCtrl.push("ReturnWaitPage");
    };
    return ReturnGoodsPage;
}());
ReturnGoodsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-return-goods',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\return-goods\return-goods.html"*/'<!--\n  Generated template for the ReturnGoodsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">申请记录</ion-title>\n    <!-- <ion-buttons right>\n      <button ion-button icon-only>\n        <img [src]="img3" style="height:20px;width:20px;margin-left:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content style="background:#eee;">\n\n  <div class="new_return_item" *ngFor="let item of List">\n    <div class="new_return_item1">\n      <span>退款金额:{{item.RefundMoney}}元</span>\n      <span *ngIf="item.RefundType==1">退货</span>\n      <span *ngIf="item.RefundType==2">换货</span>\n    </div>\n    <div class="new_return_item2">\n      <div class="new_return_item21">\n        <img [src]="item.PicUrl" alt="">\n      </div>\n      <div class="new_return_item22" tappable (click)="gotoreturn(item)">\n        <div>\n          {{item.ProductName}}\n        </div>\n\n      </div>\n    </div>\n    <div class="new_return_item3" tappable (click)="gotoreturn(item)">\n      <img *ngIf="item.State!=2"  class="item3_img1" [src]="chose" alt="">\n      <img style="height: 1rem;width:1rem;" *ngIf="item.State==2" class="item3_img1" [src]="unchose" alt="">\n      <div *ngIf="item.State==0" class="item3_div1">审核中</div>\n      <div *ngIf="item.State==1" class="item3_div1">通过审核</div>\n      <div *ngIf="item.State==2" class="item3_div1">审核不通过</div>\n      <div class="item3_div2">查看进度详情</div>\n      <img class="item3_img2" [src]="hui" alt="">\n    </div>\n  </div>\n  <!-- <div class="new_return_item">\n    <div class="new_return_item1">\n      <span>服务单号：2232143123234</span>\n      <span>返修换新</span>\n    </div>\n    <div class="new_return_item2">\n      <div class="new_return_item21">\n        <img [src]="img4" alt="">\n      </div>\n      <div class="new_return_item22" tappable (click)="gotosuccess()">\n        <div>\n          商品名商品名商品名商品名商品名商品名 商品名商品名商品名商品名商品名商品名 商品名商品名商品名商品名商品名商品名\n        </div>\n\n      </div>\n    </div>\n    <div class="new_return_item3" tappable (click)="gotosuccess()">\n      <img class="item3_img1" [src]="chose" alt="">\n      <div *ngIf="item.State==0"  class="item3_div1">未审核</div>\n      <div *ngIf="item.State==1"  class="item3_div1">通过审核</div>\n      <div *ngIf="item.State==2"  class="item3_div1">审核不通过</div>\n      <div class="item3_div2">查看进度详情</div>\n      <img class="item3_img2" [src]="hui" alt="">\n    </div>\n  </div> -->\n\n\n\n\n\n\n  <!-- <div class="list-content" *ngFor="let item of List">\n    <div class="list-title">\n      <div>\n        <img [src]="img2" alt="">\n      </div>\n      <div>{{item.Text}}</div>\n    </div>\n    <div class="list-item">\n      <div></div>\n      <div class="list-style">\n        <div>\n          <img [src]="item.Url" alt="">\n        </div>\n        <div>\n          <div>{{item.Name}}</div>\n        </div>\n        <div>\n          <div>￥{{item.Price}}</div>\n          <div>X{{item.Quantity}}</div>\n        </div>\n      </div>\n    </div>\n    <div class="total">\n      共计{{item.Quantity}}件商品 合计：￥{{item.Price}}\n    </div>\n    <div class="total-btn">\n      <div tappable (click)="gotoreturn(item)">查看详情</div>\n    </div>\n  </div> -->\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\return-goods\return-goods.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */]])
], ReturnGoodsPage);

//# sourceMappingURL=return-goods.js.map

/***/ })

});
//# sourceMappingURL=34.js.map?v=107