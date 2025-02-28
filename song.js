let drumLoopPlaying = false;

const drums = new Tone.MembraneSynth().toDestination();
const snare = new Tone.NoiseSynth().toDestination();
const hiHat = new Tone.MetalSynth().toDestination();
Tone.Transport.bpm.value = 132;

const sec_8 = Tone.Time("8n").toSeconds();
const sec_4 = Tone.Time("4n").toSeconds();
const measure = Tone.Time("1m").toSeconds();

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


const accomp = new Tone.PolySynth(Tone.AMSynth).toDestination();
const singer = new Tone.MonoSynth().toDestination();

// Currently programed for "All The Things You Are"
export async function playSong() {
    console.log("Starting Song.")
    
    let now = Tone.now();
    
    accomp.triggerAttackRelease(["F3, Ab3, C4, Eb4"], "1m");
    singer.triggerAttackRelease("Ab4", "1m");
    
    accomp.triggerAttackRelease(["F3, Ab3, Bb3, Db4"], "1m", measure + now);
    singer.triggerAttackRelease("Db5", 3*sec_4, measure + now);
    singer.triggerAttackRelease("Ab4", "4n", measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Eb3, G3, Bb3, Db4"], "1m", 2*measure + now);
    singer.triggerAttackRelease("G4", "4n", 2*measure + now);
    singer.triggerAttackRelease("G4", "4n", 2*measure + sec_4 + now);
    singer.triggerAttackRelease("G4", "4n", 2*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("G4", "4n", 2*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Eb3, G3, Ab3, C4"], "1m", 3*measure + now);
    singer.triggerAttackRelease("G4", "4n", 3*measure + now);
    singer.triggerAttackRelease("C5", "2n", 3*measure + sec_4 + now);
    singer.triggerAttackRelease("G4", "4n", 3*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Db3, F3, Ab3, C4"], "1m", 4*measure + now);
    singer.triggerAttackRelease("F4", "4n", 4*measure + now);
    singer.triggerAttackRelease("F4", "4n", 4*measure + 1*sec_4 + now);
    singer.triggerAttackRelease("F4", "4n", 4*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("F4", "4n", 4*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Db3, E3, Ab3, B3"], "2n", 5*measure + now);
    singer.triggerAttackRelease("F4", "4n", 5*measure + now);
    singer.triggerAttackRelease("B4", "2n", 5*measure + sec_4 + now);
    accomp.triggerAttackRelease(["D3, F3, G3, B3"], "2n", 5*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("F4", "4n", 5*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["C3, E3, G3, B3"], "2m", 6*measure + now);
    singer.triggerAttackRelease("E4", "2m", 6*measure + now);

    accomp.triggerAttackRelease(["C3, Eb3, G3, Bb3"], "1m", 8*measure + now);
    singer.triggerAttackRelease("Eb4", "1m", 8*measure + now);

    accomp.triggerAttackRelease(["C3, Eb3, F3, Ab3"], "1m", 9*measure + now);
    singer.triggerAttackRelease("Ab4", 3*sec_4, 9*measure + now);
    singer.triggerAttackRelease("Eb4", "4n", 9*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Bb2, D3, F3, Ab3"], "1m", 10*measure + now);
    singer.triggerAttackRelease("D4", "4n", 10*measure + now);
    singer.triggerAttackRelease("D4", "4n", 10*measure + 1*sec_4 + now);
    singer.triggerAttackRelease("D4", "4n", 10*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("D4", "4n", 10*measure + 3*sec_4 + now);
    
    accomp.triggerAttackRelease(["Bb2, D3, Eb3, G3"], "1m", 11*measure + now);
    singer.triggerAttackRelease("D4", "4n", 11*measure + now);
    singer.triggerAttackRelease("G4", "2n", 11*measure + 1*sec_4 + now);
    singer.triggerAttackRelease("D4", "4n", 11*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Ab2, C3, Eb3, G3"], "1m", 12*measure + now);
    singer.triggerAttackRelease("C4", "4n", 12*measure + now);
    singer.triggerAttackRelease("C4", "4n", 12*measure + 1*sec_4 + now);
    singer.triggerAttackRelease("C4", "4n", 12*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("C4", "4n", 12*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["Ab2, B2, Eb3, Gb3"], "2n", 13*measure + now);
    singer.triggerAttackRelease("C4", "4n", 13*measure + now);
    singer.triggerAttackRelease("D4", "8n", 13*measure + sec_4 + now);
    singer.triggerAttackRelease("Eb4", "8n", 13*measure + sec_4 + sec_8 + now);
    accomp.triggerAttackRelease(["A2, C3, D3, Gb3"], "2n", 13*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("D4", "4n", 13*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("C4", "4n", 13*measure + 3*sec_4 + now);

    accomp.triggerAttackRelease(["G2, B2, D3, Gb3"], "2m", 14*measure + now);
    singer.triggerAttackRelease("B3", measure+sec_4, 14*measure + now);

    singer.triggerAttackRelease("D4", "4n", 15*measure + sec_4 + now);
    singer.triggerAttackRelease("G4", "4n", 15*measure + 2*sec_4 + now);
    singer.triggerAttackRelease("D5", "4n", 15*measure + 3*sec_4 + now);

    // accomp.triggerAttackRelease(["Ab2, B2, Eb3, Gb3"], "1m", 16*measure + now);
    // accomp.triggerAttackRelease(["A2, C3, D3, Gb3"], "1m", 17*measure + now);

    // accomp.triggerAttackRelease(["G2, B2, D3, Gb3"], "2m", 18*measure + now);
}

export function testMessage() {
    console.log("Ok");
}