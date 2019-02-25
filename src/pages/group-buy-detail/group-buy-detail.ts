import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Parameter, ProductAttr, GroupList } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-group-buy-detail',
  templateUrl: 'group-buy-detail.html',
})
export class GroupBuyDetailPage {
  img = "assets/imgs/jinru--hui.png";
  img2 = "assets/imgs/shoucang2.png";
  img3 = "assets/imgs/gouwuche.png";
  img4 = "assets/imgs/zhici.png";
  img5 = "assets/imgs/shoucang3.png";
  img6 = "assets/imgs/temporary/2.png";
  img8 = "assets/imgs/liuyan.png";
  slide = [];
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
  name: any;
  showflag1 = false;
  showflag = false;
  private userInfo: any;
  private Group: any;
  private address: any;
  private Porduct: any;
  private ProductAttr = new ProductAttr();
  private des: any;
  private goodsinfo: any;
  private commite: any;
  private mobGroupon: any;
  private rate = "";
  private switchnum = true;
  private goodstype = false;
  private goodsshow = false;
  //属性
  private shoacngflag = true;
  private desflag = true;
  private Fh = "";
  private goodsid = "";
  private groupID = "";
  private userID = "";
  private guige = "选择规格";
  private grouponList = new Array<GroupList>();
  private groupCount = 0;
  private grouptype = 0;//单独购买or拼单购买
  private GrouponID = "";
  private FightID = "";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private app: App,
    private storage: Storage,
    private httpService: HttpService,
    private nativeService: NativeService,
    public actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController, ) {
    this.Group = this.navParams.get("Group");
    this.goodsid = this.Group.ProductID;
    this.groupID = this.Group.ID;
    this.GrouponID = this.Group.GrouponID;
    console.log(this.Group);
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        this.address = val.address;
        this.Fh = "";
        if (val.userinform != null) {
          this.userInfo = val.userinform;
          this.userID = val.userinform.ID;
        }
      } else {
        this.navCtrl.push("LoginPage",{showflag:true});
      }
      this.Load();
      this.Load2();
    });
  }

  ionViewDidLoad() {
    this.goTop();
    this.collect();
  }
  goback() {
    this.app.goBack();
  }
  gotoslideImg(slide) {
    let modal = this.modalCtrl.create('SlideImgPage', {
      slide: slide,
    });
    modal.present();
  }
  private goTop() {
    //var that=this
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
  /**拼单购买 */
  gotogroupbuy() {
    if (this.userID == "") {
      this.nativeService.showToast("添加失败，请先登录再加入购物车");
      return;
    }
    this.grouptype = 1;
    if (this.desflag == true) {
      this.goodstype = true;
      this.goodsshow = true;
    } else {
      var item = {
        GouponID: this.groupID,
        ProductBH: this.Group.ProductBH,
        ProductID: this.Group.ProductID,
        grouptype: this.grouptype,
        GroupID: this.GrouponID
      };
      this.navCtrl.push('GroupSettlementPage', {
        Info: item,
        picurl: this.slide.length > 0 ? this.slide[0].Url : ""
      });
    }
    // this.navCtrl.push("InviteFriendsPage");
  }
  /**单独购买 */
  signplebuy() {
    if (this.userID == "") {
      this.nativeService.showToast("添加失败，请先登录再加入购物车");
      return;
    }
    this.grouptype = 0;
    if (this.desflag == true) {
      this.goodstype = true;
      this.goodsshow = true;
    } else {
      var item = {
        GouponID: this.groupID,
        ProductBH: this.Group.ProductBH,
        ProductID: this.Group.ProductID,
        GroupID: this.GrouponID,
        grouptype: this.grouptype
      };
      console.log(item);
      this.navCtrl.push('GroupSettlementPage', {
        Info: item,
        picurl: this.slide.length > 0 ? this.slide[0].Url : ""
      });
    }
  }
  /**查看留言 */

  /**加载商品信息 */
  Load() {
    var userInfo = {
      FranchiseeID:"",
      GrouponID: this.Group.ID,
      ProductID: this.Group.ProductID
    };
    var parameter = new Parameter();
    parameter.jyh = "1090";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.Porduct = result.Data;
        this.name = result.Data.Name;
        this.commite = this.Porduct.comment;
        if (this.commite != null) {
          this.rate = this.commite.rate;
        }
        this.mobGroupon = this.Porduct.mobGroupon;
        if (result.Data.PicList != null && result.Data.PicList != "") {
          this.slide = JSON.parse(result.Data.PicList);
        }
        if (result.Data.AttList != null && result.Data.AttList != "") {
          this.ProductAttr.AttrList = JSON.parse(result.Data.AttList);
        }
        this.ProductAttr.ProductID = this.Group.ProductID;
        this.ProductAttr.ProductName = result.Data.Name;
        this.ProductAttr.ProductPrice = result.Data.ActivityPrice;
        this.ProductAttr.ProductImage = this.slide.length > 0 ? this.slide[0].Url : "";
        this.des = this.nativeService.assembleHTML(result.Data.Descript);
        this.goodsinfo = this.nativeService.assembleHTML(result.Data.Specifications);
        if (this.mobGroupon.isHaveSex == 0) {
          this.desflag = false;
        } else {
          this.desflag = true;
        }
      }
    });
  }
  /**加载团购信息 */
  Load2() {
    var Info = {
      CouponID: this.Group.ID,
      UserID: this.userInfo != null ? this.userInfo.ID : ""
    };
    //console.info(Info);
    var parm = new Parameter();
    parm.jyh = "1101";
    parm.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == "1") {
        var grouponList = result.Data;
        console.log(grouponList);
        for (var i = 0; i < grouponList.length; i++) {
          var group = new GroupList();
          group.CouponID = grouponList[i].CouponID;
          var date = new Date(grouponList[i].EndTime);
          group.EndTime = date;
          group.State = grouponList[i].State;
          group.WaitNum = grouponList[i].WaitNum;
          group.SponserTime = grouponList[i].SponserTime;
          group.HeadUrl = grouponList[i].HeadUrl;
          group.LoginName = grouponList[i].LoginName;
          group.timer.endDate = date;
          group.timer.ngAfterViewInit();
          this.grouponList.push(group);
        }
        console.log(this.grouponList);
        this.groupCount = result.Msg;
      }
    });
  }

  jsonchange(item) {
    return JSON.parse(item);
  }

  switch(flag) {
    this.switchnum = flag;
  }
  /**查看评论 */
  gotojudge() {
    this.navCtrl.push("JudegePage", {
      goodID: this.goodsid,
    });
  }
  /**去结算 */
  gotoblance(item) {

  }
  /* 留言 */
  gotochat() {
    this.navCtrl.push("ChatPage", {
      proid: this.goodsid,
      name: this.name,
      picurl: this.slide[0].Url,
    })
  }
  /* 收藏 */
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
  /* 去购物车 */
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
  /* 取消收藏 */
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
      });
    }

  }
  /* 判断是否收藏 */
  collect() {
    if (this.userID == "") {
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

  Fight(item) {
    if (this.desflag == true) {
      this.goodstype = true;
      this.goodsshow = true;
    } else {
      this.FightID = item.CouponID;
      this.grouptype = 1;
      var Info = {
        GouponID: this.groupID,
        ProductBH: this.Group.ProductBH,
        ProductID: this.Group.ProductID,
        grouptype: 1,
        GroupID: this.GrouponID,
        FightID: item.CouponID
      };
      this.navCtrl.push('GroupSettlementPage', {
        Info: Info,
        picurl: this.slide.length > 0 ? this.slide[0].Url : ""
      });
    }
  }
  alertType() {
    //var that = this;
    this.showflag1 = true;
    this.showflag = true;
  }
  hide() {
    var that = this;
    this.showflag = false;
    setTimeout(() => {
      that.showflag1 = false;
    }, 150);
  }
}
