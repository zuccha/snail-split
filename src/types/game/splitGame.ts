import immer from 'immer'
import findLastIndex from '../../utils/findLastIndex'
import IGame from './IGame'


const splitGame = (game: IGame): IGame => {
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
    const currentSegmentDraft = gameDraft.segments[currentSegmentIndex]!

      // Update time.
      currentSegmentDraft.timeLastRelative! += elapsedTime

      // Update gold if last split was better.
      if (
        currentSegmentDraft.timeGoldRelative === undefined ||
        currentSegmentDraft.timeLastRelative! < currentSegmentDraft.timeGoldRelative
      ) {
        currentSegmentDraft.timeGoldRelative = currentSegmentDraft.timeLastRelative
      }

      // Is last segment, game is over.
      if (currentSegmentIndex === gameDraft.segments.length - 1) {
        gameDraft.timerStart = undefined
        // Update best if last game was better.
        if (
          currentSegmentDraft.timeBestRelative === undefined ||
          currentSegmentDraft.timeLastRelative! < currentSegmentDraft.timeBestRelative
        ) {
          gameDraft.segments.forEach(segment => {
            segment.timeBestRelative = segment.timeLastRelative
          })
        }
      }
      // Is not last segment, keep the timer going and set next segment as current.
      else {
        gameDraft.timerStart = now
        gameDraft.segments[currentSegmentIndex + 1].timeLastRelative = 0
      }
  })
}


export default splitGame
