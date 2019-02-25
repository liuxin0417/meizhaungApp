import { Storage } from '@ionic/storage';
import { NativeService } from './../../providers/NativeService';
import { HttpService } from './../../providers/HttpService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parameter } from '../../model/Model';
//import { concat } from 'rxjs/operator/concat';
@IonicPage()
@Component({
  selector: 'page-goods',
  templateUrl: 'goods.html',
})
export class GoodsPage {
  list = ["贝拉", "嘉宝", "喜宝", "方广", "亨氏", "嘉宝", "荷兰Unox", "亨氏"];
  img = "assets/imgs/temporary/shangpin2.png";
  middle="assets/imgs/new/middle.png";
  private CategoryID = "";
  private Fh = "";
  private GoodsList: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpservice: HttpService, public nativeservice: NativeService, public storage: Storage) {
    this.CategoryID = this.navParams.get("goodsid");
    this.storage.get("userinfo").then(val => {
      if (val != null) {
        this.Fh = val.address.FranchiseeID;
        this.GetGoodsList();
      }
    });
  }

  ionViewDidLoad() {

  }
  /**获取列表商品 */
  GetGoodsList() {
    var userInfo = {
      CategoryID: this.CategoryID,
      FranceID: this.Fh
    }
    var parameter = new Parameter();
    parameter.jyh = "1047";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeservice.showLoading("获取中");
    this.httpservice.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      this.nativeservice.hideLoading();
      // //console.info(result.Data)
      if (result.Code == "1") {
        this.GoodsList = result.Data;
      }
    });
  }

  gotoGoodDetail(id) {
    this.navCtrl.push("GoodDetailPage", {
      Fh: this.Fh,
      goodsid: id
    });
  }
}
