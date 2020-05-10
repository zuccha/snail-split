import { IGame, validateGame } from '../../../types/game'
import readJson from '../../../utils/readJson'
import { IActionGameLoad } from '../types'


const reduceGameLoad = (
  game: IGame,
  action: IActionGameLoad,
): IGame => {
  const filename = action.payload
  const json = readJson(filename)

  if (json.errorMessage !== undefined) {
    console.error(`Failed to load game: ${json.errorMessage}.`)
    process.exit(1)
  }

  return validateGame(json.data)
}


export default reduceGameLoad
