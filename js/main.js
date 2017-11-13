var body = document.querySelector('body')
var button = document.querySelector('button')

button.addEventListener('click', pressSwitch)

var pressSwitch = function() {
  if (button.classList.contains('on')){
    button.classList.remove('on');
    button.classList.add('off');
    body.className = 'dark';
  } else {
    button.classList.remove('off')
    button.className.add('on')
    body.className = 'light';
  }
}
