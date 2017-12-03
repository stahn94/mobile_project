import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MypagePage } from './mypage';
import { ChattingPage } from '../chatting/chatting';
import { ItemdetailPage } from '../itemdetail/itemdetail';

@NgModule({
  declarations: [
    MypagePage,
    ChattingPage,
    ItemdetailPage
  ],
  imports: [
    IonicPageModule.forChild(MypagePage),
  ],
})
export class MypagePageModule {}
