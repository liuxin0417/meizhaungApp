import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
import { FileObj } from "../../model/FileObj";

@IonicPage()
@Component({
  selector: 'page-lg-order',
  templateUrl: 'lg-order.html',
})
export class LgOrderPage {
  img = "assets/imgs/temporary/logo.png";
  img2 = "assets/imgs/tuikuan2.png";
  img3 = "assets/imgs/tuihuo.png";
  img4 = "assets/imgs/huanhuo.png";
  img5 = "assets/imgs/jinru--hui.png";
  fileObjList: FileObj[] = [];
  item: any;
  type: any;
  resonType: any;
  showflag = false;
  showflag1 = false;
  chosenum = 0;
  private linkphone = "";
  private BH = "";
  private memo = "";
  private Info: any;
  private checkType: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService, ) {
    this.Info = this.navParams.get("Info");
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LgOrderPage');
    this.login()
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
  login() {
    var userInfo = "";
    var parameter = new Parameter();
    parameter.jyh = "1137";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.resonType = result.Data;
      } else {

      }
    });
  }

  sureComment() {
    if (this.BH == "" || this.BH == undefined || this.BH == null) {
      this.nativeService.showToast("请输入物流单号");
      return false;
    }
    if (this.linkphone == "" || this.linkphone == undefined || this.linkphone == null) {
      this.nativeService.showToast("请输入联系电话");
      return false;
    }
    if (this.checkType == null) {
      this.nativeService.showToast("请选择退款原因");
      return false;
    }
    if (this.fileObjList == null || this.fileObjList.length <= 0) {
      this.gotosuccess([]);
    } else {
      var filearray: any[] = [];
      for (var i = 0; i < this.fileObjList.length; i++) {
        filearray.push(this.fileObjList[i].origPath);
      }
      this.nativeService.showLoading("提交中");
      this.nativeService.uploadFileByMutiTranser(filearray).then(val => {
        this.gotosuccess(val);
      });
    }
  }

  gotosuccess(filearray: any[]) {
    var userInfo = {
      LogisticID: this.checkType.ID,
      LogisticName: this.checkType.DText,
      LogisticCode: this.BH,
      ReturnID: this.Info.ID,
      Phone: this.linkphone,
      Memo: this.memo,
      file: filearray,
    };
    var parameter = new Parameter();
    parameter.jyh = "1135";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == "1") {
        this.nativeService.showToast("填写货运单号成功");
        this.navCtrl.popToRoot();
      }
    });
  }
  changeType(i) {
    this.chosenum = i;
  }
  Check() {
    if (this.resonType != null) {
      this.checkType = this.resonType[this.chosenum];
    }
    this.hide();
  }
}
