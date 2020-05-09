import formatNumber from '../../utils/formatNumber'
import when from '../../utils/when'
import ITime from './ITime'


interface IFormatTimeOptions {
  formatEmpty?: string
  formatZero?: string
  formatBelowSecond?: string
  formatBelowMinute?: string
  formatBelowHour?: string
  formatDefault?: string
  showPlus?: boolean
}


const defaultOptions = {
  formatEmpty: '-',
  formatZero: '0.000',
  formatBelowSecond: '0.mmm',
  formatBelowMinute: 'S.mmm',
  formatBelowHour: 'M:SS.mmm',
  formatDefault: 'H:MM:SS.mmm',
  showPlus: false,
}

const findReplaceAndFormat = (
  str: string,
  pattern: string,
  value: number,
): string => {
  const patternMatch = str.match(new RegExp(`${pattern}+`))
  return patternMatch !== null
    ? str.replace(patternMatch[0], formatNumber(value, { digitsMin: patternMatch[0].length }))
    : str
}

const formatTime = (
  time: ITime,
  options: IFormatTimeOptions = defaultOptions,
): string => {
  const {
    formatEmpty,
    formatDefault,
    formatBelowHour,
    formatBelowMinute,
    formatBelowSecond,
    formatZero,
    showPlus,
  } = { ...defaultOptions, ...options }

  if (time === undefined) {
    return formatEmpty
  }

  const timeAbs = Math.abs(time)

  const hours = Math.floor(timeAbs / (1000 * 60 * 60))
  const minutes = Math.floor(timeAbs / (1000 * 60)) % 60
  const seconds = Math.floor(timeAbs / 1000) % 60
  const milliseconds = timeAbs % 1000

  const formattedTime = when([
    [hours > 0, () => {
      const formattedTimeWithHours = findReplaceAndFormat(formatDefault, 'H', hours)
      const formattedTimeWithMinutes = findReplaceAndFormat(formattedTimeWithHours, 'M', minutes)
      const formattedTimeWithSeconds = findReplaceAndFormat(formattedTimeWithMinutes, 'S', seconds)
      const formattedTimeWithMilliseconds = findReplaceAndFormat(formattedTimeWithSeconds, 'm', milliseconds)
      return formattedTimeWithMilliseconds
    }],
    [minutes > 0, () => {
      const formattedTimeWithMinutes = findReplaceAndFormat(formatBelowHour, 'M', minutes)
      const formattedTimeWithSeconds = findReplaceAndFormat(formattedTimeWithMinutes, 'S', seconds)
      const formattedTimeWithMilliseconds = findReplaceAndFormat(formattedTimeWithSeconds, 'm', milliseconds)
      return formattedTimeWithMilliseconds
    }],
    [seconds > 0, () => {
      const formattedTimeWithSeconds = findReplaceAndFormat(formatBelowMinute, 'S', seconds)
      const formattedTimeWithMilliseconds = findReplaceAndFormat(formattedTimeWithSeconds, 'm', milliseconds)
      return formattedTimeWithMilliseconds
    }],
    [milliseconds > 0, () => {
      const formattedTimeWithMilliseconds = findReplaceAndFormat(formatBelowSecond, 'm', milliseconds)
      return formattedTimeWithMilliseconds
    }],
  ], formatZero)

  return when([
    [time < 0, () => `-${formattedTime}`],
    [time > 0 && showPlus, () => `+${formattedTime}`],
  ], formattedTime)
}


export default formatTime
