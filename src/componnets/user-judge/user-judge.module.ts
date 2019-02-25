import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserJudgePage } from './user-judge';

@NgModule({
  declarations: [
    UserJudgePage,
  ],
  imports: [
    IonicPageModule.forChild(UserJudgePage),
  ],
  exports: [
    UserJudgePage
  ]
})
export class UserJudgePageModule {}
