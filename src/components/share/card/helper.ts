export const addCouponAmount = (coupons: { amount: number; id: number }[]) => {
  return coupons.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
};
