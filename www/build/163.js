webpackJsonp([163],{

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodscarPageModule", function() { return GoodscarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goodscar__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GoodscarPageModule = (function () {
    function GoodscarPageModule() {
    }
    return GoodscarPageModule;
}());
GoodscarPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__goodscar__["a" /* GoodscarPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__goodscar__["a" /* GoodscarPage */]),
        ],
    })
], GoodscarPageModule);

//# sourceMappingURL=goodscar.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoodscarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_params__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GoodscarPage = (function () {
    function GoodscarPage(navCtrl, navParams, app, httpService, nativeService, storage, modalCtrl, params) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.params = params;
        this.img = "assets/imgs/chone.png";
        this.img2 = "assets/imgs/unchone.png";
        this.img3 = "assets/imgs/goodthing.png";
        this.img4 = "assets/imgs/goodscar.png";
        this.img5 = "assets/imgs/fanhui2.png";
        this.img6 = "assets/imgs/gengduo2.png";
        this.img7 = "assets/imgs/jian.png";
        this.img8 = "assets/imgs/jia.png";
        this.img9 = "assets/imgs/code2.png";
        this.num = 1;
        this.snumChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.Property = true;
        this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.listflag = [];
        this.flagall = false;
        this.type = 1;
        this.goodslist = [];
        this.num1 = [];
        this.totalnum = 0;
        this.Idlist = [];
        this.Idflag = -1;
        this.showflag = false;
        this.coupon_flag = true;
        this.coupon_flag1 = true;
        var type = this.navParams.get("type");
        if (type == 1) {
            this.type = 1;
        }
        else {
            this.type = 0;
        }
        ;
    }
    GoodscarPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.settle();
        this.storage.get("userinfo").then(function (val) {
            _this.nativeService.log('goodscar', 'ionViewWillEnter>storage.get("userinfo") val》' + val);
            if (val != "" && val != null && val.userinform) {
                _this.UID = val.userinform.UID;
                _this.settle();
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true, tabindex: 2, popFlag: true });
                }
                else {
                    _this.userID = val.userinform.ID;
                    //this.FranchiseeID = val.address.ID;
                    _this.FranchiseeID = val.userinform.FranchiseeID;
                    _this.login();
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true, tabindex: 2, popFlag: true });
            }
        });
        ////console.info(this.Idlist);
        //初始化变量
    };
    GoodscarPage.prototype.ionViewDidLoad = function () {
        for (var n = 0; n < this.list.length; n++) {
            this.listflag.push(false);
        }
        ;
        this.snum = 3;
        this.snumChange.emit(this.snum);
        ////console.info(this.listflag)
    };
    //扫码
    GoodscarPage.prototype.QRcode = function () {
        // this.sendSKU('6903148271308');
        // return;
        if (this.nativeService.isWeiXinPub()) {
        }
        else {
            this.nativeService.showToast("请在微信中使用扫码功能");
            return;
        }
        var that = this;
        wx.scanQRCode({
            desc: 'scanQRCode desc',
            needResult: 1,
            scanType: ["qrCode", "barCode"],
            success: function (res) {
                //  alert(res.resultStr);
                if (res.resultStr.indexOf("http") != -1) {
                    that.nativeService.showToast("请扫描正确条码");
                    return;
                }
                else {
                    // alert("错误")
                }
                if (res.resultStr.indexOf(",") != -1) {
                    that.sendSKU(res.resultStr.split(",")[1]);
                }
                else {
                    that.sendSKU(res.resultStr);
                }
            },
            error: function (res) {
                if (res.errMsg.indexOf('function_not_exist') > 0) {
                    alert('版本过低请升级');
                }
            }
        });
    };
    GoodscarPage.prototype.sendSKU = function (item) {
        var _this = this;
        var userInfo = {
            SKU: item
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1159";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.addGoodCar(result.Data);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    GoodscarPage.prototype.addGoodCar = function (pid) {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
            FranchiseeID: "",
            ProductID: pid,
            Num: 1,
            lstAttrValue: [],
            ProBH: '',
            ActivityID: "",
            ActivityType: 0,
        };
        //console.log(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1027";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.nativeService.showToast(result.Msg);
                _this.login();
                _this.getnum();
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    //结算按钮
    GoodscarPage.prototype.gotosettlement = function () {
        this.Idflag = -1;
        for (var a = 0; a < this.goodslist.length; a++) {
            for (var b = 0; b < this.goodslist[a].List.length; b++) {
                if (this.goodslist[a].List[b].isCheck == 1) {
                    var list = { "ID": this.goodslist[a].List[b].ID };
                    this.Idlist.push(list);
                }
                else {
                }
                /* if (this.goodslist[a].List[b].isCheck == 1) {
                  if (this.Idflag == a || this.Idflag == -1) {
                    var list = { "ID": this.goodslist[a].List[b].ID, "AttrName": this.goodslist[a].List[b].AttrName };
                    this.Idlist.push(list);
                    this.Idflag = a;
                  } else {
                    this.nativeService.showToast("不同站点的商品请分开结算");
                    this.Idlist = [];
                    flag=false;
                  }
                 
                } else {
        
                } */
            }
        }
        if (this.Idlist[0] == undefined) {
            ////console.info("方法1");
            this.nativeService.showToast("暂无选定商品");
        }
        else {
            this.subOrder(this.Idlist);
        }
    };
    //单个添加
    GoodscarPage.prototype.gototrue = function (a, b) {
        if (this.goodslist[a].List[b].isCheck == 0) {
            this.goodslist[a].List[b].isCheck = 1;
            this.totalnum = this.totalnum + ((this.goodslist[a].List[b].Price * 100) * (this.goodslist[a].List[b].Quantity));
        }
        else {
            this.goodslist[a].List[b].isCheck = 0;
            this.flagall = false;
            this.num1[a] = false;
            this.totalnum = this.totalnum - ((this.goodslist[a].List[b].Price * 100) * (this.goodslist[a].List[b].Quantity));
        }
        var flag = this.cheack(a);
        ////console.info(flag);
        /*  if (flag == false) {
       
         } else {
           this.flagall = true;
         } */
        if (flag == false) {
        }
        else {
            this.num1[a] = true;
            var flag2 = this.cheack2();
            if (flag2 == false) {
            }
            else {
                this.flagall = true;
            }
        }
    };
    //站点添加
    GoodscarPage.prototype.largenum = function (a) {
        if (this.num1[a] == true) {
            this.num1[a] = false;
            this.flagall = false;
            for (var b = 0; b < this.goodslist[a].List.length; b++) {
                if (this.goodslist[a].List[b].isCheck == 1) {
                    this.totalnum = this.totalnum - ((this.goodslist[a].List[b].Price * 100) * (this.goodslist[a].List[b].Quantity));
                    this.goodslist[a].List[b].isCheck = 0;
                }
                else {
                }
            }
        }
        else {
            this.num1[a] = true;
            for (var c = 0; c < this.goodslist[a].List.length; c++) {
                if (this.goodslist[a].List[c].isCheck == 0) {
                    this.totalnum = this.totalnum + ((this.goodslist[a].List[c].Price * 100) * (this.goodslist[a].List[c].Quantity));
                    this.goodslist[a].List[c].isCheck = 1;
                }
            }
        }
        var flag2 = this.cheack2();
        if (flag2 == false) {
        }
        else {
            this.flagall = true;
        }
    };
    //全部添加
    GoodscarPage.prototype.choseall = function () {
        if (this.flagall == true) {
            this.flagall = false;
            for (var a = 0; a < this.goodslist.length; a++) {
                this.num1[a] = false;
                for (var b = 0; b < this.goodslist[a].List.length; b++) {
                    if (this.goodslist[a].List[b].isCheck == 1) {
                        this.totalnum = this.totalnum - ((this.goodslist[a].List[b].Price * 100) * (this.goodslist[a].List[b].Quantity));
                        this.goodslist[a].List[b].isCheck = 0;
                    }
                    else {
                    }
                }
            }
        }
        else {
            this.flagall = true;
            for (var e = 0; e < this.goodslist.length; e++) {
                this.num1[e] = true;
                for (var f = 0; f < this.goodslist[e].List.length; f++) {
                    if (this.goodslist[e].List[f].isCheck == 0) {
                        this.totalnum = this.totalnum + ((this.goodslist[e].List[f].Price * 100) * (this.goodslist[e].List[f].Quantity));
                        this.goodslist[e].List[f].isCheck = 1;
                    }
                    else {
                    }
                }
            }
        }
    };
    GoodscarPage.prototype.cheack = function (a) {
        for (var b = 0; b < this.goodslist[a].List.length; b++) {
            if (this.goodslist[a].List[b].isCheck == 1) {
            }
            else {
                return false;
            }
        }
    };
    GoodscarPage.prototype.cheack2 = function () {
        for (var a = 0; a < this.goodslist.length; a++) {
            if (this.num1[a] == true) {
            }
            else {
                return false;
            }
        }
    };
    //加数量
    GoodscarPage.prototype.addnum = function (a, b, ID) {
        this.goodslist[a].List[b].Quantity++;
        if (this.goodslist[a].List[b].isCheck == 1) {
            this.totalnum = this.totalnum + this.goodslist[a].List[b].Price * 100;
        }
        this.uploadcars(ID, this.goodslist[a].List[b].Quantity);
    };
    //减去
    GoodscarPage.prototype.jiannum = function (a, b, ID) {
        this.nativeService.log('goodscar', 'jianum>a:' + a + '   [b]:' + b + '  [ID]:' + ID);
        if (this.goodslist[a].List[b].Quantity > 1) {
            this.goodslist[a].List[b].Quantity--;
            if (this.goodslist[a].List[b].isCheck == 1) {
                this.totalnum = this.totalnum - this.goodslist[a].List[b].Price * 100;
            }
            else {
            }
        }
        else {
        }
        this.uploadcars(ID, this.goodslist[a].List[b].Quantity);
    };
    GoodscarPage.prototype.goback = function () {
        this.app.goBack();
    };
    GoodscarPage.prototype.login = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
            FranchiseeID: this.FranchiseeID,
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1032";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                _this.goodslist = result.Data;
                // //console.info(result.Data[0].List[0].AttrName)
                if (_this.goodslist.length == 0) {
                    _this.showflag = true;
                }
                else {
                    _this.showflag = false;
                }
                _this.totalnum = 0;
                for (var a = 0; a < _this.goodslist.length; a++) {
                    _this.num1[a] = false;
                }
                _this.flagall = false;
                for (var n = 0; n < result.Data.length; n++) {
                    _this.num1.push(false);
                }
            }
            else {
            }
        });
    };
    //更新购物车
    GoodscarPage.prototype.uploadcars = function (ID, num) {
        var _this = this;
        var userInfo = {
            ID: ID,
            Num: num,
        };
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1029";
        parameter.parm = JSON.stringify(userInfo);
        // this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            // //console.info(result)
            if (result.Code == 1) {
                _this.getnum();
                //this.nativeService.hideLoading();
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    //提交订单
    GoodscarPage.prototype.subOrder = function (list) {
        var _this = this;
        var userInfo = {
            ProductID: list,
            FranchiseeID: this.FranchiseeID,
            UserID: this.userID,
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1036";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("提交中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result);
            _this.nativeService.hideLoading();
            //console.info(list)
            if (result.Code == 1) {
                _this.navCtrl.push("SettlementPage", {
                    userID: _this.userID,
                    ordermsg: result.Data,
                    list: list,
                    single: false,
                });
                _this.Idlist = [];
            }
            else {
                _this.nativeService.showToast(result.Msg);
                _this.Idlist = [];
            }
        });
    };
    //删除购物车
    GoodscarPage.prototype.DeleteGoods = function (ID, b, a) {
        var _this = this;
        var userInfo = {
            ID: ID,
        };
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1028";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("删除中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result)
            if (_this.goodslist[a].List[b].isCheck == 1) {
                _this.totalnum = _this.totalnum - ((_this.goodslist[a].List[b].Price * 100) * (_this.goodslist[a].List[b].Quantity));
            }
            else { }
            if (result.Code == 1) {
                _this.goodslist[a].List.splice(b, 1);
                _this.nativeService.showToast("删除成功");
                _this.getnum();
                if (_this.goodslist.length == 0) {
                    _this.flagall = false;
                }
                else {
                }
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    GoodscarPage.prototype.slice = function (str) {
        return str.slice(0, 12) + "...";
    };
    GoodscarPage.prototype.additem = function (a, b) {
        ////console.info(a + "和" + b);
    };
    GoodscarPage.prototype.gotoGoodDetail = function (id) {
        this.navCtrl.push("GoodDetailPage", {
            Fh: this.FranchiseeID,
            goodsid: id,
        });
        ////console.info(id);
    };
    GoodscarPage.prototype.showCouponList = function () {
        var modal = this.modalCtrl.create('CouponListPage');
        modal.present();
        // modal.onDidDismiss(data => {});
    };
    GoodscarPage.prototype.settle = function () {
        // let url = location.href.split('#')[0];
        wx.onMenuShareAppMessage({
            title: '逛贝商城邀请您来逛逛',
            desc: '关注逛贝，惊喜不断！',
            // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
            // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
            link: 'https://www.lguangguang.com/mob/?login=' + this.UID + '#/',
            imgUrl: "https://www.lguangguang.com/logo.png",
            // imgUrl: this.icon, // 分享图标
            type: 'link',
            dataUrl: '',
            success: function () {
                // 用户确认分享后执行的回调函数
                this.nativeService.showToast("分享成功");
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        });
        wx.onMenuShareTimeline({
            title: '逛贝商城邀请您来逛逛',
            link: 'https://www.lguangguang.com/mob/?login=' + this.UID + '#/',
            imgUrl: "https://www.lguangguang.com/logo.png",
            success: function () {
                this.nativeService.showToast("分享成功");
            },
        });
    };
    GoodscarPage.prototype.getnum = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1152";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                _this.params.params = result.Data;
            }
            else {
            }
        });
    };
    return GoodscarPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GoodscarPage.prototype, "snum", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], GoodscarPage.prototype, "snumChange", void 0);
GoodscarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-goodscar',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\goodscar\goodscar.html"*/'<ion-header style="min-height:43px">\n  <ion-navbar style="top:-100px;position:absolute;">\n    <ion-title mode="ios" style="top:-100px;position:absolute;">购物车——逛贝商城</ion-title>\n  </ion-navbar>\n  <div class="car-title">\n    <div *ngIf="type==1" tappable (click)="goback()">\n      <img [src]="img5" alt="">\n    </div>\n    <div *ngIf="type==0"></div>\n    <div>购物车</div>\n    <div *ngIf="type==0"></div>\n    <div class="message">\n      <img tappable (click)="QRcode()" [src]="img9" alt="">\n    </div>\n    \n  </div>\n</ion-header>\n<ion-content style="background:#e5e5e5">\n  <!--  <div style="width:100%;height:43px;"></div> -->\n  <div class="carlist" *ngIf="Property">\n    <span style="display:block;margin-bottom:10px;background:#fff;" *ngFor="let item of goodslist ;let a=index">\n      <div class="list-title" *ngIf="item.List.length>0" >\n        <div class="list-title_left">\n          <div>\n            <img *ngIf="num1[a]==true" [src]="img" tappable (click)="largenum(a)">\n            <img *ngIf="num1[a]==false" [src]="img2" tappable (click)="largenum(a)">\n          </div>\n          <div>{{item.StoreName!=null?item.StoreName:\'自营\'}}</div>\n        </div>\n        <!-- <div style="color:#ff5c00" tappable (click)="showCouponList()">优惠券</div> -->\n      </div>\n      <div class="good-item" *ngFor="let item2 of item.List ; let i=index">\n        <div tappable (click)="additem(b,i)">\n          <img *ngIf="item2.isCheck==1" [src]="img" tappable (click)="gototrue(a,i)">\n          <img *ngIf="item2.isCheck==0" [src]="img2" tappable (click)="gototrue(a,i)">\n        </div>\n        <div>\n          <img tappable (click)="gotoGoodDetail(item2.ProductId)" [src]="item2.PicUrl" alt="">\n          <div class="goodsintro">\n            <div>{{item2.Name}}</div>\n            <div class="item-price">\n              <div>\n                <span class="baseColor">\n                  ￥{{item2.Price.toFixed(2)}}\n                </span>\n              </div>\n              <div style="color:#b6b6b6;text-decoration:line-through">\n                <span>\n                  ￥{{item2.OldPrice.toFixed(2)}}\n                </span>\n              </div>\n            </div>\n            <div>\n              <div style="border-right:none;text-align:center;line-height:20px;" tappable (click)="jiannum(a,i,item2.ID)">\n                <img [src]="img7" alt="">\n              </div>\n              <div style="line-height:20px;text-align:center">{{item2.Quantity}}</div>\n              <div style="border-left:none;text-align:center;font-size:15px;line-height:20px;" tappable (click)="addnum(a,i,item2.ID)">\n                <img [src]="img8" alt="">\n              </div>\n            </div>\n            <div *ngIf="item2.AttrName!=\'\'&&item2.AttrName!=null" [innerHTML]="item2.AttrName">\n            </div>\n          </div>\n        </div>\n        <div tappable (click)="DeleteGoods(item2.ID,i,a)">\n          删除\n        </div>\n      </div>\n    </span>\n  </div>\n  <div style="width:100%;height:40px;"></div>\n  <div class="no-goods" *ngIf="showflag">\n    <img [src]="img4" alt="">\n    <div>购物车还是空的哦</div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div [ngClass]="{true:\'car-totil\',false:\'car-totil2\'}[type==0]" *ngIf="Property">\n    <div tappable (click)="choseall()">\n      <img *ngIf="flagall" [src]="img" alt="">\n      <img *ngIf="!flagall" [src]="img2" alt=""> 全选\n    </div>\n    <div>合计:￥{{(totalnum/100).toFixed(2)}}</div>\n    <div tappable (click)="gotosettlement()">去结算</div>\n  </div>\n\n\n</ion-footer>\n<!-- <div class="cover" *ngIf="coupon_flag" [ngClass]="{true:\'goshow\',false:\'gohide\'}[coupon_flag1]">\n  <div class="clickbtn" tappable (click)="hide()"></div>\n  <div class="alertpart2" [ngClass]="{true:\'goup\',false:\'godown\'}[coupon_flag1]"></div>\n</div> -->'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\goodscar\goodscar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_6__providers_params__["a" /* Params */]])
], GoodscarPage);

// export const Idflag = GoodscarPage. 
//# sourceMappingURL=goodscar.js.map

/***/ })

});
//# sourceMappingURL=163.js.map?v=107