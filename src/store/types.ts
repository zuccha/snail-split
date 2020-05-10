import { IConfig } from '../types/config'
import { IGame } from '../types/game'
import { ISnackbar } from '../types/snackbar'


interface IStateRoot {
  config: IConfig
  game: IGame
  snackbar: ISnackbar
}


export { IStateRoot }
