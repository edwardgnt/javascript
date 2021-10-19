// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;

//     if(a == 2) {
//         resolve('success');
//     } else {
//         reject('Failed');
//     }
// });

// p.then((message) => {
//     console.log(`This is in the then ${message}`);
// }).catch((message) => {
//     console.log(`This is in the catch ${message}`);
// })



// Promise All
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
});

const recordedVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
});

Promise.all([
    recordVideoOne, 
    recordVideoTwo, 
    recordedVideoThree
]).then((messages) => {
    console.log(messages);
});