import './styles/main.css';

const PIXEL_WIDTH = 9.63;
const PIXEL_HEIGHT = 16;

function colorShuffle(pixel) {
  const max = 255;
  const r = Math.floor(Math.random() * max);
  const g = Math.floor(Math.random() * max);
  const b = Math.floor(Math.random() * max);
  pixel.style.color = `rgb(${r}, ${g}, ${b})`;
}

function textShuffle(pixel) {
  const characters = `1234567890-=~!@#$%^&*()_+,./<>?≈ç√∫˜µ≤≥÷åß∂ƒ©˙∆˚¬…æœ∑´®†¥¨ˆøπ“‘«[]\{}|`;

  const charArray = characters.split(``);
  pixel.innerText = charArray[Math.floor(Math.random() * charArray.length)];
}

function splitFlap(pixel) {
  const initialText = pixel.innerText;
  const initialColor = pixel.style.color;

  const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
  const charArray = characters.split(``);

  let loopCounter = 0;

  const sliptLoop = () => {
    const timeout = setTimeout(() => {
      if (loopCounter < 10) {
        pixel.innerText =
          charArray[Math.floor(Math.random() * charArray.length)];
        loopCounter++;
        pixel.style.color = colorShuffle(pixel);
        sliptLoop();
      } else {
        pixel.innerText = initialText;
        pixel.style.color = initialColor;
        clearTimeout(timeout);
      }
    }, 100);
  };

  sliptLoop();
}

function redrawBoard() {
  const board = document.querySelector(`#board`);

  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }

  drawGrid();
}

function windowResize() {
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      redrawBoard();
    }
  });

  resizeObserver.observe(document.querySelector(`body`));
}

function eventListeners() {}

function drawGrid() {
  const boardWidth = Math.floor(board.clientWidth / PIXEL_WIDTH);
  const boardHeight = Math.floor(board.clientHeight / PIXEL_HEIGHT);

  for (let i = 0; i < boardHeight; i++) {
    for (let j = 0; j < boardWidth; j++) {
      const pixel = document.createElement(`span`);
      pixel.setAttribute('class', 'pixel');
      pixel.style.cssText = `
      left: ${j * PIXEL_WIDTH}px;
      top: ${i * PIXEL_HEIGHT}px;
      width: ${PIXEL_WIDTH}px;
      height: ${PIXEL_HEIGHT}px;
      color: #000;
      `;
      pixel.innerText = `*`;
      // textShuffle(pixel);

      pixel.addEventListener('mouseover', () => {
        splitFlap(pixel);
      });

      board.appendChild(pixel);
    }
  }
}

function initialiseBoard() {
  const board = document.createElement('div');
  board.setAttribute('id', 'board');
  document.body.appendChild(board);

  drawGrid();
}

function main() {
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      windowResize();
      eventListeners();
      initialiseBoard();
    });
  }
}

main();

// if the body is moused down then and individual pixel mouseover function should be listening
