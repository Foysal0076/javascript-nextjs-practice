/**
 * Find sum of n numbers using recursion
 */

// First find the base cases. To successfully implement recursive strategy we must determine the base cases first
/*
 * To find the sum of n=5 our method will be getting the result of 1+1+1+1+1.
 * We see that every-time we are adding 1 to the result.
 */

const findSum = (n) => {
  if (n === 1) {
    return 1
  } else {
    return 1 + findSum(n - 1)
  }
}

console.log(findSum(5))


/*
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb
 * to the top?
 */

const climbStairs = ()=>{

}


const printNumbers = (n) => {
  if (n === 1) {
    return 1
  } else {
    return 1 + findSum(n - 1)
  }
}
