function placeOrder(order, callback) {
  console.log("Your place was received, you want: ", order);
  callback();
}

function cook() {
  console.log("Cooking the received place...");
}

placeOrder("Macarrão", cook);

/**---------- */

// const number1 = 1; // @abc123 = 1
// const number2 = 2; // @a1526-6363 = 2
// const number3 = 3;
// const number4 = 4;

// const n1 = number1;

// function sum(
//   n1, // @abc123 = 1
//   b, // @a1526-6363 = 2
//   c,
//   d
// ) {
//   return n1 + b + c + d;
// }

// sum(number1, number2, number3, number4);
