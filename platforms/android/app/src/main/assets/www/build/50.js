webpackJsonp([50],{

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticePageModule", function() { return NoticePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notice__ = __webpack_require__(786);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoticePageModule = (function () {
    function NoticePageModule() {
    }
    return NoticePageModule;
}());
NoticePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__notice__["a" /* NoticePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__notice__["a" /* NoticePage */]),
        ],
    })
], NoticePageModule);

//# sourceMappingURL=notice.module.js.map

/***/ }),

/***/ 786:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_CityPicker__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(144);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NoticePage = (function () {
    function NoticePage(navCtrl, navParams, httpService, nativeService, cityPickerSev, storage, sanitizer) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.cityPickerSev = cityPickerSev;
        this.storage = storage;
        this.sanitizer = sanitizer;
        this.itemcolor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.switch = 3;
        this.img = "assets/imgs/temporary/logo.png";
        this.type1 = [];
        this.type2 = [];
        this.list = [];
        this.storage.get("userinfo").then(function (val) {
            if (val != null) {
                ////console.info(val);
                _this.userID = val.userinform.ID,
                    //console.log(this.userID);
                    _this.getnew();
            }
            else {
            }
        });
    }
    NoticePage.prototype.ionViewDidLoad = function () {
        this.load();
    };
    NoticePage.prototype.getnew = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1092";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.list = result.Data;
                //console.log(this.list);
            }
            else {
            }
        });
    };
    NoticePage.prototype.load = function () {
        var _this = this;
        // //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1015";
        parameter.parm = "";
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result);
            if (result.Code != 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.type1 = result.Data;
                _this.type2 = result.Data2;
            }
        });
    };
    NoticePage.prototype.getlist = function (ID) {
        this.navCtrl.push("NoticeDetailPage", {
            itemID: ID,
        });
    };
    NoticePage.prototype.newdetail = function (item) {
        this.navCtrl.push("ChatPage", {
            proid: item.proID,
            name: item.Name,
            picurl: item.Url,
        });
    };
    NoticePage.prototype.splice = function (item) {
        // item = "2017-11-15T16:52:54.637";
        return item.split("T")[0];
    };
    NoticePage.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    return NoticePage;
}());
NoticePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-notice',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\notice\notice.html"*/'<!--\n  Generated template for the NoticePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="height:79px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">消息通知</ion-title>\n  </ion-navbar>\n  <div class="notic-switch">\n    <!-- <div tappable (click)="switch=1">\n      <span [ngClass]="{true:\'color\'}[switch==1]">\n        交易物流\n      </span>\n    </div> -->\n    <div tappable (click)="switch=3">\n      <span [ngClass]="{true:\'color\'}[switch==3]">\n        消息\n      </span>\n    </div>\n    <div tappable (click)="switch=2">\n      <span [ngClass]="{true:\'color\'}[switch==2]">\n        通知\n      </span>\n    </div>\n  </div>\n</ion-header>\n\n\n<ion-content style="background:#f5f5f5;margin-top:5px;">\n  <!-- <div class="notice-item" *ngFor="let item of itemcolor let i=index" >\n    <div class="notice-circle">\n      <div [ngClass]="{color1:(i%8)==0,color2:(i%8)==1,color3:(i%8)==2,color4:(i%8)==3,color5:(i%8)==4,color6:(i%8)==5,color7:(i%8)==6,color8:(i%8)==7}" ></div>\n    </div>\n    <div class="notice-content">\n      <div>直降100元！再增米家感应灯</div>\n      <div>小米mix2黑色版现货抢，享12期免息</div>\n      <div>11月1日</div>\n    </div>\n  </div> -->\n\n  <!-- <div style="width:100%;height:45px;"></div> -->\n  <div class="logistics-content" *ngFor="let item of itemcolor let i=index">\n    <div *ngIf="switch==1" class="logistics-item">\n      <div>\n        <div [ngClass]="{color1:(i%8)==0,color2:(i%8)==1,color3:(i%8)==2,color4:(i%8)==3,color5:(i%8)==4,color6:(i%8)==5,color7:(i%8)==6,color8:(i%8)==7}"></div>\n      </div>\n      <div class="item-content">\n        <div>\n          <div class="status">订单已签收</div>\n          <div style="color:#666;padding-left:10px;text-align:center;">17/11/12</div>\n        </div>\n        <div class="msg">\n          <div>\n            <div style="line-height:15px;font-size:1.2rem">信息信心信息信心信息信心信息信心信息信心</div>\n            <div style="line-height:20px;font-size:1.2rem;color:#666;margin-top:3px;">订单编号121212222</div>\n          </div>\n          <div style="padding-left:10px;width:25%">\n            <img [src]="img" alt="">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="logistics-content" *ngFor="let item of list let i=index">\n    <div class="logistics-item" *ngIf="switch==3" tappable (click)="newdetail(item)">\n      <div>\n        <div [ngClass]="{color1:(i%8)==0,color2:(i%8)==1,color3:(i%8)==2,color4:(i%8)==3,color5:(i%8)==4,color6:(i%8)==5,color7:(i%8)==6,color8:(i%8)==7}"></div>\n      </div>\n      <div class="item-content">\n\n        <div class="msg">\n          <div>\n            <div style="line-height:15px;font-size:1.2rem">{{item.Name}}</div>\n            <div style="line-height:20px;font-size:1.2rem;color:#666;margin-top:3px;">{{splice(item.CreateTime)}}</div>\n          </div>\n\n          <div style="padding-left:10px;width:25%">\n            <img [src]="item.Url" alt="">\n          </div>\n          <!-- <div  *ngIf="item.Isnew==0" class="yuan">1</div> -->\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="logistics-content" *ngFor="let item of type1 let i=index">\n    <div class="logistics-item" *ngIf="switch==2" tappable (click)="getlist(item.ID)">\n      <div>\n        <div [ngClass]="{color1:(i%8)==0,color2:(i%8)==1,color3:(i%8)==2,color4:(i%8)==3,color5:(i%8)==4,color6:(i%8)==5,color7:(i%8)==6,color8:(i%8)==7}"></div>\n      </div>\n      <div class="item-content">\n        <div>\n          <div class="status">{{item.Title}}</div>\n          <div style="color:#666;padding-left:10px;text-align:center;">{{splice(item.CreateTime)}}</div>\n        </div>\n        <div class="msg">\n          <div>\n            <div class="notice_msg" >{{item.Abstract}}</div>\n            <div style="line-height:20px;font-size:1.2rem;color:#666;margin-top:3px;">发布的店铺</div>\n          </div>\n          <div style="padding-left:10px;width:25%">\n            <img [src]="img" alt="">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div [innerHTML]="data2">1</div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\notice\notice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_CityPicker__["a" /* CityPickerService */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* DomSanitizer */]])
], NoticePage);

//# sourceMappingURL=notice.js.map

/***/ })

});
//# sourceMappingURL=50.js.map?v=107