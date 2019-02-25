import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { FileObj } from "../../model/FileObj";

@IonicPage()
@Component({
  selector: 'page-template',
  templateUrl: 'template.html',
})
export class TemplatePage {
  @Input() max: number;
  @Input() userData: any;   //图片列表,与fileObjListChange形成双向数据绑定
  // @Output() userDataChange = new EventEmitter<any>();
  @Input() Datacontent: string;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() DatacontentChange = new EventEmitter<any>();
  @Input() Dataslide: string;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() DataslideChange = new EventEmitter<any>();
  @Input() Databtn: string;   //图片列表,与fileObjListChange形成双向数据绑定
  @Output() DatabtnChange = new EventEmitter<any>();
  img1 = "/assets/imgs/change.png";
  img2 = "/assets/imgs/goodthing.png";
  img3 = "/assets/imgs/liveshow.png";
  img4 = "/assets/imgs/order.png";
  img5 = "/assets/imgs/temporary/banner.png";
  img6 = "/assets/imgs/temporary/name.png";
  img7 = "/assets/imgs/temporary/tomo.png";
  img8 = "/assets/imgs/temporary/swiper1.png";
  ngimg = "/assets/imgs/temporary/banner.png";
  ngimg2 = "/assets/imgs/temporary/shangpin.png";
  ngimg3 = "/assets/imgs/temporary/shangpin2.png";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  public goto(item, index) {
    //this.navCtrl.push("GoodDetailPage")
    var t = this.select(item, index);
    if (t.Url != "" && t.Url != undefined && t.Url != null) {
      var arry = t.Url.split('/');
      if (arry.length > 0) {
        this.navCtrl.push(arry[0], {
          goodsid: arry[1],
        });
      }
    } else {

    }

  }
  slice(string) {
    if (string != "" && string != null) {
      return string.slice(0, 10) + "...";
    }
  }
  fixedNum(item){
    return item.toFixed(2)
  }
  gotoitem(item) {
    var t = item;
    if (t.Url != "" && t.Url != undefined && t.Url != null) {
      var arry = t.Url.split('/');
      if (arry.length > 0) {
        this.navCtrl.push(arry[0], {
          goodsid: arry[1],
        });
      }
    } else {

    }
  }
  group(item, index) {
    var itemlist = [];
    for (var n = 0; n < item.length; n++) {
      if (item[n].GroupLocation == index) {
        itemlist.push(item[n]);
      } else {
      }
    };
    return itemlist;
  }
  select(item, index) {
    //var itemlist = [];
    for (var n = 0; n < item.length; n++) {
      if (item[n].GroupLocation == index) {
        return item[n];
      } else {
      }
    }
  };
  gotoGoodsPage() {
    this.navCtrl.push("GoodsPage");
  }
  gotogroup(item) {
    // //console.info(i)
    this.navCtrl.push(item.url);
    /* if(i==0){
      this.navCtrl.push("GroupBuyListPage");
    }else if(i==1){
      this.navCtrl.push("SecondToBuyPage");
    }else if(i==2){
      this.navCtrl.push("PublicWelfarePage");
    }else if(i==3){
      this.navCtrl.push("ExchangeGoodsPage");
    } */

  }
  /* 去优惠券列表 */
  gotoCouponListPage(item) {
    //console.info(item);
    this.navCtrl.push(item.productList[0].Url);
  }

  PushPage(item) {
    if (item.url != "" && item.url != null && item.url != undefined) {
      var arry = item.url.split('/');
      if (arry.length > 0) {
        this.navCtrl.push(arry[0], {
          goodsid: arry[1],
        });
      }
    }
  }
}
