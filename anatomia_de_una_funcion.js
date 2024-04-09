function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWhitDiscount = price -discount
    return priceWhitDiscount
}
const originalPrices = 100
const discountPercentage = 20
const finalPrice = calculateDiscountedPrice(originalPrices, discountPercentage)
 
console.log('original price: $' + originalPrices)
console.log('discount:' +discountPercentage + '%')
console.log('Price with discount: $' + finalPrice)