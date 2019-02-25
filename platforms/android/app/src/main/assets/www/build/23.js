webpackJsonp([23],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopgoodscarPageModule", function() { return ShopgoodscarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopgoodscar__ = __webpack_require__(832);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShopgoodscarPageModule = (function () {
    function ShopgoodscarPageModule() {
    }
    return ShopgoodscarPageModule;
}());
ShopgoodscarPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shopgoodscar__["a" /* ShopgoodscarPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__shopgoodscar__["a" /* ShopgoodscarPage */]),
        ],
    })
], ShopgoodscarPageModule);

//# sourceMappingURL=shopgoodscar.module.js.map

/***/ }),

/***/ 832:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopgoodscarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_SocketService__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_Model__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShopgoodscarPage = (function () {
    function ShopgoodscarPage(navCtrl, navParams, httpService, nativeService, storage, barcodeScanner, socketService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.httpService = httpService;
        this.nativeService = nativeService;
        this.storage = storage;
        this.barcodeScanner = barcodeScanner;
        this.socketService = socketService;
        this.img = "assets/imgs/chone.png";
        this.img2 = "assets/imgs/unchone.png";
        this.img3 = "assets/imgs/saoma.png";
        this.goodslist = [];
        this.orderList = [];
        this.getType = 0;
        this.BhList = ['20180226111', '01010110_09', '01010110_09', '01010110_07', '01010110_03',];
        this.addnum = 0;
        this.coverflag = false;
        this.slideflag = false;
        this.goodsmsg = [];
        this.imgUrl = [];
        this.AttrList = [];
        this.btnflag = false;
        this.addListFlag = false;
        this.ShopID = "";
        this.Order = new __WEBPACK_IMPORTED_MODULE_6__model_Model__["d" /* Order */]();
        this.Msg = new __WEBPACK_IMPORTED_MODULE_6__model_Model__["b" /* GoodsMessage */]();
    }
    ShopgoodscarPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //console.info("购物车")
        this.storage.get("userinfo").then(function (val) {
            if (val != null && val != "") {
                _this.persioninfo = val.userinform;
                _this.Msg.UserID = _this.persioninfo.ID;
                _this.additem();
            }
            else {
                _this.navCtrl.push('LoginPage');
            }
        });
        /* for (var a = 0; a < this.BhList.length; a++) {
          this.Load(this.BhList[a])
        } */
    };
    ShopgoodscarPage.prototype.ionViewWillEnter = function () {
        this.socketIoLoad();
    };
    ShopgoodscarPage.prototype.additem = function () {
        // this.Load(this.BhList[this.addnum], "0101");
        // this.addnum++;
        // if (this.Order != null && this.Order.ID != null) {
        //   this.Load(this.BhList[this.addnum], "0101");
        // } else {
        //   this.CreateOrder("");
        // }
        var _this = this;
        var that = this;
        if (this.nativeService.isMobile()) {
            this.barcodeScanner.scan().then(function (data) {
                if (data.cancelled) {
                    if (_this.goodslist.length <= 0) {
                        _this.navCtrl.pop();
                    }
                    else { }
                    return false;
                }
                else { }
                //var text = data.text;
                var arr = data.text.split("|");
                if (_this.Order != null && _this.Order.ID != null) {
                    _this.Load(arr[1], arr[0]);
                }
                else {
                    _this.CreateOrder(arr);
                }
            }, function (err) {
                _this.nativeService.showToast(err);
            });
        }
        else {
            wx.scanQRCode({
                desc: 'scanQRCode desc',
                needResult: 1,
                scanType: ["qrCode", "barCode"],
                success: function (res) {
                    // 回调
                    var arr = res.resultStr.split("|");
                    if (that.Order != null && that.Order.ID != null) {
                        that.Load(arr[1], arr[0]);
                    }
                    else {
                        that.CreateOrder(arr);
                    }
                },
                error: function (res) {
                    if (res.errMsg.indexOf('function_not_exist') > 0) {
                        alert('版本过低请升级');
                    }
                }
            });
        }
    };
    ShopgoodscarPage.prototype.gotoSettlement = function () {
        if (this.goodslist.length == 0) {
            this.nativeService.showToast("请先添加商品再结算");
        }
        else {
            this.socketService.socket.disconnect();
            this.navCtrl.push("ShopGoodsListPage", {
                listmsg: this.goodslist,
                type: this.getType,
                Order: this.Order
            });
        }
        // this.navCtrl.push("ShopGoodsListPage", {
        //   listmsg: this.goodslist,
        //   type: this.getType,
        //   Order: this.Order
        // })
        ////console.info(this.goodslist);
    };
    ShopgoodscarPage.prototype.Load = function (bh, shop) {
        var _this = this;
        //var that = this;
        var userInfo = {
            ProBH: bh,
            ShopBH: shop,
        };
        ////console.info(userInfo);
        var parameter = new __WEBPACK_IMPORTED_MODULE_6__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1035";
        parameter.parm = JSON.stringify(userInfo);
        this.nativeService.showLoading("获取中");
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.nativeService.hideLoading();
            var result = JSON.parse(res.result);
            var list;
            // //console.info(result);
            if (result.Code == 1) {
                // if (result.Data.IsHaveSx == 1) {
                //   list = result.Data;
                //   list.num = 1;
                //   list.type = 0;
                //   list.AttributeDescription = "";
                //   this.item = list;
                //   this.goodsdetail(result.Data.FranchiseeID, result.Data.ProductID);
                // } else {
                if (result.Data != null) {
                    list = result.Data;
                    list.num = 1;
                    list.type = 0;
                    if (_this.ShopID == "") {
                        //console.log("是否进入");
                        _this.ShopID = list.shopid;
                        _this.Msg.GroupID = _this.ShopID;
                        _this.socketIoLoad();
                    }
                    //list.push({"num":1})
                    ////console.info(list)
                    if (_this.goodslist.length != 0) {
                        _this.compare(list);
                    }
                    ;
                    if (_this.addListFlag == false) {
                        _this.goodslist.push(list);
                    }
                    else {
                    }
                    ;
                    _this.HandOrder();
                }
                // }
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    //对比是否添加
    ShopgoodscarPage.prototype.compare = function (list) {
        this.addListFlag = false;
        for (var n = 0; n < this.goodslist.length; n++) {
            if (this.goodslist[n].ProductBH == list.ProductBH) {
                this.goodslist[n].num++;
                this.addListFlag = true;
            }
            else {
                //this.addListFlag=false;
            }
        }
    };
    ShopgoodscarPage.prototype.slice = function (string) {
        if (string != "" && string != null) {
            return string.slice(0, 12) + "...";
        }
    };
    ShopgoodscarPage.prototype.jian = function (i) {
        if (this.goodslist[i].num > 1) {
            this.goodslist[i].num--;
        }
        else {
        }
        this.HandOrder();
    };
    ShopgoodscarPage.prototype.add = function (i) {
        this.goodslist[i].num++;
        this.HandOrder();
    };
    ShopgoodscarPage.prototype.select = function (num) {
        if (this.getType == 1) {
            this.getType = 0;
        }
        else {
            this.getType = 1;
        }
        /* this.getType = num; */
        for (var a = 0; a < this.goodslist.length; a++) {
            this.goodslist[a].type = this.getType;
        }
        this.HandOrder();
    };
    ShopgoodscarPage.prototype.selectonme = function (index, num) {
        if (this.goodslist[index].type == 1) {
            this.goodslist[index].type = 0;
        }
        else {
            this.goodslist[index].type = 1;
        }
        /* this.goodslist[index].type = num; */
        var num1 = 0;
        var num2 = 0;
        for (var d = 0; d < this.goodslist.length; d++) {
            if (this.goodslist[d].type == 0) {
                num1++;
            }
            else if (this.goodslist[d].type == 1) {
                num2++;
            }
        }
        ////console.info("1数" + num1 + ",2数" + num2);
        ////console.info(this.goodslist);
        if (num1 != 0 && num2 != 0) {
            this.getType = 2;
        }
        else if (num1 == 0 && num2 != 0) {
            this.getType = 1;
        }
        else if (num1 != 0 && num2 == 0) {
            this.getType = 0;
        }
        this.HandOrder();
    };
    ShopgoodscarPage.prototype.delete = function (i) {
        this.goodslist.splice(i, 1);
    };
    //加载商品详情
    ShopgoodscarPage.prototype.goodsdetail = function (fh, id) {
        var _this = this;
        var userInfo = {
            FranchiseeID: fh,
            ID: id,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_6__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1018";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            ////console.info(result)
            if (result.Code == 1) {
                var slide = JSON.parse(result.Data.PicList);
                _this.goodsmsg = result.Data;
                _this.coverflag = true;
                _this.slideflag = true;
                _this.ProductID = id;
                _this.fh = fh;
                _this.ProductPrice = result.Data.ActivityPrice;
                _this.AttrList = JSON.parse(result.Data.AttList);
                ////console.info(this.AttrList)
                _this.imgUrl = slide.length > 0 ? slide[0].Url : "";
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    //选择商品属性
    ShopgoodscarPage.prototype.ChoiceAttr = function (item, item2) {
        for (var i = 0; i < item.length; i++) {
            item[i].Check = 0;
        }
        item2.Check = 1;
        this.ChangPrice();
    };
    ShopgoodscarPage.prototype.ChangPrice = function () {
        var _this = this;
        //console.log("是否进入");
        var array = [];
        for (var i = 0; i < this.AttrList.length; i++) {
            for (var j = 0; j < this.AttrList[i].AttValueList.length; j++) {
                if (this.AttrList[i].AttValueList[j].Check == 1) {
                    var obj = new __WEBPACK_IMPORTED_MODULE_6__model_Model__["a" /* AttrValue */]();
                    obj.title = this.AttrList[i].TextPrompt;
                    obj.RelName = this.AttrList[i].AttValueList[j].Value;
                    obj.Name = this.AttrList[i].AttValueList[j].Name;
                    obj.Value = this.AttrList[i].AttValueList[j].ID;
                    array.push(obj);
                }
            }
        }
        for (var b = 0; b < this.AttrList.length; b++) {
            if (array[b] != undefined) {
                if (array[b].Name != undefined) {
                    this.btnflag = true;
                    // //console.info("执行一");
                }
                else {
                    // //console.info("执行二");
                    this.btnflag = false;
                }
            }
            else {
                // //console.info("执行二");
                this.btnflag = false;
            }
        }
        this.list = array;
        //console.log(array);
        var userInfo = {
            ProductID: this.ProductID,
            lstAttrValue: JSON.stringify(array),
            FranceID: this.fh,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_6__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1025";
        parameter.parm = JSON.stringify(userInfo);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (res) {
            var result = JSON.parse(res.result);
            // //console.info(result)
            if (result.Code == 1) {
                _this.xml = result.Msg;
                _this.ProductPrice = result.Data;
            }
            else {
                _this.nativeService.showToast(result.Msg);
            }
        });
    };
    //确定添加商品
    ShopgoodscarPage.prototype.confirme = function () {
        var _this = this;
        ////console.info(this.list);
        var type = "";
        if (this.list != '') {
            for (var a = 0; a < this.list.length; a++) {
                type = type + (this.list[a].title + ":" + this.list[a].RelName + ";");
            }
        }
        else {
            type = "";
        }
        this.item.AttributeDescription = type;
        this.item.xml = this.xml;
        this.item.Price = this.ProductPrice;
        // //console.info(this.item);
        this.goodslist.push(this.item);
        this.slideflag = false;
        setTimeout(function () {
            _this.coverflag = false;
        }, 150);
        this.list = "";
        this.btnflag = false;
    };
    ShopgoodscarPage.prototype.hide = function () {
        var _this = this;
        this.slideflag = false;
        setTimeout(function () {
            _this.coverflag = false;
        }, 150);
    };
    ShopgoodscarPage.prototype.CreateOrder = function (arr) {
        var _this = this;
        var Info = {
            UserID: this.persioninfo.ID,
        };
        var parameter = new __WEBPACK_IMPORTED_MODULE_6__model_Model__["f" /* Parameter */]();
        parameter.jyh = "1072";
        parameter.parm = JSON.stringify(Info);
        this.httpService.post("/MobService/Index", parameter).map(function (res) { return res.json(); }).subscribe(function (val) {
            var result = JSON.parse(val.result);
            console.log(result);
            if (result.Code == "1") {
                _this.Order = result.Data;
                _this.Load(arr[1], arr[0]);
            }
        });
    };
    ShopgoodscarPage.prototype.HandOrder = function () {
        this.Order.Items = this.goodslist;
        this.Order.groupId = this.ShopID;
        this.socketService.socket.emit("groupMessage", this.Order);
        //此处传递过去
    };
    //socket
    ShopgoodscarPage.prototype.socketIoLoad = function () {
        //console.log(this.Msg);
        if (this.Msg.GroupID != null && this.Msg.UserID != null) {
            this.socketService.socketAuth();
            this.socketService.socket.emit("join", this.Msg);
            this.socketService.socket.on("groupuser", function (data) {
                //console.log(data);
            });
        }
    };
    return ShopgoodscarPage;
}());
ShopgoodscarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-shopgoodscar',template:/*ion-inline-start:"D:\CompanyProject\meizhaungApp\src\pages\shopgoodscar\shopgoodscar.html"*/'<ion-header style="min-height: 44px;">\n  <ion-navbar mode="ios" style="min-height: 44px;">\n    <ion-title mode="ios">购物车</ion-title>\n    <ion-buttons right>\n      <button ion-button icon-only tappable (click)="additem()">\n        <img [src]="img3" style="height:20px;width:20px;margin-right:10px;margin-top:3px;" alt="">\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <div class="shopTitle">\n    <!-- <div [ngClass]="{true:\'type1\',false:\'type2\'}[getType==0]" tappable (click)="select(0)">全部自提</div> -->\n    <div [ngClass]="{true:\'type1\',false:\'type2\'}[getType==1]" tappable (click)="select(1)">全部配送</div>\n  </div>\n</ion-header>\n\n<ion-content style="background:#eee;">\n  <div *ngIf="coverflag" class="cover" [ngClass]="{true:\'goshow\',false:\'gohide\'}[slideflag]">\n    <div class="clickbtn" tappable (click)="hide()"></div>\n    <div class="alertpart" [ngClass]="{true:\'goup\',false:\'godown\'}[slideflag]">\n      <div class="picPart">\n        <img [src]="imgUrl" alt="img2" class="goodspic">\n        <div class="goods-detail">\n          <div class="changecolor" >\n            <span style="font-size:1.5em;">\n              {{ProductPrice}}\n            </span>\n          </div>\n          <div style="line-height:15px;">\n            {{goodsmsg.Name}}\n          </div>\n        </div>\n      </div>\n      <div class="goodscontent">\n        <div class="typeitem" *ngFor="let item of AttrList;let a=index">\n          <div class="goodsTitle">{{item.TextPrompt}}</div>\n          <div class="goodsType">\n            <div *ngFor="let item2 of item.AttValueList;let i=index;" [ngClass]="{true:\'checkdiv\',false:\'nocheckdiv\'}[item2.Check==1]"\n              tappable (click)="ChoiceAttr(item.AttValueList,item2,a,i)">{{item2.Value}}</div>\n          </div>\n        </div>\n      </div>\n      <div *ngIf="btnflag" class="buyBtn" tappable (click)="confirme()">确定</div>\n      <div *ngIf="!btnflag" class="buyBtn2">确定</div>\n    </div>\n  </div>\n  <div class="goodsList">\n    \n    <span *ngFor="let item of goodslist ; let i= index">\n      <div class="listItem" *ngIf="item.AttributeDescription==\'\'">\n        <div>\n          <!-- <div [ngClass]="{true:\'type1\',false:\'type2\'}[item.type==0]" tappable (click)="selectonme(i,0)">自提</div> -->\n          <div [ngClass]="{true:\'type1\',false:\'type2\'}[item.type==1]" tappable (click)="selectonme(i,1)">配送</div>\n        </div>\n        <div class="ItemContent">\n          <div>\n            <img [src]="item.Url" alt="">\n            <div class="itemDetail">\n              <div>{{slice(item.Name)}}</div>\n              <div class="price" style="height:25px;">\n                <span>￥{{item.Price}}</span>\n              </div>\n              <div class="numchange">\n                <div tappable (click)="jian(i)">—</div>\n                <div>{{item.num}}</div>\n                <div tappable (click)="add(i)">+</div>\n              </div>\n              <div *ngIf="item.AttributeDescription!=\'\'">{{item.AttributeDescription}}</div>\n            </div>\n          </div>\n        </div>\n        <div>\n          <div tappable (click)="delete(i)">删除</div>\n        </div>\n      </div>\n    </span>\n    <span *ngFor="let item of goodslist ; let i= index">\n      <div class="listItem" style="height:100px;">\n        <div style="height:100px;padding-top:25px;">\n          <!-- <div [ngClass]="{true:\'type1\',false:\'type2\'}[item.type==0]" tappable (click)="selectonme(i,0)">自提</div> -->\n          <div [ngClass]="{true:\'type1\',false:\'type2\'}[item.type==1]" tappable (click)="selectonme(i,1)">配送</div>\n        </div>\n        <div class="ItemContent" style="height:100px;">\n          <div style="height:100px;font-size:0.75em;">\n            <img [src]="item.Url" alt="">\n            <div class="itemDetail">\n              <div style="height:25px;line-height:25px;">{{slice(item.Name)}}</div>\n              <div class="price" style="height:25px;line-height:25px;">\n                <span>￥{{item.Price}}</span>\n              </div>\n              <div *ngIf="Description!=\'\'" style="height:25px;line-height:25px;">规格:&nbsp;&nbsp;&nbsp;&nbsp;{{item.Description}}</div>\n              <div class="numchange" style="height:25px;padding-top:2px;">\n                <div tappable (click)="jian(i)">—</div>\n                <div>{{item.num}}</div>\n                <div tappable (click)="add(i)">+</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div style="height:100px;">\n          <div tappable (click)="delete(i)">删除</div>\n        </div>\n      </div>\n    </span>\n  </div>\n\n  <!-- <div style="width:100%;height:48px;"></div> -->\n \n\n</ion-content>\n<ion-footer style="width:100%;height:48px;">\n  <div class="btn" tappable (click)="gotoSettlement()">去结算</div>\n</ion-footer>'/*ion-inline-end:"D:\CompanyProject\meizhaungApp\src\pages\shopgoodscar\shopgoodscar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
        __WEBPACK_IMPORTED_MODULE_4__providers_HttpService__["a" /* HttpService */],
        __WEBPACK_IMPORTED_MODULE_5__providers_NativeService__["a" /* NativeService */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
        __WEBPACK_IMPORTED_MODULE_0__providers_SocketService__["a" /* SocketService */]])
], ShopgoodscarPage);

//# sourceMappingURL=shopgoodscar.js.map

/***/ })

});
//# sourceMappingURL=23.js.map?v=107