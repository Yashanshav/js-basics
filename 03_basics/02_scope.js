

if(true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a) //throw error
// console.log(b) //throw error
// console.log(c) //prints 30

let a = 300;
// console.log(a); // 300


function one() {
    const username = "yash"

    function two() {
        const website = "youtube"
        console.log(username) //executes at last
    }
    // console.log(website) // throw error
    two() //executes after above line is commented
}

// one() // executes first

if(true) {
    const username = "yash"
    if(username === 'yash') {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website) // throw error
}
// console.log(username) // throw error


// ******************************* Interesting ************************************************

console.log(addOne(5)) // Output: 6

function addOne(num) {
    return num + 1;
}

// console.log(addTwo(5)) // throws error (because it is declared as a variable)

const addTwo = function(num) {
    return num + 1;
}