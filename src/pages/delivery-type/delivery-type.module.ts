import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeliveryTypePage } from './delivery-type';

@NgModule({
  declarations: [
    DeliveryTypePage,
  ],
  imports: [
    IonicPageModule.forChild(DeliveryTypePage),
  ],
})
export class DeliveryTypePageModule {}
