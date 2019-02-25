import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeenListPage } from './seen-list';

@NgModule({
  declarations: [
    SeenListPage,
  ],
  imports: [
    IonicPageModule.forChild(SeenListPage),
  ],
})
export class SeenListPageModule {}
