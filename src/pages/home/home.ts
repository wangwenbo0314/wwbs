import { Component } from '@angular/core';
import { NavController, ModalController, Tabs, LoadingController, ToastController } from 'ionic-angular';
import { QuestionPage } from '../question/question';
import { BaseUI } from '../../common/loading';
import { RestProvider } from '../../providers/rest/rest';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseUI {

  feeds: string[];
  errosMessage: string;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public modalCtrl: ModalController) {
    super();
  }
  ionViewDidLoad() {
    this.getFeeds();
  }
  gotoQusetion() {
    var modeal = this.modalCtrl.create(QuestionPage);
    modeal.present();
  }
  gotoChat() {
    this.selectTab(2);
  }

  /**
   * 选定指定的Tab
   * 
   * @param {number} index 
   * @memberof HomePage
   */
  selectTab(index: number) {
    var t: Tabs = this.navCtrl.parent;
    t.select(index);
  }
  getFeeds() {
    var loading = super.showLoading(this.loadingCtrl, "加载中...");
    this.rest.getFeeds()
      .subscribe(
        f => {
          loading.dismiss();
          this.feeds = f;  
        },
        error => this.errosMessage = <any>error);
  }
  gotoDetails(questionId) {
    this.navCtrl.push(DetailsPage, { id: questionId });
  }
}
