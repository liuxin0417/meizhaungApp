webpackJsonp([46],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersionalInformPageModule", function() { return PersionalInformPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__persional_inform__ = __webpack_require__(827);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersionalInformPageModule = (function () {
    function PersionalInformPageModule() {
    }
    return PersionalInformPageModule;
}());
PersionalInformPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__persional_inform__["a" /* PersionalInformPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__persional_inform__["a" /* PersionalInformPage */]),
        ],
    })
], PersionalInformPageModule);

//# sourceMappingURL=persional-inform.module.js.map

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersionalInformPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_CityPicker__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PersionalInformPage = (function () {
    function PersionalInformPage(navCtrl, navParams, 
        /* private storage: Storage, */
        modalCtrl, httpService, nativeService, cityPickerSev, alertCtrl, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.cityPickerSev = cityPickerSev;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.img = "assets/imgs/four.png";
        this.img2 = "assets/imgs/jinru--hui.png";
        this.img3 = "assets/imgs/temporary/logo.png";
        this.myDate = "2017-11-10";
        this.sex = 0;
        this.userinfo = [];
        this.nickname = "";
        this.phonenum = "";
        this.userID = "";
        this.fileObjList = [];
        this.max = 4;
        this.HeadUrl = "";
        this.userinfo = this.navParams.get("userinfo");
        this.userID = this.navParams.get("userinfo").ID;
        ////console.info(this.userinfo)
        this.load();
    }
    PersionalInformPage.prototype.ionViewDidLoad = function () {
        //this.WxLoad();
    };
    PersionalInformPage.prototype.consoleinfo = function () {
    };
    /**微信设置访问接口 */
    /* WxLoad() {
      console.log(wx);
      let url = location.href.split('#')[0];
      var Info = {
        url: url
      };
      var parm = new Parameter();
      parm.jyh = "1126";
      parm.parm = JSON.stringify(Info);
      this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(val => {
        var result = JSON.parse(val.result);
        console.log(result);
        if (result.Code == "1") {
          var data = result.Data;
          wx.config({
            debug: true,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ['chooseImage', 'uploadImage', 'downloadImage']
          });
        }
      });
    } */
    PersionalInformPage.prototype.load = function () {
        var _this = this;
        ////console.info(this.userID)
        var userInfo = {
            UserID: this.userID,
        };
        ////console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1013";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result)
            if (result.Code != 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                if (result.Data.NickName != '') {
                    _this.nickname = result.Data.NickName;
                }
                else {
                    _this.nickname = "";
                }
                if (result.Data.Sex != null) {
                    _this.sex = result.Data.Sex;
                }
                else {
                    _this.sex = 0;
                }
                if (result.Data.phone != '') {
                    _this.phonenum = result.Data.phone;
                }
                else {
                    _this.phonenum = "";
                }
                if (result.Data.HeadUrl != '') {
                    _this.HeadUrl = result.Data.HeadUrl;
                }
                else {
                    _this.HeadUrl = "";
                }
            }
        });
    };
    PersionalInformPage.prototype.savemessage = function () {
        var _this = this;
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (this.nickname == "") {
            this.nativeService.showToast("昵称不能为空");
            return;
        }
        if (this.myDate == "") {
            this.nativeService.showToast("请选择出生日期");
            return;
        }
        if (!myreg.test(this.phonenum)) {
            this.nativeService.showToast("请正确填写手机号");
            return;
        }
        var userInfo = {
            UserID: this.userID,
            NickName: this.nickname,
            Sex: this.sex,
            // BirthDay: this.myDate,
            phone: this.phonenum,
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1014";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("提交中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            ////console.info(result);
            if (result.Code != 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    PersionalInformPage.prototype.getimg = function () {
        if (this.nativeService.isMobile()) {
            this.gotoupload();
        }
        else {
            this.chooseImage();
            // //console.info("不是真机");
        }
    };
    PersionalInformPage.prototype.chooseImage = function () {
        var that = this;
        wx.ready(function () {
            wx.chooseImage({
                count: 1,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera'],
                success: function (res) {
                    //alert(res);
                    var localIds = res.localIds;
                    wx.uploadImage({
                        localId: localIds[0],
                        isShowProgressTips: 1,
                        success: function (res) {
                            var serverId = res.serverId;
                            that.WxDownLoadImage(serverId);
                            // wx.downloadImage({
                            //   serverId: serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
                            //   isShowProgressTips: 1,// 默认为1，显示进度提示
                            //   success: function (res) {
                            //     var localId = res.localId; // 返回图片下载后的本地ID
                            //   }
                            // }); // 返回图片的服务器端ID
                        }
                    }); // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                }
            });
        });
    };
    /**下载微信端的图片 */
    PersionalInformPage.prototype.WxDownLoadImage = function (serverId) {
        var _this = this;
        this.nativeService.uploadWxFile(serverId).subscribe(function (res) {
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.publish(result.Msg);
            }
        });
    };
    PersionalInformPage.prototype.gotoupload = function () {
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
    PersionalInformPage.prototype.viewerPicture = function (index) {
        var picturePaths = [];
        for (var _i = 0, _a = this.fileObjList; _i < _a.length; _i++) {
            var fileObj = _a[_i];
            picturePaths.push(fileObj.origPath);
        }
        this.modalCtrl.create('PreviewPicturePage', { 'initialSlide': index, 'picturePaths': picturePaths }).present();
    };
    PersionalInformPage.prototype.getPictureSuccess = function (img) {
        var _this = this;
        var fileObj = { 'origPath': img, 'thumbPath': img };
        this.fileObjList.push(fileObj);
        // this.fileObjListChange.emit(this.fileObjList);
        if (this.fileObjList.length > 0) {
            this.nativeService.uploadByTransfer(this.fileObjList[0].origPath).then(function (data) {
                var msg = JSON.parse(data.response);
                if (msg.Code == "1") {
                    _this.publish(msg.Msg);
                }
            });
        }
        else {
            var url = "";
            this.publish(url);
        }
    };
    PersionalInformPage.prototype.publish = function (url) {
        var _this = this;
        /* let that = this; */
        var userInfo = {
            UserID: this.userID,
            headUrl: url
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1007";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("发布中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code == "1") {
                _this.nativeService.showToast("提交成功");
                _this.load();
                if (result.Data != null) {
                }
                else { }
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    PersionalInformPage.prototype.setNickName = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            message: "请输入您的昵称",
            inputs: [
                {
                    name: 'title',
                    placeholder: '昵称',
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: '确认',
                    handler: function (data) {
                        // console.log(data);
                        if (data.title != '') {
                            _this.nickname = data.title;
                        }
                        else {
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    PersionalInformPage.prototype.setNickphone = function () {
        var _this = this;
        var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
        var prompt = this.alertCtrl.create({
            message: "请输入您的电话",
            inputs: [
                {
                    name: 'title',
                    placeholder: '电话',
                },
            ],
            buttons: [
                {
                    text: '取消',
                    handler: function (data) {
                        //console.log('Cancel clicked');
                    }
                },
                {
                    text: '确认',
                    handler: function (data) {
                        // console.log(data);
                        if (data.title != '' && myreg.test(data.title)) {
                            _this.phonenum = data.title;
                        }
                        else {
                            _this.phonenum = "";
                            _this.nativeService.showToast("请正确填写手机号");
                            _this.setNickphone();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    return PersionalInformPage;
}());
PersionalInformPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-persional-inform',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\persional-inform\persional-inform.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">个人资料</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content style="background:#e5e5e5">\n  <div class="per-content">\n    <!-- <div tappable (click)="getimg()"> -->\n    <div>\n      <div style="color:#999">头像</div>\n      <div *ngIf="HeadUrl!=undefined">\n        <img class="headimg" *ngIf="HeadUrl!=\'\'" [src]="HeadUrl" alt="">\n        <img class="headimg" *ngIf="HeadUrl==\'\'" [src]="img3" alt="">\n      </div>\n      <div>\n        <img [src]="img2" alt="">\n      </div>\n    </div>\n    <div tappable (click)="setNickName()">\n      <div style="color:#999">昵称</div>\n      <div>\n        <input type="text" [(ngModel)]="nickname" class="nicknameput" disabled="disabled">\n      </div>\n      <div>\n        <img [src]="img2" alt="">\n      </div>\n    </div>\n    <div tappable (click)="setNickphone()">\n      <div style="color:#999">电话</div>\n      <div>\n        <input type="text" [(ngModel)]="phonenum" class="nicknameput" disabled="disabled">\n      </div>\n      <div>\n        <img [src]="img2" alt="">\n      </div>\n    </div>\n    <!-- <div id="change_self">\n      <ion-item>\n        <ion-label style="padding:0;color:#999">生日</ion-label>\n        <div style="padding:0;width:30px;height:100%;">生日</div>\n        <ion-datetime displayFormat="YYYY/MM/DD" [(ngModel)]="myDate" cancelText="关闭" doneText="确定"></ion-datetime>\n      </ion-item>\n      <div class="change_self_img">\n        <img style="width:11px;height:11px" [src]="img2" alt="">\n      </div>\n    </div> -->\n    <div id="change_self2">\n      <ion-item>\n        <ion-label style="padding:0;color:#999">性别</ion-label>\n        <ion-select [(ngModel)]="sex" cancelText="取消" okText="确定">\n          <ion-option value="0">男</ion-option>\n          <ion-option value="1">女</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n  </div>\n\n\n  <!-- <div class="per-content" style="margin-bottom:10px;">\n    <div style="border:none;">\n      <div style="color:#999">商城账号</div>\n      <div>109181245454</div>\n      <div>\n      </div>\n    </div>\n  </div> -->\n\n</ion-content>\n<ion-footer>\n  <div class="save-message" tappable (click)="savemessage()">保存信息</div>\n\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\persional-inform\persional-inform.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_CityPicker__["a" /* CityPickerService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"]])
], PersionalInformPage);

//# sourceMappingURL=persional-inform.js.map

/***/ })

});
//# sourceMappingURL=46.js.map?v=107