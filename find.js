//Find 
//allows you to find a single object in an array
//this will return the very first item that matches the parameter that you pass through the .find function that meets the requirements 

const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]

const foundItem = items.find((item) => {
    return item.name === 'Book'
})

console.log(foundItem); 