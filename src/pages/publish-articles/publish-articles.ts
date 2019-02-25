// import { TemplateThreePage } from './../../componnets/template-three/template-three';
import { fileViewPath } from './../../providers/Constants';
import { Parameter } from './../../model/Model';
import { Storage } from '@ionic/storage';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController, ActionSheetController, AlertController } from 'ionic-angular';
import { HttpService } from '../../providers/HttpService';
import { NativeService } from '../../providers/NativeService';
import { FileObj } from '../../model/FileObj';
declare var wx: any;

@IonicPage()
@Component({
  selector: 'page-publish-articles',
  templateUrl: 'publish-articles.html',
})
export class PublishArticlesPage {
  @ViewChild('myInput') input;
  img = "assets/imgs/guanbi.png";
  img1 = "assets/imgs/publish1.png";
  img2 = "assets/imgs/publish2.png";
  img3 = "assets/imgs/publish3.png";
  img4 = "assets/imgs/publish4.png";
  img5 = "assets/imgs/xiangji.png";
  userInfo: any;
  publishType: number;
  private Title: string = "";
  private ShortDesc: string = "";
  private TypeID: string = "";
  private allowDelete: boolean = true;
  private fileObjList: FileObj[] = [];
  private max = 6;
  //private allowAdd: true;
  private isweb = false;
  private localIds = [];
  private serverIds = [];
  private imgUrl = [];
  private WimgUrl = [];
  private len = 0;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    public storage: Storage,
    public modalCtrl: ModalController,
    private httpService: HttpService,
    private nativeService: NativeService,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController) {
    this.publishType = this.navParams.get("type");
    this.isweb = !this.nativeService.isMobile();
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage",{showflag:true});
        } else {
          this.userInfo = val.userinform;
        }
      } else {
        this.navCtrl.push("LoginPage",{showflag:true});
      }
    });
  }

  ionViewDidLoad() {

  }

  close() {
    this.viewCtrl.dismiss();
  }
  alerttheme() {
    let modal = this.modalCtrl.create('ThemePage', {
      type: this.publishType
    });
    modal.onDidDismiss(data => {
      if (data != null) {
        this.TypeID = data.TypeID;
      }
    })
    modal.present();
  }
  getImg() {
    if (this.nativeService.isMobile()) {
      this.addPicture();
    } else {
      this.addWxPicture();
      //console.log("非手机环境，请求访问微信图片");
    }
  }

  /**发布文章 */
  SendImg() {
    //console.log("是否进入");
    if (this.Title == "") {
      this.nativeService.showToast("标题不能为空");
      return;
    }
    if (this.ShortDesc == "") {
      this.nativeService.showToast("内容不能为空");
      return;
    }
    if (this.TypeID == "") {
      this.nativeService.showToast("文章类别不能为空");
      return;
    }
    if (!this.isweb) {
      if (this.fileObjList == null || this.fileObjList.length <= 0) {
        this.SendArticle([]);
      } else {
        var filearray: any[] = [];
        for (var i = 0; i < this.fileObjList.length; i++) {
          filearray.push(this.fileObjList[i].origPath);
        }
        this.nativeService.showLoading("提交中");
        this.nativeService.uploadFileByMutiTranser(filearray).then(val => {
          this.SendArticle(val);
        });
      }
    } else {
      if (this.imgUrl == null || this.imgUrl.length <= 0) {
        this.SendArticle([]);
      } else {
        this.SendArticle(this.imgUrl);
      }
    }
  }

  SendArticle(filearray: any[]) {
    //console.log("是否进入");
    var Info = {}
    var parameter = new Parameter();
    if (this.publishType == 1) {
      Info = {
        Title: this.Title,
        ShortDesc: this.ShortDesc,
        TypeID: this.TypeID,
        UserID: this.userInfo.ID,
        file: filearray
      }

      parameter.jyh = "1084";
    } else if (this.publishType == 2) {
      Info = {
        Title: this.Title,
        Detail: this.ShortDesc,
        TypeID: this.TypeID,
        UserID: this.userInfo.ID,
        file: filearray
      }
      parameter = new Parameter();
      parameter.jyh = "1074";
    } else if (this.publishType == 3) {
      Info = {
        Title: this.Title,
        Detail: this.ShortDesc,
        TypeID: this.TypeID,
        UserID: this.userInfo.ID,
        file: filearray
      }
      parameter = new Parameter();
      parameter.jyh = "1077";
    }

    parameter.parm = JSON.stringify(Info);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(val => {
      var result = JSON.parse(val.result);
      this.nativeService.hideLoading();
      if (result.Code == 1) {
        this.nativeService.showToast("提交成功");
        this.viewCtrl.dismiss();
      }
    })
  }
  /**App端获取图片 */
  addPicture() {//新增照片
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

  deletePicture(i) {//删除照片
    if (!this.allowDelete) {
      return;
    }
    this.alertCtrl.create({
      title: '确认删除？',
      buttons: [{ text: '取消' },
      {
        text: '确定',
        handler: () => {
          this.fileObjList.splice(i, 1);
        }
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

  viewPicture(index) {
    this.modalCtrl.create('PreviewPicturePage', { 'initialSlide': index, 'picturePaths': this.WimgUrl }).present();
  }


  private getPictureSuccess(img) {
    let fileObj = <FileObj>{ 'origPath': img, 'thumbPath': img };
    this.fileObjList.push(fileObj);
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
  // WxDownLoadImage() {
  //   this.nativeService.uploadWxMoreFile(this.serverIds).then(val => {
  //     this.SendArticle(val);
  //   });
  // }
  Change(item) {
    return this.nativeService.assembleHTML(item);
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
}
