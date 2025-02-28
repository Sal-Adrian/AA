import {
    drumLoop,
    playSong,
    testMessage
} from './song.js';
import {
    click
} from './adapt.js';


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

const clickButton = document.getElementById("clickBtn");
clickButton.addEventListener('click', async function () {
    click();
});


function mainTest() {
    testMessage();
}
mainTest();