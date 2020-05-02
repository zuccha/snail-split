import { IActionGame, GAME_TICK } from '../types'


const createActionGameTick = (): IActionGame => ({
  type: GAME_TICK,
})


export default createActionGameTick
