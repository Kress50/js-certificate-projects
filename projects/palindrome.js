function palindrome(str) {
	let originalStringTest = str
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]/g, "");
	let currentString = originalStringTest.split("").reverse().join("");
	if (currentString === originalStringTest) return true;
	else return false;
}

console.log(palindrome("eye")); // true
console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("not a palindrome")); // false
console.log(palindrome("A man, a plan, a canal. Panama")); //true
console.log(palindrome("My age is 0, 0 si ega ym.")); //true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /- :) 0-0")); // true
