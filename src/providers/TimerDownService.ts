export class TimerDownService {
    public endDate;
    private day: number;
    private hour: string;
    private minute: string;
    private second: string;
    private _diff: number;
    private timer;

    private set diff(val) {
        this._diff = Math.floor(val / 1000);
        this.day = Math.floor(this._diff / 86400);
        this.hour = Math.floor((this._diff - this.day * 86400) / 3600) < 10 ? "0" + Math.floor((this._diff - this.day * 86400) / 3600) : Math.floor((this._diff - this.day * 86400) / 3600) + "";
        this.minute = Math.floor((this._diff % 3600) / 60) < 10 ? "0" + Math.floor((this._diff % 3600) / 60) : Math.floor((this._diff % 3600) / 60) + "";
        this.second = (this._diff % 3600) % 60 < 10 ? "0" + (this._diff % 3600) % 60 : (this._diff % 3600) % 60 + "";
    }
    ngAfterViewInit() {
        this.timer = setInterval(() => {
            var date = new Date();
            if (date >= this.endDate) {
                this.ngOnDestroy();
            } else {
                this.diff = this.endDate - Date.now();
            }
        }, 1000);
    }
    ngOnDestroy() {
        if (this.timer) {
            // this.diff = 0;
            clearInterval(this.timer);
            this.diff = 0;
        }
    }
}