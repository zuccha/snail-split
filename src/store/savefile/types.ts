const SAVEFILE_LOAD = 'savefile/load'

interface ActionSavefileLoad {
  type: typeof SAVEFILE_LOAD
  payload: string
}

type ActionSavefile = ActionSavefileLoad


export {
  SAVEFILE_LOAD,
  ActionSavefile,
  ActionSavefileLoad,
}
