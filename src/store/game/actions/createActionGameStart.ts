import { IActionGame, GAME_START } from '../types'


const createActionGameStart = (): IActionGame => ({
  type: GAME_START,
})


export default createActionGameStart
