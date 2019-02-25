import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,InfiniteScroll } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter, Padding } from './../../model/Model';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';

/**
 * Generated class for the DeliveryTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delivery-type',
  templateUrl: 'delivery-type.html',
})
export class DeliveryTypePage {
  img="assets/imgs/jinru--hui.png";
  switchNum=1;
  img9 = "assets/imgs/fanhui2.png";
  img11 = "assets/imgs/search.png";
  img4 = "assets/imgs/vhjekan.png";
  img5 = "assets/imgs/pinglun.png";
  message:any;
  dataList:any;
  ismsg=true;
  isscroll=true;
  private padding = new Padding();
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private httpService: HttpService,
     private nativeService: NativeService,
     //private storage: Storage,
     public Inservice: InfiniteScrollService,) {
  }

  ionViewDidLoad() {
  }
  gotopont(){
    this.navCtrl.push("DeliveryPontPage");
  }
  goback() {
    this.navCtrl.pop();
  }
  search(){
    var userInfo = {
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      Text:this.message,
    };
    // //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1125";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.dataList=result.Data;
        if(this.dataList.length==0){
          this.ismsg=false;
        }else{
          this.ismsg=true;
        }
      } else {

      }

    })
  }
  gotoinfo(item) {
    this.navCtrl.push('PersonalArticlePage', {
      ID: item.ID,
      type:1
    });
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    console.log("是否进入");
    if (this.dataList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isscroll = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      Text:this.message,
    };
    var parm = new Parameter();
    parm.jyh = "1125";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      setTimeout(() => {
        var newList: any;
        var msg = JSON.parse(newData.result);
        newList = msg.Data;
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.dataList.push(newList[i]);
            console.log(this.dataList);
          }
        }
        if (newData.length < this.padding.pageSize) {
          this.isscroll = false;
        }else{
          this.isscroll = true;
        }
        infiniteScroll.complete();
      }, 1000);
    });
  }
}
