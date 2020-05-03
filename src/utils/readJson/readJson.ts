import fs from 'fs'


interface IErrorOrData {
  errorMessage: string | undefined
  data: unknown | undefined
}


const readJson = (filename: string): IErrorOrData => {
  if (filename === '') {
    return {
      data: undefined,
      errorMessage: 'no filename provided',
    }
  }

  if (!fs.existsSync(filename)) {
    return {
      data: undefined,
      errorMessage: `file "${filename}" does not exists`,
    }
  }

  if (!fs.lstatSync(filename).isFile()) {
    return {
      data: undefined,
      errorMessage: `"${filename}" is not a file`,
    }
  }

  try {
    const file = fs.readFileSync(filename, 'utf8')
    return {
      data: JSON.parse(file),
      errorMessage: undefined,
    }
  } catch(e) {
    if (e instanceof SyntaxError) {
      return {
        data: undefined,
        errorMessage: `file "${filename}" is not formatted correctly.`,
      }
    }

    return {
      data: undefined,
      errorMessage: `failed to read file "${filename}"`,
    }
  }
}


export default readJson
