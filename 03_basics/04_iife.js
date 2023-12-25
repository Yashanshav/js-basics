// Immediately Invoked Function Expression (IIFE)

// Why we use IIFE
// Avoid polluting the global namespace

// Because our application could include many functions and global variables from different source files, 
// it's important to limit the number of global variables. If we have some initiation code that we don't 
// need to use again, we could use the IIFE pattern.





// (function chai() { //Named IIFE
//     console.log(`DB Connected`)
// })() 
// chai()


// (function chai2() {
//     console.log(`DB Connected 2`)
// })() //executes now


(
    (name) => {
        console.log(`this is iife with ${name}`)
    }
)("yash"); // Next function will only execute if we use ";" here, as it needs to know when to stop execution for this iife

(function namedIIFE() {
    console.log("this is named iife")
})()
