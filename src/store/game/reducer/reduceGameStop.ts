import immer from 'immer'
import findLastIndex from '../../../utils/findLastIndex'
import { IGame } from '../../../types/game'


const reduceGameStop = (
  game: IGame,
): IGame => {
  if (game.timerStart === undefined) {
    return game
  }

  const currentSegmentIndex = findLastIndex(
    game.segments,
    segment => segment.timeLastRelative !== undefined,
  )

  if (currentSegmentIndex === -1) {
    return game
  }

  return immer(game, gameDraft => {
    const now = Date.now()
    const elapsedTime = now - game.timerStart!
    gameDraft.segments[currentSegmentIndex].timeLastRelative! += elapsedTime
    gameDraft.timerStart = undefined
  })
}


export default reduceGameStop
