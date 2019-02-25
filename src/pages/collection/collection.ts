import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,InfiniteScroll } from 'ionic-angular';
import { NativeService } from './../../providers/NativeService';
import { Parameter, Padding } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';
/**
 * Generated class for the CollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html',
})
export class CollectionPage {
  img = "assets/imgs/temporary/logo.png";
  list = [];
  img2 = "assets/imgs/DIANPU.png";
  img3 = "assets/imgs/gouwuche.png";
  img4 = "assets/imgs/search.png";
  img5="assets/imgs/DIANPU.png";
  img6="assets/imgs/vhjekan.png";
  indexnum = "0";
  userID: any;
  private padding = new Padding();
  private isshow = true;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    //private storage: Storage,
    public Inservice: InfiniteScrollService , ) {
    this.userID = this.navParams.get("userID");
    this.load();
  }

  ionViewDidLoad() {
    
  }
  gotogoodscar() {
    this.navCtrl.push("GoodscarPage", {
      type: 1,
    });
  }
  load() {
    var userInfo = {
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    //console.log(userInfo)
    ////console.info(userInfo)
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1021";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
     //console.info(result)
      if (result.Code == 1) {
        //this.nativeService.showToast(result.Msg);
        this.list = result.Data;
      } else {
        this.nativeService.showToast(result.Msg);

      }

    })
  }
  //删除收藏
  delete( ID, index) {
    var userInfo = {
      Userid: this.userID,
      FranchiseeID:"",
      goodsID: ID,
    };
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1020";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result)
      if (result.Code == 1) {
        this.nativeService.showToast(result.Msg);
        this.list.splice(index, 1);
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  //跳转
  gotodetail(id){
    this.navCtrl.push("GoodDetailPage",{
      goodsid:id,
    })
  }
  slice(string){
    return string.slice(0,15)+"...";
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    /* infiniteScroll.enable(true); */
    ////console.info("运行了下拉加载");
    if (this.list.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
    };
    var parm = new Parameter();
    parm.jyh = "1021";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      setTimeout(() => {
        var newList: any;
        var msg = JSON.parse(newData.result);
        newList = msg.Data;
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.list.push(newList[i]);
          }
        }
        if (newData.length < this.padding.pageSize) {
          this.isshow = false;
        }
        infiniteScroll.complete();
      }, 1000);
    });
  }
}
