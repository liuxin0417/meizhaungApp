webpackJsonp([103,186],{

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateThreePageModule", function() { return TemplateThreePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_three__ = __webpack_require__(747);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TemplateThreePageModule = (function () {
    function TemplateThreePageModule() {
    }
    return TemplateThreePageModule;
}());
TemplateThreePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__template_three__["a" /* TemplateThreePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__template_three__["a" /* TemplateThreePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__template_three__["a" /* TemplateThreePage */]
        ]
    })
], TemplateThreePageModule);

//# sourceMappingURL=template-three.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupBuyDetailPageModule", function() { return GroupBuyDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__componnets_template_three_template_three_module__ = __webpack_require__(652);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_buy_detail__ = __webpack_require__(821);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GroupBuyDetailPageModule = (function () {
    function GroupBuyDetailPageModule() {
    }
    return GroupBuyDetailPageModule;
}());
GroupBuyDetailPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__group_buy_detail__["a" /* GroupBuyDetailPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__group_buy_detail__["a" /* GroupBuyDetailPage */]),
            __WEBPACK_IMPORTED_MODULE_0__componnets_template_three_template_three_module__["TemplateThreePageModule"]
        ],
    })
], GroupBuyDetailPageModule);

//# sourceMappingURL=group-buy-detail.module.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateThreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TemplateThreePage = (function () {
    function TemplateThreePage(navCtrl, navParams, nativice, httpservice, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativice = nativice;
        this.httpservice = httpservice;
        this.nativeService = nativeService;
        this.img = "assets/imgs/temporary/banner.png";
        this.img2 = "assets/imgs/temporary/shangpin.png";
        this.img3 = "assets/imgs/temporary/shangpin2.png";
        this.img4 = "assets/imgs/close.png";
        this.goodstypeChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.goodsshowChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.ProductAttrChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.desflagChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.FhChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.goodsidChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.guigeChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.userIDChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.grouptypeChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.groupIDChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.GrouponIDChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.FightIDChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.shownum = -1;
        this.btnflag = false;
        this.list = [];
    }
    TemplateThreePage.prototype.ionViewDidLoad = function () {
    };
    TemplateThreePage.prototype.hidetype = function () {
        /*  if (this.desflag == true) {
           var that = this;
           this.goodsshow = true;
           this.goodsshowChange.emit(this.goodsshow);
           that.goodstype = true;
           that.goodstypeChange.emit(this.goodstype);
         } else {
           
         } */
        // this.goInCar(1);
    };
    TemplateThreePage.prototype.noshow = function () {
        var _this = this;
        var that = this;
        this.goodsshow = false;
        this.goodsshowChange.emit(this.goodsshow);
        setTimeout(function () {
            that.goodstype = false;
            that.goodstypeChange.emit(_this.goodstype);
        }, 150);
    };
    TemplateThreePage.prototype.unshow = function () {
    };
    TemplateThreePage.prototype.close = function () {
        var _this = this;
        this.guige = "";
        if (this.list.length != 0) {
            for (var a = 0; a < this.list.length; a++) {
                this.guige = this.guige + (this.list[a].title + ":" + this.list[a].RelName + ";");
            }
        }
        else {
            this.guige = "";
        }
        this.guigeChange.emit(this.guige);
        var that = this;
        this.goodsshow = false;
        this.goodsshowChange.emit(this.goodsshow);
        setTimeout(function () {
            that.goodstype = false;
            that.goodstypeChange.emit(_this.goodstype);
        }, 150);
    };
    TemplateThreePage.prototype.ChoiceAttr = function (item, item2) {
        for (var i = 0; i < item.length; i++) {
            item[i].Check = 0;
        }
        item2.Check = 1;
        this.ChangPrice();
    };
    TemplateThreePage.prototype.ChangPrice = function () {
        var _this = this;
        var array = [];
        for (var i = 0; i < this.ProductAttr.AttrList.length; i++) {
            for (var j = 0; j < this.ProductAttr.AttrList[i].AttValueList.length; j++) {
                if (this.ProductAttr.AttrList[i].AttValueList[j].Check == 1) {
                    var obj = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["a" /* AttrValue */]();
                    obj.title = this.ProductAttr.AttrList[i].TextPrompt;
                    obj.RelName = this.ProductAttr.AttrList[i].AttValueList[j].Value;
                    obj.Name = this.ProductAttr.AttrList[i].AttValueList[j].Name;
                    obj.Value = this.ProductAttr.AttrList[i].AttValueList[j].ID;
                    array.push(obj);
                }
            }
        }
        this.list = array;
        var userInfo = {
            ProductID: this.ProductAttr.ProductID,
            lstAttrValue: JSON.stringify(array),
            FranceID: this.Fh,
            GrouponID: this.groupID,
            grouptype: this.grouptype,
            GroupID: this.GrouponID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1103";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpservice.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            // //console.info(result);
            _this.nativeService.hideLoading();
            if (result.Code == 1) {
                _this.ProductAttr.ProductPrice = result.Data.Price;
                _this.proBH = result.Data.ProductBH;
                _this.StockQuantity = result.Data.StockQuantity;
                var exit = result.Data.isExist;
                if (_this.StockQuantity <= 0) {
                    // this.nativeService.showToast("库存量不足");
                    _this.btnflag = false;
                }
                if (exit == 0) {
                    // this.nativeService.showToast("商品无货");
                    _this.btnflag = false;
                }
                if (_this.StockQuantity != 0 && exit == 1) {
                    _this.btnflag = true;
                }
                // for (var i = 0; i < this.ProductAttr.AttrList.length; i++) {
                //   if (array[i] != undefined || this.StockQuantity == 0) {
                //     if (this.StockQuantity != 0 && exit == 1) {
                //       this.btnflag = true;
                //       //console.info("执行一");
                //     } else {
                //       //console.info("执行二");
                //       this.btnflag = false;
                //     }
                //   } else {
                //     //console.info("执行三")
                //     this.btnflag = false;
                //   }
                // }
            }
            else {
                _this.nativice.showToast(result.Msg);
            }
        });
    };
    TemplateThreePage.prototype.Sure = function () {
        var item = {
            GouponID: this.groupID,
            ProductBH: this.proBH,
            ProductID: this.goodsid,
            grouptype: this.grouptype,
            GroupID: this.GrouponID,
            FightID: this.FightID
        };
        //console.log(item);
        this.navCtrl.push('GroupSettlementPage', {
            Info: item,
            picurl: this.ProductAttr.ProductImage
        });
    };
    TemplateThreePage.prototype.gotosettlement = function () {
        this.navCtrl.push("GroupSettlementPage");
    };
    return TemplateThreePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TemplateThreePage.prototype, "goodstype", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "goodstypeChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TemplateThreePage.prototype, "goodsshow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "goodsshowChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__model_Model__["g" /* ProductAttr */])
], TemplateThreePage.prototype, "ProductAttr", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "ProductAttrChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TemplateThreePage.prototype, "desflag", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "desflagChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplateThreePage.prototype, "Fh", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "FhChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplateThreePage.prototype, "goodsid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "goodsidChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplateThreePage.prototype, "guige", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "guigeChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplateThreePage.prototype, "userID", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "userIDChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TemplateThreePage.prototype, "grouptype", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "grouptypeChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplateThreePage.prototype, "groupID", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "groupIDChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplateThreePage.prototype, "GrouponID", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "GrouponIDChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplateThreePage.prototype, "FightID", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateThreePage.prototype, "FightIDChange", void 0);
TemplateThreePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-template-three',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\componnets\template-three\template-three.html"*/'<div class="cover" *ngIf="goodstype" [ngClass]="{true:\'goshow\',false:\'gohide\'}[goodsshow]">\n  <div class="clickbtn" tappable (click)="close()"></div>\n  <div class="alertpart" [ngClass]="{true:\'goup\',false:\'godown\'}[goodsshow]">\n    <div class="picPart" tappable (click)="unshow()">\n      <img [src]="ProductAttr.ProductImage" alt="img2" class="goodspic">\n      <!-- <img [src]="img4" alt="" class="closebtn" tappable (click)="close()"> -->\n      <div class="goods-detail">\n        <div style="color:#ff4f4f">￥\n          <span style="font-size:1.5em;">\n            {{ProductAttr.ProductPrice}}\n          </span>\n        </div>\n        <div style="line-height:20px;">{{ProductAttr.ProductName}}</div>\n      </div>\n    </div>\n    <div class="goodscontent">\n      <div class="typeitem" *ngFor="let item of ProductAttr.AttrList">\n        <div class="goodsTitle">{{item.TextPrompt}}</div>\n        <div class="goodsType">\n          <div *ngFor="let item2 of item.AttValueList;let i=index;" [ngClass]="{true:\'checkdiv\',false:\'nocheckdiv\'}[item2.Check==1]"\n            tappable (click)="ChoiceAttr(item.AttValueList,item2)">{{item2.Value}}</div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf="btnflag" class="buyBtn" tappable (click)="Sure()">确定</div>\n    <div *ngIf="!btnflag" class="buyBtn2" tappable (click)="gotosettlement()">确定</div>\n  </div>\n</div>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\componnets\template-three\template-three.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__["a" /* NativeService */]])
], TemplateThreePage);

//# sourceMappingURL=template-three.js.map

/***/ }),

/***/ 821:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupBuyDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GroupBuyDetailPage = (function () {
    function GroupBuyDetailPage(navCtrl, navParams, app, storage, httpService, nativeService, actionSheetCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.storage = storage;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.img = "assets/imgs/jinru--hui.png";
        this.img2 = "assets/imgs/shoucang2.png";
        this.img3 = "assets/imgs/gouwuche.png";
        this.img4 = "assets/imgs/zhici.png";
        this.img5 = "assets/imgs/shoucang3.png";
        this.img6 = "assets/imgs/temporary/2.png";
        this.img8 = "assets/imgs/liuyan.png";
        this.slide = [];
        this.showflag1 = false;
        this.showflag = false;
        this.ProductAttr = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["g" /* ProductAttr */]();
        this.rate = "";
        this.switchnum = true;
        this.goodstype = false;
        this.goodsshow = false;
        //属性
        this.shoacngflag = true;
        this.desflag = true;
        this.Fh = "";
        this.goodsid = "";
        this.groupID = "";
        this.userID = "";
        this.guige = "选择规格";
        this.grouponList = new Array();
        this.groupCount = 0;
        this.grouptype = 0; //单独购买or拼单购买
        this.GrouponID = "";
        this.FightID = "";
        this.Group = this.navParams.get("Group");
        this.goodsid = this.Group.ProductID;
        this.groupID = this.Group.ID;
        this.GrouponID = this.Group.GrouponID;
        console.log(this.Group);
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                _this.address = val.address;
                _this.Fh = "";
                if (val.userinform != null) {
                    _this.userInfo = val.userinform;
                    _this.userID = val.userinform.ID;
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
            _this.Load();
            _this.Load2();
        });
    }
    GroupBuyDetailPage.prototype.ionViewDidLoad = function () {
        this.goTop();
        this.collect();
    };
    GroupBuyDetailPage.prototype.goback = function () {
        this.app.goBack();
    };
    GroupBuyDetailPage.prototype.gotoslideImg = function (slide) {
        var modal = this.modalCtrl.create('SlideImgPage', {
            slide: slide,
        });
        modal.present();
    };
    GroupBuyDetailPage.prototype.goTop = function () {
        //var that=this
        var lyBg = this.lyScrollDiv.nativeElement;
        var navbar = this.navbar.nativeElement;
        var btn1 = this.btn1.nativeElement;
        var btn2 = this.btn2.nativeElement;
        lyBg.addEventListener('scroll', function () {
            var top = lyBg.scrollTop;
            var num = top / 300;
            if (num <= 1) {
                this.opcity = num;
            }
            else {
                this.opcity = 1;
            }
            navbar.style.opacity = this.opcity;
            btn1.style.opacity = (1 - (this.opcity * 2));
            btn2.style.opacity = (1 - (this.opcity * 2));
        }, false);
    };
    /**拼单购买 */
    GroupBuyDetailPage.prototype.gotogroupbuy = function () {
        if (this.userID == "") {
            this.nativeService.showToast("添加失败，请先登录再加入购物车");
            return;
        }
        this.grouptype = 1;
        if (this.desflag == true) {
            this.goodstype = true;
            this.goodsshow = true;
        }
        else {
            var item = {
                GouponID: this.groupID,
                ProductBH: this.Group.ProductBH,
                ProductID: this.Group.ProductID,
                grouptype: this.grouptype,
                GroupID: this.GrouponID
            };
            this.navCtrl.push('GroupSettlementPage', {
                Info: item,
                picurl: this.slide.length > 0 ? this.slide[0].Url : ""
            });
        }
        // this.navCtrl.push("InviteFriendsPage");
    };
    /**单独购买 */
    GroupBuyDetailPage.prototype.signplebuy = function () {
        if (this.userID == "") {
            this.nativeService.showToast("添加失败，请先登录再加入购物车");
            return;
        }
        this.grouptype = 0;
        if (this.desflag == true) {
            this.goodstype = true;
            this.goodsshow = true;
        }
        else {
            var item = {
                GouponID: this.groupID,
                ProductBH: this.Group.ProductBH,
                ProductID: this.Group.ProductID,
                GroupID: this.GrouponID,
                grouptype: this.grouptype
            };
            console.log(item);
            this.navCtrl.push('GroupSettlementPage', {
                Info: item,
                picurl: this.slide.length > 0 ? this.slide[0].Url : ""
            });
        }
    };
    /**查看留言 */
    /**加载商品信息 */
    GroupBuyDetailPage.prototype.Load = function () {
        var _this = this;
        var userInfo = {
            FranchiseeID: "",
            GrouponID: this.Group.ID,
            ProductID: this.Group.ProductID
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1090";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.Porduct = result.Data;
                _this.name = result.Data.Name;
                _this.commite = _this.Porduct.comment;
                if (_this.commite != null) {
                    _this.rate = _this.commite.rate;
                }
                _this.mobGroupon = _this.Porduct.mobGroupon;
                if (result.Data.PicList != null && result.Data.PicList != "") {
                    _this.slide = JSON.parse(result.Data.PicList);
                }
                if (result.Data.AttList != null && result.Data.AttList != "") {
                    _this.ProductAttr.AttrList = JSON.parse(result.Data.AttList);
                }
                _this.ProductAttr.ProductID = _this.Group.ProductID;
                _this.ProductAttr.ProductName = result.Data.Name;
                _this.ProductAttr.ProductPrice = result.Data.ActivityPrice;
                _this.ProductAttr.ProductImage = _this.slide.length > 0 ? _this.slide[0].Url : "";
                _this.des = _this.nativeService.assembleHTML(result.Data.Descript);
                _this.goodsinfo = _this.nativeService.assembleHTML(result.Data.Specifications);
                if (_this.mobGroupon.isHaveSex == 0) {
                    _this.desflag = false;
                }
                else {
                    _this.desflag = true;
                }
            }
        });
    };
    /**加载团购信息 */
    GroupBuyDetailPage.prototype.Load2 = function () {
        var _this = this;
        var Info = {
            CouponID: this.Group.ID,
            UserID: this.userInfo != null ? this.userInfo.ID : ""
        };
        //console.info(Info);
        var parm = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parm.jyh = "1101";
        parm.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == "1") {
                var grouponList = result.Data;
                console.log(grouponList);
                for (var i = 0; i < grouponList.length; i++) {
                    var group = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["c" /* GroupList */]();
                    group.CouponID = grouponList[i].CouponID;
                    var date = new Date(grouponList[i].EndTime);
                    group.EndTime = date;
                    group.State = grouponList[i].State;
                    group.WaitNum = grouponList[i].WaitNum;
                    group.SponserTime = grouponList[i].SponserTime;
                    group.HeadUrl = grouponList[i].HeadUrl;
                    group.LoginName = grouponList[i].LoginName;
                    group.timer.endDate = date;
                    group.timer.ngAfterViewInit();
                    _this.grouponList.push(group);
                }
                console.log(_this.grouponList);
                _this.groupCount = result.Msg;
            }
        });
    };
    GroupBuyDetailPage.prototype.jsonchange = function (item) {
        return JSON.parse(item);
    };
    GroupBuyDetailPage.prototype.switch = function (flag) {
        this.switchnum = flag;
    };
    /**查看评论 */
    GroupBuyDetailPage.prototype.gotojudge = function () {
        this.navCtrl.push("JudegePage", {
            goodID: this.goodsid,
        });
    };
    /**去结算 */
    GroupBuyDetailPage.prototype.gotoblance = function (item) {
    };
    /* 留言 */
    GroupBuyDetailPage.prototype.gotochat = function () {
        this.navCtrl.push("ChatPage", {
            proid: this.goodsid,
            name: this.name,
            picurl: this.slide[0].Url,
        });
    };
    /* 收藏 */
    GroupBuyDetailPage.prototype.collection = function () {
        var _this = this;
        if (this.userID == "") {
            this.nativeService.showToast("收藏失败，请先登录");
            return;
        }
        else {
            var userInfo = {
                Userid: this.userID,
                FranchiseeID: this.Fh,
                goodsID: this.goodsid,
            };
            //console.log(userInfo);
            var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
            parameter.jyh = "1019";
            parameter.parm = JSON.stringify(userInfo);
            this.nativeService.showLoading("获取中");
            this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
                _this.nativeService.hideLoading();
                var result = JSON.parse(res.result);
                if (result.Code == 1) {
                    _this.nativeService.showToast(result.Msg);
                    _this.shoacngflag = false;
                }
                else {
                    _this.nativeService.showToast(result.Msg);
                }
            });
        }
    };
    /* 去购物车 */
    GroupBuyDetailPage.prototype.gotogoodscar = function () {
        if (this.userID == "") {
            this.nativeService.showToast("请先登录");
            return;
        }
        else {
            this.navCtrl.push("GoodscarPage", {
                type: 1,
            });
        }
    };
    /* 取消收藏 */
    GroupBuyDetailPage.prototype.cancel = function () {
        var _this = this;
        if (this.userID == "") {
            this.nativeService.showToast("取消收藏失败，请先登录");
            return;
        }
        else {
            var userInfo = {
                Userid: this.userID,
                FranchiseeID: this.Fh,
                goodsID: this.goodsid,
            };
            var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
            parameter.jyh = "1020";
            parameter.parm = JSON.stringify(userInfo);
            this.nativeService.showLoading("获取中");
            this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
                _this.nativeService.hideLoading();
                var result = JSON.parse(res.result);
                if (result.Code == 1) {
                    _this.nativeService.showToast(result.Msg);
                    _this.shoacngflag = true;
                }
                else {
                    _this.nativeService.showToast(result.Msg);
                }
            });
        }
    };
    /* 判断是否收藏 */
    GroupBuyDetailPage.prototype.collect = function () {
        var _this = this;
        if (this.userID == "") {
            return;
        }
        else {
            var userInfo = {
                UserID: this.userID,
                FranchiseeID: this.Fh,
                ProductID: this.goodsid,
            };
            ////console.info(userInfo)
            var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
            parameter.jyh = "1044";
            parameter.parm = JSON.stringify(userInfo);
            this.nativeService.showLoading("获取中");
            this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
                _this.nativeService.hideLoading();
                var result = JSON.parse(res.result);
                ////console.info(result)
                if (result.Code == 1) {
                    _this.shoacngflag = false;
                }
                else {
                }
            });
        }
    };
    GroupBuyDetailPage.prototype.Fight = function (item) {
        if (this.desflag == true) {
            this.goodstype = true;
            this.goodsshow = true;
        }
        else {
            this.FightID = item.CouponID;
            this.grouptype = 1;
            var Info = {
                GouponID: this.groupID,
                ProductBH: this.Group.ProductBH,
                ProductID: this.Group.ProductID,
                grouptype: 1,
                GroupID: this.GrouponID,
                FightID: item.CouponID
            };
            this.navCtrl.push('GroupSettlementPage', {
                Info: Info,
                picurl: this.slide.length > 0 ? this.slide[0].Url : ""
            });
        }
    };
    GroupBuyDetailPage.prototype.alertType = function () {
        //var that = this;
        this.showflag1 = true;
        this.showflag = true;
    };
    GroupBuyDetailPage.prototype.hide = function () {
        var that = this;
        this.showflag = false;
        setTimeout(function () {
            that.showflag1 = false;
        }, 150);
    };
    return GroupBuyDetailPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lyScroll'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], GroupBuyDetailPage.prototype, "lyScrollDiv", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btnBackTop'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], GroupBuyDetailPage.prototype, "bBackTop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('navbar'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], GroupBuyDetailPage.prototype, "navbar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btn1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], GroupBuyDetailPage.prototype, "btn1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btn2'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], GroupBuyDetailPage.prototype, "btn2", void 0);
GroupBuyDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-group-buy-detail',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\group-buy-detail\group-buy-detail.html"*/'<ion-content style="background:#eee;">\n  <page-template-three [(goodstype)]="goodstype" [(goodsshow)]="goodsshow" [(ProductAttr)]="ProductAttr" [(desflag)]="desflag"\n    [(Fh)]="Fh" [(goodsid)]="goodsid" [(userID)]="userID" [(guige)]="guige" [(grouptype)]="grouptype" [(groupID)]="groupID"\n    [(GrouponID)]="GrouponID" [(FightID)]="FightID"></page-template-three>\n\n  <div #btn1 class="backbtn" tappable (click)="goback()"></div>\n  <div #btn2 class="more"></div>\n  <div class="navbar" #navbar>\n    <div class="backbtn2" tappable (click)="goback()"></div>\n    <div class="more2"></div>\n  </div>\n  <div #lyScroll class="scrollcontent">\n    <div class="goods-banner">\n      <ion-slides pager=true>\n        <ion-slide style="background:#e4e4e4" *ngFor="let item of slide">\n          <img style="width:100%;height:100%;" [src]="item.Url" alt="" tappable (click)="gotoslideImg(slide)">\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <!-- <div class="spacila-price">\n      <div class="spacila-price-left">\n        <div class="spacila-price-left1">\n          ￥2999.00\n        </div>\n        <div class="spacila-price-left2">\n          <div class="spacila-price-left-btn1">￥3338.0</div>\n          <div class="spacila-price-left-btn2">6336件已售</div>\n        </div>\n      </div>\n      <div class="spacila-price-right">\n        <div class="spacila-price-right1">距离结束还剩</div>\n        <div class="spacila-price-right2">\n          <span>35</span>:\n          <span>35</span>:\n          <span>35</span>\n        </div>\n      </div>\n    </div> -->\n    <div style="background:#fff;width:100%;padding-top:18px;" *ngIf="Porduct!=null">\n      <div class="goods-title">\n        {{Porduct.Name}}\n      </div>\n      <div class="goods-price">\n        <div>\n          <span style="font-size:12px;">￥</span>\n          {{Porduct.ActivityPrice}}</div>\n        <div>\n          <span>￥</span>\n          {{Porduct.OldPrice}}</div>\n        <!-- <div>直降10元</div> -->\n      </div>\n    </div>\n    <div style="width:100%;background:#fff;" *ngIf="groupCount>0">\n      <div class="goods-chioce" tappable (click)="alertType()">\n        <div>{{groupCount}}人在拼单，可直接参与</div>\n        <div>查看更多</div>\n        <div>\n          <img [src]="img" alt="">\n        </div>\n      </div>\n      <div class="group-list" *ngFor="let item of grouponList">\n        <div class="group-list-left">\n          <img [src]="item.HeadUrl" alt="">\n          <div>{{item.LoginName}}</div>\n        </div>\n        <div class="group-list-right">\n          <div class="right-btn2">\n            <div>还差{{item.WaitNum}}人拼成</div>\n            <div style="font-size:0.6em;color:#3d3d3f">剩余{{item.timer.hour}}:{{item.timer.minute}}:{{item.timer.second}}</div>\n          </div>\n          <div class="right-btn" tappable (click)="Fight(item)">去拼单</div>\n        </div>\n      </div>\n    </div>\n    <!-- <div  style="width:100%;background:#fff;margin-top:7px;border-bottom:1px solid #e5e5e5">\n      <div class="user-judge">\n        暂无评论！\n      </div>\n    </div> -->\n    <div style="width:100%;background:#fff;margin-top:7px;border-bottom:1px solid #e5e5e5" tappable (click)="gotojudge()">\n      <div class="user-judge">\n        <div>用户评价</div>\n        <div *ngIf="commite!=null">{{rate}}%</div>\n        <div style="text-align:center;" *ngIf="commite!=null">满意</div>\n        <div *ngIf="commite==null"></div>\n        <div style="text-align:center;" *ngIf="commite==null">暂无评价</div>\n        <div>\n          <img [src]="img" alt="">\n        </div>\n      </div>\n    </div>\n    <div *ngIf="commite!=null" style="padding-bottom:10px;background:#fff;margin-bottom:10px">\n      <div class="judge-part">\n        <div class="judge-title">\n          <div *ngIf="commite.HeadUrl!=undefined">\n            <img class="headimg" [src]="commite.HeadUrl" alt="">\n          </div>\n          <div>\n            {{commite.Nickname}}\n          </div>\n        </div>\n        <div class="judge-content">\n          {{commite.comcontent}}\n        </div>\n        <div class="judge-img" *ngIf="commite.ImgList!=undefined">\n          <img *ngFor="let item2 of jsonchange(commite.ImgList) " [src]="item2.Url" alt="" tappable (click)="gotoslideImg(jsonchange(commite.RelImgList))">\n        </div>\n        <div class="judge-con" *ngIf="commite.Scontent!=null">\n          <div>\n            <span style="color:#ff4f4f;padding-right:3px;">商家回复:</span>{{commite.Scontent}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="goods-switch">\n      <div [ngClass]="{true:\'switch-color\',false:\'\'}[switchnum]" style="border-right:1px solid #333" tappable (click)="switch(true)">概述</div>\n      <div [ngClass]="{true:\'switch-color\',false:\'\'}[!switchnum]" tappable (click)="switch(false)">参数</div>\n    </div>\n    <div *ngIf="switchnum" [innerHTML]="des"></div>\n    <div style="background:#fff;padding:10px 0px 10px 0px;margin-top:10px;" *ngIf="!switchnum" [innerHTML]="goodsinfo"></div>\n\n\n  </div>\n</ion-content>\n<ion-footer style="height:41px;">\n  <div class="goods-buy">\n    <div tappable (click)="gotochat()">\n      <img [src]="img8" alt="">\n      <div>留言</div>\n    </div>\n    <div *ngIf="shoacngflag" tappable (click)="collection()">\n      <img [src]="img2" alt="">\n      <div>收藏</div>\n    </div>\n    <div *ngIf="!shoacngflag" tappable (click)="cancel()">\n      <img [src]="img5" alt="">\n      <div style="color:#ff4f4f">已收藏</div>\n    </div>\n    <div tappable (click)="gotogoodscar()">\n      <img [src]="img3" alt="">\n      <div>购物车</div>\n    </div>\n    <div class="goincar1" *ngIf="mobGroupon!=null">\n      <div style="background:#FF8484" tappable (click)="signplebuy()">\n        <div>￥{{mobGroupon.SinglePrice}}</div>\n        <div>单独购买</div>\n      </div>\n      <div style="background:#ff4f4f" tappable (click)="gotogroupbuy()">\n        <div>￥{{mobGroupon.GroupPrice}}</div>\n        <div>发起拼单</div>\n      </div>\n    </div>\n    <!--  <div  class="goincar">加入购物车</div> -->\n  </div>\n  <div class="cover" *ngIf="showflag1" [ngClass]="{true:\'goshow\',false:\'gohide\'}[showflag]">\n    <div class="clickbtn" tappable (click)="hide()"></div>\n    <div class="alertpart" [ngClass]="{true:\'goup\',false:\'godown\'}[showflag]">\n      <div class="group-list" *ngFor="let item of grouponList">\n        <div class="group-list-left">\n          <img [src]="item.HeadUrl" alt="">\n          <div>{{item.LoginName}}</div>\n        </div>\n        <div class="group-list-right">\n          <div class="right-btn2">\n            <div>还差{{item.WaitNum}}人拼成</div>\n            <div style="font-size:0.6em;color:#3d3d3f">剩余{{item.timer.hour}}:{{item.timer.minute}}:{{item.timer.second}}</div>\n          </div>\n          <div class="right-btn" tappable (click)="Fight(item)">去拼单</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\group-buy-detail\group-buy-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], GroupBuyDetailPage);

//# sourceMappingURL=group-buy-detail.js.map

/***/ })

});
//# sourceMappingURL=103.js.map?v=107