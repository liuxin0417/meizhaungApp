import { Storage } from '@ionic/storage';
import { HttpService } from './../../providers/HttpService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
//import { Parameter } from '../../model/Model';
import { NativeService } from '../../providers/NativeService';

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  //定位有关


  constructor(public navCtrl: NavController, public navParams: NavParams, public httpService: HttpService
    , public nativeService: NativeService, public storage: Storage, public app: App) {
  }

  ionViewDidLoad() {

  }

  ionViewWillEnter() {
    // this.mapLocationAndroid();
  }


}
