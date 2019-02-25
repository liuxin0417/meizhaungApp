import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JudegePage } from './judege';
import {UserJudgePageModule} from './../../componnets/user-judge/user-judge.module'

@NgModule({
  declarations: [
    JudegePage,
  ],
  imports: [
    IonicPageModule.forChild(JudegePage),
    UserJudgePageModule
  ],
})
export class JudegePageModule {}
