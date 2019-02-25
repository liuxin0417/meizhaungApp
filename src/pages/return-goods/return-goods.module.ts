import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReturnGoodsPage } from './return-goods';

@NgModule({
  declarations: [
    ReturnGoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReturnGoodsPage),
  ],
})
export class ReturnGoodsPageModule {}
