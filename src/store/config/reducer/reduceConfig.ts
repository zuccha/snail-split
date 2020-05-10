import { IConfig, defaultConfig } from '../../../types/config'
import { CONFIG_LOAD, IActionConfig } from '../types'


const reduceConfig = (
  config: IConfig = defaultConfig,
  action: IActionConfig,
): IConfig => {
  switch (action.type) {
  case CONFIG_LOAD:
    return action.payload
  default:
    return config
  }
}


export default reduceConfig
