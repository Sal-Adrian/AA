import {
    playSong,
    testMessage
} from './music/song.js';

const songButton = document.getElementById("songBtn");
songButton.addEventListener('click', async function () {
    await Tone.start();
    Tone.Transport.start();
    playSong();
});

function mainTest() {
    testMessage();
}
mainTest();
await Tone.start();
Tone.Transport.start();
playSong();