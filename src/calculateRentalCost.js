/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let discountValue = 0;

  const baseValue = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const lowTerm = 3;
  const lowTermDiscount = 20;

  if (days >= longTerm) {
    discountValue = days * baseValue - longTermDiscount;

    return discountValue;
  }

  if (days >= lowTerm) {
    discountValue = days * baseValue - lowTermDiscount;

    return discountValue;
  }

  discountValue = days * baseValue;

  return discountValue;
}

module.exports = calculateRentalCost;
