console.log("This is the beginning!");
try {
  console.log("Hello");
  console.lag("World"); // TypeError
  console.log(x); // ReferenceError
} catch (error) {
  console.error(error);
} finally {
  console.log("Finally always runs and is optional.");
}
console.log("This is the end!");
