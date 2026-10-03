// Problem 4: Private Counter Factory

function createCounter() {
  // Private count variable accessible only through the closure
  let count = 0;

  return {
    // Increase the private count by 1
    increment() {
      count++;
    },

    // Decrease the private count by 1
    decrement() {
      count--;
    },

    // Getter used to read the current private count
    get value() {
      return count;
    },
  };
}

// Test the counter
const counter = createCounter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.value); // 1
console.log(counter.count); // undefined
