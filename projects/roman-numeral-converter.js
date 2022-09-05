//limited to 3,999 based on the notation given in this challenge, anything above would require a vinculum

function convertToRoman(num) {
	//checking for edge cases
	switch (true) {
		case num > 3999:
			return "This roman numeral converter only supports numbers up to 3,999.";
		case num <= 0:
			return "Please enter a positive number above 0";
		case num === undefined || num === null || isNaN(num) === true:
			return "Please enter a number";
	}
	let finalRoman = "";
	const numerals = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1,
	};
	for (let i of Object.keys(numerals)) {
		let q = Math.floor(num / numerals[i]);
		num -= q * numerals[i];
		finalRoman += i.repeat(q);
	}
	return finalRoman;
}

console.log(convertToRoman(399));
