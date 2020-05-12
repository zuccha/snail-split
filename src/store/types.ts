import { IConfig } from '../types/config'
import * as Game from '../types/game'
import * as Snackbar from '../types/snackbar'


interface IStateRoot {
  config: IConfig
  game: Game.Game
  snackbar: Snackbar.Snackbar
}


export { IStateRoot }
