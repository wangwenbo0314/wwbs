import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { BaseUI } from '../../common/loading';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BaseUI {
  mobile: any
  nickname: any
  password: any
  passwordAgain: any
  errorMessage: any

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public rest: RestProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  /**
   * 返回上一级页面，关闭此页面
   * 
   * @memberof RegisterPage
   */
  dismiss() {
    this.viewCtrl.dismiss();
  }
  /**
   * 返回登录页面
   * 
   * @memberof RegisterPage
   */
  gotoLogin() {
    this.navCtrl.pop();
  }
  /**
   * 进行注册
   * 
   * @memberof RegisterPage
   */
  register() {
    var loading = super.showLoading(this.loadingCtrl, "注册中...")
    if (this.password == this.passwordAgain) {
      this.rest.register(this.mobile, this.nickname, this.password)
        .subscribe(
          f => {
            if (f["Status"] == "OK") {
              this.dismiss();
              loading.dismiss();
            } else {
              loading.dismiss();
              super.showToast(this.toastCtrl, f["StatusContent"])
            }
          },
          error => this.errorMessage = <any>error);
    } else {
      super.showToast(this.toastCtrl, "密码输入不一致")
    }
  }

}
