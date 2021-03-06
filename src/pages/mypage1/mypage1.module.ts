import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Mypage1Page } from './mypage1';
import { ChattingPage } from '../chatting/chatting';
import { UserlistPage } from '../userlist/userlist';
import { ItemdetailPage } from '../itemdetail/itemdetail';

@NgModule({
  declarations: [
    Mypage1Page,
    ChattingPage,
    UserlistPage,
    ItemdetailPage
  ],
  imports: [
    IonicPageModule.forChild(Mypage1Page),
  ],
})
export class Mypage1PageModule {}
