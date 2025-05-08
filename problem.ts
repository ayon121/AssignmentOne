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








// Problem 2:
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