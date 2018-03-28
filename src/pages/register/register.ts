import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
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
    if (!(/^1[34578]\d{9}$/.test(this.mobile))) {
      super.showToast(this.toastCtrl, "您的手机号码格式不正确！");
      
    } else if (this.nickname == null) {
      super.showToast(this.toastCtrl, "昵称不能为空");
    } else if (this.nickname.length < 3 || this.nickname.length > 10) {
      super.showToast(this.toastCtrl, "昵称的长度应该在3 ~ 10之间");
    } else if (this.password == null || this.passwordAgain == null) {
      super.showToast(this.toastCtrl, "密码不能为空");
    } else if (this.password.length < 6 || this.password.length > 20 || this.passwordAgain < 6 || this.passwordAgain > 20) {
      super.showToast(this.toastCtrl, "密码不能为空并且长度应该在6 ~ 20之间");
    } else if (this.password != this.passwordAgain) {
      super.showToast(this.toastCtrl, "密码输入不一致")
    } else {
      var loading = super.showLoading(this.loadingCtrl, "注册中...")
      this.rest.register(this.mobile, this.nickname, this.password)
        .subscribe(
          f => {
            if (f["Status"] == "OK") {
              loading.dismiss();
              this.dismiss();
            } else {
              loading.dismiss();
              super.showToast(this.toastCtrl, f["StatusContent"])
            }
          },
          error => this.errorMessage = <any>error);
    }
  }

}
