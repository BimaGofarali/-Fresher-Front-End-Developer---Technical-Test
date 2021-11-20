// Expected Result : 6
// Direction : Get the total of "1" in binary value of number input
const number = 221;

function result(num) {
  // Your Code Here
  return Math.floor(Math.log2(num)-1)
}

console.log(result(number));