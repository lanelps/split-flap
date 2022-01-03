import './styles/main.css';

function initialiseBoard() {
  const element = document.createElement('div');
  element.innerHTML = `:) :(`;

  document.body.appendChild(element);
}

function main() {
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      console.log(`Hello!`);
      initialiseBoard();
    });
  }
}

main();
