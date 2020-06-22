
import { theCanvas } from './canvas.js';
import { thePlayer } from './player.js';

let c = new theCanvas();
let p1 = new thePlayer('blue');

c.coordHover();
c.createBlock();
p1.displayPlayer();
p1.controls();

function animate() {
    c.clearCanvas();
    p1.movePlayer();
    p1.stop(c.blockArray);
    p1.displayPlayer();
    c.drawBlock();
    window.requestAnimationFrame(animate);
}
animate()