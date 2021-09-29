const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1989, end: 2006 },
    { name: "Company Four", category: "Retail", start: 1971, end: 2005 },
    { name: "Company Five", category: "Technology", start: 1991, end: 2006 },
    { name: "Company Six", category: "Finance", start: 1985, end: 2003 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 1981, end: 2003 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 2003 }

]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop
for(let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
}

forEach
companies.forEach(function(company) {
    console.log(company);
});

// for loop get ages greater than 21
let canDrink = [];
for(let i = 0; i < ages.length; i++) {
    if(ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}

console.log(canDrink);

// Filter 
const canDrink = ages.filter(function(age) {
    if(age >- 21) {
        return true;
    }
});

console.log(canDrink);

// Filter with ES6 arrow functions - get 21 and older
const canDrink = ages.filter(age => age >= 21);
console.log(canDrink);

// Filter retail companies - ES5 version
const retailCompanies = companies.filter(function(company) {
    if(company.category === 'Retail') {
        return true;
    }
});

console.log(retailCompanies);


// Filter retail companies - ES6 version
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// Get 80s companies
const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990));
console.log(eightiesCompanies);

// Get companies that lasted ten years
const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
console.log(lastedTenYears);

// Map - ES5
// Create array of company names
const companyNames = companies.map(function(company) {
    return company.name;
});

// console.log(companyNames);

const companyNames = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
console.log(companyNames);

// Map - get square root of age
const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

// Map - age times two
const ageTimesTwo = ages.map(age => age * 2);
console.log(ageTimesTwo);

// Maps - chain maps
const ageMappings = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2)

console.log(ageMappings);

// Sort - ES5
const sortedCompanies = companies.sort(function(c1, c2) {
    if(c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});

console.log(sortedCompanies);

// Sort - ES6 - sort companies by start year
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

// Sort ages
const sortAges = ages.sort((a, b) => a - b);
console.log(sortAges);


// forloop - add all the ages in array
let ageSum = 0;
for(let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}

console.log(ageSum);

// Reduce - ES5 -  add all the ages in array
const ageSum = ages.reduce(function(total, age) {
    return total + age;
}, 0);

console.log(ageSum);

// Reduce - ES6
const ageSum = ages.reduce((total, age) => total + age, 0);

console.log(ageSum);

// Reduce - ES5 - Get total years of all companies
const totalYears = companies.reduce(function(total, company) {
    return total + (company.end - company.start);
}, 0);

// console.log(totalYears);

// Reduce - ES6 - Get total years of all companies
const totalYears = companies
    .reduce((total, company) => total + (company.end - company.start), 0);

console.log(totalYears);

// Combine methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);










