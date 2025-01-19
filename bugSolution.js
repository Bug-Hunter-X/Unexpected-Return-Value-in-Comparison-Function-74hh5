function myFunc(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b; 
  }
}

console.log(myFunc(5, 2)); // Output: 5
console.log(myFunc(2, 5)); // Output: 5
console.log(myFunc(5,5)); //Output: 5