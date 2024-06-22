function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dog is walked!");
    }, 1500);
  });
}

function cleanTheKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Kitchen is cleaned!");
    }, 2500);
  });
}

function takeOutTheTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Trash is taken out!");
    }, 500);
  });
}

// Promise Chaining

walkDog()
  .then((value) => {
    console.log(value);
    return cleanTheKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTheTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("Everything is done!");
  });
