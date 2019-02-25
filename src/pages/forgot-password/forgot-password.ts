import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App,ViewController } from 'ionic-angular';
import { Parameter } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  second = 60;
  sendflag = true;
  img3="assets/imgs/close.png";
  phonenum: any;
  password: any;
  phone = "";
  yzm = "";
  showflag=false;
  yzm2 = "";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private app: App,
    private storage: Storage,
    private viewCtrl: ViewController, ) {
      this.showflag = this.navParams.get("showflag");
  }

  ionViewDidLoad() {
  }
  getsecond() {
    var that = this;
    this.sendflag = false;
    var interval = setInterval(function () {
      if (that.second > 0) {
        that.second--
      } else {
        that.second = 60;
        that.sendflag = true;
        clearInterval(interval);
      }
    }, 1000);
  }

  /**获取验证码 */
  GetYZM() {
    if (this.phonenum == null || this.phonenum == "" || this.phonenum == undefined) {
      this.nativeService.showToast("请输入手机号码");
      return false;
    }
    this.getsecond();
    var Info = {
      Phone: this.phonenum,
      type: 2
    };
    var parameter = new Parameter();
    parameter.jyh = "1008";
    parameter.parm = JSON.stringify(Info);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.yzm2 = result.Msg;
        this.phone = this.phonenum;
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }

  resigiter() {
    if (this.phonenum == null || this.phonenum == "" || this.phonenum == undefined) {
      this.nativeService.showToast("请输入手机号码");
      return false;
    }
    if (this.phonenum != this.phone) {
      this.nativeService.showToast("请输入正确的手机号码");
      return false;
    }
    if (this.yzm == "" || this.yzm == null || this.yzm == undefined) {
      this.nativeService.showToast("请输入验证码");
      return false;
    }
    // if (this.yzm != this.yzm2) {
    //   this.nativeService.showToast("验证码输入错误");
    //   return false;
    // }
    if (this.password == "" || this.password == null || this.password == undefined) {
      this.nativeService.showToast("请输入重置的新密码");
      return false;
    }
    var userInfo = {
      Phone: this.phonenum,
      Pwd: this.password,
      code:this.yzm,
    }
    // //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1009";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code != 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        var address = [];
        var userinform = [];
        this.storage.get("userinfo").then(val => {
          if (val != null) {
            ////console.info(val)
            //address = val.address;
            userinform = result.Data;
            // { 'address': address, 'userinform': userinform }
            this.storage.set("userinfo",{ 'address': address, 'userinform': userinform }).then(val => {
              this.nativeService.showToast("重置密码成功");
              this.app.getRootNav().setRoot('TabsPage');
              this.viewCtrl.dismiss();
            });
          } else {

          }
        });
      }
    });
  }
  hidepage() {
    this.viewCtrl.dismiss();
  }
}
