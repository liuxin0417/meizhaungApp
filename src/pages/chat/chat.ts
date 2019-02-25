import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Parameter } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { ActionSheetController,Content} from 'ionic-angular';
//import { combineAll } from 'rxjs/operator/combineAll';


@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  img = "assets/imgs/temporary/3.png";
  img1 = "assets/imgs/jinru--hui.png";
  img2 = "assets/imgs/singer1.png";
  img3 = "assets/imgs/singer2.png";
  img7 = "assets/imgs/write.png";
  img8 = "assets/imgs/fasong.png";
  proid: any;
  textarea = "";
  userID: any;
  list: any;
  picurl: any;
  name: any;
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    //private app: App,
    private storage: Storage,
    private httpService: HttpService,
    private nativeService: NativeService,
    public actionSheetCtrl: ActionSheetController,
    /* private modalCtrl: ModalController, */ ) {
    this.proid = navParams.get("proid");
    this.name = navParams.get("name").slice(0, 20) + "...";;
    this.picurl = navParams.get("picurl");
    this.storage.get("userinfo").then(val => {
      if (val != null) {
        ////console.info(val);
        this.userID = val.userinform.ID,
        
        this.chat();
        this.scrollToBottom(100);
      }
      else {
      }
    });
  }
  ask() {
    if (this.textarea == '') {
      this.nativeService.showToast("评论内容不能为空！");
      return;
    } else {
      var userInfo = {
        UserID: this.userID,
        proID: this.proid,
        comcontent: this.textarea,
      };
    }
    ////console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1088";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      ////console.info(result);
      if (result.Code == 1) {
        this.textarea = "";
        this.chat();
        this.scrollToBottom(400);
      } else {
        this.nativeService.showToast(result.Msg);
      }

    })
  }
  scrollToBottom(number) {
    setTimeout(() => {
      // console.log(this.content.scrollToBottom);
      if (this.content != null) {
        if (this.content._scroll != null) {
          this.content.scrollToBottom();
        }
        // if(this.content.scrollToBottom)
      }
    }, number);
  }

  splice(item) {
    return item.split("T")[0];
  }
  chat() {
    if (this.userID == "") {
      return;
    } else {
      var userInfo = {
        UserID: this.userID,
        proID: this.proid,
      }
      var parameter = new Parameter();
      parameter.jyh = "1087";
      parameter.parm = JSON.stringify(userInfo);
      this.nativeService.showLoading("获取中");
      this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
        this.nativeService.hideLoading();
        var result = JSON.parse(res.result);
        //console.log(result);
        if (result.Code == "1") {

          this.list = result.Data;
          //console.log(this.list);
        } else {
        }
      });
    }
  }

}