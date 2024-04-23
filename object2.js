//const tinderUser = new Object();
const tinderUser ={}
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIN = false;
// console.log(tinderUser);

const regularUser={
    email:"himanshu@gmail.com",
    fullname:{
        userFullname:{
            firatname : "himanshu",
            lastname : "kashyap"
        }
    }
}
//console.log(regularUser.fullname.userFullname.firatname);

const obj1={1:"a",2: "b"}
const obj2={3:"a",4: "b"}
const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

const user = [
    {
        id : 1,
        email : "himanshu@gmail.com"
    },
    {

    },
    {

    },
    {

    },
]
user[1].email;
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

