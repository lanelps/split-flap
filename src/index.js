import './styles/main.css';

const PIXEL_WIDTH = 9.63;
const PIXEL_HEIGHT = 16;

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
      pixel.innerText = `0`;
      board.appendChild(pixel);
    }
  }
}

function main() {
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      initialiseBoard();
    });
  }
}

main();
