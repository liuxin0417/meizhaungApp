import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
//import { FileObj } from "../../model/FileObj";

/**
 * Generated class for the CouponToUsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coupon-to-use',
  templateUrl: 'coupon-to-use.html',
})
export class CouponToUsePage {
  switchflag = "0";
  userID: any;
  conponList: any;
  conponList2: any;
  img = "assets/imgs/guanbi.png";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    //private storage: Storage,
    private httpService: HttpService,
    private nativeService: NativeService,
    private viewCtrl: ViewController, ) {
  }
  ionViewWillEnter() {
    this.conponList = this.navParams.get('CouponList');
    console.log(this.conponList);
    this.conponList2 = this.conponList;
    // this.switch(0);
    
    // this.storage.get("userinfo").then(val => {
    //   if (val != "" && val != null) {
    //     if (val.userinform.ID == "") {
    //       this.navCtrl.push("LoginPage",{showflag:true});
    //     } else {
    //       this.userID = val.userinform.ID;
    //       this.load();
    //     }
    //   } else {
    //   }
    // })
  }
  ionViewDidLoad() {

  }
  switch(num) {
    this.conponList = this.conponList2;
    if (num == 0) {
      this.conponList = this.conponList.filter((info) => {
        return (info.isOk == true);
      });
    } else {
      this.conponList = this.conponList.filter((info) => {
        return (info.isOk == false);
      });
    }

    this.switchflag = num;
  }
  load() {
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
        this.conponList = result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  splite(item) {
    var arr = [];
    arr = item.split('T');
    return arr[0];
  }
  dismiss(item,i) {
    item.index=i
    this.viewCtrl.dismiss(item);
    // if (item.isOk) {
     
    // } else {
    //   this.nativeService.showToast("此优惠券不可用，请重新选择");
    // }
  }
  close(){
    this.viewCtrl.dismiss();
  }
}
