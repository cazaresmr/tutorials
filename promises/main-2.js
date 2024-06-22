function walkDog(callback) {
  setTimeout(() => {
    console.log("Dog is walked!");
    callback();
  }, 1500);
}

function cleanTheKitchen(callback) {
  setTimeout(() => {
    console.log("Kitchen is cleaned!");
    callback();
  }, 2500);
}

function takeOutTheTrash(callback) {
  setTimeout(() => {
    console.log("Trash is taken out!");
    callback();
  }, 500);
}

// Callback Hell

walkDog(() => {
  cleanTheKitchen(() => {
    takeOutTheTrash(() => {
      console.log("Everything is done!");
    });
  });
});
