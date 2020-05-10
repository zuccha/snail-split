import { IGame, validateGame } from '../../../types/game'
import { IActionGameLoad } from '../types'


const reduceGameLoad = (
  game: IGame,
  action: IActionGameLoad,
): IGame => {
  return validateGame(action.payload)
}


export default reduceGameLoad
