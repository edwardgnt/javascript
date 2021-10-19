const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keybord', price: 25 }
];

// filter method
const filteredItems = items.filter((item) => {
    return item.price <= 100;
});

// Map method
const itemNames = items.map((item) => {
    return item.name;
})

// Find method
const foundItem = items.find((item) => {
    return item.name === 'Book';
});

// Foreach method
items.forEach((item) => {
 //   console.log(item);
});

// Some method
// const hasInexpensiveItems = items.some((item) => {
//     return item.price <= 100;
// });

// Every method
const hasInexpensiveItems = items.every((item) => {
    return item.price <= 100;
});

// Reduce method - gives total
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0);



// Includes method - check if value in array
const numArray = [1, 2, 3, 4, 5];

const includesTwo = numArray.includes(2);

console.log(includesTwo);


