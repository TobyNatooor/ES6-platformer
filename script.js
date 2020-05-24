
import { theCanvas } from './canvas.js';
import { thePlayer } from './player.js';

let c = new theCanvas();

let p1 = new thePlayer(37, 38, 39, 'blue');
let p2 = new thePlayer(65, 87, 68, 'red');

c.coordHover();
c.createBlock();

p1.controls();
p2.controls();

function animateAll() {

    c.clearCanvas();
    p1.movePlayer();
    p1.stop(c.blockArray);
    p2.movePlayer();
    p2.stop(c.blockArray);
    c.drawBlock();

    window.requestAnimationFrame(animateAll);
}
animateAll();
