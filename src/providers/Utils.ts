import { Injectable } from '@angular/core';
//import { DomSanitizer } from '@angular/platform-browser';
@Injectable()
export class Utils {


    constructor(
        // public sanitizer:DomSanitizer
    ) {
    }

    static isEmpty(value): boolean {
        return value == null || typeof value === 'string' && value.length === 0;
    }

    static isNotEmpty(value): boolean {
        return !Utils.isEmpty(value);
    }

    /**
     * 格式“是”or“否”
     * @param value
     * @returns {string|string}
     */
    static formatYesOrNo(value: number | string): string {
        return value == 1 ? '是' : (value == '0' ? '否' : null);
    }


    /**
     * 格式化日期
     * sFormat：日期格式:默认为yyyy-MM-dd     年：y，月：M，日：d，时：h，分：m，秒：s
     * @example  dateFormat(new Date(),'yyyy-MM-dd')   "2017-02-28"
     * @example  dateFormat(new Date(),'yyyy-MM-dd hh:mm:ss')   "2017-02-28 09:24:00"
     * @example  dateFormat(new Date(),'hh:mm')   "09:24"
     * @param date 日期
     * @param sFormat 格式化后的日期字符串
     * @returns {String}
     */
    static dateFormat(date: Date, sFormat: String = 'yyyy-MM-dd'): string {
        let time = {
            Year: 0,
            TYear: '0',
            Month: 0,
            TMonth: '0',
            Day: 0,
            TDay: '0',
            Hour: 0,
            THour: '0',
            hour: 0,
            Thour: '0',
            Minute: 0,
            TMinute: '0',
            Second: 0,
            TSecond: '0',
            Millisecond: 0
        };
        time.Year = date.getFullYear();
        time.TYear = String(time.Year).substr(2);
        time.Month = date.getMonth() + 1;
        time.TMonth = time.Month < 10 ? "0" + time.Month : String(time.Month);
        time.Day = date.getDate();
        time.TDay = time.Day < 10 ? "0" + time.Day : String(time.Day);
        time.Hour = date.getHours();
        time.THour = time.Hour < 10 ? "0" + time.Hour : String(time.Hour);
        // time.hour = time.Hour < 13 ? time.Hour : time.Hour - 12;
        time.hour = time.Hour;
        time.Thour = time.hour < 10 ? "0" + time.hour : String(time.hour);
        time.Minute = date.getMinutes();
        time.TMinute = time.Minute < 10 ? "0" + time.Minute : String(time.Minute);
        time.Second = date.getSeconds();
        time.TSecond = time.Second < 10 ? "0" + time.Second : String(time.Second);
        time.Millisecond = date.getMilliseconds();
        return sFormat.replace(/yyyy/ig, String(time.Year))
            .replace(/yyy/ig, String(time.Year))
            .replace(/yy/ig, time.TYear)
            .replace(/y/ig, time.TYear)
            .replace(/MM/g, time.TMonth)
            .replace(/M/g, String(time.Month))
            .replace(/dd/ig, time.TDay)
            .replace(/d/ig, String(time.Day))
            .replace(/HH/g, time.THour)
            .replace(/H/g, String(time.Hour))
            .replace(/hh/g, time.Thour)
            .replace(/h/g, String(time.hour))
            .replace(/mm/g, time.TMinute)
            .replace(/m/g, String(time.Minute))
            .replace(/ss/ig, time.TSecond)
            .replace(/s/ig, String(time.Second))
            .replace(/fff/ig, String(time.Millisecond))
    }

    /**
     * 每次调用sequence加1
     * @type {()=>number}
     */
    getSequence = (function () {
        let sequence = 100;
        return function () {
            return ++sequence;
        };
    })();

    public static dateFormat2(time: string) {
        var str = time.substr(0, 10);
        var date = new Date(str);
        date.setHours(parseInt(time.substr(11, 2)));
        date.setMinutes(parseInt(time.substr(14, 2)));
        return date;
    }

    /**
 * 把url中的双斜杠替换为单斜杠
 * 如:http://localhost:8080//api//demo.替换后http://localhost:8080/api/demo
 * @param url
 * @returns {string}
 */
    public static formatUrl(url: string = ''): string {
        let index = 0;
        if (url.startsWith('http')) {
            index = 7
        }
        return url.substring(0, index) + url.substring(index).replace(/\/\/*/g, '/');
    }
    public static MoneyFormat(str: string) {
        var newStr = "";
        var count = 0;
        if (str.indexOf(".") == -1) {
            for (var i = str.length - 1; i >= 0; i--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(i) + "," + newStr;
                } else {
                    newStr = str.charAt(i) + newStr;
                }
                count++;
            }
            ////console.info(isNaN(parseInt(newStr)));
            if(isNaN(parseInt(newStr))){
                ////console.info("NaN1"+newStr)
                str = newStr; //自动补小数点后两位
                return str
            }else{
                ////console.info(newStr)
                str = newStr+".00"; //自动补小数点后两位
                return str
            }
           
        }
        else {
            for (var a = str.indexOf(".") - 1; a >= 0; a--) {
                if (count % 3 == 0 && count != 0) {
                    newStr = str.charAt(a) + "," + newStr;
                } else {
                    newStr = str.charAt(a) + newStr; //逐个字符相接起来
                }
                count++;
            }
            // console.log(newStr);
            str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
            // str = newStr;
            return str;
        }
        // if(number.indexOf('.'))

        // if (number.length <= 3) {
        //     return (number == '' ? '0' : number);
        // } else {
        //     var mod = number.length % 3;
        //     var output = (mod == 0 ? '' : (number.substring(0, mod)));
        //     for (var i = 0; i < Math.floor(number.length / 3); i++) {
        //         if ((mod == 0) && (i == 0))
        //             output += number.substring(mod + 3 * i, mod + 3 * i + 3);
        //         else
        //             output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
        //     }
        //     return (output);
        // }
    }

}
