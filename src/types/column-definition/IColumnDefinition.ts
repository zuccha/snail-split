import { ITimeCategory } from '../time-category'
import { ITimeFrame } from '../time-frame'


interface IColumnDefinitionDelta {
  type: 'delta'
  title: string
  leftTimeCategory: ITimeCategory
  rightTimeCategory: ITimeCategory
  timeFrame: ITimeFrame
}

interface IColumnDefinitionTime {
  type: 'time'
  title: string
  timeCategory: ITimeCategory
  timeFrame: ITimeFrame
}

type IColumnDefinition = IColumnDefinitionDelta | IColumnDefinitionTime


export default IColumnDefinition

export {
  IColumnDefinitionDelta,
  IColumnDefinitionTime,
}
