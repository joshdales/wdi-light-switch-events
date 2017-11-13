var body = document.querySelector('body');
var button = document.querySelector('button');
var status = document.querySelector('.status');

button.addEventListener('click', pressSwitch);

function pressSwitch() {
  console.log(button.classList.contains('on'));
  if (button.classList.contains('on')) {
    button.classList.remove('on');
    button.classList.add('off');
    body.className = 'dark';
  } else {
    button.classList.remove('off')
    button.classList.add('on')
    body.className = 'light';
  }
}
