import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavParams, Tabs, App, NavController } from 'ionic-angular';
import { Parameter } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { Storage } from '@ionic/storage';
import { Params } from '../../providers/params';
@IonicPage({
   
  }
)
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  @ViewChild('myTabs') tabs: Tabs;
  tab1Root = 'HomeNewPage';
  // tab2Root = 'ClassificationPage';
  tab2Root = 'NewclassificationPage';
  tab3Root = 'CommunityPage';
  tab4Root = 'GoodscarPage';
  tab5Root = 'PersonalPage';
  coverflag = true;
  showflag = false;
  adpic = "assets/imgs/temporary/adpic.png";
  flag: any;
  flag1: any;
  flag2: any;
  userInfo:any;
  num:any;
  public selectTabIndex = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App,
    // private nativeService: NativeService,
    private httpService: HttpService,
    private storage: Storage,
    public params: Params, ) {
      console.log('TabsPage');
    var tabId = this.navParams.get("tabId");
    console.log('TabsPage >tabId'+tabId);
    if (tabId != undefined && tabId != null) {
      this.selectTabIndex = tabId;
    } else {
      this.selectTabIndex = 0;
    }
   
  }
 
  ionViewWillEnter() {
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null&&val.userinform) {
        if (val.userinform.ID == "") {
          // this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.userInfo = val.userinform;
          this.getnum();
        }
      } else {
        // this.navCtrl.push("LoginPage",{showflag:true});
      }
    });
  }
  ionViewDidLoad() {

  }
  getnum() {//获取
    var userInfo = {
      UserID:this.userInfo.ID
    };
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1152";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.params.params=result.Data
      } else {

      }
    });
  }
}
