function generateRandomTsCode(): string {
  const minLength = 10;
  const maxLength = 20;
  const charSet = "abcdefghijklmnopqrstuvwxyz";

  let code: string = "";

  for (let i = 0; i < Math.floor(Math.random() * (maxLength - minLength) + minLength); i++) {
    const charIndex = Math.floor(Math.random() * charSet.length);
    code += charSet[charIndex];
  }

  return code;
}
