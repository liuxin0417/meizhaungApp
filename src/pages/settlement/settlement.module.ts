import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettlementPage } from './settlement';
import {PopupPageModule} from '../../componnets/popup/popup.module';

@NgModule({
  declarations: [
    SettlementPage,
  ],
  imports: [
    IonicPageModule.forChild(SettlementPage),
    PopupPageModule,
  ],
})
export class SettlementPageModule {}
