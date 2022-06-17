// jshint esversion: 9
"use strict";

// Fibonacci 
function fibonacciTask(n) {
	let output = [];
	if(typeof(n) !== 'number' || !Number.isInteger(n) || n === 0) {
		return '';
	}
	if(n === 1) {
		output = [0];
	} else if (n === 2) {
		output = [0, 1];
	} else {
		output = [0, 1];
		for(let i = 2; i < n; i++) {
			output.push(output[output.length - 2] + output[output.length - 1]);
		}
	}

	return output.join(' ');
}

output = fibonacciTask(100);
console.log(output);

  