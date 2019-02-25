webpackJsonp([85],{

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressPageModule", function() { return AddressPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic2_city_picker__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__address__ = __webpack_require__(751);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AddressPageModule = (function () {
    function AddressPageModule() {
    }
    return AddressPageModule;
}());
AddressPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__address__["a" /* AddressPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_3__address__["a" /* AddressPage */]),
            __WEBPACK_IMPORTED_MODULE_0_ionic2_city_picker__["CityPickerModule"],
        ],
    })
], AddressPageModule);

//# sourceMappingURL=address.module.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_CityPicker__ = __webpack_require__(293);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddressPage = (function () {
    function AddressPage(navCtrl, navParams, 
        //private motcrl: ModalController,
        httpService, nativeService, storage, cityPickerSev) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.cityPickerSev = cityPickerSev;
        this.img = "assets/imgs/new/bj.png";
        this.img2 = "assets/imgs/close.png";
        this.item = [];
    }
    AddressPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.scrollToTop();
        this.itemD = "";
        this.storage.get("userinfo").then(function (val) {
            if (val != null) {
                _this.userID = val.userinform.ID;
                _this.load();
            }
            else {
                _this.navCtrl.push("LoginPage", { showflag: true });
            }
        });
    };
    /*  ionViewDidLoad() {
       this.storage.get("userinfo").then(val => {
         if (val != null) {
           this.userID = val.userinform.ID
           this.load()
         } else {
           this.navCtrl.push("LoginPage",{showflag:true})
         }
   
       });
     } */
    AddressPage.prototype.creatpage = function (item, type) {
        var userinfo = [];
        if (type == 1) {
            userinfo = [{ 'type': 1 }, { 'value': this.itemD }, { 'userID': this.userID }];
        }
        else if (type == 2) {
            userinfo = [{ 'type': 2 }, { 'value': item }, { 'userID': this.userID }];
        }
        else if (type == 3) {
            userinfo = [{ 'type': 3 }, { 'value': "" }, { 'userID': this.userID }];
        }
        ;
        ////console.info(userinfo)
        /*  var moddal = this.motcrl.create('SetAddressPage',{
           userinfo:userinfo
         });
         moddal.present(); */
        this.navCtrl.push("SetAddressPage", {
            userinfo: userinfo,
        });
    };
    AddressPage.prototype.load = function () {
        var _this = this;
        var userInfo = {
            UserID: this.userID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1011";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            //console.info(result);
            if (result.Code != 1) {
                _this.nativeService.showToast(result.Msg);
            }
            else {
                _this.nativeService.showToast(result.Msg);
                _this.item = result.Data;
                // this.itemD=result.Data2;
                for (var n = 0; n < result.Data.length; n++) {
                    if (result.Data[n].IsDefalut == true) {
                        _this.itemD = result.Data[n];
                        _this.item.splice(n, 1);
                    }
                }
                // //console.info(this.itemD)
            }
        });
    };
    AddressPage.prototype.scrollToTop = function () {
        var _this = this;
        setTimeout(function () {
            // console.log(this.content.scrollToBottom);
            if (_this.content != null) {
                if (_this.content._scroll != null) {
                    _this.content.scrollToTop();
                }
                // if(this.content.scrollToBottom)
            }
        }, 100);
    };
    return AddressPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
], AddressPage.prototype, "content", void 0);
AddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-address',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\address\address.html"*/'<!--\n  Generated template for the AddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">地址管理</ion-title>\n    <!-- <ion-buttons right tappable (click)="creatpage()">\n      <img [src]="img2" style="transform:rotate(45deg);height:12px;width:12px;margin-right:10px;margin-top:3px;">\n    </ion-buttons> -->\n    <!-- <ion-buttons right>\n      <button ion-button icon-only tappable (click)="creatpage(none,3)">\n        <img [src]="img2" style="transform:rotate(45deg);height:12px;width:12px;margin-right:10px;margin-top:3px;">\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n<ion-content style="background:#eee">\n  <div *ngIf="itemD!=null&&itemD!=\'\'">\n    <div class="border_change" >\n      <div class="address-item">\n        <div class="item-content">\n          <div style="font-size:1.2em;">{{itemD.username}} &nbsp;&nbsp;{{itemD.tel}}\n            <span class="signClass">默认地址</span>\n          </div>\n          <div class="address_detail">{{itemD.address}}</div>\n        </div>\n        <div class="item-img" tappable (click)="creatpage(none,1)">\n          <img [src]="img" alt="">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf="item!=null">\n    <div style="width:100%;background:#fff;"  *ngFor="let item of item">\n      <div class="address-item">\n        <div class="item-content">\n          <div style="font-size:1.2em;">{{item.username}} &nbsp;&nbsp;{{item.tel}}</div>\n          <div class="address_detail">{{item.address}}</div>\n        </div>\n        <div class="item-img">\n          <img [src]="img" alt="" tappable (click)="creatpage(item,2)">\n        </div>\n      </div>\n    </div>\n  </div>\n \n  <!--  <ion-item>\n      <ion-label>Simple Picker</ion-label>\n      <ion-multi-picker item-content [multiPickerColumns]="simpleColumns"></ion-multi-picker>\n  </ion-item> -->\n</ion-content>\n<ion-footer>\n  <div class="new_address_btn" tappable (click)="creatpage(none,3)">\n    新增收货地址\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\address\address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_6__providers_CityPicker__["a" /* CityPickerService */]])
], AddressPage);

//# sourceMappingURL=address.js.map

/***/ })

});
//# sourceMappingURL=85.js.map?v=107