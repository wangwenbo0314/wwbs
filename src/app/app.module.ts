import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'
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
import { ChatdetailsPage } from '../pages/chatdetails/chatdetails';
import { UserdatalistPage } from '../pages/userdatalist/userdatalist';
import { ScanPage } from '../pages/scan/scan';
import { VersionsPage } from '../pages/versions/versions';


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage'
//表情包
import { EmojiProvider } from '../providers/emoji/emoji';
import { ComponentsModule } from '../components/components.module'

//导入四个外部加载进来的组件
import { File } from '@ionic-native/file'
import { Transfer, TransferObject } from '@ionic-native/transfer'
import { FilePath } from '@ionic-native/file-path'
import { Camera } from '@ionic-native/camera'
import { ChatserviceProvider } from '../providers/chatservice/chatservice';
import { QRScanner } from '@ionic-native/qr-scanner';
import { AppVersion } from '@ionic-native/app-version'

import { RelativetimePipe } from '../pipes/relativetime/relativetime'
import { SettingsProvider } from '../providers/settings/settings';


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
    AnswerPage,
    ChatdetailsPage,
    RelativetimePipe,
    UserdatalistPage,
    ScanPage,
    VersionsPage

  ],
  imports: [
    BrowserModule,
    HttpModule,//全局需要导入HTTP
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, { backButtonText: '返回' }, ),
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
    AnswerPage,
    ChatdetailsPage,
    UserdatalistPage,
    ScanPage,
    VersionsPage
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
    QRScanner,
    TransferObject,
    EmojiProvider,
    ChatserviceProvider,
    SettingsProvider,
    AppVersion
  ]
})
export class AppModule { }
