import { ISegment } from '../segment'
import { ITime } from '../time'


interface IGame {
  errorMessage: string | undefined

  title: string
  segments: ISegment[]
  timerStart: ITime
}


export default IGame
