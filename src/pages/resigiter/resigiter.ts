import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController } from 'ionic-angular';
import { Parameter } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-resigiter',
  templateUrl: 'resigiter.html',
})
export class ResigiterPage {
  second = 60;
  sendflag = true;
  phonenum: any;
  password: any;
  wxInfo: any;
  phone = "";
  yzm = "";
  yzm2 = "";
  yqm = "";
  showtype = 1;
  flag: any;
  flag1: any;
  flag2: any;
  UID: any;
  img3 = "assets/imgs/close.png";
  codeflag = false;
  showflag = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private app: App,
    private viewCtrl: ViewController,
    private storage: Storage, ) {
    //console.info("注册页")
    this.yqm = this.navParams.get("tabId");
    this.showflag = this.navParams.get("showflag");
    this.storage.get("userinfo").then(val => {
      if (val != null) {
        this.wxInfo = val.userinform;
        this.nativeService.log('register', 'constructor>wxInfo>' + JSON.stringify(this.wxInfo));
        this.nativeService.log('register', 'constructor>wxInfo a>' + (this.wxInfo.ID != null && this.wxInfo.ID != ""));
        if (this.wxInfo.ID != null && this.wxInfo.ID != "") {
          this.codeflag = true;
        }
        else{
          this.codeflag = true;
        }
      } else {
        this.codeflag = true;
      }
    });
    // this.storage.get("codeflag").then(val => {
    //   if (val != null) {
    //     this.codeflag = val;
    //   } else {

    //   }
    // });
    this.storage.get("UID").then(val => {
      if (val != null) {
        this.UID = val;
        this.yqm = this.UID;
      } else {
      }
    });
  }
  ionViewWillEnter() {

  }
  ionViewDidLoad() {

  }

  hidepage() {
    this.viewCtrl.dismiss();
  }
  getsecond() {
    var that = this;
    this.sendflag = false;
    var interval = setInterval(function () {
      if (that.second > 0) {
        that.second--;
      } else {
        that.second = 60;
        that.sendflag = true;
        clearInterval(interval);
      }
    }, 1000);
  }

  GetYZM() {
    if (this.phonenum == null || this.phonenum == "" || this.phonenum == undefined) {
      this.nativeService.showToast("请输入手机号码");
      return false;
    }
    var Info = {
      Phone: this.phonenum,
      type: 1
    };
    var parameter = new Parameter();
    parameter.jyh = "1008";
    parameter.parm = JSON.stringify(Info);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        // this.yzm2 = result.Msg;
        this.phone = this.phonenum;
        this.getsecond();
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }


  resigiter() {
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (this.phonenum == null && this.phonenum == "" && this.phonenum == undefined) {
      this.nativeService.showToast("请输入手机号码");
      return false;
    }

    if (this.phonenum != this.phone && !myreg.test(this.phonenum)) {
      this.nativeService.showToast("请输入正确的手机号码");
      return false;
    }
    this.nativeService.log('register','resigiter wxInfo>'+this.wxInfo);
    if(this.wxInfo!=null)
    {
      this.nativeService.log('register','resigiter wxInfo!=null>'+JSON.stringify(this.wxInfo));
      this.nativeService.log('register','resigiter wxInfo!=null>'+this.wxInfo.openId);
    }
    //val.userinform.ID
    var userInfo = {
      LoginName: this.phonenum,
      Pwd: this.password,
      openId: this.wxInfo != null ? this.wxInfo.openId : "",
      nickName: this.wxInfo != null ? this.wxInfo.nickName : "",
      HeadUrl: this.wxInfo != null ? this.wxInfo.HeadUrl : "",
      code: this.yzm,
      UID: this.yqm,
    }
    var parameter = new Parameter();
    parameter.jyh = "1000";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      // //console.info(result);
      if (result.Code != 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        var address = [];
        var userinform = [];
        this.storage.get("userinfo").then(val => {



          userinform = result.Data;
          this.storage.set("userinfo", { 'userinform': userinform }).then(val => {
            this.nativeService.log('register', 'resigiter》storage.val("userinfo")》' + JSON.stringify(val));
            this.nativeService.showToast("注册成功");
            this.app.getRootNav().setRoot('TabsPage');
            this.viewCtrl.dismiss();
          });

        });
      }
    });
  }
  AutoWx() {
    this.httpService.post("/MobService/AutoWx", { "data": "resigiter=" + this.yqm }).map(res => res.json()).subscribe(result => {
      // var info = JSON.parse(result.Data);
      var info = result.Data;
      //console.info(result);
      if (result.Code == "1") {
        // var info = JSON.parse(result.Data);
        this.storage.set("wxInfo", info);
        this.wxInfo = info;
      } else if (result.Code == "3") {
        // console.log(result.Data);
        window.location.href = result.Data;
      } else if (result.Code == "2") {
        this.storage.set("wxInfo", info);
        this.wxInfo = info;
        var address = [];
        var userinform = [];
        this.storage.get("userinfo").then(val => {
          if (val != null) {
            address = val.address;
            userinform = result.Data;
            this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(val => {
              // this.app.getRootNav().setRoot('LoginPage');
            });
          } else {

          }
        })
      }
    });
  }
  gotoroot() {
    this.app.getRootNav().setRoot('TabsPage');
    this.viewCtrl.dismiss();
  }
}
