import immer from 'immer'
import Game from './Game'


const reset = (game: Game): Game => {
  return immer(game, draftGame => {
    draftGame.status = 'initial'
    draftGame.timerStart = undefined
    draftGame.segments.forEach(segment => {
      segment.currentAbsoluteTime = undefined
    })
  })
}


export default reset
