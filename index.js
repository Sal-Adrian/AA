import {
    playMet,
    testMessage
} from './song.js';


let beatButton = document.getElementById("beatBtn");
beatButton.addEventListener('click', function () {
    playMet();
});


function mainTest() {
    testMessage();
}
mainTest();