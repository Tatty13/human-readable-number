module.exports = function toReadable (number) {
  let numArr = number.toString(10).split('');
  let space = ' ';
  let numsUpTo19 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero';
  } else if (number > 0 && number < 20) {
    return numsUpTo19[number]
  } else if (number >= 20 && number < 100) {
    if (number % 10 == 0) {
      return tens[numArr[0]]
    } else {
      return tens[numArr[0]] + space + numsUpTo19[numArr[1]];
    }
  } else if (number >= 100 && number < 1000) {
    if (number % 100 == 0) {
      return numsUpTo19[numArr[0]] + ' hundred';
    } else if (number % 10 == 0) {
      return numsUpTo19[numArr[0]] + ' hundred ' + tens[numArr[1]];
    } else if (numArr[1] == 1) {
      let lastTwoNums = numArr[1] + numArr[2];
      return numsUpTo19[numArr[0]] + ' hundred ' + numsUpTo19[lastTwoNums];
    } else if (numArr[1] == 0) {
      return numsUpTo19[numArr[0]] + ' hundred ' + numsUpTo19[numArr[2]]
    } else {
      return numsUpTo19[numArr[0]] + ' hundred ' + tens[numArr[1]] + space + numsUpTo19[numArr[2]]
    }
  } 

}
