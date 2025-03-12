import {
    setCurr,
    getChord
} from './adapt.js';
import { 
    getBass1, 
    getBass2, 
    getBass3 
} from './bass.js';
import { 
    getDrum1, 
    getDrum2
} from './drum.js';
import {
    getMel1,
    getMel2,
    getMel3,
    getMel4
} from './melody.js';

Tone.Transport.bpm.value = getBPM();
const trip_4 = Tone.Time("4t").toSeconds();
const sec_16 = Tone.Time("16n").toSeconds();
const sec_8 = Tone.Time("8n").toSeconds();
const sec_4 = Tone.Time("4n").toSeconds();
const sec_2 = Tone.Time("2n").toSeconds();
const mesr = Tone.Time("1m").toSeconds();

let clicked = false;
function setClicked(val) {
    clicked = val;
}

const bass1 = getBass1();
const bass2 = getBass2();
const bass3 = getBass3();
const drum1 = getDrum1();
const drum2 = getDrum2();
const mel1 = getMel1();
const mel2 = getMel2();
const mel3 = getMel3();
const mel4 = getMel4();

//////////////////////////////////////////////

function getBPM () { return 160; }

//////////////////////////////////////////////

async function playSong() {
    

    mel3.start();
    mel4.start(Tone.now() + 4*mesr);
    bass3.start();
    drum2.start();
}

function testMessage() {
    console.log("Ok");
}

export {
    playSong,
    testMessage,
    setClicked,
    getBPM
};