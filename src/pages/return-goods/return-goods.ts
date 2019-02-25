import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parameter, Padding } from '../../model/Model';

@IonicPage()
@Component({
  selector: 'page-return-goods',
  templateUrl: 'return-goods.html',
})
export class ReturnGoodsPage {
  img = "assets/imgs/temporary/logo.png";
  img2 = "assets/imgs/DIANPU.png";
  img3 = "assets/imgs/search.png";
  img4 = "assets/imgs/temporary/3.png";
  chose = "assets/imgs/chose.png";
  hui = "assets/imgs/jinru--hui.png";
  unchose="assets/imgs/guanbi.png"
  private userInfo: any;
  private List = [];
  private padding = new Padding();
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public nativeService: NativeService, public httpService: HttpService) {

  }
  ionViewWillEnter() {
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage", { showflag: true });
        } else {
          this.userInfo = val.userinform;
          this.Load();
        }
      } else {
        this.navCtrl.push("LoginPage", { showflag: true });
      }
    });
  }

  ionViewDidLoad() {

  }
  gotoreturn(item) {
    if (item.State == 0) {
      this.navCtrl.push("ReturnWaitPage", {
        item: item
      });
    } else if (item.State == 1) {
      this.navCtrl.push("ReturnDetailPage", {
        item: item
      });
    } else if (item.State == 2) {
      this.navCtrl.push("ReturnFailPage", {
        item: item
      });
    }

  }
  gotosuccess() {
    this.navCtrl.push("ReturnSuccessPage");
  }
  Load() {
    var userInfo = {
      UserID: this.userInfo.ID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    var parameter = new Parameter();
    parameter.jyh = "1154";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.List = result.Data;
      } else {

      }
    });
  }
  wait() {
    this.navCtrl.push("ReturnWaitPage");
  }
}
