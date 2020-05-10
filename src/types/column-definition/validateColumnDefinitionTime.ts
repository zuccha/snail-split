import { validateString } from '../string'
import { validateTimeCategory } from '../time-category'
import { validateTimeFrame } from '../time-frame'
import { IColumnDefinitionTime } from './IColumnDefinition'
import defaultColumnDefinitionTime from './defaultColumnDefinitionTime'


const validateColumnDefinitionTime = (
  maybeColumnDefinition: unknown,
  defaultValue = defaultColumnDefinitionTime,
): IColumnDefinitionTime => {
  if (!maybeColumnDefinition || typeof maybeColumnDefinition !== 'object') {
    return defaultValue
  }

  const maybeColumnDefinitionRecord = maybeColumnDefinition as { [key: string]: unknown }

  return {
    type: 'time',
    title: validateString(
      maybeColumnDefinitionRecord.title,
      defaultValue.title,
    ),
    timeCategory: validateTimeCategory(
      maybeColumnDefinitionRecord.timeCategory,
      defaultValue.timeCategory,
    ),
    timeFrame: validateTimeFrame(
      maybeColumnDefinitionRecord.timeFrame,
      defaultValue.timeFrame,
    ),
  }
}


export default validateColumnDefinitionTime
