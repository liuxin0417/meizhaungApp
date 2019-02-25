import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalArticlePage } from './personal-article';

@NgModule({
  declarations: [
    PersonalArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalArticlePage),
  ],
})
export class PersonalArticlePageModule {}
