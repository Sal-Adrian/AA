import {
    setClicked
} from './song.js';

const initSqlJs = window.initSqlJs;
const SQL = await initSqlJs({
    locateFile: file => `https://sql.js.org/dist/${file}`
});

let xhr = new XMLHttpRequest();
xhr.open('GET', '/Chord.db', true);
xhr.responseType = 'arraybuffer';

xhr.onload = function(e) {
    let uInt8Array = new Uint8Array(this.response);
    let db = new SQL.Database(uInt8Array);
    let contents = db.exec("SELECT * FROM ChordProg");
    
    console.log(contents)
};
xhr.send();

async function click(Curr) {
    setClicked(true);
}

export { click };