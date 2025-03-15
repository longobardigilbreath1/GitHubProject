function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const numbers = Array.from({ length: getRandomInt(10) }, (_, i) => i + 1);
console.log(numbers);
