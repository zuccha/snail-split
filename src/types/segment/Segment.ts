import * as Time from '../time'


interface Segment {
  name: string
  currentAbsoluteTime: Time.Time
  pbAbsoluteTime: Time.Time
  wrAbsoluteTime: Time.Time
  goldRelativeTime: Time.Time
}


export default Segment
