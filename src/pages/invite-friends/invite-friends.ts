import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InviteFriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invite-friends',
  templateUrl: 'invite-friends.html',
})
export class InviteFriendsPage {
  img3 = "assets/imgs/gouwuche.png";
  img4 = "assets/imgs/search.png";
  img2="assets/imgs/jinru--hui.png";
  imgqq="assets/imgs/qq.png";
  imgkongjian="assets/imgs/qqkongjian.png";
  imgweixin="assets/imgs/weixin.png";
  imgquan="assets/imgs/weixinquan.png";
  slidepart = false;
  coverpart=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }
  goshow() {
    this.coverpart = true;
    this.slidepart = true;
  }
  gohide() {
    var that = this;
    this.slidepart = false;
    setTimeout(function () {
      that.coverpart = false;
    }, 150)
  }
  gotosuccess(){
    this.navCtrl.push("GroupBuySuccessPage");
  }
}
