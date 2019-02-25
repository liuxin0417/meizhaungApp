import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublishArticlesPage } from './publish-articles';

@NgModule({
  declarations: [
    PublishArticlesPage,
  ],
  imports: [
    IonicPageModule.forChild(PublishArticlesPage),
  ],
})
export class PublishArticlesPageModule {}
