interface IFormatNumberOptions {
  digitsMin?: number
}


const defaultOptions = {
  digitsMin: 0,
}

const formatNumber = (
  number: number,
  options: IFormatNumberOptions = defaultOptions,
) => {
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


export default formatNumber
