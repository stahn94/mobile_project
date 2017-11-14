import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mypage1Page } from './mypage1';
import { ChattingPage } from '../chatting/chatting';
import { UserlistPage } from '../userlist/userlist';



@NgModule({
  declarations: [
    Mypage1Page,
    ChattingPage,
    UserlistPage,
  ],
  imports: [
    IonicPageModule.forChild(Mypage1Page),
  ],
})
export class Mypage1PageModule {}
