import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {
  img2 = "assets/imgs/DIANPU.png";
  img3 = "assets/imgs/complte.png";
  car="assets/imgs/fahuo.png";
  goto="assets/imgs/jinru--hui.png";
  position="assets/imgs/new/position.png";
  goodsDetail: any;
  FranchiseeID: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage) {
    this.goodsDetail = navParams.get("goodsdetail");
    this.storage.get("userinfo").then(val => {
      // //console.info(val);
      if (val != "") {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.FranchiseeID = "";
        }
      } else {
        this.navCtrl.push("LoginPage",{showflag:true});
      }

    })
  }
  ionViewWillEnter() {
    ////console.info(this.goodsDetail)
  }
  ionViewDidLoad() {

  }
  gotoReturn(item) {
    this.navCtrl.push("ReturnTypePage", {
      item: item
    });
  }
  gotoEvaluatePage(i) {
    // //console.info(this.goodsDetail.Items[i])
    let modal = this.modalCtrl.create('EvaluatePage', {
      goodsDetail: this.goodsDetail,
      num: i,
    });
    modal.onDidDismiss(data => {
      if (data != null) {
        this.goodsDetail = data;
      }
    })
    modal.present();
    // //console.info(this.goodsDetail)
    /* this.navCtrl.push("EvaluatePage",{
      goodsDetail:this.goodsDetail,
      num:i,
    }) */
  }
  gotoGoodDetail(id) {
    this.navCtrl.push("GoodDetailPage", {
      Fh: "",
      goodsid: id,
    })
    ////console.info(id);
  }
  gotoOrderpay() {
    this.navCtrl.push("OrderPayPage", {
      orderId: this.goodsDetail.ID,
      item:this.goodsDetail,
    });
  }
  delete(id) {
    var userInfo = {
      ID: id,
    };
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1031";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result)
      if (result.Code == 1) {
        //this.datalist=result.Data;
        this.nativeService.showToast(result.Msg);
        this.navCtrl.pop();
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
}
