
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {

  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './img/Braço.png';
    mario.style.width = '125px';
    mario.style.marginLeft = '50px';

    clearInterval(loop);
  }

}, 10);

// Pulo pelo teclado (qualquer tecla)
document.addEventListener('keydown', jump);

// Pulo por clique/tela (funciona em celular)
document.addEventListener('click', jump);
document.addEventListener('touchstart', jump);



