import { NgModule } from '@angular/core';
import { TemplatePageModule } from './../../componnets/template/template.module';
import { TemplateTwoPageModule} from './../../componnets/template-two/template-two.module'
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    TemplatePageModule,
    TemplateTwoPageModule
  ],
})
export class HomePageModule {}
