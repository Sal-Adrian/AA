let drumLoopPlaying = false;

const drums = new Tone.MembraneSynth().toDestination();
Tone.Transport.bpm.value = 120;

Tone.Transport.scheduleRepeat((time) => {
    const now = time;
    drums.triggerAttackRelease("C1", 0.5, now);
    drums.triggerAttackRelease("C5", 0.5, now + 0.5, 0.7);
    drums.triggerAttackRelease("C3", 0.5, now + 1);
    drums.triggerAttackRelease("C5", 0.5, now + 1.5, 0.7);
}, 2);

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