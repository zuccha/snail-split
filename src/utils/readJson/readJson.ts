import fs from 'fs'
import { EitherErrorOr } from '../../types/either-error-or'
import when from '../when'


const readJson = (filename: string): EitherErrorOr<unknown> => {
  if (filename === '') {
    return { error: 'no filename provided' }
  }

  if (!fs.existsSync(filename)) {
    return { error: `file "${filename}" does not exists` }
  }

  if (!fs.lstatSync(filename).isFile()) {
    return { error: `"${filename}" is not a file` }
  }

  try {
    const file = fs.readFileSync(filename, 'utf8')
    return { data: JSON.parse(file) }
  } catch(e) {
    return {
      error: when([
        [e instanceof SyntaxError, () => `file "${filename}" is not formatted correctly.`],
      ], `failed to read file "${filename}"`),
    }
  }
}


export default readJson
