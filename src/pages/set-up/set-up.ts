import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the SetUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-set-up',
  templateUrl: 'set-up.html',
})
export class SetUpPage {
  img = "assets/imgs/jinru--hui.png"
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage, ) {
  }

  ionViewDidLoad() {

  }
  gotoaddress() {
    this.navCtrl.push("AddressPage");
  }
  gotoreset() {
    this.navCtrl.push("ResetPasswordPage");
  }
  setup() {
    this.storage.get("userinfo").then(val => {
      if (val != null) {
         
        let userinform = { "ID": "" };
        this.storage.set("userinfo", {   'userinform': userinform }).then(val => {
          this.navCtrl.push("TabsPage",{
            showflag:true,
          });
        });
      } else {
        
      }
    });
  }
}
