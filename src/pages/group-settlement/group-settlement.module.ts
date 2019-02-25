import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupSettlementPage } from './group-settlement';
import {PopupPageModule} from '../../componnets/popup/popup.module';

@NgModule({
  declarations: [
    GroupSettlementPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupSettlementPage),
    PopupPageModule,
  ],
})
export class GroupSettlementPageModule {}
