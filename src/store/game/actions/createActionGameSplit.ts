import { IActionGame, GAME_SPLIT } from '../types'


const createActionGameSplit = (): IActionGame => ({
  type: GAME_SPLIT,
})


export default createActionGameSplit
