webpackJsonp([54],{

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamPageModule", function() { return MyTeamPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_team__ = __webpack_require__(782);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyTeamPageModule = (function () {
    function MyTeamPageModule() {
    }
    return MyTeamPageModule;
}());
MyTeamPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_team__["a" /* MyTeamPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__my_team__["a" /* MyTeamPage */]),
        ],
    })
], MyTeamPageModule);

//# sourceMappingURL=my-team.module.js.map

/***/ }),

/***/ 782:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamPage; });
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







/**
 * Generated class for the MyTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTeamPage = (function () {
    function MyTeamPage(navCtrl, navParams, httpService, nativeService, storage, Inservice) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.Inservice = Inservice;
        this.headimg = "assets/imgs/grey1.png";
        this.img = "assets/imgs/jinru--hui.png";
        this.isshow = true;
        this.padding = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["e" /* Padding */]();
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userID = val.userinform.ID;
                    _this.getTeam();
                }
                // this.load2();
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
    }
    MyTeamPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad MyTeamPage');
    };
    MyTeamPage.prototype.getTeam = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1149";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code == 1) {
                _this.teamList = result.Data;
                var msgText = result.Msg;
                //console.log('msgText>'+msgText);
                _this.fNum = msgText.split(',')[0] * 1;
                _this.sNum = msgText.split(',')[1] * 1;
                _this.sTotal = _this.fNum + _this.sNum;
                //console.log('sTotal>'+typeof(this.fNum));
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    MyTeamPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        /* infiniteScroll.enable(true); */
        this.nativeService.log('my-team', "运行了下拉加载");
        if (this.teamList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            UserID: this.userID,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        //console.info(pageInfo);
        var parm = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parm.jyh = "1149";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            console.log(newData);
            var msg = JSON.parse(newData.result);
            if (msg.Code == "1") {
                console.log("newData》" + newData);
                var newList;
                newList = msg.Data;
                var msgText = msg.Msg;
                _this.fNum = parseInt(msgText.split(',')[0]);
                _this.sNum = parseInt(msgText.split(',')[1]);
                _this.sTotal = _this.fNum + _this.sNum;
                _this.nativeService.log('my-team', 'sTotal>' + _this.sTotal);
                console.log("msgText>" + msgText);
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.teamList.push(newList[i]);
                    }
                }
                if (newData.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                infiniteScroll.complete();
            }
            else {
            }
            //}, 1000);
        });
    };
    MyTeamPage.prototype.gotosecond = function (id, tNum) {
        if (tNum > 0) {
            this.navCtrl.push("MyTeamTwoPage", { aid: id });
        }
        else {
            //this.nativeService.showToast();
        }
    };
    return MyTeamPage;
}());
MyTeamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-my-team',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\my-team\my-team.html"*/'<!--\n  Generated template for the MyTeamPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">我的团队</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: #eee">\n  <!-- <div class="myteam" *ngFor="let item of teamList" >\n    <img [src]="item.HeadUrl" alt="">\n    <div>{{item.NickName}}</div>\n    <div>{{item.CreateDate.split("T")[0]}}</div>\n  </div> -->\n  <div class="myteam_title">\n    <div class="myteam_title_item">\n      <span>共计（人）</span>\n      <span style="margin-top:5px;color:#999">{{sTotal}}</span>\n    </div>\n    <div class="myteam_title_item" style="border-left:1px solid #dedede;border-right:1px solid #dedede;">\n      <span>一级（人）</span>\n      <span style="margin-top:5px;color:#999">{{fNum}}</span>\n    </div>\n    <div class="myteam_title_item">\n      <span>二级（人）</span>\n      <span style="margin-top:5px;color:#999">{{sNum}}</span>\n    </div>\n  </div>\n  <div class="myteam_list">\n    <div class="myteam_list_item" tappable (click)="gotosecond(item.ID,item.FirstNum)" *ngFor="let item of teamList">\n      <div class="myteam_item_left">\n        <img style="height:80%;width:auto;margin-right:10px" [src]="item.HeadUrl" alt="">\n        <div>\n          <div style="font-size:1.6rem">{{item.NickName}}</div>\n          <div style="color:#999">注册时间：{{item.CreateDate}}</div>\n        </div>\n      </div>\n      <div class="myteam_item_right">\n        <span>团队{{item.FirstNum }}人</span>\n        <img [src]="img" style="height:20px;" alt="">\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\my-team\my-team.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_InfiniteScrollService__["a" /* InfiniteScrollService */]])
], MyTeamPage);

//# sourceMappingURL=my-team.js.map

/***/ })

});
//# sourceMappingURL=54.js.map?v=107