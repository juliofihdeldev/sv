import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RegisterStepTwoPage } from '../register_step_two/register_step_two';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.stepTwo();
  }

  stepTwo(){
    this.navCtrl.push(RegisterStepTwoPage);
  }

}
