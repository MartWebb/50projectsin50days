const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']



sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound.charAt(0).toUpperCase() + sound.slice(1);

    document.getElementById('buttons').appendChild(btn);
})
