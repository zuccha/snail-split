import immer from 'immer'
import { IStateGame } from '../types'


const reduceGameReset = (
  game: IStateGame,
): IStateGame => {
  return immer(game, gameDraft => {
    gameDraft.timerStart = undefined
    gameDraft.segments.forEach(segment => {
      segment.timeLastRelative = undefined
    })
  })
}


export default reduceGameReset
