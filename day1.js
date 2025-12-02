const fs = require("fs");

// Read the puzzle input
const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

let position = 50;
let count = 0;

// Process each rotation
for (const rotation of input) {
  const direction = rotation[0];
  const distance = parseInt(rotation.slice(1));

  if (direction === "L") {
    position = (position - distance) % 100;
    // Handle negative modulo in JavaScript
    if (position < 0) {
      position += 100;
    }
  } else if (direction === "R") {
    position = (position + distance) % 100;
  }

  // Check if we're at position 0
  if (position === 0) {
    count++;
  }
}

console.log(`Password: ${count}`);
