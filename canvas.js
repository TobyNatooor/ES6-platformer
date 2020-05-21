
export class theCanvas {
    constructor() {
        this.canvas = document.querySelector('#gameScreen');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 600;
    }
}