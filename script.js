// jshint esversion: 9

"use strict";

const something = {
	filename: 'immidiate',
	localname: 'something',
	soOn: 'someone',
		colors: {
			bg: 'red',
			border: 'yellow'
		}
};

// const {bg, border} = Object.colors;
// console.log(bg, border);

// delete Object.localname;
// console.log(Object);

console.log(Object.keys(something).length);



// бирдан n гача сонлар йигиндисини чикарамиз
function summary (n) { 	
let num = 0;
	for(let i = 1; i <= n; i++) {
		num = num + i;		 
	}
	console.log(num);
}

summary(10);

