import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChargeTypePage } from './charge-type';

@NgModule({
  declarations: [
    ChargeTypePage,
  ],
  imports: [
    IonicPageModule.forChild(ChargeTypePage),
  ],
})
export class ChargeTypePageModule {}
