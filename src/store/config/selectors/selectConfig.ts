import { IConfig } from '../../../types/config'
import { IStateRoot } from '../../types'


const selectConfig = (state: IStateRoot): IConfig => {
  return state.config
}


export default selectConfig
