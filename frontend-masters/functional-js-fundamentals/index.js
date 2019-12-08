// https://frontendmasters.com/courses/functional-js-fundamentals
// http://csbin.io/functional

// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// ##########################
// # Higher-Order Functions #
// ##########################

// Challenge 1
const addTwo = num => num + 2;

// To check if you've completed this function, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));

// Challenge 2
const addS = word => word + "s";

// Uncomment these to check your work
console.log(addS("pizza"));
console.log(addS("bagel"));

// Challenge 3
const map = (array, callback) => {
  return array.map(callback);
};

console.log(map([1, 2, 3], addTwo));

// Challenge 4
const forEach = (array, callback) => {
  array.forEach(callback);
};

let alphabet = "";
const letters = ["a", "b", "c", "d"];
forEach(letters, char => (alphabet += char));
console.log(alphabet); //prints 'abcd'

// Challenge 5
const mapWith = (array, callback) => {
  const out = [];
  forEach(array, e => {
    out.push(callback(e));
  });
  return out;
};

console.log(mapWith([1, 2, 3], addTwo));

// Challenge 6
const reduce = (array, callback, initialValue) => {
  let acc = initialValue;
  forEach(array, e => {
    acc = callback(acc, e);
  });
  return acc;
};

const nums = [4, 1, 3];
const add = (a, b) => a + b;
console.log(reduce(nums, add, 0)); //-> 8

// Challenge 7
// ??? Uuuhhh
const intersection = (...arrays) => {
  // getting rid of dup bc paranoid, and flatten
  const array = arrays.map(a => new Set(a)).flatMap(s => Array.from(s));
  const map = reduce(
    array,
    (acc, a) => {
      if (!acc[a]) acc[a] = 1;
      else acc[a]++;
      return acc;
    },
    {}
  );
  const out = [];
  forEach(Object.entries(map), ([k, v]) => {
    if (v === arrays.length) out.push(k);
  });
  return out;
};

console.log(
  intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20])
);
// should log: [5, 15]

// Challenge 8
const union = (...arrays) => {
  return Array.from(new Set(arrays.flat()));
};

console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
const objOfMatches = (array1, array2, callback) => {
  if (array1.length !== array2.length) return;
  return array1.reduce((acc, v, i) => {
    const res = callback(v);
    if (res === array2[i]) acc[v] = res;
    return acc;
  }, {});
};

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    str => str.toUpperCase()
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
const multiMap = (arrVals, arrCallbacks) => {
  return reduce(
    arrVals,
    (acc, v) => ({ ...acc, [v]: arrCallbacks.map(f => f(v)) }),
    {}
  );
};

console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      str => str.toUpperCase(),
      str => str[0].toUpperCase() + str.slice(1).toLowerCase(),
      str => str + str
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
const commutative = (func1, func2, value) => {
  return func2(func1(value)) === func1(func2(value));
};

// /*** Uncomment these to check your work! ***/
const multBy3 = n => n * 3;
const divBy4 = n => n / 4;
const subtract5 = n => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false

// Challenge 12
const objFilter = (obj, callback) => {
  const out = {};
  for (const k in obj) {
    if (callback(k) === obj[k]) out[k] = obj[k];
  }
  return out;
};

// /*** Uncomment these to check your work! ***/
const startingObj = {};
startingObj[6] = 3;
startingObj[2] = 1;
startingObj[12] = 4;
const half = n => n / 2;
console.log(objFilter(startingObj, half)); // should log: { 2: 1, 6: 3 }

// Challenge 13
const rating = (arrOfFuncs, value) => {
  const trueCount = reduce(
    arrOfFuncs,
    (acc, f) => (f(value) ? acc + 1 : acc),
    0
  );
  return (trueCount / arrOfFuncs.length) * 100;
};

// /*** Uncomment these to check your work! ***/
const isEven = n => n % 2 === 0;
const greaterThanFour = n => n > 4;
const isSquare = n => Math.sqrt(n) % 1 === 0;
const hasSix = n => n.toString().includes("6");
const checks = [isEven, greaterThanFour, isSquare, hasSix];
console.log(rating(checks, 64)); // should log: 100
console.log(rating(checks, 66)); // should log: 75

// Challenge 14
const pipe = (arrOfFuncs, value) => {
  return reduce(arrOfFuncs, (acc, f) => f(acc), value);
};

// /*** Uncomment these to check your work! ***/
const capitalize = str => str.toUpperCase();
const addLowerCase = str => str + str.toLowerCase();
const repeat = str => str + str;
console.log(pipe([capitalize, addLowerCase, repeat], "cat")); // should log: 'CATcatCATcat'

// Challenge 15
const highestFunc = (objOfFuncs, subject) => {
  const [_, out] = reduce(
    Object.entries(objOfFuncs),
    ([maxVal, maxName], [name, f]) => {
      const res = f(subject);
      if (res > maxVal) return [res, name];
      else return [maxVal, maxName];
    },
    [-Infinity, ""]
  );
  return out;
};

// /*** Uncomment these to check your work! ***/
const groupOfFuncs = {};
groupOfFuncs.double = n => n * 2;
groupOfFuncs.addTen = n => n + 10;
groupOfFuncs.inverse = n => n * -1;
console.log(highestFunc(groupOfFuncs, 5)); // should log: 'addTen'
console.log(highestFunc(groupOfFuncs, 11)); // should log: 'double'
console.log(highestFunc(groupOfFuncs, -20)); // should log: 'inverse'

// ###########
// # Closure #
// ###########

// Challenge 1
const createFunction = () => {
  return () => console.log("hello");
};

// UNCOMMENT THESE TO TEST YOUR WORK!
const function1 = createFunction();
function1();

// Challenge 2
const createFunctionPrinter = input => {
  return () => console.log(input);
};

// UNCOMMENT THESE TO TEST YOUR WORK!
const printSample = createFunctionPrinter("sample");
printSample();
const printHello = createFunctionPrinter("hello");
printHello();

// Challenge 3
const outer = () => {
  let counter = 0; // this variable is outside incrementCounter's scope
  const incrementCounter = () => {
    counter++;
    console.log("counter", counter);
  };
  return incrementCounter;
};

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

// Challenge 4
const addByX = x => {
  return v => x + v;
};

const addByTwo = addByX(2);
console.log(addByTwo(1)); //should return 3
console.log(addByTwo(2)); //should return 4
console.log(addByTwo(3)); //should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); //should return 4
console.log(addByThree(2)); //should return 5

const addByFour = addByX(4);
console.log(addByFour(4)); //should return 8
console.log(addByFour(10)); //should return 14

// Challenge 5
const once = func => {
  let res;
  return v => {
    if (res == null) res = func(v);
    return res;
  };
};

const onceFunc = once(addByTwo);

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(onceFunc(4)); //should log 6
console.log(onceFunc(10)); //should log 6
console.log(onceFunc(9001)); //should log 6

// Challenge 6
const after = (count, func) => {
  let c = count;
  return () => {
    c--;
    if (c === 0) return func();
  };
};

const called = () => console.log("hello");
const afterCalled = after(3, called);

afterCalled(); // -> nothing is printed
afterCalled(); // -> nothing is printed
afterCalled(); // -> 'hello' is printed

// Challenge 7
const delay = (func, wait, ...args) => {
  setTimeout(() => func(...args), wait);
};

delay(console.log, 1000, "delayed");

// Challenge 8
const russianRoulette = num => {
  let c = 0;
  return () => {
    c++;
    if (c < num) return "click";
    else if (c === num) return "bang";
    else return "reload to play again";
  };
};

// /*** Uncomment these to check your work! ***/
const play = russianRoulette(3);
console.log(play()); // should log: 'click'
console.log(play()); // should log: 'click'
console.log(play()); // should log: 'bang'
console.log(play()); // should log: 'reload to play again'
console.log(play()); // should log: 'reload to play again'

// Challenge 9
const average = () => {
  let isInit = false;
  let sum = 0;
  let count = 0;

  return v => {
    if (!isInit && v != null) isInit = true;
    if (!isInit) return 0;
    if (v != null) {
      sum += v;
      count++;
    }
    return sum / count;
  };
};

// /*** Uncomment these to check your work! ***/
const avgSoFar = average();
console.log(avgSoFar()); // should log: 0
console.log(avgSoFar(4)); // should log: 4
console.log(avgSoFar(8)); // should log: 6
console.log(avgSoFar()); // should log: 6
console.log(avgSoFar(12)); // should log: 8
console.log(avgSoFar()); // should log: 8

// Challenge 10
const makeFuncTester = arrOfTests => {
  return f => {
    for (const t of arrOfTests) {
      if (f(t[0]) !== t[1]) return false;
    }
    return true;
  };
};

// /*** Uncomment these to check your work! ***/
const capLastTestCases = [];
capLastTestCases.push(["hello", "hellO"]);
capLastTestCases.push(["goodbye", "goodbyE"]);
capLastTestCases.push(["howdy", "howdY"]);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(shouldCapitalizeLast(capLastAttempt1)); // should log: false
console.log(shouldCapitalizeLast(capLastAttempt2)); // should log: true

// Challenge 11
const makeHistory = limit => {
  const history = [];
  return c => {
    if (c === "undo") {
      if (history.length === 0) return "nothing to undo";
      return history.pop() + " undone";
    }
    if (history.length > limit - 1) {
      history.unshift();
    }
    history.push(c);
    return c + " done";
  };
};

// /*** Uncomment these to check your work! ***/
const myActions = makeHistory(2);
console.log(myActions("jump")); // should log: 'jump done'
console.log(myActions("undo")); // should log: 'jump undone'
console.log(myActions("walk")); // should log: 'walk done'
console.log(myActions("code")); // should log: 'code done'
console.log(myActions("pose")); // should log: 'pose done'
console.log(myActions("undo")); // should log: 'pose undone'
console.log(myActions("undo")); // should log: 'code undone'
console.log(myActions("undo")); // should log: 'nothing to undo'

// Challenge 12
const blackjack = array => {};

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // should log: 9
// console.log(i_like_to_live_dangerously()); // should log: 11
// console.log(i_like_to_live_dangerously()); // should log: 17
// console.log(i_like_to_live_dangerously()); // should log: 18
// console.log(i_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'
// console.log(i_like_to_live_dangerously()); // should log: 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // should log: 4
// console.log(i_TOO_like_to_live_dangerously()); // should log: 15
// console.log(i_TOO_like_to_live_dangerously()); // should log: 19
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // should log: 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 10
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 13
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // should log: 'you are done!

// ##########################
// # Extension Challenges   #
// ##########################

// Challenge 1
const functionValidator = (funcArr, input, output) => {};

// const addFive = num => num + 5;
// const multiplyByTwo = num => num * 2;
// const subtractOne = num => num - 1;
// const fnArr = [addFive, multiplyByTwo, subtractOne];

// console.log(functionValidator(fnArr, 5, 10)) // should log [num => num + 5, num => num * 2]

// Challenge 2
const allClear = (funcArr, value) => {};

// const isOdd = num => num % 2 === 1;
// const isPositive = num => num > 0;
// const multipleOfFive = num => num % 5 === 0;
// const numFnArr = [isOdd, isPositive, multipleOfFive];
// console.log(allClear(numFnArr, 25)) // should log true
// console.log(allClear(numFnArr, -25)) // should log false

// Challenge 3
const numSelectString = numArr => {};

// const nums = [17, 34, 3, 12]
// console.log(numSelectString(nums)) // should log "3, 17"

// Challenge 4
const movieSelector = moviesArr => {};

// const movies = [ { id: 1, title: "Pan's Labyrinth", score: 9 }, { id: 37, title: "Manos: The Hands of Fate", score: 2 }, { title: "Air Bud", score: 5 }, { title: "Hackers", score: 7 } ]
// console.log(movieSelector(movies)) // should log [ "PAN'S LABYRINTH", "HACKERS" ]

// Challenge 5
const curriedAddThreeNums = num1 => {};

// console.log(curriedAddThreeNums(3)(-1)(1)); // should log 3

// Challenge 6
// const curriedAddTwoNumsToFive = ?

// console.log(curriedAddTwoNumsToFive(6)(7)) // should log 18
