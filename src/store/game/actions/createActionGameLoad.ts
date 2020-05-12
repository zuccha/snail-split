import * as Game from '../../../types/game'
import { IActionGame, GAME_LOAD } from '../types'


const createActionGameLoad = (game: Game.Game): IActionGame => ({
  type: GAME_LOAD,
  payload: game,
})


export default createActionGameLoad
