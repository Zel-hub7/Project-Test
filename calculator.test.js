const Calculator = require('./calculator');


const calc = new Calculator();
test('2+2 should be 4', ()=> {
    expect(calc.add(2,2)).toBe(4);
});


test('4*4 should be 16', ()=> {
    expect(calc.multiply(4,4)).toBe(16)
})