import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterStepTwoPage } from './register_step_two';

@NgModule({
  declarations: [
    RegisterStepTwoPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterStepTwoPage),
  ],
})
export class RegisterPageModule {}
