import fatal from '../../utils/fatal'
import * as S from '../string'
import * as TimeCategory from '../time-category'
import * as TimeFrame from '../time-frame'
import { ColumnDefinitionTime } from './ColumnDefinition'
import defaultColumnDefinitionTime from './defaultColumnDefinitionTime'


const validateTime = (
  maybeColumnDefinition: unknown,
  defaultValue = defaultColumnDefinitionTime,
  property = 'columnDefinitionTime',
): ColumnDefinitionTime => {
  if (maybeColumnDefinition === undefined) {
    return defaultValue
  }

  if (!maybeColumnDefinition || typeof maybeColumnDefinition !== 'object') {
    fatal(
      `Failed to validate ${property},`
      + `a time column definition was expected but "${maybeColumnDefinition}" was found instead`,
    )
  }

  const maybeColumnDefinitionRecord = maybeColumnDefinition as { [key: string]: unknown }

  return {
    type: 'time',
    title: S.validate(
      maybeColumnDefinitionRecord.title,
      defaultValue.title,
      `${property}.title`,
    ),
    timeCategory: TimeCategory.validate(
      maybeColumnDefinitionRecord.timeCategory,
      defaultValue.timeCategory,
      `${property}.timeCategory`,
    ),
    timeFrame: TimeFrame.validate(
      maybeColumnDefinitionRecord.timeFrame,
      defaultValue.timeFrame,
      `${property}.timeFrame`,
    ),
  }
}


export default validateTime
