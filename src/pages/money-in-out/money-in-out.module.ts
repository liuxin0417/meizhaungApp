import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoneyInOutPage } from './money-in-out';

@NgModule({
  declarations: [
    MoneyInOutPage,
  ],
  imports: [
    IonicPageModule.forChild(MoneyInOutPage),
  ],
})
export class MoneyInOutPageModule {}
