import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpService } from './../../providers/HttpService';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Parameter } from '../../model/Model';
import { NativeService } from './../../providers/NativeService';
//<reference path="../../provides/wechat.d.ts"/>
@IonicPage({
  //segment:'type'
})
@Component({
  selector: 'page-classification',
  templateUrl: 'classification.html',
})
export class ClassificationPage {
  @ViewChild('scrollcontent')
  lyScrollDiv: ElementRef;
  swiper: any;
  swiper2: any;
  num = 0;
  slideflag = true;
  height = 100;
  goodsItem = [];
  @ViewChild('slide2') slides2: Slides;
  @ViewChild('slide') slides: Slides;
  img9 = "assets/imgs/code.png";
  img10 = "assets/imgs/cheat.png";
  img11 = "assets/imgs/search.png";
  list1: any;
  list2: any;
  addressInfo = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public httpservice: HttpService,
    private nativeService: NativeService,
    private storage: Storage, ) {
    this.storage.get("userinfo").then(val => {
      if (val != null) {
        this.addressInfo = val.address;
      } else {

      }

    })
  }
  ionViewWillEnter() {
    //this.Initialization()
    ////console.info("是否真机"+this.nativeService.isMobile());
  }
  ionViewDidLoad() {
    this.height = (document.body.clientHeight - 50);
    //this.addlister()
    this.Initialization();

  }
  /* slideChanged() {
    let currentIndex = 0
    if (this.slides.getActiveIndex() == this.name.length) {
      currentIndex = (this.slides.getActiveIndex() - 1);
    } else {
      currentIndex = this.slides.getActiveIndex();
    }
    if (currentIndex > 9 && this.slideflag == true) {
      this.slides2.slideTo((currentIndex - 9), 500)
    } else if (currentIndex <= 9 && this.slideflag == true) {
      this.slides2.slideTo(0, 500)
    }
    this.num = currentIndex
    this.slideflag = true
  } */
  gotoslide(index) {
    /* let lyBg = this.lyScrollDiv.nativeElement;
    lyBg.scrollTop = this.height * index */
    //var ted=lyBg.ViewChild.offsetTop

    this.num = index;
    this.goodsItem = this.list2[index];
    /* //console.info(this.list2[index]) */


    //this.slideflag = false
  }
  /*  alert() {
     this.slides2.slideTo(5, 500)
     this.num = 5
   } */
  /*  addlister() {
     var that = this
     let lyBg = this.lyScrollDiv.nativeElement;
     lyBg.addEventListener('scroll', function () {
       var top = (lyBg.scrollTop + 50);
       var num = top / that.height
       num = Math.floor(num)
       that.slides2.slideTo(num, 500)
       that.num = num
     }, false);
   } */
  gotogoodlist(id, BH, name) {
    this.navCtrl.push("GoodsListPage", {
      id: id,
      userinfo: this.addressInfo,
      BH: BH,
      name: name,
    })
  }
  Initialization() {
    var parameter = new Parameter();
    parameter.jyh = "1005";
    parameter.parm = "";
    this.nativeService.showLoading("获取中");
    this.httpservice.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.nativeService.hideLoading();
        this.list1 = result.Data;
        this.list2 = result.Data2;
        console.log('type>Initialization> result.Data>'+result.Data);
        console.log('type>Initialization> result.Data2>'+result.Data2);
        this.gotoslide(this.num);
      }
      ////console.info(result);
    })
  }
  gotosearch() {
    // //console.info("11")
    this.navCtrl.push("SearchPage");
  }
  GotoNitice() {
    this.navCtrl.push('NewclassificationPage');
  }
  goshoplist() {
    this.navCtrl.push('ShopgoodscarPage');
  }
}
