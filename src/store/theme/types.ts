import * as Theme from '../../types/theme'


const THEME_LOAD  = 'theme/load'

interface IActionThemeLoad {
  type: typeof THEME_LOAD
  payload: Theme.Theme
}

type IActionTheme = IActionThemeLoad


export {
  THEME_LOAD,
  IActionTheme,
  IActionThemeLoad,
}
