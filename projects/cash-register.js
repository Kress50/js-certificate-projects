// a bit scuffed

function checkCashRegister(price, cash, cid) {
	let change = cash - price;
	let cidArr = cid.map((x) => x[1] * 100);
	let tableArr = [
		["PENNY", 1],
		["NICKEL", 5],
		["DIME", 10],
		["QUARTER", 25],
		["ONE", 100],
		["FIVE", 500],
		["TEN", 1000],
		["TWENTY", 2000],
		["ONE HUNDRED", 10000],
	];
	let changeArr = [];
	let changeVal = change * 100;
	for (let i = 8; i >= 0; i--) {
		while (changeVal - tableArr[i][1] >= 0 && cidArr[i] > 0) {
			changeVal -= tableArr[i][1];
			cidArr[i] -= tableArr[i][1];
			changeArr.push(tableArr[i][0]);
		}
	}
	let finalArr = [];
	for (let i of tableArr) {
		if (changeArr.filter((cash) => cash === i[0])) {
			let filter = changeArr.filter((cash) => cash === i[0]);
			if (filter.length > 0) {
				finalArr.push([i[0], (filter.length * i[1]) / 100]);
			}
		}
	}

	switch (true) {
		case change === cid.map((x) => x[1] * 1000).reduce((a, b) => a + b) / 1000:
			return { status: "CLOSED", change: cid };
		case finalArr.map((x) => x[1]).reduce((a, b) => a + b) < change:
			return { status: "INSUFFICIENT_FUNDS", change: [] };
		case changeArr.length > 0:
			return { status: "OPEN", change: finalArr.reverse() };
		default:
			return "Something went wrong!";
	}
}

console.log(
	checkCashRegister(3.26, 100, [
		["PENNY", 1.01],
		["NICKEL", 2.05],
		["DIME", 3.1],
		["QUARTER", 4.25],
		["ONE", 90],
		["FIVE", 55],
		["TEN", 20],
		["TWENTY", 60],
		["ONE HUNDRED", 100],
	])
);
