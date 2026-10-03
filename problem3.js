function deepFreeze(obj) {
  // Go through every value inside the object
  for (const value of Object.values(obj)) {
    // If the value is another object, freeze it recursively
    if (value !== null && typeof value === "object") {
      deepFreeze(value);
    }
  }

  // Freeze and return the current object
  return Object.freeze(obj);
}
const config = {
  debug: false,
  api: {
    baseUrl: "https://x.com",
    retries: 3,
  },
};

deepFreeze(config);

console.log(Object.isFrozen(config)); // true
console.log(Object.isFrozen(config.api)); // true
