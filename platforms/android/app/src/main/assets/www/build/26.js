webpackJsonp([26],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetAddressPageModule", function() { return SetAddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__set_address__ = __webpack_require__(808);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_city_picker__ = __webpack_require__(297);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SetAddressPageModule = (function () {
    function SetAddressPageModule() {
    }
    return SetAddressPageModule;
}());
SetAddressPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__set_address__["a" /* SetAddressPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__set_address__["a" /* SetAddressPage */]),
            __WEBPACK_IMPORTED_MODULE_3_ionic2_city_picker__["CityPickerModule"]
        ],
    })
], SetAddressPageModule);

//# sourceMappingURL=set-address.module.js.map

/***/ }),

/***/ 808:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetAddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_CityPicker__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_HttpService__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SetAddressPage = (function () {
    function SetAddressPage(navCtrl, navParams, viewCtrl, cityPickerSev, httpService, nativeService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.cityPickerSev = cityPickerSev;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.img = "assets/imgs/guanbi.png";
        this.cityName = '山东省-烟台市-莱山区'; //初始化城市名
        this.code = "370613"; //城市编码
        this.province = "370000";
        this.city = '370600';
        this.pepperoni = true;
        this.addresstotal = '山东省烟台市莱山区';
        this.Defaultadress = '山东省-烟台市-莱山区';
        this.userinfo = this.navParams.get("userinfo");
        //console.info(this.userinfo);
        this.userID = this.userinfo[2].userID;
        if (this.userinfo[0].type != 3) {
            this.Username = this.userinfo[1].value.username;
            this.tel = this.userinfo[1].value.tel;
            this.Detailedaddress = this.userinfo[1].value.Detailedaddress;
            this.cityName = this.userinfo[1].value.Defaultadress;
            this.itemID = this.userinfo[1].value.ID;
            this.Defaultadress = this.userinfo[1].value.Defaultadress;
            var arr = this.userinfo[1].value.Defaultadress.split("-");
            this.addresstotal = arr[0] + arr[1] + arr[2];
            this.code = this.userinfo[1].value.area;
            this.city = this.userinfo[1].value.city;
            this.province = this.userinfo[1].value.province;
        }
    }
    SetAddressPage.prototype.ionViewDidLoad = function () {
        this.setCityPickerData();
        if (this.userinfo[0].type == 1) {
            this.pepperoni = true;
        }
        else {
            this.pepperoni = false;
        }
    };
    SetAddressPage.prototype.setCityPickerData = function () {
        var _this = this;
        this.cityPickerSev.getCitiesData()
            .then(function (data) {
            _this.cityData = data;
        });
    };
    SetAddressPage.prototype.cityChange = function (event) {
        this.code = event['region'].value;
        this.city = event['city'].value;
        this.province = event['province'].value;
        this.addresstotal = event['province'].text + event['city'].text + event['region'].text;
        this.Defaultadress = event['province'].text + "-" + event['city'].text + "-" + event['region'].text;
    };
    SetAddressPage.prototype.saveaddress = function () {
        //var that = this;
        //console.info("code："+this.code+":::city："+this.city+"::::province："+this.province)
        var _this = this;
        var isDefalut = true;
        if (this.pepperoni == true) {
            isDefalut = true;
        }
        else {
            isDefalut = false;
        }
        if (this.Username == undefined) {
            this.nativeService.showToast("姓名不能为空");
            return;
        }
        else if (this.tel == undefined) {
            this.nativeService.showToast("电话不能为空");
            return;
        }
        else if (this.Detailedaddress == undefined) {
            this.nativeService.showToast("地址不能为空");
            return;
        }
        if (this.tel.length != 11) {
            this.nativeService.showToast("请正确填写电话号码");
            return;
        }
        var userInfo = {
            UserID: this.userID,
            Username: this.Username,
            Tel: this.tel,
            Province: this.province,
            City: this.city,
            Area: this.code,
            Detailedaddress: this.Detailedaddress,
            IsDefalut: isDefalut,
            Address: this.addresstotal + this.Detailedaddress,
            Defaultadress: this.Defaultadress,
        };
        //console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1012";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("提交中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code != 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
                _this.navCtrl.pop();
            }
        });
    };
    SetAddressPage.prototype.resaveaddress = function () {
        var _this = this;
        var isDefalut = true;
        if (this.pepperoni == true) {
            isDefalut = true;
        }
        else {
            isDefalut = false;
        }
        var userInfo = {
            ID: this.itemID,
            Username: this.Username,
            Tel: this.tel,
            Province: this.province,
            City: this.city,
            Area: this.code,
            Detailedaddress: this.Detailedaddress,
            IsDefalut: isDefalut,
            Address: this.addresstotal + this.Detailedaddress,
            Defaultadress: this.Defaultadress,
        };
        //console.info(userInfo)
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1022";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("提交中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code != 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
                _this.navCtrl.pop();
            }
        });
    };
    SetAddressPage.prototype.delete = function () {
        var _this = this;
        var userInfo = {
            ID: this.itemID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_4__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1026";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            if (result.Code != 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
                _this.navCtrl.pop();
            }
        });
    };
    return SetAddressPage;
}());
SetAddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-set-address',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\set-address\set-address.html"*/'<!--\n  Generated template for the SetAddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">地址管理</ion-title>\n    <!-- <ion-buttons right *ngIf="userinfo[0].type!=3">\n      <button ion-button icon-only tappable (click)="delete()">\n        <div tappable>删除</div>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background: #f7f7f7">\n  <!-- <div class="set-title">\n    <div>\n      <img [src]="img" alt="" tappable (click)="close()">\n    </div>\n    <div>地址管理</div>\n\n  </div> -->\n  <div class="item_all">\n    <ion-item style="width:92%;margin:0 auto;padding-left: 0px;">\n      <div class="set-name">\n        <div class="set_name_title" style="color:#8e9093">收货人</div>\n        <div>\n          <input type="text" [(ngModel)]="Username">\n        </div>\n      </div>\n    </ion-item>\n    <ion-item style="width:92%;margin:0 auto;padding-left: 0px;">\n      <div class="set-phone set-name">\n        <div class="set_name_title" style="color:#8e9093">联系方式</div>\n        <div>\n          <input type="tel" [(ngModel)]="tel">\n        </div>\n      </div>\n    </ion-item>\n    <!-- <div class="set-place set-name">\n      <div>所在区域</div>\n    </div> -->\n    <ion-item style="width:92%;margin:0 auto;padding-left: 0px;">\n      <ion-label class="set_name_title" style="color:#8e9093;width:60px;flex:none">所在区域</ion-label>\n      <city-picker item-content [cancelText]="\'取消\'" [doneText]="\'完成\'" [separator]="\'-\'" [citiesData]="cityData" [(ngModel)]="cityName"\n        (ionChange)="cityChange($event)">\n      </city-picker>\n    </ion-item>\n    <ion-item style="width:92%;margin:0 auto;padding-left: 0px;">\n      <div class=" set-name">\n        <div class="set_name_title" style="color:#8e9093">详细地址</div>\n        <div>\n          <input type="text" [(ngModel)]="Detailedaddress">\n        </div>\n      </div>\n    </ion-item>\n    <!-- <ion-item style="width:92%;margin:0 auto;padding-left: 0px;">\n      <div class=" set-name">\n        <div class="set_name_title" style="color:#8e9093">邮政编码</div>\n        <div>\n          <input type="number">\n        </div>\n      </div>\n    </ion-item> -->\n  </div>\n\n  <!-- <div class="NOY set-name">\n    <div>\n    是否设为默认地址\n    </div>\n  </div> -->\n  <div class="item_all item_all2">\n    <ion-item style="width:92%;margin:0 auto;padding-left: 0px;margin-top:1rem;border:none">\n      <ion-label style="color:#8e9093">是否设为默认的地址</ion-label>\n      <ion-toggle [(ngModel)]="pepperoni"></ion-toggle>\n    </ion-item>\n  </div>\n  <div class="saveinform" *ngIf="this.userinfo[0].type==3" tappable (click)="saveaddress()" style="margin-top:2rem;">保存地址</div>\n  <div class="saveinform" *ngIf="this.userinfo[0].type!=3" tappable (click)="resaveaddress()" style="margin-top:2rem;">保存地址</div>\n  <div class="saveinform" *ngIf="userinfo[0].type!=3" style="margin-top:1rem;background:#fff;color:#333;" tappable (click)="delete()">删除收货地址</div>\n\n</ion-content>\n<ion-footer>\n  \n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\set-address\set-address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
        __WEBPACK_IMPORTED_MODULE_2__providers_CityPicker__["a" /* CityPickerService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */]])
], SetAddressPage);

//# sourceMappingURL=set-address.js.map

/***/ })

});
//# sourceMappingURL=26.js.map?v=107