
export class thePlayer {
    constructor() {
        this.canvas = document.querySelector('#gameScreen');
        this.context = this.canvas.getContext('2d');
        this.blockHeight = 80;
        this.blockWidth = 80;
        this.coord = { x: 220, y: 400 };
        this.test = document.querySelector("#test");
        this.left = false;
        this.right = false;
        this.up = false;
        this.jumping = false;
        this.slower = 0;
    }

    displayPlayer = () => {
        this.context.clearRect(0, 0, 600, 600);
        this.context.fillStyle = 'blue';
        this.context.fillRect(this.coord.x, this.coord.y, this.blockHeight, this.blockWidth);
    }

    movePlayer = () => {
        document.addEventListener('keydown', () => {
            switch (event.keyCode) {
                case 37: //left
                    console.log("left")
                    this.left = true;
                    break;
                case 38: //up
                    console.log("up")
                    this.up = true;
                    break;
                case 39: //right
                    console.log("right")
                    this.right = true;
                    break;
                case 40: //down
                    console.log("down")
                    break;
            }
        });
        document.addEventListener('keyup', () => {
            switch (event.keyCode) {
                case 37: //left
                    this.left = false;
                    break;
                case 38: //up
                    this.up = false;
                    break;
                case 39: //right
                    this.right = false;
                    break;
                case 40: //down
                    break;
            }
        });

    }
    animate = () => {
        this.jumping = false;

        if (this.left) {
            this.coord.x += -8;
        }
        if (this.right) {
            this.coord.x += 8;
        }
        if (this.coord.y < 400) {
            this.jumping = true;
        }
        if (this.up && !this.jumping) {
            this.coord.y += - 15;
            this.slower = 0;
        }
        if (this.jumping) {
            this.coord.y += - 15  + this.slower;;
            this.slower++;
        }
        this.displayPlayer();
        window.requestAnimationFrame(this.animate)
    }
}