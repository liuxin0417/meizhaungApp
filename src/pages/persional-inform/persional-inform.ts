import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ActionSheetController } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
import { CityPickerService } from "./../../providers/CityPicker";
import { AlertController } from 'ionic-angular';
import { FileObj } from "../../model/FileObj";
declare var wx: any;

@IonicPage()
@Component({
  selector: 'page-persional-inform',
  templateUrl: 'persional-inform.html',
})
export class PersionalInformPage {
  img = "assets/imgs/four.png";
  img2 = "assets/imgs/jinru--hui.png";
  img3 = "assets/imgs/temporary/logo.png";
  myDate = "2017-11-10";
  sex = 0;
  userinfo = [];
  nickname = "";
  phonenum="";
  userID = "";
  fileObjList: FileObj[] = [];
  max: number = 4;
  HeadUrl = "";
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    /* private storage: Storage, */
    private modalCtrl: ModalController,
    private httpService: HttpService,
    private nativeService: NativeService,
    public cityPickerSev: CityPickerService,
    private alertCtrl: AlertController,
    private actionSheetCtrl: ActionSheetController, ) {
    this.userinfo = this.navParams.get("userinfo");
    this.userID = this.navParams.get("userinfo").ID;
    ////console.info(this.userinfo)
    this.load();
  }

  ionViewDidLoad() {
    //this.WxLoad();
  }
  consoleinfo() {

  }

  /**微信设置访问接口 */
  /* WxLoad() {
    console.log(wx);
    let url = location.href.split('#')[0];
    var Info = {
      url: url
    };
    var parm = new Parameter();
    parm.jyh = "1126";
    parm.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parm).map(res => res.json()).subscribe(val => {
      var result = JSON.parse(val.result);
      console.log(result);
      if (result.Code == "1") {
        var data = result.Data;
        wx.config({
          debug: true,
          appId: data.appId,
          timestamp: data.timestamp,
          nonceStr: data.nonceStr,
          signature: data.signature,
          jsApiList: ['chooseImage', 'uploadImage', 'downloadImage']
        });
      }
    });
  } */
  load() {
    ////console.info(this.userID)
    var userInfo = {
      UserID: this.userID,
    };
    ////console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1013";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code != 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        if (result.Data.NickName != '') {
          this.nickname = result.Data.NickName;
        } else {
          this.nickname = "";
        }
        if (result.Data.Sex != null) {
          this.sex = result.Data.Sex;
        } else {
          this.sex = 0;
        }
        if (result.Data.phone != '') {
          this.phonenum = result.Data.phone;
        } else {
          this.phonenum = "";
        }
        if (result.Data.HeadUrl != '') {
          this.HeadUrl = result.Data.HeadUrl;
        } else {
          this.HeadUrl = "";
        }
      }
    })
  }
  savemessage() {
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    if (this.nickname == "") {
      this.nativeService.showToast("昵称不能为空");
      return;
    }
    if (this.myDate == "") {
      this.nativeService.showToast("请选择出生日期");
      return;
    }
    if (!myreg.test(this.phonenum)) {
      this.nativeService.showToast("请正确填写手机号");
      return;
    }
    var userInfo = {
      UserID: this.userID,
      NickName: this.nickname,
      Sex: this.sex,
      // BirthDay: this.myDate,
      phone:this.phonenum,
    }
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1014";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("提交中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result);
      if (result.Code != 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
      }
    })
  }
  getimg() {
    if (this.nativeService.isMobile()) {
      this.gotoupload();
    } else {
      this.chooseImage();
      // //console.info("不是真机");
    }
  }

  chooseImage() {
    var that = this;
    wx.ready(function () {
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          //alert(res);
          var localIds = res.localIds;
          wx.uploadImage({
            localId: localIds[0], // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1,// 默认为1，显示进度提示
            success: function (res) {
              var serverId = res.serverId; 
              that.WxDownLoadImage(serverId);
              // wx.downloadImage({
              //   serverId: serverId, // 需要下载的图片的服务器端ID，由uploadImage接口获得
              //   isShowProgressTips: 1,// 默认为1，显示进度提示
              //   success: function (res) {
              //     var localId = res.localId; // 返回图片下载后的本地ID
              //   }
              // }); // 返回图片的服务器端ID
            }
          });// 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        }
      });
    });
  }

  /**下载微信端的图片 */
  WxDownLoadImage(serverId) {
    this.nativeService.uploadWxFile(serverId).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == "1") {
        this.publish(result.Msg);
      }
    });
  }

  gotoupload() {
    let that = this;
    that.actionSheetCtrl.create({
      buttons: [
        {
          text: '从相册选择',
          handler: () => {
            that.nativeService.getMultiplePicture({//从相册多选
              maximumImagesCount: (that.max - that.fileObjList.length),
              destinationType: 1//期望返回的图片格式,1图片路径
            }).subscribe(imgs => {
              for (let img of <string[]>imgs) {
                that.getPictureSuccess(img);
              }
            });
          }
        },
        {
          text: '拍照',
          handler: () => {
            that.nativeService.getPictureByCamera({
              destinationType: 1//期望返回的图片格式,1图片路径
            }).subscribe(img => {
              that.getPictureSuccess(img);
            });
          }
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    }).present();
  }
  viewerPicture(index) {//照片预览
    let picturePaths = [];
    for (let fileObj of this.fileObjList) {
      picturePaths.push(fileObj.origPath);
    }
    this.modalCtrl.create('PreviewPicturePage', { 'initialSlide': index, 'picturePaths': picturePaths }).present();
  }
  private getPictureSuccess(img) {
    let fileObj = <FileObj>{ 'origPath': img, 'thumbPath': img };
    this.fileObjList.push(fileObj);
    // this.fileObjListChange.emit(this.fileObjList);
    if (this.fileObjList.length > 0) {
      this.nativeService.uploadByTransfer(this.fileObjList[0].origPath).then((data) => {
        var msg = JSON.parse(data.response);
        if (msg.Code == "1") {
          this.publish(msg.Msg);
        }
      });
    } else {
      var url = ""
      this.publish(url);
    }
  }
  publish(url) {
    /* let that = this; */
    var userInfo = {
      UserID: this.userID,
      headUrl: url
    }
    var parameter = new Parameter();
    parameter.jyh = "1007";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("发布中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == "1") {
        this.nativeService.showToast("提交成功");
        this.load();
        if (result.Data != null) {
        }else{}
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });

  }
  setNickName() {
    let prompt = this.alertCtrl.create({
      message: "请输入您的昵称",
      inputs: [
        {
          name: 'title',
          placeholder: '昵称',

        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: '确认',
          handler: data => {
            // console.log(data);
            if (data.title != '') {
              this.nickname = data.title
            } else {

            }
          }
        }
      ]
    });
    prompt.present();
  }
  setNickphone() {
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let prompt = this.alertCtrl.create({
      message: "请输入您的电话",
      inputs: [
        {
          name: 'title',
          placeholder: '电话',

        },
      ],
      buttons: [
        {
          text: '取消',
          handler: data => {
            //console.log('Cancel clicked');
          }
        },
        {
          text: '确认',
          handler: data => {
            // console.log(data);
            if (data.title != ''&&myreg.test(data.title)) {
              this.phonenum = data.title
            } else {
              this.phonenum="";
              this.nativeService.showToast("请正确填写手机号");
              this.setNickphone();
            }
          }
        }
      ]
    });
    prompt.present();
  }
}
