import immer from 'immer'
import { IGame } from '../../../types/game'
import findLastIndex from '../../../utils/findLastIndex'


const reduceGameTick = (
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
    gameDraft.timerStart = now
  })
}


export default reduceGameTick
