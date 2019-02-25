import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-group-buy-success',
  templateUrl: 'group-buy-success.html',
})
export class GroupBuySuccessPage {
  img3 = "assets/imgs/gouwuche.png";
  img4 = "assets/imgs/search.png";
  img2 = "assets/imgs/jinru--hui.png";
  img5 = "assets/imgs/duigou.png";
  private Info: any;
  private picurl = "";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,) {
    this.Info = this.navParams.get("Info");
    this.picurl = this.navParams.get("picurl");
  }

  ionViewDidLoad() {

  }
  gotohomepage() {
    this.navCtrl.setRoot('TabsPage');
    // this.app.getRootNav().setRoot('TabsPage');
  }
}
