import { IActionGame, GAME_LOAD } from '../types'


const createActionGameReset = (filename: string): IActionGame => ({
  type: GAME_LOAD,
  payload: filename,
})


export default createActionGameReset
