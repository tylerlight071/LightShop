export function formatPrice(price: number) {
  return (price / 100).toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
  });
}
