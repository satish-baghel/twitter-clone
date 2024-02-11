export const getDaysInMonth = (month, year = 2024) => {
  const lastDay = new Date(year, Number(month), 0).getDate()

  return [{ label: "", value: "", disabled: true }].concat(
    Array.from({ length: lastDay }, (_, index) => ({
      label: index + 1,
      value: index + 1,
    }))
  )
}

export const getAllYear = (day, month, startYear = 1900, endYear) => {
  // debugger
  let years = [
    {
      label: "",
      value: "",
      disabled: true,
    },
  ]
  if (!endYear) {
    endYear = new Date().getFullYear()
  }
  if (Number(day) === 29 && Number(month) === 2) {
    years = years.concat(generateLeapYears(startYear, endYear))
  } else {
    years = years.concat(generateYears(startYear, endYear))
  }

  return years
}

function generateLeapYears(startYear, endYear) {
  const leapYears = []

  for (let year = endYear; year >= startYear; year--) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push({
        label: year,
        value: year,
      })
    }
  }

  return leapYears
}
function generateYears(startYear, endYear) {
  const leapYears = []

  for (let year = endYear; year >= startYear; year--) {
    leapYears.push({
      label: year,
      value: year,
    })
  }

  return leapYears
}
