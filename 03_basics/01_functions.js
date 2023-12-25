
function sayMyName() {
    console.log("Y")
    console.log("A")
    console.log("S")
    console.log("H")
}

//sayMyName()

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}

// addTwoNumbers() // NaN
// addTwoNumbers(3, 4) // 7
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, null) // 3
// addTwoNumbers(3, {name: "yash"}) // 3[object Object]

// const result = addTwoNumbers(3, 5)
// console.log(result) // undefined (as no return statement was there)

function loginUserMessage(username) {
    return `${username} is logged in`
}

// loginUserMessage("yash") //terminal will have nothing, as nothing is printed
// console.log(loginUserMessage("yash")) // yash is logged in
// console.log(loginUserMessage()) // undefined is logged in

function newLoginUserMessage(username) {
    if(!username) {
        console.log("Please enter a valid username")
        return
    }
    return `${username} is logged in` 
}

// console.log(newLoginUserMessage())

function loginUserMessage(username = 'sam') { // giving default value 
    return `${username} is logged in`
}

function calculateCartPrice(num1) {
    return num1
}

// console.log(calculateCartPrice(100, 200)) //Output: 100

function ccp2(...num1) { // Now this is rest operator
    return num1
}

// console.log(ccp2(100, 200, 300, 400)) //Output: [ 100, 200, 300, 400 ]

function ccp3(val1, val2, ...num1) {
    return num1
}

// console.log(ccp3(100, 200, 300, 400)) //Output: [ 300, 400 ] (as we return num1 only)

const user = {
    name: "yash",
    price: 199
}

const user2 = {
    name: "yash",
    prices: 199
}

function handleObject(anyObject) {
    console.log(`My name is ${anyObject.name} and the price is ${anyObject.price}`)
}

// handleObject() //throws error as object is needed
// handleObject(user) //Output: My name is yash and the price is 199
// handleObject(user2) //Output: My name is yash and the price is undefined

handleObject({
    name: "sam",
    price: 399
}) 

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)); //Output: 400
console.log(returnSecondValue([200, 400, 500, 1000])); // Output: 400