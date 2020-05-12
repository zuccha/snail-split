import { validateString } from '../string'
import * as TimeCategory from '../time-category'
import * as TimeFrame from '../time-frame'
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


export default validateColumnDefinitionTime
