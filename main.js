
// Global mouse information
let mouse = {
    x: 0,
    y: 0,
    lmb: false,
    mmb: false,
    rmb: false
};

const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');

class Game {
    constructor () {

        this.objects = [
            { x: 10, y: 210, width: 25, height: 44, color: 'red' },
            { x: 143, y: 86, width: 130, height: 30, color: '#eee' },
            { x: 622, y: 342, width: 41, height: 443, color: 'rgba(0, 255, 0, 0.4)' }
        ];

        this.handle_resize();
        this.setup_listeners();

    }

    draw () {

        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw all the objects
        for (const obj of this.objects) {
            ctx.fillStyle = obj.color;
            ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
        }
    }

    setup_listeners () {
        window.addEventListener('resize', () => this.handle_resize());

        window.addEventListener('mousemove', event => {
            mouse.x = event.x;
            mouse.y = event.y;
        });

        // Prevent the default mouse action with event.preventDefault()
        
        window.addEventListener('mousedown', event => {

            // Handle different mouse buttons
            switch(event.which || event.button) {
                case 1: mouse.lmb = true; break;
                case 2: mouse.mmb = true; break;
                case 3: mouse.rmb = true; break;
            }
        });

        window.addEventListener('mouseup', event => {

            // Handle different mouse buttons
            switch(event.which || event.button) {
                case 1: mouse.lmb = false; break;
                case 2: mouse.mmb = false; break;
                case 3: mouse.rmb = false; break;
            }
        });
    }

    handle_mouse () {

    }

    handle_resize () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}


let Session = new Game();
Session.draw();