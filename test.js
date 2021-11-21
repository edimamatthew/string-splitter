import test from 'ava';
import splitString from './index.js';

test("main", t => {
    let ret = splitString("ABBCCDDEEBBAABB", "BB");
    t.deepEqual(ret,["A", "BB", "CCDDEE", "BB", "AA", "BB"]);
});


test("empty input should return empty array", t=>{
    let ret = splitString("", "BB");
    t.deepEqual(ret,[]);
});

test("there are no separator", t => {
    let ret = splitString("ASDFSDFWERT", "BB");
    t.deepEqual(ret,["ASDFSDFWERT"]);
});

test("where the input does not end with the separator", t => {
    let ret = splitString("ASBBDFBBSDFBBWERT", "BB");
    t.deepEqual(ret,["AS", "BB", "DF", "BB", "SDF", "BB", "WERT"]);
});

test("where the separator has more of the same character", t => {
    let ret = splitString("ASBBBDFBBSDFBBWERT", "BB");
    t.deepEqual(ret,["AS", "BB", "BDF", "BB", "SDF", "BB", "WERT"]);
});

test("where the separator has double of the same character", t => {
    let ret = splitString("ABBBBDF", "BB");
    t.deepEqual(ret,["A", "BB", "BB", "DF"]);
});

test("where the input and separator are number-strings", t => {
    let ret = splitString("004002390045600", "00");
    t.deepEqual(ret,["00", "4", "00", "239", "00", "456", "00"]);
});


test("throw error when invalid input is supplied", t => {
    t.throws(() => splitString(123, "asdf"));
})