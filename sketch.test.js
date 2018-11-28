
const {sum, subtraction }= require('./sketch');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('adds 1 + 2 to equal 3', sumTest);

test('subtract 10 from 100 equal 90', subtractionTest);


function sumTest() {
    expect(sum(12, 2)).toBe(14);
}

function subtractionTest() {
    expect(subtractionTest(100, 10)).toBe(90);
}