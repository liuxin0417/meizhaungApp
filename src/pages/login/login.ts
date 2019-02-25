import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController } from 'ionic-angular';
import { Parameter } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';

@IonicPage({
  segment:'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  img = "assets/imgs/guanbi.png";
  phonenum: any;
  password: any;
  wxInfo: any;
  flag: any;
  flag1: any;
  flag2: any;
  tabindex = 0;
  adpic = "assets/imgs/temporary/adpic.png";
  showflag = false;
  showimg = false;
  popFlag = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private app: App,
    private storage: Storage,
    private modalCtrl: ModalController, ) {

   

      this.storage.get("userinfo").then(val => {

      if (val != null) {
        this.wxInfo = val;
      }
    });
    this.tabindex = this.navParams.get("tabindex");
    this.showflag = this.navParams.get("showflag");
    this.popFlag = this.navParams.get("popFlag");
    nativeService.log('LoginPage', 'this.showflag>'+this.showflag);
    nativeService.log('LoginPage', 'this.tabindex>'+this.tabindex);
    nativeService.log('LoginPage', 'this.popFlag>'+this.popFlag);
    if (this.showflag == true) {
      this.showimg = true;
    } else {
      this.showflag = true;
      this.showimg = true;
      
     // this.goWhere();
      // this.storage.get("startDate").then(val => {
      //   if (val == null || val == undefined || val == '') {
      //     var newdate = new Date().getTime();
      //     this.storage.set("startDate", newdate);
      //     this.showimg = true;
      //   } else {
      //     var nowTime = new Date();
      //     // var timeb=nowTime.getTime()-val.getTime();
      //     //console.info("时间开始" + val);
      //     //console.info("时间结束" + nowTime.getTime());
      //     //console.info("间隔时间" + ((nowTime.getTime() - val) / 1000 / 60 / 60))
      //     var betwn = ((nowTime.getTime() - val) / 1000 / 60 / 60);
      //     if (betwn > 9000) {
      //       this.storage.set("startDate", nowTime.getTime());
      //       this.showimg = true;
      //     } else {
      //       this.showimg = false;
      //     }
      //     this.goWhere();
      //     // this.storage.set("startDate", "");
      //   }
      // });

    }
  }
  ionViewWillEnter() {

  }
  ionViewDidLoad() {


  }
  goWhere() {
    
    if (this.showflag == true) {
      return
    }
    var arr3 = [];
    console.info("login page  goWhere")
    var href = location.href;
    var array = href.split('?');
    //console.info("tab>>>href" + href)
    this.flag = array[1];
    if (this.flag != undefined && this.flag != null) {
      var arr2 = [];
      arr2 = this.flag.split("=");
      this.flag1 = arr2[0];
      this.flag2 = arr2[1];
      //console.info("tab>>>true")
    } else {
      // this.showflag = true;
      if (this.showimg) {
        setTimeout(() => {
          this.app.getRootNav().setRoot('TabsPage');
        }, 2000);
      } else {
        this.app.getRootNav().setRoot('TabsPage');
      }

      //console.info("tab>>>false")
    }
    console.info(" login page this.flag1》》》》" + this.flag1);
    if (this.flag1 == "resigiter") {
      arr3 = [];
      //console.info("tab>>>去注册页")
      arr3 = this.flag2.split("&")
      this.flag2 = arr3[0].split("#")[0].trim();
      //  this.flag2 = arr3[0].replace("#/", '').trim();
      this.app.getRootNav().setRoot('ResigiterPage', {
        tabId: this.flag2
      });
    } else if (this.flag1 == "login") {
      // this.showflag = true;
      arr3 = [];
      //console.info("tab>>>首页")
      arr3 = this.flag2.split("&")
      this.flag2 = arr3[0].split("#")[0].trim();
      this.storage.set("UID", this.flag2);
      this.app.getRootNav().setRoot('TabsPage', {
        tabId: 0
      });
    } else if (this.flag1 == "goodsDetail") {
      arr3 = [];
      arr3 = this.flag2.split("&")
      var flag2 = arr3[0].split("#")[0].trim();
      this.flag2 = flag2.split("UID:")[0];
      var UID = flag2.split("UID:")[1];
      //console.info("uid>>>>>>>>>>>>>>>>>>>>" + UID)
      this.storage.set("UID", UID);
      this.app.getRootNav().setRoot('GoodDetailPage', {
        goodsid: this.flag2,
      });

    } else if (this.flag1 == "shopIndex") {
      arr3 = [];
      arr3 = this.flag2.split("&")
      this.flag2 = arr3[0].split("#")[0].trim();
      //console.info("shopID>>>>>" + this.flag2)
      this.app.getRootNav().setRoot('ShopIndexPage', {
        ShopID: this.flag2,
      });
    } else {
      this.app.getRootNav().setRoot('TabsPage');
    }
  }
  gotoresgiter() {
    // this.navCtrl.push("ResigiterPage");
    let modal = this.modalCtrl.create('ResigiterPage', {
      showflag: true
    });
    modal.present();
  }
  gotoreset() {
    // this.navCtrl.push("ForgotPasswordPage");
    let modal = this.modalCtrl.create('ForgotPasswordPage', {
      showflag: true
    });
    modal.present();
  }
  login() {
    this.nativeService.log('LoginPage', 'login come');
    if (this.phonenum == "") {
      this.nativeService.showToast("手机号码号码不能为空");
      return;
    } else {
      var phonenum = this.phonenum.toString();
      if (phonenum.length != 11) {
        this.nativeService.showToast("请输入正确手机号");
        return;
      }
    }
    if (this.password == undefined || this.password == undefined || this.password == "") {
      this.nativeService.showToast("请输入密码");
      return;
    }
    var userInfo = {
      LoginName: this.phonenum,
      Pwd: this.password,
      openId: this.wxInfo != null ? this.wxInfo.openId : "",
      nickName: this.wxInfo != null ? this.wxInfo.nickName : "",
      HeadUrl: this.wxInfo != null ? this.wxInfo.HeadUrl : ""

    }
    var parameter = new Parameter();
    parameter.jyh = "1001";
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
        var userinform: any;
        result.Data.FranchiseeID = 1
        userinform = result.Data;
        //console.info(userinform);
        
        this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(val => {
          this.nativeService.log('LoginPage', 'login back set root>'+this.tabindex);
            //this.navCtrl.remove(0, this.navCtrl.length() - 1);
            //this.navCtrl.insert(0, 'TabsPage',{tabId: this.tabindex});
            this.navCtrl.pop();
            // //================

            // this.nativeService.log('LoginPage', 'login back set root>'+this.tabindex);
            // this.app.getRootNav().push('TabsPage', {
            //   tabId: 0
            // });
          // if (this.popFlag) {
          //   this.nativeService.log('LoginPage', 'login back pop>'+this.tabindex);
          //   this.navCtrl.pop();

          // } else {
          //   this.nativeService.log('LoginPage', 'login back set root>'+this.tabindex);
          //   this.app.getRootNav().push('TabsPage', {
          //     tabId: 0
          //   });
          //   // this.navCtrl.remove(0, this.navCtrl.length() - 1);
          //   // this.navCtrl.insert(0, 'TabsPage',{tabId: this.tabindex});
          //   // this.navCtrl.pop();
          
          // }

        });


      }

    })
  }
  gotohome() {
    // this.navCtrl.remove(0, this.navCtrl.length() - 1);
    // this.navCtrl.insert(0, 'TabsPage',{tabId: 0});
    // this.navCtrl.pop();
    //好用 但会tab面会改变
    // this.navCtrl.setRoot('TabsPage', {
    //   tabId: 0
    // });
    //可用
    // this.navCtrl.push('TabsPage', {
    //     tabId: 0
    //   });

    //不好用
    // this.app.getRootNav().setRoot('TabsPage', {
    //   tabId: 0
    // });
    //this.app.getRootNav()._linker._history=[];
    //this.app.getRootNav()._linker._history=[];
    //let a= NavOptions();
    //this.navCtrl.push('TabsPage', {tabId:0});
    this.app.getRootNav().setRoot('TabsPage');
    //this.app.getRootNav().getRootNav()._linker._history=[];
    //this.navCtrl.popToRoot();
        // this.app.getRootNavs()[0].setRoot(LoginPage);
    this.nativeService.log('LoginPage', 'gotohome >'+this.tabindex);
    this.nativeService.log('LoginPage', 'his.app.getRootNavs()[0] >'+this.app.getRootNavs().length);
    this.nativeService.log('LoginPage', 'this.app.getActiveNav()>'+this.app.getActiveNav().id);
 //this.app.getRootNav()._linker._history
    
    // this.app.getActiveNav().setRoot('TabsPage', {
    //   tabId: 0
    // });
    //var nav_tmp= this.app.getRootNavById('n4');
    
    //以下无效
    // this.app.getRootNavs()[0].setRoot('TabsPage', {
    //   tabId: 0
    // });

    // this.navCtrl=this.app.getRootNavs()[0];
    //    this.app.getRootNavs()[0].setRoot('TabsPage', {
    //   tabId: 0
    // });
  }
}
