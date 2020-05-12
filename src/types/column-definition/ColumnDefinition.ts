import * as TimeCategory from '../time-category'
import * as TimeFrame from '../time-frame'


interface ColumnDefinitionDelta {
  type: 'delta'
  title: string
  leftTimeCategory: TimeCategory.TimeCategory
  rightTimeCategory: TimeCategory.TimeCategory
  timeFrame: TimeFrame.TimeFrame
}

interface ColumnDefinitionTime {
  type: 'time'
  title: string
  timeCategory: TimeCategory.TimeCategory
  timeFrame: TimeFrame.TimeFrame
}

type ColumnDefinition = ColumnDefinitionDelta | ColumnDefinitionTime


export default ColumnDefinition

export {
  ColumnDefinitionDelta,
  ColumnDefinitionTime,
}
