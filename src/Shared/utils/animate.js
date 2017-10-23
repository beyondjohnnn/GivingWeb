
function Animation(framesPerSecond, frameCallBack){
  this.interval = 1000/framesPerSecond;
  this.startTime = 0;
  this.frameCallBack = frameCallBack;
  this.run = this.run.bind(this)
}

Animation.prototype.start = function(){
  this.startTime = Date.now();
  requestAnimationFrame(this.run);
}

Animation.prototype.run = function(){
  let runNext = true
  if(this.shouldRunNextFrame()){
    runNext = this.frameCallBack();
  }
  if(runNext)requestAnimationFrame(this.run);
}

Animation.prototype.shouldRunNextFrame = function(){
  let now = Date.now();
  let elapsed = now - this.startTime;
  var shouldRun = elapsed >= this.interval;
  if(shouldRun) this.startTime = now;
  return shouldRun;
}

export default Animation
