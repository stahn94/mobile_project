import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { Mypage1Page } from '../mypage1/mypage1';
import { ItemupPage } from '../itemup/itemup';
import { ItemlistPage } from '../itemlist/itemlist';
import { LoginPage } from '../login/login';


@NgModule({
  declarations: [
    HomePage,
    Mypage1Page,
    ItemupPage,
    ItemlistPage,
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
