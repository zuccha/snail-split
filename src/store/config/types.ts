import * as Config from '../../types/config'


const CONFIG_LOAD  = 'config/load'

interface IActionConfigLoad {
  type: typeof CONFIG_LOAD
  payload: Config.Config
}

type IActionConfig = IActionConfigLoad


export {
  CONFIG_LOAD,
  IActionConfig,
  IActionConfigLoad,
}
