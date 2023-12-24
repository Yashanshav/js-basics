// Dates

const myDate = new Date()
// console.log(myDate.toLocaleString())
// console.log(myDate.toDateString())
// console.log(typeof myDate)

const createdDate = new Date(2023, 0, 14);
// console.log(createdDate);

let newCreatedDate = new Date("01-14-2023");
// console.log(newCreatedDate.toLocaleString())

let myTime = Date.now()

// console.log(myTime);
// console.log(newCreatedDate.getTime());
// console.log(Math.floor(newCreatedDate.now() / 1000)) //converted to seconds

let newDate = new Date();
// console.log(newDate.getDay());
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getFullYear());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))



