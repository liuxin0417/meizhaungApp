import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,InfiniteScroll} from 'ionic-angular';
import { Parameter, Padding } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';
/**
 * Generated class for the MyTeamTwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-team-two',
  templateUrl: 'my-team-two.html',
})
export class MyTeamTwoPage {
  headimg="assets/imgs/grey1.png";
  img = "assets/imgs/jinru--hui.png"
  aid:any;
  teamList: any;
  isshow = true;
  private padding = new Padding();
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private httpService: HttpService,
    private nativeService: NativeService,
    public Inservice: InfiniteScrollService) {
    this.aid=navParams.get("aid");
    this.get2Team();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamTwoPage');
  }

  get2Team() {
    var userInfo = {
      UserID: this.aid,
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
        console.log('msgText>'+msgText);
        
       // this.fNum=msgText.split(',')[0]*1;
       // this.sNum=msgText.split(',')[1]*1;
       
        //this.sTotal= this.fNum+ this.sNum;
       // console.log('sTotal>'+typeof(this.fNum));
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    /* infiniteScroll.enable(true); */
    ////console.info("运行了下拉加载");
    if (this.teamList.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      UserID: this.aid,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    //console.info(pageInfo);
    var parm = new Parameter();
    parm.jyh = "1149";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      //setTimeout(() => {
        var msg = JSON.parse(newData.result);
        if(msg.Code=="1")
        {
          console.log("newData》"+newData);
          var newList: any;
          
          newList = msg.Data;
          var msgText=msg.Msg;
          // this.fNum=msgText.split(',')[0];
           //.sNum=msgText.split(',')[1];
//this.sTotal=this.fNum+this.sNum;
           console.log("msgText>"+msgText);
          if (newList != null || newList != undefined) {
            for (var i = 0; i < newList.length; i++) {
              this.teamList.push(newList[i]);
            }
          }
          if (msg.Data.length < this.padding.pageSize) {
            this.isshow = false;
          }
          infiniteScroll.complete();
      }
      else{

      }
      //}, 1000);
    });
  }  

}
