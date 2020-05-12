import * as Config from '../../../types/config'
import { IActionConfig, CONFIG_LOAD } from '../types'


const createActionConfigLoad = (config: Config.Config): IActionConfig => ({
  type: CONFIG_LOAD,
  payload: config,
})


export default createActionConfigLoad
