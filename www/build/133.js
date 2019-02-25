webpackJsonp([133],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnDetailPageModule", function() { return ReturnDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__return_detail__ = __webpack_require__(797);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReturnDetailPageModule = (function () {
    function ReturnDetailPageModule() {
    }
    return ReturnDetailPageModule;
}());
ReturnDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__return_detail__["a" /* ReturnDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__return_detail__["a" /* ReturnDetailPage */]),
        ],
    })
], ReturnDetailPageModule);

//# sourceMappingURL=return-detail.module.js.map

/***/ }),

/***/ 797:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(144);
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







var ReturnDetailPage = (function () {
    function ReturnDetailPage(navCtrl, navParams, storage, nativeService, httpService, alertCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.nativeService = nativeService;
        this.httpService = httpService;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.img = "assets/imgs/temporary/logo.png";
        this.dizhi = "assets/imgs/dizhi.png";
        this.img5 = "assets/imgs/jinru--hui.png";
        this.goods = "assets/imgs/temporary/3.png";
        this.orderNum = "";
        this.typeName = "";
        this.shipName = "";
        this.shipNum = "";
        // this.Info = this.navParams.get("Info");
        // this.GetSysAddress();
        this.goodsNsg = this.navParams.get("item");
        this.GetSysAddress();
    }
    ReturnDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userInfo = val.userinform;
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
    };
    ReturnDetailPage.prototype.gotoLgNumber = function () {
        this.navCtrl.push("LgOrderPage", {
            Info: this.Info
        });
    };
    ReturnDetailPage.prototype.chexiao = function () {
    };
    ReturnDetailPage.prototype.GetSysAddress = function () {
        var _this = this;
        var userInfo = {
            ID: this.goodsNsg.ID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1156";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            console.log(result);
            if (result.Code == 1) {
                _this.addressInfo = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    ReturnDetailPage.prototype.subMsg = function () {
        var _this = this;
        if (this.shipNum == "") {
            this.nativeService.showToast("运单号不能为空");
            return;
        }
        if (this.shipName == "") {
            this.nativeService.showToast("快递公司不能为空");
            return;
        }
        var userInfo = {
            ID: this.goodsNsg.ID,
            ShipNo: this.shipNum,
            ShipName: this.shipName,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1155";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            console.log(result);
            if (result.Code == 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    ReturnDetailPage.prototype.returntype = function () {
        var _this = this;
        var modal = this.modalCtrl.create('ReturnTypeListPage');
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.typeName = data;
            }
            else {
            }
        });
    };
    ReturnDetailPage.prototype.shownum = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: '请输入您的快递单号',
            inputs: [
                {
                    name: 'order',
                    placeholder: '填写快递单号'
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: function (data) {
                        //console.info(data)
                        _this.orderNum = data.order;
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    return ReturnDetailPage;
}());
ReturnDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-return-detail',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\return-detail\return-detail.html"*/'<ion-header style="height: 44px;">\n\n  <ion-navbar mode="ios" style="height: 44px;">\n    <ion-title mode="ios">退款详情</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content style="background:#f7f7f7;">\n  <div class="order-status">\n    请退货并填写物流信息\n  </div>\n  <div class="new_order_item1">\n    <div class="new_order_item_title">\n      商家已同意退货申请，请尽早退货\n    </div>\n    <div class="new_order_item_address">\n      <div class="return_address_chose1">\n        <img style="height:1.5rem;width:auto;" [src]="dizhi" alt="">\n      </div>\n      <div class="return_address_chose2" *ngIf="addressInfo!=undefined">\n        联系人:{{addressInfo.TelUser}},&nbsp;&nbsp;电话:{{addressInfo.Phone}},&nbsp;&nbsp;地址:{{addressInfo.Address}}\n      </div>\n    </div>\n    <div class="new_order_item_address" style="border:none;color:#666">\n      <div class="return_address_chose1">\n      </div>\n      <div class="return_address_chose2">\n        退货说明：不收到付件，不影响二次销售，退回运费客户自理\n      </div>\n    </div>\n    <div class="new_order_item_address" style="border:none;height:4rem;">\n      <div class="return_address_chose1">\n        <div class="pont"></div>\n      </div>\n      <div class="return_address_chose2">\n        商家同意后，请按照给出的退货地址退货，并请记录货运单号\n      </div>\n    </div>\n    <div class="new_order_item_address" style="border:none;height:4rem;">\n      <div class="return_address_chose1">\n        <div class="pont"></div>\n      </div>\n      <div class="return_address_chose2">\n        如商家拒绝，您可以修改申请后再次发起，商家会重新处理\n      </div>\n    </div>\n  </div>\n  <div class="return_compony">\n    <div class="return_compony_item" style="border-bottom:1px solid #dedede" >\n      <span>物流公司:&nbsp;&nbsp;&nbsp;&nbsp;{{typeName}}</span>\n      <span *ngIf="goodsNsg.ShipNo!=\'\'" >{{goodsNsg.ShipNo}}</span>\n      <input *ngIf="goodsNsg.ShipNo==\'\'" class="inputBlock" [(ngModel)]="shipName" placeholder="请输入快递公司" type="text">\n      <!-- <img style="height:1.3rem;width:auto;" [src]="img5" alt=""> -->\n    </div>\n    <div class="return_compony_item" style="border-bottom:1px solid #dedede" >\n      <span>货运单号:&nbsp;&nbsp;&nbsp;&nbsp;{{orderNum}}</span>\n      <span *ngIf="goodsNsg.ShipName!=\'\'" >{{goodsNsg.ShipName}}</span>\n      <input *ngIf="goodsNsg.ShipName==\'\'"  class="inputBlock" [(ngModel)]="shipNum" placeholder="请输入货运单号" type="text">\n      <!-- <img style="height:1.3rem;width:auto;" [src]="img5" alt=""> -->\n    </div>\n    <div *ngIf="goodsNsg.ShipName==\'\'||goodsNsg.ShipNo==\'\'"  class="return_compony_item" style="flex-direction: row-reverse" tappable (click)="subMsg()">\n      <div class="saveBtn">保存信息</div>\n    </div>\n  </div>\n  <div class="return_money">\n    <div style="width:100%;height:2rem;line-height: 2rem;">退款信息</div>\n    <div class="return_goods_msg">\n      <div class="return_goods_msg_left">\n        <img [src]="goodsNsg.PicUrl" alt="">\n      </div>\n      <div class="return_goods_msg_right">\n        <div class="detail_msg">{{goodsNsg.ProductName}}</div>\n        <div style="color:#999">\n          <span style="margin-right:10px;">退款:{{goodsNsg.RefundMoney}}</span>\n          <span>数量:x1</span>\n        </div>\n      </div>\n    </div>\n    <div class="return_money_moremsg">\n      <div class="return_money_moremsg1">申请原因：</div>\n      <div class="return_money_moremsg2">{{goodsNsg.RefundReason}}</div>\n    </div>\n    <div class="return_money_moremsg">\n      <div class="return_money_moremsg1">申请件数：</div>\n      <div class="return_money_moremsg2">1</div>\n    </div>\n    <div class="return_money_moremsg">\n      <div class="return_money_moremsg1">申请时间：</div>\n      <div class="return_money_moremsg2">{{goodsNsg.CreateTime}}</div>\n    </div>\n\n  </div>\n  <!-- <div class="rd_part2" *ngIf="Info.State==0">\n    <div class="rd_part2_line1">\n      您已成功发起退款申请，请耐心等待商家处理\n    </div>\n    <div class="rd_part2_line2">\n      <div class="circle"></div>\n      <div>商家同意后，请按照给出的退货地址退货，并请记录退货运单号</div>\n    </div>\n    <div class="rd_part2_line3">\n      <div class="circle"></div>\n      <div>如果商家拒绝，您可以修改申请后再次发起，商家会重新处理</div>\n    </div>\n    <div class="rd_part2_line4">\n      <div class="rd_part2_line4_btn1" tappable (click)="chexiao()">撤销申请</div>\n    </div>\n  </div>\n  <div class="rd_part2" *ngIf="Info.State==1">\n    <div class="rd_part2_line1">\n      退款申请正在审核\n    </div>\n  </div>\n  <div class="rd_part2" *ngIf="Info.State==2">\n    <div class="rd_part2_line1">\n      退款申请审核失败\n    </div>\n  </div>\n  <div class="rd_part2" *ngIf="Info.State==3">\n    <div class="rd_part2_line1">\n      您已递件，请等待回复\n    </div>\n  </div>\n  <div class="rd_part2" *ngIf="Info.State==4">\n    <div class="rd_part2_line1">\n      商家已同意退货申请，请尽早退货\n    </div>\n    <div class="rd_part2_type1" *ngIf="addressInfo!=null">\n      <span style="color:#ff4f4f;">商家收货信息:</span>\n      收货人{{addressInfo.user}}，{{addressInfo.phone}}，{{addressInfo.address}},{{addressInfo.area}}\n    </div>\n    <div class="rd_part2_type2">\n      退货说明：不收到付件，不影响二次销售，退回运费客户自理\n    </div>\n    <div class="rd_part2_type3">\n      <div class="circle"></div>\n      <div>商家同意后，请按照给出的退货地址退货，并请记录退货运单号</div>\n    </div>\n    <div class="rd_part2_type4">\n      <div class="circle"></div>\n      <div>如果商家拒绝，您可以修改申请后再发起，商家会重新处理</div>\n    </div>\n    <div class="rd_part2_type5" tappable (click)="gotoLgNumber()">\n      <div class="number_btn">\n        <div>我已寄出</div>\n        <div>点击填写运单号</div>\n      </div>\n    </div>\n  </div>\n  <div class="rd_part2" *ngIf="Info.State==5">\n    <div class="rd_part2_item1" style="border-bottom:1px solid #999;">\n      <div>退款总金额</div>\n      <div style="color:#ff4f4f;">￥{{Info.Money}}</div>\n    </div>\n    <div class="rd_part2_item1">\n      <div>退回银行卡</div>\n      <div>￥{{Info.Balance}}</div>\n    </div>\n  </div>\n  <div class="rd_part3">\n    <div class="rd_part3_line1">退款信息</div>\n    <div class="list-style">\n      <div>\n        <img [src]="Info.Url" alt="">\n      </div>\n      <div>\n        <div>{{Info.Name}}</div>\n      </div>\n      <div>\n        <div>￥{{Info.Price}}</div>\n        <div>X{{Info.Quantity}}</div>\n      </div>\n    </div>\n    <div class="rd_part3_line2">退款原因:{{Info.DText}}</div>\n    <div class="rd_part3_line2">退款现金:￥{{Info.Balance}}</div>\n    <div class="rd_part3_line2">申请件数:{{Info.Quantity}}</div>\n    <div class="rd_part3_line2">申请时间:{{Info.CreateTime}}</div>\n  </div> -->\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\return-detail\return-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], ReturnDetailPage);

//# sourceMappingURL=return-detail.js.map

/***/ })

});
//# sourceMappingURL=133.js.map?v=107