import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController, Slides, } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Parameter, ProductAttr, Padding } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { ActionSheetController } from 'ionic-angular';
declare var wx: any;
declare var Wechat: any;
import { Params } from '../../providers/params';
@IonicPage({
  //name:'GoodDetailPage',
  // segment:'goodsDetail/:goodsid',
  // defaultHistory: ['TabsPage']
})
@Component({
  selector: 'page-good-detail',
  templateUrl: 'good-detail.html',

})
export class GoodDetailPage {
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
  img_detail = "assets/imgs/new/detail.png";
  shop_img = "assets/imgs/comlogo.png";
  msg_img = "assets/imgs/cheat.png";
  store_img = "assets/imgs/DIANPU.png";
  homeNew = "assets/imgs/homenew.png";
  star = "assets/imgs/xuanzhong.png";
  starNo = "assets/imgs/weixuanzhong.png";
  star_list = [1, 2, 3, 4, 5]
  couponList: any;
  switchnum = true;
  button_num = 1;
  opcity = 0;
  userID: any;
  FhId: any;
  Fh: any;
  goodsid: any;
  slide = [];
  msg: any;
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
  commite = [];
  commiteList = [];
  rate = "";
  guige = "选择规格";
  proBH: any;
  name: any;
  picurl: any;
  slideindex = 0;
  islink = false;
  couponflag = false;
  btnType: string = "goods";
  private seckInfo: any;
  showflag = false;
  showflag1 = false;
  UID: any;
  private padding = new Padding();
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private storage: Storage,
    private httpService: HttpService,
    private nativeService: NativeService,
    public actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    public params: Params, ) {
    var href = location.href;
    var that = this;
    this.Fh = navParams.get("Fh");
    this.goodsid = navParams.get("goodsid");
    nativeService.log('GoodDetailPage', 'this.goodsid>?>> ' + this.goodsid);
    nativeService.log('GoodDetailPage', 'this.Fh>?>> ' + this.Fh);
    if (this.goodsid == null || this.goodsid == "" || this.goodsid == undefined) {
      var array = href.split('/');
      this.goodsid = array[array.length - 1];
      this.islink = true;

    }
    this.login();
    this.seckInfo = this.navParams.get("seckInfo");
    if (this.seckInfo == undefined) {
      this.seckInfo = null;
    }

    // this.storage.get("userinfo").then(val => {
    //   if (val != null && val.userinform) {
    //     ////console.info(val);
    //     this.userID = val.userinform.ID;
    //     this.Fh = "";
    //     this.UID = val.userinform.UID
    //     this.collect();
    //     // this.settle();
    //   } else {
    //     this.UID = "88888";
    //   }
    //   /* this.loginaddress(); */
    //   this.geicomittle();
    // })
  }
  ionViewWillEnter() {
    this.storage.get("userinfo").then(val => {
      if (val != null && val.userinform) {
        ////console.info(val);
        this.userID = val.userinform.ID;
        this.Fh = "";
        this.UID = val.userinform.UID
        this.collect();
        // this.settle();
      } else {
        this.UID = "88888";
      }
      /* this.loginaddress(); */
      this.geicomittle();
    })
  }
  ionViewDidLoad() {
    // this.goTop();
    var that = this;
    this.nativeService.log("进入注册", "1")
    this.shareXCX();
    // this.addUrlPara("goodsid", "1234")
  }
  // ionViewDidLeave(){
  //   //console.info("退出》》》》》详情2");
  //   this.app.setTitle("首页啊啊啊啊啊啊")
  // }
  slideChanged() {
    ////console.info(this.slides.getActiveIndex());
    ////console.info(this.slides.length())
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
    if (this.islink) {
      this.app.getRootNav().setRoot('TabsPage');
    } else {
      this.app.goBack();
    }
  }
  gotochat2() {
    this.nativeService.log('GoodDetailPage', 'gotochat2>');
    // 
    // 
    // 
    // 


    this.app.getRootNav().setRoot('TabsPage');
    // 
    // 
    // 
    // 


  }
  gotochat() {
    this.navCtrl.push("ChatPage", {
      proid: this.goodsid,
      name: this.name,
      picurl: this.slide[0].Url,
    })
  }
  // private goTop() {
  //   let lyBg = this.lyScrollDiv.nativeElement;
  //   let navbar = this.navbar.nativeElement;
  //   let btn1 = this.btn1.nativeElement;
  //   let btn2 = this.btn2.nativeElement;
  //   lyBg.addEventListener('scroll', function () {
  //     var top = lyBg.scrollTop;
  //     var num = top / 300
  //     if (num <= 1) {
  //       this.opcity = num;
  //     } else {
  //       this.opcity = 1;
  //     }
  //     if (this.opcity >= 0.3) {
  //       navbar.style.display = "block";
  //       navbar.style.opacity = this.opcity;
  //     } else {
  //       navbar.style.display = "none";
  //     }

  //     btn1.style.opacity = (1 - (this.opcity * 2));
  //     btn2.style.opacity = (1 - (this.opcity * 2));
  //   }, false);
  // }
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
    if (this.userID == "" || this.userID == '' || this.userID == undefined || this.userID == null) {
      this.nativeService.showToast("请先登录");
      this.navCtrl.push("LoginPage", {
        showflag: true,
        popFlag: true,
        tabindex: 5,
      });
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
    ////console.info(item)
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

    if (this.userID == "none" || this.userID == '' || this.userID == undefined || this.userID == null) {
      this.nativeService.showToast("收藏失败，请先登录");
      this.navCtrl.push("LoginPage", {
        showflag: true,
        popFlag: true,
        tabindex: 5,
      });
      // return
    } else {
      var userInfo = {
        Userid: this.userID,
        FranchiseeID: this.Fh,
        goodsID: this.goodsid,
      }
      //console.log(userInfo);
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
    var that = this;
    var userInfo = {
      FranchiseeID: "",
      ID: this.goodsid,
    }
    var parameter = new Parameter();
    parameter.jyh = "1018";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.proBH = result.Data.ProBH;
        this.name = result.Data.Name;

        this.msg = result.Data;

        //console.info(this.msg)
        if (result.Data.PicList != null && result.Data.PicList != "") {
          this.slide = result.Data.PicList;
        }
        if (result.Data.AttList != null && result.Data.AttList != "" && result.Data.AttList.length != 0) {
          this.ProductAttr.AttrList = result.Data.AttList;
        }
        this.ProductAttr.ProductID = this.goodsid;
        this.ProductAttr.ProductName = result.Data.Name;
        this.ProductAttr.ProductPrice = result.Data.ActivityPrice;
        this.ProductAttr.ProductImage = this.slide.length > 0 ? this.slide[0].Url : "";
        this.des = this.nativeService.assembleHTML(result.Data.Descript);
        this.goodsinfo = this.nativeService.assembleHTML(result.Data.Specifications);
        //console.info("显示" + this.goodsinfo);
        if (result.Data.IsHaveSx == 0) {
          this.desflag = false;
        } else {
          this.desflag = true;
        }

        this.setrocode();
        this.getcoupon();
        // this.settle();
        if (!this.nativeService.isMobile()) {
          if (this.UID == undefined || this.UID == null || this.UID == "") {
            this.UID = "88888"
          } else {

          }


          wx.ready(function () {
            that.settle();
          });
        }
      } else {
        // this.navCtrl.pop();
        this.nativeService.showToast(result.Msg);
      }
      this.nativeService.hideLoading();
    });
  }

  //收藏商品

  goInCar() {
    if (this.userID == "none" || this.userID == '' || this.userID == undefined || this.userID == null) {
      this.nativeService.showToast("收藏失败，请先登录");
      this.navCtrl.push("LoginPage", {
        showflag: true,
        popFlag: true,
        tabindex: 5,
      });
      return
    } else {
      var userInfo = {
        UserID: this.userID,
        FranchiseeID: this.Fh,
        ProductID: this.goodsid,
      }
      ////console.info(userInfo)
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
  //取消收藏
  cancel() {
    if (this.userID == "none" || this.userID == '' || this.userID == undefined || this.userID == null) {
      this.nativeService.showToast("取消收藏失败，请先登录");
      this.navCtrl.push("LoginPage", {
        showflag: true,
        popFlag: true,
        tabindex: 5,
      });
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
      });
    }

  }
  //判断是否收藏
  collect() {
    if (this.userID == "none" || this.userID == '' || this.userID == undefined || this.userID == null) {
      return;
    } else {
      var userInfo = {
        UserID: this.userID,
        FranchiseeID: this.Fh,
        ProductID: this.goodsid,
      }
      ////console.info(userInfo)
      var parameter = new Parameter();
      parameter.jyh = "1044";
      parameter.parm = JSON.stringify(userInfo);
      this.nativeService.showLoading("获取中");
      this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
        this.nativeService.hideLoading();
        var result = JSON.parse(res.result);
        ////console.info(result)
        if (result.Code == 1) {
          this.shoacngflag = false;
        } else {

        }

      })
    }

  }
  alertAddress() {
    ////console.info(this.addresList)
    this.flag = true;
    this.flagsecond = true;
  }
  alertType() {
    this.goodstype = true;
    this.goodsshow = true;
  }
  //加入购物车
  goincar() {
    if (this.userID == "none" || this.userID == '' || this.userID == undefined || this.userID == null) {
      this.nativeService.showToast("添加失败，请先登录再加入购物车");
      this.navCtrl.push("LoginPage", {
        showflag: true,
        popFlag: true,
        tabindex: 5,
      });
      return;
    }
    if (this.desflag == true) {
      this.goodstype = true;
      this.goodsshow = true;
    } else {
      //var list = ""
      var userInfo = {
        UserID: this.userID,
        FranchiseeID: this.Fh,
        ProductID: this.goodsid,
        Num: 1,
        lstAttrValue: [],
        ProBH: this.proBH,
        ActivityID: this.seckInfo != null ? this.seckInfo.ActivityID : "",
        ActivityType: this.seckInfo != null ? this.seckInfo.AcType : 0,
      }
      //console.log(userInfo);
      var parameter = new Parameter();
      if (this.seckInfo != null) {
        parameter.jyh = "1118";
      } else {
        parameter.jyh = "1027";
      }
      parameter.parm = JSON.stringify(userInfo);
      this.nativeService.showLoading("获取中");
      this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
        this.nativeService.hideLoading();
        var result = JSON.parse(res.result);
        if (result.Code == 1) {
          this.nativeService.showToast(result.Msg);
          this.getnum();
        } else {
          this.nativeService.showToast(result.Msg);
        }

      })
    }
  }
  buyStrict() {
    if (this.userID == "none" || this.userID == '' || this.userID == undefined || this.userID == null) {
      this.nativeService.showToast("请先登录再购买商品");
      this.navCtrl.push("LoginPage", {
        showflag: true,
        popFlag: true,
        tabindex: 5,
      });
      return;
    }
    if (this.desflag == true) {
      this.goodstype = true;
      this.goodsshow = true;
    } else {

      //var list = ""
      var userInfo = {
        UserID: this.userID,
        ProductID: this.goodsid,
        Num: 1,
        AttributesXml: [],
      }
      var parameter = new Parameter();
      parameter.jyh = "1139";
      parameter.parm = JSON.stringify(userInfo);
      this.nativeService.showLoading("加载中");
      this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
        this.nativeService.hideLoading();
        var result = JSON.parse(res.result);
        //console.info(result);
        if (result.Code == 1) {
          this.nativeService.showToast(result.Msg);
          this.navCtrl.push("SettlementPage", {
            userID: this.userID,
            ordermsg: result.Data,
            list: "",
            single: true,
            AttributesXml: "",
            ProductID: this.goodsid
          });
        } else {
          this.nativeService.showToast(result.Msg);
        }

      })
    }
  }
  jsonchange(item) {
    return JSON.parse(item);
  }
  /* 无货 */
  alertmessage() {
    this.nativeService.showToast("暂无此类商品");
  }
  hide() {
    var that = this;
    this.showflag = false;
    setTimeout(() => {
      that.showflag1 = false;
    }, 150);
  }
  show() {
    //var that = this;
    this.showflag1 = true;
    this.showflag = true;
  }
  /**处理微信分享 */
  WxShare() {

    var that = this;
    let url = "https://www.lguangguang.com/mob/#/good-detail/" + this.goodsid + '/1';
    var imgurl = this.slide.length > 0 ? this.slide[0].Url : "";
    this.nativeService.log('gooddetail', "进入微信分享 url:" + url);
    if (this.nativeService.isMobile()) {
      Wechat.share({
        message: {
          title: that.msg.Name,
          description: that.msg.ShortDesc,
          thumb: imgurl,
          media: {
            type: Wechat.Type.LINK,
            webpageUrl: url
          }
        },
        scene: Wechat.Scene.SESSION   // share to Timeline  
      }, function () {
        alert("Success");
      }, function (reason) {
        alert("Failed: " + reason);
      });
    } else {
      wx.onMenuShareAppMessage({
        title: that.msg.Name, // 分享标题
        desc: that.msg.ShortDesc, // 分享描述
        link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: imgurl, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      });
    }
  }
  //获取评价列表
  geicomittle() {
    var userInfo = {
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      ProID: this.goodsid,
    }
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1023";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        if (result.Data.length > 0) {
          this.commite = result.Data[0];
          this.commiteList = result.Data;
        }
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  setrocode() {
    var userInfo = {
      UserID: this.userID,
      ProductID: this.msg.ID,
    }
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1147";
    parameter.parm = JSON.stringify(userInfo);
    // this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {

      } else {
        // this.nativeService.showToast(result.Msg);
      }

    })
  }
  getcoupon() {
    var userInfo = {
      ProductID: this.msg.ID,
    }
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1146";
    parameter.parm = JSON.stringify(userInfo);
    // this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.couponList = result.Data;
        if (this.couponList.length > 0) {
          this.couponflag = true;
        } else {
          this.couponflag = false;
        }
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  settle() {
    // let url = location.href.split('#')[0];
    //console.info("UID" + 'http://www.lguangguang.com/mob/?goodsDetail=' + this.goodsid + "UID:" + this.UID + '#/')
    //console.info(this.msg.PicUrl)
    let l = this;
    this.nativeService.log('gooddetail', "进入微信分享 url:" + '//www.lguangguang.com/mob/?goodsDetail=' + this.goodsid + "UID:" + this.UID + '#/');
    wx.onMenuShareAppMessage({
      title: this.msg.ShopName,
      desc: this.msg.Name, // 分享描述
      // link: 'http://h5test.gybjwang.com/mob/share.html?'+this.user.UID, // 分享链接
      // link: 'http://h5.zgxtjf.com/mob/share.html?'+this.user.UID, // 分享链接
      link: 'https://www.lguangguang.com/mob/?goodsDetail=' + this.goodsid + "UID:" + this.UID, // 分享链接
      imgUrl: this.msg.PicUrl, // 分享图标
      // imgUrl: this.icon, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
        l.nativeService.showToast("分享成功");
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });
    wx.onMenuShareTimeline({
      title: this.msg.ShopName,
      link: 'https://www.lguangguang.com/mob/?goodsDetail=' + this.goodsid + "UID:" + this.UID, // 分享链接
      imgUrl: this.msg.PicUrl,
      success: function () {
        this.nativeService.showToast("分享成功");
      },
    })
  }
  gotoshop(ShopID) {
    this.navCtrl.push("ShopIndexPage", {
      ShopID: ShopID
    })
  }
  splite(item) {
    var arr = [];
    arr = item.split('T');
    return arr[0];
  }
  getConcer() {
    var userInfo = {
      UserID: this.userID,
      ShopID: this.msg.ShopID,
    }
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1160";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      var _data = result.Data;
      if (this.msg != null && this.msg.StoreManNum != null) {
        this.msg.StoreManNum += _data;
      }
      this.nativeService.showToast(result.Msg);

    })
  }
  getnum() {//获取
    var userInfo = {
      UserID: this.userID
    };
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1152";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.params.params = result.Data
      } else {

      }
    });
  }
  addUrlPara(name, value) {
    var currentUrl = window.location.href;
    if (/\?/g.test(currentUrl)) {
      if (/name=[-\w]{4,25}/g.test(currentUrl)) {
        currentUrl = currentUrl.replace(/name=[-\w]{4,25}/g, name + "=" + value);
      } else {
        currentUrl += "&" + name + "=" + value;
      }
    } else {
      currentUrl += "?" + name + "=" + value;
    }
    if (window.location.href.split('#')[1]) {
      window.location.href = currentUrl + '#' + window.location.href.split('#')[1];
    } else {
      window.location.href = currentUrl;
    }
  }
  shareXCX() {
    var that=this;
    wx.miniProgram.getEnv(function (res) {
     console.info(res.miniprogram+'2')
      if (res.miniprogram) {
        console.info(res.miniprogram+"3")
        var info = {
          page: 'detail',//参数一
          goodsID: that.goodsid,//参数二
        };
        var json = JSON.stringify(info);
        wx.miniProgram.postMessage({ data: json });
        console.info("完成注册")
      } else {

      }
    })

  }

}
