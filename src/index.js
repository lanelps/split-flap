import './styles/main.css';

function colorShuffle(pixel) {
  const max = 255;
  const r = Math.floor(Math.random() * max);
  const g = Math.floor(Math.random() * max);
  const b = Math.floor(Math.random() * max);
  pixel.style.color = `rgb(${r}, ${g}, ${b})`;
}

function splitFlap(element) {
  const initialText = element.innerText;

  const characters = `FuckYou`;
  const charArray = characters.split(``);

  let loopCounter = 0;

  const sliptLoop = () => {
    const timeout = setTimeout(() => {
      if (loopCounter < charArray.length) {
        element.innerText = charArray[loopCounter];
        loopCounter++;
        sliptLoop();
      } else {
        element.innerText = initialText;
        clearTimeout(timeout);
      }
    }, 100);
  };

  sliptLoop();
}

function splitFlapRandom(element) {
  const initialText = element.innerText;

  const characters = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
  const charArray = characters.split(``);

  let loopCounter = 0;

  const sliptLoop = () => {
    const timeout = setTimeout(() => {
      if (loopCounter < 10) {
        element.innerText =
          charArray[Math.floor(Math.random() * charArray.length)];
        loopCounter++;
        sliptLoop();
      } else {
        element.innerText = initialText;
        clearTimeout(timeout);
      }
    }, 100);
  };

  sliptLoop();
}

function createSplitFlapElement(type, text) {
  const element = document.createElement(type);

  const textChars = text.split('');
  textChars.forEach(char => {
    const charElement = document.createElement(`span`);
    charElement.innerText = char;

    charElement.addEventListener(`mouseover`, () => {
      splitFlapRandom(charElement);
      // splitFlap(charElement);
    });

    element.appendChild(charElement);
  });

  return element;
}

function eventListeners() {}

function init() {
  const heading = createSplitFlapElement(`h1`, `HELLO;`);
  const sentence = createSplitFlapElement(
    `p`,
    `Tēnā koutou, tēnā koutou, tēnā koutou katoa`
  );

  document.body.appendChild(heading);
  document.body.appendChild(sentence);
}

function main() {
  if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
      init();
      eventListeners();
    });
  }
}

main();
