export default class Clock {
    constructor(options) {
        this.opts = Object.assign({
            size: 100,
            color: '#000',
            tickMargin: 5,
            tickSize: 10,
            textMargin: 15 // text font + margin
        }, options);
        this.canvas = document.createElement('CANVAS');
        this.canvas.id = 'clock' + new Date().getTime();
        this.canvas.width = this.canvas.height = this.opts.size;
        this.ctx = this.canvas.getContext('2d');
        this.init();
    }

    init() {        
        document.body.appendChild(this.canvas);
        this.draw();
    }

    clear() {
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.width);
    }

    draw() {
        this.clear();
        this.drawDial();
        this.drawTick();
        this.drawDot();
        this.drawTime();
        requestAnimationFrame(() => {
            this.draw();
        });
    }

    drawDial() {
        let radius = this.canvas.width / 2;
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(radius, radius, radius - 1, 0, 2 * Math.PI);
        this.ctx.strokeStyle = this.opts.color;
        this.ctx.stroke();
        this.ctx.restore();
    }

    drawTick() {
        let angle = 2 * Math.PI / 12 / 5,
            radius = this.canvas.width / 2;

        this.ctx.save();
        this.ctx.translate(radius, radius);
        for (let i = 0; i < 60; i++) {            
            this.ctx.save();
            this.ctx.rotate(angle * i);
            if (i % 5 == 0) {
                // 重新绘制新的图形
                this.ctx.beginPath();
                this.ctx.lineWidth = 2;
                this.ctx.moveTo(0, -radius + this.opts.tickMargin);
                this.ctx.lineTo(0, -radius + this.opts.tickMargin + this.opts.tickSize);
                this.ctx.stroke();
                this.ctx.save();
                this.ctx.translate(0, -radius + this.opts.tickMargin + this.opts.tickSize + this.opts.textMargin);
                this.ctx.rotate(-angle * i);
                this.ctx.textAlign = 'center';
                this.ctx.textBaseline = 'middle';
                this.ctx.fillText(i == 0 ? 12 : i / 5, 0, 0);
                this.ctx.restore();
            } else {
                this.ctx.beginPath();
                this.ctx.arc(0, -radius + this.opts.tickMargin + this.opts.tickSize / 2, 1, 0, 2 * Math.PI);
                this.ctx.fill();
            }            
            this.ctx.restore();
        }
        this.ctx.restore();
    }

    drawDot() {
        let radius = this.canvas.width / 2;
        this.ctx.save();
        this.ctx.translate(radius, radius);
        this.ctx.beginPath();
        this.ctx.arc(0,0,3,0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.restore();
    }

    drawTime() {
        let date = new Date();
        this.drawHour(date.getHours());
        this.drawMinute(date.getMinutes());
        this.drawSecond(date.getSeconds());        
    }

    drawHour(hour) {
        let angle = 2 * Math.PI / 12;
        let opts = this.opts;
        hour = hour > 12 ? hour - 12 : hour;

        this.drawLine(angle * hour, 3, opts.tickSize + opts.tickMargin + opts.textMargin + 15);
    }

    drawMinute(minute) {
        let angle = 2 * Math.PI / 60;
        let opts = this.opts;

        this.drawLine(angle * minute, 2, opts.tickSize + opts.tickMargin);
    }

    drawSecond(second) {
        let angle = 2 * Math.PI / 60;
        let opts = this.opts;

        this.drawLine(angle * second, 1, opts.tickSize);
    }

    drawLine(angle, lineWidth, margin) {
        let radius = this.canvas.width / 2;
        this.ctx.save();
        this.ctx.translate(radius, radius);
        this.ctx.rotate(angle);
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = this.opts.color;
        this.ctx.beginPath();
        this.ctx.moveTo(0, 10);
        this.ctx.lineTo(0, -radius + margin);
        this.ctx.stroke();
        this.ctx.restore();
    }

}