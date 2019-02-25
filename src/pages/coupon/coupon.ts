import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
//import { FileObj } from "../../model/FileObj";

/**
 * Generated class for the CouponPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html',
})
export class CouponPage {
  switchflag = "0";
  userID:any;
  conponList:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    private httpService: HttpService,
    private nativeService: NativeService,
  ) {
  }
  ionViewWillEnter() {
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.userID = val.userinform.ID;
          this.load();
        }
      } else {
      }
    })
  }
  ionViewDidLoad() {
    //console.log('ionViewDidLoad CouponPage');
  }
  switch(num) {
    this.switchflag = num;
  }
  load(){
    var userInfo = {
      UserID: this.userID,
    }
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1120";
    this.nativeService.showLoading("获取中");
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
      this.nativeService.hideLoading();
      if (result.Code == 1) {
        // this.nativeService.showToast(result.Msg);
        this.conponList=result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  splite(item){
    var arr=[];
    arr=item.split('T');
    return arr[0]; 
  }
  gotoUse(item) {
    //console.info(item)
    this.navCtrl.push("SearchPage", {
      CouponID: item.CouponID,
    })
  }
}
