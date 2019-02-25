import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parameter, Padding } from './../../model/Model';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-second-to-buy',
  templateUrl: 'second-to-buy.html',
})
export class SecondToBuyPage {
  img = "assets/imgs/temporary/banner.png";
  img1 = "assets/imgs/temporary/3.png";
  private activityID: string = "";
  Fh: any;
  data: any;
  goodlist: any;
  private ActivityName = "爱宝加活动";
  private state = 0;//0-未开始 1-开始中 2-结束
  private padding = new Padding();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public nativeService: NativeService,
    public httpService: HttpService,
    private storage: Storage, ) {
    this.activityID = this.navParams.get("goodsid");
    this.storage.get("userinfo").then(val => {
      if (val != null) {
        this.Fh = val.address.FranchiseeID;
        this.Load();
      } else {

      }
    });
  }

  ionViewDidLoad() {

  }
  gotoseckill(item) {
    if (this.state == 2) {
      this.nativeService.showToast("活动已经结束");
      return false;
    }
    if (item.ResidueNum <= 0) {
      this.nativeService.showToast("商品已售完");
      return false;
    }
    var info = {
      ID: item.ID,
      ActivityID: this.activityID,
      ProductID: item.ProductID,
      AcType: this.data.AcType
    }
    if (this.data.AcType == 4) {
      this.navCtrl.push("SeckillPage", {
        seckInfo: info
      });
    } else {
      this.navCtrl.push("GoodDetailPage", {
        goodsid: item.ProductID,
        Fh: this.Fh,
        seckInfo:info
      });
    }
  }
  /**加载活动下的商品 */
  Load() {
    var userInfo = {
      activityID: this.activityID,
      FraceID: this.Fh,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    var parameter = new Parameter();
    parameter.jyh = "1115";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.data = result.Data;
        this.ActivityName = this.data.Name;
        this.goodlist = JSON.parse(result.Data.productList);
        var now = new Date();
        var date = new Date(this.data.STime);
        var date2 = new Date(this.data.ETime);
        if (now > date && now < date2) {
          this.state = 1;
        } else if (now < date) {
          this.state = 0;
        } else if (now > date2) {
          this.state = 2;
        }
        console.log(this.state);
      } else {
        /*  this.nativeService.showToast(result.Msg);
         this.navCtrl.pop(); */
      }
    })
  }
  slice(string){
    if(string!=''&&string!=null){
      return string.slice(0,30)+"..."
    }else{

    }
  }
}
