import { NativeService } from './../../providers/NativeService';
import { HttpService } from './../../providers/HttpService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll } from 'ionic-angular';
import { Parameter, Padding } from '../../model/Model';
import { InfiniteScrollService } from '../../providers/InfiniteScrollService';
import { Storage } from '@ionic/storage';
@IonicPage()
@Component({
  selector: 'page-person-homepage',
  templateUrl: 'person-homepage.html',
})
export class PersonHomepagePage {
  img = "assets/imgs/fanhu-withe.png";
  img8 = "assets/imgs/vhjekan.png";
  img9 = "assets/imgs/pinglun.png";
  articleList = [];
  type: any;
  newtype = 0;
  fatherType:number;
  jiekou:any;
  userInfo:any;
  private isshow = true;
  private padding = new Padding();
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService: HttpService,
    public nativeService: NativeService, public Inservice: InfiniteScrollService,public storage: Storage) {
    this.type = this.navParams.get("type");
    //console.info(this.type)
    this.fatherType = this.navParams.get("fatherType");
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        if (val.userinform.ID != "") {
          this.userInfo = val.userinform;
        }
      }
    });
    if(this.fatherType==1){
      this.jiekou="1082"
    }else if(this.fatherType==2){
      this.jiekou="1076"
    }else if(this.fatherType==3){
      this.jiekou="1079"
    }
    this.Load(this.newtype);
  }
 

  ionViewDidLoad() {

  }
  gotoarticle(item) {
    ////console.info(item)
    this.navCtrl.push("PersonalArticlePage", {
      ID: item.ID,
      type:this.fatherType,
    });
  }
  goback() {
    this.navCtrl.pop();
  }
  /**获取类别下的文章 */
  Load(type) {
    this.isshow = true;
    this.newtype = type;
    var userInfo = {
      typebh: this.type.typebh,
      type: this.newtype,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    ////console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = this.jiekou;
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
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
    if (this.articleList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      typebh: this.type.typebh,
      type: this.newtype
    };
    var parm = new Parameter();
    parm.jyh = this.jiekou;
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
      }, 1000);
    });
  }
  //加关注
  AddFollow(item) {
    if (this.userInfo == null) {
      this.navCtrl.push('LoginPage');
      return false;
    }
    var Info = {
      UserID: this.userInfo.ID,
      RelD: this.type.ID
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
