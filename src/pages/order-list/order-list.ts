import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter, Padding } from './../../model/Model';
import { InfiniteScrollService } from './../../providers/InfiniteScrollService';
declare var wx: any;
declare var Wechat: any;

@IonicPage()
@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {
  list = [1, 2, 3, 4,];
  time = ["9:30", "10:00", "10:30"]
  img2 = "assets/imgs/DIANPU.png";
  img3 = "assets/imgs/gouwuche.png";
  img4 = "assets/imgs/search.png";
  indexnum = "0";
  userID: any;
  FranchiseeID: any;
  numList: any;
  orderlist = [];
  private padding = new Padding();
  private isshow = true;
  private isweb = false;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,
    public Inservice: InfiniteScrollService,
    public alertCtrl: AlertController) {
    this.storage.get("userinfo").then(val => {
      ////console.info(val);
      if (val != "") {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage", { showflag: true });
        } else {
          this.userID = val.userinform.ID;
          this.FranchiseeID = "val.address.FranchiseeID";
        }
      } else {
        this.navCtrl.push("LoginPage", { showflag: true });
      }
      this.indexnum = navParams.get("type");
      this.login();
    });
    this.isweb = !this.nativeService.isMobile();
  }
  ionViewWillEnter() {


  }
  ionViewDidLoad() {
  }
  gotoEvaluate() {
    this.navCtrl.push("EvaluatePage");
  }
  gotogoodscar() {
    this.navCtrl.push("GoodscarPage", {
      type: 1,
    });
  }
  search() {
    this.navCtrl.push("PaySuccessPage");
  }
  ordertype(num) {
    this.padding.ipageStart = 0;
    this.isshow = true;
    this.indexnum = num;
    this.login();
  }
  gotoOrderDetail(item) {
    this.navCtrl.push("OrderDetailPage", {
      goodsdetail: item,
    })
  }
  delete(item, i) {
    const confirm = this.alertCtrl.create({
      title: '删除订单?',
      message: '确认删除订单吗？',
      buttons: [
        {
          text: '取消',
          handler: () => {
            return
          }
        },
        {
          text: '确定',
          handler: () => {
            var userInfo = {
              OrderID: item.ID
            };
            ////console.info(userInfo);
            var parameter = new Parameter();
            parameter.jyh = "1141";
            parameter.parm = JSON.stringify(userInfo);
            this.nativeService.showLoading("获取中");
            this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
              this.nativeService.hideLoading();
              var result = JSON.parse(res.result);
              //console.info(result);
              if (result.Code == 1) {
                this.orderlist.splice(i, 1)
              } else {

              }

            })
          }
        }

      ]
    });
    confirm.present();

  }
  login() {
    var userInfo = {
      FranchiseeID: this.FranchiseeID,
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      stype: this.indexnum,
    };
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1030";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.orderlist = result.Data.list;
        this.numList = result.Data.OrderNum;
        /* for(var n=0;n<this.orderlist.length;n++){
          for(var a=0;a<this.orderlist[n].Items.length;a++){
            this.orderlist[n].totalnum=this.orderlist[n].totalnum+this.orderlist[n].Items[a].Quantity;
          }
        } */
        ////console.info(this.orderlist);
      } else {

      }

    })
  }
  //确认订单
  confirm(item, ID) {
    const confirm = this.alertCtrl.create({
      title: '确认收货?',
      message: '是否确认收货',
      buttons: [
        {
          text: '取消',
          handler: () => {
            return
          }
        },
        {
          text: '确定',
          handler: () => {
            var userInfo = {
              OrderID: ID,
            };
            ////console.info(userInfo);
            var parameter = new Parameter();
            parameter.jyh = "1033";
            parameter.parm = JSON.stringify(userInfo);
            this.nativeService.showLoading("获取中");
            this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
              this.nativeService.hideLoading();
              var result = JSON.parse(res.result);
              if (result.Code == 1) {
                item.IsReceipt = 1;
                item.OrderStatusId = 40;
                item.ShipStatusId = 4;
                // this.indexnum=""
                this.ordertype(4);
              } else {

              }
            });
          }
        }

      ]
    });
    confirm.present();




  }
  gotoOrderpay(item) {
    this.navCtrl.push("OrderPayPage", {
      orderId: item.ID,
      item: item,
    });
  }
  //几件商品
  num(item) {
    var num = 0;
    for (var n = 0; n < item.length; n++) {
      num = num + item[n].Quantity
    }
    return num
  }
  doInfinite(infiniteScroll: InfiniteScroll) {
    /* infiniteScroll.enable(true); */
    // //console.info("运行了下拉加载")
    if (this.orderlist.length < (this.padding.ipageStart + 1) * this.padding.pageSize) {
      this.isshow = false;
      return;
    }
    this.padding.ipageStart += 1;
    var pageInfo = {
      FranchiseeID: this.FranchiseeID,
      UserID: this.userID,
      ipageStart: this.padding.ipageStart,
      pageSize: this.padding.pageSize,
      stype: this.indexnum,
    };
    var parm = new Parameter();
    parm.jyh = "1030";
    parm.parm = JSON.stringify(pageInfo);
    this.Inservice.getAsyncData("/MobService/Index", parm).map(res => res.json()).subscribe((newData) => {
      setTimeout(() => {
        var newList: any;
        var msg = JSON.parse(newData.result);
        //console.info(msg);
        newList = msg.Data.list;
        if (newList != null || newList != undefined) {
          for (var i = 0; i < newList.length; i++) {
            this.orderlist.push(newList[i]);
          }
        }
        if (newData.length < this.padding.pageSize) {
          this.isshow = false;
        }
        infiniteScroll.complete();
      }, 1000);
    });
  }



  gotoPinDan(item) {
    let info: any;
    let url = "http://www.aiboplus.com/mob/#/group-buy-list";
    if (item.Items.length > 0) {
      info = item.Items[0];
    } else {
      return false;
    }
    if (this.isweb) {
      wx.onMenuShareAppMessage({
        title: '爱宝加团购', // 分享标题
        desc: info.Name, // 分享描述
        link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: info.Url, // 分享图标
        type: '', // 分享类型,music、video或link，不填默认为link
        dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
          // 用户确认分享后执行的回调函数
        },
        cancel: function () {
          // 用户取消分享后执行的回调函数
        }
      });
    } else {
      Wechat.share({
        message: {
          title: '爱宝加团购',
          description: info.Name,
          thumb: info.Url,
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
    }
  }

  searchlog(item) {
    this.navCtrl.push("LogisticsInfoPage", {
      Info: item
    });
  }
}
