import * as Config from '../../../types/config'
import { CONFIG_LOAD, IActionConfig } from '../types'


const reduceConfig = (
  config: Config.Config = Config.defaultConfig,
  action: IActionConfig,
): Config.Config => {
  switch (action.type) {
  case CONFIG_LOAD:
    return action.payload
  default:
    return config
  }
}


export default reduceConfig
