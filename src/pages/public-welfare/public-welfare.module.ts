import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicWelfarePage } from './public-welfare';

@NgModule({
  declarations: [
    PublicWelfarePage,
  ],
  imports: [
    IonicPageModule.forChild(PublicWelfarePage),
  ],
})
export class PublicWelfarePageModule {}
