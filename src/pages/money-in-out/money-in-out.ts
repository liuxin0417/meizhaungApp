import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,InfiniteScroll } from 'ionic-angular';
import { HttpService } from '../../providers/HttpService';
import { NativeService } from '../../providers/NativeService';
import { Storage } from '@ionic/storage';
import { UserInfo, Parameter, Padding } from '../../model/Model';
import { InfiniteScrollService } from '../../providers/InfiniteScrollService';

/**
 * Generated class for the MoneyInOutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-money-in-out',
  templateUrl: 'money-in-out.html',
})
export class MoneyInOutPage {
  goto = "assets/imgs/jinru--hui.png";
  private userID = "";
  userInfo:any;
  private list=[];
  private isshow = true;
  private padding = new Padding();
  constructor(public navCtrl: NavController, public navParams: NavParams, private httpService: HttpService,
    private nativeService: NativeService, public storage: Storage,public Inservice: InfiniteScrollService) {
      this.storage.get("userinfo").then(val => {

        if (val != "" && val != null) {
          if (val.userinform.ID == "") {
            this.navCtrl.push("LoginPage",{showflag:true});
          } else {
            this.userID = val.userinform.ID;
            this.getUserCashList(null);
          }
          // this.load2();
        } else {
          this.navCtrl.push("LoginPage",{showflag:true});
        }
      });
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad MoneyInOutPage');
  }

  getUserCashList(backfun)
  {
    var userInfo = {
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize
    };
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "2003";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        var newList=result.Data;
        console.info(newList)
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.list.push(newList[i]);
          }
        }
        if (newList.length < this.padding.pageSize) {
          this.isshow = false;
        }
        if(backfun!=null ||backfun != undefined )
        {
          backfun();
        }

      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }

  doInfinite(infiniteScroll: InfiniteScroll) {
    /* infiniteScroll.enable(true); */
    console.info("运行了下拉加载");
    if (this.list.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    this.getUserCashList(function(){
      infiniteScroll.complete();
    });
    
  }
  
}
