interface IFormatNumberOptions {
  digitsMin: number
}


const defaultOptions = {
  digitsMin: 0,
}

const formatNumber = (
  number: number,
  { digitsMin }: IFormatNumberOptions = defaultOptions,
) => {
  let formattedNumber = `${Math.abs(number)}`
  while (formattedNumber.length < digitsMin) {
    formattedNumber = `0${formattedNumber}`
  }

  return number < 0
    ? `-${formattedNumber}`
    : formattedNumber
}


export default formatNumber
