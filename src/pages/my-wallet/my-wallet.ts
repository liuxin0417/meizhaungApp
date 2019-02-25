import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';
import { Parameter } from './../../model/Model';

/**
 * Generated class for the MyWalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-wallet',
  templateUrl: 'my-wallet.html',
})
export class MyWalletPage {
  img = "assets/imgs/jinru--hui.png"
  userID: any;
  data:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,) {
  }
  ionViewWillEnter() {
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.userID = val.userinform.ID;
          this.login();
        }
      } else {
        this.navCtrl.push("LoginPage",{showflag:true});
      }
    })
  }
  ionViewDidLoad() {
    
  }
  gotocoupon() {
    this.navCtrl.push("CouponPage");
  }
  gotodetail(type) {
    this.navCtrl.push("WalletDetailPage",{
      type:type,
      userID:this.userID,
    });
  }
  gotorecharge() {
    this.navCtrl.push("RechargePage");
  }
  login() {
    var userInfo = {
      UserID: this.userID,
    }
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1108";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.data=result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
}
