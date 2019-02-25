import { NativeService } from './../../providers/NativeService';
import { HttpService } from './../../providers/HttpService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parameter } from '../../model/Model';

@IonicPage()
@Component({
  selector: 'page-logistics-info',
  templateUrl: 'logistics-info.html',
})
export class LogisticsInfoPage {

  private Info: any;
  private logInfo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService: HttpService,
    public nativeService: NativeService) {
    this.Info = this.navParams.get("Info");

    this.GetInfo();
  }

  ionViewDidLoad() {

  }
  /**获取物流信息 */
  GetInfo() {
    var userInfo = {
      OrderID: this.Info.ID,
    }
    ////console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1153";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.logInfo = result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
}
