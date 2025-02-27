import {
    playSong
} from './song.js';

document.getElementById("btn").onclick = function () {
    startSong();
};

function startSong() {
    console.log("Ok");
    playSong();
}