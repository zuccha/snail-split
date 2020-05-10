import fs from 'fs'
import { IEitherErrorOr } from '../either-error-or'
import IGame from './IGame'


const saveGame = (
  game: IGame,
  filename: string,
): IEitherErrorOr<undefined> => {
  try {
    const gameJson = JSON.stringify(game, null, 2)
    fs.writeFileSync(filename, gameJson)
    return { data: undefined }
  } catch (e) {
    return { error: `failed to save file ${filename}` }
  }
}


export default saveGame
