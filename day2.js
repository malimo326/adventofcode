const fs = require("fs");

// Read the puzzle input
const input = fs.readFileSync("input2.txt", "utf-8").trim();
const ranges = input.split(",");

function isInvalidID(num) {
  const str = String(num);

  // Check if the string is made of a pattern repeated twice
  // The pattern must be at least 1 digit, so the total length must be even
  if (str.length % 2 !== 0) return false;

  const mid = str.length / 2;
  const firstHalf = str.substring(0, mid);
  const secondHalf = str.substring(mid);

  return firstHalf === secondHalf;
}

let total = 0;

// Process each range
for (const range of ranges) {
  const [start, end] = range.trim().split("-").map(Number);

  // Iterate through the range and find invalid IDs
  for (let id = start; id <= end; id++) {
    if (isInvalidID(id)) {
      total += id;
    }
  }
}

console.log(`Sum of invalid IDs: ${total}`);
