import { IActionGame, GAME_STOP } from '../types'


const createActionGameStop = (): IActionGame => ({
  type: GAME_STOP,
})


export default createActionGameStop
