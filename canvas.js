
export class theCanvas {
    constructor() {
        this.canvas = document.querySelector('#gameScreen');
        this.context = this.canvas.getContext('2d');
        this.gray = this.canvas.getBoundingClientRect();
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.canvasCoord = 
        this.blockArray = [/*[260 + this.gray.x, 490 + this.gray.y]*/];
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    coordHover = () => {
        this.canvas.addEventListener('mousemove', () => {
            document.querySelector('#canvasCoords').innerHTML
                = (event.clientX - this.gray.x) + ', ' +
                (event.clientY - this.gray.y);
        });
    }

    createBlock() {
        this.canvas.addEventListener('click', () => {
            this.blockArray.push([event.clientX - 10, event.clientY - 10]);
            console.log(this.blockArray)
        });
    }

    drawBlock() {
        for (let i = 0; i < this.blockArray.length; i++) {
            this.context.fillStyle = 'green'
            this.context.fillRect(
                this.blockArray[i][0] - this.gray.x,
                this.blockArray[i][1] - this.gray.y,
                20, 20)
        }
    }
}