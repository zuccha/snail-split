import fs from 'fs'
import { IGame } from '../../../types/game'
import { IActionGameSave } from '../types'


const reduceGameSave = (
  game: IGame,
  action: IActionGameSave,
): IGame => {
  const filename = action.payload
  const file = JSON.stringify(game, null, 2)

  fs.writeFileSync(filename, file)

  return game
}


export default reduceGameSave
