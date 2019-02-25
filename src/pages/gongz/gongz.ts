import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GongzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gongz',
  templateUrl: 'gongz.html',
})
export class GongzPage {

  popimg="assets/imgs/fanhui.png";
  gzhqrcode="assets/imgs/gzhqrcode.jpg";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GongzPage');
  }
  gopop(){
    this.navCtrl.pop();
  }
}
