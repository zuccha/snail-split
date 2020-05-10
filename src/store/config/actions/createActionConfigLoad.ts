import { IConfig } from '../../../types/config'
import { IActionConfig, CONFIG_LOAD } from '../types'


const createActionConfigLoad = (config: IConfig): IActionConfig => ({
  type: CONFIG_LOAD,
  payload: config,
})


export default createActionConfigLoad
