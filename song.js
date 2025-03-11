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
    volume : 0,
    oscillator : {type:"sine"}
}).toDestination();

const snare = new Tone.NoiseSynth({
    volume : -8,
    noise : {type:"pink"},
    envelope : {decay: 0.65}
}).toDestination();
// WARNING: MetalSynth seems to cause lag spikes when it is first scheduled.
// Maybe choose a different synth sound?
const hiHat = new Tone.MetalSynth({
    volume : -24,
    envelope : {decay: 0.15}
}).toDestination();

//////////////////////////////////////////////

const bass1 = new Tone.ToneEvent( function(time) {
    let offset = 0;
    bass.triggerAttackRelease("D2", "4t", time);
    bass.triggerAttackRelease("D2", "4t", time + trip_4);
    bass.triggerAttackRelease("D2", "4t", time + 2*trip_4);
    bass.triggerAttackRelease("Eb2", mesr + sec_2, time + sec_2);
    offset += 2*mesr;
    bass.triggerAttackRelease("D2", "4t", offset+time);
    bass.triggerAttackRelease("D2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("D2", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("Eb2", mesr + sec_2, offset+time + sec_2);

    offset += 2*mesr;
    bass.triggerAttackRelease("B1", "4t", offset+time);
    bass.triggerAttackRelease("B1", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("B1", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("C2", mesr + sec_2, offset+time + sec_2);
    offset += 2*mesr;
    bass.triggerAttackRelease("B1", "4t", offset+time);
    bass.triggerAttackRelease("B1", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("B1", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("C2", mesr + sec_2, offset+time + sec_2);
});
bass1.set({
    "loop" : true,
    "loopEnd" : "8m"
})

const bass2 = new Tone.ToneEvent( function(time) {
    let offset = 0;
    bass.triggerAttackRelease("D2", "4t", time);
    bass.triggerAttackRelease("Eb2", "4t", time + trip_4);
    bass.triggerAttackRelease("D2", "4t", time + 2*trip_4);
    bass.triggerAttackRelease("F2", 2*mesr + trip_4, time+sec_2);
    offset = 2*mesr+sec_4+trip_4;
    bass.triggerAttackRelease("B1", "4t", offset+time);
    bass.triggerAttackRelease("C2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("B1", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("D2", 2*mesr + trip_4, offset+time+sec_2);

    offset += 2*mesr+sec_4+trip_4;
    bass.triggerAttackRelease("D2", "4t", offset+time);
    bass.triggerAttackRelease("Eb2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("D2", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("F2", 2*mesr + trip_4, offset+time+sec_2);
    offset += 2*mesr+sec_4+trip_4;
    bass.triggerAttackRelease("B1", "4t", offset+time);
    bass.triggerAttackRelease("C2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("B1", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("D2", 2*mesr + trip_4, offset+time+sec_2);

    offset += 2*mesr+sec_4+trip_4;
    bass.triggerAttackRelease("D2", "4t", offset+time);
    bass.triggerAttackRelease("Eb2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("D2", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("F2", sec_2 + 2*trip_4, offset+time+sec_2);
    offset += mesr+2*trip_4;
    bass.triggerAttackRelease("D2", "4t", offset+time);
    bass.triggerAttackRelease("Eb2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("D2", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("Eb2", sec_2 + 2*trip_4, offset+time+sec_2);
    offset += mesr+2*trip_4;
    bass.triggerAttackRelease("B1", "4t", offset+time);
    bass.triggerAttackRelease("C2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("B1", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("D2", sec_2 + 2*trip_4, offset+time+sec_2);
    offset += mesr+2*trip_4;
    bass.triggerAttackRelease("B1", "4t", offset+time);
    bass.triggerAttackRelease("C2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("B1", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("C2", sec_2 + 2*trip_4, offset+time+sec_2);

    offset += mesr+2*trip_4;
    bass.triggerAttackRelease("D2", "4t", offset+time);
    bass.triggerAttackRelease("Eb2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("D2", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("F2", sec_2 + 2*trip_4, offset+time+sec_2);
    offset += mesr+2*trip_4;
    bass.triggerAttackRelease("D2", "4t", offset+time);
    bass.triggerAttackRelease("Eb2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("D2", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("Eb2", sec_2 + 2*trip_4, offset+time+sec_2);
    offset += mesr+2*trip_4;
    bass.triggerAttackRelease("B1", "4t", offset+time);
    bass.triggerAttackRelease("C2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("B1", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("D2", sec_2 + 2*trip_4, offset+time+sec_2);
    offset += mesr+2*trip_4;
    bass.triggerAttackRelease("B1", "4t", offset+time);
    bass.triggerAttackRelease("C2", "4t", offset+time + trip_4);
    bass.triggerAttackRelease("B1", "4t", offset+time + 2*trip_4);
    bass.triggerAttackRelease("C2", sec_2 + 2*trip_4, offset+time+sec_2);
});
bass2.set({
    "loop" : true,
    "loopEnd" : 20*mesr + 2*trip_4
})

const bass3 = new Tone.ToneEvent( function(time) {
    bass.triggerAttackRelease("G2", "16n", time, 2.5);
    bass.triggerAttackRelease("G2", "16n", time + sec_8);
    bass.triggerAttackRelease("G2", "16n", time + sec_4);
    bass.triggerAttackRelease("G2", "16n", time + sec_4 + sec_8, 2.5);
    bass.triggerAttackRelease("G2", "16n", time + sec_2);
    bass.triggerAttackRelease("G2", "16n", time + sec_2 + sec_8);
    bass.triggerAttackRelease("Ab2", "8n", time + sec_2 + sec_4, 2.5);
    bass.triggerAttackRelease("Bb2", "8n", time + sec_2 + sec_4 + sec_8, 2.5);
});
bass3.set({
    "loop" : true,
    "loopEnd" : "1m"
})

const drum1 = new Tone.ToneEvent( function(time) {
    let offset = 0;
    snare.triggerAttackRelease("4t", time, 0.5);
    hiHat.triggerAttackRelease("G1", "4t", time, 0.75);
    hiHat.triggerAttackRelease("G1", "4t", time + trip_4, 0.25);
    hiHat.triggerAttackRelease("G1", "4t", time + 2*trip_4, 0.25);
    hiHat.triggerAttackRelease("G1", "4t", time + 3*trip_4, 0.75);
    hiHat.triggerAttackRelease("G1", "4t", time + 4*trip_4, 0.25);
    hiHat.triggerAttackRelease("G1", "4t", time + 5*trip_4, 0.25);
    hiHat.triggerAttackRelease("G1", "4t", time + 6*trip_4, 0.75);
    hiHat.triggerAttackRelease("G1", "4t", time + 7*trip_4, 0.25);

    offset = mesr + 2*trip_4;
    snare.triggerAttackRelease("4t", offset+time);
    hiHat.triggerAttackRelease("G1", "4t", offset+time, 0.75);
    hiHat.triggerAttackRelease("G1", "4t", offset+time + trip_4, 0.25);
    hiHat.triggerAttackRelease("G1", "4t", offset+time + 2*trip_4, 0.25);
    hiHat.triggerAttackRelease("G1", "4t", offset+time + 3*trip_4, 0.75);
    hiHat.triggerAttackRelease("G1", "4t", offset+time + 4*trip_4, 0.25);
    hiHat.triggerAttackRelease("G1", "4t", offset+time + 5*trip_4, 0.25);
    hiHat.triggerAttackRelease("G1", "4t", offset+time + 6*trip_4, 0.75);
    hiHat.triggerAttackRelease("G1", "4t", offset+time + 7*trip_4, 0.25);
});
drum1.set({
    "loop" : true,
    "loopEnd" : 2*mesr + sec_2 + trip_4
})

async function playSong() {
    drum1.start();
}

function testMessage() {
    console.log("Ok");
}

export {
    playSong,
    testMessage,
    setClicked
};