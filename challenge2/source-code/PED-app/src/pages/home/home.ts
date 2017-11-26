import { ArabicHomePage } from '../arabic-home/arabic-home';
import { EnglishHomePage } from '../english-home/english-home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  showEnglish(){
    this.navCtrl.push(EnglishHomePage);
  }

  showArabic(){
    this.navCtrl.push(ArabicHomePage);
  }

}
