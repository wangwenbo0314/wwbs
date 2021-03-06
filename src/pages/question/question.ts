import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { BaseUI } from '../../common/loading';
import { Storage } from '@ionic/storage';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage extends BaseUI {
  title: string
  content: string
  errorMessage: any

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public rest: RestProvider,
    public toastCtrl: ToastController,
    public navParams: NavParams) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  submitQuestion() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        var loading = super.showLoading(this.loadingCtrl, "发表中...")
        this.rest.saveQuestion(val, this.title, this.content)
          .subscribe(f => {
            if (f["Status"] == "OK") {
              loading.dismissAll();
              this.dismiss();
            } else {
              super.showToast(this.toastCtrl, f["StatusContent"]);
            }
          },
            error => this.errorMessage = <any>error);
      } else {
        super.showToast(this.toastCtrl, "请登录之后再进行提问！")
      }
    });
  }

}
