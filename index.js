import {
    drumLoop,
    playSong,
    testMessage
} from './song.js';


const beatButton = document.getElementById("beatBtn");
beatButton.addEventListener('click', async function () {
    await Tone.start();
    drumLoop();
});

const songButton = document.getElementById("songBtn");
songButton.addEventListener('click', async function () {
    await Tone.start();
    playSong();
});


function mainTest() {
    testMessage();
}
mainTest();