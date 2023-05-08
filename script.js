'use strict';
const keys = document.querySelectorAll('.key');
const playSound = function (key) {
  const sound = new Audio(`https://merjenweb.github.io/keys/${key}.mp3`);
  sound.play();
};

//CLICKING
keys.forEach(function (key) {
  key.addEventListener('click', function () {
    const keyHTMLtext = key.innerText;
    playSound(keyHTMLtext);
  });
});

//KEYDOWN
document.addEventListener('keydown', function (e) {
  keys.forEach(function (key) {
    const keyHTMLtext = key.innerText;
    const pressedKey = e.key;
    if (pressedKey === keyHTMLtext) {
      playSound(keyHTMLtext);
    }
  });
});
