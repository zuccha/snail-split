import * as Config from '../../../types/config'
import { IStateRoot } from '../../types'


const selectConfig = (state: IStateRoot): Config.Config => {
  return state.config
}


export default selectConfig
