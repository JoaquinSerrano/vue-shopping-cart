export function truncateTitleProduct(value, number_words) {
  return value
    .split(" ")
    .splice(0, number_words)
    .join(" ");
}

export function truncateDecimals(value, number_decimals) {
  return value.toFixed(number_decimals);
}

export function currency(value, currency) {
  return `${value} ${currency}`;
}
