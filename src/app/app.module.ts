import { SocketService } from './../providers/SocketService';
import { CityPickerService } from './../providers/CityPicker';
import { HttpService } from './../providers/HttpService';
import { NativeService } from './../providers/NativeService';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Content } from 'ionic-angular';
import { GBApp } from './app.component';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { Network } from '@ionic-native/network';
import { Transfer } from '@ionic-native/transfer';
import { AppVersion } from '@ionic-native/app-version';
import { WebIntent } from '@ionic-native/web-intent';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileTransfer } from '@ionic-native/file-transfer';
import { ImagePicker } from '@ionic-native/image-picker';
import { Keyboard } from '@ionic-native/keyboard';
import { MultiPickerModule } from 'ion-multi-picker';
import { CityPickerModule } from "ionic2-city-picker";
import { BackButtonService } from "../providers/backButton.service";
import { InfiniteScrollService } from "../providers/InfiniteScrollService";
import { ComponentsModule } from '../components/components.module';
import {Params} from '../providers/params'
import { TemplatePageModule } from '../componnets/template/template.module';
// import { ionicLazyLoad } from '../assets/js/ionic-image-lazy-load.js';
// import { TabsPageModule } from '../pages/tabs/tabs.module';
// import { LoginPageModule } from '../pages/login/login.module';


@NgModule({
  declarations: [
    GBApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MultiPickerModule,
    ComponentsModule,
    CityPickerModule,
    // ionicLazyLoad,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(GBApp, {
      backButtonText: "",
      iconMode: 'ios',
      mode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      pageTransition: 'ios',
      tabsHideOnSubPages: 'true',
      preloadModules: false,
      cache: false,
    }
    // ,{
    //   links:[
    //     { component: 'GoodDetailPage', name: 'GoodDetailPage', segment: 'goodsDetail/:goodsid/:Fh' }
    //   ]
    // }
    ),
    // TabsPageModule,
    // LoginPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GBApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    Camera,
    FileTransfer,
    BarcodeScanner,
    Network,
    AppVersion,
    Toast,
    Transfer,
    ImagePicker,
    WebIntent,
    Keyboard,
    InAppBrowser,
    HttpService,
    NativeService,
    CityPickerService,
    InfiniteScrollService,
    SocketService,
    Content,
    BackButtonService,
    Params,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
