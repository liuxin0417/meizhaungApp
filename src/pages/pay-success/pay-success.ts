import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pay-success',
  templateUrl: 'pay-success.html',
})
export class PaySuccessPage {
  img3 = "assets/imgs/gouwuche.png";
  img4 = "assets/imgs/search.png";
  money:any;
  shopBh="";
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private app: App,) {
      this.money = this.navParams.get("Info");
      this.shopBh = this.navParams.get("shopBH");
      if(this.shopBh==undefined||this.shopBh==null){
        this.shopBh = "";
      }
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad PaySuccessPage');
  }
  gotogoodscar() {
    this.navCtrl.push("GoodscarPage", {
      type: 1,
    });
  }
  gotoOrderList(){
    this.navCtrl.push("OrderListPage", {
      type:0,
    })
  }
  gotohome() {
    this.app.getRootNav().setRoot('TabsPage');
  }
}
