const bold = '\u001b[1m'
const red = '\u001b[31m'
const yellow = '\u001b[33m'
const blue = '\u001b[34m'
const reset = '\u001b[0m'

const logger = {
  info: (...args: string[]): void => {
    console.log(`${bold}${blue}Info ${reset}`, ...args)
  },
  warning: (...args: string[]): void => {
    console.log(`${bold}${yellow}Warning${reset}`, ...args)
  },
  error: (...args: string[]): void => {
    console.log(`${bold}${red}Error ${reset}`, ...args)
  },
  fatal: (...args: string[]): void => {
    console.log(`${bold}${red}Error ${reset}`, ...args)
    process.exit(0)
  },
}


export default logger
