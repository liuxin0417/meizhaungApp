webpackJsonp([10,91],{

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

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LgOrderPageModule", function() { return LgOrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lg_order__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componnets_select_picture_select_picture_module__ = __webpack_require__(648);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LgOrderPageModule = (function () {
    function LgOrderPageModule() {
    }
    return LgOrderPageModule;
}());
LgOrderPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lg_order__["a" /* LgOrderPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__lg_order__["a" /* LgOrderPage */]),
            __WEBPACK_IMPORTED_MODULE_3__componnets_select_picture_select_picture_module__["SelectPicturePageModule"]
        ],
    })
], LgOrderPageModule);

//# sourceMappingURL=lg-order.module.js.map

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

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LgOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LgOrderPage = (function () {
    function LgOrderPage(navCtrl, navParams, httpService, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.img = "assets/imgs/temporary/logo.png";
        this.img2 = "assets/imgs/tuikuan2.png";
        this.img3 = "assets/imgs/tuihuo.png";
        this.img4 = "assets/imgs/huanhuo.png";
        this.img5 = "assets/imgs/jinru--hui.png";
        this.fileObjList = [];
        this.showflag = false;
        this.showflag1 = false;
        this.chosenum = 0;
        this.linkphone = "";
        this.BH = "";
        this.memo = "";
        this.Info = this.navParams.get("Info");
    }
    LgOrderPage.prototype.ionViewDidLoad = function () {
        //console.log('ionViewDidLoad LgOrderPage');
        this.login();
    };
    LgOrderPage.prototype.hide = function () {
        var that = this;
        this.showflag = false;
        setTimeout(function () {
            that.showflag1 = false;
        }, 150);
    };
    LgOrderPage.prototype.show = function () {
        //var that = this;
        this.showflag1 = true;
        this.showflag = true;
    };
    LgOrderPage.prototype.login = function () {
        var _this = this;
        var userInfo = "";
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1137";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == 1) {
                _this.resonType = result.Data;
            }
            else {
            }
        });
    };
    LgOrderPage.prototype.sureComment = function () {
        var _this = this;
        if (this.BH == "" || this.BH == undefined || this.BH == null) {
            this.nativeService.showToast("请输入物流单号");
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
    LgOrderPage.prototype.gotosuccess = function (filearray) {
        var _this = this;
        var userInfo = {
            LogisticID: this.checkType.ID,
            LogisticName: this.checkType.DText,
            LogisticCode: this.BH,
            ReturnID: this.Info.ID,
            Phone: this.linkphone,
            Memo: this.memo,
            file: filearray,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1135";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading();
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.nativeService.showToast("填写货运单号成功");
                _this.navCtrl.popToRoot();
            }
        });
    };
    LgOrderPage.prototype.changeType = function (i) {
        this.chosenum = i;
    };
    LgOrderPage.prototype.Check = function () {
        if (this.resonType != null) {
            this.checkType = this.resonType[this.chosenum];
        }
        this.hide();
    };
    return LgOrderPage;
}());
LgOrderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-lg-order',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\lg-order\lg-order.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">选择服务类型</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n  <div class="list-content">\n    <div class="list-item">\n      <div></div>\n      <div class="list-style">\n        <div>\n          <img [src]="Info.Url" alt="">\n        </div>\n        <div>\n          <div>{{Info.Name}}</div>\n          <!-- <div>3-5个月</div> -->\n        </div>\n        <div>\n          <div>￥{{Info.Price}}</div>\n          <div>X{{Info.Quantity}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="reason-list">\n    <div class="reason-list-item1" style=" justify-content: space-between;" tappable (click)="show()">\n      <div>物流公司</div>\n      <div style="color:#999;">\n        <span *ngIf="checkType==null">物流公司</span>\n        <span *ngIf="checkType!=null">{{checkType.DText}}</span>\n        <img [src]="img5" alt="">\n      </div>\n    </div>\n    <div class="reason-list-item1">\n      <div>物流单号:</div>\n      <div>\n        <input type="text" placeholder="请填写物流单号" name="BH" id="BH" [(ngModel)]="BH">\n      </div>\n    </div>\n  </div>\n  <div class="reason-list">\n    <div class="reason-list-item1">\n      <div>联系电话:</div>\n      <div>\n        <input type="text" placeholder="请填写手机号" name="linkphone" id="linkphone" [(ngModel)]="linkphone">\n      </div>\n    </div>\n    <div class="reason-list-item1">\n      <div>退款说明:</div>\n      <div class="reason-input">\n        <input type="text" placeholder="选填" name="memo" id="memo" [(ngModel)]="memo">\n      </div>\n    </div>\n  </div>\n  <div class="reason-img">\n    <div class="reason-img-item1">上传凭证</div>\n    <div class="reason-img-item2">\n      <page-select-picture [(fileObjList)]="fileObjList" [max]="6"></page-select-picture>\n    </div>\n  </div>\n\n</ion-content>\n<ion-footer>\n  <div class="reason-btn" tappable (click)="sureComment()">\n    确认修改\n  </div>\n  <div class="cover" *ngIf="showflag1" [ngClass]="{true:\'goshow\',false:\'gohide\'}[showflag]">\n    <div class="clickbtn" tappable (click)="hide()"></div>\n    <div class="alertpart2" [ngClass]="{true:\'goup\',false:\'godown\'}[showflag]">\n      <div class="translate">\n        <div class="translateType" *ngFor="let item of resonType ;let i=index" [ngClass]="{true:\'backgroundcolor\'}[chosenum==i]"\n          tappable (click)="changeType(i)">\n          {{item.DText}}\n        </div>\n      </div>\n      <div class="reason-btn" tappable (click)="Check()">\n        确定\n      </div>\n    </div>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\lg-order\lg-order.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */]])
], LgOrderPage);

//# sourceMappingURL=lg-order.js.map

/***/ })

});
//# sourceMappingURL=10.js.map?v=107