try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));

  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("This is the end!");
