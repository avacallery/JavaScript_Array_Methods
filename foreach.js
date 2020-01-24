//Foreach                                                                                  `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//Works like a for loop!
//For every single item, it will do whatever is inside of the function. In this case, we print out the names of all of the itmes in our array.

const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]

items.forEach((item) => {
    console.log(item.price);
})
