webpackJsonp([188],{

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

/***/ })

});
//# sourceMappingURL=188.js.map?v=107