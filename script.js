
import { theCanvas } from './canvas.js';
import { thePlayer } from './player.js';

let obstacleHW = 20

let c = new theCanvas(obstacleHW);
let p1 = new thePlayer('blue');

c.coordHover();
c.createBlock();
p1.displayPlayer();
p1.controls();

function animate() {
    c.clearCanvas();
    p1.movePlayer(c.blockArray, obstacleHW);
    //p1.stop(c.blockArray);
    p1.displayPlayer();
    c.drawBlock();
    window.requestAnimationFrame(animate);
}
animate()