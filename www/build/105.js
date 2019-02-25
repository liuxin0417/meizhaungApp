webpackJsonp([105,188],{

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPicturePageModule", function() { return SelectPicturePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_picture__ = __webpack_require__(743);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import {PreviewPicturePageModule} from "../preview-picture/preview-picture.module";
var SelectPicturePageModule = (function () {
    function SelectPicturePageModule() {
    }
    return SelectPicturePageModule;
}());
SelectPicturePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__select_picture__["a" /* SelectPicturePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__select_picture__["a" /* SelectPicturePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__select_picture__["a" /* SelectPicturePage */]
        ]
    })
], SelectPicturePageModule);

//# sourceMappingURL=select-picture.module.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnReasonPageModule", function() { return ReturnReasonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__return_reason__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componnets_select_picture_select_picture_module__ = __webpack_require__(648);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReturnReasonPageModule = (function () {
    function ReturnReasonPageModule() {
    }
    return ReturnReasonPageModule;
}());
ReturnReasonPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__return_reason__["a" /* ReturnReasonPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__return_reason__["a" /* ReturnReasonPage */]),
            __WEBPACK_IMPORTED_MODULE_3__componnets_select_picture_select_picture_module__["SelectPicturePageModule"]
        ],
    })
], ReturnReasonPageModule);

//# sourceMappingURL=return-reason.module.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPicturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectPicturePage = (function () {
    function SelectPicturePage(modalCtrl, alertCtrl, actionSheetCtrl, nativeService) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.nativeService = nativeService;
        this.max = 4; //最多可选择多少张图片，默认为4张
        this.allowAdd = true; //是否允许新增
        this.allowDelete = true; //是否允许删除
        this.fileObjList = []; //图片列表,与fileObjListChange形成双向数据绑定
        this.fileObjListChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SelectPicturePage.prototype.addPicture = function () {
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
    SelectPicturePage.prototype.deletePicture = function (i) {
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
    SelectPicturePage.prototype.viewerPicture = function (index) {
        var picturePaths = [];
        for (var _i = 0, _a = this.fileObjList; _i < _a.length; _i++) {
            var fileObj = _a[_i];
            picturePaths.push(fileObj.origPath);
        }
        this.modalCtrl.create('PreviewPicturePage', { 'initialSlide': index, 'picturePaths': picturePaths }).present();
    };
    SelectPicturePage.prototype.getPictureSuccess = function (img) {
        var fileObj = { 'origPath': img, 'thumbPath': img };
        this.fileObjList.push(fileObj);
        this.fileObjListChange.emit(this.fileObjList);
    };
    return SelectPicturePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SelectPicturePage.prototype, "max", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SelectPicturePage.prototype, "allowAdd", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], SelectPicturePage.prototype, "allowDelete", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], SelectPicturePage.prototype, "fileObjList", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], SelectPicturePage.prototype, "fileObjListChange", void 0);
SelectPicturePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-select-picture',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\componnets\select-picture\select-picture.html"*/'<div class="clear-fix" style="padding-top: 2px;" *ngIf="fileObjList">\n  <div *ngFor="let fileObj of fileObjList, let i = index" class="pictures">\n    <span *ngIf="allowDelete" class="remove" tappable (click)="deletePicture(i)">×</span>\n    <img src="{{fileObj.thumbPath}}" tappable (click)="viewerPicture(i)">\n  </div>\n  <div *ngIf="fileObjList.length<max&&allowAdd" tappable (click)="addPicture()" class="pictures add">\n    <ion-icon name="camera"></ion-icon>\n  </div>\n</div>\n'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\componnets\select-picture\select-picture.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_NativeService__["a" /* NativeService */]])
], SelectPicturePage);

//# sourceMappingURL=select-picture.js.map

/***/ }),

/***/ 800:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReturnReasonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Constants__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Storage } from '@ionic/storage';




var ReturnReasonPage = (function () {
    function ReturnReasonPage(navCtrl, navParams, httpService, nativeService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.alertCtrl = alertCtrl;
        this.img = "assets/imgs/temporary/logo.png";
        this.img2 = "assets/imgs/tuikuan2.png";
        this.img3 = "assets/imgs/tuihuo.png";
        this.img4 = "assets/imgs/huanhuo.png";
        this.img5 = "assets/imgs/jinru--hui.png";
        this.img6 = "assets/imgs/chose.png";
        this.img10 = "assets/imgs/xiangji.png";
        this.fileObjList = [];
        this.showflag = false;
        this.showflag1 = false;
        this.indexnum = 0;
        this.linkuser = "";
        this.linkphone = "";
        this.memo = "";
        this.max = 6;
        this.localIds = [];
        this.serverIds = [];
        this.isweb = false;
        this.allowDelete = true;
        this.len = 0;
        this.imgUrl = [];
        this.WimgUrl = [];
        this.item = navParams.get("item");
        this.type = navParams.get("type");
        this.newtype = this.navParams.get("newtype");
        this.isweb = !this.nativeService.isMobile();
    }
    ReturnReasonPage.prototype.ionViewDidLoad = function () {
        this.typemsg();
    };
    ReturnReasonPage.prototype.typemsg = function () {
        if (this.type == 0) {
            this.login();
        }
        else if (this.type == 2 || this.type == 1) {
            this.login2();
        }
    };
    ReturnReasonPage.prototype.login = function () {
        var _this = this;
        var userInfo = "";
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1105";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.resonType = result.Data;
            }
            else {
            }
        });
    };
    ReturnReasonPage.prototype.login2 = function () {
        var _this = this;
        var userInfo = "";
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1106";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.resonType = result.Data;
            }
            else {
            }
        });
    };
    ReturnReasonPage.prototype.hide = function () {
        var that = this;
        this.showflag = false;
        setTimeout(function () {
            that.showflag1 = false;
        }, 150);
    };
    ReturnReasonPage.prototype.show = function () {
        //var that = this;
        this.showflag1 = true;
        this.showflag = true;
    };
    //确认退货
    ReturnReasonPage.prototype.gotosuccess = function (filearray) {
        var _this = this;
        var userInfo = {
            OrderItemID: this.item.itemID,
            ReasonID: this.checkType.ID,
            Memo: this.memo,
            Phone: this.linkphone,
            Money: this.newtype == 1 ? 0 : this.item.TotalMoney,
            type: this.type,
            file: filearray,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1104";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.nativeService.showToast("申请成功");
                _this.navCtrl.popToRoot();
            }
            else {
            }
        });
    };
    //选择
    ReturnReasonPage.prototype.choseitem = function (i) {
        this.indexnum = i;
    };
    ReturnReasonPage.prototype.sureComment = function () {
        var _this = this;
        if (this.linkuser == "" || this.linkuser == undefined || this.linkuser == null) {
            this.nativeService.showToast("请输入联系人");
            return false;
        }
        if (this.linkphone == "" || this.linkphone == undefined || this.linkphone == null) {
            this.nativeService.showToast("请输入联系电话");
            return false;
        }
        if (this.checkType == null) {
            this.nativeService.showToast("请选择退款原因");
            return false;
        }
        if (this.fileObjList == null || this.fileObjList.length <= 0) {
            this.gotosuccess([]);
        }
        else {
            var filearray = [];
            for (var i = 0; i < this.fileObjList.length; i++) {
                filearray.push(this.fileObjList[i].origPath);
            }
            this.nativeService.showLoading("提交中");
            this.nativeService.uploadFileByMutiTranser(filearray).then(function (val) {
                _this.gotosuccess(val);
            });
        }
    };
    ReturnReasonPage.prototype.CheckReason = function (item) {
        for (var i = 0; i < this.resonType.length; i++) {
            this.resonType[i].isCheck = false;
        }
        item.isCheck = true;
        this.checkType = item;
    };
    ReturnReasonPage.prototype.SureCheck = function () {
        var _this = this;
        if (this.checkType == null || this.checkType == "" || this.checkType == undefined) {
            this.nativeService.showToast("请选择退款的类型");
        }
        this.showflag = false;
        setTimeout(function () {
            _this.showflag1 = false;
        }, 150);
    };
    ReturnReasonPage.prototype.addWxPicture = function () {
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
    ReturnReasonPage.prototype.WxUpLoad = function (localIds) {
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
    ReturnReasonPage.prototype.viewerWxPicture = function (item) {
        alert(item);
        var that = this;
        wx.previewImage({
            current: item,
            urls: that.localIds // 需要预览的图片http链接列表
        });
    };
    ReturnReasonPage.prototype.deleteWxPicture = function (i) {
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
    ReturnReasonPage.prototype.WxDownLoadImage = function (serverId) {
        var _this = this;
        this.nativeService.uploadWxFile(serverId).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.WimgUrl.push(__WEBPACK_IMPORTED_MODULE_5__providers_Constants__["f" /* fileViewPath */] + result.Msg);
                _this.imgUrl.push(result.Msg);
            }
        });
    };
    ReturnReasonPage.prototype.getImg = function () {
        if (!this.nativeService.isMobile()) {
            this.addWxPicture();
        }
    };
    return ReturnReasonPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('myInput'),
    __metadata("design:type", Object)
], ReturnReasonPage.prototype, "input", void 0);
ReturnReasonPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-return-reason',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\return-reason\return-reason.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">选择服务类型</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background:#eee;">\n  <div class="list-content">\n    <div class="list-item">\n      <div></div>\n      <div class="list-style">\n        <div>\n          <img [src]="item.Url" alt="">\n        </div>\n        <div>\n          <div>{{item.Name}}</div>\n          <div [innerHTML]="item.AttributeDescription"></div>\n        </div>\n        <div>\n          <div>￥{{item.Price}}</div>\n          <div>X{{item.Quantity}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="reason-list">\n    <!-- <div class="reason-list-item1" style=" justify-content: space-between; ">\n      <div>货物状态</div>\n      <div>\n        <img [src]="img5" alt="">\n      </div>\n    </div> -->\n    <div class="reason-list-item1" style=" justify-content: space-between; " tappable (click)="show()">\n      <div>退款原因</div>\n      <div *ngIf="checkType!=null">{{checkType.DText}}</div>\n      <div>\n        <img [src]="img5" alt="">\n      </div>\n    </div>\n  </div>\n  <div class="reason-list">\n    <div class="reason-list-item1">\n      <div>联系人:</div>\n      <div>\n        <input type="text" placeholder="必填" name="linkuser" id="linkuser" [(ngModel)]="linkuser" />\n      </div>\n    </div>\n    <div class="reason-list-item1">\n      <div>联系电话:</div>\n      <div class="reason-input">\n        <input type="number" placeholder="必填" name="linkphone" id="linkphone" [(ngModel)]="linkphone" />\n      </div>\n    </div>\n  </div>\n  <div class="reason-list">\n    <div class="reason-list-item1" *ngIf="newtype==0">\n      <div>退款金额:</div>\n      <div style="margin-left:10px;">&yen;{{item.TotalMoney}}</div>\n      <!-- <div>\n        <input type="text" placeholder="请填写">\n      </div> -->\n    </div>\n    <div class="reason-list-item1">\n      <div>退款说明:</div>\n      <div class="reason-input">\n        <ion-input type="text" placeholder="选填" name="memo" id="memo" [(ngModel)]="memo" #myInput></ion-input>\n      </div>\n    </div>\n  </div>\n  <div class="reason-img">\n    <div class="reason-img-item1">上传凭证</div>\n    <div class="reason-img-item2" *ngIf="!isweb">\n      <page-select-picture [(fileObjList)]="fileObjList" [max]="6"></page-select-picture>\n    </div>\n    <div class="reason-img-item2" *ngIf="isweb">\n      <div *ngFor="let item of WimgUrl;let i = index;" class="pictures">\n        <span *ngIf="allowDelete" class="remove" tappable (click)="deleteWxPicture(i)">×</span>\n        <img [src]="item" tappable (click)="viewPicture(item)" />\n      </div>\n      <div class="pictures">\n        <img [src]="img10" alt="" tappable (click)="getImg()" *ngIf="imgUrl.length<max">\n      </div>\n    </div>\n  </div>\n  <div class="reason-btn" tappable (click)="sureComment()">\n    确认修改\n  </div>\n</ion-content>\n<ion-footer>\n  <div class="cover" *ngIf="showflag1" [ngClass]="{true:\'goshow\',false:\'gohide\'}[showflag]">\n    <div class="clickbtn" tappable (click)="hide()"></div>\n    <div class="alertpart2" [ngClass]="{true:\'goup\',false:\'godown\'}[showflag]" style="overflow-y: scroll;">\n      <div class="reasonList" *ngFor="let item of resonType;let i=index" tappable (click)="CheckReason(item)">\n        <div>{{item.DText}}</div>\n        <img *ngIf="item.isCheck" [src]="img6" alt="">\n      </div>\n      <div class="reasonBtn" (click)="SureCheck()">确定</div>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\return-reason\return-reason.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["AlertController"]])
], ReturnReasonPage);

//# sourceMappingURL=return-reason.js.map

/***/ })

});
//# sourceMappingURL=105.js.map?v=107