const romanize = require('./roman');

var assert = require('chai').assert

test('1 is I', () => {
    assert.deepEqual(romanize(1),"I","1 is I");
});

test('2 is II', () => {
    assert.deepEqual(romanize(2),"II","2 is II");
});

test('4 is IV', () => {
    assert.deepEqual(romanize(4),"IV","4 is IV");
});

test('5 is V', () => {
    assert.deepEqual(romanize(5),"V","5 is V");
});

test('6 is VI', () => {
    assert.deepEqual(romanize(6),"VI","6 is VI");
});

test('7 is VII', () => {
    assert.deepEqual(romanize(7),"VII","7 is VII");
});

test('9 is IX', () => {
    assert.deepEqual(romanize(9),"IX","9 is IX");
});

test('10 is X', () => {
    assert.deepEqual(romanize(10),"X","10 is X");
});

test('11 is XI', () => {
    assert.deepEqual(romanize(11),"XI","11 is XI");
});

test('12 is XII', () => {
    assert.deepEqual(romanize(12),"XII","12 is XII");
});

test('14 is XIV', () => {
    assert.deepEqual(romanize(14),"XIV","14 is XIV");
});

test('15 is XV', () => {
    assert.deepEqual(romanize(15),"XV","15 is XV");
});

test('16 is XVI', () => {
    assert.deepEqual(romanize(16),"XVI","16 is XVI");
});

test('19 is XIX', () => {
    assert.deepEqual(romanize(19),"XIX","19 is XIX");
});

test('20 is XX', () => {
    assert.deepEqual(romanize(20),"XX","20 is XX");
});

test('21 is XXI', () => {
    assert.deepEqual(romanize(21),"XXI","21 is XXI");
});

test('24 is XXIV', () => {
    assert.deepEqual(romanize(24),"XXIV","24 is XXIV");
});

test('25 is XXV', () => {
    assert.deepEqual(romanize(25),"XXV","25 is XXV");
});

test('26 is XXVI', () => {
    assert.deepEqual(romanize(26),"XXVI","26 is XXVI");
});

test('29 is XXIX', () => {
    assert.deepEqual(romanize(29),"XXIX","29 is XXIX");
});

test('30 is XXX', () => {
    assert.deepEqual(romanize(30),"XXX","30 is XXX");
});

test('39 is XXXIX', () => {
    assert.deepEqual(romanize(39),"XXXIX","39 is XXXIX");
});

test('40 is XL', () => {
    assert.deepEqual(romanize(40),"XL","40 is XL");
});
test('45 is XLV', () => {
    assert.deepEqual(romanize(45),"XLV","45 is XLV");
});
test('49 is XLIX', () => {
    assert.deepEqual(romanize(49),"XLIX","49 is XLIX");
});
test('50 is L', () => {
    assert.deepEqual(romanize(50),"L","50 is L");
});