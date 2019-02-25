import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReturnReasonPage } from './return-reason';
import { SelectPicturePageModule } from "../../componnets/select-picture/select-picture.module";

@NgModule({
  declarations: [
    ReturnReasonPage,
  ],
  imports: [
    IonicPageModule.forChild(ReturnReasonPage),
    SelectPicturePageModule
  ],
})
export class ReturnReasonPageModule {}
