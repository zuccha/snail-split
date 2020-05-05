import { ITimeCategory, ITimeFrame } from '../time'


interface IColumnDefinitionDelta {
  type: 'delta'
  title: string
  leftTimeCategory: ITimeCategory
  rightTimeCategory: ITimeCategory
  timeFrame: ITimeFrame
}

interface IColumnDefinitionText {
  type: 'text'
  title: string
}

interface IColumnDefinitionTime {
  type: 'time'
  title: string
  timeCategory: ITimeCategory
  timeFrame: ITimeFrame
}

type IColumnDefinition =
  IColumnDefinitionDelta
  | IColumnDefinitionText
  | IColumnDefinitionTime


export default IColumnDefinition

export {
  IColumnDefinitionDelta,
  IColumnDefinitionText,
  IColumnDefinitionTime,
}
