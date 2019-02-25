import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-shopsuceess',
  templateUrl: 'shopsuceess.html',
})
export class ShopsuceessPage {
  private shopBH = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.shopBH = this.navParams.get("shopBH");
  }

  ionViewDidLoad() {

  }

  Close() {
    this.viewCtrl.dismiss();
  }
}
