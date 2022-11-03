const callback = (number) => {
  const result = number > 5 ? 'Ola! I am bigger' : 'Shoot! I am nobody'
  return result
}

const function1 = (a, b, callback) => {
  const sum = a + b
  return callback(sum)
}

const r = function1(2, 1, callback)

console.log(r)


const list = [1, 2, 3, 4]
const s = list.map(function convertToString(item) {
  return String(item)
})
console.log(s)

const list2 = [1, 2, 3, 4]

const customMap = (list, callback) => {
  let result = []
  for (let index = 0; index < list.length; index++) {
    const element = list[index]
    result.push(callback(element))
  }

  return result
}

function convertToString(item, index, array) {
  return item + 10
}
const newR = customMap(list2, convertToString)
console.log(newR)