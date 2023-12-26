const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`)
//     // Output: 
//     // acc: 0 and currVal: 1
//     // acc: 1 and currVal: 2
//     // acc: 3 and currVal: 3
//     return acc + currVal
// }, 0) //intitla acc value

// console.log(myTotal) //6

const myTotal2 = myNums.reduce( (acc, currVal) => acc + currVal, 0)
console.log(myTotal2) //6

const shoppingCart = [
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "web dev course",
        price: 1999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)
console.log(priceToPay); //20997
