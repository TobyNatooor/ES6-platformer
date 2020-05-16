
import { theCanvas } from './canvas.js';
import { thePlayer } from './player.js';
let c = new theCanvas();
let p = new thePlayer();

c.displayCanvas();

p.displayPlayer();

document.addEventListener('keydown', function () {
    p.movePlayer();
});
