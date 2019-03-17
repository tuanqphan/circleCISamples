
const { sum, subtraction, getName } = require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('Adds 1 + 2 to equal 3', sumTest);

test('Subtract 10 from 100 equal 90', subtractionTest);

test('Input name should be the same as output', getNameTest)


function sumTest() {
    expect(sum(12, 2)).toBe(14);
}

function subtractionTest() {
    expect(subtraction(100, 10)).toBe(90);
}

function getNameTest() {
    expect(getName("Tuan")).toBe("Tuan");
}