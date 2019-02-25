import { InfiniteScrollService } from './../../providers/InfiniteScrollService';
import { Padding, Parameter } from './../../model/Model';
import { Storage } from '@ionic/storage';
import { NativeService } from './../../providers/NativeService';
import { HttpService } from './../../providers/HttpService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-group-buy-list',
  templateUrl: 'group-buy-list.html',
})
export class GroupBuyListPage {
  address: any;
  padding = new Padding();
  GroupList: any;
  isshow = true;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpService: HttpService, public nativeService: NativeService,
    public storage: Storage, public Inservice: InfiniteScrollService) {
    this.storage.get("userinfo").then(val => {
      if (val != null && val != "") {
        this.address = val.address;
        this.padding.pageSize = 16;
        this.Load();
      }
    });
  }

  ionViewDidLoad() {

  }
  Load() {
    var userInfo = {
      FranceID: this.address.FranchiseeID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    var parameter = new Parameter();
    parameter.jyh = "1089";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.GroupList = result.Data;
      }
    });
  }

  gotoGroupDetail(item) {
    this.navCtrl.push("GroupBuyDetailPage", {
      Group: item
    });
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    /* infiniteScroll.enable(true); */
    if (this.GroupList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      FranceID: this.address.FranchiseeID,
    };
    var parm = new Parameter();
    parm.jyh = "1089";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      setTimeout(() => {
        var newList: any;
        var msg = JSON.parse(newData.result);
        newList = msg.Data;
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.GroupList.push(newList[i]);
          }
        }
        if (newData.length < this.padding.pageSize) {
          this.isshow = false;
        }
        infiniteScroll.complete();
      }, 1000);
    });
  }
  slice(string){
    if(string!=''&&string!=null){
      return string.slice(0,20)+"..."
    }else{

    }
  }
}
