import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parameter } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  pass = "";
  newpass = "";
  Rnewpass = "";
  userID = "";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private storage: Storage,
    private nativeService: NativeService, ) {
  }

  ionViewDidLoad() {
    this.storage.get("userinfo").then(val => {
      ////console.info(val);
      if (val != "") {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.userID = val.userinform.ID;
        }
      } else {
        this.navCtrl.push("LoginPage",{showflag:true});
      }

    })
  }
  reset() {
    if (this.pass == "") {
      this.nativeService.showToast("请填写原密码");
      return;
    }

    if (this.newpass == "") {
      this.nativeService.showToast("请填写新密码");
      return;
    }
    if (this.newpass != this.Rnewpass) {
      this.nativeService.showToast("请确认两次新密码输入相同");
      return;
    }

    var userInfo = {
      UserID: this.userID,
      pass: this.pass,
      newpass: this.newpass,
    }
    var parameter = new Parameter();
    parameter.jyh = "1010";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result);
      if (result.Code != 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
}
