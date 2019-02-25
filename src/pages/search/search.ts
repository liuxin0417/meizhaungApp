import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter, Padding } from './../../model/Model';
import { ViewChild } from '@angular/core';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  @ViewChild('inputpart')
  inputpart: ElementRef;
  img9 = "assets/imgs/fanhui2.png";
  img10 = "assets/imgs/cheat.png";
  img11 = "assets/imgs/search.png";
  middle = "assets/imgs/new/middle.png";
  list = [];
  img = "assets/imgs/temporary/shangpin2.png";
  activity = "assets/imgs/new/activity.png";
  message: any;
  private padding = new Padding();
  FranchiseeID: any;
  CouponID: any;
  noshow = false;
  isshow = true;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,
    public Inservice: InfiniteScrollService) {
    this.CouponID = this.navParams.get("CouponID")

    this.storage.get("userinfo").then(val => {

    })
    this.FranchiseeID = "";
    
    if (this.CouponID == null || this.CouponID == undefined || this.CouponID == "") {
      this.CouponID = ""
    } else {
      this.message = ""
      this.search2();
    }
  }

  ionViewDidLoad() {
    setTimeout(() => {
      let inputpart = this.inputpart.nativeElement;
      inputpart.focus();
    }, 600);
  }
  goback() {
    this.navCtrl.pop();
  }
  search() {
    if (this.message == "") {
      this.nativeService.showToast("请填写查询信息");
      return
    } else {

    }
    // this.CouponID="";
    var userInfo = {
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      FranchiseeID: this.FranchiseeID,
      goodName: this.message,
      CouponID: this.CouponID
    };
    // //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1037";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      console.info(result);
      if (result.Code == 1) {
        this.list = result.Data;
        if (this.list.length == 0) {
          this.noshow = true;
        } else {
          this.noshow = false;
        }
      } else {
      }
    });
  }
  search2() {

    var userInfo = {
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      FranchiseeID: this.FranchiseeID,
      goodName: this.message,
      CouponID: this.CouponID
    };
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1037";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.list = result.Data;
        if (this.list.length == 0) {
          this.noshow = true;
        } else {
          this.noshow = false;
        }
      } else {
      }
    });
  }
  gotoGoodDetail(id) {
    this.navCtrl.push("GoodDetailPage", {
      Fh: this.FranchiseeID,
      goodsid: id,
    })
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    if (this.list.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      FranchiseeID: this.FranchiseeID,
      goodName: this.message,
      CouponID: this.CouponID
    };
    //console.info(pageInfo);
    var parm = new Parameter();
    parm.jyh = "1037";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      //console.info(newData)
      setTimeout(() => {
        var newList: any;
        var msg = JSON.parse(newData.result);
        newList = msg.Data;
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.list.push(newList[i]);
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
