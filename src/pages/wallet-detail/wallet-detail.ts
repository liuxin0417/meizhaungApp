import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';
import { Parameter } from './../../model/Model'
/**
 * Generated class for the WalletDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet-detail',
  templateUrl: 'wallet-detail.html',
})
export class WalletDetailPage {
  type:any;
  userID:any;
  list:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,) {
      this.type = this.navParams.get("type");
      this.userID = this.navParams.get("userID");
  }

  ionViewDidLoad() {
    //console.info( this.type+this.userID);
    if(this.type==1){
      this.login1();
    }else if(this.type==2){
      this.login2();
    }else{

    }
  }
  login1() {
    var userInfo = {
      UserID: this.userID,
    }
    var parameter = new Parameter();
    parameter.jyh = "1129";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.list=result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  login2() {
    var userInfo = {
      UserID: this.userID,
    }
    var parameter = new Parameter();
    parameter.jyh = "1130";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.list=result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
}
