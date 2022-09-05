function rot13(str) {
	let codeArray = [];
	for (let i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 64 && str.charCodeAt(i) < 78) {
			codeArray.push(String.fromCharCode(str.charCodeAt(i) + 13));
		} else if (str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) {
			codeArray.push(String.fromCharCode(str.charCodeAt(i) - 13));
		} else {
			codeArray.push(String.fromCharCode(str.charCodeAt(i)));
		}
	}
	return codeArray.join("");
}

console.log(rot13("SERR PBQR PNZC"));
