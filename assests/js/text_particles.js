const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 1.65;
let particle_array = [];
let adjust_y = 10;

// Handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 250
};

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

ctx.fillStyle = 'white';
ctx.font = '25px Verdana';
ctx.fillText('Grant Gonzalez', 17, 20);
const text_coordinates = ctx.getImageData(0, 0, window.innerWidth, 100);
ctx.fillText('CS Student', 42, 45)
const text_coordinates2 = ctx.getImageData(0, 0, window.innerWidth, 100);

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 40) + 5;
    }

    draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        let force_direction_x = dx / distance;
        let force_direction_y = dy / distance;
        let max_distance = mouse.radius;
        let force = (max_distance - distance) / max_distance;
        let direction_x = force_direction_x * force * this.density;
        let direction_y = force_direction_y * force * this.density;

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

function init() {
    particle_array = [];

    for (let y = 0, y2 = text_coordinates.height; y < y2; y++) {
        for (let x = 0, x2 = text_coordinates.width; x < x2; x++) {
            if (text_coordinates.data[(y * 4 * text_coordinates.width) + (x * 4) + 3] > 128) {
                let position_x = x;
                let position_y = y + adjust_y;
                particle_array.push(new Particle(position_x * 10, position_y * 10));
            }
        }
    }

    for (let y = 0, y2 = text_coordinates2.height; y < y2; y++) {
        for (let x = 0, x2 = text_coordinates2.width; x < x2; x++) {
            if (text_coordinates2.data[(y * 4 * text_coordinates2.width) + (x * 4) + 3] > 128) {
                let position_x = x;
                let position_y = y + adjust_y;
                particle_array.push(new Particle(position_x * 10, position_y * 10));
            }
        }
    }
}

function connect() {
    for (let i = 0; i < particle_array.length; i++) {
        for (let j = i; j < particle_array.length; j++) {
            let dx = particle_array[i].x - particle_array[j].x;
            let dy = particle_array[i].y - particle_array[j].y;
            let distance = Math.sqrt(dx*dx + dy*dy);

            if (distance < 15) {
                ctx.strokeStyle = 'white';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(particle_array[i].x, particle_array[i].y);
                ctx.lineTo(particle_array[j].x, particle_array[j].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particle_array.length; i++) {
        particle_array[i].draw();
        particle_array[i].update();
    }

    //connect();
    requestAnimationFrame(animate);
}

init();
animate();