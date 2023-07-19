const functions = require('./functions')

test('"tesst" should give us 5', ()=>{
    expect(functions.stringLength('tesst')).toBe(5);
});

test('gsg', ()=> {
    expect(functions.checkLength('geg')).toBe(3);
});

test('asd should give dsa', ()=> {
    expect(functions.reverseString('asd')).toBe('dsa');
})