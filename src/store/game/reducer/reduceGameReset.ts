import immer from 'immer'
import { IActionGame, IStateGame } from '../types'


const reduceGameReset = (
  game: IStateGame,
  action: IActionGame,
): IStateGame => {
  return immer(game, gameDraft => {
    gameDraft.timerStart = undefined
    gameDraft.segments.forEach(segment => {
      segment.timeLastRelative = undefined
    })
  })
}


export default reduceGameReset
