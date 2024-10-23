const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"]
}

// create a loop that logs each item in Robin’s inventory
for (let i in adventurer.inventory) {
  console.log(adventurer.inventory[i]);
}

// Give Robin a companion to travel with – a furry friend they call “Leo.”
adventurer.companion = {name: "Leo", type: "Cat"}
console.log(adventurer);


// Add a “companion” sub-object to “Leo” with the following properties:
// The companion’s name is “Frank.”
// The companion’s type is “Flea.”
// The companion has its own belongings, which includes a small hat and sunglasses.
adventurer.companion.subCompanion = {
  name: "Frank", type: "Flea",
  belongings: ["small hat", "sunglasses"]
}
console.log(adventurer);


// Give Robin the following method:
adventurer.roll = (mod = 0) => {
  const result = Math.floor(Math.random() * 20) + 1 + mod;
  console.log(`${this.name} rolled a ${result}.`)
}
console.log(adventurer.roll());