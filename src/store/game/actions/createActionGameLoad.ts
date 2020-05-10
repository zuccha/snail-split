import { IActionGame, GAME_LOAD } from '../types'


const createActionGameLoad = (filename: string): IActionGame => ({
  type: GAME_LOAD,
  payload: filename,
})


export default createActionGameLoad
