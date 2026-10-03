// Problem 5: Schema Validator

function validateSchema(obj, schema) {
  // Store all validation errors
  const errors = [];

  // Check every property and expected type defined in the schema
  for (const [key, expectedType] of Object.entries(schema)) {
    // Check if the required property is missing
    if (!Object.hasOwn(obj, key)) {
      errors.push(`${key}: missing property`);

      // Check if the property has the expected data type
    } else if (typeof obj[key] !== expectedType) {
      errors.push(`${key}: expected ${expectedType}, got ${typeof obj[key]}`);
    }
  }

  // Return all validation errors found
  return errors;
}

// Schema used to validate the objects
const schema = {
  name: "string",
  age: "number",
  isAdmin: "boolean",
};

// Test with a valid object
console.log(validateSchema({ name: "Ada", age: 21, isAdmin: false }, schema));

// Test with an invalid object
console.log(validateSchema({ name: "Ada", age: "21" }, schema));
