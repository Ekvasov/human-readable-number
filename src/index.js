let result = '';

module.exports = function toReadable (number) {
  result = '';
  return (number === 0 ? "zero" :
          number < 10 ? oneToNine(number) :
          number < 20 ? tenToNineteen(number) :
          number < 100 ? twentyToNintyNine(number) : oneHundToNineHundNintyNine(number));
}


const oneToNine = (unit) => {
  unit === 1 ? result += 'one' :
  unit === 2 ? result += 'two' :
  unit === 3 ? result += 'three' :
  unit === 4 ? result += 'four' :
  unit === 5 ? result += 'five' :
  unit === 6 ? result += 'six' :
  unit === 7 ? result += 'seven' :
  unit === 8 ? result += 'eight' :
  unit === 9 ? result += 'nine' : '';
  return result;
}


const tenToNineteen = (dozens) => {
  dozens === 10 ? result += 'ten' :
  dozens === 11 ? result += 'eleven' :
  dozens === 12 ? result += 'twelve' :
  dozens === 13 ? result += 'thirteen' :
  dozens === 14 ? result += 'fourteen' :
  dozens === 15 ? result += 'fifteen' :
  dozens === 16 ? result += 'sixteen' :
  dozens === 17 ? result += 'seventeen' :
  dozens === 18 ? result += 'eighteen' : result += 'nineteen'
  return result;
}


const twentyToNintyNine = (numberTens) => {
  String(numberTens)[0] === '2' ? result += 'twenty' :
  String(numberTens)[0] === '3' ? result += 'thirty' :
  String(numberTens)[0] === '4' ? result += 'forty' :
  String(numberTens)[0] === '5' ? result += 'fifty' :
  String(numberTens)[0] === '6' ? result += 'sixty' :
  String(numberTens)[0] === '7' ? result += 'seventy' :
  String(numberTens)[0] === '8' ? result += 'eighty' : result += 'ninety';
  String(numberTens)[1] !== '0' ? result += ' ' : '';
  String(numberTens)[1] !== '0' ? oneToNine(Number(String(numberTens)[1])) : '';
  return result;
}


const oneHundToNineHundNintyNine = (numberHundreds) => {
  String(numberHundreds)[0] === '1' ? result += 'one hundred' :
  String(numberHundreds)[0] === '2' ? result += 'two hundred' :
  String(numberHundreds)[0] === '3' ? result += 'three hundred' :
  String(numberHundreds)[0] === '4' ? result += 'four hundred' :
  String(numberHundreds)[0] === '5' ? result += 'five hundred' :
  String(numberHundreds)[0] === '6' ? result += 'six hundred' :
  String(numberHundreds)[0] === '7' ? result += 'seven hundred' :
  String(numberHundreds)[0] === '8' ? result += 'eight hundred' : result += 'nine hundred';
  String(numberHundreds)[1] + String(numberHundreds)[2] !== '00' ? result += ' ' : '';
  String(numberHundreds)[1] === '0' ? oneToNine(Number(String(numberHundreds)[2])) :
  String(numberHundreds)[1] === '1' ? tenToNineteen(Number(String(numberHundreds)[1] + String(numberHundreds)[2])) : twentyToNintyNine(Number(String(numberHundreds)[1] + String(numberHundreds)[2]));
  return result;
}
