declare var Wechat: any;

export interface WechatPayParam {
    appid: string;
    partnerid: string;
    prepayid: string;
    package: string;
    noncestr: string;
    timestamp: string;
    sign: string;
}

export class WXScene {
    public static WXSceneSession = "WXSceneSession";
    public static WXSceneTimeline = "WXSceneTimeline";
    public static WXSceneFavorite = "WXSceneFavorite";
}

export class WechatPlugin {

    public static isInstalled() {
        return new Promise((resolve, reject) => {
            Wechat.isInstalled(result => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
    }

    public static sendPaymentRequest(params: WechatPayParam) {
        return new Promise((resolve, reject) => {
            Wechat.sendPaymentRequest(params, result => {
                resolve(result);
            }, error => {
                reject(error);
            });
        });
    }

    public static ShareText(text: string) {
        return new Promise((resolve, reject) => {
            Wechat.share({
                text: '逛贝微信分享测试',
                scene: WXScene.WXSceneSession
            }, result => {
                alert("分享成功");
            }, error => {
                alert("分享失败");
            });
        })
    }
} 