webpackJsonp([156],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(825);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 825:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, httpService, nativeService, app, storage, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.app = app;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.img = "assets/imgs/guanbi.png";
        this.tabindex = 0;
        this.adpic = "assets/imgs/temporary/adpic.png";
        this.showflag = false;
        this.showimg = false;
        this.popFlag = false;
        this.storage.get("userinfo").then(function (val) {
            if (val != null) {
                _this.wxInfo = val;
            }
        });
        this.tabindex = this.navParams.get("tabindex");
        this.showflag = this.navParams.get("showflag");
        this.popFlag = this.navParams.get("popFlag");
        nativeService.log('LoginPage', 'this.showflag>' + this.showflag);
        nativeService.log('LoginPage', 'this.tabindex>' + this.tabindex);
        nativeService.log('LoginPage', 'this.popFlag>' + this.popFlag);
        if (this.showflag == true) {
            this.showimg = true;
        }
        else {
            this.showflag = true;
            this.showimg = true;
            // this.goWhere();
            // this.storage.get("startDate").then(val => {
            //   if (val == null || val == undefined || val == '') {
            //     var newdate = new Date().getTime();
            //     this.storage.set("startDate", newdate);
            //     this.showimg = true;
            //   } else {
            //     var nowTime = new Date();
            //     // var timeb=nowTime.getTime()-val.getTime();
            //     //console.info("时间开始" + val);
            //     //console.info("时间结束" + nowTime.getTime());
            //     //console.info("间隔时间" + ((nowTime.getTime() - val) / 1000 / 60 / 60))
            //     var betwn = ((nowTime.getTime() - val) / 1000 / 60 / 60);
            //     if (betwn > 9000) {
            //       this.storage.set("startDate", nowTime.getTime());
            //       this.showimg = true;
            //     } else {
            //       this.showimg = false;
            //     }
            //     this.goWhere();
            //     // this.storage.set("startDate", "");
            //   }
            // });
        }
    }
    LoginPage.prototype.ionViewWillEnter = function () {
    };
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.goWhere = function () {
        var _this = this;
        if (this.showflag == true) {
            return;
        }
        var arr3 = [];
        console.info("login page  goWhere");
        var href = location.href;
        var array = href.split('?');
        //console.info("tab>>>href" + href)
        this.flag = array[1];
        if (this.flag != undefined && this.flag != null) {
            var arr2 = [];
            arr2 = this.flag.split("=");
            this.flag1 = arr2[0];
            this.flag2 = arr2[1];
            //console.info("tab>>>true")
        }
        else {
            // this.showflag = true;
            if (this.showimg) {
                setTimeout(function () {
                    _this.app.getRootNav().setRoot('TabsPage');
                }, 2000);
            }
            else {
                this.app.getRootNav().setRoot('TabsPage');
            }
            //console.info("tab>>>false")
        }
        console.info(" login page this.flag1》》》》" + this.flag1);
        if (this.flag1 == "resigiter") {
            arr3 = [];
            //console.info("tab>>>去注册页")
            arr3 = this.flag2.split("&");
            this.flag2 = arr3[0].split("#")[0].trim();
            //  this.flag2 = arr3[0].replace("#/", '').trim();
            this.app.getRootNav().setRoot('ResigiterPage', {
                tabId: this.flag2
            });
        }
        else if (this.flag1 == "login") {
            // this.showflag = true;
            arr3 = [];
            //console.info("tab>>>首页")
            arr3 = this.flag2.split("&");
            this.flag2 = arr3[0].split("#")[0].trim();
            this.storage.set("UID", this.flag2);
            this.app.getRootNav().setRoot('TabsPage', {
                tabId: 0
            });
        }
        else if (this.flag1 == "goodsDetail") {
            arr3 = [];
            arr3 = this.flag2.split("&");
            var flag2 = arr3[0].split("#")[0].trim();
            this.flag2 = flag2.split("UID:")[0];
            var UID = flag2.split("UID:")[1];
            //console.info("uid>>>>>>>>>>>>>>>>>>>>" + UID)
            this.storage.set("UID", UID);
            this.app.getRootNav().setRoot('GoodDetailPage', {
                goodsid: this.flag2,
            });
        }
        else if (this.flag1 == "shopIndex") {
            arr3 = [];
            arr3 = this.flag2.split("&");
            this.flag2 = arr3[0].split("#")[0].trim();
            //console.info("shopID>>>>>" + this.flag2)
            this.app.getRootNav().setRoot('ShopIndexPage', {
                ShopID: this.flag2,
            });
        }
        else {
            this.app.getRootNav().setRoot('TabsPage');
        }
    };
    LoginPage.prototype.gotoresgiter = function () {
        // this.navCtrl.push("ResigiterPage");
        var modal = this.modalCtrl.create('ResigiterPage', {
            showflag: true
        });
        modal.present();
    };
    LoginPage.prototype.gotoreset = function () {
        // this.navCtrl.push("ForgotPasswordPage");
        var modal = this.modalCtrl.create('ForgotPasswordPage', {
            showflag: true
        });
        modal.present();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.nativeService.log('LoginPage', 'login come');
        if (this.phonenum == "") {
            this.nativeService.showToast("手机号码号码不能为空");
            return;
        }
        else {
            var phonenum = this.phonenum.toString();
            if (phonenum.length != 11) {
                this.nativeService.showToast("请输入正确手机号");
                return;
            }
        }
        if (this.password == undefined || this.password == undefined || this.password == "") {
            this.nativeService.showToast("请输入密码");
            return;
        }
        var userInfo = {
            LoginName: this.phonenum,
            Pwd: this.password,
            openId: this.wxInfo != null ? this.wxInfo.openId : "",
            nickName: this.wxInfo != null ? this.wxInfo.nickName : "",
            HeadUrl: this.wxInfo != null ? this.wxInfo.HeadUrl : ""
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1001";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code != 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                var address = [];
                var userinform;
                result.Data.FranchiseeID = 1;
                userinform = result.Data;
                //console.info(userinform);
                _this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(function (val) {
                    _this.nativeService.log('LoginPage', 'login back set root>' + _this.tabindex);
                    //this.navCtrl.remove(0, this.navCtrl.length() - 1);
                    //this.navCtrl.insert(0, 'TabsPage',{tabId: this.tabindex});
                    _this.navCtrl.pop();
                    // //================
                    // this.nativeService.log('LoginPage', 'login back set root>'+this.tabindex);
                    // this.app.getRootNav().push('TabsPage', {
                    //   tabId: 0
                    // });
                    // if (this.popFlag) {
                    //   this.nativeService.log('LoginPage', 'login back pop>'+this.tabindex);
                    //   this.navCtrl.pop();
                    // } else {
                    //   this.nativeService.log('LoginPage', 'login back set root>'+this.tabindex);
                    //   this.app.getRootNav().push('TabsPage', {
                    //     tabId: 0
                    //   });
                    //   // this.navCtrl.remove(0, this.navCtrl.length() - 1);
                    //   // this.navCtrl.insert(0, 'TabsPage',{tabId: this.tabindex});
                    //   // this.navCtrl.pop();
                    // }
                });
            }
        });
    };
    LoginPage.prototype.gotohome = function () {
        // this.navCtrl.remove(0, this.navCtrl.length() - 1);
        // this.navCtrl.insert(0, 'TabsPage',{tabId: 0});
        // this.navCtrl.pop();
        //好用 但会tab面会改变
        // this.navCtrl.setRoot('TabsPage', {
        //   tabId: 0
        // });
        //可用
        // this.navCtrl.push('TabsPage', {
        //     tabId: 0
        //   });
        //不好用
        // this.app.getRootNav().setRoot('TabsPage', {
        //   tabId: 0
        // });
        //this.app.getRootNav()._linker._history=[];
        //this.app.getRootNav()._linker._history=[];
        //let a= NavOptions();
        //this.navCtrl.push('TabsPage', {tabId:0});
        this.app.getRootNav().setRoot('TabsPage');
        //this.app.getRootNav().getRootNav()._linker._history=[];
        //this.navCtrl.popToRoot();
        // this.app.getRootNavs()[0].setRoot(LoginPage);
        this.nativeService.log('LoginPage', 'gotohome >' + this.tabindex);
        this.nativeService.log('LoginPage', 'his.app.getRootNavs()[0] >' + this.app.getRootNavs().length);
        this.nativeService.log('LoginPage', 'this.app.getActiveNav()>' + this.app.getActiveNav().id);
        //this.app.getRootNav()._linker._history
        // this.app.getActiveNav().setRoot('TabsPage', {
        //   tabId: 0
        // });
        //var nav_tmp= this.app.getRootNavById('n4');
        //以下无效
        // this.app.getRootNavs()[0].setRoot('TabsPage', {
        //   tabId: 0
        // });
        // this.navCtrl=this.app.getRootNavs()[0];
        //    this.app.getRootNavs()[0].setRoot('TabsPage', {
        //   tabId: 0
        // });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <!-- <div *ngIf="!showimg" class="appSplash" [style.height.px]="appSplashHeight">\n    <div class="container-loading">\n      <div class="splash-loader"></div>\n      <img class="splash-logo" src="./assets/imgs/logo_2.png" alt="">\n    </div>\n  </div> -->\n\n  <div *ngIf="showflag" style="width:100%;height:100%;">\n    <div class="logoimg">\n      <img [src]="img" alt="" tappable (click)="gotohome()">\n    </div>\n    <div class="phonenum">\n      <input type="number" placeholder="请输入手机号" [(ngModel)]="phonenum">\n    </div>\n    <div class="password">\n      <input type="password" placeholder="密码" [(ngModel)]="password">\n    </div>\n    <div class="login-btn" tappable (click)="login()">\n      登录\n    </div>\n    <div class="loginmore">\n      <div tappable (click)="gotoresgiter()">注册账户</div>\n      <div tappable (click)="gotoreset()">忘记密码</div>\n    </div>\n  </div>\n  <!-- <div *ngIf="showimg" class="coverpart">\n    <img [src]="adpic" alt="">\n  </div> -->\n\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=156.js.map?v=107