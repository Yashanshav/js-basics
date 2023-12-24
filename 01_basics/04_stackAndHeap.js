// Stack(Primitive) [We get a copy], Heap(Non - primitive) [We get reference]

let myName = "yash";
let anotherName = myName;
anotherName = "javascript";

console.log(myName);
console.log(anotherName);


let userOne = {
    name: "yash",
    upi: "yash@ybl"
}

let userTwo = userOne;

userTwo.name = "yashanshav";

console.log(userOne.name);
console.log(userTwo.name);