webpackJsonp([152],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTeamTwoPageModule", function() { return MyTeamTwoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_team_two__ = __webpack_require__(780);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyTeamTwoPageModule = (function () {
    function MyTeamTwoPageModule() {
    }
    return MyTeamTwoPageModule;
}());
MyTeamTwoPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__my_team_two__["a" /* MyTeamTwoPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__my_team_two__["a" /* MyTeamTwoPage */]),
        ],
    })
], MyTeamTwoPageModule);

//# sourceMappingURL=my-team-two.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyTeamTwoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__ = __webpack_require__(292);
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
 * Generated class for the MyTeamTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyTeamTwoPage = (function () {
    function MyTeamTwoPage(navCtrl, navParams, httpService, nativeService, Inservice) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.Inservice = Inservice;
        this.headimg = "assets/imgs/grey1.png";
        this.img = "assets/imgs/jinru--hui.png";
        this.isshow = true;
        this.padding = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["e" /* Padding */]();
        this.aid = navParams.get("aid");
        this.get2Team();
    }
    MyTeamTwoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyTeamTwoPage');
    };
    MyTeamTwoPage.prototype.get2Team = function () {
        var _this = this;
        var userInfo = {
            UserID: this.aid,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
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
                console.log('msgText>' + msgText);
                // this.fNum=msgText.split(',')[0]*1;
                // this.sNum=msgText.split(',')[1]*1;
                //this.sTotal= this.fNum+ this.sNum;
                // console.log('sTotal>'+typeof(this.fNum));
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    MyTeamTwoPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        /* infiniteScroll.enable(true); */
        ////console.info("运行了下拉加载");
        if (this.teamList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
            this.isshow = false;
            return;
        }
        this.padding.ipageStart += 1;
        var pageInfo = {
            UserID: this.aid,
            ipageStart: this.padding.ipageStart,
            pageSize: this.padding.pageSize,
        };
        //console.info(pageInfo);
        var parm = new __WEBPACK_IMPORTED_MODULE_2__model_Model__["f" /* Parameter */]();
        parm.jyh = "1149";
        parm.parm = JSON.stringify(pageInfo);
        this.Inservice.getAsyncData("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (newData) {
            //setTimeout(() => {
            var msg = JSON.parse(newData.result);
            if (msg.Code == "1") {
                console.log("newData》" + newData);
                var newList;
                newList = msg.Data;
                var msgText = msg.Msg;
                // this.fNum=msgText.split(',')[0];
                //.sNum=msgText.split(',')[1];
                //this.sTotal=this.fNum+this.sNum;
                console.log("msgText>" + msgText);
                if (newList != null || newList != undefined) {
                    for (var i = 0; i < newList.length; i++) {
                        _this.teamList.push(newList[i]);
                    }
                }
                if (msg.Data.length < _this.padding.pageSize) {
                    _this.isshow = false;
                }
                infiniteScroll.complete();
            }
            else {
            }
            //}, 1000);
        });
    };
    return MyTeamTwoPage;
}());
MyTeamTwoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-my-team-two',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\my-team-two\my-team-two.html"*/'<!--\n  Generated template for the MyTeamTwoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">我的团队-二级</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background: #eee">\n  <div class="myteam_list">\n    <div class="myteam_list_item" *ngFor="let item of teamList">\n      <div class="myteam_item_left">\n        <img style="height:80%;width:auto;margin-right:10px" [src]="item.HeadUrl" alt="">\n        <div>\n          <div style="font-size:1.6rem">{{item.NickName}}</div>\n          <div style="color:#999">注册时间：{{item.CreateDate}}</div>\n        </div>\n      </div>\n      <div class="myteam_item_right">\n        <!-- <span>团队51人</span>\n        <img [src]="img" style="height:20px;" alt=""> -->\n      </div>\n    </div>\n  </div>\n  <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n    <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\my-team-two\my-team-two.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_InfiniteScrollService__["a" /* InfiniteScrollService */]])
], MyTeamTwoPage);

//# sourceMappingURL=my-team-two.js.map

/***/ })

});
//# sourceMappingURL=152.js.map?v=107