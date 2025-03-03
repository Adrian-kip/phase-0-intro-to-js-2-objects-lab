// Step 1: Initialize employee Object using literal syntax
const employee = {
    name: "Adrian Kiptoo",
    streetAddress: "123 Main St"
  };
  
  // Step 2: Functions
  
  // 1. updateEmployeeWithKeyAndValue(): returns a new object with an updated key-value pair, without mutating the original employee object.
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, // Spread operator to create a copy of the employee object
      [key]: value // Add or update the key with the provided value
    };
  }
  
  // 2. destructivelyUpdateEmployeeWithKeyAndValue(): updates the original object by directly mutating it.
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; // Directly update the key-value pair
    return employee; // Return the updated employee object
  }
  
  // 3. deleteFromEmployeeByKey(): returns a new object without the specified key-value pair, without mutating the original object.
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // Create a copy of the employee object
    delete newEmployee[key]; // Remove the specified key
    return newEmployee; // Return the new object without the key-value pair
  }
  
  // 4. destructivelyDeleteFromEmployeeByKey(): deletes a key-value pair from the original employee object by directly mutating it.
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; // Directly delete the specified key from the original object
    return employee; // Return the modified employee object
  }
  
  // Testing the functions
  console.log(updateEmployeeWithKeyAndValue(employee, "name", "John Doe")); // Non-destructive
  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St")); // Destructive
  console.log(deleteFromEmployeeByKey(employee, "name")); // Non-destructive
  console.log(destructivelyDeleteFromEmployeeByKey(employee, "streetAddress")); // Destructive
  
