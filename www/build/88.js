webpackJsonp([88],{

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

/***/ })

});
//# sourceMappingURL=88.js.map?v=107