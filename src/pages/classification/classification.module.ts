import { SwiperPageModule } from './../../componnets/swiper/swiper.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassificationPage } from './classification';

@NgModule({
  declarations: [
    ClassificationPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassificationPage),
    SwiperPageModule
  ],
})
export class ClassificationPageModule {}
