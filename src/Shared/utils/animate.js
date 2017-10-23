
function Animation(framesPerSecond, frameCallBack){
  this.interval = 1000/framesPerSecond;
  this.startTime = 0;
  this.frameCallBack = frameCallBack;
}

Animation.prototype.start = function(){
  this.startTime = Date.now();
  requestAnimationFrame(this.run.bind(this));
}

Animation.prototype.run = function(){
  if(this.shouldRunNextFrame()){
    this.frameCallBack();
  }
  requestAnimationFrame(this.run.bind(this));
}

Animation.prototype.shouldRunNextFrame = function(){
  var now = Date.now();
  elapsed = now - this.startTime;
  var shouldRun = elapsed >= this.interval;
  if(shouldRun) this.startTime = now;
  return shouldRun;
}

export default Animation
