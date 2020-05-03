import immer from 'immer'
import { IGame } from '../../../types/game'


const reduceGameReset = (
  game: IGame,
): IGame => {
  return immer(game, gameDraft => {
    gameDraft.timerStart = undefined
    gameDraft.segments.forEach(segment => {
      segment.timeLastRelative = undefined
    })
  })
}


export default reduceGameReset
