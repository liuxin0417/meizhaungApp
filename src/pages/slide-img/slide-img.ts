import { Component, ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-slide-img',
  templateUrl: 'slide-img.html',
})
export class SlideImgPage {
  slide=[];
  slideindex: number;
  height: any;
  close="assets/imgs/fanhui2.png";
  @ViewChild('Slides') slider: ElementRef;
  @ViewChild(Slides) Slides: Slides;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController, ) {
  
    
  }
  ionViewWillEnter() {
    this.height = (document.body.clientHeight);
    this.slide = this.navParams.get("slide");
    this.slideindex = this.navParams.get("slideindex");
    ////console.info(this.height);
    
  }
  ionViewDidLoad() {
    // this.slide = this.navParams.get("slide");
    // this.slideindex = this.navParams.get("slideindex");
    // //console.info(this.slideindex);
    /*  this.slides.slideTo(this.slideindex,0); */
    // this.goToSlide()
  }
  hidepage() {
    this.viewCtrl.dismiss();
  }
  goToSlide() {
    this.Slides.slideTo(1, 1500);
  }
  slideto() {
    /*  this.slides.slideTo(this.slideindex,0); */
  }
  slideChanged() {
    let currentIndex = this.Slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    // this.goToSlide();
  }
}
