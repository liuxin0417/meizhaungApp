webpackJsonp([11,91],{

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

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluatePageModule", function() { return EvaluatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__evaluate__ = __webpack_require__(818);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componnets_select_picture_select_picture_module__ = __webpack_require__(648);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EvaluatePageModule = (function () {
    function EvaluatePageModule() {
    }
    return EvaluatePageModule;
}());
EvaluatePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__evaluate__["a" /* EvaluatePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__evaluate__["a" /* EvaluatePage */]),
            __WEBPACK_IMPORTED_MODULE_3__componnets_select_picture_select_picture_module__["SelectPicturePageModule"]
        ],
    })
], EvaluatePageModule);

//# sourceMappingURL=evaluate.module.js.map

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

/***/ 818:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EvaluatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_Constants__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EvaluatePage = (function () {
    function EvaluatePage(navCtrl, navParams, httpService, nativeService, storage, viewCtrl, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.list = [{ "statue": false }, { "statue": false }, { "statue": false }, { "statue": false }, { "statue": false },];
        this.img = "assets/imgs/temporary/logo.png";
        this.img2 = "assets/imgs/xuanzhong.png";
        this.img3 = "assets/imgs/weixuanzhong.png";
        this.img4 = "assets/imgs/guanbi.png";
        this.img5 = "assets/imgs/xiangji.png";
        this.status = "";
        this.num = 0;
        this.textarea = "";
        // fileObjList: FileObj[] = [];
        this.fileObjList = [];
        this.HaveImage = 0;
        this.IDUrl = "";
        this.max = 6;
        this.localIds = [];
        this.serverIds = [];
        this.isweb = false;
        this.allowDelete = true;
        this.len = 0;
        this.imgUrl = [];
        this.WimgUrl = [];
        this.goodslist = navParams.get("goodsDetail");
        this.typenum = navParams.get("num");
        this.goodsDetail = this.goodslist.Items[this.typenum];
        this.storage.get("userinfo").then(function (val) {
            // //console.info(val);
            if (val != "") {
                if (val.userinform.ID == "") {
                    _this.navCtrl.push("LoginPage", { showflag: true });
                }
                else {
                    _this.userID = val.userinform.ID;
                }
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
        this.isweb = !this.nativeService.isMobile();
    }
    EvaluatePage.prototype.ionViewDidLoad = function () {
    };
    EvaluatePage.prototype.givestaar = function (i) {
        this.list = [{ "statue": false }, { "statue": false }, { "statue": false }, { "statue": false }, { "statue": false },];
        for (var n = 0; n < (i + 1); n++) {
            this.list[n].statue = true;
        }
        ;
        this.num = (i + 1);
        if (i == 0) {
            this.status = "非常差";
        }
        else if (i == 1) {
            this.status = "差";
        }
        else if (i == 2) {
            this.status = "一般";
        }
        else if (i == 3) {
            this.status = "好";
        }
        else if (i == 4) {
            this.status = "非常好";
        }
        ;
        ////console.info(i);
    };
    EvaluatePage.prototype.comment = function () {
        if (this.textarea == '') {
            this.nativeService.showToast("评论内容不能为空！");
            return;
        }
        else {
            if (!this.isweb) {
                if (this.fileObjList == null || this.fileObjList.length <= 0) {
                    this.login([]);
                }
                else {
                    this.login(this.fileObjList);
                    // this.HaveImage = 1;
                    // var filearray: any[] = [];
                    // for (var i = 0; i < this.fileObjList.length; i++) {
                    //   filearray.push(this.fileObjList[i].origPath);
                    // }
                    // this.nativeService.showLoading("提交中");
                    // this.nativeService.uploadFileByMutiTranser(filearray).then(val => {
                    //   this.login(val);
                    // });
                }
            }
            else {
                if (this.imgUrl == null || this.imgUrl.length <= 0) {
                    this.login([]);
                }
                else {
                    this.login(this.imgUrl);
                }
            }
        }
    };
    EvaluatePage.prototype.login = function (filearray) {
        var _this = this;
        //console.info(this.fileObjList[0])
        var userInfo = {
            Userid: this.userID,
            goodsID: this.goodsDetail.ProductID,
            Detail: this.textarea,
            anonymity: 0,
            Degree: this.num,
            orderID: this.goodslist.ID,
            file: this.fileObjList,
            HaveImage: this.HaveImage,
            itemID: this.goodsDetail.itemID
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1024";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("提交中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code == 1) {
                _this.nativeService.showToast(result.Msg);
                _this.goodslist.Items[_this.typenum].IsEvaluate = 1;
                _this.viewCtrl.dismiss(_this.goodslist);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    EvaluatePage.prototype.slice = function (string) {
        if (string != "" && string != null) {
            return string.slice(0, 18) + "...";
        }
    };
    EvaluatePage.prototype.closealert = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: '是否放弃评价',
            buttons: [
                {
                    text: '否',
                    handler: function () {
                        //console.log('Disagree clicked');
                    }
                },
                {
                    text: '是',
                    handler: function () {
                        _this.viewCtrl.dismiss();
                    }
                }
            ]
        });
        confirm.present();
    };
    EvaluatePage.prototype.addWxPicture = function () {
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
    EvaluatePage.prototype.WxUpLoad = function (localIds) {
        var that = this;
        var localId = localIds.pop();
        wx.uploadImage({
            localId: localId,
            success: function (res) {
                var serverId = res.serverId;
                that.serverIds.push(serverId);
                //console.info("serverId》》》》》" + serverId)
                if (localIds.length > 0) {
                    that.WxUpLoad(localIds);
                }
                else {
                    // setTimeout(() => {
                    //   that.input.setFocus();
                    // }, 500);
                }
                that.WxDownLoadImage(serverId);
                // if (that.len == that.serverIds.length) {
                //   that.WxDownLoadImage(serverId);  
                // }
            }
        });
    };
    EvaluatePage.prototype.viewerWxPicture = function (item) {
        alert(item);
        var that = this;
        wx.previewImage({
            current: item,
            urls: that.localIds // 需要预览的图片http链接列表
        });
    };
    EvaluatePage.prototype.deleteWxPicture = function (i) {
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
                        // this.imgUrl.splice(i, 1);
                        // this.WimgUrl.splice(i, 1);
                        _this.fileObjList.splice(i, 1);
                        // this.len--;
                    }
                }
            ]
        }).present();
    };
    EvaluatePage.prototype.WxDownLoadImage = function (serverId) {
        var _this = this;
        this.nativeService.uploadWxFile(serverId).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.WimgUrl.push(__WEBPACK_IMPORTED_MODULE_6__providers_Constants__["f" /* fileViewPath */] + result.Msg);
                _this.imgUrl.push(result.Msg);
                //console.info("成功" + this.WimgUrl)
            }
            //console.info("不成功" + result)
        });
    };
    EvaluatePage.prototype.getImg = function () {
        if (!this.nativeService.isMobile()) {
            this.addWxPicture();
        }
    };
    EvaluatePage.prototype.onChange1 = function (event) {
        if (this.fileObjList.length < 6) {
        }
        else {
            this.nativeService.showToast("最多只能上传6张图片");
            return;
        }
        var files = event.target.files;
        var file = files[0];
        var size = files[0].size / 1024 > 1024 ? (~~(10 * files[0].size / 1024 / 1024)) / 10 + "MB" : ~~(files[0].size / 1024) + "KB";
        this.nativeService.showLoading("获取中");
        //console.info("大小" + size)
        //console.info(file);
        if (file == undefined) {
            this.IDUrl = "";
            //console.info("undefiend1")
        }
        else {
            //console.info("undefiend2")
            var fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            var that = this;
            fileReader.onload = function (e) {
                var name;
                name = e.target;
                that.IDUrl = name.result;
                //console.info(that.IDUrl);
                that.fileObjList.push(that.IDUrl);
                // that.takeimg(name.result, 1);
            };
        }
        this.nativeService.hideLoading();
    };
    EvaluatePage.prototype.takeimg = function (result, num) {
        var result = result;
        var that = this;
        var maxSize = 100 * 1024;
        if (result.length <= maxSize) {
            return result;
        }
        else { }
        ;
        var img = new Image();
        img.src = result;
        //console.info(img.complete);
        //console.info("加载.....");
        img.onload = function () {
            ////console.info("加载好了");
            that.compress(img, num);
        };
        //console.info("function .....");
        // var timer = setInterval(function () {
        //   if (img.complete) {
        //     clearInterval(timer)
        //   }
        // }, 50)
        // setTimeout(() => {
        //   this.compress(img, num);
        // }, 100);
    };
    EvaluatePage.prototype.compress = function (img, num) {
        var canvas = document.createElement("canvas");
        var ctx = canvas.getContext('2d');
        //瓦片canvas
        var tCanvas = document.createElement("canvas");
        var tctx = tCanvas.getContext("2d");
        // var initSize = img.src.length;
        var width = img.width;
        var height = img.height;
        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
        var ratio;
        if ((ratio = width * height / 4000000) > 1) {
            ratio = Math.sqrt(ratio);
            width /= ratio;
            height /= ratio;
        }
        else {
            ratio = 1;
        }
        canvas.width = width;
        canvas.height = height;
        //铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //如果图片像素大于100万则使用瓦片绘制
        var count;
        if ((count = width * height / 1000000) > 1) {
            count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
            //计算每块瓦片的宽和高
            var nw = ~~(width / count);
            var nh = ~~(height / count);
            tCanvas.width = nw;
            tCanvas.height = nh;
            for (var i = 0; i < count; i++) {
                for (var j = 0; j < count; j++) {
                    tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
                    ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                }
            }
        }
        else {
            ctx.drawImage(img, 0, 0, width, height);
        }
        //进行最小压缩
        var ndata = canvas.toDataURL('image/jpeg', 0.1);
        // //console.info()
        // console.log('压缩前：' + initSize);
        // console.log('压缩后：' + ndata.length);
        // console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
        // //console.info(ndata);
        this.IDUrl = ndata;
        this.fileObjList.push(this.IDUrl);
        //console.info(this.fileObjList);
    };
    return EvaluatePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myInput'),
    __metadata("design:type", Object)
], EvaluatePage.prototype, "input", void 0);
EvaluatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-evaluate',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\evaluate\evaluate.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">写评价</ion-title>\n    <ion-buttons right tappable (click)="closealert()">\n      <button ion-button icon-only>\n        <img [src]="img4" style="height:15px;width:15px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background:#eee;">\n  <div class="eva-header">\n    <div class="good-img">\n      <img [src]="goodsDetail.Url" alt="">\n    </div>\n    <div class="good-content">\n      <div>{{slice(goodsDetail.Name)}}</div>\n      <div>{{goodsDetail.Price}}元</div>\n    </div>\n  </div>\n  <div class="eva-content">\n    <div class="star">\n      <div>评价</div>\n      <div class="star-img" *ngFor="let item of list ; let i=index" tappable (click)="givestaar(i)">\n        <img *ngIf="item.statue==true" [src]="img2" alt="">\n        <img *ngIf="item.statue==false" [src]="img3" alt="">\n      </div>\n      <div class="exp">\n        {{status}}\n      </div>\n    </div>\n    <div class="justice">\n      <textarea name="" class="textarea" placeholder="在哪方面改进，会让你更满意" [(ngModel)]="textarea" #myInput></textarea>\n      <!-- <div style="margin-left:20px;" *ngIf="!isweb">\n        <page-select-picture [(fileObjList)]="fileObjList" [max]="6"></page-select-picture>\n      </div> -->\n      <div style="margin-left:20px;">\n        <div *ngFor="let item of fileObjList;let i = index;" class="pictures">\n          <span *ngIf="allowDelete" class="remove" tappable (click)="deleteWxPicture(i)">×</span>\n          <img [src]="item" tappable (click)="viewPicture(item)" />\n        </div>\n        <div class="pictures">\n          <input class="rn_img_input" type="file" (change)="onChange1($event)">\n          <img [src]="img5" alt="" *ngIf="fileObjList.length<max">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style="width:100%;height:40px;"></div>\n  <div class="eva-submit" tappable (click)="comment()">\n    提交\n  </div>\n</ion-content>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\evaluate\evaluate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_3__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_4__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
], EvaluatePage);

//# sourceMappingURL=evaluate.js.map

/***/ })

});
//# sourceMappingURL=11.js.map?v=107