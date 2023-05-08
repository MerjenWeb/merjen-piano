'use strict';
const keys = document.querySelectorAll('.key');
const playSound = function (key) {
  // new Audio(`keys/${key}.mp3`).play();
  const au = new Audio(
    `https://github.com/MerjenWeb/merjen-piano/blob/main/keys/${key}.mp3`
  ).play();
  console.log(au);
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
