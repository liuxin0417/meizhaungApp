import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupBuyListPage } from './group-buy-list';

@NgModule({
  declarations: [
    GroupBuyListPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupBuyListPage),
  ],
})
export class GroupBuyListPageModule {}
