// function which takes an array of prices and discount value, and returns the discounted prices array

function discountPrices(prices, discount) {
  var discounted = [];      // blank array which will hold our discounted values

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount);
    var finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
    console.log(i, discountedPrice, finalPrice);
  }

  console.log('total iterations: ' + i);
  console.log('last discounted price is: ' + discountedPrice);
  console.log('last final price is: ' + finalPrice);

  return discounted;
}

var newResult = discountPrices([100, 200, 300], .5);
console.log('this is our discounted array: ' + '[' + newResult + ']');
