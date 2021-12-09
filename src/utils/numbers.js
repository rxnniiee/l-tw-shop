const formatAsCurrency = (
  input,
  {
    locale = 'et',
    minimumFractionDigits = 2,
    maximumFractionDigits = 2,
    currency = 'EUR',
  } = {}
) => {
  return Number(input).toLocaleString(locale, {
    minimumFractionDigits,
    maximumFractionDigits,
    currency,
    style: 'currency',
  })
}

module.exports = {
  formatAsCurrency,
}
