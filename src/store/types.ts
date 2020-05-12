import * as Config from '../types/config'
import * as Game from '../types/game'
import * as Snackbar from '../types/snackbar'


interface IStateRoot {
  config: Config.Config
  game: Game.Game
  snackbar: Snackbar.Snackbar
}


export { IStateRoot }
