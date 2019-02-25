import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parameter } from '../../model/Model';

@IonicPage()
@Component({
  selector: 'page-hot-plate',
  templateUrl: 'hot-plate.html',
})
export class HotPlatePage {
  typeList: any;
  userInfo: any;
  themeList:any;
  fatherType:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public nativeService: NativeService, public httpService: HttpService, public storage: Storage) {
    this.themeList = this.navParams.get("themeList");
    this.fatherType = this.navParams.get("type");
    ////console.info(this.themeList);
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        if (val.userinform.ID != "") {
          this.userInfo = val.userinform;
        }
      }
    });
  }
  ionViewDidLoad() {
    if(this.themeList==undefined){
      this.Load();
      this.fatherType=1
    }else{
      this.typeList=this.themeList;
    }
    
  }

  Load() {
    var parameter = new Parameter();
    parameter.jyh = "1081";
    parameter.parm = "";
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.typeList = result.Data;
      } else {
      }
    });
  }
  gotoperson(item: any) {
    //console.log(item);
    this.navCtrl.push("PersonHomepagePage", {
      type: item,
      fatherType:this.fatherType
    });
  }
  AddFollow(item) {
    if (this.userInfo == null) {
      this.navCtrl.push('LoginPage');
      return false;
    }
    var Info = {
      UserID: this.userInfo.ID,
      RelD: item.ID
    };
    var parameter = new Parameter();
    parameter.jyh = "1067";
    parameter.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.nativeService.showToast("添加关注成功");
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }
}
