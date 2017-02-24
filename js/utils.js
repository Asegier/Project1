window.utils = {
  el,
  requestAnimFrame,
}

function el (id) {
  return document.getElementById(id)
}

function requestAnimFrame (callback) {
  if (window.requestAnimationFrame) {
    window.requestAnimationFrame(callback)
    return
  }
  if (window.webkitRequestAnimationFrame) {
    window.webkitRequestAnimationFrame(callback)
    return
  }
  if (window.mozRequestAnimationFrame) {
    window.mozRequestAnimationFrame(callback)
    return
  }
  setTimeout(callback, 1000 / 60)
}
