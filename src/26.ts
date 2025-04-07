function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomInt(10, 50)); // Output: 25
