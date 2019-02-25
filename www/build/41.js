webpackJsonp([41],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublishArticlesPageModule", function() { return PublishArticlesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publish_articles__ = __webpack_require__(828);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PublishArticlesPageModule = (function () {
    function PublishArticlesPageModule() {
    }
    return PublishArticlesPageModule;
}());
PublishArticlesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__publish_articles__["a" /* PublishArticlesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__publish_articles__["a" /* PublishArticlesPage */]),
        ],
    })
], PublishArticlesPageModule);

//# sourceMappingURL=publish-articles.module.js.map

/***/ }),

/***/ 828:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishArticlesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_Constants__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(27);
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
// import { TemplateThreePage } from './../../componnets/template-three/template-three';







var PublishArticlesPage = (function () {
    function PublishArticlesPage(navCtrl, navParams, viewCtrl, storage, modalCtrl, httpService, nativeService, actionSheetCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.img = "assets/imgs/guanbi.png";
        this.img1 = "assets/imgs/publish1.png";
        this.img2 = "assets/imgs/publish2.png";
        this.img3 = "assets/imgs/publish3.png";
        this.img4 = "assets/imgs/publish4.png";
        this.img5 = "assets/imgs/xiangji.png";
        this.Title = "";
        this.ShortDesc = "";
        this.TypeID = "";
        this.allowDelete = true;
        this.fileObjList = [];
        this.max = 6;
        //private allowAdd: true;
        this.isweb = false;
        this.localIds = [];
        this.serverIds = [];
        this.imgUrl = [];
        this.WimgUrl = [];
        this.len = 0;
        this.publishType = this.navParams.get("type");
        this.isweb = !this.nativeService.isMobile();
        this.storage.get("userinfo").then(function (val) {
            if (val != "" && val != null) {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userInfo = val.userinform;
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
    }
    PublishArticlesPage.prototype.ionViewDidLoad = function () {
    };
    PublishArticlesPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PublishArticlesPage.prototype.alerttheme = function () {
        var _this = this;
        var modal = this.modalCtrl.create('ThemePage', {
            type: this.publishType
        });
        modal.onDidDismiss(function (data) {
            if (data != null) {
                _this.TypeID = data.TypeID;
            }
        });
        modal.present();
    };
    PublishArticlesPage.prototype.getImg = function () {
        if (this.nativeService.isMobile()) {
            this.addPicture();
        }
        else {
            this.addWxPicture();
            //console.log("非手机环境，请求访问微信图片");
        }
    };
    /**发布文章 */
    PublishArticlesPage.prototype.SendImg = function () {
        var _this = this;
        //console.log("是否进入");
        if (this.Title == "") {
            this.nativeService.showToast("标题不能为空");
            return;
        }
        if (this.ShortDesc == "") {
            this.nativeService.showToast("内容不能为空");
            return;
        }
        if (this.TypeID == "") {
            this.nativeService.showToast("文章类别不能为空");
            return;
        }
        if (!this.isweb) {
            if (this.fileObjList == null || this.fileObjList.length <= 0) {
                this.SendArticle([]);
            }
            else {
                var filearray = [];
                for (var i = 0; i < this.fileObjList.length; i++) {
                    filearray.push(this.fileObjList[i].origPath);
                }
                this.nativeService.showLoading("提交中");
                this.nativeService.uploadFileByMutiTranser(filearray).then(function (val) {
                    _this.SendArticle(val);
                });
            }
        }
        else {
            if (this.imgUrl == null || this.imgUrl.length <= 0) {
                this.SendArticle([]);
            }
            else {
                this.SendArticle(this.imgUrl);
            }
        }
    };
    PublishArticlesPage.prototype.SendArticle = function (filearray) {
        var _this = this;
        //console.log("是否进入");
        var Info = {};
        var parameter = new __WEBPACK_IMPORTED_MODULE_1__model_Model__["f" /* Parameter */]();
        if (this.publishType == 1) {
            Info = {
                Title: this.Title,
                ShortDesc: this.ShortDesc,
                TypeID: this.TypeID,
                UserID: this.userInfo.ID,
                file: filearray
            };
            parameter.jyh = "1084";
        }
        else if (this.publishType == 2) {
            Info = {
                Title: this.Title,
                Detail: this.ShortDesc,
                TypeID: this.TypeID,
                UserID: this.userInfo.ID,
                file: filearray
            };
            parameter = new __WEBPACK_IMPORTED_MODULE_1__model_Model__["f" /* Parameter */]();
            parameter.jyh = "1074";
        }
        else if (this.publishType == 3) {
            Info = {
                Title: this.Title,
                Detail: this.ShortDesc,
                TypeID: this.TypeID,
                UserID: this.userInfo.ID,
                file: filearray
            };
            parameter = new __WEBPACK_IMPORTED_MODULE_1__model_Model__["f" /* Parameter */]();
            parameter.jyh = "1077";
        }
        parameter.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (val) {
            var result = JSON.parse(val.result);
            _this.nativeService.hideLoading();
            if (result.Code == 1) {
                _this.nativeService.showToast("提交成功");
                _this.viewCtrl.dismiss();
            }
        });
    };
    /**App端获取图片 */
    PublishArticlesPage.prototype.addPicture = function () {
        var that = this;
        that.actionSheetCtrl.create({
            buttons: [
                {
                    text: '从相册选择',
                    handler: function () {
                        that.nativeService.getMultiplePicture({
                            maximumImagesCount: (that.max - that.fileObjList.length),
                            destinationType: 1 //期望返回的图片格式,1图片路径
                        }).subscribe(function (imgs) {
                            for (var _i = 0, _a = imgs; _i < _a.length; _i++) {
                                var img = _a[_i];
                                that.getPictureSuccess(img);
                            }
                        });
                    }
                },
                {
                    text: '拍照',
                    handler: function () {
                        that.nativeService.getPictureByCamera({
                            destinationType: 1 //期望返回的图片格式,1图片路径
                        }).subscribe(function (img) {
                            that.getPictureSuccess(img);
                        });
                    }
                },
                {
                    text: '取消',
                    role: 'cancel'
                }
            ]
        }).present();
    };
    PublishArticlesPage.prototype.deletePicture = function (i) {
        var _this = this;
        if (!this.allowDelete) {
            return;
        }
        this.alertCtrl.create({
            title: '确认删除？',
            buttons: [{ text: '取消' },
                {
                    text: '确定',
                    handler: function () {
                        _this.fileObjList.splice(i, 1);
                    }
                }
            ]
        }).present();
    };
    PublishArticlesPage.prototype.viewerPicture = function (index) {
        var picturePaths = [];
        for (var _i = 0, _a = this.fileObjList; _i < _a.length; _i++) {
            var fileObj = _a[_i];
            picturePaths.push(fileObj.origPath);
        }
        this.modalCtrl.create('PreviewPicturePage', { 'initialSlide': index, 'picturePaths': picturePaths }).present();
    };
    PublishArticlesPage.prototype.viewPicture = function (index) {
        this.modalCtrl.create('PreviewPicturePage', { 'initialSlide': index, 'picturePaths': this.WimgUrl }).present();
    };
    PublishArticlesPage.prototype.getPictureSuccess = function (img) {
        var fileObj = { 'origPath': img, 'thumbPath': img };
        this.fileObjList.push(fileObj);
    };
    PublishArticlesPage.prototype.addWxPicture = function () {
        var that = this;
        wx.chooseImage({
            count: that.max - that.len,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: function (res) {
                var localIds = res.localIds;
                that.len = localIds.length; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                // for (var i = 0; i < localIds.length; i++) {
                that.WxUpLoad(localIds);
                // }
                // wx.getLocalImgData({
                //   localId: localIds, // 图片的localID
                //   success: function (res) {
                //     var localData = res.localData;
                //     that.localIds = localData; // localData是图片的base64数据，可以用img标签显示
                //   }
                // });
            }
        });
    };
    PublishArticlesPage.prototype.WxUpLoad = function (localIds) {
        var that = this;
        var localId = localIds.pop();
        wx.uploadImage({
            localId: localId,
            success: function (res) {
                var serverId = res.serverId;
                that.serverIds.push(serverId);
                if (localIds.length > 0) {
                    that.WxUpLoad(localIds);
                }
                else {
                    setTimeout(function () {
                        that.input.setFocus();
                    }, 500);
                }
                that.WxDownLoadImage(serverId);
                // if (that.len == that.serverIds.length) {
                //   that.WxDownLoadImage(serverId);  
                // }
            }
        });
    };
    PublishArticlesPage.prototype.viewerWxPicture = function (item) {
        alert(item);
        var that = this;
        wx.previewImage({
            current: item,
            urls: that.localIds // 需要预览的图片http链接列表
        });
    };
    PublishArticlesPage.prototype.deleteWxPicture = function (i) {
        var _this = this;
        if (!this.allowDelete) {
            return;
        }
        this.alertCtrl.create({
            title: '确认删除？',
            buttons: [{ text: '取消' },
                {
                    text: '确定',
                    handler: function () {
                        _this.imgUrl.splice(i, 1);
                        _this.WimgUrl.splice(i, 1);
                        _this.len--;
                    }
                }
            ]
        }).present();
    };
    // WxDownLoadImage() {
    //   this.nativeService.uploadWxMoreFile(this.serverIds).then(val => {
    //     this.SendArticle(val);
    //   });
    // }
    PublishArticlesPage.prototype.Change = function (item) {
        return this.nativeService.assembleHTML(item);
    };
    PublishArticlesPage.prototype.WxDownLoadImage = function (serverId) {
        var _this = this;
        this.nativeService.uploadWxFile(serverId).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.WimgUrl.push(__WEBPACK_IMPORTED_MODULE_0__providers_Constants__["f" /* fileViewPath */] + result.Msg);
                _this.imgUrl.push(result.Msg);
            }
        });
    };
    return PublishArticlesPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('myInput'),
    __metadata("design:type", Object)
], PublishArticlesPage.prototype, "input", void 0);
PublishArticlesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-publish-articles',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\publish-articles\publish-articles.html"*/'<ion-header style="height:45px;">\n  <div class="publish-head">\n    <img tappable (click)="close()" [src]="img" alt="">\n    <div tappable (click)="SendImg()">发布</div>\n  </div>\n</ion-header>\n<ion-content class="test">\n  <div class="publish-title">\n    <ion-input type="text" placeholder="加个标题(3~25)" [(ngModel)]="Title" name="Title" id="Title" #myInput>\n    </ion-input>\n  </div>\n  <div class="publish-content">\n    <textarea placeholder="来吧，尽情发挥吧..." [(ngModel)]="ShortDesc" name="ShortDesc" id="ShortDesc"></textarea>\n  </div>\n  <div class="publish-img" *ngIf="!isweb">\n    <div *ngFor="let item of fileObjList;let i = index;" class="pictures">\n      <span *ngIf="allowDelete" class="remove" tappable (click)="deletePicture(i)">×</span>\n      <img [src]="item.thumbPath" tappable (click)="viewerPicture(i)" />\n    </div>\n    <div class="pictures">\n      <img [src]="img5" alt="" tappable (click)="getImg()" *ngIf="fileObjList.length<max">\n    </div>\n  </div>\n  <div class="publish-img" *ngIf="isweb">\n    <div *ngFor="let item of WimgUrl;let i = index;" class="pictures">\n      <span *ngIf="allowDelete" class="remove" tappable (click)="deleteWxPicture(i)">×</span>\n      <img [src]="item" tappable (click)="viewPicture(item)" />\n    </div>\n    <div class="pictures">\n      <img [src]="img5" alt="" tappable (click)="getImg()" *ngIf="imgUrl.length<max">\n    </div>\n  </div>\n  <!-- <div class="publish-bottom">\n    <div class="bottom-sign1">隐藏标题</div>\n    <div class="bottom-sign1">所有人可见</div>\n  </div> -->\n</ion-content>\n<ion-footer>\n  <div class="publish-sign">\n    <img class="sign-img" [src]="img1" alt="">\n    <img class="sign-img" [src]="img2" alt="" (click)="getImg()">\n    <img class="sign-img" [src]="img3" alt="">\n    <img class="sign-img" tappable (click)="alerttheme()" [src]="img4" alt="">\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\publish-articles\publish-articles.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_5__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_6__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["AlertController"]])
], PublishArticlesPage);

//# sourceMappingURL=publish-articles.js.map

/***/ })

});
//# sourceMappingURL=41.js.map?v=107