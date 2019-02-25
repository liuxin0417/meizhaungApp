import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetAddressPage } from './set-address';
import { CityPickerModule } from 'ionic2-city-picker';

@NgModule({
  declarations: [
    SetAddressPage,
  ],
  imports: [
    IonicPageModule.forChild(SetAddressPage),
    CityPickerModule
  ],
})
export class SetAddressPageModule {}
