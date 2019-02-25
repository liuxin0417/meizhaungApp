import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReturnWaitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return-wait',
  templateUrl: 'return-wait.html',
})
export class ReturnWaitPage {
  img = "assets/imgs/temporary/logo.png";
  dizhi = "assets/imgs/dizhi.png";
  img5 = "assets/imgs/jinru--hui.png";
  goods = "assets/imgs/temporary/3.png";
  type=1;
  goodsNsg:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.goodsNsg=this.navParams.get("item");
  }

  ionViewDidLoad() {
    
  }

}
