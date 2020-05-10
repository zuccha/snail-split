import { IActionGame, GAME_SAVE } from '../types'


const createActionGameSave = (filename: string): IActionGame => ({
  type: GAME_SAVE,
  payload: filename,
})


export default createActionGameSave
