import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpService } from '../../providers/HttpService';
import { NativeService } from '../../providers/NativeService';
import { UserInfo } from '../../model/Model';
import { Utils } from '../../providers/Utils';
import { Storage } from '@ionic/storage';
import { Parameter } from './../../model/Model';
/**
 * Generated class for the CashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cash',
  templateUrl: 'cash.html',
})
export class CashPage {
  private userID = "";
  private userInfo = new UserInfo();
  private Money = 0;
  private ReMoney = 0;
  private ActiveMoney = 0;
  private GiftRate = 0.01;
  private ReMoneyStr = "0";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,
    private httpService: HttpService,
    private nativeService: NativeService,
  ) {

  }

  ionViewWillEnter() {
    this.storage.get("userinfo").then(val => {

      if (val != "" && val != null) {
        if (val.userinform.ID == "e") {
          this.navCtrl.push("LoginPage", { showflag: true });
        } else {
          this.userID = val.userinform.ID;
          this.getUsergift();
        }
        // this.load2();
      } else {
        this.navCtrl.push("LoginPage", { showflag: true });
      }
    });
  }

  getUsergift() {
    var userInfo = {
      UserID: this.userID,
    };
    let that=this;
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "2001";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        that.ActiveMoney = result.Data.Gift;
        that.GiftRate=result.Data.Rate;
        that.ReMoney = that.ActiveMoney;
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  //计算积分剩余
  SetMoney(evt:any) {
    this.nativeService.log('cash','SetMoney >'+ evt.key);
    if(this.Money<0)
    {
      this.Money=null;
      this.ReMoney = this.ActiveMoney;
      return;
    }
    this.ReMoney =( this.ActiveMoney*100 - (this.Money /this.GiftRate)*100)/100;
    if (this.ReMoney < 0) {
      this.Money = null;
      this.ReMoney = this.ActiveMoney;
    }
    this.MoneyFormat();
  }
  checkNum(evt)
  {
    this.nativeService.log('cash','checkNum >'+ evt.key=='-');
    if(evt.key=='-' || evt.key=='.')
    {
      return false;
    }

  }
  giftfocus() {
    if (this.Money == 0) {
      this.Money = null;
    }
  }
  Recharge() {

    if (this.Money > 0 && (this.Money /this.GiftRate) < this.ActiveMoney && this.Money >= 100 && (this.Money % 100 == 0)) {

      var userInfo = {
        UserID: this.userID,
        money: this.Money/this.GiftRate
      };
      //console.info(userInfo)
      var parameter = new Parameter();
      parameter.jyh = "2002";
      parameter.parm = JSON.stringify(userInfo);
      this.nativeService.showLoading("获取中");
      this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
        this.nativeService.hideLoading();
        var result = JSON.parse(res.result);
        //console.info(result)
        if (result.Code == 1) {
          this.ActiveMoney -= this.Money;
          this.Money = 0;
          this.nativeService.showToast(result.Msg);
        } else {
          this.nativeService.showToast(result.Msg);
        }

      })

    }
    else {
      this.nativeService.showToast('最少提现金额100元，提现金额需为100的倍数。');
    }
  }

  //格式化数字
  MoneyFormat() {
    if (this.ActiveMoney != undefined && this.ReMoney != undefined) {
      // this.ActiveMoney = Utils.MoneyFormat(this.userInfo.ActiveMoney.toString());
      this.ReMoneyStr = Utils.MoneyFormat(this.ReMoney.toString());
    } else {

    }

  }
}
