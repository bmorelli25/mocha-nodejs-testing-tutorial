let convert = {};

convert.cToF = function(celsius) {
  if(celsius === undefined) return undefined;
  return celsius * 9 / 5 + 32;
}

convert.fToC = function(fahrenheit) {
  if(!fahrenheit) return undefined;
  return (fahrenheit - 32) * 5 / 9;
}

module.exports = convert;

console.log(convert.cToF(0));
console.log(convert.fToC(45));
console.log(convert.fToC());
