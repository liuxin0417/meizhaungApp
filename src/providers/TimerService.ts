export class TimerService {
    private timer;
    private second = 60;
    private isdisabled = false;
    private text = "立即获取";
    public ngAfterViewInit() {
        this.timer = setInterval(() => {
            this.isdisabled = true;
            this.text = "倒计时(" + this.second + "秒)";
            this.second -= 1;
            if (this.second == 0) {
                this.ngOnDestroy();
            }
        }, 1000);
    }
    public ngOnDestroy() {
        if (this.timer) {
            this.isdisabled = false;
            this.second = 60;
            this.text = "立即获取";
            clearInterval(this.timer);
        }
    }
}