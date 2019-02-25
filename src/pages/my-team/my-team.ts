import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter, Padding } from './../../model/Model';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';

/**
 * Generated class for the MyTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-team',
  templateUrl: 'my-team.html',
})
export class MyTeamPage {
  headimg="assets/imgs/grey1.png";
  img = "assets/imgs/jinru--hui.png"
  teamList: any;
  isshow = true;
  userID: any;
  fNum:number;
  sNum:number;
  sTotal:number;
  private padding = new Padding();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,
    public Inservice: InfiniteScrollService) {
    this.storage.get("userinfo").then(val => {

      if (val != "" && val != null) {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.userID = val.userinform.ID;
          this.getTeam();
        }
        // this.load2();
      } else {
        this.navCtrl.push("LoginPage",{showflag:true});
      }
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MyTeamPage');
  }
  getTeam() {
    var userInfo = {
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1149";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.teamList = result.Data;
        var msgText=result.Msg;
        //console.log('msgText>'+msgText);
        
        this.fNum=msgText.split(',')[0]*1;
        this.sNum=msgText.split(',')[1]*1;
       
        this.sTotal= this.fNum+ this.sNum;
        //console.log('sTotal>'+typeof(this.fNum));
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    /* infiniteScroll.enable(true); */
    this.nativeService.log('my-team', "运行了下拉加载");
    if (this.teamList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    //console.info(pageInfo);
    var parm = new Parameter();
    parm.jyh = "1149";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      console.log(newData);
        var msg = JSON.parse(newData.result);
        if(msg.Code=="1")
        {
          console.log("newData》"+newData);
          var newList: any;
          
          newList = msg.Data;
          var msgText=msg.Msg;
           this.fNum=parseInt(msgText.split(',')[0]);
           this.sNum=parseInt(msgText.split(',')[1]);
           this.sTotal=this.fNum + this.sNum;
           this.nativeService.log('my-team','sTotal>'+this.sTotal);
           console.log("msgText>"+msgText);
          if (newList != null || newList != undefined) {
            for (var i = 0; i < newList.length; i++) {
              this.teamList.push(newList[i]);
            }
          }
          if (newData.length < this.padding.pageSize) {
            this.isshow = false;
          }
          infiniteScroll.complete();
      }
      else{

      }
      //}, 1000);
    });
  }
  gotosecond(id:any,tNum:number){

    if(tNum>0)
    {
      this.navCtrl.push("MyTeamTwoPage",{aid:id});
    }
    else{
      //this.nativeService.showToast();
    }
  }
}
