
// import {Injectable} from 'angular2/core';
import { Injectable } from '@angular/core';

@Injectable()
export class Params{
  public params: any;
    constructor(){
        console.log("Params()");  
        this.params="";
    }
}