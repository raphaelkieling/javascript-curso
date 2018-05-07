let teclas = Array.from(document.querySelectorAll('.tecla'));
let keyboards = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
let soundsToEvent = [];

const createAudioEvent = audio => audio.cloneNode();
const addAudioEventList = audio => list => [...list, createAudioEvent(audio)];

const playSound = sound => sound.play() && false;
const timing = (ms, fn) => setTimeout(() => fn(), ms);


const listeningClick = (tecla, index) => {
    let audio = tecla.querySelector('audio');

    keyboardJS.bind(keyboards[index], (e) => {
        tecla.className += " clicado";
        
        timing(300, () => {
            tecla.className = tecla.className.replace(' clicado', '');
        });
        
        soundsToEvent = addAudioEventList(audio)(soundsToEvent).filter(playSound);

    })
}

teclas.forEach(listeningClick)
