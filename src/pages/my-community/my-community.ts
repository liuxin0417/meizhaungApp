import { NativeService } from './../../providers/NativeService';
import { HttpService } from './../../providers/HttpService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll } from 'ionic-angular';
import { Parameter, Padding } from '../../model/Model';
import { InfiniteScrollService } from '../../providers/InfiniteScrollService';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-my-community',
  templateUrl: 'my-community.html',
})
export class MyCommunityPage {
  articleList = [];
  type: any;
  newtype = 0;
  colorShow = 0;
  private isshow = true;
  private padding = new Padding();
  private usertype = 0;
  private userID: any = "";
  img = "assets/imgs/fanhu-withe.png";
  img2 = "assets/imgs/temporary/IMG_3162_05.png";
  img3 = "assets/imgs/temporary/personbg.png";
  img5 = "assets/imgs/temporary/IMG_3162_09.png";
  img6 = "assets/imgs/temporary/IMG_3162_12.png";
  img7 = "assets/imgs/temporary/IMG_3162_15.png";
  img8 = "assets/imgs/vhjekan.png";
  img9 = "assets/imgs/pinglun.png";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpService: HttpService,
    public nativeService: NativeService,
    public Inservice: InfiniteScrollService, public storage: Storage) {
    this.usertype = this.navParams.get("usertype");
    console.log(this.usertype);
    this.storage.get("userinfo").then(val => {
      if (val != null && val != "" && val.userinform != null) {
        if (val.userinform.ID == "") {
          this.navCtrl.push('LoginPage');
        } else {
          this.userID = val.userinform.ID;
          //this.Load(this.type);
          this.loadmore();
        }
      } else {
        this.navCtrl.push('LoginPage');
      }
    });

    /* this.userID = this.navParams.get("UserID");
    this.Load(this.type); */
  }

  ionViewDidLoad() {

  }
  loadmore() {
    if (this.usertype == 1) {
      this.Load(0);
    } else if (this.usertype == 2) {
      this.Load2("1112");
    } else if (this.usertype == 3) {
      this.Load2("1113");
    }
  }
  gotoarticle(item) {
    this.navCtrl.push("PersonalArticlePage", {
      ID: item.ID,
      type: this.usertype
    });
  }
  goback() {
    this.navCtrl.pop();
  }
  /**获取类别下的文章 */
  Load(type) {
    this.isshow = true;
    this.padding.ipageStart = 0;
    this.colorShow = type;
    var userInfo = {
      UserID: this.userID,
      type: type,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    ////console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1111";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result)
      if (result.Code == 1) {
        this.articleList = result.Data;
        if (this.articleList.length < this.padding.pageSize) {
          this.isshow = false;
        }
      } else {

      }
    });
  }
  Load2(entercode) {
    this.isshow = true;
    this.padding.ipageStart = 0;
    var userInfo = {
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    ////console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = entercode;
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result);
      if (result.Code == 1) {
        this.articleList = result.Data;
        if (this.articleList.length < this.padding.pageSize) {
          this.isshow = false;
        }
      } else {

      }
    });
  }
  /**下拉刷新 */
  doInfinite(infiniteScroll: InfiniteScroll) {
    /* infiniteScroll.enable(true); */
    //console.log("是否进入下拉刷新");
    if (this.articleList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo2 = {}
    var entercode = "1111"
    if (this.usertype == 1) {
      pageInfo2 = {
        ipageStart: this.padding.ipageStart,
        pageSize: this.padding.pageSize,
        UserID: this.userID,
        type: this.newtype
      };
      entercode = "1111"
    } else if (this.usertype == 2) {
      pageInfo2 = {
        ipageStart: this.padding.ipageStart,
        pageSize: this.padding.pageSize,
        UserID: this.userID,
      };
      entercode = "1112"
    } else if (this.usertype == 3) {
      pageInfo2 = {
        ipageStart: this.padding.ipageStart,
        pageSize: this.padding.pageSize,
        UserID: this.userID,
      };
      entercode = "1113"
    }
    var pageInfo = pageInfo2;
    var parm = new Parameter();
    parm.jyh = entercode;
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      setTimeout(() => {
        var newList: any;
        var msg = JSON.parse(newData.result);
        newList = msg.Data;
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.articleList.push(newList[i]);
          }
        }
        if (newData.length < this.padding.pageSize) {
          this.isshow = false;
        }
        infiniteScroll.complete();
      }, 500);
    });
  }

}
