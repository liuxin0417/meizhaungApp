import { CityPickerModule } from 'ionic2-city-picker';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddressPage } from './address';

@NgModule({
  declarations: [
    AddressPage,
  ],
  imports: [
    IonicPageModule.forChild(AddressPage),
    CityPickerModule,
  ],
})
export class AddressPageModule {}
