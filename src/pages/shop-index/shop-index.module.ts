import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopIndexPage } from './shop-index';

@NgModule({
  declarations: [
    ShopIndexPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopIndexPage),
  ],
})
export class ShopIndexPageModule {}
