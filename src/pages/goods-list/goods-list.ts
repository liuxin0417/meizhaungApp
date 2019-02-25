import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, Content } from 'ionic-angular';
import { Parameter, Padding } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
//import { Storage } from '@ionic/storage';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';

@IonicPage({
  segment: 'goods-list/:BH/:name',
  defaultHistory: ['TabsPage']

})
@Component({
  selector: 'page-goods-list',
  templateUrl: 'goods-list.html',
})
export class GoodsListPage {
  list = [];
  @ViewChild(Content) content: Content;
  img = "assets/imgs/temporary/shangpin2.png";
  img1 = "assets/imgs/logo2.png";
  img3 = "assets/imgs/new/shousuo.png";
  chose1 = "assets/imgs/new/chose1.png";
  chose2 = "assets/imgs/new/chose2.png";
  chose3 = "assets/imgs/new/chose3.png";
  chose4 = "assets/imgs/new/chose4.png";
  shaixuan = "assets/imgs/new/shaixuan.png";
  middle = "assets/imgs/new/middle.png";
  goodsimg = "assets/imgs/temporary/3.png";
  one = "assets/imgs/temporary/ontype.png";
  two = "assets/imgs/temporary/twotype.png";
  gotoup = "assets/imgs/temporary/gotop.png";
  imghui = "assets/imgs/jinru--hui.png";
  choseimg = "assets/imgs/chone.png";
  unchose = "assets/imgs/unchone.png";
  activity = "assets/imgs/new/activity.png";

  num = -1;
  num2 = -1;
  showflag = false;
  showflag2 = false;
  showflag3 = false;
  Bh: any;
  changeBh: any;
  goodsId: any;
  address: any;
  goodList = [];
  list1 = [];
  list2 = [];
  flag = false;
  name: any;
  slidepart = false;
  coverpart = false;
  type = 0;
  showType = 1;
  testList = [1, 1, 1, 1, 1, 1, 1, 1,];
  showlevel = 1;
  chosemsg1: any;
  BrandID = [];
  SmallPrice = 0;
  BigPrice = 0;
  Category = [];
  brandLiat = [];
  CategoryLiat = [];
  fenlei = []
  private padding = new Padding();
  private isshow = true;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    public Inservice: InfiniteScrollService) {
    // let value = navParams.get('id');
    var that = this;
    this.address = "";
    // this.goodsId = value;
    //console.info(this.goodsId)
    this.Bh = navParams.get('BH');
    //console.info(this.Bh);
    this.changeBh = this.Bh;
    this.name = navParams.get('name');
    this.getlist(0);
    this.resigiter();
    wx.ready(function () {
      that.settle();
    });
  }

  ionViewDidLoad() {
  }
  updategoods(num) {
    this.padding.ipageStart = 0;
    this.isshow = true;
    if (num == 0) {
      this.type = 0;
      this.getlist(0);
    } else if (num == 1) {
      this.type = 1;
      this.getlist(0);
    } else if (num == 2) {
      // this.type = 2;//升序
      // this.getlist(0);
      if (this.type == 2) {
        this.type = 3;//降序
        this.getlist(0);
      } else {
        this.type = 2;
        this.getlist(0);//升序
      }
    }
    //console.info()
  }
  changenum(index, item) {
    this.num = index;
    item.show = !item.show
    var arr = { "ID": item.CategoryBH }
    if (item.show) {
      this.Category.push(arr)
    } else {
      for (var c = 0; c < this.Category.length; c++) {
        if (this.Category[c].ID == item.CategoryBH) {
          this.Category.splice(c, 1)
        }
      }
    }
  }
  changenum2(index, item) {
    this.num2 = index;
    item.show = !item.show
    var arr = { "ID": item.BrandID }
    if (item.show) {
      this.BrandID.push(arr)
    } else {
      for (var c = 0; c < this.BrandID.length; c++) {
        if (this.BrandID[c].ID == item.BrandID) {
          this.BrandID.splice(c, 1)
        }
      }
    }
  }
  //重置
  reset() {
    this.BrandID = [];
    this.Category = [];
    this.SmallPrice = 0;
    this.BigPrice = 0;
    for (var a = 0; a < this.brandLiat.length; a++) {
      this.brandLiat[a].show = false
    }
    for (var b = 0; b < this.CategoryLiat.length; b++) {
      this.CategoryLiat[b].show = false
    }
  }
  /* show() {
    this.showflag = !this.showflag;
    this.showflag3 = !this.showflag3;
  }
  show2() {
    this.showflag2 = !this.showflag2;
    this.showflag3 = !this.showflag3;
  } */
  resigiter() {
    var userInfo = {
      CategoryBH: this.changeBh,
    }
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1145";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.brandLiat = result.Data.lstBrand;
        this.CategoryLiat = result.Data.lstCategory;
        for (var a = 0; a < this.brandLiat.length; a++) {
          this.brandLiat[a].show = false
        }
        //console.info(this.brandLiat)
        for (var b = 0; b < this.CategoryLiat.length; b++) {
          this.CategoryLiat[b].show = false
        }
        //console.info(this.CategoryLiat)
      } else {
        // this.nativeService.showToast(result.Msg);
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
      Category: this.Category
      // brand: "品牌",

    }
    console.info(userInfo)
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
        if (num == 1) {
          this.gohide();
          // this.reset()
        }
      } else {
        this.nativeService.showToast(result.Msg);
      }
    })
  }
  gotoGoodDetail(id) {
    this.navCtrl.push("GoodDetailPage", {
      Fh: this.address,
      goodsid: id,
    })
  }
  slice(string) {
    if (string != "" && string != null) {
      return string.slice(0, 25) + "...";
    }
  }
  goshow() {
    this.type = 3;
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
      Category: this.Category
    };
    //console.info(pageInfo);
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
  change() {
    if (this.showType == 1) {
      this.showType = 2
    } else {
      this.showType = 1
    }
  }
  toTop() {
    this.content.scrollTo(0, 0, 300)
  }
  gotosearch() {
    // //console.info("11")
    this.navCtrl.push("SearchPage");
  }
  gotoLeavel2() {
    this.showlevel = 2;
  }
  gotoLeavel1() {
    this.showlevel = 1;
  }
  gotoLeavel3() {
    this.showlevel = 3;
  }
  chosetype1(item2) {
    for (var n = 0; n < this.fenlei.length; n++) {
      for (var c = 0; c < this.fenlei[n].choseList.length; c++) {
        this.fenlei[n].choseList[c].chose = false;
      }
    }
    item2.chose = true;
    this.chosemsg1 = item2.name;
    this.showlevel = 1;

  }
  settle() {
    var that = this;
    wx.onMenuShareAppMessage({
      title: '逛贝商城邀请您来逛逛',
      desc: this.name, // 分享描述
      // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
      // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
      link: 'https://www.lguangguang.com/mob/?from=groupmessage#/goods-list/' + this.Bh + '/' + this.name, // 分享链接
      imgUrl: "https://www.lguangguang.com/logo.png", // 分享图标
      // imgUrl: this.icon, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        that.nativeService.showToast("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    wx.onMenuShareTimeline({
      title: '逛贝商城邀请您来逛逛',
      link: 'https://www.lguangguang.com/mob/?from=groupmessage#/goods-list/' + this.Bh + '/' + this.name, // 分享链接
      imgUrl: "https://www.lguangguang.com/logo.png", // 分享图标
      success: function () {
        this.nativeService.showToast("分享成功");
      },
    })
  }
}
