function getRandomTsCode() {
  const num = Math.floor(Math.random() * 10);
  if (num % 2 === 0) {
    return "const message: string = 'Hello World!';";
  } else {
    return "const age: number = 30;";
  }
}
