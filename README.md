# jpretty

![Join the chat at https://gitter.im/jprettyMod/Lobby](https://badges.gitter.im/jprettyMod/Lobby.svg)

Prettier display of json, using dot delimiter and a key = value output.

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
