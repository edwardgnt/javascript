// String
const s1 = 'Hello';
console.log(typeof s1);

// Object
const s2 = new String('Hello');
console.log(typeof s2);

console.log(window);
// alert(1);


// Object literals
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in year of ${this.year}.`;
    }
}

// Call literal function
console.log(book1.getSummary());

// Get values
console.log(Object.values(book1));

// Get keys
console.log(Object.keys(book1));



