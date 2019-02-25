import { NativeService } from './../../providers/NativeService';
//import { Utils } from './../../providers/Utils';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { Parameter } from './../../model/Model';


@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  img = "assets/imgs/shezhi.png";
  img2 = "assets/imgs/new/xiaoxi.png";
  img3 = "assets/imgs/new/defaultH.png";
  img4 = "assets/imgs/jinru--hui.png";
  img4Bai = "assets/imgs/jinru--bai.png"
  img5 = "assets/imgs/new/daufukuan.png";
  img6 = "assets/imgs/new/daifahuo.png";
  img7 = "assets/imgs/new/daipingjia.png";
  img8 = "assets/imgs/new/tuihuan.png";
  huodong = "assets/imgs/new/huodong.png";
  qiandao = "assets/imgs/new/shequ.png";
  kefu = "assets/imgs/new/kefu.png";
  zhushou = "assets/imgs/new/gouwuzhoushou.png";
  img9 = "assets/imgs/zican.png";
  img10 = "assets/imgs/shoucang.png";
  img11 = "assets/imgs/dizhi.png";
  img12 = "assets/imgs/more.png";
  img13 = "assets/imgs/quanzi.png";
  lv1 = "assets/imgs/new/lv1.png";
  lv2 = "assets/imgs/new/lv2.png";
  lv3 = "assets/imgs/new/lv3.png";
  lv4 = "assets/imgs/new/lv4.png";
  moneybag='assets/imgs/moneybag.png'
  tixianlog='assets/imgs/tixianlog.png'
  tixian='assets/imgs/tixian.png'
  userinfo = [];
  userID: any;
  usermsg = [];
  wedID: any;
  advpic: any;
  UID:any;
  private isopen = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage) {
   
    this.nativeService.log('PersonalPage','constructor');
  }
  ionViewWillEnter() {
    var that=this;
    this.nativeService.log('PersonalPage','ionViewWillEnter');
    this.storage.get("userinfo").then(val => {
      this.nativeService.log('PersonalPage','storage.get("userinfo") back');
      this.nativeService.log('PersonalPage','val>'+val);
      if (val != "" && val != null&&val.userinform) {
        this.nativeService.log('PersonalPage','val is null>'+JSON.stringify(val));
        this.wedID = "";
        this.UID = val.userinform.UID;
        //this.settle();
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage", { showflag: true,tabindex:3,popFlag:true});
        } else {
          this.userID = val.userinform.ID;
          this.userinfo = val.userinform;
          //console.info(this.userinfo);
          this.load();
        }
        // this.load2();
      } else {
        this.UID = "88888";
       // this.nativeService.log('PersonalPage','val>'+val);
        this.navCtrl.push("LoginPage", { showflag: true ,tabindex:3,popFlag:true});
      }
    });
    wx.ready(function () {
      that.settle();
    });
    // this.load3();
  }
  ionViewDidLoad() {
    this.nativeService.log('PersonalPage','ionViewDidLoad');
  }
  load() {
    var userInfo = {
      UserID: this.userID,
    }
    var parameter = new Parameter();
    parameter.jyh = "1048";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.usermsg = result.Data;
        // this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  load2() {
    var userInfo = {
      wedID: this.wedID,
    }
    var parameter = new Parameter();
    parameter.jyh = "1049";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      console.log(result);
      if (result.Code == 1) {
        this.advpic = result.Data;
        // this.nativeService.showToast(result.Msg);
      } else {
        // this.nativeService.showToast(result.Msg);
      }

    })
  }
  gotoOrderList(num) {
    this.navCtrl.push("OrderListPage", {
      type: num,
    })
  }
  gotoinform() {
    this.navCtrl.push("PersionalInformPage", {
      userinfo: this.userinfo,
    })
  }
  gotosetup() {
    this.navCtrl.push("SetUpPage");
  }
  gotowallet() {
    // this.navCtrl.push("MyWalletPage");
    this.navCtrl.push("CouponPage");
  }
  gotoaddress() {
    this.navCtrl.push("AddressPage");
  }
  gotocollection() {
    this.navCtrl.push("CollectionPage", {
      userID: this.userID,
    });
  }
  ReturnGoodsPage() {
    this.navCtrl.push("ReturnGoodsPage");
  }
  GotoNitice() {
    this.navCtrl.push('NoticePage');
  }
  MyCommunityPage() {
    this.navCtrl.push("MyCommunityPage", {
      usertype: 1
    });
  }
  gotoSeenList() {
    this.navCtrl.push("SeenListPage")
  }
  gototeam() {
    this.navCtrl.push("MyTeamPage")
  }
  follow() {
    this.navCtrl.push("FollowPage", {
      userID: this.userID,
    });
  }
  gotocash(){
    this.navCtrl.push("CashPage");
  }
  gotomoney(){
    this.navCtrl.push("MoneyInOutPage")
  }
  gotostock(){
    this.navCtrl.push("StockManagePage")
  }
  gotoSyls(){
    this.navCtrl.push("IncomePage")
  }
  /*获取开关*/
  load3() {
    var parameter = new Parameter();
    parameter.jyh = "1133";
    parameter.parm = "";
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.isopen = result.Data.Value;
        this.isopen = 1;
        console.log(this.isopen);
      } else {
        this.isopen = 1;
        //console.error(this.isopen);
      }
    });
  }
  settle() {
    // let url = location.href.split('#')[0];
    wx.onMenuShareAppMessage({
      title: '逛贝商城邀请您来逛逛',
      desc: '关注逛贝，惊喜不断！', // 分享描述
      // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
      // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
      link: 'https://www.lguangguang.com/mob/?'+this.UID+'=defult#/', // 分享链接
      imgUrl: "https://www.lguangguang.com/logo.png", // 分享图标
      // imgUrl: this.icon, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        this.nativeService.showToast("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    wx.onMenuShareTimeline({
      title: '逛贝商城邀请您来逛逛', // 分享标题
      link: 'https://www.lguangguang.com/mob/?'+this.UID+'=defult#/', // 分享链接
      imgUrl: "https://www.lguangguang.com/logo.png", // 分享图标
      success: function () {
        this.nativeService.showToast("分享成功");
      },
    })
  }
}
