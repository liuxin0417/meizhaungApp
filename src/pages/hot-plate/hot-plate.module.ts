import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HotPlatePage } from './hot-plate';

@NgModule({
  declarations: [
    HotPlatePage,
  ],
  imports: [
    IonicPageModule.forChild(HotPlatePage),
  ],
})
export class HotPlatePageModule {}
