import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
import { Parameter } from './../../model/Model';
/**
 * Generated class for the PopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html',
})
export class PopupPage {
  @Input() flag: boolean;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() flagChange = new EventEmitter<any>();
  @Input() flagsecond: boolean;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() flagsecondChange = new EventEmitter<any>();
  @Input() addresList:object;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() addresListChange = new EventEmitter<any>();
  @Input() defaultAddress:any;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() defaultAddressChange = new EventEmitter<any>();
  @Input() ordermsg:any;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() ordermsgChange = new EventEmitter<any>();
  @Input() list:any;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() listChange = new EventEmitter<any>();
  @Input() FranchiseeID:object;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() FranchiseeIDChange = new EventEmitter<any>();
  
  img="assets/imgs/close.png";
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private httpService: HttpService,
     private nativeService: NativeService,
     /* private storage: Storage, */) {
  }
  ionViewDidLoad() {
    
  }
  getaddress(index) {
    var that = this;
    this.flagsecond = false;
    this.flagsecondChange.emit(this.flagsecond);
    this.defaultAddress=this.addresList[index];
    ////console.info(this.defaultAddress)
    this.defaultAddressChange.emit(this.defaultAddress);
    this.getNewMessage(this.list,this.defaultAddress.ID);
    setTimeout(() => {
      that.flag = false;
      that.flagChange.emit(this.flag);
    }, 150);
  }
  getaddress2(){
    var that = this;
    this.flagsecond = false;
    this.flagsecondChange.emit(this.flagsecond);
    setTimeout(() => {
      that.flag = false;
      that.flagChange.emit(this.flag);
    }, 150);
  }
  getNewMessage(ProductID,addressID) {
    var userInfo = {
      ProductID:ProductID,
      FranchiseeID:this.FranchiseeID,
      AddressID:addressID,
    };
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1036";
    parameter.parm = JSON.stringify(userInfo);
    //console.log(parameter);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if(result.Code==1){
        // this.ordermsg=result.Data;
        console.log(this.ordermsg);
       // //console.info(this.ordermsg);
        // this.ordermsgChange.emit(this.ordermsg);
      }else{
        
        this.nativeService.showToast(result.Msg);
      }
    })
  }
}
