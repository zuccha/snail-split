import * as TimeCategory from '../time-category'
import * as TimeFrame from '../time-frame'


interface IColumnDefinitionDelta {
  type: 'delta'
  title: string
  leftTimeCategory: TimeCategory.TimeCategory
  rightTimeCategory: TimeCategory.TimeCategory
  timeFrame: TimeFrame.TimeFrame
}

interface IColumnDefinitionTime {
  type: 'time'
  title: string
  timeCategory: TimeCategory.TimeCategory
  timeFrame: TimeFrame.TimeFrame
}

type IColumnDefinition = IColumnDefinitionDelta | IColumnDefinitionTime


export default IColumnDefinition

export {
  IColumnDefinitionDelta,
  IColumnDefinitionTime,
}
