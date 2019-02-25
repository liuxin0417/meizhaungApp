import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
import { CityPickerService } from "./../../providers/CityPicker";
import { AlertController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the NoticeDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice-detail',
  templateUrl: 'notice-detail.html',
})
export class NoticeDetailPage {
  data1:any;
  data2:any;
  itemId:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    public cityPickerSev: CityPickerService,
     public sanitizer:DomSanitizer) {
      this.itemId=this.navParams.get("itemID");
      this.getlist();
  }

  ionViewDidLoad() {
  }
  getlist() {
    var userInfo = {
      ID:this.itemId,
    }
    var parameter = new Parameter();
    parameter.jyh = "1016";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result);
      this.data1=result.Data[0].XDetail;
      this.data2 = this.nativeService.assembleHTML(this.data1);
     
    })
  }
  assembleHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }

}
