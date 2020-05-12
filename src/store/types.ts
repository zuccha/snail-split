import { IConfig } from '../types/config'
import { IGame } from '../types/game'
import * as Snackbar from '../types/snackbar'


interface IStateRoot {
  config: IConfig
  game: IGame
  snackbar: Snackbar.Snackbar
}


export { IStateRoot }
