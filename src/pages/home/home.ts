import { Component, ElementRef } from '@angular/core';
import { NavController, IonicPage, } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Parameter } from './../../model/Model';
import { HttpService } from './../../providers/HttpService';
import { NativeService } from './../../providers/NativeService';
declare var AMap;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild('slide') slides: Slides
  @ViewChild('slide2') slides2: Slides;
  @ViewChild('mySlider')
  mySlider: ElementRef;
  userData = [];
  slideflag = true;
  slidenum = 0;
  Datacontent = [];
  Dataslide = [];
  Databtn = [];
  navlist = [];
  selectedSegment: string = "0"
  userID: any;
  name = [];
  img9 = "assets/imgs/code.png";
  img10 = "assets/imgs/cheat.png";
  img11 = "assets/imgs/search.png";
  pet: string = "kittens";
  //定位有关
  currentAddress = "正在定位";
  map: any;
  mapIsComplete: boolean = false;
  isPositioning = false;
  currentLatitude = "0";
  currentLongitude = "0";
  geocoder: any;
  citycode: string = "";
  //private tabs: Tab;
  gotoflag = true;
  private defaultCitycode = "1101";
  constructor(public navCtrl: NavController,
    private httpService: HttpService,
    private storage: Storage,
    private nativeService: NativeService, ) {

  }
  ionViewWillEnter() {
    /* if(this.gotoflag){
      this.navCtrl.push("FirstPage");
      this.gotoflag=false;
    }else{

    } */

  }
  //点击跳转加载信息
  gotopage(num, ID) {
    ////console.info(ID)
    this.slides.slideTo(num, 500);
    this.slideflag = false;
    this.slidenum = num;
    this.realid();
  }
  //获取缓存信息
  ionViewDidLoad() {
    // this.mapLocationAndroid();
    this.Initialization();
    if (this.nativeService.isMobile()) {
      this.mapLocationAndroid();
    } else {
      this.getlocationWX();
    }

    // this.storage.get("userinfo").then(val => {
    //   if (val != null) {
    //     this.userID = val.address.ID;
    //     this.Initialization2();
    //     ////console.info(val);
    //   }
    //   ////console.info(this.userID);
    // })
    // this.mapLocationAndroid();
  }
  //滑动触发事件
  slideChanged() {
    let currentIndex = 0;
    if (this.slides.getActiveIndex() == this.navlist.length) {
      currentIndex = (this.slides.getActiveIndex() - 1);
    } else {
      currentIndex = this.slides.getActiveIndex();
    }
    if (this.slideflag == true) {
      // //console.info(this.navlist[currentIndex].ID);
      this.realid();
    } else {

    }
    this.selectedSegment = currentIndex.toString();
    if (currentIndex > 3 && this.slideflag == true) {
      this.slides2.slideTo((currentIndex - 3), 500);
    } else if (currentIndex == 0 && this.slideflag == true) {
      this.slides2.slideTo(0, 500);
    }
    this.slidenum = currentIndex;
    this.slideflag = true;
  }
  //回到顶部
  /* private goTop() {
    let lyBg = this.mySlider.nativeElement;
    lyBg.addEventListener('scrollLeft', function () {
      var top = lyBg.scrollLeft;
      //console.info(top); 
    }, false);


  } */
  //页面跳转
  GotoNitice() {
    this.navCtrl.push('NoticePage');
  }
  gotologin() {
    this.navCtrl.push('LoginPage');
  }
  goshoplist() {
    this.navCtrl.push('ShopgoodscarPage');
  }
  //获取主要内容
  realid() {
    var userInfo = {
      Relid:"",
    }
    var parameter = new Parameter();
    parameter.jyh = "1004";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      console.log(result);
      if (result.Code == 1) {
        this.nativeService.hideLoading();
        for (var i = 0; i < result.Data.length; i++) {
          if (result.Data[i].product != '') {
            result.Data[i].productList = result.Data[i].product;
          }
        }
        this.userData = result.Data;
        this.Dataslide = [];
        this.Databtn = [];
        this.Datacontent = [];
        for (var n = 0; n < this.userData.length; n++) {
          if (this.userData[n].toltype == "1") {
            this.Dataslide.push(this.userData[n]);
          } else if (this.userData[n].toltype == "2") {
            this.Databtn.push(this.userData[n]);
          } else {
            this.Datacontent.push(this.userData[n]);
          }
        }
      }
    });
  }
  //初始加载
  Initialization2() {
    console.log('Initialization2 invoke');
    var userInfo = {
      wedID:'' //this.userID,
    }
    var parameter = new Parameter();
    parameter.jyh = "1003";
    parameter.parm = JSON.stringify(userInfo);
    console.log('Initialization2 here');
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      this.realid();
      if (result.Code == "1") {
        if (result.Data != null && result.Data.length > 0) {
          this.navlist = result.Data;
          // this.realid(result.Data[0].ID);
        }
      }
    })
  }
  gotosearch() {
    // //console.info("11")
    this.navCtrl.push("SearchPage");
  }

  Initialization() {
    // var dcode = this.citycode.length > 4 ? this.citycode.substring(0, 4) : this.citycode;
    if (this.citycode == this.defaultCitycode) {
      return false;
    }
    var userInfo = {
      area: this.citycode == "" ? this.defaultCitycode : this.citycode,
      // area: "3100"
    };
    var parameter = new Parameter();
    parameter.jyh = "1002";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      console.log('1002>');
      var result = JSON.parse(res.result);
      var address: any;
      var userinform: any;
      //if (this.userID != result.Data.ID) {
       // this.userID = result.Data.ID;
        this.Initialization2();
      //}
      this.storage.get("userinfo").then(val => {
        if (val != null) {
          address = val.address;
          userinform = val.userinform;
          address = result.Data;
        } else {
          userinform = { "ID": "none" };
          address = result.Data;
        }
        this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(val => {

        });
      });
    })
  }
  mapLocationAndroid() {
    this.isPositioning = true;
    this.nativeService.getUserLocation().subscribe(position => {
      this.currentLatitude = position['lat'];
      this.currentLongitude = position['lng'];
      this.storage.set("position", { 'currentLatitude': position['lat'], 'currentLongitude': position['lng'] }).then(val => {

      });
      this.convertToAddress(this.currentLongitude, this.currentLatitude);
      this.isPositioning = false;
    }, () => {
      this.isPositioning = false;
    });
  }
  convertToAddress(longitude, latitude) {
    //let that = this;
    AMap.service('AMap.Geocoder', () => {
      this.geocoder = new AMap.Geocoder({
        city: "010"//城市，默认：“全国”
      });
      this.geocoder.getAddress([longitude, latitude], (status, result) => {
        var list = result.regeocode.addressComponent;
        //console.log(list);
        var address = list.street;
        var citycode = list.adcode;
        this.citycode = citycode;
        this.currentAddress = address;
        this.Initialization();
      });
    });
  }
  /* 微信获取地理位置 */
  getlocationWX() {
    var that = this;
    wx.ready(function () {
      wx.getLocation({
        type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        success: function (res) {
          var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
          var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
          //var speed = res.speed; // 速度，以米/每秒计
          //var accuracy = res.accuracy; // 位置精度
          that.Initialization3(latitude, longitude);
        }
      });
    })
  }
  Initialization3(latitude: string, longitude: string) {
    var userInfo = {
      latitude: latitude,
      longitude: longitude
    };
    var parameter = new Parameter();
    parameter.jyh = "1127";
    parameter.parm = JSON.stringify(userInfo);
    this.httpService.post("/MobService/Index", parameter).map(res => res.json()).subscribe(res => {
      var result = JSON.parse(res.result);
      //console.log(result);
      var address: any;
      var userinform: any;
      this.storage.get("userinfo").then(val => {
        if (val != null) {
          address = val.address;
          userinform = val.userinform;
          address = result.Data;
        } else {
          userinform = { "ID": "none" };
          address = result.Data;
        }
        if (this.userID != address.ID) {
          this.userID = address.ID;
          this.Initialization2();
        }
        this.storage.set("userinfo", { 'address': address, 'userinform': userinform }).then(val => {
        });
      });
    })
  }

}

