import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReturnTypeListPage } from './return-type-list';

@NgModule({
  declarations: [
    ReturnTypeListPage,
  ],
  imports: [
    IonicPageModule.forChild(ReturnTypeListPage),
  ],
})
export class ReturnTypeListPageModule {}
