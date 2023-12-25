//singleton

//object literal

const mySym = Symbol("Key1");

const JsUser = {
    name: "Yash",
    "full name": "Yashanshav Raj Purohit",
    age: 23, 
    city: "Jaipur",
    lastLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday'],
}

// console.log(JsUser.name); // Output: Yash
// console.log(JsUser[name]); // Output: error is thrown
// console.log(JsUser["name"]); // Output: Yash (most preferred way to access)
// console.log(JsUser["full name"]); // can only be declared like that

const nonSym = {
    mySym : "newKey"
}
const sym =  {
    [mySym]: "newKey" //Syntax to use a symbol in object
}

// console.log(nonSym); //Output: { mySym: 'newKey' }
// console.log(sym); //Output: { [Symbol(Key1)]: 'newKey' }

JsUser.email = "yash@google.com"
// console.log(JsUser.email); //Output: yash@google.com

// Object.freeze(JsUser); // no further changes can be made to the object

JsUser.email = "yash@chatgpt.com"
// console.log(JsUser.email) //Output: yash@google.com

JsUser.greeting = function() {
    console.log("Hello JS User");
}

// console.log(JsUser.greeting) //Output: [Function (anonymous)] (We have got the reference of the function but the function is not executed yet)

console.log(JsUser.greeting())
// Output:    Hello JS User
//            undefined (Will be told in next lectures)


