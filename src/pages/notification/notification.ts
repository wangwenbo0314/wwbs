import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { BaseUI } from '../../common/loading';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { DetailsPage } from '../details/details';


@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage extends BaseUI {

  errorMessage: any;
  notificationsList: string[];
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public rest: RestProvider,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
    super();
  }
  ionViewDidLoad() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        //加载用户数据
        var loading = super.showLoading(this.loadingCtrl, "加载中...")
        this.rest.getUserNotifications(val)
          .subscribe(
            n => {
              this.notificationsList = n;
              loading.dismissAll();
            },
            error => this.errorMessage = <any>error);
      }
    });
  }
  gotoDetails(questionId) {
    this.navCtrl.push(DetailsPage, { id: questionId });
  }

}
