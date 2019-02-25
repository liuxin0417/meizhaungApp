import { Component ,ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';
import { Parameter } from './../../model/Model';
import { CityPickerService } from "./../../providers/CityPicker";
/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
  @ViewChild(Content) content: Content;
  img = "assets/imgs/new/bj.png";
  img2="assets/imgs/close.png"
  userID: any;
  simpleColumns: any[];
  item=[];
  itemD:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    //private motcrl: ModalController,
    private httpService: HttpService,
    private nativeService: NativeService,
    private storage: Storage,
    public cityPickerSev: CityPickerService,
  ) {
  }
  ionViewWillEnter(){
    this.scrollToTop();
    this.itemD=""
    this.storage.get("userinfo").then(val => {
      if (val != null) {
        this.userID = val.userinform.ID;
        this.load();
      } else {
        this.navCtrl.push("LoginPage",{showflag:true});
      }

    });
  }
 /*  ionViewDidLoad() {
    this.storage.get("userinfo").then(val => {
      if (val != null) {
        this.userID = val.userinform.ID
        this.load()
      } else {
        this.navCtrl.push("LoginPage",{showflag:true})
      }

    });
  } */
  creatpage(item,type) {
    var userinfo=[];
    if(type==1){
      userinfo=[{'type':1},{'value':this.itemD},{'userID':this.userID}];
    }else if(type==2){
      userinfo=[{'type':2},{'value':item},{'userID':this.userID}];
    }else if(type==3){
      userinfo=[{'type':3},{'value':""},{'userID':this.userID}];
    };
    ////console.info(userinfo)
   /*  var moddal = this.motcrl.create('SetAddressPage',{
      userinfo:userinfo
    });
    moddal.present(); */
    this.navCtrl.push("SetAddressPage",{
      userinfo:userinfo,
    })
  }
  load() {
    var userInfo = {
      UserID: this.userID,
    };
    var parameter = new Parameter();
    parameter.jyh = "1011";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code != 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
        this.item=result.Data;
        // this.itemD=result.Data2;
        for(var n=0;n<result.Data.length;n++){
          if(result.Data[n].IsDefalut==true){
            this.itemD=result.Data[n];
            this.item.splice(n,1);

          }
        }
       // //console.info(this.itemD)
      }

    })
  }
  scrollToTop() {
    setTimeout(() => {
      // console.log(this.content.scrollToBottom);
      if (this.content != null) {
        if (this.content._scroll != null) {
          this.content.scrollToTop();
        }
        // if(this.content.scrollToBottom)
      }
    },100);
  }

}
