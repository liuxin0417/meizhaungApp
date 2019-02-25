import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReturnTypePage } from './return-type';
import {PopupPageModule} from '../../componnets/popup/popup.module';

@NgModule({
  declarations: [
    ReturnTypePage,
  ],
  imports: [
    IonicPageModule.forChild(ReturnTypePage),
    PopupPageModule,
  ],
})
export class ReturnTypePageModule {}
