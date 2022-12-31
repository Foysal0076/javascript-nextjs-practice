
/*
205. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/
const s1 = 'egg'
const t1 = 'add'
const s2 = 'foo'
const t2 = 'bar'
const s3 = 'paper'
const t3 = 'title'
const s4 = 'bamboo'
const t4 = 'purple'
const s5 = 'hurdle'
const t5 = 'purple'

const isIsoMorphic = (s, t) => {
  const mapToString = (inputString) => {
    let indexMapping = {}
    const newString = []
    const inputStringArray = inputString.split("")
    inputStringArray.forEach((element, index) => {
      if (element in indexMapping === false) {
        indexMapping[element] = index
      }
      newString.push(String(indexMapping[element]))
    })
    return newString.join()
  }
  console.log(mapToString(s) === mapToString(t))
  return mapToString(s) === mapToString(t)
}

isIsoMorphic(s1, t1)
isIsoMorphic(s2, t2)
isIsoMorphic(s3, t3)
isIsoMorphic(s4, t4)
isIsoMorphic(s4, t4)