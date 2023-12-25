
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

console.log(newLoginUserMessage())

function loginUserMessage(username = 'sam') { // giving default value 
    return `${username} is logged in`
}