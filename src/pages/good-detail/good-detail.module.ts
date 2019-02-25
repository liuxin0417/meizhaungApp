import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserJudgePageModule } from './../../componnets/user-judge/user-judge.module'
import { GoodDetailPage } from './good-detail';
import { PopupPageModule } from '../../componnets/popup/popup.module';
import { TemplateTwoPageModule } from '../../componnets/template-two/template-two.module';
@NgModule({
  declarations: [
    GoodDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GoodDetailPage),
    UserJudgePageModule,
    PopupPageModule,
    TemplateTwoPageModule,
  ],
})
export class GoodDetailPageModule { }
