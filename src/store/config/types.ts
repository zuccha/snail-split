const CONFIG_LOAD  = 'config/load'

interface IActionConfigLoad {
  type: typeof CONFIG_LOAD
  payload: unknown
}

type IActionConfig = IActionConfigLoad


export {
  CONFIG_LOAD,
  IActionConfig,
  IActionConfigLoad,
}
