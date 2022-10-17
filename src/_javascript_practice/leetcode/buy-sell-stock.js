
/**
 ** 121. Best Time to Buy and Sell Stock
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

const findMaxProfit = (purchasePrice, prices) => {
  if (!prices.length) return 0
  let maxProfit = prices[0] - purchasePrice
  for (let index = 1; index < prices.length; index++) {
    if (maxProfit < prices[index] - purchasePrice) {
      maxProfit = prices[index] - purchasePrice
    }
  }
  return maxProfit
}

const maxProfit = (prices) => {
  let profit = 0
  for (let index = 0; index < prices.length; index++) {
    purchasePrice = prices[index]
    let sellPrices = prices.slice(index + 1, prices.length)
    const maxProfit = findMaxProfit(purchasePrice, sellPrices)
    if (maxProfit > profit) {
      profit = maxProfit
    }
  }
  console.log('Profit:', profit)
  return profit
}

const test1 = [7, 1, 5, 3, 6, 4] //output 5
const test2 = [7, 6, 4, 3, 1] //output 0

maxProfit(test2)

//Best Approach (For long list)
const test3 = [7, 1, 5, 3, 6, 4] //output 5
const test4 = [7, 6, 4, 3, 1] //output 0
const maxProfitFast = (prices) => {
  if (!prices.length) return 0
  let purchasePrice = prices[0]
  let maxProfit = 0
  for (let index = 1; index < prices.length; index++) {
    const profit = Math.max(prices[index] - purchasePrice, 0)
    console.log(purchasePrice, profit, maxProfit)
    if (profit > maxProfit) {
      maxProfit = profit
    } else {
      if(purchasePrice > prices[index]){
        purchasePrice = prices[index]
      }
    }
  }
  console.log('Profit:', maxProfit)
  return maxProfit
}

maxProfitFast(test4)