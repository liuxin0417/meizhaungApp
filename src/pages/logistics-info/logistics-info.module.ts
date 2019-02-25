import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogisticsInfoPage } from './logistics-info';

@NgModule({
  declarations: [
    LogisticsInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(LogisticsInfoPage),
  ],
})
export class LogisticsInfoPageModule {}
