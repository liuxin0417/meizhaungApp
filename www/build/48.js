webpackJsonp([48],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListPageModule", function() { return OrderListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_list__ = __webpack_require__(826);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderListPageModule = (function () {
    function OrderListPageModule() {
    }
    return OrderListPageModule;
}());
OrderListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order_list__["a" /* OrderListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__order_list__["a" /* OrderListPage */]),
        ],
    })
], OrderListPageModule);

//# sourceMappingURL=order-list.module.js.map

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_InfiniteScrollService__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OrderListPage = (function () {
    function OrderListPage(navCtrl, navParams, httpService, nativeService, storage, Inservice, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.Inservice = Inservice;
        this.alertCtrl = alertCtrl;
        this.list = [1, 2, 3, 4,];
        this.time = ["9:30", "10:00", "10:30"];
        this.img2 = "assets/imgs/DIANPU.png";
        this.img3 = "assets/imgs/gouwuche.png";
        this.img4 = "assets/imgs/search.png";
        this.indexnum = "0";
        this.orderlist = [];
        this.padding = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["e" /* Padding */]();
        this.isshow = true;
        this.isweb = false;
        this.storage.get("userinfo").then(function (val) {
            ////console.info(val);
            if (val != "") {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userID = val.userinform.ID;
                    _this.FranchiseeID = "val.address.FranchiseeID";
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
            _this.indexnum = navParams.get("type");
            _this.login();
        });
        this.isweb = !this.nativeService.isMobile();
    }
    OrderListPage.prototype.ionViewWillEnter = function () {
    };
    OrderListPage.prototype.ionViewDidLoad = function () {
    };
    OrderListPage.prototype.gotoEvaluate = function () {
        this.navCtrl.push("EvaluatePage");
    };
    OrderListPage.prototype.gotogoodscar = function () {
        this.navCtrl.push("GoodscarPage", {
            type: 1,
        });
    };
    OrderListPage.prototype.search = function () {
        this.navCtrl.push("PaySuccessPage");
    };
    OrderListPage.prototype.ordertype = function (num) {
        this.padding.ipageStart = 0;
        this.isshow = true;
        this.indexnum = num;
        this.login();
    };
    OrderListPage.prototype.gotoOrderDetail = function (item) {
        this.navCtrl.push("OrderDetailPage", {
            goodsdetail: item,
        });
    };
    OrderListPage.prototype.delete = function (item, i) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '删除订单?',
            message: '确认删除订单吗？',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        var userInfo = {
                            OrderID: item.ID
                        };
                        ////console.info(userInfo);
                        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
                        parameter.jyh = "1141";
                        parameter.parm = JSON.stringify(userInfo);
                        _this.nativeService.showLoading("获取中");
                        _this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
                            _this.nativeService.hideLoading();
                            var result = JSON.parse(res.result);
                            //console.info(result);
                            if (result.Code == 1) {
                                _this.orderlist.splice(i, 1);
                            }
                            else {
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    OrderListPage.prototype.login = function () {
        var _this = this;
        var userInfo = {
            FranchiseeID: this.FranchiseeID,
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            stype: this.indexnum,
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1030";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.orderlist = result.Data.list;
                _this.numList = result.Data.OrderNum;
                /* for(var n=0;n<this.orderlist.length;n++){
                  for(var a=0;a<this.orderlist[n].Items.length;a++){
                    this.orderlist[n].totalnum=this.orderlist[n].totalnum+this.orderlist[n].Items[a].Quantity;
                  }
                } */
                ////console.info(this.orderlist);
            }
            else {
            }
        });
    };
    //确认订单
    OrderListPage.prototype.confirm = function (item, ID) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '确认收货?',
            message: '是否确认收货',
            buttons: [
                {
                    text: '取消',
                    handler: function () {
                        return;
                    }
                },
                {
                    text: '确定',
                    handler: function () {
                        var userInfo = {
                            OrderID: ID,
                        };
                        ////console.info(userInfo);
                        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
                        parameter.jyh = "1033";
                        parameter.parm = JSON.stringify(userInfo);
                        _this.nativeService.showLoading("获取中");
                        _this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
                            _this.nativeService.hideLoading();
                            var result = JSON.parse(res.result);
                            if (result.Code == 1) {
                                item.IsReceipt = 1;
                                item.OrderStatusId = 40;
                                item.ShipStatusId = 4;
                                // this.indexnum=""
                                _this.ordertype(4);
                            }
                            else {
                            }
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    OrderListPage.prototype.gotoOrderpay = function (item) {
        this.navCtrl.push("OrderPayPage", {
            orderId: item.ID,
            item: item,
        });
    };
    //几件商品
    OrderListPage.prototype.num = function (item) {
        var num = 0;
        for (var n = 0; n < item.length; n++) {
            num = num + item[n].Quantity;
        }
        return num;
    };
    OrderListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        /* infiniteScroll.enable(true); */
        // //console.info("运行了下拉加载")
        if (this.orderlist.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            FranchiseeID: this.FranchiseeID,
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
            stype: this.indexnum,
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parm.jyh = "1030";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            setTimeout(function () {
                var newList;
                var msg = JSON.parse(newData.result);
                //console.info(msg);
                newList = msg.Data.list;
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.orderlist.push(newList[i]);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                infiniteScroll.complete();
            }, 1000);
        });
    };
    OrderListPage.prototype.gotoPinDan = function (item) {
        var info;
        var url = "http://www.aiboplus.com/mob/#/group-buy-list";
        if (item.Items.length > 0) {
            info = item.Items[0];
        }
        else {
            return false;
        }
        if (this.isweb) {
            wx.onMenuShareAppMessage({
                title: '爱宝加团购',
                desc: info.Name,
                link: url,
                imgUrl: info.Url,
                type: '',
                dataUrl: '',
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        }
        else {
            Wechat.share({
                message: {
                    title: '爱宝加团购',
                    description: info.Name,
                    thumb: info.Url,
                    media: {
                        type: Wechat.Type.LINK,
                        webpageUrl: url
                    }
                },
                scene: Wechat.Scene.SESSION // share to Timeline  
            }, function () {
                alert("Success");
            }, function (reason) {
                alert("Failed: " + reason);
            });
        }
    };
    OrderListPage.prototype.searchlog = function (item) {
        this.navCtrl.push("LogisticsInfoPage", {
            Info: item
        });
    };
    return OrderListPage;
}());
OrderListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-order-list',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\order-list\order-list.html"*/'<ion-header style="height:104px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">商品订单</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only tappable (click)="gotogoodscar()">\n        <img [src]="img3" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div class="status-btn">\n    <div tappable (click)="ordertype(0)">\n      <span class="dirctionT" [ngClass]="{true:\'change\',false:\'nochange\'}[indexnum==0]">\n        <span style="line-height:20px;">全部</span>\n        <span *ngIf="numList!=undefiend"  style="line-height:10px;font-size: 10px;">{{numList.TotalNum}}</span>\n      </span>\n    </div>\n    <div  tappable (click)="ordertype(1)">\n      <span class="dirctionT" [ngClass]="{true:\'change\',false:\'nochange\'}[indexnum==1]">\n        <span style="line-height:20px;">待付款</span>\n        <span *ngIf="numList!=undefiend" style="line-height:10px;font-size: 10px;">{{numList.NoPayNum}}</span>\n      </span>\n    </div>\n    <!-- <div tappable (click)="ordertype(5)">\n      <span [ngClass]="{true:\'change\',false:\'\'}[indexnum==5]">待拼团</span>\n    </div> -->\n    <div  tappable (click)="ordertype(2)">\n      <span class="dirctionT" [ngClass]="{true:\'change\',false:\'nochange\'}[indexnum==2]">\n        <span style="line-height:20px;">待发货</span>\n        <span *ngIf="numList!=undefiend" style="line-height:10px;font-size: 10px;">{{numList.NoSendNum}}</span>\n      </span>\n    </div>\n    <div  tappable (click)="ordertype(3)">\n      <span class="dirctionT" [ngClass]="{true:\'change\',false:\'nochange\'}[indexnum==3]">\n        <span style="line-height:20px;">待收货</span>\n        <span *ngIf="numList!=undefiend" style="line-height:10px;font-size: 10px;">{{numList.NoReceiveNum}}</span>\n      </span>\n    </div>\n    <div  tappable (click)="ordertype(4)">\n      <span class="dirctionT" [ngClass]="{true:\'change\',false:\'nochange\'}[indexnum==4]">\n        <span style="line-height:20px;">待评价</span>\n        <span *ngIf="numList!=undefiend" style="line-height:10px;font-size: 10px;">{{numList.NoCommentNum}}</span>\n      </span>\n    </div>\n    <div  tappable (click)="ordertype(5)">\n      <span class="dirctionT" [ngClass]="{true:\'change\',false:\'nochange\'}[indexnum==5]">\n        <span style="line-height:20px;">已完成</span>\n        <span *ngIf="numList!=undefiend" style="line-height:10px;font-size: 10px;">{{numList.TotalFinishNum}}</span>\n      </span>\n    </div>\n  </div>\n</ion-header>\n<ion-content style="background:#fff">\n  <div class="list-content" style="height:100%;" *ngIf="orderlist==\'\'">\n    <img src="assets/imgs/list.png" style="margin:50px auto 5px;width: 50%" alt="">\n    <div class="xiaoyu">您没有商品订单</div>\n  </div>\n  <div class="list-content">\n    <div *ngFor="let item of this.orderlist;let i=index">\n      <div class="list-title">\n        <div>\n          <img [src]="img2" alt="">\n        </div>\n        <div>{{item.ShopName}}</div>\n        <div *ngIf="item.OrderStatusId==0&&item.ShipStatusId!=0">待付款</div>\n        <div *ngIf="item.ShipStatusId==0">到店自取</div>\n        <!-- <div *ngIf="(item.OrderStatusId==20&&item.ShipStatusId!=0||item.OrderStatusId==10&&item.ShipStatusId!=0||item.OrderStatusId==10&&item.ShipStatusId==1)&&(item.CouponState==-1||item.CouponState==2)">待发货</div> -->\n        <div *ngIf="item.OrderStatusId==10&&item.ShipStatusId==1&&item.IsReceipt==0">待发货</div>\n        <div *ngIf="item.OrderStatusId==30&&item.ShipStatusId==3&&item.IsReceipt==0">待收货</div>\n        <div *ngIf="item.OrderStatusId==40&&item.IsEvaluate==0&&item.IsReceipt==1">待评价</div>\n        <div *ngIf="item.OrderStatusId==40&&item.IsEvaluate==1&&item.IsReceipt==1">已完成</div>\n        <!-- <div *ngIf="item.OrderStatusId==40&&item.IsReceipt==1&&indexnum==5&&item.IsEvaluate!=0">已完成</div> -->\n        <!-- <div *ngIf="item.OrderStatusId==10&&item.CouponState==1">待拼团</div> -->\n      </div>\n      <div class="list-item" tappable (click)="gotoOrderDetail(item)" *ngFor="let item2 of item.Items">\n        <div></div>\n        <div class="list-style">\n          <div>\n            <img [src]="item2.Url" alt="">\n          </div>\n          <div>\n            <div class="order_name" style="font-size:1.2rem">{{item2.Name}}</div>\n            <div class="order_name_des" style="font-size:1.2rem" *ngIf="item2.AttributeDescription!=null" [innerHTML]="item2.AttributeDescription"></div>\n          </div>\n          <div>\n            <div>￥{{item2.Price}}</div>\n            <div>x{{item2.Quantity}}</div>\n          </div>\n        </div>\n      </div>\n      <div class="total">\n        共计{{num(item.Items)}}件商品 合计：￥{{item.OrderTotal}}\n      </div>\n      <div class="total-btn">\n        <div *ngIf="item.OrderStatusId==0" tappable (click)="gotoOrderpay(item)">去付款</div>\n        <div *ngIf="item.OrderStatusId==0" tappable (click)="delete(item,i)">删除订单</div>\n        <div *ngIf="item.OrderStatusId==30&&item.ShipStatusId==3&&item.IsReceipt==0" tappable (click)="confirm(item,item.ID)">确认收货</div>\n        <div *ngIf="item.OrderStatusId==30&&item.ShipStatusId==3&&item.IsReceipt==0" (click)="searchlog(item)">查看物流</div>\n        <div *ngIf="item.OrderStatusId==10&&item.CouponState==1" tappable (click)="gotoPinDan(item)">去拼单</div>\n        <div *ngIf="item.OrderStatusId==40&&item.IsEvaluate==0&&item.IsReceipt==1" tappable (click)="gotoOrderDetail(item)">订单评价</div>\n        <div *ngIf="item.OrderStatusId==40&&item.IsReceipt==1" tappable (click)="gotoOrderDetail(item)">申请售后</div>\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\order-list\order-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_InfiniteScrollService__["a" /* InfiniteScrollService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], OrderListPage);

//# sourceMappingURL=order-list.js.map

/***/ })

});
//# sourceMappingURL=48.js.map?v=107