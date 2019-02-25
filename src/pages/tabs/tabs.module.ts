import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { GoodscarPageModule } from '../goodscar/goodscar.module';
@NgModule({
    declarations: [
        TabsPage,
    ],
    imports: [
        IonicPageModule.forChild(TabsPage),
        GoodscarPageModule
    ],
})
export class TabsPageModule {}
