import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
import { CityPickerService } from "./../../providers/CityPicker";
import { DomSanitizer } from '@angular/platform-browser';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {
  itemcolor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  switch = 3;
  img = "assets/imgs/temporary/logo.png";
  type1 = [];
  type2 = [];
  data1: any;
  data2: any;
  list = [];
  userID: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    public cityPickerSev: CityPickerService,
    private storage: Storage,
    public sanitizer: DomSanitizer) {
    this.storage.get("userinfo").then(val => {
      if (val != null) {
        ////console.info(val);
        this.userID = val.userinform.ID,
          //console.log(this.userID);
          this.getnew();
      }
      else {

      }
    });
  }
  ionViewDidLoad() {
    this.load();
  }
  getnew() {
    var userInfo = {
      UserID: this.userID,
    };
    var parameter = new Parameter();
    parameter.jyh = "1092";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.list = result.Data;
        //console.log(this.list);
      } else {

      }
    })

  }
  load() {
    // //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1015";
    parameter.parm = "";
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result);
      if (result.Code != 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        this.type1 = result.Data;
        this.type2 = result.Data2;
      }
    })
  }
  getlist(ID) {
    this.navCtrl.push("NoticeDetailPage", {
      itemID: ID,
    })
  }
  newdetail(item) {
    this.navCtrl.push("ChatPage", {
      proid: item.proID,
      name: item.Name,
      picurl: item.Url,
    })
  }




  splice(item) {
   // item = "2017-11-15T16:52:54.637";
    return item.split("T")[0];
  }

  assembleHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }

}
