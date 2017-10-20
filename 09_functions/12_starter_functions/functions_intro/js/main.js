// // Take a look at the below lines of code.
// // Look at each function. Can you guess what will happen when the page loads?
// // Open the page in your browser.
// // What are the lines kitchenArea(), bathroomArea() and livingRoomArea() doing?
// // Is there code that is repeated, or very similar in each function?
// // Now work through the questions in part 2.
//
// function kitchenArea () {
//   var width = 10;
//   var length = 14;
//
//   var area = length * width;
//
//   console.log('Kitchen: ' + area + ' square feet.');
//
// }
//
//
// function bathroomArea () {
//   var width = 8;
//   var length = 10;
//
//   var area = length * width;
//
//   console.log('Bathroom: ' + area + ' square feet.');
// }
//
//
// function livingRoomArea () {
//   var width = 16;
//   var length = 20;
//
//   var area = length * width;
//
//   console.log('Living Room: ' + area + ' square feet.');
// }
//
// // kitchenArea();
// // bathroomArea();
// // livingRoomArea();


// Part 2:

// After talking through the above questions, comment out the above code
// And uncomment the code below
// Talk through this code with your groups. What role do room, length and width
// in the parentheses after displayArea play?

function displayArea (room, length, width) {

  var area = length * width;

  console.log(room + ': ' + area + ' square feet.');

}

displayArea('Kitchen', 14, 10);
displayArea('Bathroom', 10, 8);
displayArea('Living Room', 20, 16);
