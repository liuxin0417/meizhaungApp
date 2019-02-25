import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopGoodsListPage } from './shop-goods-list';

@NgModule({
  declarations: [
    ShopGoodsListPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopGoodsListPage),
  ],
})
export class ShopGoodsListPageModule {}
