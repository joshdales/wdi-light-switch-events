var body = document.querySelector('body');
var button = document.querySelector('button');
var sta = document.querySelector('.status');

button.addEventListener('click', pressSwitch);

function pressSwitch() {
  if (button.classList.contains('on')) {
    button.classList.remove('on');
    button.classList.add('off');
    body.className = 'dark';
    sta.innerText = "Hey, who turned off the lights?";
  } else {
    button.classList.remove('off')
    button.classList.add('on')
    body.className = 'light';
    sta.innerText = "It's so bright in here!";
  }
}
