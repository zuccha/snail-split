import { IConfig } from '../../types/config'


const CONFIG_LOAD  = 'config/load'

interface IActionConfigLoad {
  type: typeof CONFIG_LOAD
  payload: IConfig
}

type IActionConfig = IActionConfigLoad


export {
  CONFIG_LOAD,
  IActionConfig,
  IActionConfigLoad,
}
