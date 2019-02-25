webpackJsonp([94],{

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Parameter; });
/* unused harmony export GoodsInfo */
/* unused harmony export SupplyInfo */
/* unused harmony export RequirementInfo */
/* unused harmony export GeneralCategory */
/* unused harmony export PayAndDetail */
/* unused harmony export ReportInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ProductAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttrValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GoodsMessage; });
/* unused harmony export OrderMessage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GroupList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_TimerDownService__ = __webpack_require__(298);

var Parameter = (function () {
    function Parameter() {
    }
    return Parameter;
}());

var GoodsInfo = (function () {
    function GoodsInfo() {
    }
    return GoodsInfo;
}());

var SupplyInfo = (function () {
    function SupplyInfo() {
    }
    return SupplyInfo;
}());

var RequirementInfo = (function () {
    function RequirementInfo() {
    }
    return RequirementInfo;
}());

var GeneralCategory = (function () {
    function GeneralCategory() {
    }
    return GeneralCategory;
}());

//充值页面
var PayAndDetail = (function () {
    function PayAndDetail() {
    }
    return PayAndDetail;
}());

//举报信息
var ReportInfo = (function () {
    function ReportInfo() {
    }
    return ReportInfo;
}());

var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var Padding = (function () {
    function Padding() {
        this.ipageStart = 0; //开始页
        this.pageSize = 10; //分页
        this.nowpageIndex = 1; //当前页
    }
    return Padding;
}());

var ProductAttr = (function () {
    function ProductAttr() {
    }
    return ProductAttr;
}());

var AttrValue = (function () {
    function AttrValue() {
    }
    return AttrValue;
}());

var Order = (function () {
    function Order() {
    }
    return Order;
}());

var GoodsMessage = (function () {
    function GoodsMessage() {
    }
    return GoodsMessage;
}());

var OrderMessage = (function () {
    function OrderMessage() {
    }
    return OrderMessage;
}());

var GroupList = (function () {
    function GroupList() {
        this.timer = new __WEBPACK_IMPORTED_MODULE_0__providers_TimerDownService__["a" /* TimerDownService */]();
    }
    return GroupList;
}());

//# sourceMappingURL=Model.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FILE_SERVE_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return APP_SERVE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return APP_VERSION_SERVE_URL; });
/* unused harmony export APP_DOWNLOAD */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APK_DOWNLOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return fileViewPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return IMAGE_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return QUALITY_SIZE; });
/* unused harmony export REQUEST_TIMEOUT */
var FILE_SERVE_URL = ''; //文件上传目录
// export const APP_SERVE_URL = 'http://192.168.8.99:9568';//后台网络路径
// export const APP_SERVE_URL = 'http://192.168.8.103:8012';//后台网络路径
// export const APP_SERVE_URL ="http://192.168.8.99:8089";//李明明接口
// export const APP_SERVE_URL = 'http://localhost:37346/';//后台网络路径
// export const APP_SERVE_URL = 'http://192.168.8.99:9568';//后台网络路径
// export const APP_SERVE_URL = 'http://localhost:37346/';//后台网络路径
//文件上传目录
var APP_SERVE_URL = 'https://www.lguangguang.com'; //后台网络路径
//export const APP_SERVE_URL = 'http://127.0.0.1:805';//后台网络路径
// http://192.168.8.103:8012
// export const APP_SERVE_URL = 'http://122.5.0.30:8568';//后台网络路径
//后台网络路径
var APP_VERSION_SERVE_URL = ""; //app版本升级服务;测试环境,查询app最新版本号,更新日志等信息.
//app版本升级服务;测试环境,查询app最新版本号,更新日志等信息.
var APP_DOWNLOAD = ''; //app下载地址
//app下载地址
var APK_DOWNLOAD = ''; //apk下载完整地址
//apk下载完整地址
var fileViewPath = "//www.lguangguang.com/doc";
var IMAGE_SIZE = 1000; //拍照/从相册选择照片压缩大小
//拍照/从相册选择照片压缩大小
var QUALITY_SIZE = 100; //图像压缩质量，范围为0 - 100
//图像压缩质量，范围为0 - 100
var REQUEST_TIMEOUT = 12000; //请求超时时间,单位为毫秒
//# sourceMappingURL=Constants.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { DomSanitizer } from '@angular/platform-browser';
var Utils = Utils_1 = (function () {
    function Utils() {
        /**
         * 每次调用sequence加1
         * @type {()=>number}
         */
        this.getSequence = (function () {
            var sequence = 100;
            return function () {
                return ++sequence;
            };
        })();
    }
    Utils.isEmpty = function (value) {
        return value == null || typeof value === 'string' && value.length === 0;
    };
    Utils.isNotEmpty = function (value) {
        return !Utils_1.isEmpty(value);
    };
    /**
     * 格式“是”or“否”
     * @param value
     * @returns {string|string}
     */
    Utils.formatYesOrNo = function (value) {
        return value == 1 ? '是' : (value == '0' ? '否' : null);
    };
    /**
     * 格式化日期
     * sFormat：日期格式:默认为yyyy-MM-dd     年：y，月：M，日：d，时：h，分：m，秒：s
     * @example  dateFormat(new Date(),'yyyy-MM-dd')   "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')   "2017-02-28 09:24:00"
     * @example  dateFormat(new Date(),'hh:mm')   "09:24"
     * @param date 日期
     * @param sFormat 格式化后的日期字符串
     * @returns {String}
     */
    Utils.dateFormat = function (date, sFormat) {
        if (sFormat === void 0) { sFormat = 'yyyy-MM-dd'; }
        var time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            Day: 0,
            TDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
        // time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.hour = time.Hour;
        time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat.replace(/yyyy/ig, String(time.Year))
            .replace(/yyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/y/ig, time.TYear)
            .replace(/MM/g, time.TMonth)
            .replace(/M/g, String(time.Month))
            .replace(/dd/ig, time.TDay)
            .replace(/d/ig, String(time.Day))
            .replace(/HH/g, time.THour)
            .replace(/H/g, String(time.Hour))
            .replace(/hh/g, time.Thour)
            .replace(/h/g, String(time.hour))
            .replace(/mm/g, time.TMinute)
            .replace(/m/g, String(time.Minute))
            .replace(/ss/ig, time.TSecond)
            .replace(/s/ig, String(time.Second))
            .replace(/fff/ig, String(time.Millisecond));
    };
    Utils.dateFormat2 = function (time) {
        var str = time.substr(0, 10);
        var date = new Date(str);
        date.setHours(parseInt(time.substr(11, 2)));
        date.setMinutes(parseInt(time.substr(14, 2)));
        return date;
    };
    /**
 * 把url中的双斜杠替换为单斜杠
 * 如:http://localhost:8080//api//demo.替换后http://localhost:8080/api/demo
 * @param url
 * @returns {string}
 */
    Utils.formatUrl = function (url) {
        if (url === void 0) { url = ''; }
        var index = 0;
        if (url.startsWith('http')) {
            index = 7;
        }
        return url.substring(0, index) + url.substring(index).replace(/\/\/*/g, '/');
    };
    Utils.MoneyFormat = function (str) {
        var newStr = "";
        var count = 0;
        if (str.indexOf(".") == -1) {
            for (var i = str.length - 1; i >= 0; i--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(i) + "," + newStr;
                }
                else {
                    newStr = str.charAt(i) + newStr;
                }
                count++;
            }
            ////console.info(isNaN(parseInt(newStr)));
            if (isNaN(parseInt(newStr))) {
                ////console.info("NaN1"+newStr)
                str = newStr; //自动补小数点后两位
                return str;
            }
            else {
                ////console.info(newStr)
                str = newStr + ".00"; //自动补小数点后两位
                return str;
            }
        }
        else {
            for (var a = str.indexOf(".") - 1; a >= 0; a--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(a) + "," + newStr;
                }
                else {
                    newStr = str.charAt(a) + newStr; //逐个字符相接起来
                }
                count++;
            }
            // console.log(newStr);
            str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
            // str = newStr;
            return str;
        }
        // if(number.indexOf('.'))
        // if (number.length <= 3) {
        //     return (number == '' ? '0' : number);
        // } else {
        //     var mod = number.length % 3;
        //     var output = (mod == 0 ? '' : (number.substring(0, mod)));
        //     for (var i = 0; i < Math.floor(number.length / 3); i++) {
        //         if ((mod == 0) && (i == 0))
        //             output += number.substring(mod + 3 * i, mod + 3 * i + 3);
        //         else
        //             output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
        //     }
        //     return (output);
        // }
    };
    return Utils;
}());
Utils = Utils_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Utils);

var Utils_1;
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 157;

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../componnets/popup/popup.module": [
		647,
		93
	],
	"../componnets/preview-picture/preview-picture.module": [
		655,
		92
	],
	"../componnets/select-picture/select-picture.module": [
		648,
		91
	],
	"../componnets/swiper/swiper.module": [
		651,
		90
	],
	"../componnets/template-three/template-three.module": [
		652,
		89
	],
	"../componnets/template-two/template-two.module": [
		649,
		88
	],
	"../componnets/template/template.module": [
		653,
		87
	],
	"../componnets/user-judge/user-judge.module": [
		650,
		86
	],
	"../pages/address/address.module": [
		656,
		85
	],
	"../pages/apply-return/apply-return.module": [
		657,
		84
	],
	"../pages/cash/cash.module": [
		658,
		83
	],
	"../pages/charge-type/charge-type.module": [
		659,
		16
	],
	"../pages/chat/chat.module": [
		660,
		82
	],
	"../pages/classification/classification.module": [
		661,
		8
	],
	"../pages/collection/collection.module": [
		662,
		13
	],
	"../pages/community/community.module": [
		663,
		81
	],
	"../pages/concerner-list/concerner-list.module": [
		664,
		80
	],
	"../pages/coupon-list/coupon-list.module": [
		665,
		79
	],
	"../pages/coupon-to-use/coupon-to-use.module": [
		666,
		78
	],
	"../pages/coupon/coupon.module": [
		667,
		77
	],
	"../pages/delivery-pont/delivery-pont.module": [
		668,
		76
	],
	"../pages/delivery-type/delivery-type.module": [
		669,
		75
	],
	"../pages/evaluate/evaluate.module": [
		723,
		11
	],
	"../pages/exchange-goods/exchange-goods.module": [
		670,
		74
	],
	"../pages/first/first.module": [
		671,
		73
	],
	"../pages/floor-goodlist/floor-goodlist.module": [
		724,
		72
	],
	"../pages/follow/follow.module": [
		672,
		71
	],
	"../pages/forgot-password/forgot-password.module": [
		673,
		70
	],
	"../pages/gongz/gongz.module": [
		674,
		69
	],
	"../pages/good-detail/good-detail.module": [
		738,
		0
	],
	"../pages/goods-list/goods-list.module": [
		725,
		68
	],
	"../pages/goods/goods.module": [
		675,
		67
	],
	"../pages/goodscar/goodscar.module": [
		654,
		66
	],
	"../pages/group-buy-detail/group-buy-detail.module": [
		726,
		7
	],
	"../pages/group-buy-list/group-buy-list.module": [
		676,
		65
	],
	"../pages/group-buy-success/group-buy-success.module": [
		677,
		64
	],
	"../pages/group-settlement/group-settlement.module": [
		727,
		4
	],
	"../pages/home-new/home-new.module": [
		728,
		63
	],
	"../pages/home/home.module": [
		729,
		1
	],
	"../pages/hot-plate/hot-plate.module": [
		678,
		62
	],
	"../pages/income/income.module": [
		679,
		61
	],
	"../pages/invite-friends/invite-friends.module": [
		680,
		60
	],
	"../pages/judege/judege.module": [
		681,
		6
	],
	"../pages/lg-order/lg-order.module": [
		682,
		10
	],
	"../pages/login/login.module": [
		730,
		59
	],
	"../pages/logistics-info/logistics-info.module": [
		683,
		58
	],
	"../pages/money-in-out/money-in-out.module": [
		684,
		57
	],
	"../pages/my-community/my-community.module": [
		685,
		56
	],
	"../pages/my-team-two/my-team-two.module": [
		686,
		55
	],
	"../pages/my-team/my-team.module": [
		687,
		54
	],
	"../pages/my-wallet/my-wallet.module": [
		688,
		53
	],
	"../pages/newclassification/newclassification.module": [
		689,
		52
	],
	"../pages/notice-detail/notice-detail.module": [
		690,
		51
	],
	"../pages/notice/notice.module": [
		691,
		50
	],
	"../pages/order-detail/order-detail.module": [
		692,
		49
	],
	"../pages/order-list/order-list.module": [
		731,
		48
	],
	"../pages/order-pay/order-pay.module": [
		693,
		15
	],
	"../pages/pay-success/pay-success.module": [
		694,
		47
	],
	"../pages/persional-inform/persional-inform.module": [
		732,
		46
	],
	"../pages/person-homepage/person-homepage.module": [
		695,
		45
	],
	"../pages/personal-article/personal-article.module": [
		696,
		44
	],
	"../pages/personal/personal.module": [
		697,
		43
	],
	"../pages/public-welfare/public-welfare.module": [
		698,
		42
	],
	"../pages/publish-articles/publish-articles.module": [
		733,
		41
	],
	"../pages/push-code/push-code.module": [
		699,
		40
	],
	"../pages/recharge/recharge.module": [
		700,
		39
	],
	"../pages/reset-password/reset-password.module": [
		701,
		38
	],
	"../pages/resigiter/resigiter.module": [
		702,
		37
	],
	"../pages/return-detail/return-detail.module": [
		703,
		36
	],
	"../pages/return-fail/return-fail.module": [
		704,
		35
	],
	"../pages/return-goods/return-goods.module": [
		705,
		34
	],
	"../pages/return-reason/return-reason.module": [
		706,
		9
	],
	"../pages/return-success/return-success.module": [
		707,
		33
	],
	"../pages/return-type-list/return-type-list.module": [
		708,
		32
	],
	"../pages/return-type/return-type.module": [
		734,
		12
	],
	"../pages/return-wait/return-wait.module": [
		709,
		31
	],
	"../pages/search/search.module": [
		710,
		30
	],
	"../pages/seckill/seckill.module": [
		735,
		29
	],
	"../pages/second-to-buy/second-to-buy.module": [
		711,
		28
	],
	"../pages/seen-list/seen-list.module": [
		712,
		27
	],
	"../pages/set-address/set-address.module": [
		713,
		26
	],
	"../pages/set-up/set-up.module": [
		714,
		25
	],
	"../pages/settlement-signle/settlement-signle.module": [
		739,
		3
	],
	"../pages/settlement/settlement.module": [
		740,
		2
	],
	"../pages/shop-goods-list/shop-goods-list.module": [
		736,
		14
	],
	"../pages/shop-index/shop-index.module": [
		715,
		24
	],
	"../pages/shopgoodscar/shopgoodscar.module": [
		737,
		23
	],
	"../pages/shopsuceess/shopsuceess.module": [
		716,
		22
	],
	"../pages/slide-img/slide-img.module": [
		717,
		21
	],
	"../pages/stock-manage/stock-manage.module": [
		718,
		20
	],
	"../pages/tabs/tabs.module": [
		719,
		5
	],
	"../pages/test/test.module": [
		720,
		19
	],
	"../pages/theme/theme.module": [
		721,
		18
	],
	"../pages/wallet-detail/wallet-detail.module": [
		722,
		17
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 240;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfiniteScrollService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_HttpService__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Observable } from 'rxjs';
var InfiniteScrollService = (function () {
    function InfiniteScrollService(http) {
        this.http = http;
    }
    InfiniteScrollService.prototype.getData = function (url, data) {
        return this.http.post(url, data);
    };
    InfiniteScrollService.prototype.getAsyncData = function (url, data) {
        return this.getData(url, data);
        // return Observable.create((observer)=>{
        //     setTimeout(()=>{
        //         this.getData(url, data);
        //     });
        // },500); 
        // return new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(this.getData());
        //     }, 500);
        // });
    };
    return InfiniteScrollService;
}());
InfiniteScrollService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_HttpService__["a" /* HttpService */]])
], InfiniteScrollService);

//# sourceMappingURL=InfiniteScrollService.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityPickerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CityPickerService = (function () {
    function CityPickerService(http) {
        this.http = http;
    }
    CityPickerService.prototype.getCitiesData = function () {
        return this.http.get('./assets/data/city-data.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (err) {
            return Promise.reject(err);
        });
    };
    return CityPickerService;
}());
CityPickerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], CityPickerService);

//# sourceMappingURL=CityPicker.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Params; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import {Injectable} from 'angular2/core';

var Params = (function () {
    function Params() {
        console.log("Params()");
        this.params = "";
    }
    return Params;
}());
Params = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Params);

//# sourceMappingURL=params.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__img_lazy_load_img_lazy_load__ = __webpack_require__(618);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__img_lazy_load_img_lazy_load__["a" /* ImgLazyLoadComponent */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__img_lazy_load_img_lazy_load__["a" /* ImgLazyLoadComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SocketService = (function () {
    function SocketService() {
    }
    /**初始化信息 */
    SocketService.prototype.socketAuth = function () {
        var _this = this;
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__("http://39.106.178.20:3000/");
        this.socket.on("connect", function (socket) {
            _this.connected = true;
        });
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])()
], SocketService);

//# sourceMappingURL=SocketService.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerDownService; });
var TimerDownService = (function () {
    function TimerDownService() {
    }
    Object.defineProperty(TimerDownService.prototype, "diff", {
        set: function (val) {
            this._diff = Math.floor(val / 1000);
            this.day = Math.floor(this._diff / 86400);
            this.hour = Math.floor((this._diff - this.day * 86400) / 3600) < 10 ? "0" + Math.floor((this._diff - this.day * 86400) / 3600) : Math.floor((this._diff - this.day * 86400) / 3600) + "";
            this.minute = Math.floor((this._diff % 3600) / 60) < 10 ? "0" + Math.floor((this._diff % 3600) / 60) : Math.floor((this._diff % 3600) / 60) + "";
            this.second = (this._diff % 3600) % 60 < 10 ? "0" + (this._diff % 3600) % 60 : (this._diff % 3600) % 60 + "";
        },
        enumerable: true,
        configurable: true
    });
    TimerDownService.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.timer = setInterval(function () {
            var date = new Date();
            if (date >= _this.endDate) {
                _this.ngOnDestroy();
            }
            else {
                _this.diff = _this.endDate - Date.now();
            }
        }, 1000);
    };
    TimerDownService.prototype.ngOnDestroy = function () {
        if (this.timer) {
            // this.diff = 0;
            clearInterval(this.timer);
            this.diff = 0;
        }
    };
    return TimerDownService;
}());

//# sourceMappingURL=TimerDownService.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(305);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_SocketService__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_CityPicker__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(639);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_toast__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_transfer__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_version__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_web_intent__ = __webpack_require__(640);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_image_picker__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_keyboard__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ion_multi_picker__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ion_multi_picker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ion_multi_picker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ionic2_city_picker__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_backButton_service__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_InfiniteScrollService__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_components_module__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_params__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// import { ionicLazyLoad } from '../assets/js/ionic-image-lazy-load.js';
// import { TabsPageModule } from '../pages/tabs/tabs.module';
// import { LoginPageModule } from '../pages/login/login.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* GBApp */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_24_ion_multi_picker__["MultiPickerModule"],
            __WEBPACK_IMPORTED_MODULE_28__components_components_module__["a" /* ComponentsModule */],
            __WEBPACK_IMPORTED_MODULE_25_ionic2_city_picker__["CityPickerModule"],
            // ionicLazyLoad,
            __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* GBApp */], {
                backButtonText: "",
                iconMode: 'ios',
                mode: 'ios',
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                pageTransition: 'ios',
                tabsHideOnSubPages: 'true',
                preloadModules: false,
                cache: false,
            }, {
                links: [
                    { loadChildren: '../componnets/popup/popup.module#PopupPageModule', name: 'PopupPage', segment: 'popup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../componnets/preview-picture/preview-picture.module#PreviewPicturePageModule', name: 'PreviewPicturePage', segment: 'preview-picture', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../componnets/select-picture/select-picture.module#SelectPicturePageModule', name: 'SelectPicturePage', segment: 'select-picture', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../componnets/swiper/swiper.module#SwiperPageModule', name: 'SwiperPage', segment: 'swiper', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../componnets/template-three/template-three.module#TemplateThreePageModule', name: 'TemplateThreePage', segment: 'template-three', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../componnets/template-two/template-two.module#TemplateTwoPageModule', name: 'TemplateTwoPage', segment: 'template-two', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../componnets/template/template.module#TemplatePageModule', name: 'TemplatePage', segment: 'template', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../componnets/user-judge/user-judge.module#UserJudgePageModule', name: 'UserJudgePage', segment: 'user-judge', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/address/address.module#AddressPageModule', name: 'AddressPage', segment: 'address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/apply-return/apply-return.module#ApplyReturnPageModule', name: 'ApplyReturnPage', segment: 'apply-return', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cash/cash.module#CashPageModule', name: 'CashPage', segment: 'cash', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/charge-type/charge-type.module#ChargeTypePageModule', name: 'ChargeTypePage', segment: 'charge-type', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/classification/classification.module#ClassificationPageModule', name: 'ClassificationPage', segment: 'classification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/collection/collection.module#CollectionPageModule', name: 'CollectionPage', segment: 'collection', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/community/community.module#CommunityPageModule', name: 'CommunityPage', segment: 'community', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/concerner-list/concerner-list.module#ConcernerListPageModule', name: 'ConcernerListPage', segment: 'concerner-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/coupon-list/coupon-list.module#CouponListPageModule', name: 'CouponListPage', segment: 'coupon-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/coupon-to-use/coupon-to-use.module#CouponToUsePageModule', name: 'CouponToUsePage', segment: 'coupon-to-use', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/coupon/coupon.module#CouponPageModule', name: 'CouponPage', segment: 'coupon', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/delivery-pont/delivery-pont.module#DeliveryPontPageModule', name: 'DeliveryPontPage', segment: 'delivery-pont', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/delivery-type/delivery-type.module#DeliveryTypePageModule', name: 'DeliveryTypePage', segment: 'delivery-type', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/exchange-goods/exchange-goods.module#ExchangeGoodsPageModule', name: 'ExchangeGoodsPage', segment: 'exchange-goods', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/follow/follow.module#FollowPageModule', name: 'FollowPage', segment: 'follow', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/gongz/gongz.module#GongzPageModule', name: 'GongzPage', segment: 'gongz', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/goods/goods.module#GoodsPageModule', name: 'GoodsPage', segment: 'goods', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/group-buy-list/group-buy-list.module#GroupBuyListPageModule', name: 'GroupBuyListPage', segment: 'group-buy-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/group-buy-success/group-buy-success.module#GroupBuySuccessPageModule', name: 'GroupBuySuccessPage', segment: 'group-buy-success', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/hot-plate/hot-plate.module#HotPlatePageModule', name: 'HotPlatePage', segment: 'hot-plate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/income/income.module#IncomePageModule', name: 'IncomePage', segment: 'income', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/invite-friends/invite-friends.module#InviteFriendsPageModule', name: 'InviteFriendsPage', segment: 'invite-friends', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/judege/judege.module#JudegePageModule', name: 'JudegePage', segment: 'judege', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/lg-order/lg-order.module#LgOrderPageModule', name: 'LgOrderPage', segment: 'lg-order', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/logistics-info/logistics-info.module#LogisticsInfoPageModule', name: 'LogisticsInfoPage', segment: 'logistics-info', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/money-in-out/money-in-out.module#MoneyInOutPageModule', name: 'MoneyInOutPage', segment: 'money-in-out', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-community/my-community.module#MyCommunityPageModule', name: 'MyCommunityPage', segment: 'my-community', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-team-two/my-team-two.module#MyTeamTwoPageModule', name: 'MyTeamTwoPage', segment: 'my-team-two', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-team/my-team.module#MyTeamPageModule', name: 'MyTeamPage', segment: 'my-team', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/my-wallet/my-wallet.module#MyWalletPageModule', name: 'MyWalletPage', segment: 'my-wallet', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newclassification/newclassification.module#NewclassificationPageModule', name: 'NewclassificationPage', segment: 'newclassification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notice-detail/notice-detail.module#NoticeDetailPageModule', name: 'NoticeDetailPage', segment: 'notice-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/notice/notice.module#NoticePageModule', name: 'NoticePage', segment: 'notice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order-detail/order-detail.module#OrderDetailPageModule', name: 'OrderDetailPage', segment: 'order-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order-pay/order-pay.module#OrderPayPageModule', name: 'OrderPayPage', segment: 'order-pay', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pay-success/pay-success.module#PaySuccessPageModule', name: 'PaySuccessPage', segment: 'pay-success', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/person-homepage/person-homepage.module#PersonHomepagePageModule', name: 'PersonHomepagePage', segment: 'person-homepage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal-article/personal-article.module#PersonalArticlePageModule', name: 'PersonalArticlePage', segment: 'personal-article', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal/personal.module#PersonalPageModule', name: 'PersonalPage', segment: 'personal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/public-welfare/public-welfare.module#PublicWelfarePageModule', name: 'PublicWelfarePage', segment: 'public-welfare', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/push-code/push-code.module#PushCodePageModule', name: 'PushCodePage', segment: 'push-code', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recharge/recharge.module#RechargePageModule', name: 'RechargePage', segment: 'recharge', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/resigiter/resigiter.module#ResigiterPageModule', name: 'ResigiterPage', segment: 'resigiter', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/return-detail/return-detail.module#ReturnDetailPageModule', name: 'ReturnDetailPage', segment: 'return-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/return-fail/return-fail.module#ReturnFailPageModule', name: 'ReturnFailPage', segment: 'return-fail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/return-goods/return-goods.module#ReturnGoodsPageModule', name: 'ReturnGoodsPage', segment: 'return-goods', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/return-reason/return-reason.module#ReturnReasonPageModule', name: 'ReturnReasonPage', segment: 'return-reason', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/return-success/return-success.module#ReturnSuccessPageModule', name: 'ReturnSuccessPage', segment: 'return-success', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/return-type-list/return-type-list.module#ReturnTypeListPageModule', name: 'ReturnTypeListPage', segment: 'return-type-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/return-wait/return-wait.module#ReturnWaitPageModule', name: 'ReturnWaitPage', segment: 'return-wait', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/second-to-buy/second-to-buy.module#SecondToBuyPageModule', name: 'SecondToBuyPage', segment: 'second-to-buy', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/seen-list/seen-list.module#SeenListPageModule', name: 'SeenListPage', segment: 'seen-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/set-address/set-address.module#SetAddressPageModule', name: 'SetAddressPage', segment: 'set-address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/set-up/set-up.module#SetUpPageModule', name: 'SetUpPage', segment: 'set-up', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shop-index/shop-index.module#ShopIndexPageModule', name: 'ShopIndexPage', segment: 'shop-index', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shopsuceess/shopsuceess.module#ShopsuceessPageModule', name: 'ShopsuceessPage', segment: 'shopsuceess', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/slide-img/slide-img.module#SlideImgPageModule', name: 'SlideImgPage', segment: 'slide-img', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/stock-manage/stock-manage.module#StockManagePageModule', name: 'StockManagePage', segment: 'stock-manage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/theme/theme.module#ThemePageModule', name: 'ThemePage', segment: 'theme', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/wallet-detail/wallet-detail.module#WalletDetailPageModule', name: 'WalletDetailPage', segment: 'wallet-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/evaluate/evaluate.module#EvaluatePageModule', name: 'EvaluatePage', segment: 'evaluate', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/floor-goodlist/floor-goodlist.module#FloorGoodlistPageModule', name: 'FloorGoodlistPage', segment: 'floorlist/:fid/:name', priority: 'low', defaultHistory: ['TabsPage'] },
                    { loadChildren: '../pages/goods-list/goods-list.module#GoodsListPageModule', name: 'GoodsListPage', segment: 'goods-list/:BH/:name', priority: 'low', defaultHistory: ['TabsPage'] },
                    { loadChildren: '../pages/goodscar/goodscar.module#GoodscarPageModule', name: 'GoodscarPage', segment: 'goodscar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/group-buy-detail/group-buy-detail.module#GroupBuyDetailPageModule', name: 'GroupBuyDetailPage', segment: 'group-buy-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/group-settlement/group-settlement.module#GroupSettlementPageModule', name: 'GroupSettlementPage', segment: 'group-settlement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home-new/home-new.module#HomeNewPageModule', name: 'HomeNewPage', segment: 'home-new', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order-list/order-list.module#OrderListPageModule', name: 'OrderListPage', segment: 'order-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/persional-inform/persional-inform.module#PersionalInformPageModule', name: 'PersionalInformPage', segment: 'persional-inform', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/publish-articles/publish-articles.module#PublishArticlesPageModule', name: 'PublishArticlesPage', segment: 'publish-articles', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/return-type/return-type.module#ReturnTypePageModule', name: 'ReturnTypePage', segment: 'return-type', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/seckill/seckill.module#SeckillPageModule', name: 'SeckillPage', segment: 'seckill', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shop-goods-list/shop-goods-list.module#ShopGoodsListPageModule', name: 'ShopGoodsListPage', segment: 'shop-goods-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shopgoodscar/shopgoodscar.module#ShopgoodscarPageModule', name: 'ShopgoodscarPage', segment: 'shopgoodscar', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/good-detail/good-detail.module#GoodDetailPageModule', name: 'GoodDetailPage', segment: 'good-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settlement-signle/settlement-signle.module#SettlementSignlePageModule', name: 'SettlementSignlePage', segment: 'settlement-signle', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settlement/settlement.module#SettlementPageModule', name: 'SettlementPage', segment: 'settlement', priority: 'low', defaultHistory: [] }
                ]
            }
            // ,{
            //   links:[
            //     { component: 'GoodDetailPage', name: 'GoodDetailPage', segment: 'goodsDetail/:goodsid/:Fh' }
            //   ]
            // }
            ),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["IonicApp"]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* GBApp */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_network__["a" /* Network */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_toast__["a" /* Toast */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_web_intent__["a" /* WebIntent */],
            __WEBPACK_IMPORTED_MODULE_23__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_2__providers_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_NativeService__["a" /* NativeService */],
            __WEBPACK_IMPORTED_MODULE_1__providers_CityPicker__["a" /* CityPickerService */],
            __WEBPACK_IMPORTED_MODULE_27__providers_InfiniteScrollService__["a" /* InfiniteScrollService */],
            __WEBPACK_IMPORTED_MODULE_0__providers_SocketService__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["Content"],
            __WEBPACK_IMPORTED_MODULE_26__providers_backButton_service__["a" /* BackButtonService */],
            __WEBPACK_IMPORTED_MODULE_29__providers_params__["a" /* Params */],
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["IonicErrorHandler"] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImgLazyLoadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
 * Generated class for the ImgLazyLoadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ImgLazyLoadComponent = (function () {
    function ImgLazyLoadComponent() {
        this.default = "../../assets/imgs/change.png";
    }
    ImgLazyLoadComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.Ttype == 1) {
            this.default = "assets/imgs/grey1.png";
        }
        else if (this.Ttype == 2) {
            this.default = "assets/imgs/grey2.png";
        }
        else if (this.Ttype == 3) {
            this.default = "assets/imgs/grey3.png";
        }
        var img = new Image();
        img.src = this.src;
        img.onload = function () {
            _this.default = _this.src;
            // setTimeout(() => {
            // }, 2000);
        };
    };
    // isInView() {
    //   var clientHeight = $document[0].documentElement.clientHeight;
    //   var clientWidth = $document[0].documentElement.clientWidth;
    //   var imageRect = $element[0].getBoundingClientRect();
    //   return (imageRect.top >= 0 && imageRect.top <= clientHeight + parseInt($attributes.imageLazyDistanceFromBottomToLoad)) &&
    //       (imageRect.left >= 0 && imageRect.left <= clientWidth + parseInt($attributes.imageLazyDistanceFromRightToLoad));
    // }
    ImgLazyLoadComponent.prototype.doInfinite = function (infiniteScroll) {
        console.info("显示图片");
    };
    return ImgLazyLoadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
], ImgLazyLoadComponent.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ImgLazyLoadComponent.prototype, "src", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ImgLazyLoadComponent.prototype, "Ttype", void 0);
ImgLazyLoadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'img-lazy-load',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\components\img-lazy-load\img-lazy-load.html"*/'<!-- Generated template for the ImgLazyLoadComponent component -->\n<img src="{{default}}">\n<!-- <ion-infinite-scroll *ngIf="isshow" (ionInfinite)="doInfinite($event)" threshold="30px">\n  <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="加载中...">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll> -->'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\components\img-lazy-load\img-lazy-load.html"*/
    }),
    __metadata("design:paramtypes", [])
], ImgLazyLoadComponent);

//# sourceMappingURL=img-lazy-load.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GBApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_HttpService__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { LoginPage } from '../pages/login/login';
// import { Jsonp } from '../../node_modules/@angular/http';
// import { TabsPage } from '../pages/tabs/tabs';
var GBApp = (function () {
    function GBApp(platform, _menu, statusBar, splashScreen, nativeService, app, storage, toastCtrl, keyboard, ionicApp, httpService) {
        var _this = this;
        this.platform = platform;
        this._menu = _menu;
        this.nativeService = nativeService;
        this.app = app;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.keyboard = keyboard;
        this.ionicApp = ionicApp;
        this.httpService = httpService;
        this.backButtonPressed = false;
        var href = location.href;
        console.info("app" + href);
        var array = href.split('?');
        this.flag = array[1];
        if (this.flag != undefined && this.flag != null) {
            var arr2 = [];
            arr2 = this.flag.split("=");
            this.flag1 = arr2[0];
            this.flag2 = arr2[1];
            var arr3 = [];
            arr3 = this.flag2.split("&");
            this.flag2 = arr3[0].split("#/")[0];
        }
        else {
            // this.flag1 = "default";
            // this.flag2 = "default";
        }
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            // this._setupBrowserBackButtonBehavior();//注册返回按键事件
            //this.assertNetwork();//检测网络
            _this.nativeService.log('app.component', 'constructor>this.nativeService.isMobile()>' + _this.nativeService.isMobile());
            if (_this.isWeiXin()) {
                _this.nativeService.log('app.component', "this.isWeiXin()>" + _this.isWeiXin());
                _this.WxLoad();
                _this.storage.get("userinfo").then(function (val) {
                    _this.nativeService.log('app.component', "val.userinform>" + JSON.stringify(val));
                    if (val != "" && val != null && val.userinform && val.userinform.ID != '') {
                        // this.httpService.post("/MobService/AutoWx", {"userid":val.userinform.ID}).map(res => res.json()).subscribe(result => {
                        // });
                        var _parm = { "userid": val.userinform.ID };
                        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
                        parameter.jyh = "2007";
                        parameter.parm = JSON.stringify(_parm);
                        _this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) { });
                        _this.goWhere();
                    }
                    else {
                        _this.AutoWx();
                    }
                });
            }
            else {
                _this.goWhere();
            }
        });
        this.storage.get("startDate").then(function (val) {
            if (val == null || val == undefined || val == '') {
                var newdate = new Date().getTime();
                _this.storage.set("startDate", newdate);
            }
            else {
            }
        });
    }
    // ionViewWillEnter() {
    //   this.app.getRootNav().setRoot('RegisterPage');
    // }
    GBApp.prototype.assertNetwork = function () {
        if (!this.nativeService.isConnecting()) {
            this.toastCtrl.create({
                message: '未检测到网络,请连接网络',
                showCloseButton: true,
                closeButtonText: '确定'
            }).present();
        }
    };
    GBApp.prototype.registerBackButtonAction = function () {
        var _this = this;
        if (!this.nativeService.isAndroid()) {
            return;
        }
        this.platform.registerBackButtonAction(function () {
            if (_this.keyboard.isOpen()) {
                _this.keyboard.close();
                return;
            }
            //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
            // this.ionicApp._toastPortal.getActive() ||this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
            var activePortal = _this.ionicApp._modalPortal.getActive();
            if (activePortal) {
                activePortal.dismiss();
                return;
            }
            var activeVC = _this.nav.getActive();
            var tabs = activeVC.instance.tabs;
            var activeNav = tabs.getSelected();
            return activeNav.canGoBack() ? activeNav.pop() : _this.showExit();
            //this.showExit()
        }, 1);
    };
    //双击退出提示框
    GBApp.prototype.showExit = function () {
        var _this = this;
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            this.backButtonPressed = true;
            this.nativeService.showToast("再按一次退出应用");
            setTimeout(function () {
                _this.backButtonPressed = false;
            }, 2000);
        }
    };
    GBApp.prototype.WxLoad = function () {
        var _this = this;
        var url = location.href.split('#')[0];
        var Info = {
            url: url
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parm.jyh = "1126";
        parm.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (val) {
            var result = JSON.parse(val.result);
            console.info('WxLoad return ');
            if (result.Code == "1") {
                var data = result.Data;
                // alert(data.timestamp)
                _this.storage.set("timestamp", data).then(function (val) {
                });
                wx.config({
                    debug: false,
                    appId: data.appId,
                    timestamp: data.timestamp,
                    nonceStr: data.nonceStr,
                    signature: data.signature,
                    jsApiList: ['chooseImage', 'uploadImage', 'downloadImage', 'previewImage', 'getLocation', 'scanQRCode', 'chooseWXPay', 'onMenuShareAppMessage', 'onMenuShareTimeline', "updateTimelineShareData", "updateAppMessageShareData"]
                });
            }
        });
    };
    /**微信自动登录 */
    GBApp.prototype.AutoWx = function () {
        var _this = this;
        this.nativeService.log("app.component", 'AutoWx');
        var parms = { "data": "", "returnUrl": "" };
        if (this.flag1 != null && this.flag1 != '' && this.flag1 != undefined) {
            //parms = { "data": this.flag1 + "=" + this.flag2 };
            parms.data = this.flag1 + "=" + this.flag2;
        }
        else {
            parms.returnUrl = location.href;
        }
        this.httpService.post("/MobService/AutoWx", parms).map(function (res) { return res.json(); }).subscribe(function (result) {
            //,"returnUrl":"https://www.lguangguang.com/mobtest"
            _this.nativeService.log('app.component', 'autowx return》' + result.Data);
            console.log(JSON.stringify(result));
            if (result.Code == "1") {
                _this.storage.set("codeflag", true);
                //var info = JSON.parse(result.Data);
                _this.storage.set("userinfo", { 'userinform': result.Data });
                _this.goWhere();
            }
            else if (result.Code == "3") {
                _this.storage.set("codeflag", true);
                window.open(result.Data, "_self");
            }
            else if (result.Code == "2") {
                _this.storage.set("userinfo", { 'userinform': result.Data }).then(function (val) {
                    //this.app.getRootNav().setRoot('LoginPage');
                    _this.goWhere();
                });
                // this.storage.set("codeflag", false);
                // var address = [];
                // var userinform = [];
                // this.storage.get("userinfo").then(val => {
                //   if (val != null) {
                //     address = val.address;
                //     userinform = result.Data;
                //   } else {
                //   }
                // })
            }
        });
    };
    /**验证登录信息 */
    GBApp.prototype.ValidateLoad = function (UserID) {
        var _this = this;
        var Info = {
            UserID: UserID
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parm.jyh = "1138";
        parm.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parm).map(function (res) { return res.json(); }).subscribe(function (val) {
            var result = JSON.parse(val.result);
            console.log(result);
            if (result.Code == "1") {
                /**用户正常 */
            }
            else {
                _this.storage.set("userinfo", null);
            }
        });
    };
    //判断是否为微信
    GBApp.prototype.isWeiXin = function () {
        //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
        var ua;
        ua = window.navigator.userAgent.toLowerCase();
        //通过正则表达式匹配ua中是否含有MicroMessenger字符串
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        }
        else {
            return false;
        }
    };
    GBApp.prototype.getlocationWX = function () {
        var that = this;
        wx.ready(function () {
            wx.getLocation({
                type: 'wgs84',
                success: function (res) {
                    var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
                    var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
                    //var speed = res.speed; // 速度，以米/每秒计
                    //var accuracy = res.accuracy; // 位置精度
                    that.Initialization3(latitude, longitude);
                }
            });
        });
    };
    GBApp.prototype.Initialization3 = function (latitude, longitude) {
        var _this = this;
        var userInfo = {
            latitude: latitude,
            longitude: longitude
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_5__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1127";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            console.log(result);
            var address;
            var userinform;
            _this.storage.get("userinfo").then(function (val) {
                if (val != null) {
                    address = val.address;
                    userinform = val.userinform;
                    address = result.Data;
                }
                else {
                    userinform = { "ID": "" };
                    address = result.Data;
                }
                _this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(function (val) {
                });
            });
        });
    };
    GBApp.prototype.goWhere = function () {
        if (Math.random() < 0) {
            return;
        }
        else {
            var arr3 = [];
            this.nativeService.log("app.components", " page  goWhere1  this.flag》" + this.flag);
            var href = location.href;
            var array = href.split('?');
            this.flag = array[1];
            this.nativeService.log("app.components", " page  goWhere2  this.flag》" + this.flag);
            if (this.flag != undefined && this.flag != null) {
                var arr2 = [];
                arr2 = this.flag.split("=");
                this.flag1 = arr2[0];
                this.flag2 = arr2[1];
                this.nativeService.log("appcompontent ", " this.flag1》》》》" + this.flag1);
                this.nativeService.log("appcompontent ", 'flag2' + this.flag2);
                if (this.flag1 == "resigiter") {
                    this.nativeService.log('app.component', 'gowhere into>resigiter>' + this.flag2);
                    arr3 = [];
                    arr3 = this.flag2.split("&");
                    this.flag2 = arr3[0].split("#")[0].trim();
                    //  this.flag2 = arr3[0].replace("#/", '').trim();
                    this.app.getRootNav().setRoot('ResigiterPage', {
                        tabId: this.flag2
                    });
                }
                else if (this.flag1 == "login") {
                    // this.showflag = true;
                    arr3 = [];
                    //console.info("tab>>>首页")
                    arr3 = this.flag2.split("&");
                    this.flag2 = arr3[0].split("#")[0].trim();
                    this.storage.set("UID", this.flag2);
                    this.app.getRootNav().setRoot('TabsPage', {
                        tabId: 0
                    });
                }
                else if (this.flag1 == "goodsDetail") {
                    arr3 = [];
                    arr3 = this.flag2.split("&");
                    var flag2 = arr3[0].split("#")[0].trim();
                    this.flag2 = flag2.split("UID:")[0];
                    var UID = flag2.split("UID:")[1];
                    //console.info("uid>>>>>>>>>>>>>>>>>>>>" + UID)
                    this.storage.set("UID", UID);
                    this.app.getRootNav().setRoot('GoodDetailPage', {
                        goodsid: this.flag2,
                    });
                }
                else if (this.flag1 == "shopIndex") {
                    arr3 = [];
                    arr3 = this.flag2.split("&");
                    this.flag2 = arr3[0].split("#")[0].trim();
                    //console.info("shopID>>>>>" + this.flag2)
                    this.app.getRootNav().setRoot('ShopIndexPage', {
                        ShopID: this.flag2,
                    });
                }
                else if (this.flag1 == "orderlist") {
                    arr3 = [];
                    arr3 = this.flag2.split("&");
                    this.flag2 = arr3[0].split("#")[0].trim();
                    this.app.getRootNav().setRoot('TabsPage', {
                        tabId: 3,
                    });
                }
                else {
                    // this.app.getRootNav().setRoot('TabsPage');
                }
            }
            else {
                this.nativeService.log("app.components", " page goWhere3  this.flag == undefined" + this.flag);
                //this.app.getRootNav().setRoot('TabsPage');
                if (location.href.indexOf('#') <= 0) {
                    this.app.getRootNav().setRoot('TabsPage');
                }
            }
        }
    };
    //------------------
    GBApp.prototype._setupBrowserBackButtonBehavior = function () {
        var _this = this;
        // Register browser back button action(s)
        window.onpopstate = function (evt) {
            // Close menu if open
            if (_this._menu.isOpen()) {
                _this._menu.close();
                return;
            }
            // Close any active modals or overlays
            var activePortal = _this.ionicApp._loadingPortal.getActive() ||
                _this.ionicApp._modalPortal.getActive() ||
                _this.ionicApp._toastPortal.getActive() ||
                _this.ionicApp._overlayPortal.getActive();
            // alert('activePortal'+activePortal);
            if (activePortal) {
                activePortal.dismiss();
                return;
            }
            //console.info("返回》》》》" + activePortal);
            //alert(this.nav.canGoBack())
            var activeVC = _this.nav.getActive();
            var tabs = activeVC.instance.tabs;
            var activeNav = tabs.getSelected();
            //alert('root>>activeNav.canGoBack()>'+activeNav.canGoBack());
            //console.info("返回22》》》》" + activeNav.canGoBack());
            if (activeNav.canGoBack()) {
                activeNav.pop();
                return;
            }
        };
        // Fake browser history on each view enter
    };
    return GBApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('Nav'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
], GBApp.prototype, "nav", void 0);
GBApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\app\app.html"*/'<ion-nav #Nav  [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_6__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Keyboard"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"], __WEBPACK_IMPORTED_MODULE_7__providers_HttpService__["a" /* HttpService */]])
], GBApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButtonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackButtonService = (function () {
    //构造函数 依赖注入
    function BackButtonService(platform, appCtrl, toastCtrl) {
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        //控制硬件返回按钮是否触发，默认false
        this.backButtonPressed = false;
    }
    //注册方法
    BackButtonService.prototype.registerBackButtonAction = function (tabRef) {
        var _this = this;
        //registerBackButtonAction是系统自带的方法
        this.platform.registerBackButtonAction(function () {
            //获取NavController
            var activeNav = _this.appCtrl.getActiveNavs()[0];
            //如果可以返回上一页，则执行pop
            if (activeNav.canGoBack()) {
                activeNav.pop();
            }
            else {
                if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
                    //执行退出
                    _this.showExit();
                }
                else {
                    //选择首页第一个的标签
                    tabRef.select(0);
                }
            }
        });
    };
    //退出应用方法
    BackButtonService.prototype.showExit = function () {
        var _this = this;
        //如果为true，退出
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            //第一次按，弹出Toast
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'top'
            }).present();
            //标记为true
            this.backButtonPressed = true;
            //两秒后标记为false，如果退出的话，就不会执行了
            setTimeout(function () { return _this.backButtonPressed = false; }, 2000);
        }
    };
    return BackButtonService;
}());
BackButtonService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
], BackButtonService);

//# sourceMappingURL=backButton.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NativeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_transfer__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_image_picker__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Constants__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Utils__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { InAppBrowser } from '@ionic-native/in-app-browser';




// import { AppMinimize } from "@ionic-native/app-minimize";





var NativeService = NativeService_1 = (function () {
    function NativeService(platform, toastCtrl, alertCtrl, statusBar, splashScreen, appVersion, camera, toast, transfer, file, 
        // private inAppBrowser: InAppBrowser,
        imagePicker, network, 
        // private appMinimize: AppMinimize,
        loadingCtrl, filetransfer, http, sanitizer) {
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.appVersion = appVersion;
        this.camera = camera;
        this.toast = toast;
        this.transfer = transfer;
        this.file = file;
        this.imagePicker = imagePicker;
        this.network = network;
        this.loadingCtrl = loadingCtrl;
        this.filetransfer = filetransfer;
        this.http = http;
        this.sanitizer = sanitizer;
        this.loadingIsOpen = false;
    }
    NativeService.prototype.warn = function (info) {
        console.log('%cNativeService/' + info, 'color:#e8c406');
    };
    /**
     * 通过浏览器打开url
     */
    NativeService.prototype.openUrlByBrowser = function (url) {
        // this.inAppBrowser.create(url, '_system');
    };
    /**
   * 检查app是否需要升级
   */
    NativeService.prototype.detectionUpgrade = function (manual) {
        var _this = this;
        if (manual === void 0) { manual = false; }
        if (this.isAndroid()) {
            //获得app包名
            this.getPackageName().subscribe(function (packageName) {
                // let appName = packageName.substring(packageName.lastIndexOf('.') + 1);
                // let appType = this.isAndroid() ? 'android' : 'ios';
                //从后台查询app最新版本信息
                var url = __WEBPACK_IMPORTED_MODULE_15__Constants__["c" /* APP_VERSION_SERVE_URL */];
                _this.http.get(url).map(function (res) { return res.json(); }).subscribe(function (res) {
                    if (!res) {
                        _this.showToast("从app升级获取版本信息失败");
                        // this.logger.log('', '从app升级获取版本信息失败', { url: url });
                        return;
                    }
                    //获得当前app版本
                    _this.getVersionNumber().subscribe(function (currentNo) {
                        if (currentNo == res.version) {
                            //比较版本号
                            // manual && this.alert('已经是最新版本');
                        }
                        else {
                            if (res.isForcedUpdate == 1) {
                                _this.alertCtrl.create({
                                    title: '重要升级',
                                    subTitle: '您必须升级后才能使用！',
                                    buttons: [{
                                            text: '确定',
                                            handler: function () {
                                                _this.downloadApp();
                                            }
                                        }
                                    ]
                                }).present();
                            }
                            else {
                                _this.alertCtrl.create({
                                    title: '升级',
                                    subTitle: '发现新版本,是否立即升级？',
                                    buttons: [{ text: '取消' },
                                        {
                                            text: '确定',
                                            handler: function () {
                                                _this.downloadApp();
                                            }
                                        }
                                    ]
                                }).present();
                            }
                        }
                    });
                });
            });
        }
    };
    /**
     * 下载安装app
     */
    NativeService.prototype.downloadApp = function () {
        if (this.isIos()) {
            this.showToast("新版本已经发布，请前往App Store更新");
            // this.openUrlByBrowser(APP_DOWNLOAD);
        }
        if (this.isAndroid()) {
            //显示下载进度
            var alert_1 = this.alertCtrl.create({
                title: '下载进度：0%',
                enableBackdropDismiss: false,
                buttons: ['后台下载']
            });
            alert_1.present();
            var fileTransfer = this.transfer.create();
            var apk_1 = this.file.externalRootDirectory + 'sji.apk'; //apk保存的目录
            //下载并安装apk
            fileTransfer.download(__WEBPACK_IMPORTED_MODULE_15__Constants__["a" /* APK_DOWNLOAD */], apk_1).then(function () {
                window['install'].install(apk_1.replace('file://', ''));
            }, function (err) {
                alert_1.dismiss();
                // this.logger.log(err, 'android app 本地升级失败');
                // this.toastService.ShowToastText("android 本地升级失败");
                // this.alertCtrl.create({
                //   title: '前往网页下载',
                //   subTitle: '本地升级失败',
                //   buttons: [
                //     {
                //       text: '确定',
                //       handler: () => {
                //         this.openUrlByBrowser(APP_DOWNLOAD);//打开网页下载
                //       }
                //     }
                //   ]
                // }).present();
            });
            //更新下载进度
            fileTransfer.onProgress(function (event) {
                var num = Math.floor(event.loaded / event.total * 100);
                if (num === 100) {
                    alert_1.dismiss();
                }
                else {
                    var title = document.getElementsByClassName('alert-title')[0];
                    title && (title.innerHTML = '下载进度：' + num + '%');
                }
            });
        }
    };
    /**
     * 是否真机环境
     * @return {boolean}
     */
    NativeService.prototype.isMobile = function () {
        return this.platform.is('mobile') && !this.platform.is('mobileweb');
    };
    /**
     * 是否android真机环境
     * @return {boolean}
     */
    NativeService.prototype.isAndroid = function () {
        return this.isMobile() && this.platform.is('android');
    };
    /**
     * 是否ios真机环境
     * @return {boolean}
     */
    NativeService.prototype.isIos = function () {
        return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
    };
    NativeService.prototype.alert = function (title, subTitle) {
        if (subTitle === void 0) { subTitle = ""; }
        this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [{ text: '确定' }]
        }).present();
    };
    /**
     * 统一调用此方法显示提示信息
     * @param message 信息内容
     * @param duration 显示时长
     */
    NativeService.prototype.showToast = function (message, duration) {
        if (message === void 0) { message = '操作完成'; }
        if (duration === void 0) { duration = 2000; }
        if (this.isMobile()) {
            this.toast.show(message, String(duration), 'center').subscribe();
        }
        else {
            this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'middle',
                showCloseButton: false
            }).present();
        }
    };
    ;
    /**
     * 统一调用此方法显示loading
     * @param content 显示的内容
     */
    NativeService.prototype.showLoading = function (content) {
        var _this = this;
        if (content === void 0) { content = ''; }
        if (!this.loadingIsOpen) {
            this.loadingIsOpen = true;
            this.loading = this.loadingCtrl.create({
                content: content
            });
            this.loading.present();
            setTimeout(function () {
                _this.loadingIsOpen && _this.loading.dismiss();
                _this.loadingIsOpen = false;
            }, 10000);
        }
    };
    ;
    /**
     * 关闭loading
     */
    NativeService.prototype.hideLoading = function () {
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
    };
    ;
    /**
     * 使用cordova-plugin-camera获取照片
     * @param options
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            quality: __WEBPACK_IMPORTED_MODULE_15__Constants__["e" /* QUALITY_SIZE */],
            allowEdit: false,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: __WEBPACK_IMPORTED_MODULE_15__Constants__["d" /* IMAGE_SIZE */],
            targetHeight: __WEBPACK_IMPORTED_MODULE_15__Constants__["d" /* IMAGE_SIZE */],
            saveToPhotoAlbum: false,
            correctOrientation: true //设置摄像机拍摄的图像是否为正确的方向
        }, options);
        return __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            _this.camera.getPicture(ops).then(function (imgData) {
                if (ops.destinationType === _this.camera.DestinationType.DATA_URL) {
                    observer.next('data:image/jpg;base64,' + imgData);
                }
                else {
                    observer.next(imgData);
                }
            }).catch(function (err) {
                if (err == 20) {
                    _this.alert('没有权限,请在设置中开启权限');
                    return;
                }
                if (String(err).indexOf('cancel') != -1) {
                    return;
                }
                // this.logger.log(err, '使用cordova-plugin-camera获取照片失败');
                _this.alert('获取照片失败');
            });
        });
    };
    ;
    /**
     * 通过拍照获取照片
     * @param options
     */
    NativeService.prototype.getPictureByCamera = function (options) {
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL //DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        return this.getPicture(ops);
    };
    ;
    /**
     * 通过图库获取照片
     * @param options
     */
    NativeService.prototype.getPictureByPhotoLibrary = function (options) {
        if (options === void 0) { options = {}; }
        var ops = Object.assign({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL //DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        return this.getPicture(ops);
    };
    ;
    /**
     * 通过图库选择多图
     * @param options
     */
    NativeService.prototype.getMultiplePicture = function (options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        var that = this;
        var ops = Object.assign({
            maximumImagesCount: 6,
            width: __WEBPACK_IMPORTED_MODULE_15__Constants__["d" /* IMAGE_SIZE */],
            height: __WEBPACK_IMPORTED_MODULE_15__Constants__["d" /* IMAGE_SIZE */],
            quality: __WEBPACK_IMPORTED_MODULE_15__Constants__["e" /* QUALITY_SIZE */] //图像质量，范围为0 - 100
        }, options);
        return __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            _this.imagePicker.getPictures(ops).then(function (files) {
                var destinationType = options['destinationType'] || 0; //0:base64字符串,1:图片url
                if (destinationType === 1) {
                    observer.next(files);
                }
                else {
                    var imgBase64s_1 = []; //base64字符串数组
                    for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                        var fileUrl = files_1[_i];
                        that.convertImgToBase64(fileUrl).subscribe(function (base64) {
                            imgBase64s_1.push(base64);
                            if (imgBase64s_1.length === files.length) {
                                observer.next(imgBase64s_1);
                            }
                        });
                    }
                }
            }).catch(function (err) {
                // this.logger.log(err, '通过图库选择多图失败');
            });
        });
    };
    ;
    NativeService.prototype.convertImgToBase64 = function (path) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            _this.file.resolveLocalFilesystemUrl(path).then(function (fileEnter) {
                fileEnter.file(function (file) {
                    var reader = new FileReader();
                    reader.onloadend = function (e) {
                        observer.next(this.result);
                    };
                    reader.readAsDataURL(file);
                });
            }).catch(function (err) {
                _this.showToast("转化失败");
                // this.logger.log(err, '根据图片绝对路径转化为base64字符串失败');
            });
        });
    };
    NativeService.prototype.getFileContentAsBase64 = function (path, callback) {
        function fail(err) {
            console.log('Cannot found requested file' + err);
        }
        function gotFile(fileEntry) {
            fileEntry.file(function (file) {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    var content = this.result;
                    callback(content);
                };
                reader.readAsDataURL(file);
            });
        }
        this.file.resolveLocalFilesystemUrl(path).then(function (fileEnter) { return gotFile(fileEnter); }).catch(function (err) { return fail(err); });
        // window['resolveLocalFileSystemURL'](path, gotFile, fail);
    };
    /**
     * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
     */
    NativeService.prototype.getNetworkType = function () {
        if (!this.isMobile()) {
            return 'wifi';
        }
        return this.network.type;
    };
    /**
     * 判断是否有网络
     * @returns {boolean}
     */
    NativeService.prototype.isConnecting = function () {
        return this.getNetworkType() != 'none';
    };
    /**
     * 获得app版本号,如0.01
     * @description  对应/config.xml中version的值
     */
    NativeService.prototype.getVersionNumber = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            _this.appVersion.getVersionNumber().then(function (value) {
                observer.next(value);
            }).catch(function (err) {
                _this.showToast("获取app版本号失败");
            });
        });
    };
    /**
     * 获得app name,如ionic2_tabs
     * @description  对应/config.xml中name的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getAppName = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.appVersion.getAppName().then(function (value) {
                resolve(value);
            }).catch(function (err) {
                _this.warn('getAppName:' + err);
            });
        });
    };
    /**
     * 获得app包名/id,如com.kit.ionic2tabs
     * @description  对应/config.xml中id的值
     * @returns {Promise<string>}
     */
    NativeService.prototype.getPackageName = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            _this.appVersion.getPackageName().then(function (value) {
                observer.next(value);
            }).catch(function (err) {
                _this.showToast("获取app包名失败");
            });
        });
    };
    /**
     * 使用默认状态栏
     */
    NativeService.prototype.statusBarStyleDefault = function () {
        this.statusBar.styleDefault();
    };
    /**
     * 隐藏启动页面
     */
    NativeService.prototype.splashScreenHide = function () {
        this.splashScreen.hide();
    };
    /**
     * 调用最小化app插件
     */
    NativeService.prototype.minimize = function () {
        // this.appMinimize.minimize()
    };
    /**
     * 获得用户当前坐标
     * @return {Promise<Position>}
     */
    NativeService.prototype.getUserLocation = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_11_rxjs__["Observable"].create(function (observer) {
            if (_this.isMobile()) {
                LocationPlugin.getLocation(function (data) {
                    observer.next({ 'lng': data.longitude, 'lat': data.latitude });
                }, function (msg) {
                    observer.error('获取位置失败');
                    if (msg.indexOf('缺少定位权限') == 0) {
                        _this.alert('缺少定位权限，请在手机设置中开启');
                        return;
                    }
                    _this.alert('错误消息：' + msg);
                    // this.logger.log(msg, '获取位置失败');
                });
            }
            else {
                console.log('非手机环境,即测试环境返回固定坐标');
                observer.next({ 'lng': 118.55, 'lat': 36.28 });
            }
        });
    };
    /**上传文件 */
    NativeService.prototype.uploadByTransfer = function (fileUrl, url, options) {
        var url = __WEBPACK_IMPORTED_MODULE_15__Constants__["b" /* APP_SERVE_URL */] + "/MobService/UploadFile";
        if (!options) {
            options = {
                fileKey: 'file',
                fileName: fileUrl.substr(fileUrl.lastIndexOf('/') + 1)
            };
        }
        var transfer = this.filetransfer.create();
        return transfer.upload(fileUrl, url, options);
    };
    /**多文件上传 */
    NativeService.prototype.uploadFileByMutiTranser = function (filePaths) {
        var _this = this;
        var observabels = [];
        filePaths.forEach(function (value, i, array) {
            if (!value.startsWith('file://')) {
                value = 'file://' + value;
            }
            var observabel = _this.uploadByTransfer(value);
            observabels.push(observabel);
        });
        return Promise.all(observabels).then(function (res) {
            var result = [];
            res.forEach(function (value) {
                var msg = JSON.parse(value.response);
                if (msg.Code == "1") {
                    result.push(msg.Msg);
                }
            });
            return result;
        });
    };
    NativeService.prototype.assembleHTML = function (strHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(strHTML);
    };
    /**微信端上传图片 */
    NativeService.prototype.uploadWxFile = function (serverId) {
        var Info = {
            media_id: serverId
        };
        var parm = new __WEBPACK_IMPORTED_MODULE_16__model_Model__["f" /* Parameter */]();
        parm.jyh = "1131";
        parm.parm = JSON.stringify(Info);
        var headers = new __WEBPACK_IMPORTED_MODULE_12__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'application/json;charset=utf-8'
        });
        var url = "";
        url = NativeService_1.replaceUrl("/MobService/Index");
        var options = new __WEBPACK_IMPORTED_MODULE_12__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(url, NativeService_1.buildURLSearchParams(parm).toString(), options).map(function (res) { return res.json(); });
    };
    /**微信端批量上传图片 */
    NativeService.prototype.uploadWxMoreFile = function (serverIds) {
        var _this = this;
        var observabels = [];
        observabels.forEach(function (value, i, array) {
            var observabel = _this.uploadWxFile(value);
            observabels.push(observabel);
        });
        return Promise.all(observabels).then(function (res) {
            var result = [];
            result.forEach(function (value) {
                var msg = JSON.parse(value.response);
                if (msg.Code == "1") {
                    result.push(msg.Msg);
                }
            });
        });
    };
    NativeService.buildURLSearchParams = function (paramMap) {
        var params = new URLSearchParams();
        if (!paramMap) {
            return params;
        }
        for (var key in paramMap) {
            var val = paramMap[key];
            if (val instanceof Date) {
                val = __WEBPACK_IMPORTED_MODULE_17__Utils__["a" /* Utils */].dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
            }
            params.set(key, val);
        }
        return params;
    };
    NativeService.replaceUrl = function (url) {
        if (url.indexOf('http://') == -1) {
            url = __WEBPACK_IMPORTED_MODULE_15__Constants__["b" /* APP_SERVE_URL */] + url;
        }
        return 'http://' + url.substring(7).replace(/\/\//g, '/');
    };
    NativeService.prototype.log = function (page, msg) {
        console.log(__WEBPACK_IMPORTED_MODULE_17__Utils__["a" /* Utils */].dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss fff') + ">" + page + ">" + msg);
    };
    NativeService.prototype.isWeiXinPub = function () {
        //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
        var ua;
        ua = window.navigator.userAgent.toLowerCase();
        //通过正则表达式匹配ua中是否含有MicroMessenger字符串
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        }
        else {
            return false;
        }
    };
    return NativeService;
}());
NativeService = NativeService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_app_version__["a" /* AppVersion */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_toast__["a" /* Toast */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_network__["a" /* Network */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"],
        __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
        __WEBPACK_IMPORTED_MODULE_12__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser__["c" /* DomSanitizer */]])
], NativeService);

var NativeService_1;
//# sourceMappingURL=NativeService.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Constants__ = __webpack_require__(145);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HttpService = HttpService_1 = (function () {
    function HttpService(http, nativeService, alertCtrl) {
        this.http = http;
        this.nativeService = nativeService;
        this.alertCtrl = alertCtrl;
    }
    HttpService.prototype.request = function (url, options) {
        var _this = this;
        url = HttpService_1.replaceUrl(url);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.nativeService.showLoading("数据处理中,请稍后");
            console.log('%c 请求前 %c', 'color:blue', '', 'url', url, 'options', options);
            _this.http.post(url, options).subscribe(function (res) {
                _this.nativeService.hideLoading();
                console.log('%c 请求成功 %c', 'color:green', '', 'url', url, 'options', options, 'res', res);
                observer.next(res);
            }, function (err) {
                _this.requestFailed(url, options, err); //处理请求失败
                observer.error(err);
            });
        });
    };
    HttpService.prototype.get = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Get,
            search: HttpService_1.buildURLSearchParams(paramMap)
        }));
    };
    HttpService.prototype.post = function (url, data) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'application/json;charset=utf-8'
        });
        if (url == "") {
            url = "/MobService/Index";
        }
        else {
        }
        // url = "/MobService/Index";
        // url = "/Accept/Index";
        url = HttpService_1.replaceUrl(url);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return __WEBPACK_IMPORTED_MODULE_3_rxjs__["Observable"].create(function (observer) {
            _this.http.post(url, HttpService_1.buildURLSearchParams(data).toString(), options).subscribe(function (res) {
                observer.next(res);
            }, function (err) {
                _this.requestFailed(url, options, err); //处理请求失败
                observer.error(err);
            });
        });
        // return this.http.post(url, HttpService.buildURLSearchParams(data).toString(), new RequestOptions({ headers: headers }));
    };
    HttpService.prototype.post2 = function (url, body) {
        if (body === void 0) { body = null; }
        console.log(body);
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            body: body,
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json; charset=UTF-8'
            })
        }));
    };
    HttpService.prototype.postFormData = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Post,
            search: HttpService_1.buildURLSearchParams(paramMap).toString(),
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            })
        }));
    };
    HttpService.prototype.put = function (url, body) {
        if (body === void 0) { body = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Put,
            body: body
        }));
    };
    HttpService.prototype.delete = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Delete,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    HttpService.prototype.patch = function (url, body) {
        if (body === void 0) { body = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Patch,
            body: body
        }));
    };
    HttpService.prototype.head = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Head,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    HttpService.prototype.options = function (url, paramMap) {
        if (paramMap === void 0) { paramMap = null; }
        return this.request(url, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestMethod */].Options,
            search: HttpService_1.buildURLSearchParams(paramMap).toString()
        }));
    };
    /**
     * 将对象转为查询参数
     * @param paramMap
     * @returns {URLSearchParams}
     */
    HttpService.buildURLSearchParams = function (paramMap) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        if (!paramMap) {
            return params;
        }
        for (var key in paramMap) {
            var val = paramMap[key];
            if (val instanceof Date) {
                val = __WEBPACK_IMPORTED_MODULE_4__Utils__["a" /* Utils */].dateFormat(val, 'yyyy-MM-dd hh:mm:ss');
            }
            params.set(key, val);
        }
        return params;
    };
    /**
     * 处理请求失败事件
     * @param url
     * @param options
     * @param err
     */
    HttpService.prototype.requestFailed = function (url, options, err) {
        this.nativeService.hideLoading();
        console.log('%c 请求失败 %c', 'color:red', '', 'url', url, 'options', options, 'err', err);
        var msg = '请求发生异常', status = err.status;
        if (!this.nativeService.isConnecting()) {
            msg = '请求失败，请连接网络';
        }
        else {
            if (status === 0) {
                msg = '请求失败，请求响应出错';
            }
            else if (status === 404) {
                msg = '请求失败，未找到请求地址';
            }
            else if (status === 500) {
                msg = '请求失败，服务器出错，请稍后再试';
            }
        }
        this.alertCtrl.create({
            title: msg,
            subTitle: status,
            buttons: [{ text: '确定' }]
        }).present();
    };
    /**
     * url中如果有双斜杠替换为单斜杠
     * 如:http://88.128.18.144:8080//api//demo.替换后http://88.128.18.144:8080/api/demo
     * @param url
     * @returns {string}
     */
    HttpService.replaceUrl = function (url) {
        if (url.indexOf('//') == -1) {
            url = __WEBPACK_IMPORTED_MODULE_7__Constants__["b" /* APP_SERVE_URL */] + url;
        }
        // //console.info("url>>>>>>>"+url)
        return url;
        //return 'http://' + url.substring(7).replace(/\/\//g, '/');
    };
    return HttpService;
}());
HttpService = HttpService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_5__NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["AlertController"]])
], HttpService);

var HttpService_1;
//# sourceMappingURL=HttpService.js.map

/***/ })

},[300]);
//# sourceMappingURL=main.js.map?v=107