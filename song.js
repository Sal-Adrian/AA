import {
    setCurr,
    getChord
} from './adapt.js';


let clicked = false;
function setClicked(val) {
    clicked = val;
}

//////////////////////////////////////////////

Tone.Transport.bpm.value = 120;
const sec_16 = Tone.Time("16n").toSeconds();
const sec_8 = Tone.Time("8n").toSeconds();
const sec_4 = Tone.Time("4n").toSeconds();
const measure = Tone.Time("1m").toSeconds();

//////////////////////////////////////////////

async function playSong() {
    
}

function testMessage() {
    console.log("Ok");
}

export {
    playSong,
    testMessage,
    setClicked
};