import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { QuestionPage } from '../question/question';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController) {

  }
  gotoQusetion() {
    var modeal = this.modalCtrl.create(QuestionPage);
    modeal.present();
  }
}
