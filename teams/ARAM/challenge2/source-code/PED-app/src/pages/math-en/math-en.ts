import { MathDetailsPage } from '../math-details/math-details';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-math-en',
  templateUrl: 'math-en.html',
})
export class MathEnPage {

  items=["Integral", "Derivative", "Sine (sin)", "Cosine (Cos)", "Tan (tan)"];

 

  integral: any = { trans:"التكامل" ,head:"Integral", defi:"في الرياضيات، مكاملة دالة هي نوع من التعميم لكميات قابلة للتجزئة مثل المساحة أو الحجم أو الكتلة أو أي مجموع لعناصر متناهية في الصغر. وأيضاً يمكن أن يُنظر إلى عملية التكامل على أنها عملية عكسية لعملية التفاضل.", photo: "Integral.PNG", ex: "Integral exampleEn.PNG", more: "https://ar.wikipedia.org/wiki/%D8%AA%D9%83%D8%A7%D9%85%D9%84" };
  
    deriv: any = { trans:"المشتقة" ,head:"Derivative", defi:"العدد المُشتَقّ في نقطة، على رسم بياني لدالة ذات متغيرات وقيم حقيقية، هو معامل المماس الموجِّهُ. يعبر التفاضل عن المعدل الذي تتغير به قيمة y نتيجة تغير قيمة x توجد بينهما علاقة رياضية أو دالة رياضية.", photo: "Derivative.PNG", ex: "DerivativeExampleEn.PNG", more:"https://ar.wikipedia.org/wiki/%D9%85%D8%B4%D8%AA%D9%82_(%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA)" };
  
    sin: any = { trans:"جيب الزاوية (جا)" ,head:"Sine (sin)", defi:"في الرياضيات، جيب زاوية (بالإنجليزية: Sine of an angle) هو طول الضلع المقابل لهذه الزاوية مقسوما على طول الوتر في مثلث ذي زاوية قائمة، حيث يكون الوتر هو الضلع المقابل للزاوية القائمة. ويرمز له بالرمز (حا) أو ", photo: "Sine.PNG", ex: "sine Example.jpg", more: "https://ar.wikipedia.org/wiki/%D8%AC%D9%8A%D8%A8_(%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA)" };
  
    cos: any = { trans:"جيب تمام الزاوية (جتا)" ,head:"Cosine (Cos)", defi:"في الرياضيات، السهم أو جيب التمام هو النسبة بين الضلع المحاذي لزاوية والوتر في مثلث ذي زاوية قائمة، حيث يكون الوتر هو الضلع المقابل للزاوية القائمة.", photo: "consine.PNG", ex: "sine Example.jpg", more: "https://ar.wikipedia.org/wiki/%D8%AC%D9%8A%D8%A8_%D8%A7%D9%84%D8%AA%D9%85%D8%A7%D9%85" };
  
    tan: any = { trans:"ظل الزاوية (ظا)" ,head:"Tan(tan)", defi:"ظل الزاوية يُعرف بأنه النسبة بين الجيب وجيب التمام لنفس الزاوية.", photo: "tan.PNG", ex: "sine Example.jpg", more: "https://ar.wikipedia.org/wiki/%D8%B8%D9%84_(%D8%B1%D9%8A%D8%A7%D8%B6%D9%8A%D8%A7%D8%AA)" };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  itemSelected(item:any){
    console.log(item);
        
    switch (item) {
      case "Integral":
        this.navCtrl.push(MathDetailsPage,{item: this.integral});
        break;
        case "Derivative":
        this.navCtrl.push(MathDetailsPage,{item: this.deriv});
        break;
        case "Sine (sin)":
        this.navCtrl.push(MathDetailsPage,{item: this.sin});
        break;
        case "Cosine (Cos)":
        this.navCtrl.push(MathDetailsPage,{item: this.cos});
        break;
        case "Tan (tan)":
        this.navCtrl.push(MathDetailsPage,{item: this.tan});
        break;
    
      default:
      this.navCtrl.push(MathDetailsPage,{item: this.cos});
        break;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MathEnPage');
  }

}
