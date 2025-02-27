export function testMessage() {
    console.log("Ok");
}

export function playMet() {
    const synth = new Tone.Synth().toDestination();

    synth.triggerAttackRelease("C4", "8n");
}