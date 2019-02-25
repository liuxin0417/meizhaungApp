import { InfiniteScrollService } from './../../providers/InfiniteScrollService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ModalController } from 'ionic-angular';
import { Parameter, Padding } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
//import { Storage } from '@ionic/storage'

/**
 * Generated class for the ExchangeGoodsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange-goods',
  templateUrl: 'exchange-goods.html',
})
export class ExchangeGoodsPage {
  img1 = "assets/imgs/fanhui2.png";
  img2 = "assets/imgs/jiaohuan.png";
  img3 = "assets/imgs/persional.png";
  img8 = "assets/imgs/vhjekan.png";
  img9 = "assets/imgs/pinglun.png";
  img11="assets/imgs/fabuwenzhang.png";
  //无用
  list = ["精选", "论坛", "圈子", "爱拍", "活动", "同城", "育婴"];
  indexnum = 0;
  slide = [];
  theme = [];
  article = [];
  nav = [];
  themeList=[];
  private NavID = "";
  private isshow = true;
  private padding = new Padding();
  inform = {
    ID: "e4e722b3-f0b1-4b44-965f-ac3b822c83b0", ImgUrl: "http://192.168.8.99:8063/doc/ZDNF\thumbs/e4e722b3-f0b1-4b44-965f-ac3b822c83b0_80_square.png", Info:
      "类别描述", Name: "食来孕转", Num: 3, PeopleSum: 2, RelImgUrl
      : "http://192.168.8.99:8063/doc/ZDNF/Coupon/20171228/20171228152338145.png", typebh: "02"
  }
  constructor(public navParams: NavParams,
    public navCtrl: NavController,
    private httpService: HttpService,
    private nativeService: NativeService,
    public Inservice: InfiniteScrollService,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.login();
    this.login2();
    this.login4();
  }
  gotoindex(i) {
    this.indexnum = i;
  }
  login() {
    var userInfo = "";
    var parameter = new Parameter();
    parameter.jyh = "1110";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.slide = result.Data;
      } else {

      }
    });
  }
  login2() {
    var userInfo = "";
    var parameter = new Parameter();
    parameter.jyh = "1078";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.log(result);
      if (result.Code == 1) {
        this.theme = result.Data.slice(0,3);
        this.themeList=result.Data;
      } else {
      }
    });
  }
  /**获取社区导航 */
  login4() {
    var userInfo = "";
    var parameter = new Parameter();
    parameter.jyh = "1095";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.nav = result.Data;
        if (this.nav.length > 0) {
          this.login3(0, this.nav[0].ID);
        }
      }
    });
  }
  /**获取社区的文章 */
  login3(num: number, NavID: string) {
    this.indexnum = num;
    this.NavID = NavID;
    var userInfo = {
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      NavID: NavID
    };
    var parameter = new Parameter();
    parameter.jyh = "1096";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.log(result);
      if (result.Code == 1) {
        this.article = result.Data;
       // console.log(this.article);
        if (this.article.length < this.padding.pageSize) {
          this.isshow = false;
        }
      } else {
      }
    });
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    /* infiniteScroll.enable(true); */
    ////console.info("运行了下拉加载");
    if (this.article.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      NavID: this.NavID
    };
    var parm = new Parameter();
    parm.jyh = "1096";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      setTimeout(() => {
        var newList: any;
        var msg = JSON.parse(newData.result);
        newList = msg.Data;
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.article.push(newList[i]);
          }
        }
        if (newData.length < this.padding.pageSize) {
          this.isshow = false;
        }
        infiniteScroll.complete();
      }, 1000);
    });
  }
  gotoslide(item) {
    var imgarry = [];
    // var img = { "Url": item };
    imgarry.push({ "Url": item });
    let modal = this.modalCtrl.create('SlideImgPage', {
      slide: imgarry,
    });
    modal.present();
  }
  gotohotplate() {
    this.navCtrl.push("HotPlatePage",{
      themeList:this.themeList,
      type:3,
    });
  }
  gotoperson(item: any) {
    //console.log(item);
    this.navCtrl.push("PersonHomepagePage", {
      type: item,
      fatherType:3
    });
  }
  gotoarticle() {
    let modal = this.modalCtrl.create('PublishArticlesPage', {
      type:3
    });
    modal.present();
  }
  gotoinfo(item) {
    this.navCtrl.push('PersonalArticlePage', {
      ID: item.ArticleID,
      type:3
    });
  }
  goback(){
    this.navCtrl.pop();
  }
  MyCommunityPage() {
    this.navCtrl.push("MyCommunityPage",{
      usertype:3
    });
  }
}
