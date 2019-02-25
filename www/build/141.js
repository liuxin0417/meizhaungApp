webpackJsonp([141],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalArticlePageModule", function() { return PersonalArticlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_article__ = __webpack_require__(790);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalArticlePageModule = (function () {
    function PersonalArticlePageModule() {
    }
    return PersonalArticlePageModule;
}());
PersonalArticlePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__personal_article__["a" /* PersonalArticlePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_article__["a" /* PersonalArticlePage */]),
        ],
    })
], PersonalArticlePageModule);

//# sourceMappingURL=personal-article.module.js.map

/***/ }),

/***/ 790:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalArticlePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Model__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PersonalArticlePage = (function () {
    function PersonalArticlePage(navCtrl, navParams, httpService, nativeService, modalCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.img = "assets/imgs/fanhu-withe.png";
        this.img2 = "assets/imgs/share.png";
        this.img4 = "assets/imgs/articlesign.png";
        this.img6 = "assets/imgs/up.png";
        this.img7 = "assets/imgs/write.png";
        this.img8 = "assets/imgs/message.png";
        this.img9 = "assets/imgs/zanheart.png";
        this.img10 = "assets/imgs/zanheart2.png";
        this.ImgList = [];
        this.ArticleID = this.navParams.get("ID");
        this.type = this.navParams.get("type");
        if (this.type == 1) {
            this.entercode = "1083";
            this.entercode2 = "1085";
            this.entercode3 = "1091";
        }
        else if (this.type == 2) {
            this.entercode = "1097";
            this.entercode3 = "1099";
        }
        else if (this.type == 3) {
            this.entercode = "1098";
            this.entercode2 = "1114";
            this.entercode3 = "1100";
        }
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                // console.log(val);
                if (val.userinform.ID != "") {
                    _this.userInfo = val.userinform;
                }
            }
            _this.Load();
        });
    }
    PersonalArticlePage.prototype.ionViewDidLoad = function () {
    };
    PersonalArticlePage.prototype.goback = function () {
        this.navCtrl.pop();
    };
    PersonalArticlePage.prototype.gotolist = function () {
        this.navCtrl.push("ConcernerListPage", {
            ArticleID: this.ArticleID
        });
    };
    PersonalArticlePage.prototype.Load = function () {
        var _this = this;
        var UserID = "";
        if (this.userInfo != null) {
            UserID = this.userInfo.ID;
        }
        var userInfo = {
            ID: this.ArticleID,
            UserID: UserID
        };
        //console.log(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = this.entercode;
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result)
            if (result.Code == "1") {
                _this.Article = result.Data;
                if (_this.Article.praiseList != undefined) {
                    _this.Article.praiseList = _this.Article.praiseList.slice(0, 3);
                }
                else {
                }
                _this.ImgList = JSON.parse(_this.Article.ImgList);
            }
            else {
            }
        });
    };
    PersonalArticlePage.prototype.gotoslide = function (item) {
        var imgarry = [];
        imgarry.push({ "Url": item });
        var modal = this.modalCtrl.create('SlideImgPage', {
            slide: imgarry,
        });
        modal.present();
    };
    PersonalArticlePage.prototype.SetPraise = function () {
        var _this = this;
        if (this.userInfo == null) {
            this.navCtrl.push('LoginPage');
            return false;
        }
        var userInfo = {
            RelID: this.ArticleID,
            UserID: this.userInfo.ID
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = this.entercode2;
        parameter.parm = JSON.stringify(userInfo);
        //this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            //this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.Article.ispriase = !_this.Article.ispriase;
                _this.Load();
            }
            else {
            }
        });
    };
    PersonalArticlePage.prototype.ask = function () {
        var _this = this;
        if (this.textarea == '') {
            this.nativeService.showToast("评论内容不能为空！");
            return;
        }
        else {
            var userInfo = {
                ArticleID: this.ArticleID,
                UserID: this.userInfo.ID,
                Info: this.textarea,
            };
        }
        // //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = this.entercode3;
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result);
            if (result.Code == 1) {
                _this.textarea = "";
                _this.Load();
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    return PersonalArticlePage;
}());
PersonalArticlePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-personal-article',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\personal-article\personal-article.html"*/'<ion-content style="background:#eee;">\n  <div #lyScroll class="scrollcontent">\n    <div id="headpart" *ngIf="Article!=null">\n      <div class="head-nav">\n        <div tappable (click)="goback()">\n          <img [src]="img" alt="">\n        </div>\n        <div></div>\n        <div>\n          <img [src]="img2" alt="">\n        </div>\n      </div>\n      <div class="head-msg">\n        <div class="head-msg-item1">\n          {{Article.Info}}\n        </div>\n        <div class="head-msg-item2">\n          <div class="item2-left">\n            <img [src]="Article.TypeUrl" alt="">\n            <div>{{Article.Name}}</div>\n          </div>\n          <div class="item2-right">\n            {{Article.CREATEDATE}}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="allbg" *ngIf="Article!=null">\n      <div class="article-sign">\n        <img [src]="img4" alt=""> {{Article.Name}}\n      </div>\n    </div>\n    <div class="articlepart" *ngIf="Article!=null">\n      <div style="text-indent:2em;padding:10px 0px;">{{Article.ShortDesc}}</div>\n      <img *ngFor="let item of ImgList" [src]="item.Url" alt="">\n      <div class="jubao">\n        <div>举报</div>\n      </div>\n    </div>\n    <div class="commite-num" *ngIf="Article!=null&&type!=2">\n      <div>共有{{Article.toatalCount}}喜欢</div>\n      <div class="commite-num-right">\n        <img *ngFor="let item of Article.praiseList" class="love-your-article" [src]="item.Headurl" tappable (click)="gotolist()"\n          alt="">\n      </div>\n    </div>\n    <div class="commite-content" *ngIf="Article!=null&&Article.commentList.length!=0">\n      <div class="commite-title">\n        <div>\n          评论\n          <img class="img-up" [src]="img6" alt="">\n        </div>\n        <div class="write-message" *ngIf="Article!=null">\n          <img [src]="img8" alt=""> {{Article.toatalcomment}}\n        </div>\n      </div>\n      <div class="commite-item" *ngFor="let item of Article.commentList">\n        <div class="commite-item-title">\n          <div style="width:12.5%;">\n            <img class="img-head-visiter" [src]="item.Headurl" alt="">\n          </div>\n          <div style="width:50%">{{item.LoginName}}</div>\n          <div style="padding-right:3px;">{{item.CommentTime}}</div>\n        </div>\n        <div class="commite-item-content">\n          {{item.ContentInfo}}\n        </div>\n      </div>\n       <div class="more-commite"><!-- 查看更多评论 --></div>\n    </div>\n    <div style="height:10px;width:100%;"></div>\n  </div>\n</ion-content>\n<ion-footer>\n  <div class="write-commite">\n    <div class="write-zan-heart" *ngIf="Article!=null" (click)="SetPraise()">\n      <img *ngIf="Article.ispriase&&type!=2" [src]="img10" />\n      <img *ngIf="!Article.ispriase&&type!=2" [src]="img9" />\n    </div>\n    <div class="write-btn">\n      <img [src]="img7" alt="">\n      <input type="text" [(ngModel)]="textarea" placeholder="写评论" (keyup.enter)="ask()">\n    </div>\n    <div tappable (click)="ask()">\n        <ion-icon name="send" style="font-size:29px;color:#999"></ion-icon>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\personal-article\personal-article.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */]])
], PersonalArticlePage);

//# sourceMappingURL=personal-article.js.map

/***/ })

});
//# sourceMappingURL=141.js.map?v=107