let score = 400;
console.log(score);

let balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);

const othernumber = 23.9980;
console.log(othernumber.toPrecision(3));

let humdereds = 1000000;
console.log(humdereds.toLocaleString('en-INDIAN'));

// ***********************MATH*******************//
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.round(4.9));


console.log(Math.random());
console.log((Math.random() * 10) + 1);
let min = 10;
let max = 20;
Math.random()*(max-min+1)+min
