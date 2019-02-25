import { AlertController } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
import { FileObj } from "../../model/FileObj";
import { fileViewPath } from "../../providers/Constants";
declare var wx: any;

@IonicPage()
@Component({
  selector: 'page-return-reason',
  templateUrl: 'return-reason.html',
})
export class ReturnReasonPage {
  @ViewChild('myInput') input;
  img = "assets/imgs/temporary/logo.png";
  img2 = "assets/imgs/tuikuan2.png";
  img3 = "assets/imgs/tuihuo.png";
  img4 = "assets/imgs/huanhuo.png";
  img5 = "assets/imgs/jinru--hui.png";
  img6 = "assets/imgs/chose.png";
  img10 = "assets/imgs/xiangji.png";
  fileObjList: FileObj[] = [];
  item: any;
  type: any;
  resonType: any;
  showflag = false;
  showflag1 = false;
  indexnum = 0;
  newtype: any;
  checkType: any;
  private linkuser = "";
  private linkphone = "";
  private memo = "";
  private max = 6;
  private localIds = [];
  private serverIds = [];
  private isweb = false;
  private allowDelete: boolean = true;
  private len = 0;
  private imgUrl = [];
  private WimgUrl = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService, private alertCtrl: AlertController) {
    this.item = navParams.get("item");
    this.type = navParams.get("type");
    this.newtype = this.navParams.get("newtype");
    this.isweb = !this.nativeService.isMobile();
  }

  ionViewDidLoad() {
    this.typemsg()
  }

  typemsg() {
    if (this.type == 0) {
      this.login();
    } else if (this.type == 2 || this.type == 1) {
      this.login2();
    }
  }
  login() {
    var userInfo = "";
    var parameter = new Parameter();
    parameter.jyh = "1105";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.resonType = result.Data;
      } else {

      }
    });
  }
  login2() {
    var userInfo = "";
    var parameter = new Parameter();
    parameter.jyh = "1106";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.resonType = result.Data;
      } else {

      }
    });
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
  //确认退货
  gotosuccess(filearray: any[]) {
    var userInfo = {
      OrderItemID: this.item.itemID,
      ReasonID: this.checkType.ID,
      Memo: this.memo,
      Phone: this.linkphone,
      Money: this.newtype == 1 ? 0 : this.item.TotalMoney,
      type: this.type,
      file: filearray,
    };
    var parameter = new Parameter();
    parameter.jyh = "1104";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        this.nativeService.showToast("申请成功");
        this.navCtrl.popToRoot();
      } else {

      }
    });
  }
  //选择
  choseitem(i) {
    this.indexnum = i
  }

  sureComment() {
    if (this.linkuser == "" || this.linkuser == undefined || this.linkuser == null) {
      this.nativeService.showToast("请输入联系人");
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

  CheckReason(item) {
    for (var i = 0; i < this.resonType.length; i++) {
      this.resonType[i].isCheck = false;
    }
    item.isCheck = true;
    this.checkType = item;
  }

  SureCheck() {
    if (this.checkType == null || this.checkType == "" || this.checkType == undefined) {
      this.nativeService.showToast("请选择退款的类型");
    }
    this.showflag = false;
    setTimeout(() => {
      this.showflag1 = false;
    }, 150);
  }

  addWxPicture() {
    var that = this;
    wx.chooseImage({
      count: that.max - that.len, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var localIds = res.localIds;
        that.len = localIds.length; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        // for (var i = 0; i < localIds.length; i++) {
        that.WxUpLoad(localIds);
        // }
        // wx.getLocalImgData({
        //   localId: localIds, // 图片的localID
        //   success: function (res) {
        //     var localData = res.localData;
        //     that.localIds = localData; // localData是图片的base64数据，可以用img标签显示
        //   }
        // });
      }
    });
  }
  WxUpLoad(localIds: string[]) {
    var that = this;
    var localId = localIds.pop();
    wx.uploadImage({
      localId: localId,
      success: function (res) {
        var serverId = res.serverId;
        that.serverIds.push(serverId);
        if (localIds.length > 0) {
          that.WxUpLoad(localIds);
        } else {
          setTimeout(() => {
            that.input.setFocus();
          }, 500);
        }
        that.WxDownLoadImage(serverId);
        // if (that.len == that.serverIds.length) {
        //   that.WxDownLoadImage(serverId);  
        // }
      }
    });
  }

  viewerWxPicture(item) {
    alert(item);
    var that = this;
    wx.previewImage({
      current: item, // 当前显示图片的http链接
      urls: that.localIds // 需要预览的图片http链接列表
    });
  }

  deleteWxPicture(i) {//删除照片
    if (!this.allowDelete) {
      return;
    }
    this.alertCtrl.create({
      title: '确认删除？',
      buttons: [{ text: '取消' },
      {
        text: '确定',
        handler: () => {
          this.imgUrl.splice(i, 1);
          this.WimgUrl.splice(i, 1);
          this.len--;
        }
      }
      ]
    }).present();
  }

  WxDownLoadImage(serverId) {
    this.nativeService.uploadWxFile(serverId).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == "1") {
        this.WimgUrl.push(fileViewPath + result.Msg);
        this.imgUrl.push(result.Msg);
      }
    });
  }

  getImg() {
    if (!this.nativeService.isMobile()) {
      this.addWxPicture();
    }
  }
}
