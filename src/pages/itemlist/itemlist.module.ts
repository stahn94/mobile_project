import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ItemlistPage } from './itemlist';
import { ItemdetailPage } from '../itemdetail/itemdetail';


@NgModule({
  declarations: [
    ItemlistPage,
    ItemdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ItemlistPage),
  ],
})
export class ItemlistPageModule {}
