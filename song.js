let drumLoopPlaying = false;

const drums = new Tone.MembraneSynth().toDestination();
const snare = new Tone.NoiseSynth().toDestination();
const hiHat = new Tone.MetalSynth().toDestination();
Tone.Transport.bpm.value = 240;

const sec_4 = Tone.Time("4n").toSeconds();

Tone.Transport.scheduleRepeat((time) => {
    const now = time;
    drums.triggerAttackRelease("C1", "4n", now);
    hiHat.triggerAttackRelease("C3", "8n", now + sec_4, 0.1);
    snare.triggerAttackRelease("4n", now + (2*sec_4));
    hiHat.triggerAttackRelease("C3", "8n", now + (3*sec_4), 0.1);
}, "1m");

export function drumLoop() {
    if (drumLoopPlaying) {
        console.log("Stoping Drum Loop.")
        drumLoopPlaying = false;
        Tone.Transport.stop();
        return;
    }
    console.log("Starting Drum Loop.")
    drumLoopPlaying = true;
    Tone.Transport.start();
}


export function testMessage() {
    console.log("Ok");
}