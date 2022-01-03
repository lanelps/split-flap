import './styles/main.css';

const PIXEL_WIDTH = 9.63;
const PIXEL_HEIGHT = 16;

let bodyMouseDown = false;

function eventListeners() {
  const body = document.querySelector('body');

  body.addEventListener('mousedown', e => {
    e.preventDefault();
    bodyMouseDown = true;
  });

  body.addEventListener('mouseup', e => {
    e.preventDefault();
    bodyMouseDown = false;
  });
}

function initialiseBoard() {
  const board = document.createElement('div');
  board.setAttribute('id', 'board');
  document.body.appendChild(board);

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
      pixel.innerText = `*`;

      pixel.addEventListener('mousedown', () => {
        pixel.style.backgroundColor = `#000`;
      });

      pixel.addEventListener('mouseover', () => {
        if (bodyMouseDown) {
          pixel.style.backgroundColor = `#000`;
        }
      });

      board.appendChild(pixel);
    }
  }
}

function main() {
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      eventListeners();
      initialiseBoard();
    });
  }
}

main();

// if the body is moused down then and individual pixel mouseover function should be listening
