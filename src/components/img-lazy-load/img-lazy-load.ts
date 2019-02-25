import { Component,Input,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, InfiniteScroll, Content } from 'ionic-angular';
import { NgIf } from '@angular/common';
/**
 * Generated class for the ImgLazyLoadComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'img-lazy-load',
  templateUrl: 'img-lazy-load.html'
})
export class ImgLazyLoadComponent {
  @ViewChild(Content) content: Content;
  text: string;
  default:string="../../assets/imgs/change.png";
  constructor() {
   
  }
  @Input() src: string //要显示的图片
  @Input() Ttype: number
  ngOnInit() {
    if(this.Ttype==1){
      this.default="assets/imgs/grey1.png"
    }else if(this.Ttype==2){
      this.default="assets/imgs/grey2.png"
    }else if(this.Ttype==3){
      this.default="assets/imgs/grey3.png"
    }
    let img = new Image();
    img.src = this.src;
    img.onload = () => {
      this.default = this.src;
      // setTimeout(() => {
       
      // }, 2000);
     
    }
  }
  // isInView() {
  //   var clientHeight = $document[0].documentElement.clientHeight;
  //   var clientWidth = $document[0].documentElement.clientWidth;
  //   var imageRect = $element[0].getBoundingClientRect();
  //   return (imageRect.top >= 0 && imageRect.top <= clientHeight + parseInt($attributes.imageLazyDistanceFromBottomToLoad)) &&
  //       (imageRect.left >= 0 && imageRect.left <= clientWidth + parseInt($attributes.imageLazyDistanceFromRightToLoad));
  // }
  doInfinite(infiniteScroll: InfiniteScroll) {
    console.info("显示图片")
  }

}
