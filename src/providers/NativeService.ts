
import { Injectable } from '@angular/core';
import { ToastController, LoadingController, Platform, Loading, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AppVersion } from '@ionic-native/app-version';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Toast } from '@ionic-native/toast';
import { File, FileEntry } from '@ionic-native/file';
import { Transfer, TransferObject } from '@ionic-native/transfer';
// import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ImagePicker } from '@ionic-native/image-picker';
import { Network } from '@ionic-native/network';
import { Observable } from "rxjs";
import { Http, Response, RequestOptions, Headers } from "@angular/http";
// import { AppMinimize } from "@ionic-native/app-minimize";
import { DomSanitizer } from '@angular/platform-browser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Position } from "../model/type";
import {
  APP_DOWNLOAD,
  APK_DOWNLOAD,
  IMAGE_SIZE,
  QUALITY_SIZE,
  REQUEST_TIMEOUT,
  APP_VERSION_SERVE_URL,
  APP_SERVE_URL
} from "./Constants";
import { Parameter } from "../model/Model";
import { Utils } from "./Utils";

declare var LocationPlugin;

// declare var cordova: any;
// declare var IntentShim;
declare var intentShim: any;

@Injectable()
export class NativeService {
  private loading: Loading;
  private loadingIsOpen: boolean = false;

  constructor(private platform: Platform,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private appVersion: AppVersion,
    private camera: Camera,
    private toast: Toast,
    private transfer: Transfer,
    private file: File,
    // private inAppBrowser: InAppBrowser,
    private imagePicker: ImagePicker,
    private network: Network,
    // private appMinimize: AppMinimize,
    private loadingCtrl: LoadingController,
    private filetransfer: FileTransfer,
    public http: Http,
    public sanitizer: DomSanitizer) {
  }

  warn(info): void {
    console.log('%cNativeService/' + info, 'color:#e8c406');
  }


  /**
   * 通过浏览器打开url
   */
  openUrlByBrowser(url: string): void {
    // this.inAppBrowser.create(url, '_system');
  }

  /**
 * 检查app是否需要升级
 */
  detectionUpgrade(manual = false): void {
    if (this.isAndroid()) {
      //获得app包名
      this.getPackageName().subscribe(packageName => {
        // let appName = packageName.substring(packageName.lastIndexOf('.') + 1);
        // let appType = this.isAndroid() ? 'android' : 'ios';
        //从后台查询app最新版本信息
        let url = APP_VERSION_SERVE_URL;
        this.http.get(url).map((res: Response) => res.json()).subscribe(res => {
          if (!res) {
            this.showToast("从app升级获取版本信息失败");
            // this.logger.log('', '从app升级获取版本信息失败', { url: url });
            return;
          }
          //获得当前app版本
          this.getVersionNumber().subscribe(currentNo => {
            if (currentNo == res.version) {
              //比较版本号
              // manual && this.alert('已经是最新版本');
            } else {
              if (res.isForcedUpdate == 1) {//判断是否强制更新
                this.alertCtrl.create({
                  title: '重要升级',
                  subTitle: '您必须升级后才能使用！',
                  buttons: [{
                    text: '确定',
                    handler: () => {
                      this.downloadApp();
                    }
                  }
                  ]
                }).present();
              } else {
                this.alertCtrl.create({
                  title: '升级',
                  subTitle: '发现新版本,是否立即升级？',
                  buttons: [{ text: '取消' },
                  {
                    text: '确定',
                    handler: () => {
                      this.downloadApp();
                    }
                  }
                  ]
                }).present();
              }

            }
          })
        });
      })
    }

  }

  /**
   * 下载安装app
   */
  downloadApp(): void {
    if (this.isIos()) {//ios打开网页下载
      this.showToast("新版本已经发布，请前往App Store更新");
      // this.openUrlByBrowser(APP_DOWNLOAD);
    }
    if (this.isAndroid()) {//android本地下载
      //显示下载进度
      let alert = this.alertCtrl.create({
        title: '下载进度：0%',
        enableBackdropDismiss: false,
        buttons: ['后台下载']
      });
      alert.present();

      const fileTransfer: TransferObject = this.transfer.create();
      const apk = this.file.externalRootDirectory + 'sji.apk'; //apk保存的目录

      //下载并安装apk
      fileTransfer.download(APK_DOWNLOAD, apk).then(() => {
        window['install'].install(apk.replace('file://', ''));
      }, err => {
        alert.dismiss();
        // this.logger.log(err, 'android app 本地升级失败');
        // this.toastService.ShowToastText("android 本地升级失败");
        // this.alertCtrl.create({
        //   title: '前往网页下载',
        //   subTitle: '本地升级失败',
        //   buttons: [
        //     {
        //       text: '确定',
        //       handler: () => {
        //         this.openUrlByBrowser(APP_DOWNLOAD);//打开网页下载
        //       }
        //     }
        //   ]
        // }).present();
      });

      //更新下载进度
      fileTransfer.onProgress((event: ProgressEvent) => {
        let num = Math.floor(event.loaded / event.total * 100);
        if (num === 100) {
          alert.dismiss();
        } else {
          let title = document.getElementsByClassName('alert-title')[0];
          title && (title.innerHTML = '下载进度：' + num + '%');
        }
      });
    }
  }

  /**
   * 是否真机环境
   * @return {boolean}
   */
  isMobile(): boolean {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android真机环境
   * @return {boolean}
   */
  isAndroid(): boolean {
    return this.isMobile() && this.platform.is('android');
  }

  /**
   * 是否ios真机环境
   * @return {boolean}
   */
  isIos(): boolean {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }

  alert(title: string, subTitle: string = "", ): void {
    this.alertCtrl.create({
      title: title,
      subTitle: subTitle,
      buttons: [{ text: '确定' }]
    }).present();
  }

  /**
   * 统一调用此方法显示提示信息
   * @param message 信息内容
   * @param duration 显示时长
   */
  showToast(message: string = '操作完成', duration: number = 2000): void {
    if (this.isMobile()) {
      this.toast.show(message, String(duration), 'center').subscribe();
    } else {
      this.toastCtrl.create({
        message: message,
        duration: duration,
        position: 'middle',
        showCloseButton: false
      }).present();
    }
  };


  /**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  showLoading(content: string = ''): void {
    if (!this.loadingIsOpen) {
      this.loadingIsOpen = true;
      this.loading = this.loadingCtrl.create({
        content: content
      });
      this.loading.present();
      setTimeout(() => {//最长显示10秒
        this.loadingIsOpen && this.loading.dismiss();
        this.loadingIsOpen = false;
      }, 10000);
    }
  };



  /**
   * 关闭loading
   */
  hideLoading(): void {
    this.loadingIsOpen && this.loading.dismiss();
    this.loadingIsOpen = false;
  };

  /**
   * 使用cordova-plugin-camera获取照片
   * @param options
   * @returns {Promise<string>}
   */
  getPicture(options: CameraOptions = {}): Observable<string> {
    let ops: CameraOptions = Object.assign({
      sourceType: this.camera.PictureSourceType.CAMERA,//图片来源,CAMERA:拍照,PHOTOLIBRARY:相册
      destinationType: this.camera.DestinationType.DATA_URL,//默认返回base64字符串,DATA_URL:base64   FILE_URI:图片路径
      quality: QUALITY_SIZE,//图像质量，范围为0 - 100
      allowEdit: false,//选择图片前是否允许编辑
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: IMAGE_SIZE,//缩放图像的宽度（像素）
      targetHeight: IMAGE_SIZE,//缩放图像的高度（像素）
      saveToPhotoAlbum: false,//是否保存到相册
      correctOrientation: true//设置摄像机拍摄的图像是否为正确的方向
    }, options);
    return Observable.create(observer => {
      this.camera.getPicture(ops).then((imgData: string) => {
        if (ops.destinationType === this.camera.DestinationType.DATA_URL) {
          observer.next('data:image/jpg;base64,' + imgData);
        } else {
          observer.next(imgData);
        }
      }).catch(err => {
        if (err == 20) {
          this.alert('没有权限,请在设置中开启权限');
          return;
        }
        if (String(err).indexOf('cancel') != -1) {
          return;
        }
        // this.logger.log(err, '使用cordova-plugin-camera获取照片失败');
        this.alert('获取照片失败');
      });
    });
  };

  /**
   * 通过拍照获取照片
   * @param options
   */
  getPictureByCamera(options: CameraOptions = {}): Observable<string> {
    let ops: CameraOptions = Object.assign({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL//DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
    }, options);
    return this.getPicture(ops);
  };

  /**
   * 通过图库获取照片
   * @param options
   */
  getPictureByPhotoLibrary(options: CameraOptions = {}): Observable<string> {
    let ops: CameraOptions = Object.assign({
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL//DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
    }, options);
    return this.getPicture(ops);
  };

  /**
   * 通过图库选择多图
   * @param options
   */
  getMultiplePicture(options = {}): Observable<any> {
    let that = this;
    let ops = Object.assign({
      maximumImagesCount: 6,
      width: IMAGE_SIZE,//缩放图像的宽度（像素）
      height: IMAGE_SIZE,//缩放图像的高度（像素）
      quality: QUALITY_SIZE//图像质量，范围为0 - 100
    }, options);
    return Observable.create(observer => {
      this.imagePicker.getPictures(ops).then(files => {
        let destinationType = options['destinationType'] || 0;//0:base64字符串,1:图片url
        if (destinationType === 1) {
          observer.next(files);
        } else {
          let imgBase64s = [];//base64字符串数组
          for (let fileUrl of files) {
            that.convertImgToBase64(fileUrl).subscribe(base64 => {
              imgBase64s.push(base64);
              if (imgBase64s.length === files.length) {
                observer.next(imgBase64s);
              }
            })
          }
        }
      }).catch(err => {
        // this.logger.log(err, '通过图库选择多图失败');
      });
    });
  };

  convertImgToBase64(path: string): Observable<string> {
    return Observable.create(observer => {
      this.file.resolveLocalFilesystemUrl(path).then((fileEnter: FileEntry) => {
        fileEnter.file(file => {
          let reader = new FileReader();
          reader.onloadend = function (e) {
            observer.next(this.result);
          };
          reader.readAsDataURL(file);
        });
      }).catch(err => {
        this.showToast("转化失败");
        // this.logger.log(err, '根据图片绝对路径转化为base64字符串失败');
      });
    });
  }
  private getFileContentAsBase64(path: string, callback) {
    function fail(err) {
      console.log('Cannot found requested file' + err);
    }

    function gotFile(fileEntry) {
      fileEntry.file(function (file) {
        let reader = new FileReader();
        reader.onloadend = function (e) {
          let content = this.result;
          callback(content);
        };
        reader.readAsDataURL(file);
      });
    }

    this.file.resolveLocalFilesystemUrl(path).then(fileEnter => gotFile(fileEnter)).catch(err => fail(err));
    // window['resolveLocalFileSystemURL'](path, gotFile, fail);
  }

  /**
   * 获取网络类型 如`unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
   */
  getNetworkType(): string {
    if (!this.isMobile()) {
      return 'wifi';
    }
    return this.network.type;
  }

  /**
   * 判断是否有网络
   * @returns {boolean}
   */
  isConnecting(): boolean {
    return this.getNetworkType() != 'none';
  }

  /**
   * 获得app版本号,如0.01
   * @description  对应/config.xml中version的值
   */
  getVersionNumber(): Observable<string> {
    return Observable.create(observer => {
      this.appVersion.getVersionNumber().then((value: string) => {
        observer.next(value);
      }).catch(err => {
        this.showToast("获取app版本号失败");
      });
    });
  }


  /**
   * 获得app name,如ionic2_tabs
   * @description  对应/config.xml中name的值
   * @returns {Promise<string>}
   */
  getAppName(): Promise<string> {
    return new Promise((resolve) => {
      this.appVersion.getAppName().then((value: string) => {
        resolve(value);
      }).catch(err => {
        this.warn('getAppName:' + err);
      });
    });
  }

  /**
   * 获得app包名/id,如com.kit.ionic2tabs
   * @description  对应/config.xml中id的值
   * @returns {Promise<string>}
   */
  getPackageName(): Observable<string> {
    return Observable.create(observer => {
      this.appVersion.getPackageName().then((value: string) => {
        observer.next(value);
      }).catch(err => {
        this.showToast("获取app包名失败");
      });
    });
  }

  /**
   * 使用默认状态栏
   */
  statusBarStyleDefault() {
    this.statusBar.styleDefault();
  }

  /**
   * 隐藏启动页面
   */
  splashScreenHide() {
    this.splashScreen.hide();
  }

  /**
   * 调用最小化app插件
   */
  minimize() {
    // this.appMinimize.minimize()
  }

  /**
   * 获得用户当前坐标
   * @return {Promise<Position>}
   */
  getUserLocation(): Observable<Position> {
    return Observable.create(observer => {
      if (this.isMobile()) {
        LocationPlugin.getLocation(data => {
          observer.next({ 'lng': data.longitude, 'lat': data.latitude });
        }, msg => {
          observer.error('获取位置失败');
          if (msg.indexOf('缺少定位权限') == 0) {
            this.alert('缺少定位权限，请在手机设置中开启');
            return;
          }
          this.alert('错误消息：' + msg);
          // this.logger.log(msg, '获取位置失败');
        });
      } else {
        console.log('非手机环境,即测试环境返回固定坐标');
        observer.next({ 'lng': 118.55, 'lat': 36.28 });
      }
    });
  }





  /**上传文件 */
  uploadByTransfer(fileUrl: string, url?: string, options?: FileUploadOptions): Promise<any> {
    var url = APP_SERVE_URL + "/MobService/UploadFile";
    if (!options) {
      options = {
        fileKey: 'file',
        fileName: fileUrl.substr(fileUrl.lastIndexOf('/') + 1)
      };
    }
    var transfer: FileTransferObject = this.filetransfer.create();
    return transfer.upload(fileUrl, url, options);
  }

  /**多文件上传 */
  public uploadFileByMutiTranser(filePaths: string[]): Promise<any> {
    let observabels: any[] = [];
    filePaths.forEach((value: string, i, array) => {
      if (!value.startsWith('file://')) {
        value = 'file://' + value;
      }
      let observabel = this.uploadByTransfer(value);
      observabels.push(observabel);
    });
    return Promise.all(observabels).then(res => {
      let result: any[] = [];
      res.forEach(value => {
        var msg = JSON.parse(value.response);
        if (msg.Code == "1") {
          result.push(msg.Msg);
        }
      });
      return result;
    });
  }

  public assembleHTML(strHTML: any) {
    return this.sanitizer.bypassSecurityTrustHtml(strHTML);
  }

  /**微信端上传图片 */
  public uploadWxFile(serverId): Observable<any> {
    var Info = {
      media_id: serverId
    }
    var parm = new Parameter();
    parm.jyh = "1131";
    parm.parm = JSON.stringify(Info);
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Accept': 'application/json;charset=utf-8'
    });
    let url = "";
    url = NativeService.replaceUrl("/MobService/Index");
    var options = new RequestOptions({ headers: headers });
    return this.http.post(url, NativeService.buildURLSearchParams(parm).toString(), options).map(res => res.json());
  }
  /**微信端批量上传图片 */
  public uploadWxMoreFile(serverIds: string[]): Promise<any> {
    let observabels: any[] = [];
    observabels.forEach((value: string, i, array) => {
      let observabel = this.uploadWxFile(value);
      observabels.push(observabel);
    });
    return Promise.all(observabels).then(res => {
      let result: any[] = [];
      result.forEach(value => {
        var msg = JSON.parse(value.response);
        if (msg.Code == "1") {
          result.push(msg.Msg);
        }
      });
    });
  }

  private static buildURLSearchParams(paramMap): URLSearchParams {
    let params = new URLSearchParams();
    if (!paramMap) {
      return params;
    }
    for (let key in paramMap) {
      let val = paramMap[key];
      if (val instanceof Date) {
        val = Utils.dateFormat(val, 'yyyy-MM-dd hh:mm:ss')
      }
      params.set(key, val);
    }
    return params;
  }
  private static replaceUrl(url) {
    if (url.indexOf('http://') == -1) {
      url = APP_SERVE_URL + url;
    }
    return 'http://' + url.substring(7).replace(/\/\//g, '/');
  }



  public log(page,msg)
  {
      console.log( Utils.dateFormat(new Date(), 'yyyy-MM-dd hh:mm:ss fff')+">"+ page+">"+msg);
  }


  isWeiXinPub() {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua: any
    ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
      return true;
    } else {
      return false;
    }
  }
}
