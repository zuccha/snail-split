import { validateString } from '../string'
import * as TimeCategory from '../time-category'
import * as TimeFrame from '../time-frame'
import { ColumnDefinitionDelta } from './ColumnDefinition'
import defaultColumnDefinitionDelta from './defaultColumnDefinitionDelta'


const validateDelta = (
  maybeColumnDefinition: unknown,
  defaultValue = defaultColumnDefinitionDelta,
): ColumnDefinitionDelta => {
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
    leftTimeCategory: TimeCategory.validate(
      maybeColumnDefinitionRecord.leftTimeCategory,
      defaultValue.leftTimeCategory,
    ),
    rightTimeCategory: TimeCategory.validate(
      maybeColumnDefinitionRecord.rightTimeCategory,
      defaultValue.rightTimeCategory,
    ),
    timeFrame: TimeFrame.validate(
      maybeColumnDefinitionRecord.timeFrame,
      defaultValue.timeFrame,
    ),
  }
}


export default validateDelta
