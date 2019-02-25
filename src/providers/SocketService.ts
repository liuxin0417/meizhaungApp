import 'rxjs/add/operator/toPromise';
import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';

@Injectable()
export class SocketService {
    public socket: any;
    public connected: boolean;

    /**初始化信息 */
    socketAuth(): void {
        this.socket = io("http://39.106.178.20:3000/");
        this.socket.on("connect", (socket) => {
            this.connected = true
        });
    }
}

