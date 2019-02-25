import { Injectable } from '@angular/core';
import { HttpService } from '../providers/HttpService';
// import { Observable } from 'rxjs';
@Injectable()
export class InfiniteScrollService {
    constructor(public http: HttpService) { }
    getData(url, data?: any) {
        return this.http.post(url, data);
    }
    getAsyncData(url, data?: any) {
        return this.getData(url, data);
        // return Observable.create((observer)=>{
        //     setTimeout(()=>{
        //         this.getData(url, data);
        //     });
        // },500); 
        // return new Promise(resolve => {
        //     setTimeout(() => {
        //         resolve(this.getData());
        //     }, 500);
        // });
    }
}