"use strict";

/* Classes */
const Game = require('./game');
const Vector = require('./vector');

/* Global variables */
var canvas = document.getElementById('screen');
var game = new Game(canvas, update, render);
var player = {
  position: {x: 200, y: 200},
  velocity: {x: 0, y: 0},
  img: new Image()
}
player.img.src = 'assets/helicopter.png';
var backgrounds = [
  new Image(),
  new Image(),
  new Image()
];
backgrounds[0].src = 'assets/foreground.png';
backgrounds[1].src = 'assets/midground.png';
backgrounds[2].src = 'assets/background.png';

/**
 * @function masterLoop
 * Advances the game in sync with the refresh rate of the screen
 * @param {DOMHighResTimeStamp} timestamp the current time
 */
var masterLoop = function(timestamp) {
  game.loop(timestamp);
  window.requestAnimationFrame(masterLoop);
}
masterLoop(performance.now());


/**
 * @function update
 * Updates the game state, moving
 * game objects and handling interactions
 * between them.
 * @param {DOMHighResTimeStamp} elapsedTime indicates
 * the number of milliseconds passed since the last frame.
 */
function update(elapsedTime) {

  // move the player
  player.position.x += player.velocity.x;
  player.position.y += player.velocity.y;
}

/**
  * @function render
  * Renders the current game state into a back buffer.
  * @param {DOMHighResTimeStamp} elapsedTime indicates
  * the number of milliseconds passed since the last frame.
  * @param {CanvasRenderingContext2D} ctx the context to render to
  */
function render(elapsedTime, ctx) {
  // Render the backgrounds
  ctx.drawImage(backgrounds[2], 0, 0);
  ctx.drawImage(backgrounds[1], 0, 0);
  ctx.drawImage(backgrounds[0], 0, 0);

  // Render the player
  ctx.drawImage(player.img, 0, 0, 131, 53, 0, 0, 131, 53);
}
