import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConcernerListPage } from './concerner-list';

@NgModule({
  declarations: [
    ConcernerListPage,
  ],
  imports: [
    IonicPageModule.forChild(ConcernerListPage),
  ],
})
export class ConcernerListPageModule {}
