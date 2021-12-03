let clientName = 'John'

function printMyName() {
    console.log(clientName)
}

//prints John, because whole javascript file is a big closure and every function has the access
// to the latest variable until it is invoked
printMyName()

clientName = 'Joey'

printMyName() //prints Joey, because constantly goes with the most recent value of any variable thats being called or used inside function

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer variable:', outerVariable)
        console.log('Inner variable:', innerVariable)
    }
}
const newFunction = outerFunction('Outside')
newFunction('Inside')

function testFunction() {
    var a = 45
    console.log(a)
}

var a, b
if (a === b) {
    var a = 4
    let b = 5
    const c = 6
    console.log('true', a)
}
console.log({ a, b, c }) //* c is not defined

//* Codedamn

//* when we execute a function all variables associated to that function are on the stack, as soon
//* as the function finishes executing all associated variables are cleared from the stack
//* Javascript creates closure of any variable that we use  in a function

function counter() {
    let count = 0
    let testUnusedVariable = 45 //* This will not be in the closure because not used in the following function
    return function () {
        debugger
        count++
        console.log('Hey!!', count)
    }
}

let result = counter()
result()
result()
result()

