import { IActionConfig, CONFIG_LOAD } from '../types'


const createActionConfigLoad = (maybeConfig: unknown): IActionConfig => ({
  type: CONFIG_LOAD,
  payload: maybeConfig,
})


export default createActionConfigLoad
