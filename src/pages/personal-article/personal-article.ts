import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpService } from '../../providers/HttpService';
import { NativeService } from '../../providers/NativeService';
import { Parameter } from '../../model/Model';

@IonicPage()
@Component({
  selector: 'page-personal-article',
  templateUrl: 'personal-article.html',
})
export class PersonalArticlePage {
  
  img = "assets/imgs/fanhu-withe.png";
  img2 = "assets/imgs/share.png";
  img4 = "assets/imgs/articlesign.png";
  img6 = "assets/imgs/up.png";
  img7 = "assets/imgs/write.png";
  img8 = "assets/imgs/message.png";
  img9 = "assets/imgs/zanheart.png";
  img10 = "assets/imgs/zanheart2.png";
  ArticleID: string;
  Article: any;
  ImgList = [];
  userInfo: any;
  type: any;
  entercode: any;
  entercode2: any;
  entercode3: any;
  textarea: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService: HttpService,
    public nativeService: NativeService, public modalCtrl: ModalController, public storage: Storage) {
    this.ArticleID = this.navParams.get("ID");
    this.type = this.navParams.get("type");
    if (this.type == 1) {
      this.entercode = "1083"
      this.entercode2 = "1085"
      this.entercode3 = "1091"
    } else if (this.type == 2) {
      this.entercode = "1097"
      this.entercode3 = "1099"
    } else if (this.type == 3) {
      this.entercode = "1098"
      this.entercode2 = "1114"
      this.entercode3 = "1100"
    }
    this.storage.get("userinfo").then(val => {
      if (val != "" && val != null) {
        // console.log(val);
        if (val.userinform.ID != "") {
          this.userInfo = val.userinform;
        }
      }
      this.Load();
    });
  }

  ionViewDidLoad() {
   
  }
  goback() {
    this.navCtrl.pop();
  }
  gotolist() {
    this.navCtrl.push("ConcernerListPage", {
      ArticleID: this.ArticleID
    });
  }
  Load() {
    var UserID = "";
    if (this.userInfo != null) {
      UserID = this.userInfo.ID;
    }

    var userInfo = {
      ID: this.ArticleID,
      UserID: UserID
    };
    //console.log(userInfo);
    var parameter = new Parameter();
    parameter.jyh = this.entercode;
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result)
      if (result.Code == "1") {
        this.Article = result.Data;
        if (this.Article.praiseList != undefined) {
          this.Article.praiseList = this.Article.praiseList.slice(0, 3)
        } else {

        }
        this.ImgList = JSON.parse(this.Article.ImgList);
      } else {
      }
    });
  }
  gotoslide(item) {
    var imgarry = [];
    imgarry.push({ "Url": item });
    let modal = this.modalCtrl.create('SlideImgPage', {
      slide: imgarry,
    });
    modal.present();
  }
  SetPraise() {
    if (this.userInfo == null) {
      this.navCtrl.push('LoginPage');
      return false;
    }
    var userInfo = {
      RelID: this.ArticleID,
      UserID: this.userInfo.ID
    };
    var parameter = new Parameter();
    parameter.jyh = this.entercode2;
    parameter.parm = JSON.stringify(userInfo);
    //this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      //this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code == "1") {
        this.Article.ispriase = !this.Article.ispriase;
        this.Load();
      } else {
      }
    });
  }
  ask() {
    if (this.textarea == '') {
      this.nativeService.showToast("评论内容不能为空！");
      return;
    } else {
      var userInfo = {
        ArticleID: this.ArticleID,
        UserID: this.userInfo.ID,
        Info: this.textarea,
      };
    }
   // //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = this.entercode3;
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result);
      if (result.Code == 1) {
        this.textarea = "";
        this.Load()
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
}
