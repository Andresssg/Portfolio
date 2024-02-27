function useDiffDates (startDateStr = '', endDateStr = '') {
  const month = 30 * 24 * 60 * 60 * 1000
  const start = new Date(startDateStr)
  const end = new Date(endDateStr)
  const amountMonths = Math.ceil((end - start) / month)
  const startLocaleDate = start.toLocaleString('default', { year: 'numeric', month: 'short' })
  const endLocaleDate = end.toLocaleString('default', { year: 'numeric', month: 'short' })
  return { startLocaleDate, endLocaleDate, amountMonths }
}

export default useDiffDates
