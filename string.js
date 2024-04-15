const name = "himanshu";
const repoCount = 50;
console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const gamename = new String('Himanshu');
console.log(gamename)
console.log(gamename[0]);

console.log(gamename.length);
console.log(gamename.toUpperCase);
console.log(gamename.charAt(2));
console.log(gamename.indexOf('h'));

const newstring = gamename.substring(0,4);
console.log(newstring);

const anotherstring = gamename.slice(0,4);
console.log(anotherstring);

let str1 = "     himanshu";
console.log(str1.trim());