
export class theCanvas {
    constructor() {
        this.canvas = document.querySelector('#gameScreen');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = 600;
        this.canvas.height = 600;
        
    }

    displayCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
}