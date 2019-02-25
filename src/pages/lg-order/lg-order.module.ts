import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LgOrderPage } from './lg-order';
import { SelectPicturePageModule } from "../../componnets/select-picture/select-picture.module";

@NgModule({
  declarations: [
    LgOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(LgOrderPage),
    SelectPicturePageModule
  ],
})
export class LgOrderPageModule {}
