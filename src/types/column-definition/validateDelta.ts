import fatal from '../../utils/fatal'
import * as S from '../string'
import * as TimeCategory from '../time-category'
import * as TimeFrame from '../time-frame'
import { ColumnDefinitionDelta } from './ColumnDefinition'
import defaultColumnDefinitionDelta from './defaultColumnDefinitionDelta'


const validateDelta = (
  maybeColumnDefinition: unknown,
  defaultValue = defaultColumnDefinitionDelta,
  property = 'columnDefinitionDelta',
): ColumnDefinitionDelta => {
  if (maybeColumnDefinition === undefined) {
    return defaultValue
  }

  if (!maybeColumnDefinition || typeof maybeColumnDefinition !== 'object') {
    fatal(
      `Failed to validate ${property},`
      + `a delta column definition was expected but "${maybeColumnDefinition}" was found instead`,
    )
  }

  const maybeColumnDefinitionRecord = maybeColumnDefinition as { [key: string]: unknown }

  return {
    type: 'delta',
    title: S.validate(
      maybeColumnDefinitionRecord.title,
      defaultValue.title,
      `${property}.title`,
    ),
    leftTimeCategory: TimeCategory.validate(
      maybeColumnDefinitionRecord.leftTimeCategory,
      defaultValue.leftTimeCategory,
      `${property}.leftTimeCategory`,
    ),
    rightTimeCategory: TimeCategory.validate(
      maybeColumnDefinitionRecord.rightTimeCategory,
      defaultValue.rightTimeCategory,
      `${property}.rightTimeCategory`,
    ),
    timeFrame: TimeFrame.validate(
      maybeColumnDefinitionRecord.timeFrame,
      defaultValue.timeFrame,
      `${property}.timeFrame`,
    ),
  }
}


export default validateDelta
