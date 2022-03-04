
const keys = document.querySelectorAll('.key');
const audios = document.querySelectorAll('audio');
const keyList = [];

// Create data structure with keys and audio files
keys.forEach(key => {
  const dataKey = key.getAttribute('data-key');
  const kbd = key.querySelector('kbd');

  let audioFile;
  audios.forEach(audio => {
    const audioDataKey = audio.getAttribute('data-key');
    if (audioDataKey === dataKey) {
      audioFile = audio.getAttribute('src');
    }
  });

  const audio = new Audio(audioFile);
  audio.addEventListener('pause', (e) => {
    kbd.classList.remove('playing');
  });

  keyList.push({
    dataKey: dataKey,
    audioFile: audioFile,
    audio: audio,
    button: kbd,
    key: key,
    margin: 0
  });
});

document.addEventListener('keydown', (e) => {
  const keyCode = e.keyCode;
  const key = keyList.find(item => item.dataKey == keyCode);
  const audio = key.audio;

  key.margin -= 10;
  if (key.margin <= -100) {
    key.margin = -10;
  }
  key.key.style.marginBottom = key.margin + 'px';
  key.button.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
});