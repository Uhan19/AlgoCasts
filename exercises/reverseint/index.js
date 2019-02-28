// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*
O - number
I - number
C - none
E - negative number
*/

// function reverseInt(n) {
//     let strNum = n + "";
//     let reverseNum
//     if(n >= 0) {
//         reverseNum = strNum.split("").reduce((num, char) => char + num, "");
//     }
//     if(n < 0) {
//         reverseNum = strNum.split("");
//         reverseNum.shift()
//         reverseNum.push("-")
//         reverseNum = reverseNum.reduce((num, char) => char + num, "")
//     }
//     return reverseNum * 1;
// }

function reverseInt(n) {
    const reversed = n
        .toString()
        .split('')
        .reverse()
        .join('')

    return parseInt(reversed) * Math.sign(n);
  }

module.exports = reverseInt;
