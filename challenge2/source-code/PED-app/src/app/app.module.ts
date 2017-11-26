import { MathArDetailsPage } from '../pages/math-ar-details/math-ar-details';
import { MathArPage } from '../pages/math-ar/math-ar';
import { MathDetailsPage } from '../pages/math-details/math-details';
import { MathEnPage } from '../pages/math-en/math-en';
import { ArabicHomePage } from '../pages/arabic-home/arabic-home';
import { EnglishHomePage } from '../pages/english-home/english-home';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EnglishHomePage,
    ArabicHomePage,
    MathEnPage,
    MathDetailsPage,MathArPage,MathArDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EnglishHomePage,
    ArabicHomePage,
    MathEnPage,
    MathDetailsPage,MathArPage,MathArDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
