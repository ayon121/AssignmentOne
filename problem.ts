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
// Description: 
// Write a function that takes a string | number and returns:
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








//--------------- Problem 6
// Description:
// Define an interface Product and create a function to 
// find the product with the highest price in an array. If the array is empty, return null.
interface Product {
    name: string;
    price: number;
}
function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }

    let mostExpensive = products[0];

    for (let i = 1; i < products.length; i++) {
        if (products[i].price > mostExpensive.price) {
            mostExpensive = products[i];
        }
    }

    return mostExpensive;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products))    // Output: { name: "Bag", price: 50 }





//----------- Problem 7
// Description:
// Define an enum Day for the days of the week.
// Create a function that returns "Weekday" or "Weekend" based on the input day.
enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend";
    } else {
        return "Weekday";
    }
}
console.log(getDayType(Day.Monday))  // Output: "Weekday"
console.log(getDayType(Day.Sunday)) // Output: "Weekend"






//----------- Problem 8
// Description: Create an async function that:
// Returns the square of a number after 1 second
// Rejects if the number is negative
async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (n < 0) {
                reject("Error: Negative number not allowed")
            } else {
                resolve(n * n);
            }
        }, 1000)
    });
}

squareAsync(4).then(console.log);        // Output after 1s: 16
squareAsync(-3).catch(console.error);    // Output: Error: Negative number not allowed