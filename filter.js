//Filter method
//We want to get all the items that are <= 100 
//the filter method returns true or false: if it is true, it will be printed in the new array. if it is false, it will not


const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]

const filteredItems = items.filter((item) => {
    return item.price < 20
})

console.log(filteredItems); 