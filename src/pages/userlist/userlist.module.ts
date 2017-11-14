import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserlistPage } from './userlist';
import { UserdetailPage } from '../userdetail/userdetail';


@NgModule({
  declarations: [
    UserlistPage,
    UserdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(UserlistPage),
  ],
})
export class UserlistPageModule {}
