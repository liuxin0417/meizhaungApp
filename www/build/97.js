webpackJsonp([97,184,185],{

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateTwoPageModule", function() { return TemplateTwoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__template_two__ = __webpack_require__(745);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TemplateTwoPageModule = (function () {
    function TemplateTwoPageModule() {
    }
    return TemplateTwoPageModule;
}());
TemplateTwoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__template_two__["a" /* TemplateTwoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__template_two__["a" /* TemplateTwoPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__template_two__["a" /* TemplateTwoPage */]
        ]
    })
], TemplateTwoPageModule);

//# sourceMappingURL=template-two.module.js.map

/***/ }),

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

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componnets_template_template_module__ = __webpack_require__(653);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componnets_template_two_template_two_module__ = __webpack_require__(650);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home__ = __webpack_require__(824);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_4__home__["a" /* HomePage */]),
            __WEBPACK_IMPORTED_MODULE_1__componnets_template_template_module__["TemplatePageModule"],
            __WEBPACK_IMPORTED_MODULE_2__componnets_template_two_template_two_module__["TemplateTwoPageModule"]
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplateTwoPage; });
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





var TemplateTwoPage = (function () {
    function TemplateTwoPage(navCtrl, navParams, nativice, httpservice, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.nativice = nativice;
        this.httpservice = httpservice;
        this.nativeService = nativeService;
        this.img = "assets/imgs/temporary/banner.png";
        this.img2 = "assets/imgs/temporary/shangpin.png";
        this.img3 = "assets/imgs/temporary/shangpin2.png";
        this.img4 = "assets/imgs/close.png";
        this.img7 = "assets/imgs/jian.png";
        this.img8 = "assets/imgs/jia.png";
        this.num = 1;
        this.goodstypeChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.goodsshowChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.ProductAttrChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.desflagChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.FhChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.goodsidChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.guigeChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.userIDChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.seckInfoChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.shownum = -1;
        this.btnflag = false;
        this.list = [];
        this.alertmsg = "";
    }
    TemplateTwoPage.prototype.ionViewDidLoad = function () {
    };
    TemplateTwoPage.prototype.hidetype = function () {
        /*  if (this.desflag == true) {
           var that = this;
           this.goodsshow = true;
           this.goodsshowChange.emit(this.goodsshow);
           that.goodstype = true;
           that.goodstypeChange.emit(this.goodstype);
         } else {
           
         } */
        this.goInCar(1);
    };
    TemplateTwoPage.prototype.noshow = function () {
        var _this = this;
        var that = this;
        this.goodsshow = false;
        this.goodsshowChange.emit(this.goodsshow);
        setTimeout(function () {
            that.goodstype = false;
            that.goodstypeChange.emit(_this.goodstype);
        }, 150);
    };
    TemplateTwoPage.prototype.unshow = function () {
    };
    TemplateTwoPage.prototype.close = function () {
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
    TemplateTwoPage.prototype.ChoiceAttr = function (item, item2) {
        for (var i = 0; i < item.length; i++) {
            item[i].Check = 0;
        }
        item2.Check = 1;
        this.ChangPrice();
    };
    TemplateTwoPage.prototype.ChangPrice = function () {
        var _this = this;
        console.log(this.ProductAttr);
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
        //console.log(array);
        var userInfo = {
            ProductID: this.ProductAttr.ProductID,
            lstAttrValue: array,
            FranceID: this.Fh,
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1025";
        parameter.parm = JSON.stringify(userInfo);
        this.httpservice.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.ProductAttr.ProductPrice = result.Data;
                _this.proBH = result.Data.ProductBH;
                _this.StockQuantity = result.Data.VirtualStock;
                for (var i = 0; i < _this.ProductAttr.AttrList.length; i++) {
                    if (array[i] != undefined || _this.StockQuantity == 0) {
                        // //console.info(this.StockQuantity)
                        if (_this.StockQuantity != 0) {
                            _this.btnflag = true;
                            ////console.info("执行一");
                        }
                        else {
                            ////console.info("执行二");
                            _this.btnflag = false;
                            _this.alertmsg = "商品暂无货";
                        }
                    }
                    else {
                        ////console.info("执行三");
                        _this.alertmsg = "请先选择物品型号";
                        _this.btnflag = false;
                    }
                }
            }
            else {
                _this.nativice.showToast(result.Msg);
            }
        });
    };
    TemplateTwoPage.prototype.goInCar = function (type) {
        var _this = this;
        var list;
        if (type == 1) {
            list = this.list;
        }
        else {
            list = "";
        }
        if (this.userID == "") {
            this.nativice.showToast("添加失败，请先登录再加入购物车");
            return;
        }
        var userInfo = {
            UserID: this.userID,
            FranchiseeID: this.Fh,
            ProductID: this.goodsid,
            Num: this.num,
            lstAttrValue: list,
            ProBH: "",
            ActivityID: this.seckInfo != null ? this.seckInfo.ActivityID : "",
            ActivityType: this.seckInfo != null ? this.seckInfo.AcType : 0,
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        if (this.seckInfo != null) {
            parameter.jyh = "1118";
        }
        else {
            parameter.jyh = "1027";
        }
        parameter.jyh = "1027";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpservice.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.nativeService.showToast(result.Msg);
                _this.close();
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    TemplateTwoPage.prototype.buyStrict = function (type) {
        var _this = this;
        var list;
        if (type == 1) {
            list = this.list;
        }
        else {
            list = "";
        }
        if (this.userID == "") {
            this.nativice.showToast("请先登录再购买");
            return;
        }
        var userInfo = {
            UserID: this.userID,
            ProductID: this.goodsid,
            Num: this.num,
            AttributesXml: list,
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1139";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpservice.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.nativeService.showToast(result.Msg);
                _this.navCtrl.push("SettlementPage", {
                    userID: _this.userID,
                    ordermsg: result.Data,
                    list: "",
                    single: true,
                    AttributesXml: list,
                    ProductID: _this.goodsid,
                });
                _this.close();
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    /* 无货 */
    TemplateTwoPage.prototype.alertmessage = function () {
        this.nativeService.showToast(this.alertmsg);
    };
    //加数量
    TemplateTwoPage.prototype.addnum = function () {
        this.num++;
    };
    //减去
    TemplateTwoPage.prototype.jiannum = function () {
        if (this.num > 1) {
            this.num--;
        }
        else {
        }
    };
    return TemplateTwoPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TemplateTwoPage.prototype, "goodstype", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateTwoPage.prototype, "goodstypeChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TemplateTwoPage.prototype, "goodsshow", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateTwoPage.prototype, "goodsshowChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__model_Model__["g" /* ProductAttr */])
], TemplateTwoPage.prototype, "ProductAttr", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateTwoPage.prototype, "ProductAttrChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TemplateTwoPage.prototype, "desflag", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateTwoPage.prototype, "desflagChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplateTwoPage.prototype, "Fh", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateTwoPage.prototype, "FhChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplateTwoPage.prototype, "goodsid", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateTwoPage.prototype, "goodsidChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplateTwoPage.prototype, "guige", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateTwoPage.prototype, "guigeChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TemplateTwoPage.prototype, "userID", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateTwoPage.prototype, "userIDChange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TemplateTwoPage.prototype, "seckInfo", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TemplateTwoPage.prototype, "seckInfoChange", void 0);
TemplateTwoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-template-two',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\componnets\template-two\template-two.html"*/'<div class="cover" *ngIf="goodstype" [ngClass]="{true:\'goshow\',false:\'gohide\'}[goodsshow]">\n  <div class="clickbtn" tappable (click)="close()"></div>\n  <div class="alertpart" [ngClass]="{true:\'goup\',false:\'godown\'}[goodsshow]">\n    <div class="picPart" tappable (click)="unshow()">\n      <img [src]="ProductAttr.ProductImage" alt="img2" class="goodspic">\n      <img [src]="img4" alt="" class="closebtn" tappable (click)="close()">\n      <div class="goods-detail">\n        <div style="color:#ff4f4f">￥\n          <span style="font-size:1.5em;">\n            {{ProductAttr.ProductPrice}}\n          </span>\n        </div>\n        <div style="line-height:20px;">{{ProductAttr.ProductName}}</div>\n      </div>\n    </div>\n    <div class="goodscontent">\n      <div class="typeitem" *ngFor="let item of ProductAttr.AttrList">\n        <div class="goodsTitle">{{item.TextPrompt}}</div>\n        <div class="goodsType">\n          <div *ngFor="let item2 of item.AttValueList;let i=index;" [ngClass]="{true:\'checkdiv\',false:\'nocheckdiv\'}[item2.Check==1]"\n            tappable (click)="ChoiceAttr(item.AttValueList,item2)">{{item2.Value}}\n          </div>\n        </div>\n      </div>\n      <div class="addnum">\n        <div style="border-right:none;text-align:center;line-height:20px;" tappable (click)="jiannum()">\n          <img [src]="img7" alt="">\n        </div>\n        <div style="line-height:20px;text-align:center">{{num}}</div>\n        <div style="border-left:none;text-align:center;font-size:15px;line-height:20px;" tappable (click)="addnum()">\n          <img [src]="img8" alt="">\n        </div>\n      </div>\n      <div style="height:50px;width:100%;"></div>\n    </div>\n\n    <div *ngIf="btnflag" class="buyBtn">\n      <span class="more_btn2" tappable (click)="goInCar(1)">加入购物车</span>\n      <span class="more_btn2" tappable (click)="buyStrict(1)" style="background:#e4393c">立即购买</span>\n    </div>\n    <div *ngIf="!btnflag" class="buyBtn2" tappable (click)="alertmessage()">\n      <span class="more_btn2">加入购物车</span>\n      <span class="more_btn2" style="background:#666;">立即购买</span>\n    </div>\n  </div>\n</div>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\componnets\template-two\template-two.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_0__providers_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_1__providers_NativeService__["a" /* NativeService */]])
], TemplateTwoPage);

//# sourceMappingURL=template-two.js.map

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

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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








var HomePage = (function () {
    function HomePage(navCtrl, httpService, storage, nativeService) {
        this.navCtrl = navCtrl;
        this.httpService = httpService;
        this.storage = storage;
        this.nativeService = nativeService;
        this.userData = [];
        this.slideflag = true;
        this.slidenum = 0;
        this.Datacontent = [];
        this.Dataslide = [];
        this.Databtn = [];
        this.navlist = [];
        this.selectedSegment = "0";
        this.name = [];
        this.img9 = "assets/imgs/code.png";
        this.img10 = "assets/imgs/cheat.png";
        this.img11 = "assets/imgs/search.png";
        this.pet = "kittens";
        //定位有关
        this.currentAddress = "正在定位";
        this.mapIsComplete = false;
        this.isPositioning = false;
        this.currentLatitude = "0";
        this.currentLongitude = "0";
        this.citycode = "";
        //private tabs: Tab;
        this.gotoflag = true;
        this.defaultCitycode = "1101";
    }
    HomePage.prototype.ionViewWillEnter = function () {
        /* if(this.gotoflag){
          this.navCtrl.push("FirstPage");
          this.gotoflag=false;
        }else{
    
        } */
    };
    //点击跳转加载信息
    HomePage.prototype.gotopage = function (num, ID) {
        ////console.info(ID)
        this.slides.slideTo(num, 500);
        this.slideflag = false;
        this.slidenum = num;
        this.realid();
    };
    //获取缓存信息
    HomePage.prototype.ionViewDidLoad = function () {
        // this.mapLocationAndroid();
        this.Initialization();
        if (this.nativeService.isMobile()) {
            this.mapLocationAndroid();
        }
        else {
            this.getlocationWX();
        }
        // this.storage.get("userinfo").then(val => {
        //   if (val != null) {
        //     this.userID = val.address.ID;
        //     this.Initialization2();
        //     ////console.info(val);
        //   }
        //   ////console.info(this.userID);
        // })
        // this.mapLocationAndroid();
    };
    //滑动触发事件
    HomePage.prototype.slideChanged = function () {
        var currentIndex = 0;
        if (this.slides.getActiveIndex() == this.navlist.length) {
            currentIndex = (this.slides.getActiveIndex() - 1);
        }
        else {
            currentIndex = this.slides.getActiveIndex();
        }
        if (this.slideflag == true) {
            // //console.info(this.navlist[currentIndex].ID);
            this.realid();
        }
        else {
        }
        this.selectedSegment = currentIndex.toString();
        if (currentIndex > 3 && this.slideflag == true) {
            this.slides2.slideTo((currentIndex - 3), 500);
        }
        else if (currentIndex == 0 && this.slideflag == true) {
            this.slides2.slideTo(0, 500);
        }
        this.slidenum = currentIndex;
        this.slideflag = true;
    };
    //回到顶部
    /* private goTop() {
      let lyBg = this.mySlider.nativeElement;
      lyBg.addEventListener('scrollLeft', function () {
        var top = lyBg.scrollLeft;
        //console.info(top);
      }, false);
  
  
    } */
    //页面跳转
    HomePage.prototype.GotoNitice = function () {
        this.navCtrl.push('NoticePage');
    };
    HomePage.prototype.gotologin = function () {
        this.navCtrl.push('LoginPage');
    };
    HomePage.prototype.goshoplist = function () {
        this.navCtrl.push('ShopgoodscarPage');
    };
    //获取主要内容
    HomePage.prototype.realid = function () {
        var _this = this;
        var userInfo = {
            Relid: "",
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1004";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            console.log(result);
            if (result.Code == 1) {
                _this.nativeService.hideLoading();
                for (var i = 0; i < result.Data.length; i++) {
                    if (result.Data[i].product != '') {
                        result.Data[i].productList = result.Data[i].product;
                    }
                }
                _this.userData = result.Data;
                _this.Dataslide = [];
                _this.Databtn = [];
                _this.Datacontent = [];
                for (var n = 0; n < _this.userData.length; n++) {
                    if (_this.userData[n].toltype == "1") {
                        _this.Dataslide.push(_this.userData[n]);
                    }
                    else if (_this.userData[n].toltype == "2") {
                        _this.Databtn.push(_this.userData[n]);
                    }
                    else {
                        _this.Datacontent.push(_this.userData[n]);
                    }
                }
            }
        });
    };
    //初始加载
    HomePage.prototype.Initialization2 = function () {
        var _this = this;
        console.log('Initialization2 invoke');
        var userInfo = {
            wedID: '' //this.userID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1003";
        parameter.parm = JSON.stringify(userInfo);
        console.log('Initialization2 here');
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            _this.realid();
            if (result.Code == "1") {
                if (result.Data != null && result.Data.length > 0) {
                    _this.navlist = result.Data;
                    // this.realid(result.Data[0].ID);
                }
            }
        });
    };
    HomePage.prototype.gotosearch = function () {
        // //console.info("11")
        this.navCtrl.push("SearchPage");
    };
    HomePage.prototype.Initialization = function () {
        var _this = this;
        // var dcode = this.citycode.length > 4 ? this.citycode.substring(0, 4) : this.citycode;
        if (this.citycode == this.defaultCitycode) {
            return false;
        }
        var userInfo = {
            area: this.citycode == "" ? this.defaultCitycode : this.citycode,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1002";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log('1002>');
            var result = JSON.parse(res.result);
            var address;
            var userinform;
            //if (this.userID != result.Data.ID) {
            // this.userID = result.Data.ID;
            _this.Initialization2();
            //}
            _this.storage.get("userinfo").then(function (val) {
                if (val != null) {
                    address = val.address;
                    userinform = val.userinform;
                    address = result.Data;
                }
                else {
                    userinform = { "ID": "none" };
                    address = result.Data;
                }
                _this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(function (val) {
                });
            });
        });
    };
    HomePage.prototype.mapLocationAndroid = function () {
        var _this = this;
        this.isPositioning = true;
        this.nativeService.getUserLocation().subscribe(function (position) {
            _this.currentLatitude = position['lat'];
            _this.currentLongitude = position['lng'];
            _this.storage.set("position", { 'currentLatitude': position['lat'], 'currentLongitude': position['lng'] }).then(function (val) {
            });
            _this.convertToAddress(_this.currentLongitude, _this.currentLatitude);
            _this.isPositioning = false;
        }, function () {
            _this.isPositioning = false;
        });
    };
    HomePage.prototype.convertToAddress = function (longitude, latitude) {
        var _this = this;
        //let that = this;
        AMap.service('AMap.Geocoder', function () {
            _this.geocoder = new AMap.Geocoder({
                city: "010" //城市，默认：“全国”
            });
            _this.geocoder.getAddress([longitude, latitude], function (status, result) {
                var list = result.regeocode.addressComponent;
                //console.log(list);
                var address = list.street;
                var citycode = list.adcode;
                _this.citycode = citycode;
                _this.currentAddress = address;
                _this.Initialization();
            });
        });
    };
    /* 微信获取地理位置 */
    HomePage.prototype.getlocationWX = function () {
        var that = this;
        wx.ready(function () {
            wx.getLocation({
                type: 'wgs84',
                success: function (res) {
                    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    //var speed = res.speed; // 速度，以米/每秒计
                    //var accuracy = res.accuracy; // 位置精度
                    that.Initialization3(latitude, longitude);
                }
            });
        });
    };
    HomePage.prototype.Initialization3 = function (latitude, longitude) {
        var _this = this;
        var userInfo = {
            latitude: latitude,
            longitude: longitude
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1127";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.log(result);
            var address;
            var userinform;
            _this.storage.get("userinfo").then(function (val) {
                if (val != null) {
                    address = val.address;
                    userinform = val.userinform;
                    address = result.Data;
                }
                else {
                    userinform = { "ID": "none" };
                    address = result.Data;
                }
                if (_this.userID != address.ID) {
                    _this.userID = address.ID;
                    _this.Initialization2();
                }
                _this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(function (val) {
                });
            });
        });
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slide'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
], HomePage.prototype, "slides", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slide2'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
], HomePage.prototype, "slides2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mySlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], HomePage.prototype, "mySlider", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\home\home.html"*/'<ion-header style="height:89px;">\n  <ion-title mode="ios" style="top:-100px;position:absolute;">首页</ion-title>\n  <div class="home_header">\n    <div class="header-inside">\n      <div class="qrcode">\n        <img tappable (click)="goshoplist()" [src]="img9" alt="">\n      </div>\n      <div class="search">\n        <div class="searchimg">\n          <img [src]="img11" alt="">\n        </div>\n        <input class=\'searchpart\' placeholder="爱他美" (focus)="gotosearch()" type="text">\n      </div>\n      <div class="message">\n        <img tappable (click)="GotoNitice()" [src]="img10" alt="">\n      </div>\n    </div>\n  </div>\n  <div *ngIf="65!=null&&navlist.length>=1" [ngClass]="{true:\'stylesheet2\',false:\'stylesheet1\'}[navlist.length==1]">\n    <ion-slides #slide2 style="width:100%;height:100%;" slidesPerView=5>\n      <ion-slide *ngFor="let tab of navlist, let i = index" (click)="gotopage(i,tab.ID)">\n        <div [ngClass]="{true:\'item2\',false:\'item\'}[slidenum==i]">\n          <span>\n            {{tab.Name}}\n          </span>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-header>\n<ion-content id="home" cache-view=\'true\'>\n  <!-- <div *ngIf="navlist!=null&&navlist.length>1" style="width:100%;height:89px;"></div> -->\n  <div *ngIf="navlist!=null&&navlist.length==1" style="width:100%;height:65px;"></div>\n  <div style="height:auto;width:100%;text-align:left;">\n    <ion-slides #slide loop="false" auto="3000" (ionSlideDidChange)="slideChanged()">\n      <ion-slide *ngFor="let tab of navlist, let i = index">\n        <page-template [(Databtn)]="Databtn" [(userData)]="userData" [(Datacontent)]="Datacontent" [(Dataslide)]="Dataslide" [max]="slidenum"></page-template>\n        <!--  <page-template-two *ngIf="slidenum!=0"></page-template-two> -->\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\home\home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__["a" /* NativeService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=97.js.map?v=107