import { ISegment } from '../segment'
import { ITime } from '../time'


interface IGame {
  title: string
  segments: ISegment[]
  timerStart: ITime
}


export default IGame
