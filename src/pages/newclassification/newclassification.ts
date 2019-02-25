import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parameter } from '../../model/Model';
import { NativeService } from './../../providers/NativeService';
import { HttpService } from './../../providers/HttpService';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the NewclassificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
   segment:'newclassification',
  // defaultHistory:['TabsPage']
})
@Component({
  selector: 'page-newclassification',
  templateUrl: 'newclassification.html',
})
export class NewclassificationPage {
  public categoryData = [];
  public categoryDetailData = [];
  public select = 0;
  public list1: any;
  public list2: any;
  public showList: any;
  public addressInfo = [];
  img = "assets/imgs/new/small.png";
  img9 = "assets/imgs/code.png";
  img10 = "assets/imgs/cheat.png";
  img11 = "assets/imgs/search.png";
  logo2 = "assets/imgs/logo_2.png";
  UID:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public httpservice: HttpService,
    private nativeService: NativeService,
    private storage: Storage, ) {
      var that=this;
    this.storage.get("userinfo").then(val => {
      if (val != null&&val.userinform) {
        this.addressInfo = val.address;
        this.UID = val.userinform.UID;
        wx.ready(function () {
          that.settle();
        });
      } else {
        this.UID = "88888";
        wx.ready(function () {
          that.settle();
        });
      }

    })
    
  }

  ionViewWillEnter() {
    //this.list1=[1,2,2,2,2,2,2,2,2,];
    // this.settle();
    //console.info("name>>>>>>>>");
  }
  ionViewDidLoad() {
    this.Initialization();

  }
  categoryLeftClick(item, index) {
    console.log("index" + index);
    this.list2 = item.childs;
    this.select = index;
  };
  startPage(index: number) {

  }
  goBack() {
    console.log('goBack');
  }
  gotogoodlist(id, BH, name) {
    this.navCtrl.push("GoodsListPage", {
      id: id,
      userinfo: this.addressInfo,
      BH: BH,
      name: name,
    })
  }
  Initialization() {
    var parameter = new Parameter();
    parameter.jyh = "1005";
    parameter.parm = "";
    this.nativeService.showLoading("获取中");
    this.httpservice.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.nativeService.hideLoading();
        this.list1 = result.Data;
        this.list2 = result.Data[0].childs;

        // this.gotoslide(this.num);
      } else {

      }

    })
  }
  gotosearch() {
    // //console.info("11")
    this.navCtrl.push("SearchPage");
  }
  GotoNitice() {
    this.navCtrl.push('NoticePage');
  }
  goshoplist() {
    this.navCtrl.push('ShopgoodscarPage');
  }
  settle() {
    // let url = location.href.split('#')[0];
    wx.onMenuShareAppMessage({
      title: '逛贝商城邀请您来逛逛',
      desc: '关注逛贝，惊喜不断！', // 分享描述
      // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
      // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
      link: 'https://www.lguangguang.com/mob/?login='+this.UID+'#/', // 分享链接
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
      link: 'https://www.lguangguang.com/mob/?login='+this.UID+'#/', // 分享链接
      imgUrl: "https://www.lguangguang.com/logo.png", // 分享图标
      success: function () {
        this.nativeService.showToast("分享成功");
      },
    })
  }
}
