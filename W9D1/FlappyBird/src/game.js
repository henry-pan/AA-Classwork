import Level from './level';
import Bird from './bird';

export default class FlappyBird {
  constructor(canvas){
    this.ctx = canvas.getContext("2d");
    this.dimensions = { width: canvas.width, height: canvas.height };
    this.restart();
  }

  restart(){
    this.level = new Level(this.dimensions);
    this.bird = new Bird(this.dimensions);
    this.running = false;
    this.animate(this.ctx);
  }

  animate(ctx){
    this.level.animate(ctx);
    this.bird.animate(ctx);
    if (this.running) {
      requestAnimationFrame(this.animate(this.ctx));
    }
  }

  play(){
    this.running = true;
    this.animate(this.ctx);
  }

  click(){
    if (!this.running) this.play();
    this.bird.flap();
  }
}