interface IFormatOptions {
  digitsMin?: number
}


const defaultOptions = {
  digitsMin: 0,
}

const format = (
  number: number,
  options: IFormatOptions = defaultOptions,
): string => {
  const {
    digitsMin,
  } = { ...defaultOptions, ...options }

  let formattedNumberAbs = `${Math.abs(number)}`
  while (formattedNumberAbs.length < digitsMin) {
    formattedNumberAbs = `0${formattedNumberAbs}`
  }

  return number < 0
    ? `-${formattedNumberAbs}`
    : formattedNumberAbs
}


export default format
