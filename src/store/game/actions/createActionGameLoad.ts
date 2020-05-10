import { IGame } from '../../../types/game'
import { IActionGame, GAME_LOAD } from '../types'


const createActionGameLoad = (game: IGame): IActionGame => ({
  type: GAME_LOAD,
  payload: game,
})


export default createActionGameLoad
