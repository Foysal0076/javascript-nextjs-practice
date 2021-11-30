// 'use-strict' //* can be used globally or in code blocks
//* 1.Prevents conversion of this keyword
//* 2. Prevents overwriting of readonly global values

const car = {
    brand: 'Audi',
    color: 'Red'
}

function myFunction() {
    "use strict"
    //this <-
    //* If `this` is null or undefined javascript assign `global`  to it
    //* If `this` value is primitive => object type of that value
    //* "use strict" prevent all of these
    console.log(this)
}
// myFunction() //* global not in strict

myFunction.call('astring')

function myFunction2() {
    'use strict'
    return this
}

function myFunction3() {
    return this
}
console.log(myFunction2.call('1') === myFunction3.call('1')) //* false because 1st one return object
console.log(typeof (myFunction2.call('1'))) //* string type
console.log(typeof (myFunction3.call('1'))) //* object type


function myFunction4() {
    'use strict'
    myVar = 100
    console.log(myVar)
}

myFunction4() //* Reference error; myVar is not defined

function myFunction5() {
    myVar2 = 100
    console.log(myVar2)
}
myFunction5() //* 100


function myFunction6() {
    this.myVar3 = 100
}

var myObj2 = new myFunction6() //*
console.log(myObj2) //* myFunction6 { myVar3: 100 }

function myFunction7() {
    "use strict"
    this.myVar3 = 100
}

var myObj3 = myFunction7()
console.log(myObj3) //* TypeError: Cannot set properties of undefined (setting 'myVar3')
