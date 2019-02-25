import { TemplateThreePageModule } from '../../componnets/template-three/template-three.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroupBuyDetailPage } from './group-buy-detail';

@NgModule({
  declarations: [
    GroupBuyDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GroupBuyDetailPage),
    TemplateThreePageModule
  ],
})
export class GroupBuyDetailPageModule { }
