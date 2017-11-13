var body = document.querySelector('body')
var button = document.querySelector('button')


var pressSwitch = function() {
  if (button.classList.contains('on')){
    body.className = 'dark';
  } else {
    body.className = 'light';
  }
}
