import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { Parameter} from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';
import { fileViewPath } from "../../providers/Constants";

@IonicPage()
@Component({
  selector: 'page-return-type',
  templateUrl: 'return-type.html',
})
export class ReturnTypePage {
  img = "assets/imgs/temporary/logo.png";
  img2 = "assets/imgs/tuikuan2.png";
  img3 = "assets/imgs/tuihuo.png";
  img4 = "assets/imgs/huanhuo.png";
  img5 = "assets/imgs/jinru--hui.png";
  item: any;
  img6 = "assets/imgs/new/genduo2.png";
  dizhi = "assets/imgs/dizhi.png";
  type = 1;
  goods = "assets/imgs/temporary/3.png";
  xiangji = "assets/imgs/xiangji.png";
  img16 = "assets/imgs/chose.png";
  RefundDescript = "";
  showflag = false;
  showflag1 = false;
  btnshowflag = true;
  IDUrl="";
  resonType = [{ "DText": "不想要了", "isCheck": false }, { "DText": "买错了", "isCheck": false }, { "DText": "没收到货", "isCheck": false }, { "DText": "与说明不服", "isCheck": false },];
  checkType: any;
  flag = false;
  flagsecond = false;
  addresList = [];
  defaultAddress: any;
  ordermsg: any;
  FranchiseeID: any;
  list: any;
  userInfo: any;
  returntype = 1;
  returnreson = '';
  resionNum = 0;
  private max = 6;
  // private localIds = [];
  private serverIds = [];
  // private isweb = false;
  private allowDelete: boolean = true;
  private len = 0;
  private imgUrl = [];
  private WimgUrl = [];
  // @ViewChild('myInput') input;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,
    public alertCtrl: AlertController,
  ) {
    this.item = navParams.get("item");
    //console.info(this.item);
    this.login();
    this.list = { "ID": "3028a68e-94e1-453f-bea2-89190d6fece7", "AttrName": "" };
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        if (val.userinform.ID == "") {
          this.navCtrl.push("LoginPage", { showflag: true });
        } else {
          this.userInfo = val.userinform;
          this.FranchiseeID = "val.address.FranchiseeID";
          this.loginaddress();
        }
      } else {
        this.navCtrl.push("LoginPage", { showflag: true });
      }
    });
  }

  ionViewDidLoad() {
    // this.login();
    // this.login2();
    //console.info(this.item);
    this.getreson()
  }
  wait() {
    this.navCtrl.push("ReturnWaitPage");
  }
  login() {//获取
    var userInfo = {
      OrderItemID: this.item.itemID,
    };
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1151";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.btnshowflag = true;
      } else if (result.Code == 2) {
        this.btnshowflag = false;
        this.type = result.Data.RefundType;
        this.returnreson = result.Data.RefundReason;
        this.RefundDescript = result.Data.RefundDescript;
      } else {

      }
    });
  }
  savelogin() {//获取
    var typename = ""
    if (this.type == 1) {
      typename = "退货"
    } else if (this.type == 2) {
      typename = "换货"
    }
    if (this.returnreson == '') {
      this.nativeService.showToast("请选择退换原因");
      return
    } else {

    }
    var userInfo = {
      OrderItemID: this.item.itemID,
      ProID: this.item.ProductID,
      RefundType: typename,
      RefundReason: this.returnreson,
      RefundDescript: this.RefundDescript,
      file: this.imgUrl,
      UserID: this.userInfo.ID,
    };
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1150";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {
        this.btnshowflag = false;
        this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
      }
    });
  }
  login2() {//获取仅退货分类
    var userInfo = "";
    var parameter = new Parameter();
    parameter.jyh = "1106";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading();
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result)
      if (result.Code == 1) {

      } else {

      }
    });
  }
  gotogoods(type, newtype) {
    this.navCtrl.push("ReturnReasonPage", {
      item: this.item,
      type: type,
      newtype: newtype
    })
  }
  getreson() {
    var userInfo = "";
    var parameter = new Parameter();
    parameter.jyh = "1158";
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
    if (this.btnshowflag) {
      this.showflag1 = true;
      this.showflag = true;
    } else {
    
    }

  }
  CheckReason(item, num) {
    // for (var i = 0; i < this.resonType.length; i++) {
    //   this.resonType[i].isCheck = false;
    // }
    // item.isCheck = true;
    this.checkType = item;
    this.resionNum = num
    this.SureCheck()
    //console.info(this.checkType);
  }
  SureCheck() {
    if (this.checkType == null || this.checkType == "" || this.checkType == undefined) {
      this.nativeService.showToast("请选择退款的类型");
      return
    }
    this.returnreson = this.checkType;
    this.showflag = false;
    setTimeout(() => {
      this.showflag1 = false;
    }, 150);
  }
  alertAddress() {
    ////console.info(this.addresList)
    this.flag = true;
    this.flagsecond = true;
  }
  loginaddress() {
    var userInfo = {
      UserID: this.userInfo.ID,
    };
    var parameter = new Parameter();
    parameter.jyh = "1011";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == 1) {
        if (result.Data2 != null) {
          this.addresList[0] = result.Data2;
          this.defaultAddress = result.Data2;
          for (var n = 0; n < result.Data.length; n++) {
            this.addresList.push(result.Data[n])
          }
        } else {
          if (result.Data.length == 0) {
            // this.addressflag = false;
          } else {
            this.defaultAddress = result.Data[0];
            for (var b = 0; b < result.Data.length; b++) {
              this.addresList.push(result.Data[b]);
            }
          }

        }
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  getImg() {
    if (!this.nativeService.isMobile()) {
      this.addWxPicture();
    }
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
  WxDownLoadImage(serverId) {
    this.nativeService.uploadWxFile(serverId).subscribe(res => {
      var result = JSON.parse(res.result);
      if (result.Code == "1") {
        this.WimgUrl.push(fileViewPath + result.Msg);
        this.imgUrl.push(result.Msg);
      }
    });
  }
  changetype(num) {
    if (this.btnshowflag) {
      this.type = num;
    } else {

    }
  }
  onChange1(event: any) {
    if(this.imgUrl.length<6){

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
        that.imgUrl.push(that.IDUrl);
        // that.takeimg(name.result, 1);
      }
    }
    this.nativeService.hideLoading();
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
          this.imgUrl.splice(i, 1);
          // this.len--;
        }
      }
      ]
    }).present();
  }
}
