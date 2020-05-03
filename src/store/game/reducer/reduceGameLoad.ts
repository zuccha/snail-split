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
    return {
      ...game,
      errorMessage: `Failed to load game: ${json.errorMessage}.`,
    }
  }

  return validateGame(json.data)
}


export default reduceGameLoad
