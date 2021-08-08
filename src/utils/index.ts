const dateGenerator = function (years?: number | string, months?: number | string, date?: number | string, hours?: string | number, minutes?: string | number, seconds?: string | number): Date {
  const tempDate = new Date()
  if (years) {
    tempDate.setFullYear(years as number)
  }
  if (months) {
    tempDate.setMonth(months as number)
  }
  if (date) {
    tempDate.setDate(date as number)
  }
  if (hours) {
    tempDate.setHours(hours as number)
  }
  if (minutes) {
    tempDate.setMinutes(minutes as number)
  }
  if (seconds) {
    tempDate.setSeconds(seconds as number)
  }
  return tempDate
}
const dateFormatter = function (date: Date) : string {
  return `${date.getFullYear()}-${date.getMonth().toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
}
export {
  dateGenerator,
  dateFormatter
}
