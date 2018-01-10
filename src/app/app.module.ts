import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

// pages create
import { SignPage } from '../pages/sign/sign';
import { PassresetPage } from '../pages/passreset/passreset';
import { PassresetmessagePage } from '../pages/passresetmessage/passresetmessage';


// pages create register
import { RegisterPage } from '../pages/register/register';
import { RegisterStepTwoPage } from '../pages/register_step_two/register_step_two';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,SignPage,PassresetPage,PassresetmessagePage,RegisterPage,RegisterStepTwoPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,SignPage,PassresetPage,PassresetmessagePage,RegisterPage,RegisterStepTwoPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
