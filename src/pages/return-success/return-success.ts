// import { ImagePicker } from '@ionic-native/image-picker';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReturnSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return-success',
  templateUrl: 'return-success.html',
})
export class ReturnSuccessPage {
  img = "assets/imgs/temporary/logo.png";
  img2='assets/imgs/jinru--hui.png';
  img3="assets/imgs/greencircle.png";
  img4="assets/imgs/green2.png";
  chose="assets/imgs/new/done.png";
  notdone="assets/imgs/new/notdone.png";
  line1="assets/imgs/new/line1.png";
  line2="assets/imgs/new/line2.png";
  imgno="assets/imgs/new/yiwancheng.png"
  status=1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }
  addstatus(){
    this.status++
  }

}
