import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushCodePage } from './push-code';

@NgModule({
  declarations: [
    PushCodePage,
  ],
  imports: [
    IonicPageModule.forChild(PushCodePage),
  ],
})
export class PushCodePageModule {}
