//Note: In This File I have added some of Array methods along with their Time Complexity 

//console.time("push") : A static method that starts a timer, you can use to track how long an operation takes.
//console.timeEnd("push") :  A static method that stops a timer that was previously started.

// push() :  Add element to end of an array
// Time Complexity: O(1)
function Push() {
  console.time("push"); 
  const myArray = [1, 2, 3];
  myArray.push(4);
  console.timeEnd("push");
  console.log(myArray); 
  // Output will be [1, 2, 3, 4]
}

// pop() :  Remove element from end of an array
// Time Complexity: O(1)
function Pop() {
  console.time("pop"); 
  const myArray = [1, 2, 3];
  myArray.pop();
  console.timeEnd("pop"); 
  console.log(myArray); 
  // Output will be [1, 2]
}

// unshift() :  Add element to beginning of an array
// Time Complexity: O(n)
function Unshift() {
  console.time("unshift");
  const myArray = [2, 3];
  myArray.unshift(1);
  console.timeEnd("unshift");
  console.log(myArray); 
  // Output will be [1, 2, 3]
}

// shift() :  Remove element from beginning of an array
// Time Complexity: O(n)
function Shift() {
  console.time("shift");
  const myArray = [1, 2, 3];
  myArray.shift();
  console.timeEnd("shift");
  console.log(myArray); 
  // Output will be [2, 3]
}


// concat() : Merge two arrays
// Time Complexity: O(n + m)
function Concat() {
  console.time("concat");
  const a = [1, 2];
  const b = [3, 4];
  const c = a.concat(b);
  console.timeEnd("concat");
  console.log(c); 
  // Output will be [1, 2, 3, 4]
}

// slice() : Copy portion of an array
// Time Complexity: O(k)
function Slice() {
  console.time("slice");
  const myArray = [10, 20, 30, 40];
  const sliced = myArray.slice(1, 3);
  console.timeEnd("slice");
  console.log(sliced); 
  // Output will be [20, 30]
}

// splice() : Add or Remove elements from specific index
// Time Complexity: O(n)
function Splice() {
  console.time("splice");
  const myArray = [1, 2, 3, 4];
  myArray.splice(2, 1, 99);
  console.timeEnd("splice");
  console.log(myArray); 
  // Output will be [1, 2, 99, 4]
}


// indexOf() : Finds the index of the first occurrence of an element
// Time Complexity: O(n)
function IndexOf() {
  console.time("indexOf");
  const myArray = [10, 20, 30];
  console.log(myArray.indexOf(20)); 
  // Output will be 1
  console.timeEnd("indexOf");
}

// lastIndexOf() : Finds the index of the last occurrence of an element
// Time Complexity: O(n) 
function LastIndexOf() {
  console.time("lastIndexOf");
  const myArray = [1, 2, 3, 2, 1];
  console.log(myArray.lastIndexOf(2)); 
  // Output will be 3
  console.timeEnd("lastIndexOf");
}

// includes() : checks weather a specific element exists or not
// Time Complexity: O(n)
function Includes() {
  console.time("includes");
  const myArray = ['apple', 'banana'];
  console.log(myArray.includes('banana'));
   // Output will be true
  console.timeEnd("includes");
}

// find() : Finds the first element that satisfies a condition
// Time Complexity: O(n) 
function Find() {
  console.time("find");
  const myArray = [5, 10, 15];
  const found = myArray.find(x => x > 8);
  console.timeEnd("find");
  console.log(found); 
  // Output will be 10
}

// findIndex() : Finds the index of the first element that satisfies a condition
// Time Complexity: O(n)
function FindIndex() {
  console.time("findIndex");
  const myArray = [5, 10, 15];
  const index = myArray.findIndex(x => x > 8);
  console.timeEnd("findIndex");
  console.log(index); 
  // Output will be 1
}


// forEach() : Executes a function for each array element
// Time Complexity: O(n)
function ForEach() {
  console.time("forEach");
  const myArray = [1, 2, 3];
  myArray.forEach(x => x * 2);
  console.timeEnd("forEach");
}

// map() : Creates a new array with transformed elements
// Time Complexity: O(n)
function Map() {
  console.time("map");
  const myArray = [1, 2, 3];
  const doubled = myArray.map(x => x * 2);
  console.timeEnd("map");
  console.log(doubled); 
  // Output will be [2, 4, 6]
}

// filter() : Creates a new array with elements passing a condition
// Time Complexity: O(n)
function Filter() {
  console.time("filter");
  const myArray = [1, 2, 3, 4];
  const even = myArray.filter(x => x % 2 === 0);
  console.timeEnd("filter");
  console.log(even); 
  // Output will be [2, 4]
}

// reduce() : Reduces the array to a single accumulated value
// Time Complexity: O(n)
function Reduce() {
  console.time("reduce");
  const myArray = [1, 2, 3];
  const sum = myArray.reduce((a, b) => a + b, 0);
  console.timeEnd("reduce");
  console.log(sum); 
  // Output will be 6
}

// some() : Tests if at least one element meets a condition
// Time Complexity: O(n)
function Some() {
  console.time("some");
  const myArray = [1, 2, 3];
  console.log(myArray.some(x => x > 2)); 
  // Output will be true
  console.timeEnd("some");
}

// every() :  Tests if all elements meet a condition
// Time Complexity: O(n)
function Every() {
  console.time("every");
  const myArray = [2, 4, 6];
  console.log(myArray.every(x => x % 2 === 0)); 
  // Output will be true
  console.timeEnd("every");
}
// sort() : Sorts array elements in ascending order
// Time Complexity: O(n log n)
function Sort() {
  console.time("sort");
  const myArray = [3, 1, 2];
  myArray.sort();
  console.timeEnd("sort");
  console.log(myArray); 
  // Output will be [1, 2, 3]
}

// reverse() : Reverses array elements order
// Time Complexity: O(n)
function Reverse() {
  console.time("reverse");
  const myArray = [1, 2, 3];
  myArray.reverse();
  console.timeEnd("reverse");
  console.log(myArray); 
  // Output will be [3, 2, 1]
}


// join() : Joins all elements into a single string
// Time Complexity: O(n)
function Join() {
  console.time("join");
  const myArray = ['a', 'b', 'c'];
  const str = myArray.join('-');
  console.timeEnd("join");
  console.log(str); // output "a-b-c"
}


// flat() : Flattens nested arrays into a single array
// Time Complexity: O(n)
function Flat() {
  console.time("flat");
  const myArray = [1, [2, [3]]];
  const flatArr = myArray.flat(2);
  console.timeEnd("flat");
  console.log(flatArr); // output [1, 2, 3]
}

//  flatMap() : Maps and flattens array elements
// Time Complexity: O(n)
function FlatMap() {
  console.time("flatMap");
  const myArray = [1, 2, 3];
  const mapped = myArray.flatMap(x => [x, x * 2]);
  console.timeEnd("flatMap");
  console.log(mapped); // output [1, 2, 2, 4, 3, 6]
}


// fill() :  Fills array elements with a static value
// Time Complexity: O(n)
function Fill() {
  console.time("fill");
  const myArray = [1, 2, 3, 4];
  myArray.fill(0, 1, 3);
  console.timeEnd("fill");
  console.log(myArray); // output [1, 0, 0, 4]
}

// copyWithin() : Copies part of an array to another position
// Time Complexity: O(n)
function CopyWithin() {
  console.time("copyWithin");
  const myArray = [1, 2, 3, 4, 5];
  myArray.copyWithin(0, 3, 5);
  console.timeEnd("copyWithin");
  console.log(myArray); // output [4, 5, 3, 4, 5]
}


// Array.from() : Creates an array from an iterable or string
// Time Complexity: O(n)
function ArrayFrom() {
  console.time("Array.from");
  const str = "123";
  const myArray = Array.from(str);
  console.timeEnd("Array.from");
  console.log(myArray); // output ['1', '2', '3']
}

// Array.of() : Creates a new array from given arguments
// Time Complexity: O(n)
function ArrayOf() {
  console.time("Array.of");
  const myArray = Array.of(1, 2, 3);
  console.timeEnd("Array.of");
  console.log(myArray); // output [1, 2, 3]
}


// toReversed() : Returns a reversed copy of the array
// Time Complexity: O(n)
function ToReversed() {
  console.time("toReversed");
  const myArray = [1, 2, 3];
  const newArr = myArray.toReversed();
  console.timeEnd("toReversed");
  console.log(newArr); // output [3, 2, 1]
  console.log(myArray);    // output [1, 2, 3]
}

// toSorted() : Returns a sorted copy of the array
// Time Complexity: O(n log n)
function ToSorted() {
  console.time("toSorted");
  const myArray = [3, 1, 2];
  const newArr = myArray.toSorted();
  console.timeEnd("toSorted");
  console.log(newArr); // output [1, 2, 3]
  console.log(myArray);    // output  [3, 1, 2]
}

// toSpliced() : Returns a new array with items added or removed
// Time Complexity: O(n)
function ToSpliced() {
  console.time("toSpliced");
  const myArray = [1, 2, 3, 4];
  const newArr = myArray.toSpliced(1, 2, 99);
  console.timeEnd("toSpliced");
  console.log(newArr); // output [1, 99, 4]
  console.log(myArray);    // output [1, 2, 3, 4]
}

// with() :  Returns a copy with one element replaced
// Time Complexity: O(n)
function With() {
  console.time("with");
  const myArray = [10, 20, 30];
  const newArr = myArray.with(1, 99);
  console.timeEnd("with");
  console.log(newArr); // output [10, 99, 30]
  console.log(myArray);    // output [10, 20, 30]
}


// With();
// ArrayOf();
// Push();
// Pop();
// Unshift();