//Every
//similar to .some, but instead of checking for the first instance of true, it checks to see if all the items meet the qualifications 

const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 },
]

const hasInexpensiveItems = items.every((item) => {
    return item.price <= 1000
})

console.log(hasInexpensiveItems);
