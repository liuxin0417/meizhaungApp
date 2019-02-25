import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemplateThreePage } from './template-three';

@NgModule({
  declarations: [
    TemplateThreePage,
  ],
  imports: [
    IonicPageModule.forChild(TemplateThreePage),
  ],
  exports: [
    TemplateThreePage
  ]
})
export class TemplateThreePageModule { }
