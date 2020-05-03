import { IEitherErrorOr } from '../types/either-error-or'
import { IGame } from '../types/game'


interface IStateRoot {
  game: IEitherErrorOr<IGame>
}


export { IStateRoot }
