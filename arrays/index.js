const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keybord', price: 25 }
];

// filter
const filterItems = items.filter((item) => {
    return item.price <= 100;
})

// map
const itemNames = items.map((item) => {
    return item.name;
})

// find
const foundItem = items.find((item) => {
    return item.name === 'Book';
})

// forEach
items.forEach((item) => {
    // console.log(item);
})

// some - returns true or false
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

const hasEveryInexpensiveItems = items.every((item) => {
    return item.price <= 100
})

// reduce - get total 
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

// includes
const itemsArray = [1,2,3,4,5]

const includesTwo = itemsArray.includes(2)

console.log(includesTwo)



