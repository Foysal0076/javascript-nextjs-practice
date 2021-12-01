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

function testFunction(){
    var a= 45
    console.log(a)
}

var a,b
if(a===b){
    var a=4
    let b=5
    const c=6
    console.log('true',a)
}
console.log({a,b,c}) //* c is not defined
