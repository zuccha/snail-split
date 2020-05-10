import { IConfig, validateConfig } from '../../../types/config'
import readJson from '../../../utils/readJson'
import { IActionConfigLoad } from '../types'


const reduceConfigLoad = (
  config: IConfig,
  action: IActionConfigLoad,
): IConfig => {
  const filename = action.payload
  const json = readJson(filename)

  if (json.errorMessage !== undefined) {
    console.error(`Failed to load config: ${json.errorMessage}.`)
    process.exit(1)
  }

  return validateConfig(json.data)
}


export default reduceConfigLoad
