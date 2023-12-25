
const user = {
    username: "yash",
    price: 999,
    
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        console.log(this) // returns user object
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//IMP INTERVIEW QUESTION
// console.log(this) // return {} (in node env, no global object is there, but if you run this in chrome, you will get window)

// function chai() {
//    console.log(this) // now this will return object reference of node
//    const username = "yash"
//    console.log(this.username) // undefined
// }

// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this) // returns {} in arrow function
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo) //[Function: addTwo]
// console.log(addTwo()) //NaN
// console.log(addTwo(3, 4)) //7

const addTwo1 = (num1, num2) => num1 + num2
const addTwo2 = (num1, num2) => (num1 + num2)
const addObject = (num1, num2) => {username: "yash"}
const addObject2 = (num1, num2) => ({username: "yash"})

// console.log(addObject()) //undefined
// console.log(addObject2()) // { username: 'yash' }

