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

function getMel1 () { return mel1; }
export {
    getMel1
}