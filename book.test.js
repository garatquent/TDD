const [Book,Cart] = require('./book');

var assert = require('chai').assert

test('0 is 0', () => {
    let c = new Cart()
    assert.deepEqual(c.price(),0,"0 is 0");
});

test('1 is 8', () => {
    let c = new Cart()
    c.books.push(new Book("Don Quichotte"))
    assert.deepEqual(c.price(),8,"1 is 8");
});

test('2 same is 16', () => {
    let c = new Cart()
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Don Quichotte"))
    assert.deepEqual(c.price(),16,"2 same is 16");
});

test('2 different is 15.2', () => {
    let c = new Cart()
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    assert.deepEqual(c.price(),15.2,"2 different is 15.2");
});

test('3 and 2 different is 23.2', () => {
    let c = new Cart()
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Don Quichotte"))
    assert.deepEqual(c.price(),23.2,"3 and 2 different is 23.2");
});

test('3 different is 21.6', () => {
    let c = new Cart()
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Book of life"))
    assert.deepEqual(c.price(),21.6,"3 different is 21.6");
});

test('3 different and 2 different is 36.8', () => {
    let c = new Cart()
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Book of life"))
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    assert.deepEqual(c.price(),36.8,"3 different and 2 different is 36.8");
});

test('3,2,1 different is 44.8', () => {
    let c = new Cart()
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Book of life"))
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Don Quichotte"))
    assert.deepEqual(c.price(),44.8,"3,2,1 different is 44.8");
});

test('4 different is 25.6', () => {
    let c = new Cart()
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Book of life"))
    c.books.push(new Book("The lil book of semaphores"))
    assert.deepEqual(c.price(),25.6,"4 different is 25.6");
});

test('5 different is 30', () => {
    let c = new Cart()
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Book of life"))
    c.books.push(new Book("The lil book of semaphores"))
    c.books.push(new Book("National Geographic"))
    assert.deepEqual(c.price(),30,"5 different is 30");
});

test('5,3 different is 51.2', () => {
    let c = new Cart()
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Book of life"))
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Book of life"))
    c.books.push(new Book("The lil book of semaphores"))
    c.books.push(new Book("National Geographic"))
    assert.deepEqual(c.price(),51.2,"5,3 different is 51.2");
});

test('5,3,3 different is 72.8', () => {
    let c = new Cart()
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Book of life"))
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Book of life"))
    c.books.push(new Book("Don Quichotte"))
    c.books.push(new Book("Animal Farm"))
    c.books.push(new Book("Book of life"))
    c.books.push(new Book("The lil book of semaphores"))
    c.books.push(new Book("National Geographic"))
    assert.deepEqual(c.price(),72.8,"5,3,3 different is 72.8");
});