import { TimerDownService } from './../../providers/TimerDownService';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Parameter, ProductAttr } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { ActionSheetController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-seckill',
  templateUrl: 'seckill.html',
})
export class SeckillPage {
  @ViewChild('lyScroll')
  lyScrollDiv: ElementRef;
  @ViewChild('btnBackTop')
  bBackTop: ElementRef;
  @ViewChild('navbar')
  navbar: ElementRef;
  @ViewChild('btn1')
  btn1: ElementRef;
  @ViewChild('btn2')
  btn2: ElementRef;
  @ViewChild(Slides) slides: Slides;
  img = "assets/imgs/jinru--hui.png";
  img2 = "assets/imgs/shoucang2.png";
  img3 = "assets/imgs/gouwuche.png";
  img4 = "assets/imgs/zhici.png";
  img5 = "assets/imgs/shoucang3.png";
  img6 = "assets/imgs/liuyan.png";
  switchnum = true;
  opcity = 0;
  userID: any;
  FhId: any;
  Fh: any;
  goodsid: any;
  slide = [];
  msg = [];
  attr: any;
  des: any;
  goodsinfo: any;
  //地址信息
  flag = false;
  flagsecond = false;
  addresList = [];
  defaultAddress: any;
  //物品类型
  goodstype = false;
  goodsshow = false;
  //属性
  shoacngflag = true;
  desflag = true;
  ProductAttr = new ProductAttr();
  //评论
  commite: any;
  rate = "";
  guige = "选择规格";
  proBH: any;
  name: any;
  picurl: any;
  slideindex = 0;
  private EndDate: Date;
  private seckInfo: any;//传递过来的参数
  private seckproduct: any;//商品信息
  private seck: any;//活动
  private timer = new TimerDownService();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private storage: Storage,
    private httpService: HttpService,
    private nativeService: NativeService,
    public actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController, ) {
    this.goodsid = "0f29a444-9e49-4ba5-ac1d-52b9fc3afef2";
    this.seckInfo = this.navParams.get("seckInfo");
    this.storage.get("userinfo").then(val => {
      if (val != null) {
        this.userID = val.userinform.ID;
        this.Fh = val.address.FranchiseeID;
        this.login();
      } else {

      }
      this.collect();
    })
  }

  ionViewDidLoad() {
    this.goTop();
  }
  slideChanged() {
    if (this.slides.getActiveIndex() == this.slides.length()) {
      this.slideindex = this.slides.getActiveIndex() - 1
    } else {
      this.slideindex = this.slides.getActiveIndex()
    }
  }
  switch(flag) {
    this.switchnum = flag;
  }
  goback() {
    this.app.goBack();
  }
  gotochat() {
    this.navCtrl.push("ChatPage", {
      proid: this.goodsid,
      name: this.name,
      picurl: this.slide[0].Url,
    })
  }
  private goTop() {
    let lyBg = this.lyScrollDiv.nativeElement;
    let navbar = this.navbar.nativeElement;
    let btn1 = this.btn1.nativeElement;
    let btn2 = this.btn2.nativeElement;
    lyBg.addEventListener('scroll', function () {
      var top = lyBg.scrollTop;
      var num = top / 300
      if (num <= 1) {
        this.opcity = num;
      } else {
        this.opcity = 1;
      }
      navbar.style.opacity = this.opcity;
      btn1.style.opacity = (1 - (this.opcity * 2));
      btn2.style.opacity = (1 - (this.opcity * 2));
    }, false);
  }
  gotojudge() {
    this.navCtrl.push("JudegePage", {
      goodID: this.goodsid,
    });
  }
  //取两位小数
  gettwo(num) {
    return num.toFixed(2);
  }
  gotogoodscar() {
    if (this.userID == "") {
      this.nativeService.showToast("请先登录");
      return;
    } else {
      this.navCtrl.push("GoodscarPage", {
        type: 1,
      })
    }

  }
  //图片浏览
  gotoslideImg(slide) {
    let modal = this.modalCtrl.create('SlideImgPage', {
      slide: slide,
      slideindex: this.slideindex,
    });
    modal.present();
  }
  gotoslideImg2(item) {
    var arr = [];
    for (var a = 0; a < item.length; a++) {
      arr.push(item[a].Url)
    }
    let modal = this.modalCtrl.create('SlideImgPage', {
      slide: arr,
    });
    modal.present();
  };
  //收藏商品
  collection() {
    if (this.userID == "") {
      this.nativeService.showToast("收藏失败，请先登录");
      return
    } else {
      var userInfo = {
        Userid: this.userID,
        FranchiseeID: this.Fh,
        goodsID: this.goodsid,
      }
      var parameter = new Parameter();
      parameter.jyh = "1019";
      parameter.parm = JSON.stringify(userInfo);
      this.nativeService.showLoading("获取中");
      this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
        this.nativeService.hideLoading();
        var result = JSON.parse(res.result);
        if (result.Code == 1) {
          this.nativeService.showToast(result.Msg);
          this.shoacngflag = false;
        } else {
          this.nativeService.showToast(result.Msg);
        }

      })
    }

  }
  //加载商品详情
  login() {
    var userInfo = {
      FranchiseeID: this.Fh,
      ProductID: this.seckInfo.ProductID,
      SeckillID: this.seckInfo.ActivityID,
      SeckillProductID: this.seckInfo.ID,
    }
    var parameter = new Parameter();
    parameter.jyh = "1117";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.commite = result.Data.comment;
        this.name = result.Data.Name;
        if (this.commite != null) {
          this.rate = this.commite.rate;
        }
        this.msg = result.Data;
        this.seck = result.Data.seck;
        this.seckproduct = result.Data.mobGroupon;
        this.proBH = this.seckproduct.ProductBH;
        if (result.Data.PicList != null && result.Data.PicList != "") {
          this.slide = JSON.parse(result.Data.PicList);
        }
        if (result.Data.AttList != null && result.Data.AttList != "") {
          this.ProductAttr.AttrList = JSON.parse(result.Data.AttList);
        }
        this.ProductAttr.ProductID = this.goodsid;
        this.ProductAttr.ProductName = result.Data.Name;
        this.ProductAttr.ProductPrice = result.Data.ActivityPrice;
        this.ProductAttr.ProductImage = this.slide.length > 0 ? this.slide[0].Url : "";
        this.des = this.nativeService.assembleHTML(result.Data.Descript);
        this.goodsinfo = this.nativeService.assembleHTML(result.Data.Specifications);
        if (this.seck.State == 4) {
          this.EndDate = new Date(this.seck.ETime);
          console.log(this.EndDate);
          this.timer.endDate = this.EndDate;
          this.timer.ngAfterViewInit();
        }
        // if (result.Data.IsHaveSx == 0) {
        //   this.desflag = false;
        // } else {
        //   this.desflag = true;
        // }
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }

  //取消收藏
  cancel() {
    if (this.userID == "") {
      this.nativeService.showToast("取消收藏失败，请先登录");
      return
    } else {
      var userInfo = {
        Userid: this.userID,
        FranchiseeID: this.Fh,
        goodsID: this.goodsid,
      }
      var parameter = new Parameter();
      parameter.jyh = "1020";
      parameter.parm = JSON.stringify(userInfo);
      this.nativeService.showLoading("获取中");
      this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
        this.nativeService.hideLoading();
        var result = JSON.parse(res.result);
        if (result.Code == 1) {
          this.nativeService.showToast(result.Msg);
          this.shoacngflag = true;
        } else {
          this.nativeService.showToast(result.Msg);
        }

      })
    }

  }
  //判断是否收藏
  collect() {
    if (this.userID == "") {
      return;
    } else {
      var userInfo = {
        UserID: this.userID,
        FranchiseeID: this.Fh,
        ProductID: this.goodsid,
      }
      var parameter = new Parameter();
      parameter.jyh = "1044";
      parameter.parm = JSON.stringify(userInfo);
      this.nativeService.showLoading("获取中");
      this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
        this.nativeService.hideLoading();
        var result = JSON.parse(res.result);
        if (result.Code == 1) {
          this.shoacngflag = false;
        } else {

        }

      })
    }

  }
  alertAddress() {
    this.flag = true;
    this.flagsecond = true;
  }
  alertType() {
    this.goodstype = true;
    this.goodsshow = true;
  }
  //加入购物车
  goincar() {
    if (this.userID == "") {
      this.nativeService.showToast("添加失败，请先登录再加入购物车");
      return;
    }
    //var list = ""
    var userInfo = {
      UserID: this.userID,
      FranchiseeID: this.Fh,
      ProductID: this.seckInfo.ProductID,
      Num: 1,
      lstAttrValue: [],
      ProBH: this.proBH,
      ActivityID: this.seckInfo.ActivityID,
      ActivityType: this.seckInfo.AcType,
      ActivityPrice: this.seckproduct.SecKillPrice
    }
    var parameter = new Parameter();
    parameter.jyh = "1118";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }
  jsonchange(item) {
    return JSON.parse(item);
  }
  /* 无货 */
  alertmessage() {
    this.nativeService.showToast("暂无此类商品");
  }
}
