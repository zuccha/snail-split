import { validateString } from '../string'
import { validateTimeCategory } from '../time-category'
import { validateTimeFrame } from '../time-frame'
import { IColumnDefinitionDelta } from './IColumnDefinition'
import defaultColumnDefinitionDelta from './defaultColumnDefinitionDelta'


const validateColumnDefinitionDelta = (
  maybeColumnDefinition: unknown,
  defaultValue = defaultColumnDefinitionDelta,
): IColumnDefinitionDelta => {
  if (!maybeColumnDefinition || typeof maybeColumnDefinition !== 'object') {
    return defaultValue
  }

  const maybeColumnDefinitionRecord = maybeColumnDefinition as { [key: string]: unknown }

  return {
    type: 'delta',
    title: validateString(
      maybeColumnDefinitionRecord.title,
      defaultValue.title,
    ),
    leftTimeCategory: validateTimeCategory(
      maybeColumnDefinitionRecord.leftTimeCategory,
      defaultValue.leftTimeCategory,
    ),
    rightTimeCategory: validateTimeCategory(
      maybeColumnDefinitionRecord.rightTimeCategory,
      defaultValue.rightTimeCategory,
    ),
    timeFrame: validateTimeFrame(
      maybeColumnDefinitionRecord.timeFrame,
      defaultValue.timeFrame,
    ),
  }
}


export default validateColumnDefinitionDelta
