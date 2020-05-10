import { IConfig, validateConfig } from '../../../types/config'
import { IActionConfigLoad } from '../types'


const reduceConfigLoad = (
  config: IConfig,
  action: IActionConfigLoad,
): IConfig => {
  return validateConfig(action.payload)
}


export default reduceConfigLoad
