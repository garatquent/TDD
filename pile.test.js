const Pile = require('./pile');

var assert = require('chai').assert

test('Push 2 to stack', () => {
    var p = new Pile();

    p.push(2)

    assert.deepEqual(p.stack,[2],"p.push(2) == [2]");
});

test('Push 4,2 to stack', () => {
    var p = new Pile();

    p.push(4)
    p.push(2)

    assert.deepEqual(p.stack,[4,2],"p.push(2) == [2]");
});

test('pop 4,2 == 2', () => {
    var p = new Pile();

    p.push(4)
    p.push(2)

    assert.deepEqual(p.pop(),2,"p.pop() == 2");
});
