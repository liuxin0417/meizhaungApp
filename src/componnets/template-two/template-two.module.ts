import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateTwoPage } from './template-two';

@NgModule({
  declarations: [
    TemplateTwoPage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateTwoPage),
  ],
  exports: [
    TemplateTwoPage
  ]
})
export class TemplateTwoPageModule {}
