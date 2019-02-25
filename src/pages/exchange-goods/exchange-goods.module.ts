import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeGoodsPage } from './exchange-goods';

@NgModule({
  declarations: [
    ExchangeGoodsPage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeGoodsPage),
  ],
})
export class ExchangeGoodsPageModule {}
