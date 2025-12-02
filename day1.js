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
    // Count times we pass through 0 when going left
    for (let i = 1; i <= distance; i++) {
      const newPos = (position - i) % 100;
      const normalizedPos = newPos < 0 ? newPos + 100 : newPos;
      if (normalizedPos === 0) {
        count++;
      }
    }
    position = (position - distance) % 100;
    // Handle negative modulo in JavaScript
    if (position < 0) {
      position += 100;
    }
  } else if (direction === "R") {
    // Count times we pass through 0 when going right
    for (let i = 1; i <= distance; i++) {
      const newPos = (position + i) % 100;
      if (newPos === 0) {
        count++;
      }
    }
    position = (position + distance) % 100;
  }
}

console.log(`Password: ${count}`);
