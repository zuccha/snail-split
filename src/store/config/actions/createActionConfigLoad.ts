import { IActionConfig, CONFIG_LOAD } from '../types'


const createActionConfigLoad = (filename: string): IActionConfig => ({
  type: CONFIG_LOAD,
  payload: filename,
})


export default createActionConfigLoad
