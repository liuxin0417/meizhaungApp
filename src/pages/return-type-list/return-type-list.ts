import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the ReturnTypeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return-type-list',
  templateUrl: 'return-type-list.html',
})
export class ReturnTypeListPage {
  chose="assets/imgs/chose.png";
  closeimg="assets/imgs/close.png"
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReturnTypeListPage');
  }
  close(item){
    item="申通快递"
    this.viewCtrl.dismiss(item);
  }
}
