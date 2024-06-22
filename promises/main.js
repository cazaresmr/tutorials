function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;
      if (dogWalked) {
        resolve("Dog is walked!");
      } else {
        reject("Dog is not walked!");
      }
    }, 1500);
  });
}

function cleanTheKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("Kitchen is cleaned!");
      } else {
        reject("Kitchen is not cleaned!");
      }
    }, 2500);
  });
}

function takeOutTheTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = false;
      if (trashTakenOut) {
        resolve("Trash is taken out!");
      } else {
        reject("Trash is not taken out!");
      }
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
  })
  .catch((error) => {
    console.error(error);
  });
