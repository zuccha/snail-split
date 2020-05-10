import { IActionGame, GAME_LOAD } from '../types'


const createActionGameLoad = (maybeGame: unknown): IActionGame => ({
  type: GAME_LOAD,
  payload: maybeGame,
})


export default createActionGameLoad
