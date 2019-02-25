import { InfiniteScrollService } from './../../providers/InfiniteScrollService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, ModalController } from 'ionic-angular';
import { Parameter, Padding } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';

//declare var Swiper;
//import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-community',
  templateUrl: 'community.html',
})
export class CommunityPage {
  // @ViewChild(Slides) slides: Slides;
  img1 = "assets/imgs/shousuo.png";
  img2 = "assets/imgs/comlogo.png";
  img3 = "assets/imgs/persional.png";
  img8 = "assets/imgs/vhjekan.png";
  img9 = "assets/imgs/pinglun.png";
  img11 = "assets/imgs/fabuwenzhang.png";
  //无用
  img4 = "assets/imgs/temporary/swiper.png";
  img5 = "assets/imgs/temporary/IMG_3162_09.png";
  img6 = "assets/imgs/temporary/IMG_3162_12.png";
  img7 = "assets/imgs/temporary/IMG_3162_15.png";
  img10 = "assets/imgs/temporary/IMG_3162_05.png";
  list = ["精选", "论坛", "圈子", "爱拍", "活动", "同城", "育婴"];
  indexnum = 0;
  slide = [];
  theme = [];
  article = [];
  nav = [];
  userInfo:any;
  private NavID = "";
  private isshow = true;
  private padding = new Padding();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    public Inservice: InfiniteScrollService,
    public modalCtrl: ModalController,
    public storage: Storage) {
      this.storage.get("userinfo").then(val => {
        if (val != "" && val != null) {
          if (val.userinform.ID != "") {
            this.userInfo = val.userinform;
          }
        }
      });
  }
  ionViewWillEnter(){
    this.login();
    this.login2();
    this.login4();
  }
  ionViewDidLoad() {
   
  }
  gotoindex(i) {
    this.indexnum = i;
  }
  login() {
    var userInfo = "";
    var parameter = new Parameter();
    parameter.jyh = "1061";
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
    parameter.jyh = "1066";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.theme = result.Data;
        //console.log(this.theme);
      } else {

      }
    });
  }
  /**获取社区导航 */
  login4() {
    var userInfo = "";
    var parameter = new Parameter();
    parameter.jyh = "1080";
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
    this.isshow = true;
    this.padding.ipageStart = 0;
    var userInfo = {
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      NavID: NavID
    };
    var parameter = new Parameter();
    parameter.jyh = "1063";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
     // console.log(result);
      if (result.Code == 1) {
        this.article = result.Data;
        if (this.article.length < this.padding.pageSize) {
          this.isshow = false;
        }
      } else {
      }
    });
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    /* infiniteScroll.enable(true); */
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
    parm.jyh = "1063";
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
    this.navCtrl.push("HotPlatePage");
  }
  gotoperson(item: any) {
    //console.log(item);
    this.navCtrl.push("PersonHomepagePage", {
      type: item,
      fatherType: 1
    });
  }
  gotoarticle() {
    let modal = this.modalCtrl.create('PublishArticlesPage', {
      type: 1
    });
    modal.present();
  }
  gotoinfo(item) {
    this.navCtrl.push('PersonalArticlePage', {
      ID: item.ArticleID,
      type:1
    });
  }
  MyCommunityPage() {
    this.navCtrl.push("MyCommunityPage", {
      usertype: 1
    });
  }
  gotouseinfo(item) {
    this.navCtrl.push('MyCommunityPage', {
      UserID: item.UserID
    });
  }
  gotodeliver(){
    this.navCtrl.push("DeliveryTypePage")
  }
  AddFollow(item) {
    if (this.userInfo == null) {
      this.navCtrl.push('LoginPage');
      return false;
    }
    var Info = {
      UserID: this.userInfo.ID,
      RelD: item.ID
    };
    var parameter = new Parameter();
    parameter.jyh = "1067";
    parameter.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.nativeService.showToast("添加关注成功");
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }

}
