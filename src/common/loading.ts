import { LoadingController, Loading, ToastController, Toast } from 'ionic-angular'
/**
 * UI 层的所有公用方法的抽象
 * 
 * @export
 * @abstract
 * @class BaseUI
 */
export abstract class BaseUI {
    constructor() { }
    /**
     * 通用的展示loading组件
     * 
     * @protected
     * @param {LoadingController} loadingCtrl 
     * @param {string} message 
     * @returns {Loading} 
     * @memberof BaseUI
     */
    protected showLoading(loadingCtrl: LoadingController, message: string): Loading {
        let loader = loadingCtrl.create({
            content: message,
            dismissOnPageChange: true//页面变化时，自动关闭loading
        });
        loader.present();
        return loader
    }
    // protected showToast(toastCtrl: ToastController, message: string): Toast {
    //     let toast = toastCtrl.create({
    //         message: message,
    //         duration: 3000,
    //         position: 'bottom'
    //     })
    //     toast.present;
    //     return toast
    // }
    /**
     * 通用的展示 toast 的组件
     * 
     * @protected
     * @param {ToastController} toastCtrl 
     * @param {string} message 
     * @returns {Toast} 
     * @memberof BaseUI
     */
    protected showToast(toastCtrl: ToastController, message: string): Toast {
        let toast = toastCtrl.create({
            message: message,
            duration: 3000, //默认展示的时长
            position: 'bottom'
        });
        toast.present();
        return toast;
    }
}