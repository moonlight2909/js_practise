const marvel_heros = ["thor","himanshu"];
const dc = ["Superman",'flash'];

// marvel_heros.push(dc);
// console.log(marvel_heros);

 let myarr = marvel_heros.concat(dc);
console.table(myarr);

const all_new_heros = [...marvel_heros,...dc];
console.log(all_new_heros);

 console.log(Array.isArray("Himanshu"));
console.log(Array.from("Himanshu"));

let sc1 = 300;
let sc2 = 400;
let sc3 = 500;
console.log(Array.of(sc1,sc2,sc3));