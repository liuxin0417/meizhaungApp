import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpService } from '../../providers/HttpService';
// import { NativeService } from '../../providers/NativeService';
import { Parameter } from '../../model/Model';

@IonicPage()
@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html',
})
export class ThemePage {
  publishType:number;
  TypeList: any;
  entercode="1081"
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private httpService: HttpService,
    /* private nativeService: NativeService, */ ) {
    this.publishType = this.navParams.get("type");
  }

  ionViewDidLoad() {
    if(this.publishType==1){
      this.entercode="1081";
    }else if(this.publishType==2){
      this.entercode="1075";
    }else if(this.publishType==3){
      this.entercode="1078";
    }
   // //console.info(this.entercode);
    this.Load();
  }

  Load() {
    var parameter = new Parameter();
    parameter.jyh = this.entercode;
    parameter.parm = "";
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(val => {
      var result = JSON.parse(val.result);
     // console.log(result);
      if (result.Code == 1) {
        this.TypeList = result.Data;
      }
    });
  }

  close(item) {
    this.viewCtrl.dismiss({
      TypeID: item.typebh
    });
  }



  
}
