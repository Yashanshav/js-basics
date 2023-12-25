// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = "yash"
tinderUser.lastLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com", 
    fullname: {
        userfullname: {
            firsName: "yash", 
            lastName: "rajpurohit"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firsName)

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'a', 4: 'b'}

const obj3 = {obj1, obj2}
// console.log(obj3) //Output: { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

const obj4 = Object.assign({}, obj1, obj2) // target and source
// console.log(obj4); //Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = {...obj1, ...obj2};
// console.log(obj5); //Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    {
        name: 'yash',
        age: 23
    },
    {
        name: 'ayush',
        age: 22
    },
    {
        name: 'aditya',
        age: 21
    },
]

// console.log(users[1]['name']);
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // returns array of keys
// console.log(Object.values(tinderUser)) // returns array of values
// console.log(Object.entries(tinderUser)) // returns [key, value] array of array

// console.log(tinderUser.hasOwnProperty("nameOf"))

//************************************** destructing ********************************************


const course = {
    courseName: "js in hindi", 
    price: 999,
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course
console.log(instructor)
