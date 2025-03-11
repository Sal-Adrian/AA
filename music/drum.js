import { getBPM } from "./song.js";

Tone.Transport.bpm.value = getBPM();
const trip_4 = Tone.Time("4t").toSeconds();
const sec_16 = Tone.Time("16n").toSeconds();
const sec_8 = Tone.Time("8n").toSeconds();
const sec_4 = Tone.Time("4n").toSeconds();
const sec_2 = Tone.Time("2n").toSeconds();
const mesr = Tone.Time("1m").toSeconds();

const bassDrum = new Tone.MembraneSynth({
    volume : 2,
    envelope : {
        attack : 0.5 ,
        decay : 0.1 ,
        sustain : 0.05 ,
        release : 1.4 ,
        attackCurve : "exponential"
    }
}).toDestination();
const snare = new Tone.NoiseSynth({
    volume : -8,
    noise : {type:"pink"},
    envelope : {decay: 0.65}
}).toDestination();
const hiHat = new Tone.NoiseSynth({
    volume : -12,
    noise : {type:"white"},
    envelope : {decay: 0.2}
}).toDestination();

const drum1 = new Tone.ToneEvent( function(time) {
    let offset = 0;
    snare.triggerAttackRelease("4t", time, 0.5);
    hiHat.triggerAttackRelease("4t", time, 0.75);
    hiHat.triggerAttackRelease("4t", time + trip_4, 0.25);
    hiHat.triggerAttackRelease("4t", time + 2*trip_4, 0.25);
    hiHat.triggerAttackRelease("4t", time + 3*trip_4, 0.75);
    hiHat.triggerAttackRelease("4t", time + 4*trip_4, 0.25);
    hiHat.triggerAttackRelease("4t", time + 5*trip_4, 0.25);
    hiHat.triggerAttackRelease("4t", time + 6*trip_4, 0.75);
    hiHat.triggerAttackRelease("4t", time + 7*trip_4, 0.25);

    offset = mesr + 2*trip_4;
    snare.triggerAttackRelease("4t", offset+time);
    hiHat.triggerAttackRelease("4t", offset+time, 0.75);
    hiHat.triggerAttackRelease("4t", offset+time + trip_4, 0.25);
    hiHat.triggerAttackRelease("4t", offset+time + 2*trip_4, 0.25);
    hiHat.triggerAttackRelease("4t", offset+time + 3*trip_4, 0.75);
    hiHat.triggerAttackRelease("4t", offset+time + 4*trip_4, 0.25);
    hiHat.triggerAttackRelease("4t", offset+time + 5*trip_4, 0.25);
    hiHat.triggerAttackRelease("4t", offset+time + 6*trip_4, 0.75);
    hiHat.triggerAttackRelease("4t", offset+time + 7*trip_4, 0.25);
});
drum1.set({
    "loop" : true,
    "loopEnd" : 2*mesr + sec_2 + trip_4
})

const drum2 = new Tone.ToneEvent( function(time) {
    bassDrum.triggerAttackRelease("G1", "8n", time);
    snare.triggerAttackRelease("8n", time + 3*sec_4, 0.65);
    snare.triggerAttackRelease("8n", time + mesr, 0.85);
});
drum2.set({
    "loop" : true,
    "loopEnd" : "2m"
})

function getDrum1 () { return drum1; }
function getDrum2 () { return drum2; }
export {
    getDrum1,
    getDrum2
}