import formatNumber from '../formatNumber'


const formatTime = (time: number): string => {
  const timeAbs = Math.abs(time)

  const hours = Math.floor(timeAbs / (1000 * 60 * 60))
  const minutes = Math.floor(timeAbs / (1000 * 60)) % 60
  const seconds = Math.floor(timeAbs / 1000) % 60
  const milliseconds = timeAbs % 1000

  if (hours > 0) {
    const hoursStr = formatNumber(hours)
    const minutesStr = formatNumber(minutes, { digitsMin: 2 })
    const secondsStr = formatNumber(seconds, { digitsMin: 2 })
    const millisecondsStr = formatNumber(milliseconds, { digitsMin: 3 })
    const timeAbsStr = `${hoursStr}:${minutesStr}:${secondsStr}.${millisecondsStr}`
    return time < 0
      ? `-${timeAbsStr}`
      : timeAbsStr
  }

  if (minutes > 0) {
    const minutesStr = formatNumber(minutes)
    const secondsStr = formatNumber(seconds, { digitsMin: 2 })
    const millisecondsStr = formatNumber(milliseconds, { digitsMin: 3 })
    const timeAbsStr = `${minutesStr}:${secondsStr}.${millisecondsStr}`
    return time < 0
      ? `-${timeAbsStr}`
      : timeAbsStr
  }

  const secondsStr = formatNumber(seconds)
  const millisecondsStr = formatNumber(milliseconds, { digitsMin: 3 })
  const timeAbsStr = `${secondsStr}.${millisecondsStr}`
  return time < 0
      ? `-${timeAbsStr}`
      : timeAbsStr
}


export default formatTime
