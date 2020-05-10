import { IConfig, defaultConfig } from '../../../types/config'
import { CONFIG_LOAD, IActionConfig } from '../types'
import reduceConfigLoad from './reduceConfigLoad'


const reduceConfig = (
  config: IConfig = defaultConfig,
  action: IActionConfig,
): IConfig => {
  switch (action.type) {
  case CONFIG_LOAD:
    return reduceConfigLoad(config, action)
  default:
    return config
  }
}


export default reduceConfig
