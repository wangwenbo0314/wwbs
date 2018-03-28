import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { BaseUI } from '../../common/loading';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { HeadfacePage } from '../../pages/headface/headface';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage extends BaseUI {
  headface: string = "https://imoocqa.gugujiankong.com/users/5996953615f87ec629cff319.jpg?";
  nickname: string = "加载中...";
  errorMessage: any;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public rest: RestProvider,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
    super();
  }
  ionViewDidEnter() {
    this.loadUserPage();
  }
  updateNickName() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        //修改昵称
        var loading = super.showLoading(this.loadingCtrl, "昵称修改中...")
        this.rest.updateNickName(val, this.nickname)
          .subscribe(
            f => {
              if (f["Status"] == "OK") {
                loading.dismiss();
                super.showToast(this.toastCtrl, "昵称修改成功");
              } else {
                loading.dismiss();
                super.showToast(this.toastCtrl, f["StatusContent"]);
              }
            },
            error => this.errorMessage = <any>error);
      }
    })
  }
  loadUserPage() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        //加载用户数据
        var loading = super.showLoading(this.loadingCtrl, "加载中...")
        this.rest.getUserInfo(val)
          .subscribe(
            userinfo => {
              this.nickname = userinfo["UserNickName"];
              this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
              loading.dismiss();
            },
            error => this.errorMessage = <any>error);
      }
    });
  }
  logout() {
    this.storage.remove('UserId');
    this.viewCtrl.dismiss();
  }
  gotoHeadface() {
    this.navCtrl.push(HeadfacePage);
  }
}
