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




const aj = jPretty(a);
const bj = jPretty(b);
const cj = jPretty(c);
const dj = jPretty(d);
const ej = jPretty(e);


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
  
});