const fatal = (message: string): never => {
  console.log(message)
  process.exit(1)
}


export default fatal
