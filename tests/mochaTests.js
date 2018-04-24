const chai = require('chai');
const jPretty = require('../jPretty.js');

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

let b = {
a:1,
b:2,
c:
  {
    ca: 1,
    cb: 2,
    cc: {
      cca: "a",
      ccb: "b",
      ccc: [1,2,3,4,5]
    }
  },
d: "end"
};

let c = '{"a" : 1, "b" : 2}';

let d = "{a4:1, b4:2}";
let e = "{'a':1, 'b':2}";

let f = '{"time":{"updated":"Apr 23, 2018 21:19:00 UTC","updatedISO":"2018-04-23T21:19:00+00:00","updateduk":"Apr 23, 2018 at 22:19 BST"},"disclaimer":"This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org","bpi":{"USD":{"code":"USD","rate":"8,925.0138","description":"United States Dollar","rate_float":8925.0138},"GBP":{"code":"GBP","rate":"6,402.3854","description":"British Pound Sterling","rate_float":6402.3854}}}';

let g = new Date();


const aj = jPretty(a);
const bj = jPretty(b);
const cj = jPretty(c);
const dj = jPretty(d);
const ej = jPretty(e);
const fj = jPretty(f);
const gj = jPretty(g);

console.log(`TEST 1-
${aj}`);
console.log(`TEST 2-
${bj}`);
console.log(`TEST 3-
${cj}`);
console.log(`TEST 4-
${dj}`);
console.log(`TEST 5-
${ej}`);
console.log(`TEST 6-
${fj}`);
console.log(`TEST 7-
${gj}`);





describe('jPretty - json', () => {
  it("should return json object as string", (done) => {
        chai.expect(aj).to.equal('{}.id = 0001\n{}.type = donut\n{}.name = Cake\n{}.ppu = 0.55\n{}.batters.batter[0].id = 1001\n{}.batters.batter[0].type = Regular\n{}.batters.batter[1].id = 1002\n{}.batters.batter[1].type = Chocolate\n{}.topping[0].id = 5001\n{}.topping[0].type = None\n{}.topping[1].id = 5002\n{}.topping[1].type = Glazed\n{}.topping[2].id = 5005\n{}.topping[2].type = Sugar\n');
        done();
      });

  it("should return another json object as string", (done) => {
    chai.expect(bj).to.equal('{}.a = 1\n{}.b = 2\n{}.c.ca = 1\n{}.c.cb = 2\n{}.c.cc.cca = a\n{}.c.cc.ccb = b\n{}.c.cc.ccc[0] = 1\n{}.c.cc.ccc[1] = 2\n{}.c.cc.ccc[2] = 3\n{}.c.cc.ccc[3] = 4\n{}.c.cc.ccc[4] = 5\n{}.d = end\n');
    done();
  });

  it("convert a string into json", (done) => {
    chai.expect(cj).to.equal('{}.a = 1\n{}.b = 2\n');
    done();
  });

  it("convert a double quote string into json", (done) => {
    chai.expect(dj).to.equal('{}.a4 = 1\n{}.b4 = 2\n');
    done();
  });

  it("convert a double quote with single quotes string into json", (done) => {
    chai.expect(ej).to.equal('{}.a = 1\n{}.b = 2\n');
    done();
  });
  
  it("complex json", (done) => {
    chai.expect(fj).to.equal('{}.time.updated = Apr23,201821:19:00UTC\n{}.time.updatedISO = 2018-04-23T21:19:00+00:00\n{}.time.updateduk = Apr23,2018at22:19BST\n{}.disclaimer = ThisdatawasproducedfromtheCoinDeskBitcoinPriceIndex(USD).Non-USDcurrencydataconvertedusinghourlyconversionratefromopenexchangerates.org\n{}.bpi.USD.code = USD\n{}.bpi.USD.rate = 8,925.0138\n{}.bpi.USD.description = UnitedStatesDollar\n{}.bpi.USD.rate_float = 8925.0138\n{}.bpi.GBP.code = GBP\n{}.bpi.GBP.rate = 6,402.3854\n{}.bpi.GBP.description = BritishPoundSterling\n{}.bpi.GBP.rate_float = 6402.3854\n');
    done();
  });

  it("non json object", (done) => {
    chai.expect(gj).to.be.an('error');
    //chai.expect(gj).to.throw(Error);
    //chai.expect(gj).to.include('Error: jpretty: input is not recognised json:');
    done();
  });


  

});