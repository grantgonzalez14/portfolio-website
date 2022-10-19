export class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 40) + 5;
    }

    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update(mouse) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt((dx * dx) + (dy * dy));
        let force_direction_x = dx / distance;
        let force_direcion_y = dy / distance;
        let max_distance = mouse.radius;
        let force = (max_distance - distance) / max_distance;
        let direction_x = force_direction_x * force * this.density;
        let direction_y = force_direcion_y * force * this.density;

        if (distance < mouse.radius) {
            this.x -= direction_x;
            this.y -= direction_y;
        }
        else {
            if (this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx / 50;
            }

            if (this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy / 50;
            }
        }
    }
}