import { getBPM } from "./song.js";

Tone.Transport.bpm.value = getBPM();
const trip_4 = Tone.Time("4t").toSeconds();
const sec_16 = Tone.Time("16n").toSeconds();
const sec_8 = Tone.Time("8n").toSeconds();
const sec_4 = Tone.Time("4n").toSeconds();
const sec_2 = Tone.Time("2n").toSeconds();
const mesr = Tone.Time("1m").toSeconds();

const mel = new Tone.Synth({
    volume : -10,
    oscillator : {type:"sine"}
}).toDestination();

const mel_2 = new Tone.MonoSynth({
    volume : -20,
    envelope : {
        attack : 4 ,
        decay : 1 ,
        sustain : 0.5 ,
        release : 1
        }
}).toDestination();

const mel_3 = new Tone.MembraneSynth({
    volume : -20
}).toDestination();

const reverb = new Tone.Reverb({
    decay : 50 ,
    preDelay : 0.1
}).toDestination();
const mel_4 = new Tone.MonoSynth({
    volume : -16,
    envelope : {
        attack : 5 ,
        decay : 0.1 ,
        sustain : 0.6 ,
        release : 0.001
    }
}).connect(reverb);

const mel_5 = new Tone.Synth({
    volume : -8
}).toDestination();
const melAccomp_5 = new Tone.PolySynth({
    voice : Tone.Synth,
    volume : -8
}).toDestination();

//////////////////////////////////////////////////

const mel1 = new Tone.ToneEvent( function(time) {
    let offset = sec_2 + 2*trip_4;
    mel.triggerAttackRelease("D3", "4t", offset+time);
    mel.triggerAttackRelease("Ab3", "4t", offset+time + trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 2*trip_4);
    mel.triggerAttackRelease("F3", "4t", offset+time + 3*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 4*trip_4);
    mel.triggerAttackRelease("G3", "4t", offset+time + 5*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 6*trip_4);
    offset += 2*mesr;
    mel.triggerAttackRelease("D3", "4t", offset+time);
    mel.triggerAttackRelease("Ab3", "4t", offset+time + trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 2*trip_4);
    mel.triggerAttackRelease("F3", "4t", offset+time + 3*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 4*trip_4);
    mel.triggerAttackRelease("G3", "4t", offset+time + 5*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 6*trip_4);

    offset += 2*mesr;
    mel.triggerAttackRelease("D3", "4t", offset+time);
    mel.triggerAttackRelease("B3", "4t", offset+time + trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 2*trip_4);
    mel.triggerAttackRelease("F3", "4t", offset+time + 3*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 4*trip_4);
    mel.triggerAttackRelease("G3", "4t", offset+time + 5*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 6*trip_4);
    offset += 2*mesr;
    mel.triggerAttackRelease("D3", "4t", offset+time);
    mel.triggerAttackRelease("B3", "4t", offset+time + trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 2*trip_4);
    mel.triggerAttackRelease("F3", "4t", offset+time + 3*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 4*trip_4);
    mel.triggerAttackRelease("G3", "4t", offset+time + 5*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 6*trip_4);

    offset += 2*mesr;
    mel.triggerAttackRelease("D3", "4t", offset+time);
    mel.triggerAttackRelease("Ab3", "4t", offset+time + trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 2*trip_4);
    mel.triggerAttackRelease("F3", "4t", offset+time + 3*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 4*trip_4);
    mel.triggerAttackRelease("G3", "4t", offset+time + 5*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 6*trip_4);
    offset += 2*mesr;
    mel.triggerAttackRelease("D3", "4t", offset+time);
    mel.triggerAttackRelease("Ab3", "4t", offset+time + trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 2*trip_4);
    mel.triggerAttackRelease("F3", "4t", offset+time + 3*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 4*trip_4);
    mel.triggerAttackRelease("G3", "4t", offset+time + 5*trip_4);
    mel.triggerAttackRelease("D3", "4t", offset+time + 6*trip_4);

    offset += 2*mesr + trip_4;
    mel.triggerAttackRelease("B3", "2t", offset+time);
    mel.triggerAttackRelease("F3", "2t", offset+time + 2*trip_4);
    mel.triggerAttackRelease("G3", "2t", offset+time + 4*trip_4);
    offset += 2*mesr;
    mel.triggerAttackRelease("Ab3", "2t", offset+time);
    mel.triggerAttackRelease("F3", "2t", offset+time + 2*trip_4);
    mel.triggerAttackRelease("G3", "2t", offset+time + 4*trip_4);
});
mel1.set({
    "loop" : true,
    "loopEnd" : "16m"
})

const mel2 = new Tone.ToneEvent( function(time) {
    let offset = 0;
    mel_2.triggerAttackRelease("G4", mesr + 5*trip_4, time);
    offset += mesr + 5*trip_4;
    mel_2.triggerAttackRelease("F4", trip_4, offset+time);
    mel_2.triggerAttackRelease("Ab4", trip_4, offset+time + trip_4);
    mel_2.triggerAttackRelease("Eb4", trip_4, offset+time + 2*trip_4);
    mel_2.triggerAttackRelease("F4", trip_4, offset+time + 3*trip_4);
    mel_2.triggerAttackRelease("C4", trip_4, offset+time + 4*trip_4);

    offset += 5*trip_4;
    mel_2.triggerAttackRelease("Eb4", mesr + 5*trip_4, offset+time);
    offset += mesr + 5*trip_4;
    mel_2.triggerAttackRelease("D4", trip_4, offset+time);
    mel_2.triggerAttackRelease("F4", trip_4, offset+time + trip_4);
    mel_2.triggerAttackRelease("Eb4", trip_4, offset+time + 2*trip_4);
    mel_2.triggerAttackRelease("D4", trip_4, offset+time + 3*trip_4);
    mel_2.triggerAttackRelease("C4", trip_4, offset+time + 4*trip_4);

    offset += 5*trip_4;
    mel_2.triggerAttackRelease("D4", mesr, offset+time);
    offset += mesr;
    mel_2.triggerAttackRelease("Ab3", trip_4, offset+time);
    mel_2.triggerAttackRelease("C4", trip_4, offset+time + trip_4);
    offset += 2*trip_4;
    mel_2.triggerAttackRelease("D4", mesr, offset+time);
    mel_2.triggerAttackRelease("D4", 2*trip_4, offset+time + mesr);

    offset += mesr + 2*trip_4;
    mel_2.triggerAttackRelease("G3", 2*mesr + 4*trip_4, offset+time);
});
mel2.set({
    "loop" : true,
    "loopEnd" : 10*mesr + 4*trip_4
})

const mel3 = new Tone.ToneEvent( function(time) {
    mel_3.triggerAttackRelease("B2", "8n", time);
    mel_3.triggerAttackRelease("Eb3", "8n", time + sec_8);
    mel_3.triggerAttackRelease("G3", "8n", time + 2*sec_8);
    mel_3.triggerAttackRelease("C3", "8n", time + 3*sec_8);
    mel_3.triggerAttackRelease("E3", "8n", time + 4*sec_8);
    mel_3.triggerAttackRelease("Ab3", "8n", time + 5*sec_8);
    mel_3.triggerAttackRelease("G3", "8n", time + 6*sec_8);
    mel_3.triggerAttackRelease("D3", "8n", time + 7*sec_8);
});
mel3.set({
    "loop" : true,
    "loopEnd" : "1m"
})

const mel4 = new Tone.ToneEvent( function(time) {
    let offset = 0;
    mel_4.triggerAttackRelease("B3", 2*mesr, time);
    offset += 2*mesr;
    mel_4.triggerAttackRelease("D4", "2m", offset+time);
    mel_4.triggerAttackRelease("A3", "4m", offset+time + 2*mesr);
    mel_4.triggerAttackRelease("C4", "2m", offset+time + 6*mesr);
    mel_4.triggerAttackRelease("G4", 2*mesr, offset+time + 8*mesr);
    offset += 10*mesr;
    mel_4.triggerAttackRelease("D4", mesr + sec_2, offset+time);
    mel_4.triggerAttackRelease("Eb4", "4n", offset+time + mesr + sec_2);
    mel_4.triggerAttackRelease("C4", "4n", offset+time + mesr + 3*sec_4);
    offset += 2*mesr;
    mel_4.triggerAttackRelease("D4", "2m", offset+time);
});
mel4.set({
    "loop" : true,
    "loopEnd" : "16m"
})

const melBridge = new Tone.ToneEvent( function(time) {
    mel_5.triggerAttackRelease("F4", 2*trip_4, time);
    melAccomp_5.triggerAttackRelease(["Db4", "A3"], 2*trip_4, time, 0.3);

    mel_5.triggerAttackRelease("E4", 2*trip_4, time + 2*trip_4);
    melAccomp_5.triggerAttackRelease(["C4", "Ab3"], 2*trip_4, time + 2*trip_4, 0.3);

    mel_5.triggerAttackRelease("Eb4", 2*trip_4, time + 4*trip_4);
    melAccomp_5.triggerAttackRelease(["B3", "G3"], 2*trip_4, time + 4*trip_4, 0.3);
});

function getMel1 () { return mel1; }
function getMel2 () { return mel2; }
function getMel3 () { return mel3; }
function getMel4 () { return mel4; }
function getMelBridge () { return melBridge; }
export {
    getMel1,
    getMel2,
    getMel3,
    getMel4,
    getMelBridge
}