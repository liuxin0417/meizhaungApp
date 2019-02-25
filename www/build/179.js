webpackJsonp([179],{

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatPageModule = (function () {
    function ChatPageModule() {
    }
    return ChatPageModule;
}());
ChatPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* ChatPage */]),
        ],
    })
], ChatPageModule);

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
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







//import { combineAll } from 'rxjs/operator/combineAll';
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, 
        //private app: App,
        storage, httpService, nativeService, actionSheetCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.img = "assets/imgs/temporary/3.png";
        this.img1 = "assets/imgs/jinru--hui.png";
        this.img2 = "assets/imgs/singer1.png";
        this.img3 = "assets/imgs/singer2.png";
        this.img7 = "assets/imgs/write.png";
        this.img8 = "assets/imgs/fasong.png";
        this.textarea = "";
        this.proid = navParams.get("proid");
        this.name = navParams.get("name").slice(0, 20) + "...";
        ;
        this.picurl = navParams.get("picurl");
        this.storage.get("userinfo").then(function (val) {
            if (val != null) {
                ////console.info(val);
                _this.userID = val.userinform.ID,
                    _this.chat();
                _this.scrollToBottom(100);
            }
            else {
            }
        });
    }
    ChatPage.prototype.ask = function () {
        var _this = this;
        if (this.textarea == '') {
            this.nativeService.showToast("评论内容不能为空！");
            return;
        }
        else {
            var userInfo = {
                UserID: this.userID,
                proID: this.proid,
                comcontent: this.textarea,
            };
        }
        ////console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1088";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result);
            if (result.Code == 1) {
                _this.textarea = "";
                _this.chat();
                _this.scrollToBottom(400);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    ChatPage.prototype.scrollToBottom = function (number) {
        var _this = this;
        setTimeout(function () {
            // console.log(this.content.scrollToBottom);
            if (_this.content != null) {
                if (_this.content._scroll != null) {
                    _this.content.scrollToBottom();
                }
                // if(this.content.scrollToBottom)
            }
        }, number);
    };
    ChatPage.prototype.splice = function (item) {
        return item.split("T")[0];
    };
    ChatPage.prototype.chat = function () {
        var _this = this;
        if (this.userID == "") {
            return;
        }
        else {
            var userInfo = {
                UserID: this.userID,
                proID: this.proid,
            };
            var parameter = new __WEBPACK_IMPORTED_MODULE_3__model_Model__["f" /* Parameter */]();
            parameter.jyh = "1087";
            parameter.parm = JSON.stringify(userInfo);
            this.nativeService.showLoading("获取中");
            this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
                _this.nativeService.hideLoading();
                var result = JSON.parse(res.result);
                //console.log(result);
                if (result.Code == "1") {
                    _this.list = result.Data;
                    //console.log(this.list);
                }
                else {
                }
            });
        }
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\chat\chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">留言</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n  <div class="goods-detail">\n    <div class="goods-detail-item1">\n      <img [src]="picurl" alt="">\n    </div>\n    <div class="goods-detail-item2">\n      {{name}}\n    </div>\n    <div class="goods-detail-item3">\n      <img [src]="img1" alt="">\n    </div>\n  </div>\n  <div style="height:40px;width:100%;"></div>\n  <div class="message-part" *ngFor="let item of list ">\n    <div class="message-time"> {{splice(item.comtime)}}</div>\n    <div *ngIf="item.IsSeller==1" class="user-type1">\n      <div class="message-box">\n        <img [src]="img2" class="singer1" alt=""> {{item.comcontent}}\n      </div>\n    </div>\n    <div *ngIf="item.IsSeller==0" class="user-type2">\n      <div class="message-box">\n        <img [src]="img3" class="singer2" alt=""> {{item.comcontent}}\n      </div>\n    </div>\n  </div>\n\n\n</ion-content>\n<ion-footer>\n  <div class="write-commite">\n    <div class="write-btn">\n      <img [src]="img7" alt="">\n      <input type="text" class="message-input" [(ngModel)]="textarea" placeholder="写留言" (keyup.enter)="ask()">\n    </div>\n\n    <div class="write-zan-heart" tappable (click)="ask()">\n      <img [src]="img8" alt="">\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=179.js.map?v=107