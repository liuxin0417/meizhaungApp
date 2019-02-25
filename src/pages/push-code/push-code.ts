import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parameter } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { Storage } from '@ionic/storage';
import { NativeService } from './../../providers/NativeService';
/**
 * Generated class for the PushCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-push-code',
  templateUrl: 'push-code.html',
})
export class PushCodePage {
  userID:any;
  img1="assets/imgs/pushcode1.png";
  img2="assets/imgs/pushcode2.png";
  popimg="assets/imgs/fanhui.png";
  gowhere="assets/imgs/gowhere.png"
  btnimg = "assets/imgs/share2.png";
  pngflag = false;
  codeMsg:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,) {
      this.nativeService.log('push-code','constructor')
      
  }

  ionViewWillEnter() {
    this.nativeService.log('push-code','ionViewWillEnter')
    this.storage.get("userinfo").then(val => {
      //console.info(val)
      if (val != "" && val != null&&val.userinform) {
        if (val.userinform.ID == "") {
          this.nativeService.log('push-code','constructor  val.userinform.ID == ""')
          this.navCtrl.push("LoginPage",{showflag:true,tabindex:1,popFlag:true});
        } else {
          this.userID = val.userinform.ID;
          this.getcode()
        }
      } else {
        this.nativeService.log('push-code','constructor  val != "" && val != null&&val.userinform')
        this.navCtrl.push("LoginPage",{showflag:true,tabindex:1,popFlag:true});
      }
    });
  }
  
  getcode() {
    var userInfo = {
      UserID:this.userID 
    }
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1144";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == "1") {
        this.codeMsg=result.Data;
        this.settle();
      }else{
        this.nativeService.showToast(result.Msg);
      }
    })
  }
  settle() {
    // let url = location.href.split('#')[0];
    let that=this;
    wx.onMenuShareAppMessage({
      title:'逛贝邀请您注册',
      desc:'关注逛贝，惊喜不断！', // 分享描述
      // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
      // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
      link: 'https://www.lguangguang.com/mob/?resigiter=' + this.codeMsg.UID + '#/', // 分享链接
      imgUrl: "https://www.lguangguang.com/logo.png", // 分享图标
      // imgUrl: this.icon, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        that.nativeService.showToast("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    wx.onMenuShareTimeline({
      title:'逛贝邀请您注册',
      link: 'https://www.lguangguang.com/mob/?resigiter=' + this.codeMsg.UID + '#/', // 分享链接
      imgUrl: "https://www.lguangguang.com/logo.png", // 分享图标
      success: function () {
        this.nativeService.showToast("分享成功");
      },
    })
  }
  gopop(){
    this.navCtrl.pop();
  }
  sharecode(){
    this.pngflag = true;
  }
  hide() {
    this.pngflag = false;
  }
}
