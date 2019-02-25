import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,InfiniteScroll,ModalController } from 'ionic-angular';
import { Parameter,Padding} from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';


@IonicPage()
@Component({
  selector: 'page-judege',
  templateUrl: 'judege.html',
})
export class JudegePage {
  img="assets/imgs/temporary/logo.png";
  img2="assets/imgs/shoucang2.png";
  img3="assets/imgs/temporary/thing.jpg";
  img5="assets/imgs/zan.png";
  commentlist=[];
  goodsid:any;
  isscroll = true;
  private padding = new Padding();
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     //private storage: Storage,
     private httpService: HttpService,
     private nativeService: NativeService,
     public Inservice: InfiniteScrollService,
     private modalCtrl: ModalController, ) {
    this.goodsid = navParams.get("goodID");
    this.login();
    
  }

  ionViewDidLoad() {
    
  }
  login() {
    this.isscroll = true;
    var userInfo = {
      ProID: this.goodsid,
      ipageStart: this.padding.ipageStart,
      pageSize:this.padding.pageSize,
    }
    ////console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1023";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.commentlist=result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  json(item){
    return   JSON.parse(item);
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    if (this.commentlist.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isscroll = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      ProID: this.goodsid,
      ipageStart: this.padding.ipageStart,
      pageSize:this.padding.pageSize,
    };
    var parm = new Parameter();
    parm.jyh = "1023";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      setTimeout(() => {
        var newList: any;
        var msg = JSON.parse(newData.result);
        newList = msg.Data;
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.commentlist.push(newList[i]);
            console.log(this.commentlist);
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
  gotoslideImg(slide,slide2){
    let modal = this.modalCtrl.create('SlideImgPage',{
      slide:slide,
     /*  slide2:slide2, */
    });
    modal.present();
  }
}
