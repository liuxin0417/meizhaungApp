import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
import { fileViewPath } from "../../providers/Constants";
declare var wx: any;

@IonicPage()
@Component({
  selector: 'page-evaluate',
  templateUrl: 'evaluate.html',
})
export class EvaluatePage {
  @ViewChild('myInput') input;
  list = [{ "statue": false }, { "statue": false }, { "statue": false }, { "statue": false }, { "statue": false },];
  img = "assets/imgs/temporary/logo.png";
  img2 = "assets/imgs/xuanzhong.png";
  img3 = "assets/imgs/weixuanzhong.png";
  img4 = "assets/imgs/guanbi.png";
  img5 = "assets/imgs/xiangji.png";
  status = "";
  num = 0;
  goodslist: any;
  goodsDetail: any;
  typenum: any;
  textarea = "";
  userID: any;
  // fileObjList: FileObj[] = [];
  fileObjList = [];
  HaveImage = 0;
  private IDUrl = "";
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
    private nativeService: NativeService,
    private storage: Storage,
    private viewCtrl: ViewController,
    public alertCtrl: AlertController, ) {
    this.goodslist = navParams.get("goodsDetail");
    this.typenum = navParams.get("num");
    this.goodsDetail = this.goodslist.Items[this.typenum];
    this.storage.get("userinfo").then(val => {
      // //console.info(val);
      if (val != "") {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage", { showflag: true });
        } else {
          this.userID = val.userinform.ID;
        }
      } else {
        this.navCtrl.push("LoginPage", { showflag: true });
      }
    });
    this.isweb = !this.nativeService.isMobile();
  }

  ionViewDidLoad() {
  }
  givestaar(i) {
    this.list = [{ "statue": false }, { "statue": false }, { "statue": false }, { "statue": false }, { "statue": false },];
    for (var n = 0; n < (i + 1); n++) {
      this.list[n].statue = true;
    };
    this.num = (i + 1)
    if (i == 0) {
      this.status = "非常差";
    } else if (i == 1) {
      this.status = "差";
    } else if (i == 2) {
      this.status = "一般";
    } else if (i == 3) {
      this.status = "好";
    } else if (i == 4) {
      this.status = "非常好";
    };
    ////console.info(i);
  }
  comment() {
    if (this.textarea == '') {
      this.nativeService.showToast("评论内容不能为空！");
      return;
    } else {
      if (!this.isweb) {
        if (this.fileObjList == null || this.fileObjList.length <= 0) {
          this.login([]);
        } else {
          this.login(this.fileObjList);
          // this.HaveImage = 1;
          // var filearray: any[] = [];
          // for (var i = 0; i < this.fileObjList.length; i++) {
          //   filearray.push(this.fileObjList[i].origPath);
          // }
          // this.nativeService.showLoading("提交中");
          // this.nativeService.uploadFileByMutiTranser(filearray).then(val => {
          //   this.login(val);
          // });
        }
      } else {
        if (this.imgUrl == null || this.imgUrl.length <= 0) {
          this.login([]);
        } else {
          this.login(this.imgUrl);
        }
      }
    }
  }
  login(filearray: any[]) {
    //console.info(this.fileObjList[0])
    var userInfo = {
      Userid: this.userID,
      goodsID: this.goodsDetail.ProductID,
      Detail: this.textarea,
      anonymity: 0,
      Degree: this.num,
      orderID: this.goodslist.ID,
      file: this.fileObjList,
      HaveImage: this.HaveImage,
      itemID: this.goodsDetail.itemID
    };
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1024";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("提交中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code == 1) {
        this.nativeService.showToast(result.Msg);
        this.goodslist.Items[this.typenum].IsEvaluate = 1
        this.viewCtrl.dismiss(this.goodslist);
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }
  slice(string) {
    if (string != "" && string != null) {
      return string.slice(0, 18) + "...";
    }
  }
  closealert() {
    let confirm = this.alertCtrl.create({
      title: '是否放弃评价',
      buttons: [
        {
          text: '否',
          handler: () => {
            //console.log('Disagree clicked');
          }
        },
        {
          text: '是',
          handler: () => {
            this.viewCtrl.dismiss();
          }
        }
      ]
    });
    confirm.present();
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
        //console.info("serverId》》》》》" + serverId)
        if (localIds.length > 0) {
          that.WxUpLoad(localIds);
        } else {
          // setTimeout(() => {
          //   that.input.setFocus();
          // }, 500);
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
          // this.imgUrl.splice(i, 1);
          // this.WimgUrl.splice(i, 1);
          this.fileObjList.splice(i, 1);
          // this.len--;
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
        //console.info("成功" + this.WimgUrl)
      }
      //console.info("不成功" + result)
    });
  }

  getImg() {
    if (!this.nativeService.isMobile()) {
      this.addWxPicture();
    }
  }
  onChange1(event: any) {
    if(this.fileObjList.length<6){

    }else{
      this.nativeService.showToast("最多只能上传6张图片");
      return
    }
    let files = event.target.files;
    var file = files[0];
    var size = files[0].size / 1024 > 1024 ? (~~(10 * files[0].size / 1024 / 1024)) / 10 + "MB" : ~~(files[0].size / 1024) + "KB";
    this.nativeService.showLoading("获取中");
     //console.info("大小" + size)
     //console.info(file);
    if (file == undefined) {
      this.IDUrl = "";
      //console.info("undefiend1")
    } else {
      //console.info("undefiend2")
      let fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      var that = this;
      fileReader.onload = function (e) {
        var name: any;
        name = e.target
        that.IDUrl = name.result;
        //console.info(that.IDUrl);
        that.fileObjList.push(that.IDUrl);
        // that.takeimg(name.result, 1);
      }
    }
    this.nativeService.hideLoading();
  }
  takeimg(result, num) {
    var result = result;
    var that = this;
    var maxSize = 100 * 1024;
    if (result.length <= maxSize) {
      return result
    } else { };
    var img = new Image();
    img.src = result;
    //console.info(img.complete);
    //console.info("加载.....");
    img.onload = function () {
      ////console.info("加载好了");
      that.compress(img, num);
    }
    //console.info("function .....");
    // var timer = setInterval(function () {
    //   if (img.complete) {

    //     clearInterval(timer)
    //   }
    // }, 50)
    // setTimeout(() => {
    //   this.compress(img, num);
    // }, 100);

  }
  compress(img, num) {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext('2d');
    //瓦片canvas
    var tCanvas = document.createElement("canvas");
    var tctx = tCanvas.getContext("2d");
    // var initSize = img.src.length;
    var width = img.width;
    var height = img.height;
    //如果图片大于四百万像素，计算压缩比并将大小压至400万以下
    var ratio;
    if ((ratio = width * height / 4000000) > 1) {
      ratio = Math.sqrt(ratio);
      width /= ratio;
      height /= ratio;
    } else {
      ratio = 1;
    }
    canvas.width = width;
    canvas.height = height;
    //铺底色
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //如果图片像素大于100万则使用瓦片绘制
    var count;
    if ((count = width * height / 1000000) > 1) {
      count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片
      //计算每块瓦片的宽和高
      var nw = ~~(width / count);
      var nh = ~~(height / count);
      tCanvas.width = nw;
      tCanvas.height = nh;
      for (var i = 0; i < count; i++) {
        for (var j = 0; j < count; j++) {
          tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);
          ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
        }
      }
    } else {
      ctx.drawImage(img, 0, 0, width, height);
    }
    //进行最小压缩
    var ndata = canvas.toDataURL('image/jpeg', 0.1);
    // //console.info()
    // console.log('压缩前：' + initSize);
    // console.log('压缩后：' + ndata.length);
    // console.log('压缩率：' + ~~(100 * (initSize - ndata.length) / initSize) + "%");
    tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;
    // //console.info(ndata);
    this.IDUrl = ndata;
    this.fileObjList.push(this.IDUrl);
    //console.info(this.fileObjList);
  }
}
