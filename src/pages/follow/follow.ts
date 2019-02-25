import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll } from 'ionic-angular';
import { Parameter, Padding } from './../../model/Model';
import { NativeService } from './../../providers/NativeService';
import { HttpService } from './../../providers/HttpService';
import { InfiniteScrollService, } from './../../providers/InfiniteScrollService';
/**
 * Generated class for the FollowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-follow',
  templateUrl: 'follow.html',
})
export class FollowPage {
  img = "assets/imgs/temporary/3.png";
  img2 = "assets/imgs/gouwuche.png";
  goto = "assets/imgs/jinru--hui.png";
  logo = "assets/imgs/comlogo.png";
  sousuo = "assets/imgs/shousuo.png";
  chose = "assets/imgs/chone.png";
  unchose = "assets/imgs/unchose.png";
  flag = false;
  type = 0;
  coverpart = false;
  slidepart = false;
  statusType = 1;
  itemflag = false;
  testarr = [1, 11, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1,];
  shoplist = [];
  isshow = true;
  img5 = "assets/imgs/DIANPU.png"
  goodslist: any;
  userID: any;
  private padding = new Padding();
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpService: HttpService,
    public Inservice: InfiniteScrollService,
    private nativeService: NativeService, ) {
    this.userID = this.navParams.get("userID");
    // this.shopList();
    this.load();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowPage');
  }
  updategoods(num) {
    if (num == 3) {
      this.goshow();
      this.type = num;

    } else {
      this.type = num;
    }

  }
  changeFlag(flag) {
    if (flag == 1) {
      this.flag = false;
      this.isshow = true;
      this.padding.ipageStart = 0;
      this.load();
    } else {
      this.flag = true;
      this.isshow = true;
      this.padding.ipageStart = 0;
      this.shopList();
    }
  }
  goshow() {
    this.coverpart = true;
    this.slidepart = true;
  }
  gohide() {
    var that = this;
    this.slidepart = false;
    setTimeout(function () {
      that.coverpart = false;
    }, 150)
  }
  shopList() {
    var userInfo = {
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    }
    var parameter = new Parameter();
    parameter.jyh = "1161";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      console.log(result);
      if (result.Code == 1) {
        this.shoplist = result.Data;
      } else {
        // this.nativeService.showToast(result.Msg);
      }

    })
  }
  load() {
    var userInfo = {
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    var parameter = new Parameter();
    parameter.jyh = "1021";
    parameter.parm = JSON.stringify(userInfo);
    // this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      // this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        //this.nativeService.showToast(result.Msg);
        this.goodslist = result.Data;
      } else {
        this.nativeService.showToast(result.Msg);

      }

    })
  }
  delete(ID, index) {
    var userInfo = {
      Userid: this.userID,
      FranchiseeID: "",
      goodsID: ID,
    };
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1020";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result)
      if (result.Code == 1) {
        this.nativeService.showToast(result.Msg);
        this.goodslist.splice(index, 1);
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  deleteShop(item, index) {
    var userInfo = {
      ID: item.ID,
      ShopID: item.VendorID,
    };
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1162";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result)
      if (result.Code == 1) {
        this.nativeService.showToast(result.Msg);
        this.shoplist.splice(index, 1);
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  gotodetail(id) {
    this.navCtrl.push("GoodDetailPage", {
      goodsid: id,
    })
  }
  gotoshop(ShopID) {
    this.navCtrl.push("ShopIndexPage", {
      ShopID: ShopID
    })
  }
  doInfinite(infiniteScroll: InfiniteScroll) {

    var pageInfo = {};
    var parm = new Parameter();
    if (this.flag) {
      if (this.shoplist.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
        this.isshow = false;
        return;
      }
      this.padding.ipageStart += 1;
      pageInfo = {
        UserID: this.userID,
        ipageStart: this.padding.ipageStart,
        pageSize: this.padding.pageSize,
      };
      parm.jyh = "1161";
      parm.parm = JSON.stringify(pageInfo);
      this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
        setTimeout(() => {
          var newList: any;
          var msg = JSON.parse(newData.result);
          newList = msg.Data;
          if (newList != null || newList != undefined) {
            for (var i = 0; i < newList.length; i++) {
              this.shoplist.push(newList[i]);
            }
          }
          if (newData.length < this.padding.pageSize) {
            this.isshow = false;
          }
          infiniteScroll.complete();
        }, 1000);
      });
    } else {
      if (this.goodslist.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
        this.isshow = false;
        return;
      }
      this.padding.ipageStart += 1;
      pageInfo = {
        UserID: this.userID,
        ipageStart: this.padding.ipageStart,
        pageSize: this.padding.pageSize,
      };
      parm.jyh = "1021";
      parm.parm = JSON.stringify(pageInfo);
      this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
        setTimeout(() => {
          var newList: any;
          var msg = JSON.parse(newData.result);
          newList = msg.Data;
          if (newList != null || newList != undefined) {
            for (var i = 0; i < newList.length; i++) {
              this.goodslist.push(newList[i]);
            }
          }
          if (newData.length < this.padding.pageSize) {
            this.isshow = false;
          }
          infiniteScroll.complete();
        }, 1000);
      });
    }

  }
}
