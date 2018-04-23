let jPretty = require("./jPretty");
//sameples

let a = {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"ppu": 0.55,
	"batters":
		{
			"batter":
				[
					{ "id": "1001", "type": "Regular" },
					{ "id": "1002", "type": "Chocolate" },
				]
		},
	"topping":
		[
			{ "id": "5001", "type": "None" },
			{ "id": "5002", "type": "Glazed" },
			{ "id": "5005", "type": "Sugar" },
		]
};

let xx = {"time":{"updated":"Apr 23, 2018 19:46:00 UTC","updatedISO":"2018-04-23T19:46:00+00:00","updateduk":"Apr 23, 2018 at 20:46 BST"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org","bpi":{"USD":{"code":"USD","rate":"8,871.1675","description":"United States Dollar","rate_float":8871.1675},"GBP":{"code":"GBP","rate":"6,365.8079","description":"British Pound Sterling","rate_float":6365.8079}}};

let x = jPretty(a);

console.log(x);

console.log(a.batters.batter[1].type);
console.log(a.topping[2].type);

//valid
 console.log(jPretty('{ "a": 1, "b": 2}')); 
console.log(jPretty({ a: 1, b: 2})); 
console.log(jPretty({ "a": 1, "b": 2})); 
console.log(jPretty({ 'a': 1, 'b': 2})); 
 
//invalid
console.log(jPretty("{ 'a': 1, 'b': 2}")); 
console.log(jPretty("{ a: 1, b: 2}"));

console.log(jPretty(xx));

console.log(jPretty("asfdasdf"));
