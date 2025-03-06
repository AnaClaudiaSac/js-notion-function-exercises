function placeOrder() {
  console.log("Your place was received...");
  cook();
  takeToTable();
}

function cook() {
  console.log("Cooking the received place...");
}

function takeToTable() {
  console.log("Take place to the table...");
}

placeOrder();
