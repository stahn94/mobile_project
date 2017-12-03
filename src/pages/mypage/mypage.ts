import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemdetailPage } from '../itemdetail/itemdetail';
import { ChattingPage } from '../chatting/chatting';

@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MypagePage');
  }
  GoChattingPage(){
    this.navCtrl.push(ChattingPage);
  }
  GoItemdetailPage(){
    this.navCtrl.push(ItemdetailPage);
  }
}
