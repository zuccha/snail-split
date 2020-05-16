import { IStateRoot } from '../../types'


const selectSavefile = (state: IStateRoot): string => {
  return state.savefile
}


export default selectSavefile
