import { SAVEFILE_LOAD, ActionSavefile } from '../types'


const reduceSavefile = (
  savefile = '',
  action: ActionSavefile,
): string => {
  switch (action.type) {
  case SAVEFILE_LOAD:
    return action.payload
  default:
    return savefile
  }
}


export default reduceSavefile
