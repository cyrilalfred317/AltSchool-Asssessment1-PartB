// Problem 1: Deep Equal

function deepEqual(objA, objB) {
  // If both values are exactly equal, they are deeply equal
  if (objA === objB) {
    return true;
  }

  // If either value is not an object or is null, they cannot be deeply equal
  if (
    typeof objA !== "object" ||
    objA === null ||
    typeof objB !== "object" ||
    objB === null
  ) {
    return false;
  }

  // Get the keys from both objects
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  // Objects with different numbers of keys cannot be equal
  if (keysA.length !== keysB.length) {
    return false;
  }

  // Compare every key and its corresponding value
  for (const key of keysA) {
    if (!Object.hasOwn(objB, key)) {
      return false;
    }

    if (!deepEqual(objA[key], objB[key])) {
      return false;
    }
  }

  // Every comparison passed
  return true;
}

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })); // true

console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 })); // false

console.log(deepEqual({ a: 1 }, { a: 1, b: 2 })); // false
