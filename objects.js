// singleton 
// object literals
// Object.create;
const mysym = Symbol("key1");
const JsUser = {
    name: "Himanshu",
    age: 18,
    [mysym] : "mykey1",
    location: "Himachal",
    email: "himanshukashyap@gmail.com",
    isLoggedIN: false,
    lastLoginDays: ["Monday", "Saturday"]
}
consolr.log(JsUser[mysym]);
console.log(JsUser["email"]);


