const convertToCelsius = function(temp) {
  temp = (temp - 32) * (5 / 9);
  //console.log(temp);
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  temp = (temp * (9/5) + 32);
  //console.log(temp);
  return Math.round(temp * 10) / 10;
};

convertToCelsius(32);
convertToFahrenheit(0);
convertToCelsius(50.55);
convertToFahrenheit(100);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
