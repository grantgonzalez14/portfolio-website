const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 2;

let particles_array;

// Get mouse position
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 150) * (canvas.width / 150)
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Create particle
class Particle {
    constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    // Method to draw individual particle
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    // Check particle position, check mouse position, move
    // the particle, draw the particle
    update() {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }

        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }

        // Check collision detection - mouse position / particle position
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        let direction_change = 2;

        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                this.x -= direction_change;
            }

            if (mouse.x > this.x && this.x > this.size * 10) {
                this.x += direction_change;
            }

            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                this.y -= direction_change;
            }

            if (mouse.y > this.y && this.y > this.size * 10) {
                this.y += direction_change;
            }
        }

        // Move then draw particle
        this.x += this.directionX / 3;
        this.y += this.directionY / 3;
        this.draw();
    }
}

// Create particle array
function init() {
    particles_array = [];
    let num_particles = (canvas.height * canvas.width) / 2000;

    for (let i = 0; i < num_particles; i++) {
        let size = (Math.random() * 2) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let directionX = (Math.random() * 5) - 2.5;
        let directionY = (Math.random() * 5) - 2.5;
        let color = 'gray';

        particles_array.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// Check if particles are close enough to draw lines between them
function connect() {
    let opacity_value = 1;

    for (let i = 0; i < particles_array.length; i++) {
        for (let j = i; j < particles_array.length; j++){
            let distance = ((particles_array[i].x - particles_array[j].x) * (particles_array[i].x - particles_array[j].x))
                + ((particles_array[i].y - particles_array[j].y) * (particles_array[i].y - particles_array[j].y));

            if (distance < (canvas.width / 10) * (canvas.height / 10)) {
                opacity_value = 1 - (distance / 20000);
                ctx.strokeStyle = 'rgba(255, 255, 255,' + opacity_value + ')';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particles_array[i].x, particles_array[i].y);
                ctx.lineTo(particles_array[j].x, particles_array[j].y);
                ctx.stroke();
            }
        }
    }

    for (let i = 0; i < particles_array.length; i++) {
        let distance = ((particles_array[i].x - mouse.x) * (particles_array[i].x - mouse.x))
            + ((particles_array[i].y - mouse.y) * (particles_array[i].y - mouse.y));

        if (distance < (canvas.width / 10) * (canvas.height / 10)) {
            opacity_value = 1 - (distance / 20000);
            ctx.strokeStyle = 'rgba(255, 255, 255,' + opacity_value + ')';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles_array[i].x, particles_array[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    }
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particles_array.length; i++) {
        particles_array[i].update();
    }

    connect();
}

// Resize event
window.addEventListener('resize', function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight / 2;
    mouse.radius = ((canvas.height / 150) * (canvas.width / 150));
    init()
});

// Mouse out event
window.addEventListener('mouseout', function() {
    mouse.x = undefined;
    mouse.y = undefined;
})

init();
animate();