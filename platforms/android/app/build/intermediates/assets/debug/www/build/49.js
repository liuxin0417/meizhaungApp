webpackJsonp([49],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_detail__ = __webpack_require__(787);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderDetailPageModule = (function () {
    function OrderDetailPageModule() {
    }
    return OrderDetailPageModule;
}());
OrderDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order_detail__["a" /* OrderDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__order_detail__["a" /* OrderDetailPage */]),
        ],
    })
], OrderDetailPageModule);

//# sourceMappingURL=order-detail.module.js.map

/***/ }),

/***/ 787:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
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






var OrderDetailPage = (function () {
    function OrderDetailPage(navCtrl, navParams, modalCtrl, httpService, nativeService, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.img2 = "assets/imgs/DIANPU.png";
        this.img3 = "assets/imgs/complte.png";
        this.car = "assets/imgs/fahuo.png";
        this.goto = "assets/imgs/jinru--hui.png";
        this.position = "assets/imgs/new/position.png";
        this.goodsDetail = navParams.get("goodsdetail");
        this.storage.get("userinfo").then(function (val) {
            // //console.info(val);
            if (val != "") {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.FranchiseeID = "";
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
    }
    OrderDetailPage.prototype.ionViewWillEnter = function () {
        ////console.info(this.goodsDetail)
    };
    OrderDetailPage.prototype.ionViewDidLoad = function () {
    };
    OrderDetailPage.prototype.gotoReturn = function (item) {
        this.navCtrl.push("ReturnTypePage", {
            item: item
        });
    };
    OrderDetailPage.prototype.gotoEvaluatePage = function (i) {
        var _this = this;
        // //console.info(this.goodsDetail.Items[i])
        var modal = this.modalCtrl.create('EvaluatePage', {
            goodsDetail: this.goodsDetail,
            num: i,
        });
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.goodsDetail = data;
            }
        });
        modal.present();
        // //console.info(this.goodsDetail)
        /* this.navCtrl.push("EvaluatePage",{
          goodsDetail:this.goodsDetail,
          num:i,
        }) */
    };
    OrderDetailPage.prototype.gotoGoodDetail = function (id) {
        this.navCtrl.push("GoodDetailPage", {
            Fh: "",
            goodsid: id,
        });
        ////console.info(id);
    };
    OrderDetailPage.prototype.gotoOrderpay = function () {
        this.navCtrl.push("OrderPayPage", {
            orderId: this.goodsDetail.ID,
            item: this.goodsDetail,
        });
    };
    OrderDetailPage.prototype.delete = function (id) {
        var _this = this;
        var userInfo = {
            ID: id,
        };
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1031";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result)
            if (result.Code == 1) {
                //this.datalist=result.Data;
                _this.nativeService.showToast(result.Msg);
                _this.navCtrl.pop();
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    return OrderDetailPage;
}());
OrderDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-detail',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\order-detail\order-detail.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">订单详情</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#eee;">\n  <div class="order-status">\n    <img style="margin-right:10px;" [src]="img3" alt="">\n    <div style="line-height: 2.5rem" *ngIf="goodsDetail.OrderStatusId==0">待付款</div>\n    <div style="line-height: 2.5rem" *ngIf="goodsDetail.OrderStatusId==10&&goodsDetail.ShipStatusId==1&&goodsDetail.IsReceipt==0">待发货</div>\n    <div style="line-height: 2.5rem" *ngIf="goodsDetail.OrderStatusId==30&&goodsDetail.ShipStatusId==3&&goodsDetail.IsReceipt==0">待收货</div>\n    <div style="line-height: 2.5rem" *ngIf="goodsDetail.OrderStatusId==40&&goodsDetail.IsEvaluate==0&&goodsDetail.IsReceipt==1">待评价</div>\n    <div style="line-height: 2.5rem" *ngIf="(goodsDetail.OrderStatusId==40||goodsDetail.OrderStatusId==80)&&goodsDetail.IsEvaluate==1&&goodsDetail.IsReceipt==1">已评价</div>\n    <div style="line-height: 2.5rem" *ngIf="goodsDetail.OrderStatusId==10&&goodsDetail.CouponState==1">待拼团</div>\n    <div class="flow_part">\n      <div class="flow_part1">\n        <img style="width:1.5rem;height:auto;" [src]="car" alt="">\n      </div>\n      <div class="flow_part2">\n        <span style="color:#666">\n          感谢您在商城购物，欢迎您再次光临\n        </span>\n      </div>\n      <div class="flow_part3">\n        <img style="height:1.2rem;width:auto;" [src]="goto" alt="">\n      </div>\n    </div>\n  </div>\n  <!--  <div class="order-address">\n    <div><img src="" alt="">{{goodsDetail.ReceiveUser}}&nbsp;&nbsp;&nbsp;&nbsp;{{goodsDetail.Tel}}</div>\n    <div>{{goodsDetail.Address}}</div>\n  </div> -->\n\n  <!-- <div class="group-order">\n    <div class="group-order-title">拼单成功</div>\n    <div class="group-order-user">\n      <div class="group-order-img">\n        <img class="group-head-img" [src]="img2" alt="">\n      </div>\n      <div class="group-order-btn">拼单详情</div>\n    </div>\n  </div> -->\n  <div class="list-content">\n    <div class="list-title">\n      <div>\n        <img [src]="img2" alt="">\n      </div>\n      <div>{{goodsDetail.ShopName}}</div>\n    </div>\n    <div class="list-item" *ngFor="let item of goodsDetail.Items; let i=index">\n      <div></div>\n      <div class="list-style">\n        <div tappable (click)="gotoGoodDetail(item.ProductID)">\n          <img [src]="item.Url" alt="">\n        </div>\n        <div tappable (click)="gotoGoodDetail(item.ProductID)">\n          <div class="oneline">{{item.Name}}</div>\n          <div style="color:#999">\n            <span style="margin-right:10px;">数量:{{item.Quantity}}</span>\n            <!-- <span>产品:3-5个月</span> -->\n          </div>\n          <div [innerHTML]="item.AttributeDescription"></div>\n        </div>\n        <div>\n          <div>￥{{item.Price}}</div>\n          <div *ngIf="item.IsEvaluate==0&&goodsDetail.OrderStatusId==40&&goodsDetail.IsEvaluate==0&&goodsDetail.IsReceipt==1" class="returnBtn"\n            tappable (click)="gotoEvaluatePage(i)">评&nbsp;&nbsp;价</div>\n          <!-- <div class="returnBtn" tappable (click)="gotoReturn(item)" *ngIf="goodsDetail.OrderStatusId!=0&&goodsDetail.OrderStatusId!=80&&item.Isback==0">申请售后</div> -->\n          <div class="returnBtn" *ngIf="goodsDetail.OrderStatusId==40&&goodsDetail.IsReceipt==1"  tappable (click)="gotoReturn(item)">申请售后</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="orderInfo">\n    <div class="orderInfo_child1">订单编号：{{goodsDetail.OrderBh}}</div>\n    <div class="orderInfo_child2">下单时间：{{goodsDetail.CreateTime.split("T")[0]}}</div>\n    <div class="orderInfo_child1" *ngIf="goodsDetail.PaidName==\'PayWx\'">支付方式：微信支付</div>\n    <div class="orderInfo_child2" *ngIf="goodsDetail.PaidTime" >支付时间：{{goodsDetail.PaidTime.split("T")[0]}}</div>\n    <div class="orderInfo_child1">配送方式：{{goodsDetail.ShippingMethod}}</div>\n    <!-- <div class="orderInfo_child2">期望配送日期：{{goodsDetail.PaidName}}{{goodsDetail.PaidName}}{{goodsDetail.PaidName}}{{goodsDetail.PaidName}}</div> -->\n  </div>\n  <div class="order-address" style="margin-top:10px;">\n    <div class="order-address_left">\n      <img style="height:15px;width:14px;" [src]="position" alt="">\n    </div>\n    <div class="order-address_right">\n      <div>\n        <img src="" alt="">{{goodsDetail.ReceiveUser}}&nbsp;&nbsp;&nbsp;&nbsp;{{goodsDetail.Tel}}\n      </div>\n      <div>{{goodsDetail.Address}}</div>\n    </div>\n  </div>\n  <div class="tranlate">\n    <div class="tran2">\n      <div>总额</div>\n      <div>￥{{goodsDetail.OrderOrlTotal}}</div>\n    </div>\n    <div class="tran2">\n      <div>运费</div>\n      <div>￥{{goodsDetail.ShipMoney}}</div>\n    </div>\n    <div class="tran2">\n      <div>优惠券</div>\n      <div>￥{{goodsDetail.Coupon}}</div>\n    </div>\n    <div class="tran3">\n      <div>积分抵扣</div>\n      <div>￥{{goodsDetail.Gift}}</div>\n    </div>\n    <div class="tran4">\n      实付款：\n      <span style="color:#FF5C00;font-size:1.6rem;">￥{{goodsDetail.OrderTotal}}</span>\n    </div>\n  </div>\n  <div *ngIf="goodsDetail.OrderStatusId==0||goodsDetail.OrderStatusId==80" class="btnpart">\n    <div *ngIf="goodsDetail.OrderStatusId==0" tappable (click)="gotoOrderpay()">去付款</div>\n    <div tappable *ngIf="goodsDetail.OrderStatusId==80" (click)="delete(goodsDetail.ID)">删除订单</div>\n  </div>\n  <!-- <div class="bottom_bnt">\n    <div class="bottom_bnt_left">删除订单</div>\n    <div class="bottom_bnt_right">\n      <div>申请售后</div>\n      <div>晒单评价</div>\n    </div>\n  </div> -->\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\order-detail\order-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], OrderDetailPage);

//# sourceMappingURL=order-detail.js.map

/***/ })

});
//# sourceMappingURL=49.js.map?v=107