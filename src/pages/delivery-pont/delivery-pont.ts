import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DeliveryPontPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delivery-pont',
  templateUrl: 'delivery-pont.html',
})
export class DeliveryPontPage {
  img="assets/imgs/chose.png";
  img2="assets/imgs/dizhi.png";
  switchNum=1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  chose(number){
    this.switchNum=number;
  }
}
