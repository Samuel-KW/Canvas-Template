function Rectangle (x, y, width, height) {

    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.contains = function (x, y) {
        return this.x <= x && x <= this.x + this.width &&
               this.y <= y && y <= this.y + this.height;
    }

    this.draw = function (ctx) {
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}


class ObjectHandler {

    constructor () {

        this._objects = [];

        this._listeners = {
            move: [],
            down: [],
            up: []
        };
        
        this.setup_listeners();
    }

    setup_listeners () {

        let events = [ 'move', 'down', 'up' ];

        for (const type of events) {

            window.addEventListener('mouse' + type, event => {

                for (const object of this._objects) {

                    if (object.contains(event.x, event.y)) {

                        this._listeners[type].forEach(fn => fn(object, event));

                    }
                }
            });
        }
    }

    addEventListener (type, listener) {
        switch (type) {
            case 'move':
            case 'mousemove': this._listeners.move.push(listener); break;
            case 'mousedown': this._listeners.down.push(listener); break;
            case 'mouseup': this._listeners.up.push(listener); break;
        }
    }

    create_rectangle (x, y, width, height) {
        this._objects.push(new Rectangle(...arguments));
    }

}

const Handler = new ObjectHandler();
Handler.addEventListener('move', console.log);

Session.objects.forEach(obj => Handler.create_rectangle(obj.x, obj.y, obj.width, obj.height));
