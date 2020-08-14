
export class thePlayer {
    constructor(color) {
        this.canvas = document.querySelector('#gameScreen');
        this.context = this.canvas.getContext('2d');
        this.gray = this.canvas.getBoundingClientRect();
        this.blockHeight = 80;
        this.blockWidth = 80;
        this.coord = { x: 220, y: 400 };
        this.test = document.querySelector("#test");
        this.left = false;
        this.right = false;
        this.up = false;
        this.jumping = false;
        this.slower = 0;
        this.color = color;
        this.lastKey;
        this.isThereObstacle = false
    }

    displayPlayer() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.coord.x, this.coord.y, this.blockHeight, this.blockWidth);
    }
    controls() {
        document.addEventListener("keydown", () => {
            switch (event.keyCode) {
                case 37:
                case 65:
                    this.left = true;
                    this.lastKey = 0;
                    break;
                case 38:
                case 87:
                    this.up = true;
                    this.lastKey = 1;
                    break;
                case 39:
                case 68:
                    this.right = true;
                    this.lastKey = 2;
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
    movePlayer(blocks) {
        let testOne = this.coord.x
        let testTwo = this.coord.y

        if (!this.isThereObstacle) {
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
                this.coord.y += - 15 + this.slower;
                this.slower++;
                this.lastKey = 3
            }
        }

        for (let i = 0; i < blocks.length; i++) {
            if (this.coord.x < (blocks[i][0] - this.gray.x + 20) && this.coord.x + this.blockWidth > (blocks[i][0] - this.gray.x) &&
                this.coord.y < (blocks[i][1] - this.gray.y + 20) && this.coord.y + this.blockHeight > (blocks[i][1] - this.gray.y)) { // widthin x and y coordinates
                this.coord.x = testOne
                this.coord.y = testTwo
            }
        }
    }
    stop(blocks) {
        for (let i = 0; i < blocks.length; i++) {
            if (this.coord.x < (blocks[i][0] - this.gray.x + 20) && this.coord.x + this.blockWidth > (blocks[i][0] - this.gray.x)) { // widthin x  coordinates
                if (this.coord.y < (blocks[i][1] - this.gray.y + 20) && this.coord.y + this.blockHeight > (blocks[i][1] - this.gray.y)) { // widthin y coordinates
                    // switch (this.lastKey) {
                    //     case 0:
                    //         this.coord.x++;
                    //         break;
                    //     case 1:
                    //         this.coord.y++;
                    //         break;
                    //     case 2:
                    //         this.coord.x--;
                    //         break;
                    //     case 3: 
                    //         this.coord.y--;
                    //         break
                    // }
                    // this.stop(blocks);

                }
            }
        }
    }
}