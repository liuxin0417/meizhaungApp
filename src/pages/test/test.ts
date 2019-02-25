import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, Content } from 'ionic-angular';
import { Parameter, Padding } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  goodList:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    public Inservice: InfiniteScrollService) {
      nativeService.log('TestPage','constructor');
  }

  ionViewDidLoad() {
    this.getlist(0);
  }
  getlist(num) {
    var num = num;
    var userInfo = {
      FranchiseeID: "",
      CategoryBH: "0301",
      ipageStart: 0,
      pageSize: 10,
      type:0,
      BrandID: [],
      SmallPrice: 0,
      BigPrice: 0,
      Category: []
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
      console.info(result)
      if (result.Code == 1) {
        this.goodList = result.Data;
        // if (num == 1) {
        //   this.gohide();
        //   // this.reset()
        // }
      } else {
        this.nativeService.showToast(result.Msg);
      }
    })
  }

}
