import { Component ,Input, Output,EventEmitter} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UserJudgePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-judge',
  templateUrl: 'user-judge.html',
})
export class UserJudgePage {
  img="assets/imgs/temporary/logo.png";
  img2="assets/imgs/shoucang2.png";
  img3="assets/imgs/temporary/thing.jpg";
  img5="assets/imgs/zan.png";
  @Input() commite: object;
  @Output() commiteChange = new EventEmitter<any>();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  ionViewDidLoad() {
  }
  json(item){
    return JSON.parse(item);
  }
}
