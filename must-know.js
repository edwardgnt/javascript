// var myArray = ['a', 'b', 'c,', 'd'];

// Add to end of array
// myArray.push("end");

// Add to beginning of array
// myArray.unshift("start");



// ES6
// Add to the beginning of array
// myArray = [start, ...myArray];

// Add to end of array
// myArray = [...myArray, "end"];

// Add to beginning and end of array
// myArray = ["start", ...myArray, "end"];



// Create a private variable
// function secretVariable() {
//     var private = "super secret code";

//     return function() {
//         return private;
//     }
// }

// var getPrivateVariable = secretVariable();
// console.log(getPrivateVariable());


// What is the output
// var num = 4;

// function outer() {
//     var num = 2;
    
//     function inner() {
//         num++;
//         var num = 3;
//         console.log(num);
//     }
//     inner();
    
// }
// outer();


// What will this return?

// console.log(typeof typeof 1);


// What is the output
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function() {
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());
