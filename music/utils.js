const TONES = ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];
const INTERVALS = ["b.II", "II", "b.III", "III", "IV", "b.V", "V", "b.VI", "VI", "b.VII", "VII" ];
const CHORD = [4, 3, 4];

function nextChord(curr, next, type, octave) {
    let nextIndex = TONES.findIndex((x) => { return x === curr } );
    nextIndex += INTERVALS.findIndex((x) => { return x === next } ) + 1;

    let chrd = [TONES[nextIndex % 12]];

    nextIndex += CHORD[0];
    if (type === "m7" || type === "07" || type === "o7") nextIndex -= 1;
    chrd.push(TONES[nextIndex % 12]);

    nextIndex += CHORD[1];
    if (type === "m7") nextIndex += 1;
    chrd.push(TONES[nextIndex % 12]);

    nextIndex += CHORD[2];
    if (type === "7" || type === "m7" || type === "o7") nextIndex -= 1;
    chrd.push(TONES[nextIndex % 12]);

    for (let i = 0; i < 4; i++) {
        chrd[i] += octave;
    }

    return chrd;
}

export { nextChord };