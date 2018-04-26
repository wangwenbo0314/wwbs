import { Component, Input } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { BaseUI } from '../../common/loading';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
import { DetailsPage } from '../../pages/details/details';
/**
 * Generated class for the QuestionListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question-list',
  templateUrl: 'question-list.html'
})
export class QuestionListComponent extends BaseUI {

  errorMessage: any;
  questions: string[];

  //datatype 外部传递进来 dataSourceType
  @Input('datatype') dataSourceType;
  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public rest: RestProvider,
    public viewCtrl: ViewController,
    public navParams: NavParams) {
    super();
  }
  //这里没有ionViewDidLoad生命周期方法
  ngAfterContentInit() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        //加载用户数据
        var loading = super.showLoading(this.loadingCtrl, "加载中...")
        this.rest.getUserQuestionList(val, this.dataSourceType)
          .subscribe(
            q => {
              this.questions = q;
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
