import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,InfiniteScroll } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter, Padding } from './../../model/Model';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';
/**
 * Generated class for the CouponListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coupon-list',
  templateUrl: 'coupon-list.html',
})
export class CouponListPage {
  number = 1;
  userID: any;
  conponList: any;
  choseNum: any;
  showList: any;
  isshow=true;
  coupondes=[];
  private padding = new Padding();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,
    public alertCtrl: AlertController,
    public Inservice: InfiniteScrollService ) {
  }
  ionViewWillEnter() {
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.userID = val.userinform.ID;
          this.load();
        }
      } else {
      }
    })
  }
  ionViewDidLoad() {
  }
  load() {
    var userInfo = {
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      // type: this.number,
      type: 0,
    }
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1116";
    this.nativeService.showLoading("获取中");
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
      this.nativeService.hideLoading();
      if (result.Code == 1) {
        // this.nativeService.showToast(result.Msg);
        this.conponList = result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  getDetail(item, i) {
    for(var n=0;n<this.coupondes.length;n++){
      if(item.ID==this.coupondes[n].CouponID&&item.UsingRange==this.coupondes[n].UsingRange){
        this.showList = this.coupondes[n].Name;
        this.choseNum = i;
        return;
      }else{

      }
    }
    var userInfo = {
      CouponID: item.ID,
      UsingRange: item.UsingRange,
    }
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1142";
    this.nativeService.showLoading("获取中");
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
      this.nativeService.hideLoading();
      if (result.Code == 1) {
        var arr={
          "CouponID":item.ID,
          "UsingRange": item.UsingRange,
          "Name":[]
        }
        this.coupondes.push(arr);
        arr.Name= result.Data
        this.showList = result.Data;
        this.choseNum = i;
        // this.nativeService.showToast(result.Msg);
        // this.conponList = result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  type(number) {
    this.number = number;
    this.load();
  }
  getCoupon(item) {
    var userInfo = {
      UserID: this.userID,
      ID: item.ID,
    }
    var parameter = new Parameter();
    parameter.jyh = "1119";
    this.nativeService.showLoading("获取中");
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
      this.nativeService.hideLoading();
      if (result.Code == 1) {
        item.isL = true;
        // this.nativeService.showToast(result.Msg);
        this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  gotoUse(item) {
    //console.info(item)
    this.navCtrl.push("SearchPage", {
      CouponID: item.ID,
    })
  }
  resest() {
    this.choseNum = -1;
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    /* infiniteScroll.enable(true); */
    ////console.info("运行了下拉加载");
    if (this.conponList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      // type: this.number,
      type: 0,
    };
    var parm = new Parameter();
    parm.jyh = "1116";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      setTimeout(() => {
        var newList: any;
        var msg = JSON.parse(newData.result);
        newList = msg.Data;
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.conponList.push(newList[i]);
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
