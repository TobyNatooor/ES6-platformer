
export class thePlayer {
    constructor() {
        this.canvas = document.querySelector('#gameScreen');
        this.context = this.canvas.getContext('2d');
        this.blockHeight = 80;
        this.blockWidth = 80;
        this.coord = { x: 200, y: 100 };
    }
    displayPlayer() {
        this.context.clearRect(0, 0, 600, 600)
        this.context.fillRect(this.coord.x, this.coord.y, this.blockHeight, this.blockWidth)
    }
    movePlayer() {
        if (event.keyCode == 37 || event.keyCode == 65) {
            console.log("left")
            this.coord.x -= 5;
            this.displayPlayer();
        }
        if (event.keyCode == 38 || event.keyCode == 87) {
            console.log("up")
            this.coord.y -= 5;
            this.displayPlayer();
        }
        if (event.keyCode == 39 || event.keyCode == 68) {
            console.log("right")
            this.coord.x += 5;
            this.displayPlayer();
        }
        if (event.keyCode == 40 || event.keyCode == 83) {
            console.log("down")
            this.coord.y += 5;
            this.displayPlayer();
        }
    }
}