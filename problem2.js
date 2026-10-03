function diffObjects(oldObj, newObj) {
  // Store the differences we find
  const result = {
    added: {},
    removed: {},
    changed: {},
  };

  // Get every unique key from both objects
  const allKeys = new Set([...Object.keys(oldObj), ...Object.keys(newObj)]);

  // Check each key
  for (const key of allKeys) {
    // Key exists only in the new object
    if (!Object.hasOwn(oldObj, key) && Object.hasOwn(newObj, key)) {
      result.added[key] = newObj[key];

      // Key exists only in the old object
    } else if (Object.hasOwn(oldObj, key) && !Object.hasOwn(newObj, key)) {
      result.removed[key] = oldObj[key];

      // Key exists in both, but the value changed
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = {
        from: oldObj[key],
        to: newObj[key],
      };
    }
  }

  return result;
}
console.log(
  diffObjects(
    { name: "Setemi", role: "Engineer", country: "Jamaica" },
    { name: "Setemi", role: "Senior Engineer", city: "Kingston" },
  ),
);
