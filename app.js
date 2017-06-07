let convert = {};

convert.cToF = function(celsius) {
  if(celsius === undefined) return undefined;
  return celsius * 9 / 5 + 32;
}

convert.fToC = function(fahrenheit) {
  if(fahrenheit === undefined) return undefined;
  return (fahrenheit - 32) * 5 / 9;
}

module.exports = convert;
