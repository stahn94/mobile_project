import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemupPage } from './itemup';
import { Mypage1Page } from '../mypage1/mypage1';


@NgModule({
  declarations: [
    ItemupPage,
    Mypage1Page,
  ],
  imports: [
    IonicPageModule.forChild(ItemupPage),
  ],
})
export class ItemupPageModule {}
