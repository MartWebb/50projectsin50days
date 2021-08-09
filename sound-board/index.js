const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']



sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound.charAt(0).toUpperCase() + sound.slice(1);
    btn.addEventListener('click', () => {
      stopAudio();

      document.getElementById(sound).play();
      console.log(sound);
   });
   document.getElementById('buttons').appendChild(btn);
});

function stopAudio() {
   sounds.forEach(sound => {
       const song = document.getElementById(sound);

       song.pause();
       song.currentTime = 0;
   })
}