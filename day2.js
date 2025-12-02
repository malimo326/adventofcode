const fs = require("fs");

// Read the puzzle input
const input = fs.readFileSync("input2.txt", "utf-8").trim();
const ranges = input.split(",");

function isInvalidID(num) {
  const str = String(num);
  const len = str.length;

  // Try all possible pattern lengths from 1 to len/2
  for (let patternLen = 1; patternLen <= len / 2; patternLen++) {
    // Check if the string length is divisible by pattern length
    if (len % patternLen === 0) {
      const pattern = str.substring(0, patternLen);
      const repetitions = len / patternLen;

      // Check if we have at least 2 repetitions
      if (repetitions >= 2) {
        // Check if the entire string is made of this pattern repeated
        let isValid = true;
        for (let i = 0; i < len; i++) {
          if (str[i] !== pattern[i % patternLen]) {
            isValid = false;
            break;
          }
        }
        if (isValid) {
          return true;
        }
      }
    }
  }

  return false;
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
