import * as Theme from '../../../types/theme'
import { IStateRoot } from '../../types'


const selectTheme = (state: IStateRoot): Theme.Theme => {
  return state.theme
}


export default selectTheme
