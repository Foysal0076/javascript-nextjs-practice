// 392. Is Subsequence
/* Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some(can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
*/

const s1 = 'abc'
const t1 = 'ahgbc'
const s2 = 'aaaaaa'
const t2 = 'ahaaaa'
const s3 = 'acb'
const t3 = 'ahbgdc'
const s4 = 'ab'
const t4 = 'baab'

const isSubsequence = (s, t) => {

  const sArray = s.split('')
  const tArray = t.split('')
  let rightArray = [...tArray]
  let isSubset = true
  for (let index = 0; index < sArray.length; index++) {
    console.log(rightArray)

    if (!rightArray.includes(sArray[index])) {
      isSubset = false
    }
    let foundIndex = rightArray.indexOf(sArray[index])
    rightArray = rightArray.slice(foundIndex + 1, tArray.length)
  }
  console.log(isSubset)
  return isSubset
}

isSubsequence(s1, t1)
isSubsequence(s2, t2)
isSubsequence(s3, t3)
isSubsequence(s4, t4)

// let t = [1, 23, 3, 4, 5]
// console.log(t.slice(4, t.length))


