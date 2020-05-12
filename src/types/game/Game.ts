import * as Segment from '../segment'
import * as Time from '../time'
import * as GameStatus from '../game-status'


interface Game {
  title: string
  category: string
  segments: Segment.Segment[]
  timerStart: Time.Time
  status: GameStatus.GameStatus
  bestPossibleTime: Time.Time
  sumOfBests: Time.Time
}


export default Game
