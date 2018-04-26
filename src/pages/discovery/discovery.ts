import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { BaseUI } from '../../common/loading';
import { RestProvider } from '../../providers/rest/rest';
import { DetailsPage } from '../details/details';

@IonicPage()
@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html',
})
export class DiscoveryPage extends BaseUI {

  questions: string[];
  errosMessage: string;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public modalCtrl: ModalController) {
    super();
  }

  ionViewDidLoad() {
    this.getQuestions();
  }
  getQuestions(){
    var loading = super.showLoading(this.loadingCtrl, "加载中...");
    this.rest.getQuestions()
      .subscribe(
        q => {
          loading.dismiss();
          this.questions = q;  
        },
        error => this.errosMessage = <any>error);
  }
  doRefresh(refresher){
    this.getQuestions();
    refresher.complete();
  }
  gotoDetails(questionId) {
    this.navCtrl.push(DetailsPage, { id: questionId });
  }
}
