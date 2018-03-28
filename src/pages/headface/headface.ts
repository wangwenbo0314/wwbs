import { Component } from '@angular/core';
import { NavController, NavParams, ActionSheetController, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BaseUI } from '../../common/loading';
import { RestProvider } from '../../providers/rest/rest';
//导入四个外部加载进来的组件
import { File } from '@ionic-native/file'
import { Transfer, TransferObject } from '@ionic-native/transfer'
import { FilePath } from '@ionic-native/file-path'
import { Camera } from '@ionic-native/camera'


/**
 * Generated class for the HeadfacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-headface',
  templateUrl: 'headface.html',
})
export class HeadfacePage extends BaseUI {
  userId: string;
  errorMessage: any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public rest: RestProvider,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController) {
    super();
  }

  ionViewDidEnter() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        this.userId = val;
      }
    })
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '选择图片',
      buttons: [
        {
          text: '从图片库中选择',
          handler: () => {

          }
        },
        {
          text: '使用相机',
          handler: () => {

          }
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

}
