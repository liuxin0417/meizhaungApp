import { Storage } from '@ionic/storage';
import { NativeService } from './../../providers/NativeService';
import { HttpService } from './../../providers/HttpService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,InfiniteScroll } from 'ionic-angular';
import { Parameter,Padding } from '../../model/Model';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';
/**
 * Generated class for the SeenListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seen-list',
  templateUrl: 'seen-list.html',
})
export class SeenListPage {
  list = ["贝拉", "嘉宝", "喜宝", "方广", "亨氏", "嘉宝", "荷兰Unox", "亨氏"];
  img = "assets/imgs/temporary/shangpin2.png";
  middle="assets/imgs/new/middle.png";
  userID:any;
  // private CategoryID = "";
  private Fh = "";
  private GoodsList: any;
  isshow=true;
  private padding = new Padding();
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpservice: HttpService, public nativeservice: NativeService, public storage: Storage,
    public Inservice: InfiniteScrollService) {
    this.storage.get("userinfo").then(val => {
      if (val != null) {
        this.userID = val.userinform.ID;
        this.Fh = "val.address.FranchiseeID";
        this.GetGoodsList();
      }
    });
  }

  ionViewDidLoad() {
  }
  GetGoodsList() {
    var userInfo = {
      UserID:this.userID,
      ipageStart:this.padding.ipageStart,
      pageSize:this.padding.pageSize,
    }
    var parameter = new Parameter();
    parameter.jyh = "1148";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeservice.showLoading("获取中");
    this.httpservice.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      this.nativeservice.hideLoading();
      //console.info(result)
      if (result.Code == "1") {
        this.GoodsList = result.Data;
      }
    });
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    
    if (this.GoodsList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      UserID:this.userID,
      ipageStart:this.padding.ipageStart,
      pageSize:this.padding.pageSize,
    };
    //console.info(pageInfo);
    var parm = new Parameter();
    parm.jyh = "1148";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      setTimeout(() => {
        var newList: any;
        var msg = JSON.parse(newData.result);
        newList = msg.Data;
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.GoodsList.push(newList[i]);
          }
        }
        if (newData.length < this.padding.pageSize) {
          this.isshow = false;
        }
        infiniteScroll.complete();
      }, 1000);
    });
  }
  gotoGoodDetail(id) {
    this.navCtrl.push("GoodDetailPage", {
      Fh: "this.address",
      goodsid: id,
    })
  }
}
