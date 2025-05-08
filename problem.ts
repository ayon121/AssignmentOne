//Assignment One



// -----------------Problem 1
// Description: Create a function that takes a string and an optional boolean.
// If the boolean is true or not provided, return the string in uppercase.
// If the boolean is false, return the string in lowercase.

function formatString(text: string, toUpperCase: boolean = true): string {
    return toUpperCase ? text.toUpperCase() : text.toLowerCase();
}
console.log(formatString("Hello"))           // Output: "HELLO"
console.log(formatString("Hello", true))     // Output: "HELLO"
console.log(formatString("Hello", false))    // Output: "hello"








//-------------------Problem 2
// Description: Create a function that filters an array of objects by the rating property,
// returning only items with a rating of 4 or more.
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filteredItems: { title: string; rating: number }[] = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i].rating >= 4) {
            filteredItems.push(items[i]);
        }
    }
    return filteredItems;
}

const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books)) // Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]






//----------------- Problem 3
// Description: Create a generic function that concatenates multiple arrays of the same type using rest parameters.

function concatenateArrays<T>(...arrays: T[][]): T[] {
    let result: T[] = [];
    for (let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];


        for (let j = 0; j < currentArray.length; j++) {
            result.push(currentArray[j]);
        }
    }
    return result;
}
console.log(concatenateArrays(["a", "b"], ["c"]))     // Output: ["a", "b", "c"]
console.log(concatenateArrays([1, 2], [3, 4], [5]))    // Output: [1, 2, 3, 4, 5]








// ----------------Problem 4
// Description:
// Create a Vehicle class with private make and year properties and a getInfo() method.
// Create a Car class extending Vehicle, adding a private model property and a getModel() method.
class Vehicle {
    constructor(
        private make: string,
        private year: number
    ) { }

    getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    constructor(
        make: string,
        year: number,
        private model: string
    ) {
        super(make, year);
    }

    getModel(): string {
        return `Model: ${this.model}`;
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");

console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
console.log(myCar.getModel());  // Output: "Model: Corolla"








// ----------------Problem 5:
// Description: Write a function that takes a string | number and returns:

// The length if it's a string
// The number multiplied by 2 if it's a number
function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    } else {
        return value * 2;
    }
}

console.log(processValue("Hello")); // Output: 5
console.log(processValue(10));      // Output: 20
