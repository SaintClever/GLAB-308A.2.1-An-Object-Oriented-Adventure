// --- Part 1: Humble Beginnings ---
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"]
}

// create a loop that logs each item in Robin’s inventory
for (let i in adventurer.inventory) {
  console.log(adventurer.inventory[i]);
}

// Give Robin a companion to travel with – a furry friend they call "Leo.”
adventurer.companion = {name: "Leo", type: "Cat"}
console.log(adventurer);


// Add a "companion” sub-object to "Leo” with the following properties:
// The companion’s name is "Frank.”
// The companion’s type is "Flea.”
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


// --- Part 2: Class Fantasy ---
class Character {
  constructor (name) {
    const MAX_HEALTH = 100;
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  
  roll = (mod = 0) => {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";

robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

console.log(robin.companion.companion.roll);


// --- Part 3: Class Features ---
class Adventurer extends Character {
  constructor (name, role) {
    const ROLES = ["Fighter", "Healer", "Wizar"];
    super(name);
    // Adventurers have specialized roles.
    this.role = role;
    for (let i in ROLES) {
      if (ROLES[i] === this.role) {
        console.log(`${this.role} selected`);
      } else {
        console.log(`${this.role} isn't available`);
      }
    }
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout () {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
}


// Create a Companion class with properties and methods specific to the companions.
class Companion extends Adventurer {
  constructor(name, role, type, belongings) {
    super(name, role);
    this.type = type;
    this.belongings = belongings
  }
}

let robinCompanion = new Companion("Companion", "Companion", "Flea", ["small hat", "sunglasses"]);
console.log(robinCompanion);
