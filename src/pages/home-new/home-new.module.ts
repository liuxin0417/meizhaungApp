import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeNewPage } from './home-new';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    HomeNewPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeNewPage),
    ComponentsModule
  ],
})
export class HomeNewPageModule {}
