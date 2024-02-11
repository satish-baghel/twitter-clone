import moment from "moment"

export const DateWithLLFormat = (date) => {
  return moment(date).format("LL")
}
