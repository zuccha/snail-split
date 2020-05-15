import fatal from '../../utils/fatal'
import ColumnDefinition from './ColumnDefinition'
import defaultColumnDefinitionTime from './defaultColumnDefinitionTime'
import validateDelta from './validateDelta'
import validateTime from './validateTime'
import defaultColumnDefinitionDelta from './defaultColumnDefinitionDelta'


const validate = (
  maybeColumnDefinition: unknown,
  defaultValue = defaultColumnDefinitionTime,
  property = 'columnDefinition',
): ColumnDefinition => {
  if (maybeColumnDefinition === undefined) {
    return defaultValue
  }

  if (!maybeColumnDefinition || typeof maybeColumnDefinition !== 'object') {
    fatal(
      `Failed to validate ${property}, `
      + `a column definition was expected but "${maybeColumnDefinition}" was found instead`,
    )
  }

  const maybeColumnDefinitionRecord = maybeColumnDefinition as { [key: string]: unknown }

  if (maybeColumnDefinitionRecord.type === 'delta') {
    return validateDelta(
      maybeColumnDefinition,
      defaultColumnDefinitionDelta,
      property,
    )
  }

  if (maybeColumnDefinitionRecord.type === 'time') {
    return validateTime(
      maybeColumnDefinition,
      defaultColumnDefinitionTime,
      property,
    )
  }

  return fatal(
    `Failed to validate ${property},`
    + `a column definition was expected but "${maybeColumnDefinition}" was found instead`,
  )
}


export default validate
