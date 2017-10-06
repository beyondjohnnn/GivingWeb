
import ReallySmoothScroll from 'really-smooth-scroll'



export function smoothScroll(x, y){
  const oldScrollTo = window.scrollTo
  ReallySmoothScroll.shim();
  ReallySmoothScroll.config({
    mousewheelSensitivity: 1,
    keydownSensitivity: 0
  });
  window.scrollTo(x, y)
  window.scrollTo = oldScrollTo
}

export function smoothScrollVertical(y){
  smoothScroll(0, y)
}
