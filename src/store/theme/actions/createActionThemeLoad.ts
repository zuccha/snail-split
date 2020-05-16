import * as Theme from '../../../types/theme'
import { IActionTheme, THEME_LOAD } from '../types'


const createActionThemeLoad = (theme: Theme.Theme): IActionTheme => ({
  type: THEME_LOAD,
  payload: theme,
})


export default createActionThemeLoad
