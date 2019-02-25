import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CollectionPage } from './collection';
import { PopupPageModule } from "../../componnets/popup/popup.module"

@NgModule({
  declarations: [
    CollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(CollectionPage),
    PopupPageModule
  ],
})
export class CollectionPageModule {}
