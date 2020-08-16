
export class thePlayer {
    constructor(color) {
        this.canvas = document.querySelector('#gameScreen');
        this.context = this.canvas.getContext('2d');
        this.gray = this.canvas.getBoundingClientRect();
        this.coord = { x: 220, y: 400 };
        this.blockHW = 80;
        this.color = color;
        this.left = false;
        this.right = false;
        this.up = false;
        this.jumping = false;
        this.gravity = false;
        this.acc = 0;
    }
    displayPlayer() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.coord.x, this.coord.y, this.blockHW, this.blockHW);
    }
    controls() {
        document.addEventListener("keydown", () => {
            switch (event.keyCode) {
                case 37:
                case 65:
                    this.left = true;
                    break;
                case 38:
                case 87:
                    this.up = true;
                    break;
                case 39:
                case 68:
                    this.right = true;
                    break;
            }
        });
        document.addEventListener("keyup", () => {
            switch (event.keyCode) {
                case 37:
                case 65:
                    this.left = false;
                    break;
                case 38:
                case 87:
                    this.up = false;
                    break;
                case 39:
                case 68:
                    this.right = false;
                    break;
            }
        });
    }
    movePlayer(blocks, obstacleHW) {
        // move left
        if (this.left) {
            this.coord.x += -8;
        }
        // move right
        if (this.right) {
            this.coord.x += 8;
        }
        // jump
        if (this.up && !this.jumping && !this.gravity) {
            this.coord.y += - 15;
            this.acc = 0;
            this.jumping = true
        }
        // jumping
        if (this.jumping) {
            this.coord.y += - 15 + this.acc;
            this.acc++;
            if (this.acc - 15 == 0) {
                this.jumping = false
                this.gravity = true
                this.acc = 0;
            }
        }
        // gravity 
        if (this.gravity) {
            this.coord.y += this.acc;
            this.acc++;
        }
        // avoids obstacles
        let avoidObstacles = () => {
            for (let i = 0; i < blocks.length; i++) {
                if (this.coord.x < (blocks[i][0] - this.gray.x + obstacleHW) &&
                    this.coord.x + this.blockHW > (blocks[i][0] - this.gray.x) &&
                    this.coord.y < (blocks[i][1] - this.gray.y + obstacleHW) &&
                    this.coord.y + this.blockHW > (blocks[i][1] - this.gray.y)) {

                    // if (this.coord.x + this.blockHW > (blocks[i][0] - this.gray.x + obstacleHW) &&
                    //     this.coord.y + this.blockHW > (blocks[i][1] - this.gray.y)) { // left
                    //     this.coord.x += 1;
                    //     avoidObstacles()

                    // } else if (this.coord.x + this.blockHW < (blocks[i][0] - this.gray.x + obstacleHW) &&
                    //           this.coord.y + this.blockHW > (blocks[i][1] - this.gray.y)) { // right
                    //     this.coord.x += -1;
                    //     avoidObstacles()
                    // } else {
                    //     this.acc = 0;
                    //     this.coord.y += -1
                    //     this.gravity = false;
                    //     avoidObstacles()
                    // }
                }
            }
        }
        avoidObstacles()
    }
}