import './styles/main.css';

const PIXEL_WIDTH = 9.63;
const PIXEL_HEIGHT = 16;

// let bodyMouseDown = false;
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
      console.log(`entry`, entry);
      console.log(`board redraw`);
      redrawBoard();
    }
  });

  resizeObserver.observe(document.querySelector(`body`));
}

function eventListeners() {
  // const body = document.querySelector('body');
  // body.addEventListener('mousedown', e => {
  //   e.preventDefault();
  //   bodyMouseDown = true;
  // });
  // body.addEventListener('mouseup', e => {
  //   e.preventDefault();
  //   bodyMouseDown = false;
  // });
}

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
      `;
      textShuffle(pixel);
      colorShuffle(pixel);
      // pixel.innerText = `*`;

      // pixel.addEventListener('mousedown', () => {
      //   pixel.style.backgroundColor = `#000`;
      // });

      // pixel.addEventListener('mouseover', () => {
      //   if (bodyMouseDown) {
      //     pixel.style.backgroundColor = `#000`;
      //   }
      // });

      // pixel.addEventListener('mouseover', () => {
      //   textShuffle(pixel);
      //   colorShuffle(pixel);
      // });

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
