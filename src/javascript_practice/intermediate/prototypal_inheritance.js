function Pizza(customerName, type) {
    this.type = type
}

Pizza.prototype.isShopOpen = true

const myPizza = new Pizza('With extra cheese')
const myPizza2 = new Pizza('No cheese')

console.log(myPizza.isShopOpen) //* true

myPizza.isShopOpen = false //* this will change only myPizza object values

console.log(myPizza) //* isShopeOpen: false
console.log(myPizza2) //* isShopeOpen: true inside prototype as we did not do it explicitly

myPizza.__proto__.isShopOpen = false //* this will all object values
console.log(myPizza.isShopOpen) //* isShopeOpen: false inside __proto__
console.log(myPizza2.isShopOpen) //* isShopeOpen: false inside __proto__


function Pizza2(customerName, type) {
    this.type = type
    this.name = customerName
}
//* Utilized to share common methods across the board and save memory wastage without declaring it inside the object
Pizza2.prototype.greet = function () {
    return (this.name + 'how are you doing?')
}

const myPizza3 = new Pizza2('Foysal ', 'Extra cheese')
const myPizza4 = new Pizza2('John ', 'No extra cheese')

console.log(myPizza3.greet())
console.log(myPizza4.greet())


