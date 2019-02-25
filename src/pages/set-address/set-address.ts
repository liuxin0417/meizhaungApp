import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { CityPickerService } from "./../../providers/CityPicker";
import { NativeService } from './../../providers/NativeService';
import { Storage } from '@ionic/storage';
import { Parameter } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';

@IonicPage()
@Component({
  selector: 'page-set-address',
  templateUrl: 'set-address.html',
})
export class SetAddressPage {
  img = "assets/imgs/guanbi.png";
  impleColumns: any[];
  cityData: any[]; //城市数据
  cityName: string = '山东省-烟台市-莱山区'; //初始化城市名
  code = "370613"; //城市编码
  province = "370000";
  city = '370600';
  region: any;
  pepperoni = true;
  Detailedaddress: any;
  Username: any;
  tel: any;
  userinfo: any;
  userID: any;
  itemID: any;
  addresstotal = '山东省烟台市莱山区';
  Defaultadress = '山东省-烟台市-莱山区';
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public cityPickerSev: CityPickerService,
    private httpService: HttpService,
    private nativeService: NativeService,
    //private storage: Storage,
    /* private app: App */) {
    this.userinfo = this.navParams.get("userinfo");
    //console.info(this.userinfo);
    this.userID = this.userinfo[2].userID
    if (this.userinfo[0].type != 3) {
      this.Username = this.userinfo[1].value.username;
      this.tel = this.userinfo[1].value.tel;
      this.Detailedaddress = this.userinfo[1].value.Detailedaddress;
      this.cityName = this.userinfo[1].value.Defaultadress;
      this.itemID = this.userinfo[1].value.ID;
      this.Defaultadress = this.userinfo[1].value.Defaultadress;
      var arr = this.userinfo[1].value.Defaultadress.split("-");
      this.addresstotal = arr[0] + arr[1] + arr[2];
      this.code=this.userinfo[1].value.area;
      this.city=this.userinfo[1].value.city;
      this.province=this.userinfo[1].value.province;
    }
  }

  ionViewDidLoad() {
    this.setCityPickerData();
    if (this.userinfo[0].type == 1) {
      this.pepperoni = true;
    } else {
      this.pepperoni = false;
    }

  }

  setCityPickerData() {
    this.cityPickerSev.getCitiesData()
      .then(data => {
        this.cityData = data;
      });
  }
  cityChange(event) {
    this.code = event['region'].value;
    this.city = event['city'].value;
    this.province = event['province'].value;
    this.addresstotal = event['province'].text + event['city'].text + event['region'].text;
    this.Defaultadress = event['province'].text + "-" + event['city'].text + "-" + event['region'].text;
  }
  saveaddress() {
    //var that = this;
    //console.info("code："+this.code+":::city："+this.city+"::::province："+this.province)

    var isDefalut = true;
    if (this.pepperoni == true) {
      isDefalut = true;
    } else {
      isDefalut = false;
    }
    if (this.Username == undefined) {
      this.nativeService.showToast("姓名不能为空");
      return;
    } else if (this.tel == undefined) {
      this.nativeService.showToast("电话不能为空");
      return;
    } else if (this.Detailedaddress == undefined) {
      this.nativeService.showToast("地址不能为空");
      return;
    }
    if (this.tel.length != 11) {
      this.nativeService.showToast("请正确填写电话号码");
      return;
    }
    var userInfo = {
      UserID: this.userID,
      Username: this.Username,
      Tel: this.tel,
      Province: this.province,
      City: this.city,
      Area: this.code,
      Detailedaddress: this.Detailedaddress,
      IsDefalut: isDefalut,
      Address: this.addresstotal + this.Detailedaddress,
      Defaultadress: this.Defaultadress,
    };
    //console.info(userInfo);
    var parameter = new Parameter();
    parameter.jyh = "1012";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("提交中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      //console.info(result);
      if (result.Code != 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
        this.navCtrl.pop();
      }

    })
  }
  resaveaddress() {
    var isDefalut = true;
    if (this.pepperoni == true) {
      isDefalut = true;
    } else {
      isDefalut = false;
    }

    var userInfo = {
      ID: this.itemID,
      Username: this.Username,
      Tel: this.tel,
      Province: this.province,
      City: this.city,
      Area: this.code,
      Detailedaddress: this.Detailedaddress,
      IsDefalut: isDefalut,
      Address: this.addresstotal + this.Detailedaddress,
      Defaultadress: this.Defaultadress,
    };
    //console.info(userInfo)
    var parameter = new Parameter();
    parameter.jyh = "1022";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("提交中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code != 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
        this.navCtrl.pop();
      }

    })
  }
  delete() {
    var userInfo = {
      ID: this.itemID,
    };
    var parameter = new Parameter();
    parameter.jyh = "1026";
    parameter.parm = JSON.stringify(userInfo);
    this.nativeService.showLoading("获取中");
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      this.nativeService.hideLoading();
      var result = JSON.parse(res.result);
      if (result.Code != 1) {
        this.nativeService.showToast(result.Msg);
      } else {
        this.nativeService.showToast(result.Msg);
        this.navCtrl.pop();
      }

    })
  }
}
