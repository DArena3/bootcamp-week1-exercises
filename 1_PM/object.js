const assert = require('assert')


/**
 * Complete the function such that it returns true if an object or any of its
 * subobjects have any falsy values and false otherwise.
 * HINT: Recursion may help here
 * HINT 2: Get the truthiness of a value by using a double bang (!!),
 *    or the untruthiness using a single bang (!)
 */

const hasFalsyValue = obj => {
  for (const o in obj) {
    //console.log(`${o}: ${obj[o]}`)
    //console.log(typeof(obj[o]))
    if (!obj[o]) return true
    if (typeof(obj[o]) === 'object') {
      if (hasFalsyValue(obj[o])) return true
    }
  }
  return false
};

const falsyObj = {
  hi: "I am falsy somewhere...",
  "i'm an number": 23,
  "i'm a boolean": true,
  "i'm an object": {
    aint: 'nuthin to look at here...',
    keeplooking: {
      oops: 0
    }
  }
};

const truthyObj = {
  truthy: true,
  stillTruthy: -1,
  yup: "this is truthy",
  anotherOne: {
    anotherTruthy: ";)"
  }
};

const myObj = {
  hello: true,
  'help': 1,
  subObj: {
    lol1: 'eeeee',
    lol: true
  }
}

console.log(hasFalsyValue(myObj))
console.log(hasFalsyValue(truthyObj))
console.log(hasFalsyValue(falsyObj))

assert(hasFalsyValue(falsyObj) === true);
assert(hasFalsyValue(truthyObj) === false);
