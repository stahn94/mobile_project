import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { Mypage1Page } from '../mypage1/mypage1';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';




@NgModule({
  declarations: [
    LoginPage,
    Mypage1Page,
    HomePage,
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
})
export class LoginPageModule {}
