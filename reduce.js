//Reduce
//runs on every single item in the array - accumulative 
//Doing some operation on the array and returning a combination of those operations
//Example: total price of everything on the array 


//the syntax takes the item you're passing through, and a property for what you want to reduce everything into (currentTotal). the second parameter, 0, is the starting point. 

const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)

console.log(total);
