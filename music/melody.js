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


function getMel1 () { return mel1; }
function getMel2 () { return mel2; }
export {
    getMel1,
    getMel2
}