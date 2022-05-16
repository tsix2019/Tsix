const comRem =()=>{
  var whdef = 100 / 1920
  var wH = window.innerHeight
  var wW = window.innerWidth
  var rem = wW * whdef
  const html = document.getElementsByTagName('html')[0]
  html.style.fontSize = rem + 'px'
}
comRem()

window.addEventListener('resize',()=>{comRem()})
