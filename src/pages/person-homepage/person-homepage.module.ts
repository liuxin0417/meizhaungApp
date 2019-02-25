import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonHomepagePage } from './person-homepage';

@NgModule({
  declarations: [
    PersonHomepagePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonHomepagePage),
  ],
})
export class PersonHomepagePageModule {}
