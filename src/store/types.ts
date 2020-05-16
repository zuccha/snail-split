import * as Config from '../types/config'
import * as Game from '../types/game'
import * as Snackbar from '../types/snackbar'
import * as Theme from '../types/theme'


interface IStateRoot {
  config: Config.Config
  game: Game.Game
  savefile: string
  snackbar: Snackbar.Snackbar
  theme: Theme.Theme
}


export { IStateRoot }
