console.log(myString) //* undefined, only the declaration is hoisted but not the initialization
var myString = 'Foy'

//* Functions are also hoisted, again only the declaration

sayMyName()
function sayMyName() {
    console.log('Foysal!')
}

sayMyNameArrowFunction()  //* sayMyNameArrowFunction is not a function
var sayMyNameArrowFunction = () => {
    console.log('Foysal!')
}

//* let and const are not hoisted


