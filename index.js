import {
    drumLoop,
    testMessage
} from './song.js';


let beatButton = document.getElementById("beatBtn");
beatButton.addEventListener('click', async function () {
    await Tone.start();
    drumLoop();
});


function mainTest() {
    testMessage();
}
mainTest();