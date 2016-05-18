//This function should sum all of the arguments.
function sum() {
  //complete
  var args = Array.prototype.slice.call(arguments);
  return args.reduce(function(a, v){
    return a + v;
  }, 0);
}

console.log(sum(1, 2, 5, 10)); // -> 18
console.log(sum(1, 5)); // -> 6


//This function needs to use the first argument as the delimiter and should create a concatenated string.
function concat() {
  //complete
  var args = Array.prototype.slice.call(arguments);
  var delimitter = args.shift();
  return args.join(delimitter);
}
console.log(concat('+', 'This', 'is', 'several', 'values')); // -> This+is+several+values



//This function needs to find the max of all the values passed in.
function max() {
  //complete
  var args = Array.prototype.slice.call(arguments);
  var maxValue = args[0];
  args.forEach(function (arg, i) {
    if (arg > maxValue) {
      maxValue = arg;
    }
  });
  return maxValue;
}

console.log(max(1, 7, 65, 8)); // -> 65
