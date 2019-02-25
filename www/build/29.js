webpackJsonp([29],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeckillPageModule", function() { return SeckillPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seckill__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeckillPageModule = (function () {
    function SeckillPageModule() {
    }
    return SeckillPageModule;
}());
SeckillPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__seckill__["a" /* SeckillPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__seckill__["a" /* SeckillPage */]),
        ],
    })
], SeckillPageModule);

//# sourceMappingURL=seckill.module.js.map

/***/ }),

/***/ 830:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeckillPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_TimerDownService__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_NativeService__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SeckillPage = (function () {
    function SeckillPage(navCtrl, navParams, app, storage, httpService, nativeService, actionSheetCtrl, modalCtrl) {
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
        this.img6 = "assets/imgs/liuyan.png";
        this.switchnum = true;
        this.opcity = 0;
        this.slide = [];
        this.msg = [];
        //地址信息
        this.flag = false;
        this.flagsecond = false;
        this.addresList = [];
        //物品类型
        this.goodstype = false;
        this.goodsshow = false;
        //属性
        this.shoacngflag = true;
        this.desflag = true;
        this.ProductAttr = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["g" /* ProductAttr */]();
        this.rate = "";
        this.guige = "选择规格";
        this.slideindex = 0;
        this.timer = new __WEBPACK_IMPORTED_MODULE_0__providers_TimerDownService__["a" /* TimerDownService */]();
        this.goodsid = "0f29a444-9e49-4ba5-ac1d-52b9fc3afef2";
        this.seckInfo = this.navParams.get("seckInfo");
        this.storage.get("userinfo").then(function (val) {
            if (val != null) {
                _this.userID = val.userinform.ID;
                _this.Fh = val.address.FranchiseeID;
                _this.login();
            }
            else {
            }
            _this.collect();
        });
    }
    SeckillPage.prototype.ionViewDidLoad = function () {
        this.goTop();
    };
    SeckillPage.prototype.slideChanged = function () {
        if (this.slides.getActiveIndex() == this.slides.length()) {
            this.slideindex = this.slides.getActiveIndex() - 1;
        }
        else {
            this.slideindex = this.slides.getActiveIndex();
        }
    };
    SeckillPage.prototype.switch = function (flag) {
        this.switchnum = flag;
    };
    SeckillPage.prototype.goback = function () {
        this.app.goBack();
    };
    SeckillPage.prototype.gotochat = function () {
        this.navCtrl.push("ChatPage", {
            proid: this.goodsid,
            name: this.name,
            picurl: this.slide[0].Url,
        });
    };
    SeckillPage.prototype.goTop = function () {
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
    SeckillPage.prototype.gotojudge = function () {
        this.navCtrl.push("JudegePage", {
            goodID: this.goodsid,
        });
    };
    //取两位小数
    SeckillPage.prototype.gettwo = function (num) {
        return num.toFixed(2);
    };
    SeckillPage.prototype.gotogoodscar = function () {
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
    //图片浏览
    SeckillPage.prototype.gotoslideImg = function (slide) {
        var modal = this.modalCtrl.create('SlideImgPage', {
            slide: slide,
            slideindex: this.slideindex,
        });
        modal.present();
    };
    SeckillPage.prototype.gotoslideImg2 = function (item) {
        var arr = [];
        for (var a = 0; a < item.length; a++) {
            arr.push(item[a].Url);
        }
        var modal = this.modalCtrl.create('SlideImgPage', {
            slide: arr,
        });
        modal.present();
    };
    ;
    //收藏商品
    SeckillPage.prototype.collection = function () {
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
            var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
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
    //加载商品详情
    SeckillPage.prototype.login = function () {
        var _this = this;
        var userInfo = {
            FranchiseeID: this.Fh,
            ProductID: this.seckInfo.ProductID,
            SeckillID: this.seckInfo.ActivityID,
            SeckillProductID: this.seckInfo.ID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1117";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.commite = result.Data.comment;
                _this.name = result.Data.Name;
                if (_this.commite != null) {
                    _this.rate = _this.commite.rate;
                }
                _this.msg = result.Data;
                _this.seck = result.Data.seck;
                _this.seckproduct = result.Data.mobGroupon;
                _this.proBH = _this.seckproduct.ProductBH;
                if (result.Data.PicList != null && result.Data.PicList != "") {
                    _this.slide = JSON.parse(result.Data.PicList);
                }
                if (result.Data.AttList != null && result.Data.AttList != "") {
                    _this.ProductAttr.AttrList = JSON.parse(result.Data.AttList);
                }
                _this.ProductAttr.ProductID = _this.goodsid;
                _this.ProductAttr.ProductName = result.Data.Name;
                _this.ProductAttr.ProductPrice = result.Data.ActivityPrice;
                _this.ProductAttr.ProductImage = _this.slide.length > 0 ? _this.slide[0].Url : "";
                _this.des = _this.nativeService.assembleHTML(result.Data.Descript);
                _this.goodsinfo = _this.nativeService.assembleHTML(result.Data.Specifications);
                if (_this.seck.State == 4) {
                    _this.EndDate = new Date(_this.seck.ETime);
                    console.log(_this.EndDate);
                    _this.timer.endDate = _this.EndDate;
                    _this.timer.ngAfterViewInit();
                }
                // if (result.Data.IsHaveSx == 0) {
                //   this.desflag = false;
                // } else {
                //   this.desflag = true;
                // }
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    //取消收藏
    SeckillPage.prototype.cancel = function () {
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
            var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
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
    //判断是否收藏
    SeckillPage.prototype.collect = function () {
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
            var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
            parameter.jyh = "1044";
            parameter.parm = JSON.stringify(userInfo);
            this.nativeService.showLoading("获取中");
            this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
                _this.nativeService.hideLoading();
                var result = JSON.parse(res.result);
                if (result.Code == 1) {
                    _this.shoacngflag = false;
                }
                else {
                }
            });
        }
    };
    SeckillPage.prototype.alertAddress = function () {
        this.flag = true;
        this.flagsecond = true;
    };
    SeckillPage.prototype.alertType = function () {
        this.goodstype = true;
        this.goodsshow = true;
    };
    //加入购物车
    SeckillPage.prototype.goincar = function () {
        var _this = this;
        if (this.userID == "") {
            this.nativeService.showToast("添加失败，请先登录再加入购物车");
            return;
        }
        //var list = ""
        var userInfo = {
            UserID: this.userID,
            FranchiseeID: this.Fh,
            ProductID: this.seckInfo.ProductID,
            Num: 1,
            lstAttrValue: [],
            ProBH: this.proBH,
            ActivityID: this.seckInfo.ActivityID,
            ActivityType: this.seckInfo.AcType,
            ActivityPrice: this.seckproduct.SecKillPrice
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1118";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    SeckillPage.prototype.jsonchange = function (item) {
        return JSON.parse(item);
    };
    /* 无货 */
    SeckillPage.prototype.alertmessage = function () {
        this.nativeService.showToast("暂无此类商品");
    };
    return SeckillPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('lyScroll'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], SeckillPage.prototype, "lyScrollDiv", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('btnBackTop'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], SeckillPage.prototype, "bBackTop", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('navbar'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], SeckillPage.prototype, "navbar", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('btn1'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], SeckillPage.prototype, "btn1", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('btn2'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], SeckillPage.prototype, "btn2", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Slides"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Slides"])
], SeckillPage.prototype, "slides", void 0);
SeckillPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-seckill',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\seckill\seckill.html"*/'<ion-content style="background:#eee;">\n  <div #btn1 class="backbtn" tappable (click)="goback()"></div>\n  <div #btn2 class="more"></div>\n  <div class="navbar" #navbar>\n    <div class="backbtn2" tappable (click)="goback()"></div>\n    <div class="more2"></div>\n  </div>\n  <div #lyScroll class="scrollcontent">\n    <div class="goods-banner">\n      <ion-slides pager=true>\n        <ion-slide style="background:#e4e4e4" *ngFor="let item of slide">\n          <img style="width:100%;height:100%;" [src]="item.Url" alt="" tappable (click)="gotoslideImg(slide)">\n        </ion-slide>\n      </ion-slides>\n    </div>\n    <div style="background:#fff;width:100%;padding-top:18px;">\n      <div class="goods-title">\n        {{msg.Name}}\n      </div>\n    </div>\n    <div class="spacila-price" *ngIf="seckproduct!=null&&seck.State==4">\n      <div class="spacila-price-left">\n        <div class="spacila-price-left1">\n          ￥{{seckproduct.SecKillPrice}}\n        </div>\n        <div class="spacila-price-left2">\n          <div class="spacila-price-left-btn1">￥{{seckproduct.ActivityPrice}}</div>\n          <div class="spacila-price-left-btn2">{{seckproduct.SuccessNum}}件已售</div>\n        </div>\n      </div>\n      <div class="spacila-price-right">\n        <div class="spacila-price-right1">距离结束还剩</div>\n        <div class="spacila-price-right2">\n          <span *ngIf="timer.day>0">{{timer.day}}天</span>:\n          <span>{{timer.hour}}</span>:\n          <span>{{timer.minute}}</span>:\n          <span>{{timer.second}}</span>\n        </div>\n      </div>\n    </div>\n    <div class="goods-price" *ngIf="seckproduct!=null&&seck.State==3">\n      <div>\n        <span style="font-size:12px;">￥</span>\n        {{msg.ActivityPrice}}</div>\n      <div>\n        <span>￥</span>\n        {{msg.OldPrice}}</div>\n      <div>直降{{gettwo(msg.OldPrice-msg.ActivityPrice)}}元</div>\n      <div style="color:#999;margin-left:20%;font-size:1.2rem;">活动暂未开始</div>\n    </div>\n    <!-- <div style="width:100%;background:#fff;" *ngIf="groupCount>0" >\n      <div class="goods-chioce" tappable (click)="alertType()">\n        <div>{{groupCount}}人在拼单，可直接参与</div>\n        <div>查看更多</div>\n        <div>\n          <img [src]="img" alt="">\n        </div>\n      </div>\n      <div class="group-list" *ngFor="let item of slide">\n        <div class="group-list-left" *ngFor="let item of grouponList">\n          <img [src]="item.HeadUrl" alt="">\n          <div>{{item.LoginName}}</div>\n        </div>\n        <div class="group-list-right">\n          <div class="right-btn2">\n            <div>还差{{item.WaitNum}}人拼成</div>\n            <div style="font-size:0.6em;color:#3d3d3f">剩余12:14:05.3</div>\n          </div>\n          <div class="right-btn">去拼单</div>\n        </div>\n      </div>\n    </div> -->\n    <div *ngIf="commite==null" style="width:100%;background:#fff;margin-top:7px;border-bottom:1px solid #e5e5e5">\n      <div class="user-judge">\n        暂无评论！\n      </div>\n    </div>\n    <div *ngIf="commite!=null" style="width:100%;background:#fff;margin-top:7px;border-bottom:1px solid #e5e5e5" tappable (click)="gotojudge()">\n      <div class="user-judge">\n        <div>用户评价</div>\n        <div>{{rate}}%</div>\n        <div style="text-align:center;">满意</div>\n        <div>\n          <img [src]="img" alt="">\n        </div>\n      </div>\n    </div>\n    <div *ngIf="commite!=null" style="padding-bottom:10px;background:#fff;margin-bottom:10px">\n      <div class="judge-part">\n        <div class="judge-title">\n          <div *ngIf="commite.HeadUrl!=undefined">\n            <img class="headimg" [src]="commite.HeadUrl" alt="">\n          </div>\n          <div>\n            {{commite.Nickname}}\n          </div>\n        </div>\n        <div class="judge-content">\n          {{commite.comcontent}}\n        </div>\n        <div class="judge-img" *ngIf="commite.ImgList!=undefined">\n          <img *ngFor="let item2 of jsonchange(commite.ImgList) " [src]="item2.Url" alt="" tappable (click)="gotoslideImg(jsonchange(commite.RelImgList))">\n        </div>\n        <div class="judge-con" *ngIf="commite.Scontent!=null">\n          <div>\n            <span class="changecolor" style="padding-right:3px;">商家回复:</span>{{commite.Scontent}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="goods-switch">\n      <div [ngClass]="{true:\'switch-color\',false:\'\'}[switchnum]" style="border-right:1px solid #333" tappable (click)="switch(true)">概述</div>\n      <div [ngClass]="{true:\'switch-color\',false:\'\'}[!switchnum]" tappable (click)="switch(false)">参数</div>\n    </div>\n    <div *ngIf="switchnum" [innerHTML]="des"></div>\n    <div style="background:#fff;padding:10px 0px 10px 0px;margin-top:10px;" *ngIf="!switchnum" [innerHTML]="goodsinfo"></div>\n    <!-- <div style="width:100%;height:41px;"></div> -->\n  </div>\n</ion-content>\n<ion-footer style="height:41px;">\n  <div class="goods-buy">\n    <div tappable (click)="gotochat()">\n      <img [src]="img6" alt="">\n      <div>留言</div>\n    </div>\n    <div *ngIf="shoacngflag" tappable (click)="collection()">\n      <img [src]="img2" alt="">\n      <div>收藏</div>\n    </div>\n    <div *ngIf="!shoacngflag" tappable (click)="cancel()">\n      <img [src]="img5" alt="">\n      <div class="changecolor">已收藏</div>\n    </div>\n    <div tappable (click)="gotogoodscar()">\n      <img [src]="img3" alt="">\n      <div>购物车</div>\n    </div>\n    <div class="goincar1" *ngIf="msg.RealStock!=0" tappable (click)="goincar()">加入购物车</div>\n    <div *ngIf="msg.RealStock==0" class="goincar" tappable (click)="alertmessage()">加入购物车</div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\seckill\seckill.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["App"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_5__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"]])
], SeckillPage);

//# sourceMappingURL=seckill.js.map

/***/ })

});
//# sourceMappingURL=29.js.map?v=107