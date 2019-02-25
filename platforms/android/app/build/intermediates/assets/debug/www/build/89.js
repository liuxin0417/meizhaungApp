webpackJsonp([89],{

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

/***/ })

});
//# sourceMappingURL=89.js.map?v=107