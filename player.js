
export class thePlayer {
    constructor(leftKey, upKey, rightKey, color) {
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
        this.leftKey = leftKey;
        this.upKey = upKey;
        this.rightKey = rightKey;
        this.color = color;
        this.lastKey;
    }

    displayPlayer() {
        this.context.fillStyle = this.color;
        this.context.fillRect(this.coord.x, this.coord.y, this.blockHeight, this.blockWidth);
    }

    controls() {
        document.addEventListener('keydown', () => {
            switch (event.keyCode) {
                case this.leftKey:
                    this.left = true;
                    this.lastKey = 0;
                    break;
                case this.upKey:
                    this.up = true;
                    this.lastKey = 1;
                    break;
                case this.rightKey:
                    this.right = true;
                    this.lastKey = 2;
                    break;
            }
        });
        document.addEventListener('keyup', () => {
            switch (event.keyCode) {
                case this.leftKey:
                    this.left = false;
                    break;
                case this.upKey:
                    this.up = false;
                    break;
                case this.rightKey:
                    this.right = false;
                    break;
            }
        });

    }
    movePlayer() {
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
            this.coord.y += - 15 + this.slower;;
            this.slower++;
        }
        this.displayPlayer();
    }

    stop(blocks) {
        for (let i = 0; i < blocks.length; i++) {
            if (this.coord.y < (blocks[i][1] - this.gray.y + 20) && this.coord.y + this.blockHeight > (blocks[i][1] - this.gray.y)) {
                if (this.coord.x < (blocks[i][0] - this.gray.x + 20) && this.coord.x + this.blockWidth > (blocks[i][0] - this.gray.x)) {
                    switch (this.lastKey) {
                        case 0:
                            this.coord.x++;
                            break;
                        case 1:
                            this.coord.y++;
                            break;
                        case 2:
                            this.coord.x--;
                            break;
                    }
                    this.stop(blocks);
                }
            }
        }
    }
}