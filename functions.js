const functions = {
  stringLength: (str) => str.length,
  checkLength: (strin) => {
    if(strin.length > 0 && strin.length < 10) {
        return strin.length;
    } else {
        return console.error('error');
    }
  },

  reverseString: (string) => {
    return string.split('').reverse().join('');
  }
}
module.exports = functions;