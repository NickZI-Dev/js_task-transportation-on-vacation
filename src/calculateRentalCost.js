/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const baseValue = 40;
  const longTerm = 7;
  const longTermDiscount = 50;
  const lowTerm = 3;
  const lowTermDiscount = 20;

  if (days >= longTerm) {
    return days * baseValue - longTermDiscount;
  }

  if (days >= lowTerm) {
    return days * baseValue - lowTermDiscount;
  }

  return days * baseValue;
}

module.exports = calculateRentalCost;
