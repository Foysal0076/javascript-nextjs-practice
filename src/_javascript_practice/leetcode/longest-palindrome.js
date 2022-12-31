/**
 ** 409. Longest Palindrome
 * Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
 * Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
 */

const longestPalindrome = (s) => {
  const sArray = s.split('')
  const mapCharacterCount = (s) => {
    let counts = {}
    for (let index = 0; index < sArray.length; index++) {
      if (counts.hasOwnProperty(sArray[index])) {
        counts[sArray[index]] += 1
      } else {
        counts[sArray[index]] = 1
      }
    }
    return counts
  }
  const counts = mapCharacterCount(s)
  let countedSingle = false
  let palindromeLength = 0
  Object.values(counts).forEach((count) => {
    if (!countedSingle && count % 2 !== 0) {
      palindromeLength += 1
      countedSingle = true
    }
    const length = count % 2 === 0 ? count : count - 1
    palindromeLength += length
  })
  console.log(palindromeLength)
  return palindromeLength
}

const test1 = 'a'
longestPalindrome(test1)

const test = {
  d: 0,
  a: 7
}

test['a'] += 1

console.log(test['a'])
