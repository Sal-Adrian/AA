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
    getDrum2,
    getdrumBridge
} from './drum.js';
import {
    getMel1,
    getMel2,
    getMel3,
    getMel4,
    getMelBridge
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
const drumBridge = getdrumBridge();
const mel1 = getMel1();
const mel2 = getMel2();
const mel3 = getMel3();
const mel4 = getMel4();
const melBridge = getMelBridge();

//////////////////////////////////////////////

function getBPM () { return 160; }

const intro = new Tone.ToneEvent( function(time) {
    bass1.start(time);
    mel1.start(time);
});
const introOff = new Tone.ToneEvent( function(time) {
    bass1.set ({"loop" : false});
    mel1.set ({"loop" : false});
});


const part1 = new Tone.ToneEvent( function(time) {
    bass2.start(time);
    mel2.start(time);
    drum1.start(time);
});
const part1Off = new Tone.ToneEvent( function(time) {
    bass2.set ({"loop" : false});
    mel2.set ({"loop" : false});
    drum1.set ({"loop" : false});
});

const bridge = new Tone.ToneEvent( function(time) {
    drumBridge.start(time);
    melBridge.start(time + 2*mesr);
});

const part2 = new Tone.ToneEvent( function(time) {
    bass3.start(time);
    mel3.start(time);
    mel4.start(time + 4*mesr);
    drum2.start(time);
}); 

//////////////////////////////////////////////

function playSong() {
    let offset = 0;
    intro.start(Tone.now());

    offset += 16*mesr;
    introOff.start(Tone.now() + offset - sec_2);
    part1.start(Tone.now() + offset);

    offset += 21*mesr + 2*trip_4;
    part1Off.start(Tone.now() + offset - sec_2);
    bridge.start(Tone.now() + offset);

    offset += 3*mesr
    part2.start(Tone.now() + offset);
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