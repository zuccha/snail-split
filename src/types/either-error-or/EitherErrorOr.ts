interface Data<T> {
  data: T
}

interface Error {
  error: string
}

type EitherErrorOr<T> = Error | Data<T>


export default EitherErrorOr

export {
  Data,
  Error,
}
