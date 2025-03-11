import {
    setCurr,
    getChord
} from './adapt.js';


let clicked = false;
function setClicked(val) {
    clicked = val;
}

//////////////////////////////////////////////

Tone.Transport.bpm.value = 160;
const trip_4 = Tone.Time("4t").toSeconds();
const sec_16 = Tone.Time("16n").toSeconds();
const sec_8 = Tone.Time("8n").toSeconds();
const sec_4 = Tone.Time("4n").toSeconds();
const sec_2 = Tone.Time("2n").toSeconds();
const mesr = Tone.Time("1m").toSeconds();

//////////////////////////////////////////////

const bass = new Tone.Synth({
    volume : 3,
    oscillator : {type:"sine"}
}).toDestination();

//////////////////////////////////////////////

const bass1 = new Tone.ToneEvent( function(time) {
    let offset = time;
    bass.triggerAttackRelease("D2", "4t", offset);
    bass.triggerAttackRelease("D2", "4t", offset + trip_4);
    bass.triggerAttackRelease("D2", "4t", offset + 2*trip_4);
    bass.triggerAttackRelease("Eb2", mesr + sec_2, offset + sec_2);
    offset += 2*mesr;
    bass.triggerAttackRelease("D2", "4t", offset);
    bass.triggerAttackRelease("D2", "4t", offset + trip_4);
    bass.triggerAttackRelease("D2", "4t", offset + 2*trip_4);
    bass.triggerAttackRelease("Eb2", mesr + sec_2, offset + sec_2);

    offset += 2*mesr;
    bass.triggerAttackRelease("B1", "4t", offset);
    bass.triggerAttackRelease("B1", "4t", offset + trip_4);
    bass.triggerAttackRelease("B1", "4t", offset + 2*trip_4);
    bass.triggerAttackRelease("C2", mesr + sec_2, offset + sec_2);
    offset += 2*mesr;
    bass.triggerAttackRelease("B1", "4t", offset);
    bass.triggerAttackRelease("B1", "4t", offset + trip_4);
    bass.triggerAttackRelease("B1", "4t", offset + 2*trip_4);
    bass.triggerAttackRelease("C2", mesr + sec_2, offset + sec_2);
});
bass1.set({
    "loop" : true,
    "loopEnd" : "8m"
})

async function playSong() {
    
    console.log("Starting Bass1 Loop.")
    bass1.start();
}

function testMessage() {
    console.log("Ok");
}

export {
    playSong,
    testMessage,
    setClicked
};