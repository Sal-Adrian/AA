import { setClicked } from './song.js';
import { nextChord } from './utils.js';

const initSqlJs = window.initSqlJs;
const SQL = await initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`
});
let xhr = new XMLHttpRequest();
xhr.responseType = 'arraybuffer';

let noteI, curr;
function setCurr(c) {
    noteI = c[0]
    curr = c[1];
}

async function click() {
    setClicked(true);

    xhr.open('GET', '/Chord.db', true);
    xhr.onload = function(e) {
        let uInt8Array = new Uint8Array(this.response);
        let db = new SQL.Database(uInt8Array);
        let contents = db.exec(`SELECT Next, Type, D.Dist, n1, n2, n3, n4 FROM ChordProg C, DistTable D 
            WHERE Curr = ? AND D.Dist = 1 AND C.ProgID = D.ProgID 
            ORDER BY RANDOM() LIMIT 1`, [curr])[0].values[0];
        
        console.log(contents);
    };
    xhr.send();
}

export { 
    click,
    setCurr
};