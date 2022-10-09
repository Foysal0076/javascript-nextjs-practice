/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
*/
const testNums1 = [1, 2, 3, 4]
const testNums2 = [14, 22, 23, 04, -3]
const testNums3 = [11, 22, 33, 44]

const runningSums_n = (nums) => {
  console.time('time_n')

  const resultArray = nums.reduce(
    (acc, cur) => {
      acc.push(acc.reduce((a, b) => a + b, 0))
      return acc
    },
    [nums[0]]
  )
  console.timeEnd('time_n')
  return resultArray
}

// function runningSums_f(nums) {
//   console.time('time_f')

//   let sums = [0]
//   for (let index = 0; index < nums.length; index++) {
//     const currentNum = nums[index]
//     if (sums.length) {
//       sums.push(sums[index - 1] + currentNum)
//     } else {
//       sums.push(currentNum)
//     }
//   }
//   console.timeEnd('time_f')
//   return sums
// }

function runningSums_f(nums) {
  console.time('time_f')

  let sums = [nums[0]]
  for (let index = 1; index < nums.length; index++) {
    sums.push(sums[index - 1] + nums[index])
  }
  console.timeEnd('time_f')
  return sums
}

const generateRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const testForBigArray = (arraySize = 10000) => {
  //create a large array
  const testNums = []
  for (let index = 0; index < arraySize; index++) {
    testNums.push(generateRandomInteger(0, 9999))
  }
  console.log('testnums length', testNums.length)
  //test function times
  const result_f = runningSums_f(testNums)
  const result_n = runningSums_n(testNums)
}

testForBigArray(50000)
