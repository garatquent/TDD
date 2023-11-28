const [Orientation,Ordre,move] = require('./mars-rover')

var assert = require('chai').assert

test('Avancer from 0,0 N', () => {
    assert.deepEqual(move(0,0,Orientation.N,[Ordre.A]),[0,1,Orientation.N]);
});

test('Avancer from 0,0 E', () => {
    assert.deepEqual(move(0,0,Orientation.E,[Ordre.A]),[1,0,Orientation.E]);
});

test('Avancer from 10,0 E', () => {
    assert.deepEqual(move(10,0,Orientation.E,[Ordre.A]),[11,0,Orientation.E]);
});

test('Avancer from 0,0 S', () => {
    assert.deepEqual(move(0,0,Orientation.S,[Ordre.A]),[0,99,Orientation.S]);
});

test('Avancer from 0,0 O', () => {
    assert.deepEqual(move(0,0,Orientation.O,[Ordre.A]),[99,0,Orientation.O]);
});

test('Avancer from 0,99 N', () => {
    assert.deepEqual(move(0,99,Orientation.N,[Ordre.A]),[0,0,Orientation.N]);
});

test('Gauche from 0,0 N', () => {
    assert.deepEqual(move(0,0,Orientation.N,[Ordre.G]),[0,0,Orientation.O]);
});

test('Gauche from 0,0 E', () => {
    assert.deepEqual(move(0,0,Orientation.E,[Ordre.G]),[0,0,Orientation.N]);
});

test('Droite from 0,0 N', () => {
    assert.deepEqual(move(0,0,Orientation.N,[Ordre.D]),[0,0,Orientation.E]);
});

test('Droite from 0,0 E', () => {
    assert.deepEqual(move(0,0,Orientation.E,[Ordre.D]),[0,0,Orientation.S]);
});