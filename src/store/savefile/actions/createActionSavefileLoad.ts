import { ActionSavefile, SAVEFILE_LOAD } from '../types'


const createActionSavefileLoad = (savefile: string): ActionSavefile => ({
  type: SAVEFILE_LOAD,
  payload: savefile,
})


export default createActionSavefileLoad
