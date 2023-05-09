// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  input.sort((a, b) => a - b);
  let medianIndex = Math.floor(input.length / 2);
  return (median =
    input.length % 2 === 1
      ? input[medianIndex]
      : (input[medianIndex - 1] + input[medianIndex]) / 2);
}

console.log(result(input));
