# jpretty

[![Coverage Status](https://coveralls.io/repos/github/frankc60/jpretty/badge.svg)](https://coveralls.io/github/frankc60/jpretty)
[![Build Status](https://travis-ci.org/frankc60/jpretty.svg?branch=master)](https://travis-ci.org/frankc60/jpretty)
[![Join the chat at https://gitter.im/jprettyMod/Lobby](https://badges.gitter.im/jprettyMod/Lobby.svg)](https://gitter.im/jprettyMod/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Make `json` more Pretty. Transform `json` into an easy to read layout, with **dot delimiters** and **key = value** output.

## What is json ?
JSON stands for **J**ava**S**cript **O**bject **N**otion, and is a syntax for storing and exchanging data written in text, that can be converted into JavaScript object notation, making it easy to work with.
JSON is used alot in APIs: sending and retrieving data across the Web.

For more info check out [w3schools.com](https://www.w3schools.com/js/js_json_intro.asp).

## jpretty examples

```js
let jPretty = require("jpretty");

let json1 = {
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

let pJson1 = jPretty(json1);

console.log(pJson1);
```

```sh
{}.id = 0001
{}.type = donut
{}.name = Cake
{}.ppu = 0.55
{}.batters.batter[0].id = 1001
{}.batters.batter[0].type = Regular
{}.batters.batter[1].id = 1002
{}.batters.batter[1].type = Chocolate
{}.topping[0].id = 5001
{}.topping[0].type = None
{}.topping[1].id = 5002
{}.topping[1].type = Glazed
{}.topping[2].id = 5005
{}.topping[2].type = Sugar
```

```js
console.log(json1.batters.batter[1].type); //Chocolate
console.log(json1.topping[2].type); //Sugar

```

### Another example

```js
let json2 = {"a":1, "b":2, "c":[1,2,3,4],"d":{"da":[1,2,3,{"daa": 4, "dab":5}],"db":{ "dba": 123}}};
console.log(jPretty(json2));
```

```sh
{}.a = 1
{}.b = 2
{}.c[0] = 1
{}.c[1] = 2
{}.c[2] = 3
{}.c[3] = 4
{}.d.da[0] = 1
{}.d.da[1] = 2
{}.d.da[2] = 3
{}.d.da[3].daa = 4
{}.d.da[3].dab = 5
{}.d.db.dba = 123
```

## syntax

`JSON` data by definition is written as name/value pairs, consisting of a field name (in double quotes), followed by a colon, followed by a value: `{ "name" : "value" }`

`jpretty` accepts multiple styles as it converts the input into `json`. The following are valid syntax.

```js
//valid
console.log(jPretty('{ "a": 1, "b": 2}'));
console.log(jPretty({ a: 1, b: 2}));
console.log(jPretty({ "a": 1, "b": 2}));
console.log(jPretty({ 'a': 1, 'b': 2}));
console.log(jPretty("{ 'a': 1, 'b': 2}"));
console.log(jPretty("{ a: 1, b: 2}"));

// since v1.1.5 all of above input styles will work.
```