import { ITime } from '../time'


interface ISegment {
  name: string
  timeLastRelative: ITime
  timeBestRelative: ITime
  timeGoldRelative: ITime
}


export default ISegment
