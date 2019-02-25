import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpService } from '../../providers/HttpService';
import { NativeService } from '../../providers/NativeService';
import { Storage } from '@ionic/storage';
import { Parameter } from '../../model/Model';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ReturnFailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return-fail',
  templateUrl: 'return-fail.html',
})
export class ReturnFailPage {
  img = "assets/imgs/temporary/logo.png";
  dizhi = "assets/imgs/dizhi.png";
  img5 = "assets/imgs/jinru--hui.png";
  goods = "assets/imgs/temporary/3.png";
  orderNum = "";
  typeName = "";
  goodsNsg: any;
  shipName = "";
  shipNum = "";
  // private Info: any;
  private userInfo: any;
  private addressInfo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage,
    public nativeService: NativeService, public httpService: HttpService,
    public alertCtrl: AlertController,
    private modalCtrl: ModalController, ) {
    this.goodsNsg = this.navParams.get("item");
    this.GetSysAddress();
  }

  ionViewDidLoad() {
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage", { showflag: true });
        } else {
          this.userInfo = val.userinform;
        }
      } else {
        this.navCtrl.push("LoginPage", { showflag: true });
      }
    });
  }
  GetSysAddress() {
    var userInfo = {
      ID: this.goodsNsg.ID,
    };
    var parameter = new Parameter();
    parameter.jyh = "1156";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      console.log(result);
      if (result.Code == 1) {
        this.addressInfo = result.Data;
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }
  subMsg() {
    if (this.shipNum == "") {
      this.nativeService.showToast("运单号不能为空");
      return
    }
    if (this.shipName == "") {
      this.nativeService.showToast("快递公司不能为空");
      return
    }
    var userInfo = {
      ID: this.goodsNsg.ID,
      ShipNo: this.shipNum,
      ShipName: this.shipName,
    };
    var parameter = new Parameter();
    parameter.jyh = "1155";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      console.log(result);
      if (result.Code == 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }
  returntype() {
    let modal = this.modalCtrl.create('ReturnTypeListPage');
    modal.present();
    modal.onDidDismiss(data => {
      if (data != null) {
        this.typeName = data
      } else {
      }
    });
  }
  shownum() {
    const prompt = this.alertCtrl.create({
      title: '请输入您的快递单号',
      inputs: [
        {
          name: 'order',
          placeholder: '填写快递单号'
        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '确定',
          handler: data => {
            //console.info(data)
            this.orderNum = data.order;
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();

  }
}
