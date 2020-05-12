import fs from 'fs'
import { IEitherErrorOr } from '../either-error-or'
import Game from './Game'


const save = (
  game: Game,
  filename: string,
): IEitherErrorOr<undefined> => {
  try {
    const gameOutput = {
      title: game.title,
      category: game.category,
      segments: game.segments,
      status: game.status === 'ongoing' ? 'pending' : game.status,
    }
    const gameJson = JSON.stringify(gameOutput, null, 2)
    fs.writeFileSync(filename, gameJson)
    return { data: undefined }
  } catch (e) {
    return { error: `failed to save file ${filename}` }
  }
}


export default save
