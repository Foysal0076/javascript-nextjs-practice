const obj = {
    arrowFunction: () => {
        console.log(this == global)
        return this
    }
}

//* Arrow functions are not hoisted, Normal functions are hoisted
//* `this` in arrow functions are bind to its parent this

console.log(arrowFunction2()) //* Reference Error , Cannot access before initialization, because const variables are not hoisted

const arrowFunction2 = () => {
    console.log(this == global)
    return this
}

//* var declaration is hoisted but not the initialization

console.log(arrowFunction3) //* undefined because var variables are hoisted (at declaration) but arrow functions are not

var arrowFunction3 = () => {
    console.log(this == global)
    return this
}

// const myObjFunction = new arrowFunction3() //* Cannot do this , because arrow function has not any constructor

console.log(normalFunction4) //* [Function: normalFunction4] because normal functions are hoisted

function normalFunction4() {
    console.log(this == global)
    // return this
}

const test1 = obj.arrowFunction
// test1()

// obj.arrowFunction()

console.log(test1())
console.log(obj.arrowFunction())

function car() {
    this.fuel = 0
    console.log(this)
    this.refuel = function () {
        const _this = this
        setTimeout(function () {
            console.log(this)
            this.refuel += 100
            console.log(`Refuelled! Current fuel is ${this.fuel}`) //* Refuelled! Current fuel is undefined,
            //* undefined because after 1 second this function is called independently so the context is different
            //* One workaround is to bind `this`
            _this.refuel += 100
            console.log(`Refuelled! Current fuel is ${_this.fuel}`) //* Refuelled! Current fuel is undefined,

        }, 1000)
    }
}
const bugatti = new car()
bugatti.refuel()

//* Workaround
// function car1() {
//     this.fuel = 0
//     this.refuel = function () {
//         const _this = this
//         setTimeout(function () {
//             _this.fuel += 100
//             console.log(`Refuelled! Current fuel is ${_this.fuel}`) //* Refuelled! Current fuel is 100,
//         }, 1000)
//     }
// }
function car1() {
    this.fuel = 0
    this.refuel = function () {
        const _this = this
        setTimeout(() => {
            this.fuel += 100
            console.log(`Refuelled! Current fuel is ${this.fuel}`) //* Refuelled! Current fuel is 100,
        }, 1000)
    }
}

const audi = new car1()
audi.refuel()