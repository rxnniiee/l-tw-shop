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
  })
}

module.exports = {
  formatAsCurrency,
}
