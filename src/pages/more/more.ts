import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage'
import { BaseUI } from '../../common/loading';
import { RestProvider } from '../../providers/rest/rest';
import { UserPage } from '../user/user';
import { UserdatalistPage } from '../userdatalist/userdatalist';
import { SettingsProvider } from '../../providers/settings/settings';
import { ScanPage } from '../scan/scan';
import { VersionsPage } from '../versions/versions';

@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage extends BaseUI {
  public notLogin: boolean = true;
  public logined: boolean = false;
  headface: string;
  userinfo: string[];
  selectedTheme: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public rest: RestProvider,
    private setting: SettingsProvider,
    public loadingCtrl: LoadingController,
    public storage: Storage) {
    super();
    this.setting.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }
  showModal() {
    let modal = this.modalCtrl.create(LoginPage);
    //关闭后的回调
    modal.onDidDismiss(() => {
      this.loadUserPage;
    })
    modal.present();
  }
  ionViewDidLoad() {
    this.loadUserPage();
  }
  loadUserPage() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        //加载用户数据
        var loading = super.showLoading(this.loadingCtrl, "加载中...")
        this.rest.getUserInfo(val)
          .subscribe(
            userinfo => {
              this.userinfo = userinfo;
              this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
              this.notLogin = false;
              this.logined = true;
              loading.dismissAll();
            });

      } else {
        this.notLogin = true;
        this.logined = false;
      }
    });
  }
  gotoUserPage() {
    this.navCtrl.push(UserPage);
  }
  gotoVersions(){
    this.navCtrl.push(VersionsPage);
  }
  gotoScanQRCode() {
    this.navCtrl.push(ScanPage, null, { "animate": false });
  }
  gotoDataList(datatype) {
    this.navCtrl.push(UserdatalistPage, { "datatype": datatype })
  }
  toggleChangeTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.setting.setActiveTheme('light-theme');
    } else {
      this.setting.setActiveTheme('dark-theme');
    }
  }
}
