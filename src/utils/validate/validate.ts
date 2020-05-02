type IType =
  'undefined'
  | 'null'
  | 'boolean'
  | 'number'
  | 'string'
  | 'array'
  | 'object'


const validate = (types: IType[]) => <T>(value: unknown, defaultValue: T): T => {
  return (
    (types.includes('undefined') && value === undefined)
    || (types.includes('null') && value === null)
    || (types.includes('boolean') && typeof value === 'boolean')
    || (types.includes('number') && typeof value === 'number')
    || (types.includes('string') && typeof value === 'string')
    || (types.includes('array') && Array.isArray(value))
    || (types.includes('object') && typeof value === 'object')
  )
    ? value as unknown as T
    : defaultValue
}

const validateArray:  <T>(value: unknown, defaultValue: T[])       => T[]       = validate(['array'])
const validateBoolean:   (value: unknown, defaultValue: boolean)   => boolean   = validate(['boolean'])
const validateNull:      (value: unknown, defaultValue: null)      => null      = validate(['null'])
const validateNumber:    (value: unknown, defaultValue: number)    => number    = validate(['number'])
const validateObject: <T>(value: unknown, defaultValue: T)         => T         = validate(['object'])
const validateString:    (value: unknown, defaultValue: string)    => string    = validate(['string'])
const validateUndefined: (value: unknown, defaultValue: undefined) => undefined = validate(['undefined'])


export default validate

export {
  validateArray,
  validateBoolean,
  validateNull,
  validateNumber,
  validateObject,
  validateString,
  validateUndefined,
}
