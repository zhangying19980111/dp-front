import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD'

export default function formatUicString(utcString, format = DATE_TIME_FORMAT) {
  return dayjs.utc(utcString).format(format)
}
