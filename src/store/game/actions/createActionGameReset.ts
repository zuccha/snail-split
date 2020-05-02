import { IActionGame, GAME_RESET } from '../types'


const createActionGameReset = (): IActionGame => ({
  type: GAME_RESET,
})


export default createActionGameReset
