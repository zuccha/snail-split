import * as S from '../string'
import * as TimeCategory from '../time-category'
import * as TimeFrame from '../time-frame'
import { ColumnDefinitionTime } from './ColumnDefinition'
import defaultColumnDefinitionTime from './defaultColumnDefinitionTime'


const validateTime = (
  maybeColumnDefinition: unknown,
  defaultValue = defaultColumnDefinitionTime,
): ColumnDefinitionTime => {
  if (!maybeColumnDefinition || typeof maybeColumnDefinition !== 'object') {
    return defaultValue
  }

  const maybeColumnDefinitionRecord = maybeColumnDefinition as { [key: string]: unknown }

  return {
    type: 'time',
    title: S.validate(
      maybeColumnDefinitionRecord.title,
      defaultValue.title,
    ),
    timeCategory: TimeCategory.validate(
      maybeColumnDefinitionRecord.timeCategory,
      defaultValue.timeCategory,
    ),
    timeFrame: TimeFrame.validate(
      maybeColumnDefinitionRecord.timeFrame,
      defaultValue.timeFrame,
    ),
  }
}


export default validateTime
