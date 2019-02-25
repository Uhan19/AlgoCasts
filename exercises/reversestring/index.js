// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
O - string
I - string
C - none
E - none
*/
function reverse(str) {
	// native methods
		// using array.reverse()
		// return str.split('').reverse().join('')
	// not using .reverse();
		// reverse loop through the str and concat it to new string
	let reversedStr = '';
		// old way of writing a for loop
		// for (let i = str.length - 1; i >= 0; i--) {
		// 	reversedStr = reversedStr + str[i];
		// }
	// ES6 for loop (not as flexible as old way)
	for (let char of str) {
		reversedStr = char + reversedStr;
	}
	return reversedStr;

	// reduce solution
	// return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
