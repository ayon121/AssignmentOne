//Assignment One



// Problem 1:
// Description: Create a function that takes a string and an optional boolean.

// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.

function formatString(text: string, toUpperCase: boolean = true): string {
    return toUpperCase ? text.toUpperCase() : text.toLowerCase();
}
console.log(formatString("Hello"))           // Output: "HELLO"
console.log(formatString("Hello", true))     // Output: "HELLO"
console.log(formatString("Hello", false))    // Output: "hello"






