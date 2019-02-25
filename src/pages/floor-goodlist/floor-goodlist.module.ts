import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FloorGoodlistPage } from './floor-goodlist';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    FloorGoodlistPage,
  ],
  imports: [
    IonicPageModule.forChild(FloorGoodlistPage),
    ComponentsModule
  ],
})
export class FloorGoodlistPageModule {}
