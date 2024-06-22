console.log("This is the beginning!");

try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));
  if (divisor == 0) {
    throw new Error("You can't divide by zero!");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number");
  }
  const result = dividend / divisor;
  console.log(`TRY: The Quotient is: ${result}`);
} catch (error) {
  console.error(`CATCH: ${error}`);
} finally {
  console.log("And FINALLY, this always executes");
}

console.log("This is the end!");
