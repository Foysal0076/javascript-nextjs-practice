/*
724. Find Pivot Index
Given an array of integers nums, calculate the pivot index of this array.
The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
Return the leftmost pivot index. If no such index exists, return -1.
*/

let test1 = [1, 7, 3, 6, 5, 6]
let test2 = [1, 2, 3]
let test3 = [2, 1, -1]

const pivotIndex = (numbers) => {
  console.time('Time_taken')
  let pivot = -1

  const sum = (nums) => {
    return nums.reduce((prevValue, currentValue) => prevValue + currentValue, 0)
  }

  const checkIfPivot = (leftNumbers, rightNumbers) => {
    const leftSum = sum(leftNumbers)
    const rightSum = sum(rightNumbers)
    return leftSum === rightSum
  }
  for (let index = 0; index < numbers.length; index++) {
    const leftArray = index > 0 ? numbers.slice(0, index) : []
    const rightArray = index < numbers.length - 1 ? numbers.slice(index + 1, numbers.length) : []
    const isPivot = checkIfPivot(leftArray, rightArray, index)
    if (isPivot) {
      pivot = index
      break
    }
  }
  console.timeEnd('Time_taken')
  console.log('Pivot: ', pivot)
  return pivot
}

//Better approach
const pivotIndexBetter = (numbers) => {
  let pivot = -1
  if (numbers.length === 0) pivot = -1
  if (numbers.length === 1) pivot = 0
  const totalSum = numbers.reduce((acc, currentValue) => acc + currentValue)
  let leftSum = 0
  for (let index = 0; index < numbers.length; index++) {
    if (leftSum === totalSum - leftSum - numbers[index]) {
      return index
    }
  }
  console.log('Pivot_Better: ', pivot)
  return pivot
}

pivotIndex(test1)
pivotIndexBetter(test2)
pivotIndex(test3)