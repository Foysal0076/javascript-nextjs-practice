// const esprima = require('esprima')

// const add = `(a, b) => {
//   return a + b
// }`

// console.log(esprima.tokenize(add, { range: true }))
// console.log(esprima.parseScript(add))

console.log(ola)
var ola = 'OLA'

// console.log(ola2)
// let ola2 = 'OLA'

// console.log(ola3)
// const ola3 = 'OLA'

//works fine
print('Hello World')
function print(str) {
  console.log(str)
}

//Does not work fine
// ReferenceError: Cannot access 'print2' before initialization
// print2('Hello World')
// const print2 = (str) => {
//   console.log(str)
// }

//Work fine
const print3 = () => {
  console.log(test1)
}
print3()

var test1 = 'Print something'
print3()

const a = [9, 2]
const b = '9,2'

console.log(String(a))
console.log(b == a)
