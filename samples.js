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

let x = jPretty(a);

console.log(x);

console.log(a.batters.batter[1].type);
console.log(a.topping[2].type);

console.log(jPretty({"a":1, "b":2, "c":[1,2,3,4],"d":{"da":[1,2,3],"db":{ "dba": 123}}})) 