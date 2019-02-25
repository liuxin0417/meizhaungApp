import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettlementSignlePage } from './settlement-signle';
import {PopupPageModule} from '../../componnets/popup/popup.module';
@NgModule({
  declarations: [
    SettlementSignlePage,
  ],
  imports: [
    IonicPageModule.forChild(SettlementSignlePage),
    PopupPageModule,
  ],
})
export class SettlementSignlePageModule {}
