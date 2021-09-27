const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2006 },
    { name: "Company Four", category: "Retail", start: 1971, end: 2005 },
    { name: "Company Five", category: "Technology", start: 1991, end: 2002 },
    { name: "Company Six", category: "Finance", start: 1995, end: 2003 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 1981, end: 2003 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 2003 }

]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forloop
// for(let i=0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// forEach
// companies.forEach(function(company) {
//     console.log(company.category);
// })

// for loop
// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }

// console.log(canDrink);


// filter - get 21 and older
// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// });
 
// console.log(canDrink);

// arrow function filter
// const canDrink = ages.filter(age => age >= 21);

// console.log(canDrink); 


// Filter the retail companies
// const retailCompanies = companies.filter(function(company) {
//     if(company.category === 'Retail') {
//         return true;
//     }
// });

// console.log(retailCompanies);


// filter using arrow function
const retailCompanies = companies.filter(company => company.category === 'Retail');

console.log(retailCompanies);



