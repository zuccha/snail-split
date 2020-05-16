import * as Theme from '../../../types/theme'
import { THEME_LOAD, IActionTheme } from '../types'


const reduceTheme = (
  theme: Theme.Theme = Theme.defaultTheme,
  action: IActionTheme,
): Theme.Theme => {
  switch (action.type) {
  case THEME_LOAD:
    return action.payload
  default:
    return theme
  }
}


export default reduceTheme
