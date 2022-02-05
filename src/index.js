import textJson from './data/text.json';

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
        // sliptLoop();
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

  const characters =
    `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-=_+{}[]"'<>,.?/`.split(
      ``
    );

  let loopCounter = 0;

  const splitLoop = () => {
    const mouseListener = async e => {
      element.removeEventListener(`mouseover`, mouseListener);
      splitFlapRandom(element);
    };

    const timeout = setTimeout(() => {
      if (loopCounter < 10) {
        element.innerText =
          characters[Math.floor(Math.random() * characters.length)];
        loopCounter++;
        splitLoop();
      } else {
        element.innerText = initialText;
        clearTimeout(timeout);
        element.addEventListener(`mouseover`, mouseListener);
      }
    }, 100);
  };

  splitLoop();
}

function createSplitFlapElement(type, text) {
  const element = document.createElement(type);

  const textChars = text.split('');
  textChars.forEach(char => {
    const charElement = document.createElement(`span`);
    charElement.innerText = char;

    const mouseListener = async e => {
      charElement.removeEventListener(`mouseover`, mouseListener);
      splitFlapRandom(charElement);
    };

    charElement.addEventListener(`mouseover`, mouseListener);

    element.appendChild(charElement);
  });

  return element;
}

function eventListeners() {}

function init() {
  const heading = createSplitFlapElement(`h1`, `HELLO; World;`);
  const sentence = createSplitFlapElement(
    `p`,
    `Tēnā koutou, tēnā koutou, tēnā koutou katoa`
  );

  textJson.lorem.forEach(text => {
    const para = createSplitFlapElement(`p`, text);
    document.body.appendChild(para);
  });

  // document.body.appendChild(heading);
  // document.body.appendChild(sentence);
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
