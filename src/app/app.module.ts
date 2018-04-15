import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { RestProvider } from '../providers/rest/rest';

import { HomePage } from '../pages/home/home';
import { DiscoveryPage } from '../pages/discovery/discovery';
import { ChatPage } from '../pages/chat/chat';
import { NotificationPage } from '../pages/notification/notification';
import { MorePage } from '../pages/more/more';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { UserPage } from '../pages/user/user';
import { HeadfacePage } from '../pages/headface/headface';
import { QuestionPage } from '../pages/question/question';
import { DetailsPage } from '../pages/details/details';
import { AnswerPage } from '../pages/answer/answer';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage'

//导入四个外部加载进来的组件
import { File } from '@ionic-native/file'
import { Transfer, TransferObject } from '@ionic-native/transfer'
import { FilePath } from '@ionic-native/file-path'
import { Camera } from '@ionic-native/camera'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    DetailsPage,
    AnswerPage

  ],
  imports: [
    BrowserModule,
    HttpModule,//全局需要导入HTTP
    IonicModule.forRoot(MyApp,{backButtonText:'返回'},),
    IonicStorageModule.forRoot()//全局定义storage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DiscoveryPage,
    ChatPage,
    NotificationPage,
    MorePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    DetailsPage,
    AnswerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    File,
    Transfer,
    FilePath,
    Camera,
    TransferObject
  ]
})
export class AppModule { }
