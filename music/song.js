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
    getMel1
} from './melody.js';


let clicked = false;
function setClicked(val) {
    clicked = val;
}

//////////////////////////////////////////////

function getBPM () { return 160; }

//////////////////////////////////////////////

async function playSong() {
    const bass1 = getBass1();
    const bass2 = getBass2();
    const bass3 = getBass3();
    const drum1 = getDrum1();
    const drum2 = getDrum2();
    const mel1 = getMel1();

    mel1.start();
    bass1.start();
    // drum2.start();
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