import { NativeService } from './../../providers/NativeService';
import { HttpService } from './../../providers/HttpService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Parameter } from '../../model/Model';

@IonicPage()
@Component({
  selector: 'page-concerner-list',
  templateUrl: 'concerner-list.html',
})
export class ConcernerListPage {
  ArticleID: string;
  List = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService: HttpService,
    public nativeService: NativeService) {
    this.ArticleID = this.navParams.get("ArticleID");
    this.Load();
  }

  ionViewDidLoad() {
  }
  Load() {
    var userInfo = {
      ArticleID: this.ArticleID,
    };
    var parameter = new Parameter();
    parameter.jyh = "1086";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.log(result);
      if (result.Code == "1") {
        this.List = result.Data;
      } else {
      }
    });
  }
}
