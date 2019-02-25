import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EvaluatePage } from './evaluate';
import { SelectPicturePageModule } from "../../componnets/select-picture/select-picture.module";

@NgModule({
  declarations: [
    EvaluatePage,
  ],
  imports: [
    IonicPageModule.forChild(EvaluatePage),
    SelectPicturePageModule
  ],
})
export class EvaluatePageModule {}
