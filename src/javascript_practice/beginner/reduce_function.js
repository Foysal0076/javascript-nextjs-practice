//* A reducer function takes a reducer function
const myArr = [1, 2, 3, 4, 4, 5, 6, 7, 7, 7, 8]

const sum = (prevValue, currentValue) => prevValue + currentValue //* reducer function
const sumOfMyArr = myArr.reduce(sum)
console.log(sumOfMyArr)
