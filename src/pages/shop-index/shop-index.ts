import { Component } from '@angular/core';
import { NavController, IonicPage, Tab, App, InfiniteScroll, NavParams } from 'ionic-angular';
// import { ViewChild } from '@angular/core';
// import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Parameter, Padding } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';

/**
 * Generated class for the ShopIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-index',
  templateUrl: 'shop-index.html',
})
export class ShopIndexPage {
  num = 1;
  chose1 = "assets/imgs/new/chose1.png";
  chose2 = "assets/imgs/new/chose2.png";
  chose3 = "assets/imgs/new/chose3.png";
  chose4 = "assets/imgs/new/chose4.png";
  activity = "assets/imgs/new/activity.png";
  gengduo = "assets/imgs/new/genduo2.png";
  homeNew = "assets/imgs/homenew.png";
  huodong = "assets/imgs/huodong.png";
  shop = "assets/imgs/shop.png";
  sanjiao = "assets/imgs/sanjiao.png";
  coverFlag = false;
  realList: any;
  private padding = new Padding();
  address = "";
  changeBh = "";
  type = 0;
  BrandID = [];
  SmallPrice = 0;
  BigPrice = 0;
  Category = [];
  goodList = [];
  searchNum = 1;
  isshow = true;
  shopmsg: any;
  ShopID: any;
  bannerList: any;
  constructor(public navCtrl: NavController,
    private httpService: HttpService,
    // private storage: Storage,
    private app: App,
    private nativeService: NativeService,
    public Inservice: InfiniteScrollService,
    public navParams: NavParams, ) {
  }
  ionViewWillEnter() {
    var that=this;
    this.ShopID = this.navParams.get("ShopID");
    this.getShop();
    this.realid();
    this.getlist(1);
    this.getswiper();

  }
  ionViewDidLoad() {
   
  }
  chose_btn(num) {
    this.num = num;
  }
  realid() {
    var userInfo = {
      Relid: "",
      ShopID: this.ShopID,
    }
    console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1004";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      // console.log(result);
      if (result.Code == 1) {
        this.realList = result.Data;
      }
    });
  }
  getswiper() {
    var userInfo = {
      ShopID: this.ShopID,
    }
    var parameter = new Parameter();
    parameter.jyh = "1200";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      // console.log(result);
      if (result.Code == 1) {
        this.bannerList = result.Data
      }
    });
  }
  getShop() {
    var that=this;
    var userInfo = {
      ShopID: this.ShopID,
    }
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1157";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      console.log(result);
      if (result.Code == 1) {
        this.shopmsg = result.Data;
        wx.ready(function () {
          that.settle();
        })
      }
    });
  }
  getlist(num) {
    var num = num;
    var userInfo = {
      FranchiseeID: this.address,
      CategoryBH: this.changeBh,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      type: this.type,
      BrandID: this.BrandID,
      SmallPrice: this.SmallPrice,
      BigPrice: this.BigPrice,
      Category: this.Category,
      ShopID: this.ShopID
      // brand: "品牌",
    }
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1017";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.goodList = result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }
    })
  }
  getgoodsList(num) {
    this.searchNum = num;
    this.padding.ipageStart = 0;
    this.isshow = true;
    if (num == 1) {
      this.type = 0;
      this.getlist(0);
    } else if (num == 2) {
      this.type = 1;
      this.getlist(0);
    } else if (num == 3) {
      if (this.type == 2) {
        this.type = 3;//降序
        this.getlist(0);
      } else {
        this.type = 2;
        this.getlist(0);//升序
      }
    }
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    /* infiniteScroll.enable(true); */
    ////console.info("运行了下拉加载");
    if (this.goodList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      FranchiseeID: this.address,
      CategoryBH: this.changeBh,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      type: this.type,
      BrandID: this.BrandID,
      SmallPrice: this.SmallPrice,
      BigPrice: this.BigPrice,
      Category: this.Category,
      ShopID: this.ShopID
    };
    // //console.info(pageInfo);
    var parm = new Parameter();
    parm.jyh = "1017";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      setTimeout(() => {
        var newList: any;
        var msg = JSON.parse(newData.result);
        newList = msg.Data;
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.goodList.push(newList[i]);
          }
        }
        if (newData.length < this.padding.pageSize) {
          this.isshow = false;
        }
        infiniteScroll.complete();
      }, 1000);
    });
  }
  gotoDetail(id) {
    this.navCtrl.push("GoodDetailPage", {
      goodsid: id,
    });
  }
  gotoGoodDetail(id) {
    this.navCtrl.push("GoodDetailPage", {
      Fh: this.address,
      goodsid: id,
    })
  }
  showList() {
    this.coverFlag = true;
  }
  gotohome(num) {
    if (num == 1) {
      this.app.getRootNav().setRoot('TabsPage');
    } else if (num == 2) {
      window.open("//www.lguangguang.com/YDDStore/ActivityHome")
    } else if (num == 3) {
      window.open("//www.lguangguang.com/NewSport/Club/ClubDetail?ShopID=" + this.shopmsg.ID)
    }

  }
  settle() {
    let l = this;
    this.nativeService.log('gooddetail', "进入微信分享 url:" + 'https://www.lguangguang.com/mob/?shopIndex=' + this.ShopID);
    wx.onMenuShareAppMessage({
      title: this.shopmsg.Name,
      desc: this.shopmsg.Description, // 分享描述
      // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
      // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
      link: 'https://www.lguangguang.com/mob/?shopIndex=' + this.ShopID, // 分享链接
      imgUrl: this.shopmsg.PicUrl, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        l.nativeService.showToast("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    wx.onMenuShareTimeline({
      title: this.shopmsg.Name,
      link: 'https://www.lguangguang.com/mob/?shopIndex=' + this.ShopID, // 分享链接
      imgUrl: this.shopmsg.PicUrl, // 分享图标
      success: function () {
        this.nativeService.showToast("分享成功");
      },
    })
  }
}
